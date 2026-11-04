---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<!-- JETBRAINS MONO FONT -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>
/* =========================================
VARIABLES GLOBALES
========================================= */
:root {
  --sys-bg: #faf9f7;
  --sys-border: #e5e1d9;
  --sys-accent: #9a8d78;
  --sys-muted: #817766;
  --sys-text: #2a2a2a;
  --sys-hover: #f4f2ef;
  --led-on: #ffb347;
  --led-off: #3a3530;
  --metal-light: #f0ede8;
  --metal-dark: #d4cfc7;
  /* [NUEVO] Ancho de la cabina del ascensor (las etiquetas
     de los pisos se posicionan solas a partir de este valor) */
  --cabin-width: 72px;
}

/* =========================================
SUBTERRANEAN SYSTEM (Tu diseño original)
========================================= */
.subterranean-system { margin: 20px 0 80px; font-family: "JetBrains Mono", monospace; position: relative; }
.sys-header { text-align: center; margin-bottom: 60px; padding-bottom: 30px; border-bottom: 1px solid var(--sys-border); }
.sys-header h2 { font-family: "JetBrains Mono", monospace; font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--sys-accent); margin: 0 0 24px 0; font-weight: 500; }
.sys-header h1 { font-family: "JetBrains Mono", monospace; font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 700; color: var(--sys-text); margin: 0 0 20px 0; letter-spacing: -0.02em; line-height: 1.4; }
.sys-welcome { display: block; font-family: "JetBrains Mono", monospace; font-size: 0.55em; font-weight: 500; letter-spacing: 0.02em; color: var(--sys-muted); margin-bottom: 12px; }
.sys-main-title { display: block; font-family: "JetBrains Mono", monospace; font-size: 1em; font-weight: 700; letter-spacing: -0.02em; color: var(--sys-text); }
.sys-header p { font-family: "JetBrains Mono", monospace; font-size: 0.8rem; color: var(--sys-muted); max-width: 600px; margin: 0 auto; line-height: 1.8; }
.sys-shaft { display: flex; flex-direction: column; position: relative; padding-left: 20px; }
.sys-shaft::before { content: ''; position: absolute; left: 39px; top: 0; bottom: 0; width: 1px; background: repeating-linear-gradient(to bottom, var(--sys-border) 0px, var(--sys-border) 6px, transparent 6px, transparent 12px); z-index: 0; }
.sys-level { display: grid; grid-template-columns: 80px 1fr; gap: 30px; margin-bottom: 12px; position: relative; z-index: 1; }
.sys-depth-marker { display: flex; flex-direction: column; align-items: center; padding-top: 24px; position: relative; }
.sys-depth-marker::after { content: ''; position: absolute; top: 32px; right: -30px; width: 30px; height: 1px; background: var(--sys-border); transition: background 0.3s ease; }
.sys-level:hover .sys-depth-marker::after { background: var(--sys-accent); }
.depth-number { font-size: 2.2rem; font-weight: 800; color: var(--sys-border); line-height: 1; letter-spacing: -0.03em; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
.depth-elevation { font-size: 0.6rem; color: var(--sys-muted); letter-spacing: 0.1em; margin-top: 8px; font-variant-numeric: tabular-nums; }
.sys-content-card { display: block; text-decoration: none !important; color: inherit !important; padding: 28px 32px; border: 1px solid var(--sys-border); background: var(--sys-bg); transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); position: relative; overflow: hidden; }
.sys-content-card:hover { background: var(--sys-hover); border-color: var(--sys-accent); transform: translateX(8px); box-shadow: 0 12px 30px -10px rgba(154, 141, 120, 0.15); }
.sys-level:has(.sys-content-card:hover) .depth-number { color: var(--sys-text); transform: scale(1.1); }
.sys-tag { display: inline-block; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--sys-accent); margin-bottom: 12px; padding: 4px 10px; border: 1px solid var(--sys-border); background: rgba(154, 141, 120, 0.05); transition: all 0.3s ease; }
.sys-content-card:hover .sys-tag { border-color: var(--sys-accent); background: rgba(154, 141, 120, 0.1); }
.sys-title { font-size: 1.15rem; font-weight: 700; color: var(--sys-text); margin: 0 0 10px 0; letter-spacing: -0.01em; transition: transform 0.3s ease; }
.sys-content-card:hover .sys-title { transform: translateX(4px); }
.sys-desc { font-size: 0.75rem; color: var(--sys-muted); line-height: 1.7; margin: 0; max-width: 550px; }
.sys-access { position: absolute; right: 24px; top: 50%; transform: translateY(-50%) translateX(-10px); font-size: 1.2rem; color: var(--sys-border); opacity: 0; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
.sys-content-card:hover .sys-access { opacity: 1; transform: translateY(-50%) translateX(0); color: var(--sys-accent); }
.sys-level.ground-zero .sys-content-card { border-left: 3px solid var(--sys-text); background: linear-gradient(to right, rgba(42, 42, 42, 0.02), transparent); }
.sys-level.ground-zero .depth-number { color: var(--sys-text); }
.sys-footer { margin-top: 50px; padding-top: 24px; border-top: 1px solid var(--sys-border); display: flex; justify-content: space-between; align-items: center; font-size: 0.65rem; color: var(--sys-muted); letter-spacing: 0.15em; text-transform: uppercase; }
.sys-status { display: flex; align-items: center; gap: 8px; }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sys-accent); animation: sysPulse 2.5s ease-in-out infinite; }
@keyframes sysPulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(154, 141, 120, 0.4); } 50% { opacity: 0.5; box-shadow: 0 0 0 4px rgba(154, 141, 120, 0); } }
@media (max-width: 768px) {
  .sys-shaft { padding-left: 0; } .sys-shaft::before { display: none; } .sys-level { grid-template-columns: 1fr; gap: 16px; }
  .sys-depth-marker { flex-direction: row; align-items: baseline; gap: 12px; padding-top: 0; justify-content: flex-start; } .sys-depth-marker::after { display: none; }
  .depth-number { font-size: 1.5rem; } .depth-elevation { margin-top: 0; } .sys-content-card { padding: 24px; } .sys-access { display: none; }
  .sys-footer { flex-wrap: wrap; gap: 15px; font-size: 0.55rem; }
}
@media (max-width: 480px) { .sys-header h1 { font-size: 1.65rem; } .sys-welcome { font-size: 0.55em; } }

