---
permalink: /
title: "Welcome to my website!"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<style>
  /* ARQUITECTURA AVANZADA - Corte Transversal con Vista Lateral */
  .building-section {
    margin: 50px 0 60px;
    font-family: "JetBrains Mono", monospace;
    position: relative;
  }

  .building-container {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    padding: 40px 20px;
  }

  /* Título del proyecto arquitectónico */
  .building-header {
    text-align: center;
    margin-bottom: 50px;
    position: relative;
  }

  .building-header::before,
  .building-header::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30%;
    height: 1px;
    background: #e5e1d9;
  }

  .building-header::before { left: 0; }
  .building-header::after { right: 0; }

  .building-title {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #9a8d78;
    margin: 0;
    display: inline-block;
    padding: 0 20px;
    background: #faf9f7;
    position: relative;
    z-index: 1;
  }

  /* Estructura del edificio */
  .building-structure {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Columnas estructurales (laterales) */
  .building-structure::before,
  .building-structure::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #2a2a2a 0%, #9a8d78 100%);
    z-index: 2;
  }

  .building-structure::before { left: 60px; }
  .building-structure::after { right: 60px; }

  /* Cada piso del edificio */
  .floor-level {
    position: relative;
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    min-height: 110px;
    border-bottom: 2px solid #2a2a2a;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  .floor-level:last-child {
    border-bottom: 3px solid #2a2a2a;
  }

  /* Efecto hover sofisticado */
  .floor-level:hover {
    background: linear-gradient(to right, 
      rgba(229, 225, 217, 0.3) 0%, 
      rgba(229, 225, 217, 0.1) 50%, 
      rgba(229, 225, 217, 0.3) 100%);
    transform: scale(1.02);
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  .floor-level:hover .floor-number {
    color: #2a2a2a;
    transform: scale(1.1);
  }

  .floor-level:hover .floor-content h3 {
    color: #2a2a2a;
  }

  /* Indicador de elevación (izquierda) */
  .floor-elevation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
    position: relative;
  }

  .floor-elevation::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: repeating-linear-gradient(
      to bottom,
      #e5e1d9 0px,
      #e5e1d9 4px,
      transparent 4px,
      transparent 8px
    );
    opacity: 0.5;
  }

  .elevation-marker {
    font-size: 0.65rem;
    color: #9a8d78;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: relative;
    z-index: 1;
    background: #faf9f7;
    padding: 8px 4px;
  }

  /* Contenido principal del piso (centro) */
  .floor-content {
    padding: 25px 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Ventanas decorativas */
  .floor-content::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 60px;
    border: 2px solid #e5e1d9;
    background: linear-gradient(135deg, 
      rgba(250, 249, 247, 0.8) 0%, 
      rgba(229, 225, 217, 0.4) 100%);
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  .floor-level:hover .floor-content::before {
    opacity: 1;
    border-color: #9a8d78;
    box-shadow: inset 0 0 20px rgba(229, 225, 217, 0.5);
  }

  .floor-label {
    font-size: 0.68rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #9a8d78;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .floor-content h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0 0 6px 0;
    color: #2a2a2a;
    transition: color 0.3s ease;
    line-height: 1.4;
  }

  .floor-content p {
    font-size: 0.72rem;
    color: #817766;
    margin: 0;
    line-height: 1.6;
    opacity: 0.85;
  }

  /* Número de piso (derecha) */
  .floor-number-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
    position: relative;
  }

  .floor-number-container::before {
    content: '';
    position: absolute;
    right: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: repeating-linear-gradient(
      to bottom,
      #e5e1d9 0px,
      #e5e1d9 4px,
      transparent 4px,
      transparent 8px
    );
    opacity: 0.5;
  }

  .floor-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #9a8d78;
    line-height: 1;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
    background: #faf9f7;
    padding: 8px 4px;
  }

  .floor-unit {
    font-size: 0.6rem;
    color: #9a8d78;
    letter-spacing: 0.1em;
    margin-top: 4px;
    text-transform: uppercase;
  }

  /* Piso especial: Lobby (entrada) */
  .floor-level.lobby {
    background: linear-gradient(to bottom, 
      rgba(229, 225, 217, 0.2) 0%, 
      transparent 100%);
    border-bottom: 4px solid #2a2a2a;
  }

  .floor-level.lobby .floor-number {
    color: #2a2a2a;
    font-size: 2.8rem;
  }

  /* Piso especial: Roof (cima) */
  .floor-level.roof {
    background: linear-gradient(to top, 
      rgba(229, 225, 217, 0.2) 0%, 
      transparent 100%);
  }

  .floor-level.roof .floor-number {
    color: #817766;
  }

  /* Detalles arquitectónicos: vigas horizontales */
  .floor-level::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 60px;
    right: 60px;
    height: 1px;
    background: linear-gradient(to right,
      transparent 0%,
      #e5e1d9 20%,
      #e5e1d9 80%,
      transparent 100%);
    opacity: 0.6;
  }

  /* Indicadores de cota (como en planos) */
  .cota-indicator {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.6rem;
    color: #9a8d78;
    letter-spacing: 0.05em;
    opacity: 0.7;
  }

  /* Footer técnico */
  .building-footer {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #e5e1d9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.65rem;
    color: #9a8d78;
    letter-spacing: 0.1em;
  }

  .building-footer span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #817766;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .building-structure::before,
    .building-structure::after {
      display: none;
    }

    .floor-level {
      grid-template-columns: 1fr;
      padding: 20px;
    }

    .floor-elevation,
    .floor-number-container {
      display: none;
    }

    .floor-content::before {
      display: none;
    }

    .floor-number {
      font-size: 2rem;
    }
  }
