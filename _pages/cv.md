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
  margin: 28px 0 44px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  line-height: 1.95;
}

.cv-hero {
  padding: 28px 30px;
  border: 1px solid var(--line);
  border-radius: 4px;
  margin-bottom: 36px;
}

.cv-eyebrow {
  margin: 0 0 22px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
  color: var(--accent);
  font-size: 0.65rem;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.cv-hero h2 {
  margin: 0 0 10px;
  padding: 0;
  border: 0;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight: 600;
}

.cv-tagline {
  color: var(--muted);
  font-size: .7rem;
  letter-spacing: .04em;
  margin-bottom: 22px;
}

.cv-intro {
  max-width: 760px;
  font-size: .76rem;
  line-height: 2.1;
}

.cv-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.cv-meta span,
.cv-abbr {
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid var(--line);
  border-radius: 3px;
  color: var(--muted);
  font-size: .64rem;
}

.cv-section {
  margin-top: 38px;
}

.cv-heading {
  display: flex;
  align-items: baseline;
  gap: 13px;
  margin: 0 0 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
  font-family: "JetBrains Mono", monospace;
  font-size: 1.02rem;
  line-height: 1.8;
  font-weight: 600;
}

.cv-number {
  color: var(--accent);
  font-size: .7rem;
  font-weight: 400;
}

.cv-entry {
  display: grid;
  grid-template-columns: 125px minmax(0, 1fr);
  gap: 20px;
  padding: 19px 0;
  border-bottom: 1px solid var(--line);
}

.cv-entry:first-child {
  padding-top: 0;
}

.cv-entry:last-child {
  border-bottom: 0;
}

.cv-date {
  color: var(--muted);
  font-size: .68rem;
}

.cv-entry h3,
.cv-card h3,
.cv-skill h3 {
  margin: 0 0 6px;
  font-family: "JetBrains Mono", monospace;
  font-size: .81rem;
  line-height: 1.8;
  font-weight: 600;
}

.cv-institution {
  margin-bottom: 8px;
  font-size: .72rem;
}

.cv-abbr {
  margin-left: 5px;
  padding: 1px 6px;
  color: var(--accent);
  white-space: nowrap;
}

.cv-detail {
  margin: 0;
  font-size: .71rem;
  line-height: 1.95;
}

.cv-experience-list {
  display: grid;
  gap: 13px;
}

.cv-card {
  padding: 21px 22px;
  border: 1px solid var(--line);
  border-radius: 4px;
  transition: border-color .2s ease;
}

.cv-card:hover {
  border-color: var(--accent);
}

.cv-card-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.cv-card-date {
  color: var(--muted);
  font-size: .66rem;
  white-space: nowrap;
}

.cv-org {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: .7rem;
}

.cv-label {
  display: block;
  margin: 12px 0 5px;
  color: var(--accent);
  font-size: .62rem;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.cv-list {
  margin: 0;
  padding-left: 19px;
  font-size: .71rem;
  line-height: 1.95;
}

.cv-list li {
  margin-bottom: 4px;
}

.cv-supervisor {
  margin: 12px 0 0;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: .67rem;
}

.cv-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px;
}

.cv-skill {
  padding: 18px 19px;
  border: 1px solid var(--line);
  border-radius: 4px;
}

.cv-skill p {
  margin: 0;
  font-size: .7rem;
  line-height: 2;
}

.cv-language-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cv-language {
  flex: 1 1 140px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 4px;
}

.cv-language strong {
  display: block;
  font-size: .75rem;
}

.cv-language span {
  color: var(--muted);
  font-size: .66rem;
}

.cv-generated ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cv-generated li {
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
  font-size: .72rem;
  line-height: 1.95;
}

.cv-generated li:last-child {
  border-bottom: 0;
}

.cv-footer {
  margin-top: 36px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: .64rem;
}

@media (max-width: 600px) {
  .cv-hero {
    padding: 22px 19px;
  }

  .cv-hero h2 {
    font-size: 1.3rem;
  }

  .cv-entry {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .cv-card {
    padding: 17px;
  }

  .cv-card-top {
    flex-direction: column;
    gap: 2px;
  }

  .cv-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="cv-page">

  <section class="cv-section">
    <h2 class="cv-heading">
      <span class="cv-number">01</span> Education
    </h2>

    <div class="cv-entry">
      <div class="cv-date">2026</div>
      <div>
        <h3>Bachelor of Laws (LL.B.)</h3>
        <p class="cv-institution">
          Autonomous University of Chihuahua
          <span class="cv-abbr">UACH</span>
        </p>
        <p class="cv-detail">Legal Specializations · Corporate, International & Tax Law</p>
      </div>
    </div>

    <div class="cv-entry">
      <div class="cv-date">2022</div>
      <div>
        <h3>Bachelor of Business Administration (BBA)</h3>
        <p class="cv-institution">
          Tecmilenio University
          <span class="cv-abbr">UTM</span>
        </p>
        <p class="cv-detail">Major in Finance.</p>
      </div>
    </div>

    <div class="cv-entry">
      <div class="cv-date">2017</div>
      <div>
        <h3>Bachelor of Accounting (BAcc)</h3>
        <p class="cv-institution">
          National Polytechnic Institute
          <span class="cv-abbr">IPN</span>
        </p>
        <p class="cv-detail">Major in Taxation.</p>
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
        <strong>Spanish</strong>
        <span>Fluent</span>
      </div>
      <div class="cv-language">
        <strong>Italian</strong>
        <span>Fluent</span>
      </div>
      <div class="cv-language">
        <strong>English</strong>
        <span>Fluent</span>
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
