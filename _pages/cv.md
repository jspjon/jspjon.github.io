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
<link rel="stylesheet" href="/assets/css/system.css">

<style>
/* =========================================
HEADER DEL SISTEMA (versión compacta)
========================================= */
h1 { display: none; }
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
html[data-theme="dark"] .cv-page .cv-detail,
html[data-theme="dark"] .cv-page .cv-org,
html[data-theme="dark"] .cv-page .cv-card-date,
html[data-theme="dark"] .cv-page .cv-label,
html[data-theme="dark"] .cv-page .cv-supervisor{
  color:inherit;
  opacity:.8;
}

.cv-section { margin-top: 36px; }

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

.cv-number { color: var(--accent); font-size: .72rem; font-weight: 400; letter-spacing: 0.08em; }

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

.cv-entry:last-child { margin-bottom: 0; }

.cv-entry .cv-info { flex: 1; display: flex; flex-direction: column; gap: 6px; }

.cv-entry .cv-date { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; margin-bottom: 2px; }

.cv-entry h3 { margin: 0 0 4px; font-family: "JetBrains Mono", monospace; font-size: 1rem; line-height: 1.7; font-weight: 600; }

.cv-institution { margin: 0; font-size: 0.78rem; line-height: 1.7; font-weight: 600; opacity: 0.8; }

.cv-abbr { margin-left: 7px; padding: 2px 7px; border: 1px solid var(--line); border-radius: 3px; color: var(--accent); font-size: 0.62rem; letter-spacing: 0.06em; white-space: nowrap; }

.cv-detail { margin: 4px 0 0; font-size: 0.75rem; line-height: 1.9; color: var(--muted); }

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

.cv-entry:hover .cv-logo-box { border-color: var(--accent); }

.cv-university-logo { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; }

.cv-experience-list { display: grid; gap: 14px; }

.cv-card {
  padding: 24px 22px 20px;
  border: 1px solid var(--line);
  border-radius: 4px;
  transition: border-color .25s ease, transform .25s ease;
}

.cv-card:hover { border-color: var(--accent); transform: translateY(-2px); }

.cv-card-top { display: flex; justify-content: space-between; align-items: baseline; gap: 15px; }

.cv-card h3, .cv-skill h3 { margin: 0 0 10px; font-family: "JetBrains Mono", monospace; font-size: 1rem; line-height: 1.7; font-weight: 600; }

.cv-card-date { color: var(--muted); font-size: .62rem; letter-spacing: 0.06em; line-height: 1.6; text-transform: uppercase; white-space: nowrap; }

.cv-org { margin: 0 0 16px; color: var(--muted); font-size: .78rem; line-height: 1.7; opacity: 0.8; }

.cv-label { display: block; margin: 17px 0 8px; color: var(--muted); font-size: .62rem; letter-spacing: 0.06em; text-transform: uppercase; }

.cv-list { margin: 0; padding-left: 24px; font-size: .75rem; line-height: 1.9; list-style: disc; }
.cv-list li::marker { color: var(--accent); }
.cv-list li { margin-bottom: 6px; }

.cv-supervisor { margin: 17px 0 0; padding-top: 13px; border-top: 1px solid var(--line); color: var(--muted); font-size: .68rem; line-height: 1.9; }

.cv-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }

.cv-skill { padding: 24px 22px 20px; border: 1px solid var(--line); border-radius: 4px; transition: border-color .25s ease; }

.cv-skill:hover { border-color: var(--accent); }

.cv-skill p { margin: 0; font-size: .75rem; line-height: 1.9; opacity: 0.8; }

.cv-language-list { display: flex; flex-wrap: wrap; gap: 13px; }

.cv-language { flex: 1 1 160px; display: flex; justify-content: space-between; align-items: center; padding: 17px 18px; border: 1px solid var(--line); border-radius: 4px; }

.cv-language > div { display: flex; flex-direction: column; align-items: center; }

.cv-language strong { display: block; font-size: .85rem; margin-bottom: 4px; text-align: center; }

.cv-language span { display: block; color: var(--muted); font-size: .68rem; text-align: center; margin: 0; }

.cv-language-flag { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }

.cv-generated ul { margin: 0; padding: 0; list-style: none; }