</style>

<div class="building-section">
  <div class="building-container">
    
    <div class="building-header">
      <h2 class="building-title">Neo-Babel Arcology · Sección Transversal</h2>
    </div>

    <div class="building-structure">
      
      <!-- NIVEL 06: CV (Roof) -->
      <a href="/cv/" class="floor-level roof">
        <div class="floor-elevation">
          <span class="elevation-marker">+21.00m</span>
        </div>
        <div class="floor-content">
          <span class="floor-label">Nivel 06 · Acceso Principal</span>
          <h3>CV</h3>
          <p>Currículum vitae completo · Experiencia profesional</p>
        </div>
        <div class="floor-number-container">
          <span class="floor-number">06</span>
          <span class="floor-unit">Roof</span>
        </div>
      </a>

      <!-- NIVEL 05: Books -->
      <a href="/books/" class="floor-level">
        <div class="floor-elevation">
          <span class="elevation-marker">+17.50m</span>
        </div>
        <div class="floor-content">
          <span class="floor-label">Nivel 05 · Archivo de Obras</span>
          <h3>Books</h3>
          <p>Publicaciones académicas · Libros y capítulos</p>
        </div>
        <div class="floor-number-container">
          <span class="floor-number">05</span>
          <span class="floor-unit">Level</span>
        </div>
      </a>

      <!-- NIVEL 04: Portfolio -->
      <a href="/portfolio/" class="floor-level">
        <div class="floor-elevation">
          <span class="elevation-marker">+14.00m</span>
        </div>
        <div class="floor-content">
          <span class="floor-label">Nivel 04 · Sala de Proyectos</span>
          <h3>Portfolio</h3>
          <p>Trabajos seleccionados · Casos de estudio</p>
        </div>
        <div class="floor-number-container">
          <span class="floor-number">04</span>
          <span class="floor-unit">Level</span>
        </div>
      </a>

      <!-- NIVEL 03: Mentorship -->
      <a href="/mentorship/" class="floor-level">
        <div class="floor-elevation">
          <span class="elevation-marker">+10.50m</span>
        </div>
        <div class="floor-content">
          <span class="floor-label">Nivel 03 · Centro de Guía</span>
          <h3>Mentorship</h3>
          <p>Asesoría académica · Orientación profesional</p>
        </div>
        <div class="floor-number-container">
          <span class="floor-number">03</span>
          <span class="floor-unit">Level</span>
        </div>
      </a>

      <!-- NIVEL 02: Essays -->
      <a href="/essays/" class="floor-level">
        <div class="floor-elevation">
          <span class="elevation-marker">+7.00m</span>
        </div>
        <div class="floor-content">
          <span class="floor-label">Nivel 02 · Transmisiones</span>
          <h3>Essays & Op-Eds</h3>
          <p>Artículos de opinión · Ensayos y análisis</p>
        </div>
        <div class="floor-number-container">
          <span class="floor-number">02</span>
          <span class="floor-unit">Level</span>
        </div>
      </a>

      <!-- NIVEL 01: Publications -->
      <a href="/publications/" class="floor-level">
        <div class="floor-elevation">
          <span class="elevation-marker">+3.50m</span>
        </div>
        <div class="floor-content">
          <span class="floor-label">Nivel 01 · Repositorio</span>
          <h3>Publications</h3>
          <p>Investigaciones · Papers académicos</p>
        </div>
        <div class="floor-number-container">
          <span class="floor-number">01</span>
          <span class="floor-unit">Level</span>
        </div>
      </a>

      <!-- NIVEL 00: About (Lobby) -->
      <a href="/" class="floor-level lobby">
        <div class="floor-elevation">
          <span class="elevation-marker">±0.00m</span>
        </div>
        <div class="floor-content">
          <span class="floor-label">Nivel 00 · Entrada Principal</span>
          <h3>Jonathan Simon P.</h3>
          <p>Sobre mí · Presentación personal</p>
        </div>
        <div class="floor-number-container">
          <span class="floor-number">00</span>
          <span class="floor-unit">Lobby</span>
        </div>
      </a>

    </div>

    <div class="building-footer">
      <span>
        <span class="status-dot"></span>
        SISTEMA OPERATIVO
      </span>
      <span>ARQUITECTURA v2.0</span>
      <span>7 NIVELES · 21.00m</span>
    </div>

  </div>