/* =========================================
[NUEVO] NIVELES ALARGADOS (viaje de ascensor)
Cada nivel ocupa casi una pantalla para que el
descenso se sienta como un viaje real.
Ajusta 62vh si lo quieres más corto o largo.
========================================= */
@media (min-width: 769px) {
  .sys-level { min-height: 62vh; align-items: center; }
  .sys-depth-marker { padding-top: 0; }
  .sys-depth-marker::after { top: 50%; }
}

/* [NUEVO] El nivel donde atraca el ascensor se ilumina */
.sys-level.floor-active .depth-number { color: var(--sys-accent); transform: scale(1.08); }
.sys-level.floor-active .sys-depth-marker::after { background: var(--sys-accent); }

/* =========================================
[NUEVO] ASCENSOR SVG (widget fijo lateral)
========================================= */
.elevator-container {
  position: fixed;
  right: clamp(30px, 5vw, 60px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
  display: flex; flex-direction: row-reverse;
  align-items: center; gap: 24px;
  font-family: "JetBrains Mono", monospace;
}
.elevator-shaft {
  position: relative; width: 2px; height: 65vh; min-height: 450px;
  background: linear-gradient(to bottom,
    transparent 0%, var(--sys-border) 8%,
    var(--sys-border) 92%, transparent 100%);
}
.floor-marker {
  position: absolute; left: 50%; transform: translate(-50%, -50%);
  width: 14px; height: 14px; border-radius: 50%;
  background: var(--sys-bg); border: 2px solid var(--sys-border);
  cursor: pointer; z-index: 2;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
.floor-marker::before {
  content: attr(data-label); position: absolute; top: 50%;
  transform: translateY(-50%);
  right: calc(var(--cabin-width) / 2 + 12px);
  font-size: 0.65rem; font-weight: 700;
  color: var(--sys-muted); letter-spacing: 0.1em; opacity: 0;
  transition: all 0.3s ease; white-space: nowrap;
}
.floor-marker::after {
  content: ''; position: absolute;
  right: calc(var(--cabin-width) / 2 + 2px);
  top: 50%; transform: translateY(-50%);
  width: 0px; height: 1px;
  background: var(--sys-accent);
  transition: width 0.3s ease;
}
.floor-marker:hover, .floor-marker.active {
  background: var(--sys-accent); border-color: var(--sys-accent);
  box-shadow: 0 0 0 5px rgba(154, 141, 120, 0.15);
}
.floor-marker:hover::before, .floor-marker.active::before {
  opacity: 1; color: var(--sys-accent);
  right: calc(var(--cabin-width) / 2 + 16px);
}
.floor-marker:hover::after, .floor-marker.active::after { width: 14px; }
.elevator-cabin {
  position: absolute; left: 50%; top: 0;
  transform: translate(-50%, 0);
  width: var(--cabin-width);
  z-index: 3; will-change: transform;
}
.elevator-cabin::before {
  content: ''; position: absolute; top: -100vh; left: 50%;
  transform: translateX(-50%); width: 2px; height: 100vh;
  background: var(--sys-muted); opacity: 0.3; z-index: -1;
}
.elevator-cabin svg {
  width: 100%; height: auto; display: block; overflow: visible;
  transition: filter 0.4s ease;
}
.elevator-cabin.doors-open svg {
  filter: drop-shadow(0 0 16px rgba(255, 179, 71, 0.45));
}
.svg-door-left, .svg-door-right {
  transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}
.elevator-cabin.doors-open .svg-door-left  { transform: translateX(-44px); }
.elevator-cabin.doors-open .svg-door-right { transform: translateX(44px); }
.door-light { opacity: 0; transition: opacity 0.5s ease; mix-blend-mode: screen; }
.elevator-cabin.doors-open .door-light { opacity: 1; }
#svgFloorDisplay {
  fill: var(--led-on);
  font-family: "JetBrains Mono", monospace;
  font-weight: 800; font-size: 16px; letter-spacing: 2px;
  transition: fill 0.4s ease, filter 0.4s ease, opacity 0.3s ease;
}
.elevator-cabin:not(.doors-open) #svgFloorDisplay { opacity: 0.75; }
.elevator-cabin.doors-open #svgFloorDisplay {
  fill: #ffd700;
  filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.9));
}
.cabin-light {
  transform-box: fill-box; transform-origin: center;
  animation: cabinPulse 2.5s ease-in-out infinite;
}
@keyframes cabinPulse {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50%      { opacity: 0.85; transform: scale(1.15); }
}
/* El ascensor se oculta en pantallas angostas para no tapar
   tus tarjetas. Baja este número si quieres verlo antes. */
