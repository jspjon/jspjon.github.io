---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- JETBRAINS MONO FONT -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>
/* =========================================
HEADER DEL SISTEMA (versión compacta)
========================================= */
/* El título del theme, fuera... */
h1 { display: none; }
/* ...pero el nuestro, dentro */
.am-header h1 { display: block !important; }
.am-header { text-align: center; margin: 0 auto 6px; padding: 0 20px 24px; border-bottom: 1px solid #e5e1d9; }
.am-header h2 { font-size: .7rem; letter-spacing: .3em; text-transform: uppercase; color: #9a8d78; font-weight: 500; margin-bottom: 18px; }
.am-header h1 { font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 700; letter-spacing: -.02em; line-height: 1.3; margin-bottom: 14px; color: #2a2a2a; }
.am-welcome { display: block; font-size: .55em; font-weight: 500; letter-spacing: .02em; color: #817766; margin-bottom: 8px; }
.am-main-title { display: block; font-size: 1em; font-weight: 700; letter-spacing: -.02em; }
.am-header > p { font-size: .78rem; color: #817766; max-width: 700px; margin: 0 auto; line-height: 1.75; }
.am-depth { display: inline-block; font-size: .58rem; letter-spacing: .28em; text-transform: uppercase; color: #9a8d78; padding: 5px 12px; border: 1px solid #e5e1d9; background: rgba(154,141,120,.05); margin-top: 18px; }

/* =========================================
CURRICULUM VITAE (escala Essays)
========================================= */
.cv-page {
  --line: #e5e1d9;
  --muted: #817766;
  --accent: #9a8d78;

  margin: 0 0 36px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  line-height: 1.9;
}

/* SECTIONS */

.cv-section {
  margin-top: 36px;
}

.cv-heading {
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin: 0 0 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
  font-family: "JetBrains Mono", monospace;
  font-size: 1.12rem;
  line-height: 1.7;
  font-weight: 600;
}

.cv-number {
  color: var(--accent);
  font-size: .72rem;
  font-weight: 400;
  letter-spacing: 0.08em;
}

/* EDUCATION 🎓 - Cuadros con logo a la derecha */

.cv-entry {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding: 24px 22px 20px;
  border: 1px solid var(--line);
  border-radius: 4px;
  margin-bottom: 14px;
  background-color: transparent;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.cv-entry:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(154, 141, 120, 0.1);
}

.cv-entry:last-child {
  margin-bottom: 0;
}

.cv-entry .cv-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cv-entry .cv-date {
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 2px;
}

.cv-entry h3 {
  margin: 0 0 4px;
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 600;
}

.cv-institution {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.7;
  font-weight: 600;
  opacity: 0.8;
}

.cv-abbr {
  margin-left: 7px;
  padding: 2px 7px;
  border: 1px solid var(--line);
  border-radius: 3px;
  color: var(--accent);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

.cv-detail {
  margin: 4px 0 0;
  font-size: 0.75rem;
  line-height: 1.9;
  color: var(--muted);
}

.cv-logo-box {
  flex-shrink: 0;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: #fff;
  transition: border-color 0.25s ease;
}

.cv-entry:hover .cv-logo-box {
  border-color: var(--accent);
}

.cv-university-logo {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

/* EXPERIENCE */

.cv-experience-list {
  display: grid;
  gap: 14px;
}

.cv-card {
  padding: 24px 22px 20px;
  border: 1px solid var(--line);
  border-radius: 4px;
  transition: border-color .25s ease,
              transform .25s ease;
}

.cv-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.cv-card-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 15px;
}

.cv-card h3,
.cv-skill h3 {
  margin: 0 0 10px;
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 600;
}

.cv-card-date {
  color: var(--muted);
  font-size: .62rem;
  letter-spacing: 0.06em;
  line-height: 1.6;
  text-transform: uppercase;
  white-space: nowrap;
}

.cv-org {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: .78rem;
  line-height: 1.7;
  opacity: 0.8;
}

.cv-label {
  display: block;
  margin: 17px 0 8px;
  color: var(--muted);
  font-size: .62rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.cv-list {
  margin: 0;
  padding-left: 21px;
  font-size: .75rem;
  line-height: 1.9;
}

.cv-list li {
  margin-bottom: 6px;
}

.cv-supervisor {
  margin: 17px 0 0;
  padding-top: 13px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: .68rem;
  line-height: 1.9;
}

/* RESEARCH / SKILLS */

.cv-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.cv-skill {
  padding: 24px 22px 20px;
  border: 1px solid var(--line);
  border-radius: 4px;
  transition: border-color .25s ease;
}

.cv-skill:hover {
  border-color: var(--accent);
}

.cv-skill p {
  margin: 0;
  font-size: .75rem;
  line-height: 1.9;
  opacity: 0.8;
}

/* LANGUAGES */

.cv-language-list {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
}

.cv-language {
  flex: 1 1 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 18px;
  border: 1px solid var(--line);
  border-radius: 4px;
}

.cv-language > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cv-language strong {
  display: block;
  font-size: .85rem;
  margin-bottom: 4px;
  text-align: center;
}

.cv-language span {
  display: block;
  color: var(--muted);
  font-size: .68rem;
  text-align: center;
  margin: 0;
}

.cv-language-flag {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

/* GENERATED PUBLICATIONS / TALKS */

.cv-generated ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cv-generated li {
  padding: 17px 0;
  border-bottom: 1px solid var(--line);
  font-size: .75rem;
  line-height: 1.9;
}

.cv-generated li:last-child {
  border-bottom: 0;
}

/* FOOTER */

.cv-footer {
  margin-top: 30px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: .68rem;
  line-height: 1.9;
}

/* PDF */

#cv-pdf iframe {
  min-height: 800px;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .cv-heading {
    font-size: 1rem;
  }

  .cv-entry {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
  }

  .cv-entry h3 {
    font-size: 0.95rem;
  }

  .cv-logo-box {
    width: 80px;
    height: 80px;
    align-self: flex-end;
  }

  .cv-card {
    padding: 21px 19px;
  }

  .cv-card-top {
    flex-direction: column;
    gap: 4px;
  }

  .cv-grid {
    grid-template-columns: 1fr;
  }

  .cv-section {
    margin-top: 30px;
  }

  #cv-pdf iframe {
    min-height: 550px;
  }
}
</style>

<!-- CABECERA DEL SISTEMA -->
<header class="am-header">
  <h2>Primary Access</h2>
  <h1><span class="am-welcome">Education · Experience · Research</span><span class="am-main-title">Curriculum Vitae</span></h1>
  <p>Comprehensive professional dossier documenting academic credentials, research experience, and achievements.</p>
  <span class="am-depth">10 Sections · Updated 2026</span>
</header>

<div class="cv-page">

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">01</span> Education
    </h2>

    <!-- Universidad 1: UACH -->
    <div class="cv-entry">
      <div class="cv-info">
        <div class="cv-date">2026</div>
        <h3>Bachelor of Laws (LL.B.)</h3>
        <p class="cv-institution">
          Autonomous University of Chihuahua
          <span class="cv-abbr">UACH</span>
        </p>
        <p class="cv-detail">Legal Specializations · Corporate, International & Tax Law</p>
      </div>
      <div class="cv-logo-box">
        <img src="{{ base_path }}/images/uach-logo.png" alt="UACH Logo" class="cv-university-logo">
      </div>
    </div>

    <!-- Universidad 2: Tecmilenio -->
    <div class="cv-entry">
      <div class="cv-info">
        <div class="cv-date">2022</div>
        <h3>Bachelor of Business Administration (BBA)</h3>
        <p class="cv-institution">
          Tecmilenio University
          <span class="cv-abbr">UTM</span>
        </p>
        <p class="cv-detail">Major in Finance.</p>
      </div>
      <div class="cv-logo-box">
        <img src="{{ base_path }}/images/tecmilenio-logo.png" alt="Tecmilenio Logo" class="cv-university-logo">
      </div>
    </div>

    <!-- Universidad 3: IPN -->
    <div class="cv-entry">
      <div class="cv-info">
        <div class="cv-date">2017</div>
        <h3>Bachelor of Accounting (BAcc)</h3>
        <p class="cv-institution">
          National Polytechnic Institute
          <span class="cv-abbr">IPN</span>
        </p>
        <p class="cv-detail">Major in Taxation.</p>
      </div>
      <div class="cv-logo-box">
        <img src="{{ base_path }}/images/ipn-logo.png" alt="IPN Logo" class="cv-university-logo">
      </div>
    </div>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">02</span> Professional Experience
    </h2>

    <div class="cv-experience-list">

      <article class="cv-card">
        <div class="cv-card-top">
          <h3>Academic Pages Collaborator</h3>
          <span class="cv-card-date">Spring 2024</span>
        </div>
        <p class="cv-org">GitHub University</p>
        <span class="cv-label">Responsibilities</span>
        <ul class="cv-list">
          <li>Updated and improved academic website templates.</li>
          <li>Reviewed website structure, content organization, and usability.</li>
          <li>Contributed to documentation and template maintenance.</li>
        </ul>
        <p class="cv-supervisor">Supervisor: The Users</p>
      </article>

      <article class="cv-card">
        <div class="cv-card-top">
          <h3>Research Assistant</h3>
          <span class="cv-card-date">Fall 2015</span>
        </div>
        <p class="cv-org">GitHub University</p>
        <span class="cv-label">Responsibilities</span>
        <ul class="cv-list">
          <li>Reviewed research materials and organized project documentation.</li>
          <li>Assisted with collaborative review workflows and pull requests.</li>
          <li>Supported the maintenance of shared research resources.</li>
        </ul>
        <p class="cv-supervisor">Supervisor: Professor Hub</p>
      </article>

      <article class="cv-card">
        <div class="cv-card-top">
          <h3>Research Assistant</h3>
          <span class="cv-card-date">Summer 2015</span>
        </div>
        <p class="cv-org">GitHub University</p>
        <span class="cv-label">Responsibilities</span>
        <ul class="cv-list">
          <li>Organized and categorized project issues.</li>
          <li>Maintained project tracking records and research resources.</li>
          <li>Supported collaborative project coordination.</li>
        </ul>
        <p class="cv-supervisor">Supervisor: Professor Git</p>
      </article>

    </div>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">03</span> Research Interests
    </h2>

    <div class="cv-grid">
      <article class="cv-skill">
        <h3>Political Economy & Institutions</h3>
        <p>Economic theory, public choice, institutional economics, classical liberalism, and economic freedom.</p>
      </article>
      <article class="cv-skill">
        <h3>Macroeconomics & Monetary Policy</h3>
        <p>Inflation, monetary stabilization, fiscal-monetary interactions, and macroeconomic performance.</p>
      </article>
      <article class="cv-skill">
        <h3>Public Finance & Taxation</h3>
        <p>Tax policy, fiscal sustainability, public expenditure, and international taxation.</p>
      </article>
      <article class="cv-skill">
        <h3>Law & Institutions</h3>
        <p>Property rights, corporate law, constitutional frameworks, and regulatory institutions.</p>
      </article>
      <article class="cv-skill">
        <h3>Finance & Accounting</h3>
        <p>Financial analysis, corporate finance, accounting standards, and financial reporting.</p>
      </article>
      <article class="cv-skill">
        <h3>Economic History & Development</h3>
        <p>Adam Smith, the Enlightenment, comparative institutions, and long-term prosperity.</p>
      </article>
    </div>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">04</span> Skills & Competencies
    </h2>

    <div class="cv-grid">
      <article class="cv-skill">
        <h3>Legal Research</h3>
        <p>Legal research, statutory interpretation, regulatory analysis, and corporate law.</p>
      </article>
      <article class="cv-skill">
        <h3>Economic Analysis</h3>
        <p>Macroeconomic indicators, fiscal policy assessment, and comparative analysis.</p>
      </article>
      <article class="cv-skill">
        <h3>Finance & Accounting</h3>
        <p>Financial statement analysis, taxation, accounting principles, and reporting.</p>
      </article>
      <article class="cv-skill">
        <h3>Research & Communication</h3>
        <p>Literature reviews, academic writing, critical analysis, and research synthesis.</p>
      </article>
    </div>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">05</span> Languages
    </h2>

    <div class="cv-language-list">

      <div class="cv-language">
        <div>
          <strong>Spanish</strong>
          <span>Fluent</span>
        </div>
        <img src="{{ base_path }}/images/flag-spain.svg"
             alt="Spanish flag"
             class="cv-language-flag">
      </div>

      <div class="cv-language">
        <div>
          <strong>Italian</strong>
          <span>Fluent</span>
        </div>
        <img src="{{ base_path }}/images/flag-italy.svg"
             alt="Italian flag"
             class="cv-language-flag">
      </div>

      <div class="cv-language">
        <div>
          <strong>English</strong>
          <span>Fluent</span>
        </div>
        <img src="{{ base_path }}/images/flag-uk.svg"
             alt="English flag"
             class="cv-language-flag">
      </div>

    </div>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">06</span> Publications
    </h2>
    <div class="cv-generated">
      <ul>
        {% for post in site.publications reversed %}
          {% include archive-single-cv.html %}
        {% endfor %}
      </ul>
    </div>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">07</span> Talks & Presentations
    </h2>
    <div class="cv-generated">
      <ul>
        {% for post in site.talks reversed %}
          {% include archive-single-talk-cv.html %}
        {% endfor %}
      </ul>
    </div>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">08</span> Awards & Academic Distinctions
    </h2>

    <article class="cv-card">
      <h3>Example Academic Distinction</h3>
      <p class="cv-org">Example University · 20XX</p>
      <p class="cv-detail">
        Recognition for academic achievement and outstanding performance.
      </p>
    </article>

    <article class="cv-card" style="margin-top: 14px;">
      <h3>Example Research Recognition</h3>
      <p class="cv-org">Example Academic Institution · 20XX</p>
      <p class="cv-detail">
        Recognition for research contributions in economics, finance,
        law, or public policy.
      </p>
    </article>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">09</span> Academic Service & Leadership
    </h2>

    <article class="cv-card">
      <h3>Academic Mentorship</h3>
      <p class="cv-detail">
        Supported students across disciplines through academic guidance,
        intellectual development, and assistance with educational goals.
      </p>
    </article>

    <article class="cv-card" style="margin-top: 14px;">
      <h3>Example Academic Committee Member</h3>
      <p class="cv-org">Example Academic Organization · 20XX–20XX</p>
      <p class="cv-detail">
        Example responsibilities: academic coordination, event planning,
        peer support, and research-related activities.
      </p>
    </article>
  </section>

  <section class="cv-section" id="cv-pdf">
    <h2 class="cv-heading">
      <span class="cv-number">10</span>
      Curriculum Vitae — PDF
    </h2>

    <p class="cv-detail" style="margin-bottom: 18px;">
      View or download the complete academic curriculum vitae.
    </p>

    <div style="border: 1px solid #e5e1d9; border-radius: 4px; overflow: hidden;">
      <iframe
        src="{{ base_path }}/files/Jonathan_CV.pdf"
        title="Academic Curriculum Vitae"
        width="100%"
        height="800"
        style="display: block; border: 0; background: #fff;"
        loading="lazy">
      </iframe>
    </div>

    <p style="margin-top: 18px;">
      <a
        href="{{ base_path }}/files/Jonathan_CV.pdf"
        target="_blank"
        rel="noopener noreferrer">
        Open PDF in a new tab ↗
      </a>
      &nbsp; · &nbsp;
      <a
        href="{{ base_path }}/files/Jonathan_CV.pdf"
        download>
        Download CV ↓
      </a>
    </p>
  </section>

  <p class="cv-footer">
    Curriculum Vitae · Academic Profile · Last updated: 2026
  </p>

</div>