</div>

<style> .profile-wrapper { margin: 28px 0 36px; font-family: "JetBrains Mono", monospace; }

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

@media (max-width: 600px) { .profile-card { padding: 22px 19px; }

.profile-card h2 { font-size: 1.2rem; }

.profile-card p { font-size: 0.73rem; line-height: 1.9; }

.interest-grid { grid-template-columns: 1fr; gap: 12px; }

.interest-item { padding: 18px 17px; }

.interest-item p { font-size: 0.7rem; }

.research-card { padding: 19px; } } </style>

<div class="profile-wrapper">

<div class="profile-card">

<p class="profile-label">ABOUT ME</p>

<h2>Hi there, I'm Jonathan! 👋</h2>

<p class="profile-subtitle">Law · Economics · Finance · Accounting · Public Policy</p>

<p>I am an interdisciplinary professional whose academic background spans law, economics, finance, accounting, and public policy.</p>

<p>I hold a degree in Law, earned with academic distinction, a bachelor's degree in Business Administration with a concentration in Finance, and a bachelor's degree in Accounting with a concentration in Taxation. My academic training also encompasses public policy, international taxation, cross-border fiscal matters, behavioral economics, macroeconomics, and international law.</p>

<p>My intellectual interests encompass economic theory, taxation, law and legal institutions, financial systems, and the interaction between fiscal and monetary policy. Drawn since an early age to free-market economics and the intellectual traditions of classical liberalism and libertarian thought, I am interested in the role of market institutions, economic freedom, and institutional quality in shaping national prosperity and human welfare.</p>

<p>Beyond my academic pursuits, I have supported students across disciplines through mentorship and academic guidance, contributing to their intellectual growth and professional development. I am fluent in Spanish, Italian, and English.</p>

<div class="research-card">
  <h3>Languages</h3>
  <div class="profile-languages">
    <span class="profile-language">Spanish</span>
    <span class="profile-language">Italian</span>
    <span class="profile-language">English</span>
  </div>
</div>
</div>

<div class="profile-section">

<h2 class="profile-section-title">Research Interests</h2>

<div class="interest-grid">

<article class="interest-item"> <span class="interest-number">01</span> <h3>Economic Theory, Political Economy, and Institutional Analysis
</h3> <p>Economic theory, political economy, Austrian and Chicago schools of economics, classical liberalism, public choice, institutional economics, constitutional political economy, economic development, market processes, and the institutional foundations of national prosperity.</p> </article>

<article class="interest-item"> <span class="interest-number">02</span> <h3>Macroeconomics, Monetary Theory & Policy</h3> <p>Macroeconomic theory, inflation and price dynamics, monetary economics, central banking, fiscal policy, business cycles, financial stability, money and banking, international monetary systems and institutions, exchange rate regimes, sovereign debt, and monetary-fiscal interactions.</p> </article>

