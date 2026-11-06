/* =========================================================
   ASCENSOR SVG — Sistema Subterráneo (8 niveles)
   Mueve la cabina según el nivel .sys-level visible,
   actualiza el LED (00–07), abre puertas al atracar.
   [NUEVO] Flechas ▲▼ + SONIDOS MP3 REALES:
     · moving.mp3 → loop con fade mientras el ascensor viaja
     · doors.mp3  → al abrirse las puertas al atracar
   ========================================================= */
(function () {
  var initialized = false;

  /* [NUEVO] CONFIGURACIÓN DE SONIDO — ajusta aquí sin tocar más nada */
  var SOUND = {
    moveURL:     'assets/sounds/moving.mp3', // tu mp3 de cadenas/motor
    doorsURL:    'assets/sounds/doors.mp3',  // tu mp3 de apertura de puertas
    moveVolume:  0.18,  // 0..1 — volumen del viaje
    doorsVolume: 0.40,  // 0..1 — volumen de las puertas
    moveFadeIn:  0.4,   // segundos de entrada del sonido de viaje
    moveFadeOut: 0.5,   // segundos de salida al detenerse
    doorsOffset: 0,     // si tu mp3 de puertas tiene silencio al inicio, súbelo (ej: 0.3)
    moveOffset:  0      // igual, para el mp3 de viaje
  };

  function init() {
    if (initialized) return;
    var cabin = document.getElementById('elevatorCabin');
    var shaft = document.getElementById('elevatorShaft');
    var display = document.getElementById('svgFloorDisplay');
    var markers = Array.prototype.slice.call(document.querySelectorAll('.elevator-container .floor-marker'));
    var levels = Array.prototype.slice.call(document.querySelectorAll('.subterranean-system .sys-level'));

    if (!cabin || !shaft || !display || levels.length === 0) {
      console.warn('[Ascensor] Faltan elementos:', {
        cabina: !!cabin, riel: !!shaft, display: !!display, niveles: levels.length
      });
      return;
    }

    initialized = true;
    console.log('[Ascensor] Listo — ' + levels.length + ' pisos detectados');

    /* [NUEVO] CSS de flechas y botón ♪ (se inyecta solo; el botón
       queda DEBAJO del riel, centrado: la cabina ya no lo tapa) */
    (function injectStyles() {
      if (document.getElementById('elevator-fx-styles')) return;
      var s = document.createElement('style');
      s.id = 'elevator-fx-styles';
      s.textContent =
        '.svg-arrow{opacity:0;transition:opacity .25s ease;fill:var(--led-on)}' +
        '.elevator-cabin.traveling-up .svg-arrow-up,' +
        '.elevator-cabin.traveling-down .svg-arrow-down{opacity:1;animation:arrowBlink .6s steps(1,end) infinite}' +
        '.elevator-cabin.doors-open .svg-arrow{opacity:0!important}' +
        '@keyframes arrowBlink{0%,100%{opacity:1}50%{opacity:.15}}' +
        '.elevator-mute{position:absolute;top:calc(100% + 14px);left:50%;transform:translateX(-50%);' +
        'z-index:5;font-family:"JetBrains Mono",monospace;font-size:.55rem;letter-spacing:.15em;' +
        'padding:5px 9px;border:1px solid var(--sys-border);background:var(--sys-bg);color:var(--sys-muted);' +
        'cursor:pointer;transition:all .25s ease;box-shadow:0 2px 8px rgba(154,141,120,.12);white-space:nowrap}' +
        '.elevator-mute:hover{border-color:var(--sys-accent);color:var(--sys-accent)}' +
        '.elevator-mute.off{color:var(--sys-border)}';
      document.head.appendChild(s);
    })();

    /* [NUEVO] Flechas ▲▼ dentro del display del SVG (sin tocar HTML) */
    (function injectArrows() {
      var svg = cabin.querySelector('svg');
      if (!svg || svg.querySelector('.svg-arrow')) return;
      var NS = 'http://www.w3.org/2000/svg';
      var up = document.createElementNS(NS, 'path');
      up.setAttribute('class', 'svg-arrow svg-arrow-up');
      up.setAttribute('d', 'M30 27 L35 20 L40 27 Z');      /* ▲ izquierda del LED */
      var down = document.createElementNS(NS, 'path');
      down.setAttribute('class', 'svg-arrow svg-arrow-down');
      down.setAttribute('d', 'M80 20 L90 20 L85 27 Z');    /* ▼ derecha del LED */
      svg.appendChild(up);
      svg.appendChild(down);
    })();

    /* =====================================================
       [NUEVO] MOTOR DE AUDIO — tus dos MP3 reales
       ===================================================== */
    var soundOn = localStorage.getItem('elevSnd') !== 'off';
    var actx = null, master = null;
    var moveBuf = null, doorsBuf = null;
    var moveSrc = null, moveGain = null;
    var soundsReady = false;

    function ensureCtx() {
      if (!soundOn) return null;
      if (!actx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        actx = new AC();
        master = actx.createGain();
        master.gain.value = 1;
        master.connect(actx.destination);
      }
      if (actx.state === 'suspended') actx.resume();
      return actx;
    }

    /* Los navegadores exigen un gesto (clic/tecla) antes de sonar */
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
      window.addEventListener(ev, function () { if (soundOn) ensureCtx(); }, { passive: true });
    });

    /* Precarga de ambos MP3 (puede fallar en silencio si falta el archivo) */
    (function preload() {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!actx) {
        actx = new AC();
        master = actx.createGain();
        master.gain.value = 1;
        master.connect(actx.destination);
      }
      function fetchBuffer(url, cb) {
        fetch(url)
          .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.arrayBuffer(); })
          .then(function (ab) { return actx.decodeAudioData(ab); })
          .then(function (buf) { cb(null, buf); })
          .catch(function (err) {
            console.warn('[Ascensor] No se pudo cargar el sonido:', url, err && err.message);
            cb(err);
          });
      }
      var pending = 2;
      function done() { pending -= 1; if (pending === 0) { soundsReady = true; console.log('[Ascensor] Sonidos cargados'); } }
      fetchBuffer(SOUND.moveURL,  function (e, b) { if (!e) moveBuf = b;  done(); });
      fetchBuffer(SOUND.doorsURL, function (e, b) { if (!e) doorsBuf = b; done(); });
    })();

    /* Sonido de VIAJE: loop con fade in/out (cadenas, motor…) */
    function moveSoundStart() {
      if (!ensureCtx() || !moveBuf || moveSrc) return;
      moveSrc = actx.createBufferSource();
      moveSrc.buffer = moveBuf;
      moveSrc.loop = true;
      moveGain = actx.createGain();
      moveGain.gain.setValueAtTime(0.0001, actx.currentTime);
      moveGain.gain.linearRampToValueAtTime(SOUND.moveVolume, actx.currentTime + SOUND.moveFadeIn);
      moveSrc.connect(moveGain); moveGain.connect(master);
      moveSrc.start(actx.currentTime, SOUND.moveOffset);
    }
    function moveSoundStop() {
      if (!moveSrc || !actx) return;
      var s = moveSrc, g = moveGain;
      moveSrc = null; moveGain = null;
      try {
        g.gain.cancelScheduledValues(actx.currentTime);
        g.gain.setValueAtTime(g.gain.value, actx.currentTime);
        g.gain.linearRampToValueAtTime(0.0001, actx.currentTime + SOUND.moveFadeOut);
        s.stop(actx.currentTime + SOUND.moveFadeOut + 0.05);
      } catch (e) { /* noop */ }
    }

    /* Sonido de PUERTAS: una sola vez al abrirse al atracar */
    function doorsSound() {
      if (!ensureCtx() || !doorsBuf) return;
      var src = actx.createBufferSource();
      src.buffer = doorsBuf;
      var g = actx.createGain();
      g.gain.value = SOUND.doorsVolume;
      src.connect(g); g.connect(master);
      src.start(actx.currentTime, SOUND.doorsOffset);
    }

    /* [NUEVO] Botón ♪ ON/OFF (persistente) */
    var muteBtn = document.createElement('button');
    muteBtn.type = 'button';
    muteBtn.className = 'elevator-mute' + (soundOn ? '' : ' off');
    muteBtn.textContent = soundOn ? '♪ ON' : '♪ OFF';
    muteBtn.setAttribute('aria-label', 'Sonido del ascensor');
    muteBtn.addEventListener('click', function () {
      soundOn = !soundOn;
      localStorage.setItem('elevSnd', soundOn ? 'on' : 'off');
      muteBtn.textContent = soundOn ? '♪ ON' : '♪ OFF';
      muteBtn.classList.toggle('off', !soundOn);
      if (!soundOn) moveSoundStop();
      else ensureCtx();
    });
    var container = document.getElementById('elevatorContainer');
    if (container) container.appendChild(muteBtn);

    var total = levels.length;
    var last = total - 1;
    var ticking = false;

    /* [NUEVO] Estado de movimiento */
    var lastProgress = 0;
    var moveTimer = null;
    var lastDockedFloor = -1;
    var lastMoveDir = 'down';

    function update() {
      var viewCenter = window.scrollY + window.innerHeight / 2;

      // Centro vertical (en coordenadas del documento) de cada nivel
      var centers = levels.map(function (l) {
        return l.getBoundingClientRect().top + window.scrollY + l.offsetHeight / 2;
      });

      // Progreso continuo 0..last según el centro de la ventana
      var progress;
      if (Math.sign(centers[0] - viewCenter) !== -1) {
        progress = 0;                     // todavía sobre el piso 0 (GROUND)
      } else if (Math.sign(centers[last] - viewCenter) !== 1) {
        progress = last;                  // ya pasó el último piso (perfil, footer)
      } else {
        var i = 0;
        while (Math.sign(centers[i + 1] - viewCenter) === -1) i += 1;
        var span = Math.max(centers[i + 1] - centers[i], 0.0001);
        var t = Math.min(Math.max((viewCenter - centers[i]) / span, 0), 1);
        progress = i + t;
      }

      // Mover la cabina dentro del riel
      var maxTranslate = Math.max(0, shaft.offsetHeight - cabin.offsetHeight);
      cabin.style.transform = 'translate(-50%, ' + ((progress / last) * maxTranslate) + 'px)';

      // Piso actual → LED del SVG (00 a -07)
      var currentFloor = Math.min(Math.max(Math.round(progress), 0), last);
      display.textContent = currentFloor === 0 ? '00' : '-0' + currentFloor;

      /* [NUEVO] Dirección + flechitas ▲▼ + sonido de viaje */
      var delta = progress - lastProgress;
      if (Math.abs(delta) > 0.004) {
        lastMoveDir = delta > 0 ? 'down' : 'up';
        cabin.classList.add(lastMoveDir === 'down' ? 'traveling-down' : 'traveling-up');
        cabin.classList.remove(lastMoveDir === 'down' ? 'traveling-up' : 'traveling-down');
        moveSoundStart();
        clearTimeout(moveTimer);
        moveTimer = setTimeout(function () {
          cabin.classList.remove('traveling-up', 'traveling-down');
          moveSoundStop();
        }, 300);
      }
      lastProgress = progress;

      // ¿Atracado? Se mide sobre la TARJETA del piso (no sobre la fila),
      // porque la tarjeta del piso 00 va pegada al título, arriba de su fila
      var cardEl = levels[currentFloor].querySelector('.sys-content-card');
      var isDocked = false;
      if (cardEl) {
        var cr = cardEl.getBoundingClientRect();
        var dist = Math.abs((cr.top + cr.height / 2) - window.innerHeight / 2);
        isDocked = Math.sign(dist - window.innerHeight * 0.13) === -1;
      }
      // Vestíbulo: con el título a la vista, las puertas siguen abiertas
      if (viewCenter <= centers[0]) isDocked = true;

      /* [NUEVO] Sonido de puertas SOLO al atracar en un piso distinto */
      if (isDocked && lastDockedFloor !== -1 && currentFloor !== lastDockedFloor) {
        doorsSound();
      }
      if (isDocked) lastDockedFloor = currentFloor;

      markers.forEach(function (m, idx) { m.classList.toggle('active', idx === currentFloor); });
      levels.forEach(function (l, idx) { l.classList.toggle('floor-active', isDocked && idx === currentFloor); });
      cabin.classList.toggle('doors-open', isDocked);
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () { update(); ticking = false; });
        ticking = true;
      }
    }

    // Clic en un marcador → viaje suave a ese nivel
    markers.forEach(function (marker, i) {
      marker.addEventListener('click', function () {
        levels[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { window.requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('load', update);
    update();
  }

  // Triple arranque para sobrevivir a cualquier orden de carga
  init();
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
})();