.cv-generated li { padding: 17px 0; border-bottom: 1px solid var(--line); font-size: .75rem; line-height: 1.9; }

.cv-generated li:last-child { border-bottom: 0; }

/* =========================================
SECTION 07 — CERTIFICATION LEDGER
========================================= */
.cl-wrap{
  --cl-line:#e5e1d9; --cl-muted:#817766; --cl-accent:#9a8d78; --cl-text:#2a2a2a;
  font-family:"JetBrains Mono",monospace;
}
html[data-theme="dark"] .cl-wrap,
body[data-theme="dark"] .cl-wrap{
  --cl-line:#3b3529; --cl-muted:#a89d88; --cl-accent:#c9b48c; --cl-text:#ece5d6;
}

.cl-summary{ display:flex; flex-wrap:wrap; gap:10px; margin:0 0 26px; }
.cl-summary span{
  font-size:.58rem; letter-spacing:.22em; text-transform:uppercase;
  color:var(--cl-accent); padding:5px 12px;
  border:1px solid var(--cl-line); background:rgba(154,141,120,.05);
}

.cl-inst{ margin-bottom:26px; }
.cl-inst:last-child{ margin-bottom:0; }

.cl-head{
  display:flex; align-items:center; justify-content:space-between; gap:16px;
  padding:14px 16px; margin-bottom:12px;
  border:1px solid var(--cl-line);
}
.cl-head-info{ flex:1; min-width:0; }
.cl-head-info h3{
  margin:0 0 3px; font-family:"JetBrains Mono",monospace;
  font-size:1rem; line-height:1.6; font-weight:600; color:var(--cl-text);
}
.cl-meta{ margin:0; font-size:.68rem; line-height:1.6; color:var(--cl-muted); letter-spacing:.06em; }
.cl-count{
  flex-shrink:0; font-size:.58rem; letter-spacing:.18em; text-transform:uppercase;
  color:var(--cl-accent); padding:4px 10px; border:1px solid var(--cl-line);
  background:rgba(154,141,120,.05); white-space:nowrap;
}

.cl-courses{ display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }

.cl-course{
  display:flex; align-items:flex-start; gap:12px;
  padding:12px 14px;
  border:1px solid var(--cl-line);
  transition:border-color .25s ease, background .25s ease, transform .25s ease;
}
.cl-course:hover{
  border-color:var(--cl-accent); background:rgba(154,141,120,.05); transform:translateX(6px);
}
.cl-no{
  flex-shrink:0; font-size:.6rem; font-weight:700; letter-spacing:.1em;
  color:var(--cl-accent); font-variant-numeric:tabular-nums; padding-top:2px;
}
.cl-body{ min-width:0; }
.cl-course-name{ display:block; font-size:.72rem; line-height:1.7; color:var(--cl-text); }
.cl-course-type{
  display:block; margin-top:2px; font-size:.55rem; letter-spacing:.14em;
  text-transform:uppercase; color:var(--cl-muted);
}

@media (max-width:768px){
  .cl-courses{ grid-template-columns:1fr; }
  .cl-head{ flex-direction:column; align-items:flex-start; gap:8px; }
}

/* =========================================
SECTION 10 — CV ON REQUEST
========================================= */
.cv-btn{
  display:inline-block;
  font-size:.62rem; letter-spacing:.16em; text-transform:uppercase;
  padding:10px 14px; border:1px solid var(--line);
  color:var(--muted); text-decoration:none;
  transition:all .25s ease;
}
.cv-btn:hover{ border-color:var(--accent); color:var(--accent); }

.cv-details{ margin-top:14px; }
.cv-details summary{
  cursor:pointer; font-size:.62rem; letter-spacing:.14em; text-transform:uppercase;
  color:var(--muted); padding:12px 16px; border:1px solid var(--line);
  transition:all .25s ease;
}
.cv-details summary:hover{ color:var(--accent); border-color:var(--accent); }
.cv-details[open] summary{ color:var(--accent); border-color:var(--accent); }

.cv-footer { margin-top: 30px; padding-top: 16px; border-top: 1px solid var(--line); color: var(--muted); font-size: .68rem; line-height: 1.9; }