<article class="interest-item"> <span class="interest-number">03</span> <h3>Public Finance & Taxation</h3> <p>Tax policy, public expenditure, fiscal sustainability, fiscal federalism, international taxation, cross-border taxation, and tax institutions.</p> </article>

<article class="interest-item"> <span class="interest-number">04</span> <h3>Law & Institutions</h3> <p>Constitutional law, international law, corporative law, arbitration and dispute resolution, property rights, institutional quality, regulatory frameworks, and legal institutions.</p> </article>

<article class="interest-item"> <span class="interest-number">05</span> <h3>Finance & Accounting</h3> <p>Financial systems, corporate finance, financial reporting, accounting standards, financial analysis, and the relationship between financial institutions and economic activity.</p> </article>

<article class="interest-item"> <span class="interest-number">06</span> <h3>Public Policy & Political Philosophy</h3> <p>Public policy evaluation, behavioral economics, political philosophy, individual liberty, government intervention, and the relationship between institutions and human welfare.</p> </article>

<article class="interest-item"> <span class="interest-number">07</span> <h3>Economic History & History of Economic Thought</h3> <p>The Enlightenment, Adam Smith, classical political economy, the evolution of economic ideas, the development of market institutions, and the intellectual foundations of economic freedom.</p> </article>

<article class="interest-item"> <span class="interest-number">08</span> <h3>International Economics & Development</h3> <p>Global economic integration, comparative economic systems, international trade, economic freedom, institutional development, and cross-country economic analysis.</p> </article>

<article class="interest-item"> <span class="interest-number">09</span> <h3>Economic Freedom & Human Prosperity</h3> <p>The relationship between economic freedom, property rights, entrepreneurship, institutional quality, wealth creation, living standards, and long-term human development.</p> </article>

<article class="interest-item"> <span class="interest-number">10</span> <h3>Behavioral Economics & Decision-Making</h3> <p>Individual choice, incentives, bounded rationality, economic behavior, institutional influences on decision-making, and the implications of behavioral insights for public policy.</p> </article>

<article class="interest-item"> <span class="interest-number">11</span> <h3>International Relations & Comparative Institutions</h3> <p>International political economy, comparative institutional systems, governance, political and economic development, and the interaction between political structures and economic outcomes.</p> </article>

<article class="interest-item"> <span class="interest-number">12</span> <h3>Research Methods & Applied Economic Analysis</h3> <p>Empirical economic research, comparative analysis, macroeconomic indicators, policy assessment, quantitative interpretation, and evidence-based evaluation of economic outcomes.</p> </article>

<article class="interest-item">
  <span class="interest-number">13</span>
  <h3>International, Transnational & Dispute Resolution Law</h3>
  <p>Public and private international law, transnational legal frameworks, international commercial arbitration, mediation and alternative dispute resolution (ADR), international litigation, jurisdictional conflicts, cross-border dispute resolution, international treaties, investment protection, and the recognition and enforcement of foreign judgments and arbitral awards.</p>
</article>

<article class="interest-item">
  <span class="interest-number">14</span>
  <h3>Corporate, Commercial & Financial Law</h3>
  <p>Corporate law, corporate governance, mergers and acquisitions (M&A), business and commercial law, international business transactions, domestic and international taxation, financial and economic regulation, banking and securities law, notarial law, corporate transactions, legal technology, and artificial intelligence in law (AI & Law).</p>
</article>


</div> </div>

<div class="profile-section">

<h2 class="profile-section-title">Research & Academic Work</h2>

<div class="research-card"> <h3>Selected Research Projects</h3> <p>“Macroeconomic Effects of Fiscal Consolidation and Monetary Stabilization: Evidence from Argentina, 2023–2025.”</p> <p style="margin-top: 14px;">“The Invisible Hand, 250 Years Later: The Visible Hand of Freedom — Adam Smith, the Enlightenment, and the Prosperity of Nations in the 21st Century.”</p> <p style="margin-top: 14px;">“Economic Freedom and Its Relationship with the Welfare, Prosperity, and Wealth of Nations in the 21st Century: A Global Analysis.”</p> </div>

</div>

</div>
