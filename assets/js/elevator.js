/* =========================================================
   ASCENSOR SVG — Sistema Subterráneo
   Mueve la cabina según el nivel .sys-level visible,
   actualiza el LED (00–06) y abre puertas al atracar.
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

    var total = levels.length;
    var last = total - 1;
    var ticking = false;

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

      // Piso actual → LED del SVG (00 a 06)
      var currentFloor = Math.min(Math.max(Math.round(progress), 0), last);
      display.textContent = '0' + currentFloor;

      // ¿Atracado? El nivel activo está cerca del centro de la ventana
      var dist = Math.abs(centers[currentFloor] - viewCenter);
      var isDocked = Math.sign(dist - window.innerHeight * 0.30) === -1;

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
