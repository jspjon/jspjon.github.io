---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>

.cv-page {
  --line: #e5e1d9;
  --muted: #817766;
  --accent: #9a8d78;

  margin: 34px 0 50px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.91rem;
  line-height: 1.9;
}

/* HERO / INTRO */

.cv-hero {
  padding: 38px 38px;
  border: 1px solid var(--line);
  border-radius: 4px;
  margin-bottom: 48px;
}

.cv-eyebrow {
  margin: 0 0 25px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
  color: var(--accent);
  font-size: 0.76rem;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.cv-hero h2 {
  margin: 0 0 14px;
  padding: 0;
  border: 0;
  font-family: "JetBrains Mono", monospace;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 600;
}

.cv-tagline {
  color: var(--muted);
  font-size: .86rem;
  letter-spacing: .04em;
  margin-bottom: 25px;
}

.cv-intro {
  max-width: 820px;
  font-size: .91rem;
  line-height: 2;
}

.cv-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 25px;
}

.cv-meta span,
.cv-abbr {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid var(--line);
  border-radius: 3px;
  color: var(--muted);
  font-size: .75rem;
}

/* SECTIONS */

.cv-section {
  margin-top: 52px;
}

.cv-heading {
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin: 0 0 26px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--line);
  font-family: "JetBrains Mono", monospace;
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 600;
}

.cv-number {
  color: var(--accent);
  font-size: .82rem;
  font-weight: 400;
}

/* EDUCATION 🎓 - Cuadros con logo a la derecha */

.cv-entry {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding: 24px 28px;
  border: 1px solid var(--line);
  border-radius: 4px;
  margin-bottom: 17px;
  background-color: #fff;
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
  font-size: 0.83rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.cv-entry h3 {
  margin: 0;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.17rem;
  line-height: 1.4;
  font-weight: 600;
}

.cv-institution {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
}

.cv-abbr {
  margin-left: 7px;
  padding: 2px 7px;
  border: 1px solid var(--line);
  border-radius: 3px;
  color: var(--accent);
  font-size: 0.72rem;
  white-space: nowrap;
}

.cv-detail {
  margin: 4px 0 0;
  font-size: 0.86rem;
  line-height: 1.6;
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
  gap: 17px;
}

.cv-card {
  padding: 27px 28px;
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
  margin: 0 0 9px;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.02rem;
  line-height: 1.7;
  font-weight: 600;
}

.cv-card-date {
  color: var(--muted);
  font-size: .79rem;
  white-space: nowrap;
}

.cv-org {
  margin: 0 0 15px;
  color: var(--muted);
  font-size: .85rem;
}

.cv-label {
  display: block;
  margin: 17px 0 8px;
  color: var(--accent);
  font-size: .73rem;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.cv-list {
  margin: 0;
  padding-left: 21px;
  font-size: .86rem;
  line-height: 2;
}

.cv-list li {
  margin-bottom: 6px;
}

.cv-supervisor {
  margin: 17px 0 0;
  padding-top: 13px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: .79rem;
}

/* RESEARCH / SKILLS */

.cv-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 17px;
}

.cv-skill {
  padding: 24px 25px;
  border: 1px solid var(--line);
  border-radius: 4px;
  transition: border-color .25s ease;
}

.cv-skill:hover {
  border-color: var(--accent);
}

.cv-skill p {
  margin: 0;
  font-size: .85rem;
  line-height: 2;
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
  padding: 19px 20px;
  border: 1px solid var(--line);
  border-radius: 4px;
}

.cv-language strong {
  display: block;
  font-size: .91rem;
  margin-bottom: 4px;
}
  
.cv-language span {
  color: var(--muted);
  font-size: .79rem;
  text-align: center;
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
  font-size: .86rem;
  line-height: 2;
}

.cv-generated li:last-child {
  border-bottom: 0;
}

/* FOOTER */

.cv-footer {
  margin-top: 48px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: .77rem;
}

/* PDF */

#cv-pdf iframe {
  min-height: 800px;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .cv-hero {
    padding: 25px 21px;
  }

  .cv-hero h2 {
    font-size: 1.55rem;
  }

  .cv-heading {
    font-size: 1.08rem;
  }

  .cv-entry {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
  }

  .cv-entry h3 {
    font-size: 1.05rem;
  }

  .cv-logo-box {
    width: 80px;
    height: 80px;
    align-self: flex-end;
  }

  .cv-card {
    padding: 21px;
  }

  .cv-card-top {
    flex-direction: column;
    gap: 4px;
  }

  .cv-grid {
    grid-template-columns: 1fr;
  }

  .cv-section {
    margin-top: 40px;
  }

  #cv-pdf iframe {
    min-height: 550px;
  }
}
  
</style>

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
<img src="{{ base_path }}/images/ipn-logo.png" alt="IPN Logo" class="cv-university-logo">      </div>
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

    <article class="cv-card" style="margin-top: 12px;">
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

    <article class="cv-card" style="margin-top: 12px;">
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