#cv-pdf iframe { min-height: 800px; }

@media (max-width: 768px) {
  .cv-heading { font-size: 1rem; }
  .cv-entry { flex-direction: column; align-items: flex-start; gap: 15px; padding: 20px; }
  .cv-entry h3 { font-size: 0.95rem; }
  .cv-logo-box { width: 80px; height: 80px; align-self: flex-end; }
  .cv-card { padding: 21px 19px; }
  .cv-card-top { flex-direction: column; gap: 4px; }
  .cv-grid { grid-template-columns: 1fr; }
  .cv-section { margin-top: 30px; }
  #cv-pdf iframe { min-height: 550px; }
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

    <div class="cv-entry">
  <div class="cv-info">
    <div class="cv-date">Until 2014 · Incomplete</div>
    <h3>Bachelor of Science in Financial Economics Engineering</h3>
    <p class="cv-institution">
      La Salle University
      <span class="cv-abbr">ULSA</span>
    </p>
    <p class="cv-detail">Completed 4 of 8 semesters, plus part of the fifth.</p>
  </div>
  <div class="cv-logo-box">
<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Logo_de_la_Universidad_La_Salle_sin_letras.svg" alt="Universidad La Salle Logo" class="cv-university-logo">
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
        <img src="{{ base_path }}/images/flag-spain.svg" alt="Spanish flag" class="cv-language-flag">
      </div>

      <div class="cv-language">
        <div>
          <strong>Italian</strong>
          <span>Fluent</span>
        </div>
        <img src="{{ base_path }}/images/flag-italy.svg" alt="Italian flag" class="cv-language-flag">
      </div>

      <div class="cv-language">
        <div>
          <strong>English</strong>
          <span>Fluent</span>
        </div>
        <img src="{{ base_path }}/images/flag-uk.svg" alt="English flag" class="cv-language-flag">
      </div>

    </div>
  </section>

    </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">06</span> Publications
    </h2>

    <article class="cv-card">
      <div class="cv-card-top">
        <h3>Macroeconomic Effects of Fiscal Consolidation and Monetary Stabilization: Evidence from Argentina, 2023–2026</h3>
        <span class="cv-card-date">2023–2026</span>
      </div>
      <p class="cv-org"><span class="cv-abbr" style="margin-left:0;">Ongoing Research</span> · Working Paper</p>
      <p class="cv-detail">
        This paper examines Argentina's fiscal and monetary adjustment during 2023–2025, evaluating
        whether fiscal consolidation, elimination of deficit monetization, and regulatory reform reversed
        a decades-long pattern of chronic inflation, recurrent deficits, and elevated poverty. Using official
        data, before-and-after comparisons, growth accounting, and sectoral decomposition, the analysis
        documents annual inflation falling from 211% in December 2023 to 31.8% by September 2025, alongside
        Argentina's first primary fiscal surplus in fourteen years (1.8% of GDP, 2024) and 4.4% GDP growth
        in 2025. Poverty, which rose to 52.9% during the initial contraction, fell to 28.2% by late 2025 —
        its lowest level since 2018 — equivalent to roughly 11.4 million people crossing the poverty line
        in eighteen months. Because this design does not support strict causal identification, the findings
        are interpreted through the lens of fiscal dominance in economies marked by chronic debt intolerance,
        where credible consolidation may restore price stability more durably than sustained monetization.
      </p>
    </article>
  </section>

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">07</span> Diplomas, Courses &amp; Certifications
    </h2>

    <div class="cl-wrap">

      <div class="cl-summary">
        <span>39 Programs</span>
        <span>10 Institutions</span>
        <span>Worldwide</span>
        <span>Archive Operational</span>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>Forage</h3>
            <p class="cl-meta">Online Platform · Global</p>
          </div>
          <span class="cl-count">6 Simulations</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.01</span><div class="cl-body"><span class="cl-course-name">Investment Banking Job Simulation</span><span class="cl-course-type">JPMorganChase</span></div></div>
          <div class="cl-course"><span class="cl-no">C.02</span><div class="cl-body"><span class="cl-course-name">Tax Job Simulation</span><span class="cl-course-type">PwC US</span></div></div>
          <div class="cl-course"><span class="cl-no">C.03</span><div class="cl-body"><span class="cl-course-name">Litigation Job Simulation</span><span class="cl-course-type">Morrison Foerster</span></div></div>
          <div class="cl-course"><span class="cl-no">C.04</span><div class="cl-body"><span class="cl-course-name">UK Law 101 Job Simulation</span><span class="cl-course-type">BCLP</span></div></div>
          <div class="cl-course"><span class="cl-no">C.05</span><div class="cl-body"><span class="cl-course-name">US Capital Markets Job Simulation</span><span class="cl-course-type">Freshfields</span></div></div>
          <div class="cl-course"><span class="cl-no">C.06</span><div class="cl-body"><span class="cl-course-name">Alternative Dispute Resolution Job Simulation</span><span class="cl-course-type">CIArb — Chartered Institute of Arbitrators</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>Hunt ADR</h3>
            <p class="cl-meta">Alternative Dispute Resolution Provider · United Kingdom</p>
          </div>
          <span class="cl-count">2 Courses</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.07</span><div class="cl-body"><span class="cl-course-name">All About Arbitration</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.08</span><div class="cl-body"><span class="cl-course-name">All About Mediation</span><span class="cl-course-type">Course</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>The World Bank Group</h3>
            <p class="cl-meta">International Organization · Washington, D.C.</p>
          </div>
          <span class="cl-count">5 Courses</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.09</span><div class="cl-body"><span class="cl-course-name">Introduction to Behavioral Science in Public Policy</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.10</span><div class="cl-body"><span class="cl-course-name">Documenting Development Data Using Metadata Standards</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.11</span><div class="cl-body"><span class="cl-course-name">Understanding Citizen Data for Better Decision-Making</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.12</span><div class="cl-body"><span class="cl-course-name">Manage Successful Field Research</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.13</span><div class="cl-body"><span class="cl-course-name">Behavioral Diagnostics for Public Policy</span><span class="cl-course-type">Course</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>National Human Rights Commission (CNDH)</h3>
            <p class="cl-meta">Government Agency · Mexico</p>
          </div>
          <span class="cl-count">1 Course</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.14</span><div class="cl-body"><span class="cl-course-name">Freedom of Expression</span><span class="cl-course-type">Course</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>CONDUSEF</h3>
            <p class="cl-meta">National Commission for the Protection of Financial Services Users · Mexico</p>
          </div>
          <span class="cl-count">2 Diplomas</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.15</span><div class="cl-body"><span class="cl-course-name">Diploma in Financial Education</span><span class="cl-course-type">Diploma</span></div></div>
          <div class="cl-course"><span class="cl-no">C.16</span><div class="cl-body"><span class="cl-course-name">Diploma in Insurance</span><span class="cl-course-type">Diploma</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>Supreme Court of Justice of the Nation (SCJN)</h3>
            <p class="cl-meta">Supreme Court · Mexico</p>
          </div>
          <span class="cl-count">1 Diploma</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.17</span><div class="cl-body"><span class="cl-course-name">Diploma in Amparo Law</span><span class="cl-course-type">Diploma</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>Electoral Judicial School — Federal Electoral Tribunal (TEPJF)</h3>
            <p class="cl-meta">Electoral Judicial Branch · Mexico</p>
          </div>
          <span class="cl-count">1 Diploma</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.18</span><div class="cl-body"><span class="cl-course-name">Diploma in Legal Epistemology</span><span class="cl-course-type">Diploma</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>CAF — Development Bank of Latin America and the Caribbean</h3>
            <p class="cl-meta">Multilateral Development Bank · Latin America</p>
          </div>
          <span class="cl-count">4 Courses</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.19</span><div class="cl-body"><span class="cl-course-name">Macroeconomics I (2nd Edition)</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.20</span><div class="cl-body"><span class="cl-course-name">Monetary Economics (2nd Edition)</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.21</span><div class="cl-body"><span class="cl-course-name">Economic Growth (2nd Edition)</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.22</span><div class="cl-body"><span class="cl-course-name">Dynamic Macroeconomics (2nd Edition)</span><span class="cl-course-type">Course</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>University of Urbino "Carlo Bo"</h3>
            <p class="cl-meta">Public University · Urbino, Italy</p>
          </div>
          <span class="cl-count">6 Courses</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.23</span><div class="cl-body"><span class="cl-course-name">The Rise of Artificial Intelligence</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.24</span><div class="cl-body"><span class="cl-course-name">Artificial Intelligence</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.25</span><div class="cl-body"><span class="cl-course-name">What Is Sustainability</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.26</span><div class="cl-body"><span class="cl-course-name">Money and Payments</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.27</span><div class="cl-body"><span class="cl-course-name">English4U2</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.28</span><div class="cl-body"><span class="cl-course-name">Digital Human (Human in the Digital Age)</span><span class="cl-course-type">Course</span></div></div>
        </div>
      </div>

      <div class="cl-inst">
        <div class="cl-head">
          <div class="cl-head-info">
            <h3>University of Naples Federico II — Federica Web Learning</h3>
            <p class="cl-meta">Public University · Naples, Italy</p>
          </div>
          <span class="cl-count">11 Courses</span>
        </div>
        <div class="cl-courses">
          <div class="cl-course"><span class="cl-no">C.29</span><div class="cl-body"><span class="cl-course-name">Macroeconomics</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.30</span><div class="cl-body"><span class="cl-course-name">Heterogeneous Agent Models in Macroeconomics</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.31</span><div class="cl-body"><span class="cl-course-name">Mathematical Methods for Economics</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.32</span><div class="cl-body"><span class="cl-course-name">Financial Intermediation</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.33</span><div class="cl-body"><span class="cl-course-name">Business English</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.34</span><div class="cl-body"><span class="cl-course-name">Tax Law</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.35</span><div class="cl-body"><span class="cl-course-name">Python Programming</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.36</span><div class="cl-body"><span class="cl-course-name">International Cyber Law</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.37</span><div class="cl-body"><span class="cl-course-name">Human Rights: Global and Local Protection</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.38</span><div class="cl-body"><span class="cl-course-name">Global Economic Strategies and Economic Intelligence</span><span class="cl-course-type">Course</span></div></div>
          <div class="cl-course"><span class="cl-no">C.39</span><div class="cl-body"><span class="cl-course-name">Corporate Governance</span><span class="cl-course-type">Course</span></div></div>
        </div>
      </div>

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
        Recognition for research contributions in economics, finance, law, or public policy.
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
        Supported students across disciplines through academic guidance, intellectual development, and assistance with educational goals.
      </p>
    </article>

    <article class="cv-card" style="margin-top: 14px;">
      <h3>Example Academic Committee Member</h3>
      <p class="cv-org">Example Academic Organization · 20XX–20XX</p>
      <p class="cv-detail">
        Example responsibilities: academic coordination, event planning, peer support, and research-related activities.
      </p>
    </article>
  </section>

  <section class="cv-section" id="cv-pdf">
    <h2 class="cv-heading">
      <span class="cv-number">10</span>
      Curriculum Vitae
    </h2>

    <article class="cv-card">
      <h3>Available upon request</h3>
      <p class="cv-detail">
        The complete professional dossier — education, experience, research, and certifications —
        is available upon request. Access it directly, or reach out through the contact links.
      </p>
      <p style="margin:16px 0 0; display:flex; gap:12px; flex-wrap:wrap;">
        <a class="cv-btn" href="{{ base_path }}/files/Jonathan_CV.pdf" target="_blank" rel="noopener noreferrer">Open PDF ↗</a>
        <a class="cv-btn" href="{{ base_path }}/files/Jonathan_CV.pdf" download>Download ↓</a>
      </p>
    </article>

    <details class="cv-details">
      <summary>Preview document</summary>
      <div style="border:1px solid var(--line); border-radius:4px; overflow:hidden; margin-top:12px;">
        <iframe src="{{ base_path }}/files/Jonathan_CV.pdf" title="Academic Curriculum Vitae" width="100%" height="800" style="display:block; border:0; background:#fff;" loading="lazy">
        </iframe>
      </div>
    </details>
  </section>

  <p class="cv-footer">
    Curriculum Vitae · Academic Profile · Last updated: 2026
  </p>

</div>
