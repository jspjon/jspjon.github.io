/* =========================================================
   ASCENSOR SVG — Sistema Subterráneo (8 niveles)
   Cabina alta + 2 pantallas (pisos / metros).
   Interior iluminado: barra de luz de techo, degradado
   cálido, viñeta de paredes y reflejo en el piso.
   Piezas identificadas por GEOMETRÍA.
   ========================================================= */
(function () {
  var initialized = false;

  /* CONFIGURACIÓN DE SONIDO */
  var SOUND = {
    doorsURL:    'assets/sounds/doors.mp3',
    doorsVolume: 0.20,
    doorsOffset: 0
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

    document.documentElement.style.setProperty('--cabin-width', '84px');

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
        '#svgDepthDisplay{fill:rgba(255,179,71,.65);font-family:"JetBrains Mono",monospace;' +
        'font-weight:600;font-size:12px;letter-spacing:1px}' +
        '.light-strip{animation:stripPulse 3.2s ease-in-out infinite}' +
        '@keyframes stripPulse{0%,100%{opacity:.82}50%{opacity:1}}' +
        '.elevator-mute{position:absolute;top:calc(100% + 12px);left:50%;transform:translateX(-50%);' +
        'z-index:5;font-family:"JetBrains Mono",monospace;font-size:.5rem;letter-spacing:.12em;' +
        'padding:3px 7px;border:1px solid #d9d3c6;background:#faf9f7;color:#817766;' +
        'cursor:pointer;transition:all .25s ease;box-shadow:0 2px 8px rgba(0,0,0,.18);white-space:nowrap}' +
        '.elevator-mute:hover{border-color:var(--led-on);color:var(--led-on)}' +
        '.elevator-mute.off{color:#b9b09c}' +
        '.subterranean-system .sys-level .sys-content-card .sys-access{' +
        'right:26px;top:50%;width:46px;height:46px;border-radius:50%;display:grid;place-items:center;' +
        'border:1px solid var(--sys-border);background:var(--sys-bg);color:var(--sys-accent);' +
        'font-size:1rem;transform:translateY(-50%) translateX(-10px);' +
        'box-shadow:0 2px 10px -6px rgba(42,42,42,.25)}' +
        '.subterranean-system .sys-level .sys-content-card:hover .sys-access{' +
        'opacity:1;transform:translateY(-50%) translateX(0) scale(1.05);' +
        'background:var(--led-on);color:#191713;border-color:var(--led-on);' +
        'box-shadow:0 0 20px rgba(255,179,71,.4)}' +
        '.subterranean-system .sys-level.floor-active .sys-content-card .sys-access{' +
        'opacity:1;transform:translateY(-50%)}' +
        '@media (max-width:768px){.subterranean-system .sys-level .sys-content-card .sys-access{display:none}}';
      document.head.appendChild(s);
    })();

    /* Flechas ▲▼ (dentro de la pantalla de pisos) */
    (function injectArrows() {
      var svg = cabin.querySelector('svg');
      if (!svg || svg.querySelector('.svg-arrow')) return;
      var NS = 'http://www.w3.org/2000/svg';
      var up = document.createElementNS(NS, 'path');
      up.setAttribute('class', 'svg-arrow svg-arrow-up');
      up.setAttribute('d', 'M27 25 L32 18 L37 25 Z');
      var down = document.createElementNS(NS, 'path');
      down.setAttribute('class', 'svg-arrow svg-arrow-down');
      down.setAttribute('d', 'M83 18 L93 18 L88 25 Z');
      svg.appendChild(up);
      svg.appendChild(down);
    })();

    /* =====================================================
       Recorte de cabina por GEOMETRÍA
       ===================================================== */
    (function injectScreens() {
      var svg = cabin.querySelector('svg');
      if (!svg || svg.querySelector('#svgDepthDisplay')) return;

      var rects = svg.querySelectorAll('rect');
      var frame = null, backdrop = null, doorL = null, doorR = null;
      var screens = [];

      for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        var x = r.getAttribute('x'), w = r.getAttribute('width');
        if (x === '4' && w === '112') { frame = r; continue; }
        if (x === '24' && w === '72') { screens.push(r); continue; }
        if (x === '16' && w === '88') { backdrop = r; continue; }
        if (w === '44') {
          if (x === '16') doorL = r;
          else if (x === '60') doorR = r;
          continue;
        }
      }

      svg.setAttribute('viewBox', '0 0 120 200');
      if (frame) frame.setAttribute('height', '192');

      if (screens[0]) { screens[0].setAttribute('y', '8'); screens[0].setAttribute('height', '28'); }
      display.setAttribute('y', '29');
      display.style.fontSize = '20px';
      display.style.letterSpacing = '1px';

      if (doorL) { doorL.setAttribute('y', '68'); doorL.setAttribute('height', '118'); }
      if (doorR) { doorR.setAttribute('y', '68'); doorR.setAttribute('height', '118'); }

      var NS = 'http://www.w3.org/2000/svg';
      if (!backdrop) {
        backdrop = document.createElementNS(NS, 'rect');
        backdrop.setAttribute('x', '16');
        backdrop.setAttribute('width', '88');
        backdrop.setAttribute('rx', '3');
        backdrop.setAttribute('fill', '#191919');
        if (doorL) svg.insertBefore(backdrop, doorL);
        else svg.appendChild(backdrop);
      }
      backdrop.setAttribute('y', '68');
      backdrop.setAttribute('height', '118');

      var glow = svg.querySelector('.door-light');
      if (glow) { glow.setAttribute('cy', '127'); glow.setAttribute('ry', '66'); }
      var bulb = svg.querySelector('.cabin-light');
      if (bulb) bulb.parentNode.removeChild(bulb); /* [CAMBIADO] la luz ahora es la barra de techo */

      var metersScreen;
      if (screens[1]) {
        metersScreen = screens[1];
      } else {
        metersScreen = document.createElementNS(NS, 'rect');
        metersScreen.setAttribute('x', '24');
        metersScreen.setAttribute('width', '72');
        metersScreen.setAttribute('rx', '4');
        metersScreen.setAttribute('fill', '#161616');
        metersScreen.setAttribute('stroke', '#3a3a3a');
        svg.appendChild(metersScreen);
      }
      metersScreen.setAttribute('y', '40');
      metersScreen.setAttribute('height', '16');

      var m = document.createElementNS(NS, 'text');
      m.setAttribute('id', 'svgDepthDisplay');
      m.setAttribute('x', '60');
      m.setAttribute('y', '52');
      m.setAttribute('text-anchor', 'middle');
      m.textContent = '±0.0m';
      svg.appendChild(m);
    })();

    /* =====================================================
       [NUEVO] INTERIOR ILUMINADO — estilo cabina real:
       degradado cálido, barra de luz de techo, viñeta
       de paredes, líneas de panel y reflejo en el piso.
       Todo se pinta DEBAJO de las puertas (tapado cerrado).
       ===================================================== */
    (function injectInterior() {
      var svg = cabin.querySelector('svg');
      if (!svg || svg.querySelector('#intBase')) return;

      var NS = 'http://www.w3.org/2000/svg';
      var defs = svg.querySelector('defs');
      if (!defs) {
        defs = document.createElementNS(NS, 'defs');
        svg.insertBefore(defs, svg.firstChild);
      }

      /* Degradado vertical del interior: techo dorado → piso oscuro */
      var intGrad = document.createElementNS(NS, 'linearGradient');
      intGrad.setAttribute('id', 'intGrad');
      intGrad.setAttribute('x1', '0'); intGrad.setAttribute('y1', '0');
      intGrad.setAttribute('x2', '0'); intGrad.setAttribute('y2', '1');
      [[0, '#d9a95e'], [0.18, '#8a6538'], [0.55, '#453117'], [1, '#1c1309']].forEach(function (st) {
        var stop = document.createElementNS(NS, 'stop');
        stop.setAttribute('offset', st[0]);
        stop.setAttribute('stop-color', st[1]);
        intGrad.appendChild(stop);
      });
      defs.appendChild(intGrad);

      /* Viñeta horizontal: paredes que se oscurecen a los lados */
      var intShade = document.createElementNS(NS, 'linearGradient');
      intShade.setAttribute('id', 'intShade');
      intShade.setAttribute('x1', '0'); intShade.setAttribute('y1', '0');
      intShade.setAttribute('x2', '1'); intShade.setAttribute('y2', '0');
      [['0', 'rgba(0,0,0,.55)'], ['0.16', 'rgba(0,0,0,0)'], ['0.84', 'rgba(0,0,0,0)'], ['1', 'rgba(0,0,0,.55)']].forEach(function (st) {
        var stop = document.createElementNS(NS, 'stop');
        stop.setAttribute('offset', st[0]);
        stop.setAttribute('stop-color', st[1]);
        intShade.appendChild(stop);
      });
      defs.appendChild(intShade);

      var doorL = svg.querySelector('.svg-door-left');
      var anchor = doorL || null;

      function add(el) {
        if (anchor) svg.insertBefore(el, anchor);
        else svg.appendChild(el);
      }

      /* Base del interior */
      var base = document.createElementNS(NS, 'rect');
      base.setAttribute('id', 'intBase');
      base.setAttribute('x', '16'); base.setAttribute('y', '68');
      base.setAttribute('width', '88'); base.setAttribute('height', '118');
      base.setAttribute('fill', 'url(#intGrad)');
      add(base);

      /* Resplandor bajo la barra de luz */
      var bloom1 = document.createElementNS(NS, 'ellipse');
      bloom1.setAttribute('cx', '60'); bloom1.setAttribute('cy', '79');
      bloom1.setAttribute('rx', '36'); bloom1.setAttribute('ry', '11');
      bloom1.setAttribute('fill', 'rgba(255,224,150,.32)');
      add(bloom1);

      /* Barra de luz de techo */
      var strip = document.createElementNS(NS, 'rect');
      strip.setAttribute('class', 'light-strip');
      strip.setAttribute('x', '38'); strip.setAttribute('y', '73');
      strip.setAttribute('width', '44'); strip.setAttribute('height', '5');
      strip.setAttribute('rx', '2.5');
      strip.setAttribute('fill', '#ffedbe');
      add(strip);

      /* Segundo halo (luz que baja por la cabina) */
      var bloom2 = document.createElementNS(NS, 'ellipse');
      bloom2.setAttribute('cx', '60'); bloom2.setAttribute('cy', '94');
      bloom2.setAttribute('rx', '30'); bloom2.setAttribute('ry', '14');
      bloom2.setAttribute('fill', 'rgba(255,214,130,.15)');
      add(bloom2);

      /* Líneas de panel en las paredes */
      ['28', '36', '84', '92'].forEach(function (lx) {
        var l = document.createElementNS(NS, 'line');
        l.setAttribute('x1', lx); l.setAttribute('x2', lx);
        l.setAttribute('y1', '82'); l.setAttribute('y2', '166');
        l.setAttribute('stroke', 'rgba(255,220,160,.09)');
        l.setAttribute('stroke-width', '1');
        add(l);
      });

      /* Reflejo de la luz en el piso */
      var refl1 = document.createElementNS(NS, 'ellipse');
      refl1.setAttribute('cx', '60'); refl1.setAttribute('cy', '181');
      refl1.setAttribute('rx', '32'); refl1.setAttribute('ry', '6');
      refl1.setAttribute('fill', 'rgba(255,214,130,.15)');
      add(refl1);

      var refl2 = document.createElementNS(NS, 'ellipse');
      refl2.setAttribute('cx', '60'); refl2.setAttribute('cy', '180');
      refl2.setAttribute('rx', '19'); refl2.setAttribute('ry', '3.5');
      refl2.setAttribute('fill', 'rgba(255,214,130,.22)');
      add(refl2);

      /* Viñeta de paredes (encima de todo el interior) */
      var shade = document.createElementNS(NS, 'rect');
      shade.setAttribute('x', '16'); shade.setAttribute('y', '68');
      shade.setAttribute('width', '88'); shade.setAttribute('height', '118');
      shade.setAttribute('fill', 'url(#intShade)');
      add(shade);
    })();

    var depthDisplay = document.getElementById('svgDepthDisplay');

    /* =====================================================
       MOTOR DE AUDIO — doors.mp3
       ===================================================== */
    var soundOn = true;
    try { soundOn = localStorage.getItem('elevSnd') !== 'off'; } catch (e) { /* modo privado */ }
    var actx = null, master = null, doorsBuf = null;

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
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
      window.addEventListener(ev, function () { if (soundOn) ensureCtx(); }, { passive: true });
    });

    (function preload() {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC || !SOUND.doorsURL) return;
      if (!actx) {
        actx = new AC();
        master = actx.createGain();
        master.gain.value = 1;
        master.connect(actx.destination);
      }
      fetch(SOUND.doorsURL)
        .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.arrayBuffer(); })
        .then(function (ab) { return actx.decodeAudioData(ab); })
        .then(function (buf) { doorsBuf = buf; console.log('[Ascensor] Sonido de puertas cargado'); })
        .catch(function (err) {
          console.warn('[Ascensor] No se pudo cargar doors.mp3:', err && err.message);
        });
    })();

    function doorsSound() {
      if (!ensureCtx() || !doorsBuf) return;
      var src = actx.createBufferSource();
      src.buffer = doorsBuf;
      var g = actx.createGain();
      g.gain.value = SOUND.doorsVolume;
      src.connect(g); g.connect(master);
      src.start(actx.currentTime, SOUND.doorsOffset);
    }

    /* Botón ♪ ON/OFF (persistente) */
    var muteBtn = document.createElement('button');
    muteBtn.type = 'button';
    muteBtn.className = 'elevator-mute' + (soundOn ? '' : ' off');
    muteBtn.textContent = soundOn ? '♪ ON' : '♪ OFF';
    muteBtn.setAttribute('aria-label', 'Sonido del ascensor');
    muteBtn.addEventListener('click', function () {
      soundOn = !soundOn;
      try { localStorage.setItem('elevSnd', soundOn ? 'on' : 'off'); } catch (e) { /* noop */ }
      muteBtn.textContent = soundOn ? '♪ ON' : '♪ OFF';
      muteBtn.classList.toggle('off', !soundOn);
      if (soundOn) ensureCtx();
    });
    var container = document.getElementById('elevatorContainer');
    if (container) container.appendChild(muteBtn);

    var total = levels.length;
    var last = total - 1;
    var ticking = false;

    var lastProgress = 0;
    var moveTimer = null;
    var lastDockedFloor = -1;
    var lastMoveDir = 'down';

    function update() {
      var viewCenter = window.scrollY + window.innerHeight / 2;

      var centers = levels.map(function (l) {
        return l.getBoundingClientRect().top + window.scrollY + l.offsetHeight / 2;
      });

      var progress;
      if (Math.sign(centers[0] - viewCenter) !== -1) {
        progress = 0;
      } else if (Math.sign(centers[last] - viewCenter) !== 1) {
        progress = last;
      } else {
        var i = 0;
        while (Math.sign(centers[i + 1] - viewCenter) === -1) i += 1;
        var span = Math.max(centers[i + 1] - centers[i], 0.0001);
        var t = Math.min(Math.max((viewCenter - centers[i]) / span, 0), 1);
        progress = i + t;
      }

      var maxTranslate = Math.max(0, shaft.offsetHeight - cabin.offsetHeight);
      cabin.style.transform = 'translate(-50%, ' + ((progress / last) * maxTranslate) + 'px)';

      var currentFloor = Math.min(Math.max(Math.round(progress), 0), last);
      display.textContent = currentFloor === 0 ? '00' : '-0' + currentFloor;

      var depthM = (progress / last) * 100;
      depthDisplay.textContent = progress === 0 ? '±0.0m' : '−' + depthM.toFixed(1) + 'm';

      var delta = progress - lastProgress;
      if (Math.abs(delta) > 0.004) {
        lastMoveDir = delta > 0 ? 'down' : 'up';
        cabin.classList.add(lastMoveDir === 'down' ? 'traveling-down' : 'traveling-up');
        cabin.classList.remove(lastMoveDir === 'down' ? 'traveling-up' : 'traveling-down');
        clearTimeout(moveTimer);
        moveTimer = setTimeout(function () {
          cabin.classList.remove('traveling-up', 'traveling-down');
        }, 300);
      }
      lastProgress = progress;

      var cardEl = levels[currentFloor].querySelector('.sys-content-card');
      var isDocked = false;
      if (cardEl) {
        var cr = cardEl.getBoundingClientRect();
        var dist = Math.abs((cr.top + cr.height / 2) - window.innerHeight / 2);
        isDocked = Math.sign(dist - window.innerHeight * 0.13) === -1;
      }
      if (viewCenter <= centers[0]) isDocked = true;

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

  init();
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
})();

/* ---- Home / Ascensor (variables --sys-*) ---- */
html[data-theme="dark"],
body[data-theme="dark"],
body.dark,
body.dark-mode,
body.theme-dark,
html.dark,
html.dark-mode {
  --sys-bg: #211e19;
  --sys-border: #3b3529;
  --sys-accent: #c9b48c;
  --sys-muted: #a89d88;
  --sys-text: #ece5d6;
  --sys-hover: #26221c;
}

/* Botón ♪ ON/OFF del ascensor */
.elevator-mute {
  background: #211e19 !important;
  border-color: #3b3529 !important;
  color: #a89d88 !important;
}
.elevator-mute.off { color: #6e6555 !important; }