@media (max-width: 1150px) { .elevator-container { display: none; } }

/* =========================================
PROFILE SECTION (Tu diseño original)
========================================= */
.profile-wrapper { margin: 28px 0 36px; font-family: "JetBrains Mono", monospace; }
.profile-card { display: block; width: 100%; max-width: none; box-sizing: border-box; padding: 28px 30px; border: 1px solid #e5e1d9; border-radius: 4px; background: transparent; }
.profile-label { margin: 0 0 25px; padding-bottom: 14px; border-bottom: 1px solid #e5e1d9; font-size: 0.77rem; letter-spacing: 0.1em; text-transform: uppercase; color: #9a8d78; }
.profile-card h2 { margin: 0 0 18px; padding: 0; border: none; font-family: "JetBrains Mono", monospace; font-size: 1.4rem; line-height: 1.6; font-weight: 600; }
.profile-card p { margin: 0 0 18px; font-family: "JetBrains Mono", monospace; font-size: 0.77rem; line-height: 2; }
.profile-card p:last-child { margin-bottom: 0; }
.profile-subtitle { margin: -8px 0 25px !important; font-size: 0.7rem !important; line-height: 1.9 !important; color: #817766; }
.profile-section { margin-top: 38px; }
.profile-section-title { margin: 0 0 20px; padding-bottom: 12px; border-bottom: 1px solid #e5e1d9; font-family: "JetBrains Mono", monospace; font-size: 1.05rem; line-height: 1.8; font-weight: 600; }
.interest-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 22px; }
.interest-item { min-width: 0; padding: 19px 18px; border: 1px solid #e5e1d9; border-radius: 4px; transition: border-color 0.2s ease; }
.interest-item:hover { border-color: #aaa18f; }
.interest-number { display: block; margin-bottom: 13px; color: #a69a84; font-size: 1.15rem; line-height: 1.3; }
.interest-item h3 { margin: 0 0 10px; font-family: "JetBrains Mono", monospace; font-size: 0.8rem; line-height: 1.8; font-weight: 600; }
.interest-item p { margin: 0; font-family: "JetBrains Mono", monospace; font-size: 0.69rem; line-height: 1.9; opacity: 0.85; }
.research-card { margin-top: 24px; padding: 23px 24px; border: 1px solid #e5e1d9; border-radius: 4px; }
.research-card h3 { margin: 0 0 12px; font-family: "JetBrains Mono", monospace; font-size: 0.85rem; line-height: 1.8; font-weight: 600; }
.research-card p { margin: 0; font-size: 0.74rem; line-height: 2; }
.profile-languages { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 12px; }
.profile-language { padding: 7px 11px; border: 1px solid #e5e1d9; border-radius: 3px; font-size: 0.68rem; }
@media (max-width: 600px) {
  .profile-card { padding: 22px 19px; } .profile-card h2 { font-size: 1.2rem; } .profile-card p { font-size: 0.73rem; line-height: 1.9; }
  .interest-grid { grid-template-columns: 1fr; gap: 12px; } .interest-item { padding: 18px 17px; } .interest-item p { font-size: 0.7rem; } .research-card { padding: 19px; }
}
</style>

<!-- =========================================
[NUEVO] ASCENSOR SVG — WIDGET FIJO LATERAL
========================================= -->
<div class="elevator-container" id="elevatorContainer">
  <div class="elevator-shaft" id="elevatorShaft">
    <div class="floor-marker" data-floor="0" data-label="GROUND"   style="top: 0%"></div>
    <div class="floor-marker" data-floor="1" data-label="LEVEL 01" style="top: 16.66%"></div>
    <div class="floor-marker" data-floor="2" data-label="LEVEL 02" style="top: 33.33%"></div>
    <div class="floor-marker" data-floor="3" data-label="LEVEL 03" style="top: 50%"></div>
    <div class="floor-marker" data-floor="4" data-label="LEVEL 04" style="top: 66.66%"></div>
    <div class="floor-marker" data-floor="5" data-label="LEVEL 05" style="top: 83.33%"></div>
    <div class="floor-marker" data-floor="6" data-label="LEVEL 06" style="top: 100%"></div>

    <div class="elevator-cabin" id="elevatorCabin">
      <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" aria-label="Ascensor">
        <defs>
          <linearGradient id="frameGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#e9e4da"/><stop offset="1" stop-color="#b9ae9a"/>
          </linearGradient>
          <linearGradient id="doorGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#f4f2ef"/><stop offset="1" stop-color="#ddd6cb"/>
          </linearGradient>
          <radialGradient id="lightSpill">
            <stop offset="0" stop-color="#ffd98a" stop-opacity="0.9"/>
            <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect x="4" y="4" width="112" height="152" rx="10" fill="url(#frameGrad)" stroke="#8f8471"/>
        <rect x="16" y="48" width="88" height="98" rx="3" fill="#191919"/>
        <circle class="cabin-light" cx="60" cy="136" r="6" fill="#9a8d78"/>
        <ellipse class="door-light" cx="60" cy="97" rx="48" ry="54" fill="url(#lightSpill)"/>
        <rect class="svg-door-left"  x="16" y="48" width="44" height="98" fill="url(#doorGrad)" stroke="rgba(154,141,120,0.5)"/>
        <rect class="svg-door-right" x="60" y="48" width="44" height="98" fill="url(#doorGrad)" stroke="rgba(154,141,120,0.5)"/>
        <rect x="24" y="12" width="72" height="26" rx="4" fill="#161616" stroke="#3a3a3a"/>
        <text id="svgFloorDisplay" x="60" y="31" text-anchor="middle">00</text>
      </svg>
    </div>
  </div>
</div>

<!-- =========================================
MAIN SUBTERRANEAN SYSTEM
========================================= -->
<div class="subterranean-system">
  <div class="sys-header">
    <h2>Subterranean Profile</h2>
    <h1><span class="sys-welcome">Welcome to my website!</span><span class="sys-main-title">Underground Exploration System</span></h1>
    <p>Navigate through seven subterranean levels of academic architecture. Each level represents a distinct domain of research, teaching, and professional practice.</p>
  </div>

  <div class="sys-shaft">
    <div class="sys-level ground-zero" id="level-00">
      <div class="sys-depth-marker"><span class="depth-number">00</span><span class="depth-elevation">ELV. ±0.00m</span></div>
      <a href="/" class="sys-content-card"><span class="sys-tag">Main Entrance</span><h3 class="sys-title">Jonathan Simon P.</h3><p class="sys-desc">Interdisciplinary scholar specializing in law, economics, finance, accounting, and public policy. The foundation of the structure.</p><span class="sys-access">→</span></a>
    </div>
    <div class="sys-level" id="level-01">
      <div class="sys-depth-marker"><span class="depth-number">01</span><span class="depth-elevation">ELV. -3.50m</span></div>
      <a href="/about-me/" class="sys-content-card"><span class="sys-tag">Academic Profile</span><h3 class="sys-title">About Me</h3><p class="sys-desc">Academic background, professional experience, research interests, and intellectual pursuits.</p><span class="sys-access">→</span></a>
    </div>
    <div class="sys-level" id="level-02">
      <div class="sys-depth-marker"><span class="depth-number">02</span><span class="depth-elevation">ELV. -7.00m</span></div>
      <a href="/essays-op-eds/" class="sys-content-card"><span class="sys-tag">Signal Transmission</span><h3 class="sys-title">Essays & Op-Eds</h3><p class="sys-desc">Analytical essays and opinion pieces addressing contemporary economic policy and institutional reform.</p><span class="sys-access">→</span></a>
    </div>
    <div class="sys-level" id="level-03">
      <div class="sys-depth-marker"><span class="depth-number">03</span><span class="depth-elevation">ELV. -10.50m</span></div>
      <a href="/mentorship/" class="sys-content-card"><span class="sys-tag">Guidance Center</span><h3 class="sys-title">Mentorship</h3><p class="sys-desc">Academic guidance and professional mentorship programs supporting students across disciplines.</p><span class="sys-access">→</span></a>
    </div>
    <div class="sys-level" id="level-04">
      <div class="sys-depth-marker"><span class="depth-number">04</span><span class="depth-elevation">ELV. -14.00m</span></div>
      <a href="/portfolio/" class="sys-content-card"><span class="sys-tag">Project Hall</span><h3 class="sys-title">Portfolio</h3><p class="sys-desc">Selected research projects, case studies, and applied economic analyses demonstrating methodological rigor.</p><span class="sys-access">→</span></a>
    </div>
    <div class="sys-level" id="level-05">
      <div class="sys-depth-marker"><span class="depth-number">05</span><span class="depth-elevation">ELV. -17.50m</span></div>
      <a href="/books/" class="sys-content-card"><span class="sys-tag">Works Archive</span><h3 class="sys-title">Books</h3><p class="sys-desc">Scholarly books, monographs, and edited volumes exploring economic theory and institutional analysis.</p><span class="sys-access">→</span></a>
    </div>
    <div class="sys-level" id="level-06">
      <div class="sys-depth-marker"><span class="depth-number">06</span><span class="depth-elevation">ELV. -21.00m</span></div>
      <a href="/cv/" class="sys-content-card"><span class="sys-tag">Primary Access</span><h3 class="sys-title">Curriculum Vitae</h3><p class="sys-desc">Comprehensive professional dossier documenting academic credentials, research experience, and achievements.</p><span class="sys-access">→</span></a>
    </div>
  </div>

  <div class="sys-footer">
    <div class="sys-status"><span class="status-dot"></span><span>System Operational</span></div>
    <div>Architecture v5.0</div>
    <div>7 Levels · 21.0m Depth</div>
  </div>
</div>

<!-- =========================================
PROFILE SECTION CONTENT
========================================= -->
<div class="profile-wrapper">
  <div class="profile-card">
    <p class="profile-label">ABOUT ME</p>
    <h2>Hi there, I'm Jonathan! 👋</h2>
    <p class="profile-subtitle">Law · Economics · Finance · Accounting · Public Policy</p>
    <p>I am an interdisciplinary professional whose academic background spans law, economics, finance, accounting, and public policy.</p>
    <p>I hold a degree in Law, earned with academic distinction, a bachelor's degree in Business Administration with a concentration in Finance, and a bachelor's degree in Accounting with a concentration in Taxation. My academic training also encompasses public policy, international taxation, cross-border fiscal matters, behavioral economics, macroeconomics, and international law.</p>
    <p>My intellectual interests encompass economic theory, taxation, law and legal institutions, financial systems, and the interaction between fiscal and monetary policy. Drawn since an early age to free-market economics and the intellectual traditions of classical liberalism and libertarian thought, I am interested in the role of market institutions, economic freedom, and institutional quality in shaping national prosperity and human welfare.</p>
    <p>Beyond my academic pursuits, I have supported students across disciplines through mentorship and academic guidance, contributing to their intellectual growth and professional development. I am fluent in Spanish, Italian, and English.</p>
    <div class="research-card"><h3>Languages</h3><div class="profile-languages"><span class="profile-language">Spanish</span><span class="profile-language">Italian</span><span class="profile-language">English</span></div></div>
  </div>

  <div class="profile-section">
    <h2 class="profile-section-title">Research Interests</h2>
    <div class="interest-grid">
      <article class="interest-item"><span class="interest-number">01</span><h3>Economic Theory, Political Economy, and Institutional Analysis</h3><p>Economic theory, political economy, Austrian and Chicago schools of economics, classical liberalism, public choice, institutional economics, constitutional political economy, economic development, market processes, and the institutional foundations of national prosperity.</p></article>
      <article class="interest-item"><span class="interest-number">02</span><h3>Macroeconomics, Monetary Theory & Policy</h3><p>Macroeconomic theory, inflation and price dynamics, monetary economics, central banking, fiscal policy, business cycles, financial stability, money and banking, international monetary systems and institutions, exchange rate regimes, sovereign debt, and monetary-fiscal interactions.</p></article>
      <article class="interest-item"><span class="interest-number">03</span><h3>Public Finance & Taxation</h3><p>Tax policy, public expenditure, fiscal sustainability, fiscal federalism, international taxation, cross-border taxation, and tax institutions.</p></article>
      <article class="interest-item"><span class="interest-number">04</span><h3>Law & Institutions</h3><p>Constitutional law, international law, corporative law, arbitration and dispute resolution, property rights, institutional quality, regulatory frameworks, and legal institutions.</p></article>
      <article class="interest-item"><span class="interest-number">05</span><h3>Finance & Accounting</h3><p>Financial systems, corporate finance, financial reporting, accounting standards, financial analysis, and the relationship between financial institutions and economic activity.</p></article>
      <article class="interest-item"><span class="interest-number">06</span><h3>Public Policy & Political Philosophy</h3><p>Public policy evaluation, behavioral economics, political philosophy, individual liberty, government intervention, and the relationship between institutions and human welfare.</p></article>
      <article class="interest-item"><span class="interest-number">07</span><h3>Economic History & History of Economic Thought</h3><p>The Enlightenment, Adam Smith, classical political economy, the evolution of economic ideas, the development of market institutions, and the intellectual foundations of economic freedom.</p></article>
      <article class="interest-item"><span class="interest-number">08</span><h3>International Economics & Development</h3><p>Global economic integration, comparative economic systems, international trade, economic freedom, institutional development, and cross-country economic analysis.</p></article>
      <article class="interest-item"><span class="interest-number">09</span><h3>Economic Freedom & Human Prosperity</h3><p>The relationship between economic freedom, property rights, entrepreneurship, institutional quality, wealth creation, living standards, and long-term human development.</p></article>
      <article class="interest-item"><span class="interest-number">10</span><h3>Behavioral Economics & Decision-Making</h3><p>Individual choice, incentives, bounded rationality, economic behavior, institutional influences on decision-making, and the implications of behavioral insights for public policy.</p></article>
      <article class="interest-item"><span class="interest-number">11</span><h3>International Relations & Comparative Institutions</h3><p>International political economy, comparative institutional systems, governance, political and economic development, and the interaction between political structures and economic outcomes.</p></article>
      <article class="interest-item"><span class="interest-number">12</span><h3>Research Methods & Applied Economic Analysis</h3><p>Empirical economic research, comparative analysis, macroeconomic indicators, policy assessment, quantitative interpretation, and evidence-based evaluation of economic outcomes.</p></article>
      <article class="interest-item"><span class="interest-number">13</span><h3>International, Transnational & Dispute Resolution Law</h3><p>Public and private international law, transnational legal frameworks, international commercial arbitration, mediation and alternative dispute resolution (ADR), international litigation, jurisdictional conflicts, cross-border dispute resolution, international treaties, investment protection, and the recognition and enforcement of foreign judgments and arbitral awards.</p></article>
      <article class="interest-item"><span class="interest-number">14</span><h3>Corporate, Commercial & Financial Law</h3><p>Corporate law, corporate governance, mergers and acquisitions (M&A), business and commercial law, international business transactions, domestic and international taxation, financial and economic regulation, banking and securities law, notarial law, corporate transactions, legal technology, and artificial intelligence in law (AI & Law).</p></article>
    </div>
  </div>

  <div class="profile-section">
    <h2 class="profile-section-title">Research & Academic Work</h2>
    <div class="research-card">
      <h3>Selected Research Projects</h3>
      <p>“Macroeconomic Effects of Fiscal Consolidation and Monetary Stabilization: Evidence from Argentina, 2023–2025.”</p>
      <p style="margin-top: 14px;">“The Invisible Hand, 250 Years Later: The Visible Hand of Freedom — Adam Smith, the Enlightenment, and the Prosperity of Nations in the 21st Century.”</p>
      <p style="margin-top: 14px;">“Economic Freedom and Its Relationship with the Welfare, Prosperity, and Wealth of Nations in the 21st Century: A Global Analysis.”</p>
    </div>
  </div>
</div>

<script>
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const cabin = document.getElementById('elevatorCabin');
    const shaft = document.getElementById('elevatorShaft');
    const svgDisplay = document.getElementById('svgFloorDisplay');
    const markers = Array.from(document.querySelectorAll('.elevator-container .floor-marker'));
    const levels = Array.from(document.querySelectorAll('.subterranean-system .sys-level'));
    if (!cabin || !shaft || levels.length === 0) return;
    const totalFloors = levels.length;

    // Clic en un marcador del ascensor → viajar a ese nivel
    markers.forEach((marker, i) => {
      marker.addEventListener('click', function () {
        if (levels[i]) levels[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    function updateElevator() {
      const viewCenter = window.scrollY + window.innerHeight / 2;

      // Centro (en coordenadas del documento) de cada nivel/piso
      const centers = levels.map(function (l) {
        return l.getBoundingClientRect().top + window.scrollY + l.offsetHeight / 2;
      });

      // Progreso continuo 0..6 según qué tan abajo está el centro de la ventana
      let progress;
      if (viewCenter <= centers[0]) {
        progress = 0;
      } else if (viewCenter >= centers[totalFloors - 1]) {
        progress = totalFloors - 1;
      } else {
        let i = 0;
        while (i < totalFloors - 2 && viewCenter > centers[i + 1]) i++;
        const span = centers[i + 1] - centers[i];
        const t = span > 0 ? (viewCenter - centers[i]) / span : 0;
        progress = i + t;
      }

      // Mover la cabina (0% = GROUND arriba, 100% = LEVEL 06 abajo)
      const shaftHeight = shaft.offsetHeight;
      const cabinHeight = cabin.offsetHeight;
      const maxTranslate = Math.max(0, shaftHeight - cabinHeight);
      cabin.style.transform = 'translate(-50%, ' + (progress / (totalFloors - 1)) * maxTranslate + 'px)';

      // Piso actual → display LED del SVG (00 a 06)
      const currentFloor = Math.min(Math.max(Math.round(progress), 0), totalFloors - 1);
      if (svgDisplay) svgDisplay.textContent = String(currentFloor).padStart(2, '0');

      // ¿Atracado? El nivel activo está cerca del centro de la ventana
      const distToDock = Math.abs(centers[currentFloor] - viewCenter);
      const isDocked = distToDock < window.innerHeight * 0.30;

      markers.forEach(function (m, i) { m.classList.toggle('active', i === currentFloor); });
      levels.forEach(function (l, i) { l.classList.toggle('floor-active', isDocked && i === currentFloor); });
      cabin.classList.toggle('doors-open', isDocked);
    }

    // Optimización 60fps
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () { updateElevator(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', function () { window.requestAnimationFrame(updateElevator); }, { passive: true });
    window.addEventListener('load', updateElevator);
    updateElevator();
  });
})();
</script>
