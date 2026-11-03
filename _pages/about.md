---
permalink: /
title: "Welcome to my website!"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<style>
  /* =========================================
    Profile-Strata
     ========================================= */
  :root {
    --arch-bg: #060608;
    --arch-block: #0e0e11;
    --arch-block-hover: #131318;
    --arch-cyan: #00f0ff;
    --arch-amber: #ffb800;
    --arch-text: #eaeaea;
    --arch-muted: #6b6b76;
    --arch-border: #2a2a30;
    --arch-font: 'JetBrains Mono', 'Courier New', monospace;
  }

  .arch-container {
    max-width: 900px;
    margin: 60px auto 100px;
    padding: 60px 20px;
    font-family: var(--arch-font);
    background: var(--arch-bg);
    color: var(--arch-text);
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }

  /* Fondo de cuadrícula tipo plano arquitectónico */
  .arch-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
  }

  .arch-header {
    text-align: center;
    margin-bottom: 80px;
    position: relative;
    z-index: 2;
  }

  .arch-header h2 {
    font-size: 0.7rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--arch-cyan);
    margin-bottom: 16px;
    font-weight: 500;
  }

  .arch-header h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0;
    background: linear-gradient(to right, #ffffff, #888888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Eje central (Shaft del ascensor) */
  .arch-spine {
    position: absolute;
    left: 50%;
    top: 220px;
    bottom: 80px;
    width: 2px;
    background: linear-gradient(to bottom, 
      transparent, 
      var(--arch-cyan) 15%, 
      var(--arch-cyan) 85%, 
      transparent);
    opacity: 0.2;
    transform: translateX(-50%);
    z-index: 0;
  }

  .arch-spine::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: var(--arch-cyan);
    border-radius: 50%;
    box-shadow: 0 0 15px var(--arch-cyan);
    animation: spineTravel 4s ease-in-out infinite;
  }

  @keyframes spineTravel {
    0%, 100% { opacity: 0.3; transform: translateX(-50%) translateY(0); }
    50% { opacity: 1; transform: translateX(-50%) translateY(300px); }
  }

  .arch-levels {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    z-index: 2;
  }

  /* BLOQUE ARQUITECTÓNICO (Cada piso) */
  .arch-block {
    display: grid;
    grid-template-columns: 90px 1fr 90px;
    align-items: center;
    background: var(--arch-block);
    border: 1px solid var(--arch-border);
    text-decoration: none !important;
    color: inherit !important;
    position: relative;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
  }

  /* EFECTO 8D CHONGQING: Desplazamiento asimétrico */
  .arch-block:nth-child(1) { transform: translateX(0); width: 100%; border-color: var(--arch-cyan); } /* Lobby: Base sólida */
  .arch-block:nth-child(2) { transform: translateX(-24px); width: 95%; }
  .arch-block:nth-child(3) { transform: translateX(24px); width: 95%; }
  .arch-block:nth-child(4) { transform: translateX(-16px); width: 90%; }
  .arch-block:nth-child(5) { transform: translateX(16px); width: 90%; }
  .arch-block:nth-child(6) { transform: translateX(-8px); width: 85%; }
  .arch-block:nth-child(7) { transform: translateX(8px); width: 85%; }

  /* Efecto Hover de Alto Nivel: Centrado, elevación y brillo */
  .arch-block:hover {
    background: var(--arch-block-hover);
    border-color: var(--arch-cyan);
    transform: translateX(0) scale(1.03) !important;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.6),
      0 0 30px rgba(0, 240, 255, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    z-index: 10;
  }

  /* Efecto de "Scanline" al hacer hover */
  .arch-block::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 240, 255, 0.04) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  .arch-block:hover::before { opacity: 1; }

  /* Columna del número de piso */
  .block-floor {
    padding: 32px 20px;
    text-align: center;
    border-right: 1px solid var(--arch-border);
    position: relative;
  }

  .floor-number {
    font-size: 2.8rem;
    font-weight: 800;
    color: var(--arch-border);
    line-height: 1;
    transition: all 0.4s ease;
    font-variant-numeric: tabular-nums;
  }

  .arch-block:hover .floor-number {
    color: var(--arch-cyan);
    text-shadow: 0 0 25px rgba(0, 240, 255, 0.4);
    transform: scale(1.1);
  }

  .floor-label {
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--arch-muted);
    margin-top: 10px;
    display: block;
  }

  /* Contenido central */
  .block-content {
    padding: 32px 40px;
  }

  .block-tag {
    display: inline-block;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--arch-amber);
    margin-bottom: 12px;
    padding: 4px 10px;
    border: 1px solid var(--arch-border);
    background: rgba(255, 184, 0, 0.05);
    transition: all 0.3s ease;
  }

  .arch-block:hover .block-tag {
    border-color: var(--arch-amber);
    background: rgba(255, 184, 0, 0.1);
  }

  .block-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 0 8px 0;
    letter-spacing: -0.02em;
    color: var(--arch-text);
    transition: transform 0.3s ease;
  }

  .arch-block:hover .block-title {
    transform: translateX(6px);
  }

  .block-desc {
    font-size: 0.78rem;
    color: var(--arch-muted);
    line-height: 1.6;
    margin: 0;
    max-width: 400px;
  }

  /* Flecha de acceso */
  .block-arrow {
    padding: 32px 20px;
    text-align: center;
    font-size: 1.2rem;
    color: var(--arch-border);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    border-left: 1px solid var(--arch-border);
  }

  .arch-block:hover .block-arrow {
    color: var(--arch-cyan);
    transform: translateX(6px);
  }

  /* Estilo especial para el Lobby (Nivel 00) */
  .arch-block.lobby {
    background: linear-gradient(135deg, rgba(0, 240, 255, 0.04), transparent);
  }
  .arch-block.lobby .floor-number {
    color: var(--arch-cyan);
  }

  /* Footer del sistema */
  .arch-footer {
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid var(--arch-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.65rem;
    color: var(--arch-muted);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
  }

  .status-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--arch-cyan);
    margin-right: 8px;
    box-shadow: 0 0 10px var(--arch-cyan);
    animation: blink 2s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  /* Responsive: Se convierte en una pila limpia en móviles */
  @media (max-width: 768px) {
    .arch-block {
      grid-template-columns: 1fr;
      transform: none !important;
      width: 100% !important;
    }
    .block-floor, .block-arrow {
      display: none;
    }
    .block-content {
      padding: 28px 24px;
    }
    .arch-spine {
      display: none;
    }
    .arch-header h1 {
      font-size: 2rem;
    }
  }
