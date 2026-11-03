---
permalink: /
title: "Welcome to my website!"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<style>
  /* SUBTERRANEAN ARCHOLOGY - Underground Exploration System */
  .subterranean-system {
    margin: 80px 0 100px;
    font-family: "JetBrains Mono", monospace;
    position: relative;
    overflow: hidden;
  }

  .depth-container {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
  }

  /* Header del sistema subterráneo */
  .system-header {
    text-align: center;
    margin-bottom: 80px;
    position: relative;
    padding: 40px 20px;
  }

  .system-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, 
      transparent 0%, 
      #9a8d78 50%, 
      transparent 100%);
  }

  .system-title {
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #9a8d78;
    margin: 80px 0 12px 0;
    font-weight: 500;
  }

  .system-subtitle {
    font-size: 2.2rem;
    font-weight: 700;
    color: #2a2a2a;
    margin: 0 0 20px 0;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .system-description {
    font-size: 0.85rem;
    color: #817766;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
  }

  /* Shaft del ascensor (indicador de profundidad) */
  .elevator-shaft {
    position: fixed;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
  }

  .shaft-track {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom,
      transparent 0%,
      #e5e1d9 10%,
      #e5e1d9 90%,
      transparent 100%);
    transform: translateX(-50%);
  }

  .shaft-indicator {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border: 2px solid #9a8d78;
    border-radius: 50%;
    background: #faf9f7;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px rgba(154, 141, 120, 0.3);
  }

  .shaft-indicator.active {
    background: #9a8d78;
    box-shadow: 0 0 30px rgba(154, 141, 120, 0.6);
    transform: translateX(-50%) scale(1.3);
  }

  .shaft-label {
    position: absolute;
    right: 20px;
    font-size: 0.65rem;
    color: #9a8d78;
    letter-spacing: 0.1em;
    white-space: nowrap;
    transition: all 0.3s ease;
  }

  .shaft-label.active {
    color: #2a2a2a;
    font-weight: 600;
    transform: translateX(-5px);
  }

  /* Contenedor de pisos subterráneos */
  .underground-levels {
    position: relative;
    padding: 0 20px;
  }

  /* Cada nivel subterráneo */
  .underground-level {
    position: relative;
    margin-bottom: 120px;
    opacity: 0;
    transform: translateY(60px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .underground-level.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Estructura del nivel */
  .level-structure {
    display: grid;
    grid-template-columns: 120px 1fr 120px;
    gap: 40px;
    position: relative;
    padding: 50px 0;
    border-top: 1px solid #e5e1d9;
    border-bottom: 1px solid #e5e1d9;
    background: linear-gradient(to bottom,
      transparent 0%,
      rgba(229, 225, 217, 0.05) 50%,
      transparent 100%);
  }

  /* Columnas estructurales */
  .level-structure::before,
  .level-structure::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom,
      #9a8d78 0%,
      #e5e1d9 50%,
      #9a8d78 100%);
    opacity: 0.3;
  }

  .level-structure::before { left: 100px; }
  .level-structure::after { right: 100px; }

  /* Indicador de profundidad (izquierda) */
  .depth-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .depth-marker {
    position: relative;
    text-align: center;
  }

  .depth-number {
    font-size: 4.5rem;
    font-weight: 800;
    color: #e5e1d9;
    line-height: 1;
    letter-spacing: -0.03em;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
  }

  .underground-level.visible .depth-number {
    color: #9a8d78;
  }

  .depth-unit {
    font-size: 0.7rem;
    color: #9a8d78;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 8px;
    font-weight: 500;
  }

  .depth-line {
    position: absolute;
    left: 50%;
    top: -30px;
    bottom: -30px;
    width: 1px;
    background: repeating-linear-gradient(
      to bottom,
      #e5e1d9 0px,
      #e5e1d9 6px,
      transparent 6px,
      transparent 12px
    );
    opacity: 0.4;
    z-index: 1;
  }

  /* Contenido principal del nivel (centro) */
  .level-content {
    position: relative;
    padding: 20px 0;
  }

  /* Efecto de "habitación" con perspectiva */
  .level-room {
    position: relative;
    padding: 40px;
    background: transparent;
    border: 1px solid transparent;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .level-room:hover {
    background: rgba(250, 249, 247, 0.8);
    border-color: #e5e1d9;
    transform: translateX(10px);
    box-shadow: 
      -20px 0 40px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }

  .level-room:hover ~ .depth-indicator .depth-number {
    color: #2a2a2a;
    transform: scale(1.1);
  }

  /* Detalles arquitectónicos: vigas y tuberías */
  .level-room::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right,
      transparent 0%,
      #e5e1d9 20%,
      #e5e1d9 80%,
      transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .level-room:hover::before {
    opacity: 1;
  }

  .level-room::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right,
      transparent 0%,
      #e5e1d9 20%,
      #e5e1d9 80%,
      transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .level-room:hover::after {
    opacity: 1;
  }

  /* Etiquetas del nivel */
  .level-tag {
    display: inline-block;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #9a8d78;
    margin-bottom: 16px;
    padding: 6px 12px;
    border: 1px solid #e5e1d9;
    background: rgba(250, 249, 247, 0.5);
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .level-room:hover .level-tag {
    background: #9a8d78;
    color: #faf9f7;
    border-color: #9a8d78;
  }

  .level-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #2a2a2a;
    margin: 0 0 12px 0;
    line-height: 1.3;
    letter-spacing: -0.01em;
    transition: all 0.4s ease;
  }

  .level-room:hover .level-title {
    transform: translateX(5px);
  }

  .level-description {
    font-size: 0.85rem;
    color: #817766;
    line-height: 1.8;
    margin: 0 0 20px 0;
    max-width: 500px;
  }

  /* Detalles técnicos del nivel */
  .level-details {
    display: flex;
    gap: 24px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid #e5e1d9;
  }

  .level-detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .level-detail-label {
    font-size: 0.6rem;
    color: #9a8d78;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .level-detail-value {
    font-size: 0.75rem;
    color: #2a2a2a;
    font-weight: 600;
  }

  /* Indicador de acceso (derecha) */
  .access-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .access-icon {
    width: 50px;
    height: 50px;
    border: 2px solid #e5e1d9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #9a8d78;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    background: #faf9f7;
  }

  .level-room:hover ~ .access-indicator .access-icon {
    border-color: #9a8d78;
    background: #9a8d78;
    color: #faf9f7;
    transform: scale(1.15) rotate(90deg);
    box-shadow: 0 0 30px rgba(154, 141, 120, 0.4);
  }

  .access-label {
    font-size: 0.6rem;
    color: #9a8d78;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-top: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .level-room:hover ~ .access-indicator .access-label {
    color: #2a2a2a;
    transform: translateY(3px);
  }

  /* Nivel especial: Ground Zero (entrada) */
  .underground-level.ground-zero .level-structure {
    background: linear-gradient(to bottom,
      rgba(229, 225, 217, 0.15) 0%,
      rgba(229, 225, 217, 0.05) 100%);
    border-top: 3px solid #9a8d78;
  }

  .underground-level.ground-zero .depth-number {
    color: #2a2a2a;
    font-size: 5rem;
  }

  /* Nivel especial: Apex (cima) */
  .underground-level.apex .level-structure {
    background: linear-gradient(to top,
      rgba(229, 225, 217, 0.15) 0%,
      rgba(229, 225, 217, 0.05) 100%);
    border-bottom: 3px solid #9a8d78;
  }

  /* Footer del sistema */
  .system-footer {
    margin-top: 100px;
    padding: 40px 20px;
    border-top: 1px solid #e5e1d9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7rem;
    color: #9a8d78;
    letter-spacing: 0.1em;
  }

  .system-footer-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #9a8d78;
    animation: statusPulse 2.5s ease-in-out infinite;
  }

  @keyframes statusPulse {
    0%, 100% { 
      opacity: 1;
      box-shadow: 0 0 10px rgba(154, 141, 120, 0.5);
    }
    50% { 
      opacity: 0.4;
      box-shadow: 0 0 5px rgba(154, 141, 120, 0.3);
    }
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .elevator-shaft {
      display: none;
    }

    .level-structure {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .depth-indicator,
    .access-indicator {
      display: none;
    }

    .level-structure::before,
    .level-structure::after {
      display: none;
    }

    .level-room {
      padding: 30px 20px;
    }

    .level-title {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .system-subtitle {
      font-size: 1.6rem;
    }

    .level-room {
      padding: 25px 15px;
    }

    .level-details {
      flex-direction: column;
      gap: 16px;
    }
  }
</style>

<div class="subterranean-system">
  <div class="depth-container">
    
    <!-- Header del sistema -->
    <div class="system-header">
      <p class="system-title">Subterranean Archology</p>
      <h1 class="system-subtitle">Underground Exploration System</h1>
      <p class="system-description">
        Navigate through seven subterranean levels of academic architecture. 
        Each level represents a distinct domain of research, teaching, and professional practice.
      </p>
    </div>

    <!-- Elevator shaft indicator (fixed position) -->
    <div class="elevator-shaft">
      <div class="shaft-track"></div>
      <div class="shaft-indicator" data-level="6"></div>
      <div class="shaft-label" data-level="6">-21.0m</div>
      <div class="shaft-indicator" data-level="5"></div>
      <div class="shaft-label" data-level="5">-17.5m</div>
      <div class="shaft-indicator" data-level="4"></div>
      <div class="shaft-label" data-level="4">-14.0m</div>
      <div class="shaft-indicator" data-level="3"></div>
      <div class="shaft-label" data-level="3">-10.5m</div>
      <div class="shaft-indicator" data-level="2"></div>
      <div class="shaft-label" data-level="2">-7.0m</div>
      <div class="shaft-indicator" data-level="1"></div>
      <div class="shaft-label" data-level="1">-3.5m</div>
      <div class="shaft-indicator" data-level="0"></div>
      <div class="shaft-label" data-level="0">±0.0m</div>
    </div>

    <!-- Underground levels -->
    <div class="underground-levels">

      <!-- LEVEL -06: CV (Apex) -->
      <div class="underground-level apex" data-depth="6">
        <div class="level-structure">
          <div class="depth-indicator">
            <div class="depth-line"></div>
            <div class="depth-marker">
              <div class="depth-number">-06</div>
              <div class="depth-unit">Apex Level</div>
            </div>
          </div>
          <div class="level-content">
            <a href="/cv/" class="level-room">
              <span class="level-tag">Level -06 · Primary Access</span>
              <h2 class="level-title">Curriculum Vitae</h2>
              <p class="level-description">
                Comprehensive professional portfolio documenting academic credentials, 
                research experience, teaching positions, and professional achievements.
              </p>
              <div class="level-details">
                <div class="level-detail">
                  <span class="level-detail-label">Classification</span>
                  <span class="level-detail-value">Professional Record</span>
                </div>
                <div class="level-detail">
                  <span class="level-detail-label">Status</span>
                  <span class="level-detail-value">Current</span>
                </div>
              </div>
            </a>
          </div>
          <div class="access-indicator">
            <div class="access-icon">↓</div>
            <span class="access-label">Access</span>
          </div>
        </div>
      </div>

      <!-- LEVEL -05: Books -->
      <div class="underground-level" data-depth="5">
        <div class="level-structure">
          <div class="depth-indicator">
            <div class="depth-line"></div>
            <div class="depth-marker">
              <div class="depth-number">-05</div>
              <div class="depth-unit">Archive Level</div>
            </div>
          </div>
          <div class="level-content">
            <a href="/books/" class="level-room">
              <span class="level-tag">Level -05 · Works Archive</span>
              <h2 class="level-title">Books & Publications</h2>
              <p class="level-description">
                Scholarly books, monographs, and edited volumes exploring economic theory, 
                institutional analysis, and the foundations of market prosperity.
              </p>
              <div class="level-details">
                <div class="level-detail">
                  <span class="level-detail-label">Classification</span>
                  <span class="level-detail-value">Published Works</span>
                </div>
                <div class="level-detail">
                  <span class="level-detail-label">Format</span>
                  <span class="level-detail-value">Books & Chapters</span>
                </div>
              </div>
            </a>
          </div>
          <div class="access-indicator">
            <div class="access-icon">↓</div>
            <span class="access-label">Access</span>
          </div>
        </div>
      </div>

      <!-- LEVEL -04: Portfolio -->
      <div class="underground-level" data-depth="4">
        <div class="level-structure">
          <div class="depth-indicator">
            <div class="depth-line"></div>
            <div class="depth-marker">
              <div class="depth-number">-04</div>
              <div class="depth-unit">Project Level</div>
            </div>
          </div>
          <div class="level-content">
            <a href="/portfolio/" class="level-room">
              <span class="level-tag">Level -04 · Project Hall</span>
              <h2 class="level-title">Portfolio</h2>
              <p class="level-description">
                Selected research projects, case studies, and applied economic analyses 
                demonstrating methodological rigor and practical impact.
              </p>
              <div class="level-details">
                <div class="level-detail">
                  <span class="level-detail-label">Classification</span>
                  <span class="level-detail-value">Research Projects</span>
                </div>
                <div class="level-detail">
                  <span class="level-detail-label">Scope</span>
                  <span class="level-detail-value">Applied Analysis</span>
                </div>
              </div>
            </a>
          </div>
          <div class="access-indicator">
            <div class="access-icon">↓</div>
            <span class="access-label">Access</span>
          </div>
        </div>
      </div>

      <!-- LEVEL -03: Mentorship -->
      <div class="underground-level" data-depth="3">
        <div class="level-structure">
          <div class="depth-indicator">
            <div class="depth-line"></div>
            <div class="depth-marker">
              <div class="depth-number">-03</div>
              <div class="depth-unit">Guidance Level</div>
            </div>
          </div>
          <div class="level-content">
            <a href="/mentorship/" class="level-room">
              <span class="level-tag">Level -03 · Guidance Center</span>
              <h2 class="level-title">Mentorship</h2>
              <p class="level-description">
                Academic guidance and professional mentorship programs supporting students 
                across disciplines in their intellectual and career development.
              </p>
              <div class="level-details">
                <div class="level-detail">
                  <span class="level-detail-label">Classification</span>
                  <span class="level-detail-value">Academic Support</span>
                </div>
                <div class="level-detail">
                  <span class="level-detail-label">Focus</span>
                  <span class="level-detail-value">Student Development</span>
                </div>
              </div>
            </a>
          </div>
          <div class="access-indicator">
            <div class="access-icon">↓</div>
            <span class="access-label">Access</span>
          </div>
        </div>
      </div>

      <!-- LEVEL -02: Essays -->
      <div class="underground-level" data-depth="2">
        <div class="level-structure">
          <div class="depth-indicator">
            <div class="depth-line"></div>
            <div class="depth-marker">
              <div class="depth-number">-02</div>
              <div class="depth-unit">Broadcast Level</div>
            </div>
          </div>
          <div class="level-content">
            <a href="/essays/" class="level-room">
              <span class="level-tag">Level -02 · Signal Transmission</span>
              <h2 class="level-title">Essays & Op-Eds</h2>
              <p class="level-description">
                Analytical essays and opinion pieces addressing contemporary economic policy, 
                institutional reform, and the philosophical foundations of free markets.
              </p>
              <div class="level-details">
                <div class="level-detail">
                  <span class="level-detail-label">Classification</span>
                  <span class="level-detail-value">Public Commentary</span>
                </div>
                <div class="level-detail">
                  <span class="level-detail-label">Format</span>
                  <span class="level-detail-value">Essays & Articles</span>
                </div>
              </div>
            </a>
          </div>
          <div class="access-indicator">
            <div class="access-icon">↓</div>
            <span class="access-label">Access</span>
          </div>
        </div>
      </div>

      <!-- LEVEL -01: Publications -->
      <div class="underground-level" data-depth="1">
        <div class="level-structure">
          <div class="depth-indicator">
            <div class="depth-line"></div>
            <div class="depth-marker">
              <div class="depth-number">-01</div>
              <div class="depth-unit">Repository Level</div>
            </div>
          </div>
          <div class="level-content">
            <a href="/publications/" class="level-room">
              <span class="level-tag">Level -01 · Data Repository</span>
              <h2 class="level-title">Publications</h2>
              <p class="level-description">
                Peer-reviewed academic papers and research articles in economics, law, 
                finance, and public policy, contributing to scholarly discourse.
              </p>
              <div class="level-details">
                <div class="level-detail">
                  <span class="level-detail-label">Classification</span>
                  <span class="level-detail-value">Academic Research</span>
                </div>
                <div class="level-detail">
                  <span class="level-detail-label">Format</span>
                  <span class="level-detail-value">Journal Articles</span>
                </div>
              </div>
            </a>
          </div>
          <div class="access-indicator">
            <div class="access-icon">↓</div>
            <span class="access-label">Access</span>
          </div>
        </div>
      </div>

      <!-- LEVEL 00: About (Ground Zero) -->
      <div class="underground-level ground-zero" data-depth="0">
        <div class="level-structure">
          <div class="depth-indicator">
            <div class="depth-line"></div>
            <div class="depth-marker">
              <div class="depth-number">00</div>
              <div class="depth-unit">Ground Zero</div>
            </div>
          </div>
          <div class="level-content">
            <a href="/" class="level-room">
              <span class="level-tag">Level 00 · Main Entrance</span>
              <h2 class="level-title">Jonathan Simon P.</h2>
              <p class="level-description">
                Interdisciplinary scholar specializing in law, economics, finance, accounting, 
                and public policy. Committed to advancing knowledge at the intersection of 
                market institutions and human prosperity.
              </p>
              <div class="level-details">
                <div class="level-detail">
                  <span class="level-detail-label">Classification</span>
                  <span class="level-detail-value">Personal Profile</span>
                </div>
                <div class="level-detail">
                  <span class="level-detail-label">Languages</span>
                  <span class="level-detail-value">ES · IT · EN</span>
                </div>
              </div>
            </a>
          </div>
          <div class="access-indicator">
            <div class="access-icon">↓</div>
            <span class="access-label">Access</span>
          </div>
        </div>
      </div>

    </div>

    <!-- System footer -->
    <div class="system-footer">
      <div class="system-footer-item">
        <span class="status-indicator"></span>
        <span>SYSTEM OPERATIONAL</span>
      </div>
      <div class="system-footer-item">
        <span>ARCHITECTURE v3.0</span>
      </div>
      <div class="system-footer-item">
        <span>7 LEVELS · 21.0m DEPTH</span>
      </div>
    </div>

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
