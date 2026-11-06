/* =========================================================
   ASCENSOR SVG — Sistema Subterráneo (8 niveles)
   Mueve la cabina según el nivel .sys-level visible,
   actualiza el LED (00–07), abre puertas al atracar.
   [NUEVO] Flechas ▲▼ de dirección + sonido sintetizado.
   ========================================================= */
(function () {
  var initialized = false;

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

    /* [NUEVO] CSS de flechas y botón de sonido (se inyecta solo) */
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
        '.elevator-mute{font-family:"JetBrains Mono",monospace;font-size:.55rem;letter-spacing:.15em;' +
        'padding:5px 9px;border:1px solid var(--sys-border);background:var(--sys-bg);color:var(--sys-muted);' +
        'cursor:pointer;transition:all .25s ease}' +
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

    /* [NUEVO] Sonido sintetizado (Web Audio, sin archivos) */
    var soundOn = localStorage.getItem('elevSnd') !== 'off';
    var actx = null, humOsc = null, humGain = null;

    function audioCtx() {
      if (!soundOn) return null;
      if (!actx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        actx = new AC();
      }
      if (actx.state === 'suspended') actx.resume();
      return actx.state === 'running' ? actx : null;
    }
    /* Los navegadores exigen un gesto antes de sonar: primer clic/tcla desbloquea */
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
      window.addEventListener(ev, function () { if (soundOn) audioCtx(); }, { passive: true });
    });

    function tone(freq, at, dur, type, vol) {
      var o = actx.createOscillator(), g = actx.createGain();
      o.type = type || 'sine'; o.frequency.value = freq;
      g.gain.setValueAtTime(0, at);
      g.gain.linearRampToValueAtTime(vol || 0.16, at + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
      o.connect(g); g.connect(actx.destination);
      o.start(at); o.stop(at + dur + 0.05);
    }
    function chime(dir) {              /* “din-don” clásico al atracar */
      if (!audioCtx()) return;
      var t = actx.currentTime;
      if (dir === 'up') { tone(659.25, t, 0.35); tone(880, t + 0.18, 0.55); }   /* sube:  E5→A5 */
      else              { tone(880,    t, 0.35); tone(659.25, t + 0.18, 0.55); } /* baja:  A5→E5 */
    }
    function tick() {                  /* tic de botón del panel */
      if (!audioCtx()) return;
      tone(1318.5, actx.currentTime, 0.07, 'square', 0.05);
    }
    function humStart() {              /* zumbido suave del motor */
      if (!audioCtx() || humOsc) return;
      humOsc = actx.createOscillator(); humGain = actx.createGain();
      var f = actx.createBiquadFilter();
      humOsc.type = 'sawtooth'; humOsc.frequency.value = 55;
      f.type = 'lowpass'; f.frequency.value = 160;
      humGain.gain.setValueAtTime(0, actx.currentTime);
      humGain.gain.linearRampToValueAtTime(0.02, actx.currentTime + 0.5);
      humOsc.connect(f); f.connect(humGain); humGain.connect(actx.destination);
      humOsc.start();
    }
    function humStop() {
      if (!humOsc || !actx) return;
      var t = actx.currentTime;
      humGain.gain.linearRampToValueAtTime(0, t + 0.3);
      humOsc.stop(t + 0.35);
      humOsc = null; humGain = null;
    }

    /* [NUEVO] Botón ♪ ON/OFF (queda a la izquierda del riel) */
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
      if (!soundOn) { humStop(); } else { if (audioCtx()) tick(); }
    });
    var container = document.getElementById('elevatorContainer');
    if (container) container.appendChild(muteBtn);

    var total = levels.length;
    var last = total - 1;
    var ticking = false;

    /* [NUEVO] Estado de movimiento y sonido */
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

      /* [NUEVO] Dirección + flechitas ▲▼ mientras hay movimiento */
      var delta = progress - lastProgress;
      if (Math.abs(delta) > 0.004) {
        lastMoveDir = delta > 0 ? 'down' : 'up';
        cabin.classList.add(lastMoveDir === 'down' ? 'traveling-down' : 'traveling-up');
        cabin.classList.remove(lastMoveDir === 'down' ? 'traveling-up' : 'traveling-down');
        humStart();
        clearTimeout(moveTimer);
        moveTimer = setTimeout(function () {
          cabin.classList.remove('traveling-up', 'traveling-down');
          humStop();
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

      /* [NUEVO] “Din-don” solo al atracar en un piso DISTINTO al anterior */
      if (isDocked && lastDockedFloor !== -1 && currentFloor !== lastDockedFloor) {
        chime(lastMoveDir);
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

    // Clic en un marcador → viaje suave a ese nivel (+ tic de botón)
    markers.forEach(function (marker, i) {
      marker.addEventListener('click', function () {
        tick(); /* [NUEVO] */
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