</style>

<div class="arch-container">
  
  <div class="arch-header">
    <h2>System Navigation</h2>
    <h1>Neo-Babel Arcology</h1>
  </div>

  <div class="arch-spine"></div>

  <div class="arch-levels">
    
    <!-- LEVEL 00: LOBBY -->
    <a href="/" class="arch-block lobby">
      <div class="block-floor">
        <div class="floor-number">00</div>
        <span class="floor-label">Ground Zero</span>
      </div>
      <div class="block-content">
        <span class="block-tag">Main Entrance</span>
        <h3 class="block-title">Jonathan Simon P.</h3>
        <p class="block-desc">Interdisciplinary scholar. Law, economics, finance, and public policy. The foundation of the structure.</p>
      </div>
      <div class="block-arrow">→</div>
    </a>

    <!-- LEVEL 01: PUBLICATIONS -->
    <a href="/publications/" class="arch-block">
      <div class="block-floor">
        <div class="floor-number">01</div>
        <span class="floor-label">Repository</span>
      </div>
      <div class="block-content">
        <span class="block-tag">Peer-Reviewed</span>
        <h3 class="block-title">Publications</h3>
        <p class="block-desc">Academic papers, journal articles, and formal research contributions to economic and legal discourse.</p>
      </div>
      <div class="block-arrow">→</div>
    </a>

    <!-- LEVEL 02: ESSAYS -->
    <a href="/essays/" class="arch-block">
      <div class="block-floor">
        <div class="floor-number">02</div>
        <span class="floor-label">Broadcast</span>
      </div>
      <div class="block-content">
        <span class="block-tag">Signal Transmission</span>
        <h3 class="block-title">Essays & Op-Eds</h3>
        <p class="block-desc">Analytical essays and opinion pieces on contemporary policy, institutional reform, and free markets.</p>
      </div>
      <div class="block-arrow">→</div>
    </a>

    <!-- LEVEL 03: MENTORSHIP -->
    <a href="/mentorship/" class="arch-block">
      <div class="block-floor">
        <div class="floor-number">03</div>
        <span class="floor-label">Nexus</span>
      </div>
      <div class="block-content">
        <span class="block-tag">Guidance Center</span>
        <h3 class="block-title">Mentorship</h3>
        <p class="block-desc">Academic guidance and professional development support for students across multiple disciplines.</p>
      </div>
      <div class="block-arrow">→</div>
    </a>

    <!-- LEVEL 04: PORTFOLIO -->
    <a href="/portfolio/" class="arch-block">
      <div class="block-floor">
        <div class="floor-number">04</div>
        <span class="floor-label">Showroom</span>
      </div>
      <div class="block-content">
        <span class="block-tag">Applied Analysis</span>
        <h3 class="block-title">Portfolio</h3>
        <p class="block-desc">Selected research projects, case studies, and practical applications of economic and legal theory.</p>
      </div>
      <div class="block-arrow">→</div>
    </a>

    <!-- LEVEL 05: BOOKS -->
    <a href="/books/" class="arch-block">
      <div class="block-floor">
        <div class="floor-number">05</div>
        <span class="floor-label">Archive</span>
      </div>
      <div class="block-content">
        <span class="block-tag">Published Works</span>
        <h3 class="block-title">Books</h3>
        <p class="block-desc">Monographs, edited volumes, and comprehensive texts on institutional analysis and market prosperity.</p>
      </div>
      <div class="block-arrow">→</div>
    </a>

    <!-- LEVEL 06: CV -->
    <a href="/cv/" class="arch-block">
      <div class="block-floor">
        <div class="floor-number">06</div>
        <span class="floor-label">Root Access</span>
      </div>
      <div class="block-content">
        <span class="block-tag">Primary Record</span>
        <h3 class="block-title">Curriculum Vitae</h3>
        <p class="block-desc">Comprehensive professional dossier. Academic credentials, experience, and institutional affiliations.</p>
      </div>
      <div class="block-arrow">→</div>
    </a>

  </div>

  <div class="arch-footer">
    <div><span class="status-dot"></span> SYSTEM ONLINE</div>
    <div>ARCHITECTURE v4.0</div>
    <div>7 LEVELS DEEP</div>
  </div>

</div>

<script>
  // Scroll-based reveal animation
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Update elevator shaft indicator
        const depth = entry.target.dataset.depth;
        document.querySelectorAll('.shaft-indicator').forEach(indicator => {
          indicator.classList.remove('active');
        });
        document.querySelectorAll('.shaft-label').forEach(label => {
          label.classList.remove('active');
        });
        
        const activeIndicator = document.querySelector(`.shaft-indicator[data-level="${depth}"]`);
        const activeLabel = document.querySelector(`.shaft-label[data-level="${depth}"]`);
        if (activeIndicator) activeIndicator.classList.add('active');
        if (activeLabel) activeLabel.classList.add('active');
      }
    });
  }, observerOptions);

  // Observe all underground levels
  document.querySelectorAll('.underground-level').forEach(level => {
    observer.observe(level);
  });

  // Position elevator shaft indicators
  function positionShaftIndicators() {
    const shaft = document.querySelector('.elevator-shaft');
    const indicators = document.querySelectorAll('.shaft-indicator');
    const labels = document.querySelectorAll('.shaft-label');
    const shaftHeight = shaft.offsetHeight;
    const indicatorCount = indicators.length;
    const spacing = shaftHeight / (indicatorCount - 1);

    indicators.forEach((indicator, index) => {
      indicator.style.top = `${index * spacing}px`;
    });

    labels.forEach((label, index) => {
      label.style.top = `${index * spacing - 8}px`;
    });
  }

  positionShaftIndicators();
  window.addEventListener('resize', positionShaftIndicators);
</script>

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
