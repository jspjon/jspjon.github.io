---
title: "32 Books to Read 📚"
layout: single
permalink: /books/
author_profile: false
classes: wide
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  :root {
    --paper: #f4f0e6; --ink: #17130e; --muted: #7d7264;
    --line: rgba(23,19,14,.15); --accent: #9a8d78; --number: #a69a84;
    --ov-bg: #16110c; --ov-fg: #efe8d8; --ov-line: rgba(239,232,216,.16); --ov-muted: #a89c88;
  }
  .page__title { display: none; }
  body { background: var(--paper); color: var(--ink); overflow-x: hidden; }
  body.locked { overflow: hidden; }
  ::selection { background: var(--ink); color: var(--paper); }

  .grain { position: fixed; inset: -100%; width: 300%; height: 300%; pointer-events: none; z-index: 300; opacity: .055;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
    animation: grain 7s steps(10) infinite; }
  @keyframes grain { 0%,100%{transform:translate(0,0)} 10%{transform:translate(-3%,-6%)} 20%{transform:translate(-8%,3%)} 30%{transform:translate(4%,-8%)} 40%{transform:translate(-3%,8%)} 50%{transform:translate(-8%,3%)} 60%{transform:translate(6%,0)} 70%{transform:translate(0,6%)} 80%{transform:translate(2%,9%)} 90%{transform:translate(-6%,4%)} }

  .loader { position: fixed; inset: 0; z-index: 400; background: var(--paper); display: grid; place-items: center; transition: transform .85s cubic-bezier(.77,0,.18,1); }
  .loader.done { transform: translateY(-100%); }
  .l-in { display: flex; flex-direction: column; align-items: center; gap: 18px; }
  .l-t { font-size: .62rem; letter-spacing: .34em; color: var(--muted); }
  .l-c { font-family: "Cormorant Garamond", Georgia, serif; font-size: 3.4rem; line-height: 1; }

  .cur-dot, .cur-ring { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 21000; }
  .cur-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ink); box-shadow: 0 0 0 2px rgba(244,240,230,.9); }
  .cur-ring { width: 46px; height: 46px; border-radius: 50%; border: 1px solid rgba(23,19,14,.5); box-shadow: 0 0 0 1px rgba(244,240,230,.55); display: grid; place-items: center;
    transition: width .3s ease, height .3s ease, background .3s ease, border-color .3s ease; }
  .cur-ring span { font-size: .48rem; letter-spacing: .24em; color: var(--paper); opacity: 0; transition: opacity .25s ease; }
  .cur-ring.big { width: 86px; height: 86px; background: rgba(23,19,14,.30); backdrop-filter: blur(3px); border-color: transparent; box-shadow: none; }
  .cur-ring.big span { opacity: 1; }
  @media (hover: none), (pointer: coarse) { .cur-dot, .cur-ring { display: none; } }
  @media (hover: hover) and (pointer: fine) { body, a, button, summary { cursor: none; } }

  .peek { position: fixed; top: 0; left: 0; width: 196px; z-index: 120; pointer-events: none; opacity: 0; transform: scale(.92); transition: opacity .28s ease; will-change: transform; }
  .peek.on { opacity: 1; }
  .peek-card { position: relative; border-radius: 2px; overflow: hidden; box-shadow: 0 34px 60px -28px rgba(40,30,15,.55); }
  .peek-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity .45s ease; }
  .peek-img.show { opacity: 1; }

  .plate { position: relative; aspect-ratio: 3 / 4; background: linear-gradient(160deg, var(--c1), var(--c2)); color: var(--fg); padding: 18px; display: flex; flex-direction: column; overflow: hidden; }
  .p-fr { position: absolute; inset: 10px; border: 1px solid var(--fr); pointer-events: none; }
  .p-no { font-size: .55rem; letter-spacing: .26em; opacity: .85; }
  .p-cat { position: absolute; top: 18px; right: 18px; font-size: .48rem; letter-spacing: .2em; text-transform: uppercase; opacity: .75; text-align: right; max-width: 45%; }
  .p-mid { margin: auto 0; }
  .p-title { font-family: "Cormorant Garamond", Georgia, serif; font-weight: 600; font-style: italic; line-height: 1.05; font-size: clamp(1.5rem, 3vw, 2.4rem); }
  .p-rule { width: 38px; height: 1px; background: var(--fr); margin: 14px 0; }
  .p-au { font-size: .52rem; letter-spacing: .22em; text-transform: uppercase; opacity: .9; }

  .topbar { display: flex; justify-content: space-between; padding: 26px 0; font-size: .58rem; letter-spacing: .22em; color: var(--muted); border-bottom: 1px solid var(--line); }
  .hero { position: relative; padding: 10vh 0 9vh; }
  .hero-ghost { position: absolute; right: -2vw; top: 2vh; font-family: "Cormorant Garamond", serif; font-size: clamp(10rem, 30vw, 26rem); line-height: .8; color: transparent; -webkit-text-stroke: 1px rgba(23,19,14,.12); pointer-events: none; user-select: none; }
  .hero-eyebrow { font-size: .6rem; letter-spacing: .3em; color: var(--accent); margin-bottom: 3.5vh; }
  .hero-title { font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: clamp(3.2rem, 10vw, 8.6rem); line-height: 1.05; letter-spacing: -.01em; }
  .hero-title em { font-style: italic; font-weight: 500; }
  .hero-title i { font-style: normal; color: var(--accent); }
  .line { display: block; overflow: hidden; padding: 0.06em 0.16em; margin: -0.06em -0.16em; }
  .line > span { display: block; transform: translateY(112%); transition: transform 1.1s cubic-bezier(.19,1,.22,1); }
  .line:nth-child(2) > span { transition-delay: .09s; }
  body.loaded .line > span { transform: translateY(0); }
  .hero-foot { display: flex; justify-content: space-between; margin-top: 7vh; padding-top: 18px; border-top: 1px solid var(--line); font-size: .58rem; letter-spacing: .22em; color: var(--muted); }

  .marquee { overflow: hidden; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 14px 0; }
  .m-track { display: flex; width: max-content; animation: mq 36s linear infinite; }
  .marquee.rev .m-track { animation-direction: reverse; }
  .m-track span { font-size: .62rem; letter-spacing: .3em; color: var(--muted); padding: 0 1.4em; white-space: nowrap; }
  .m-track b { color: var(--accent); font-weight: 400; }
  @keyframes mq { to { transform: translateX(-50%); } }

  section { padding: 12vh 0 8vh; }
  .sec-head { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; margin-bottom: 6vh; }
  .sec-no { font-size: .6rem; letter-spacing: .28em; color: var(--accent); }
  h2.sec-title { font-family: "Cormorant Garamond", serif; font-weight: 500; font-size: clamp(2.4rem, 6vw, 4.6rem); line-height: 1; border: 0; padding: 0; margin: 0; }
  h2.sec-title em { font-style: italic; }
  .hint { font-size: .56rem; letter-spacing: .24em; color: var(--muted); margin: -3.5vh 0 4vh; }

  .rows { list-style: none; border-bottom: 1px solid var(--line); padding: 0; margin: 0; }
  .rows li { margin: 0; }
  .row { position: relative; display: grid; grid-template-columns: 3.4rem 1fr auto auto; align-items: baseline; gap: 22px; padding: 26px 10px; border-top: 1px solid var(--line); cursor: pointer; }
  .row::after { content: ""; position: absolute; inset: 0; background: var(--ink); transform: scaleY(0); transform-origin: top; transition: transform .38s cubic-bezier(.4,0,.2,1); z-index: 0; }
  .row > * { position: relative; z-index: 1; transition: color .25s ease; }
  .row:hover::after { transform: scaleY(1); }
  .row:hover > * { color: var(--paper); }
  .r-no { font-size: .62rem; color: var(--number); letter-spacing: .12em; }
  .r-title { font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: clamp(1.55rem, 3.6vw, 2.7rem); line-height: 1.02; border: 0; padding: 0; margin: 0; }
  .r-meta { font-size: .58rem; letter-spacing: .18em; text-transform: uppercase; color: var(--muted); text-align: right; }
  .row:hover .r-meta { color: rgba(244,240,230,.7); }
  .r-go { font-size: .9rem; opacity: 0; transform: translateX(-10px); transition: all .3s ease; }
  .row:hover .r-go { opacity: 1; transform: none; }

  .overlay { position: fixed; inset: 0; z-index: 20000; visibility: hidden; clip-path: inset(100% 0 0 0); transition: clip-path .7s cubic-bezier(.77,0,.18,1), visibility 0s .7s; }
  .overlay.open { visibility: visible; clip-path: inset(0 0 0 0); transition: clip-path .7s cubic-bezier(.77,0,.18,1); }
  .ov-backdrop { position: absolute; inset: 0; background: var(--ov-bg); }
  .ov-close { position: absolute; top: 22px; right: 26px; z-index: 60; width: 48px; height: 48px; background: transparent; border: 1px solid var(--ov-line); border-radius: 50%; color: var(--ov-fg); font-family: inherit; font-size: 1.05rem; cursor: pointer; transition: all .25s ease; }
  .ov-close:hover { background: var(--ov-fg); color: var(--ov-bg); }
  .ov-body { position: relative; height: 100%; overflow-y: auto; display: grid; grid-template-columns: minmax(280px, 400px) 1fr; gap: clamp(30px, 5vw, 80px); align-items: center; padding: 10vh clamp(24px, 6vw, 90px) 8vh; color: var(--ov-fg); }
  .ov-plate { perspective: 1100px; }
  .ov-plate .plate { max-width: 380px; margin: 0 auto; box-shadow: 0 60px 90px -40px rgba(0,0,0,.7); transition: transform .3s ease; }
  .ov-plate .p-title { font-size: clamp(1.8rem, 3.2vw, 2.8rem); }
  .ov-real { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity .6s ease; z-index: 1; border-radius: 2px 6px 6px 2px; }
  .ov-real.show { opacity: 1; }
  .ov-plate .p-fr { z-index: 2; }
  .ov-exit { display: inline-block; margin: 0 0 28px; padding: 9px 16px; border: 1px solid var(--ov-line); border-radius: 3px; background: transparent; color: var(--ov-fg); font-family: inherit; font-size: .6rem; letter-spacing: .16em; text-transform: uppercase; cursor: pointer; transition: all .25s ease; }
  .ov-exit:hover { background: var(--ov-fg); color: var(--ov-bg); }
  .ov-eyebrow { font-size: .58rem; letter-spacing: .28em; color: var(--ov-muted); margin-bottom: 22px; }
  .ov-eyebrow b { color: var(--accent); font-weight: 500; }
  .ov-title { font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: clamp(2.4rem, 4.6vw, 4rem); line-height: 1.02; border: 0; padding: 0; margin: 0; }
  .ov-gold { display: block; width: 54px; height: 1px; background: linear-gradient(90deg, var(--accent), transparent); margin: 24px 0; }
  .ov-author { font-size: .68rem; letter-spacing: .2em; text-transform: uppercase; color: var(--ov-muted); margin-bottom: 26px; }
  .ov-desc { font-size: .8rem; line-height: 2.1; opacity: .85; max-width: 56ch; margin-bottom: 34px; }
  .ov-link { display: inline-block; padding: 13px 22px; border: 1px solid var(--ov-line); font-size: .62rem; letter-spacing: .16em; text-transform: uppercase; text-decoration: none; transition: all .25s ease; }
  .ov-link:hover { background: var(--ov-fg); color: var(--ov-bg); }
  .ov-body > * { opacity: 0; transform: translateY(22px); transition: opacity .5s ease .35s, transform .5s ease .35s; }
  .overlay.open .ov-body > * { opacity: 1; transform: none; }

  footer.books-foot { padding: 10vh 0 30px; }
  .f-big { font-family: "Cormorant Garamond", serif; font-size: clamp(4rem, 13vw, 11rem); line-height: .9; border: 0; }
  .f-big em { font-style: italic; }
  .f-meta { display: flex; flex-wrap: wrap; gap: 12px 40px; justify-content: space-between; margin-top: 6vh; padding-top: 18px; border-top: 1px solid var(--line); font-size: .56rem; letter-spacing: .2em; color: var(--muted); }
  .f-meta a { text-decoration: none; color: var(--accent); }

  [data-reveal] { opacity: 0; transform: translateY(26px); transition: opacity .9s cubic-bezier(.19,1,.22,1), transform .9s cubic-bezier(.19,1,.22,1); }
  [data-reveal].in { opacity: 1; transform: none; }

  .wrap { max-width: 1240px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 56px); }

  @media (max-width: 860px) {
    .row { grid-template-columns: 2.4rem 1fr auto; }
    .r-meta { display: none; }
    .ov-body { grid-template-columns: 1fr; align-items: start; gap: 40px; }
    .ov-plate .plate { max-width: 280px; }
    .hero-ghost { font-size: 38vw; }
  }
  @media (prefers-reduced-motion: reduce) {
    .grain, .m-track { animation: none !important; }
    [data-reveal], .line > span { opacity: 1 !important; transform: none !important; transition: none !important; }
  }
</style>

<div class="grain"></div>

<div class="loader" id="loader">
  <div class="l-in"><span class="l-t">THE READING ROOM</span><span class="l-c" id="lcount">00</span></div>
</div>

<div class="cur-dot" id="cdot"></div>
<div class="cur-ring" id="cring"><span id="clabel">OPEN</span></div>
<div class="peek" id="peek"></div>

<main class="wrap">

  <header class="hero">
    <nav class="topbar"><span>JONATHAN SIMON P.</span><span>PERSONAL LIBRARY — MMXXV</span></nav>
    <div class="hero-ghost">32</div>
    <p class="hero-eyebrow" data-reveal>AN INDEX OF VOLUMES ON ECONOMY, LAW &amp; LIBERTY</p>
    <h1 class="hero-title">
      <span class="line"><span>The Reading</span></span>
      <span class="line"><span><em>Room</em><i>.</i></span></span>
    </h1>
    <div class="hero-foot" data-reveal>
      <span>32 VOLUMES · 06 DISCIPLINES</span>
      <span>THE INDEX BELOW ↓</span>
    </div>
  </header>

  <div class="marquee"><div class="m-track" id="mq1"></div></div>

  <section class="index">
    <div class="sec-head" data-reveal><span class="sec-no">01 — THE INDEX</span><h2 class="sec-title">All <em>32 volumes</em></h2></div>
    <p class="hint" data-reveal>HOVER TO PREVIEW — CLICK TO OPEN</p>
    <ol class="rows" id="rows"></ol>
  </section>

  <div class="marquee rev"><div class="m-track" id="mq2"></div></div>

  <footer class="books-foot">
    <p class="f-big" data-reveal><em>Fin.</em></p>
    <div class="f-meta" data-reveal>
      <span>SET IN CORMORANT GARAMOND &amp; JETBRAINS MONO</span>
      <span>COVERS VIA OPENLIBRARY &amp; GOOGLE BOOKS</span>
      <a href="#top" data-cursor-label="TOP">BACK TO TOP ↑</a>
    </div>
  </footer>

</main>

<div class="overlay" id="overlay" aria-hidden="true">
  <div class="ov-backdrop" id="ov-backdrop"></div>
  <button class="ov-close" id="ov-close" data-cursor-label="CLOSE" aria-label="Close">✕</button>
  <div class="ov-body">
    <div class="ov-plate" id="ov-plate"><div class="plate" id="ov-art"></div></div>
    <div class="ov-info" id="ov-info"></div>
  </div>
</div>

<script>
(function () {
  "use strict";

  var BOOKS = [
    { t: "The Road to Serfdom", a: "Friedrich A. Hayek", c: "Political Philosophy", d: "An influential argument about centralized planning, political power, and the preservation of individual freedom.", u: "https://www.goodreads.com/search?q=The+Road+to+Serfdom+Friedrich+Hayek" },
    { t: "Human Action", a: "Ludwig von Mises", c: "Economics", d: "A comprehensive treatise on human action, economic reasoning, and the foundations of Austrian economics.", u: "https://www.goodreads.com/search?q=Human+Action+Ludwig+von+Mises" },
    { t: "Man, Economy, and State", a: "Murray N. Rothbard", c: "Austrian Economics", d: "A detailed examination of economic theory, voluntary exchange, and the role of government in society.", u: "https://www.goodreads.com/search?q=Man+Economy+and+State+Murray+Rothbard" },
    { t: "Capitalism and Freedom", a: "Milton Friedman", c: "Political Economy", d: "A defense of competitive markets and the connection between economic and political freedom.", u: "https://www.goodreads.com/search?q=Capitalism+and+Freedom+Milton+Friedman" },
    { t: "Basic Economics", a: "Thomas Sowell", c: "Economics", d: "An accessible introduction to prices, incentives, trade-offs, and the often-unintended consequences of economic policy.", u: "https://www.goodreads.com/search?q=Basic+Economics+Thomas+Sowell" },
    { t: "Knowledge and Decisions", a: "Thomas Sowell", c: "Social Science", d: "An exploration of how information, incentives, and institutions shape decisions across society.", u: "https://www.goodreads.com/search?q=Knowledge+and+Decisions+Thomas+Sowell" },
    { t: "The Law", a: "Frédéric Bastiat", c: "Classical Liberalism", d: "A concise essay on individual rights, property, justice, and the legitimate limits of government.", u: "https://www.goodreads.com/search?q=The+Law+Frederic+Bastiat" },
    { t: "On Liberty", a: "John Stuart Mill", c: "Political Philosophy", d: "A foundational work on freedom of thought, freedom of expression, and the limits of social authority.", u: "https://www.goodreads.com/search?q=On+Liberty+John+Stuart+Mill" },
    { t: "The Wealth of Nations", a: "Adam Smith", c: "Classical Economics", d: "A landmark study of specialization, exchange, markets, and the sources of national prosperity.", u: "https://www.goodreads.com/search?q=The+Wealth+of+Nations+Adam+Smith" },
    { t: "Economic Sophisms", a: "Frédéric Bastiat", c: "Political Economy", d: "Sharp and accessible essays challenging protectionism and revealing the unseen costs of economic intervention.", u: "https://www.goodreads.com/search?q=Economic+Sophisms+Frederic+Bastiat" },
    { t: "So Ordered", a: "Samuel A. Alito Jr.", c: "Constitutional Law", d: "An originalist perspective on the Constitution, the Supreme Court, and the principles shaping American government and national identity.", u: "https://www.goodreads.com/search?q=So+Ordered+Samuel+A+Alito" },
    { t: "The Structure of Liberty", a: "Randy E. Barnett", c: "Law and Political Philosophy", d: "An examination of the foundations of liberty, justice, property rights, and the legal institutions necessary for a free society.", u: "https://www.goodreads.com/search?q=The+Structure+of+Liberty+Randy+Barnett" },
    { t: "Human Capital", a: "Gary S. Becker", c: "Human Capital Economics", d: "A pioneering economic analysis of education, training, investment in human abilities, and their effects on productivity and earnings.", u: "https://www.goodreads.com/search?q=Human+Capital+Gary+Becker" },
    { t: "A Treatise on the Family", a: "Gary S. Becker", c: "Family Economics", d: "An economic approach to marriage, family decisions, household production, fertility, and the allocation of resources within families.", u: "https://www.goodreads.com/search?q=A+Treatise+on+the+Family+Gary+Becker" },
    { t: "Simple Rules for a Complex World", a: "Richard A. Epstein", c: "Legal Philosophy", d: "An argument for simple legal rules grounded in property rights, individual freedom, and limited government as foundations for social cooperation.", u: "https://www.goodreads.com/search?q=Simple+Rules+for+a+Complex+World+Richard+Epstein" },
    { t: "Foundations of Finance", a: "Eugene F. Fama", c: "Financial Economics", d: "An analytical study of portfolio decisions, asset valuation, securities prices, and the economic foundations of financial markets.", u: "https://www.goodreads.com/search?q=Foundations+of+Finance+Eugene+Fama" },
    { t: "The Theory of Finance", a: "Eugene F. Fama and Merton H. Miller", c: "Financial Economics", d: "A theoretical examination of financial markets, investment decisions, capital allocation, and the pricing of financial assets.", u: "https://www.goodreads.com/search?q=The+Theory+of+Finance+Fama+Miller" },
    { t: "Law, Legislation and Liberty: Rules and Order", a: "Friedrich A. Hayek", c: "Classical Liberalism", d: "An exploration of spontaneous order, the evolution of legal institutions, and the distinction between general rules and deliberate social organization.", u: "https://www.goodreads.com/search?q=Law+Legislation+and+Liberty+Rules+and+Order+Hayek" },
    { t: "Lecciones de filosofía del derecho", a: "Bruno Leoni", c: "Legal Philosophy", d: "An introduction to legal philosophy examining the nature of law, individual freedom, and the relationship between legal institutions and society.", u: "https://www.goodreads.com/search?q=Lecciones+de+filosofia+del+derecho+Bruno+Leoni" },
    { t: "Freedom and the Law", a: "Bruno Leoni", c: "Classical Liberalism", d: "A defense of individual liberty and the rule of law, contrasting the gradual evolution of legal rules with centralized legislative control.", u: "https://www.goodreads.com/search?q=Freedom+and+the+Law+Bruno+Leoni" },
    { t: "Law, Liberty, and the Competitive Market", a: "Bruno Leoni", c: "Law and Political Economy", d: "A collection exploring the connections between legal institutions, individual freedom, market competition, and spontaneous social order.", u: "https://www.goodreads.com/search?q=Law+Liberty+and+the+Competitive+Market+Bruno+Leoni" },
    { t: "Scalia Dissents", a: "Antonin Scalia", c: "Constitutional Law", d: "A collection of influential Supreme Court dissents presenting Scalia's arguments on constitutional interpretation, judicial restraint, and the rule of law.", u: "https://www.goodreads.com/search?q=Scalia+Dissents+Antonin+Scalia" },
    { t: "The Essential Scalia", a: "Antonin Scalia", c: "Constitutional Law", d: "A selection of writings on constitutional interpretation, judicial philosophy, originalism, and the proper role of the courts.", u: "https://www.goodreads.com/search?q=The+Essential+Scalia+Antonin+Scalia" },
    { t: "Economic Facts and Fallacies", a: "Thomas Sowell", c: "Economic Analysis", d: "A critical examination of widespread economic misconceptions concerning housing, income, discrimination, education, and public policy.", u: "https://www.goodreads.com/search?q=Economic+Facts+and+Fallacies+Thomas+Sowell" },
    { t: "No Treason: The Constitution of No Authority", a: "Lysander Spooner", c: "Political Philosophy", d: "A radical critique of constitutional authority, arguing that individuals cannot be legitimately bound by a government they never explicitly consented to.", u: "https://www.goodreads.com/search?q=No+Treason+The+Constitution+of+No+Authority+Lysander+Spooner" },
    { t: "The Theory of Price", a: "George J. Stigler", c: "Classical Economics", d: "A systematic introduction to price theory, examining markets, competition, consumer behavior, production, and the allocation of resources.", u: "https://www.goodreads.com/search?q=The+Theory+of+Price+George+Stigler" },
    { t: "Memoirs of an Unregulated Economist", a: "George J. Stigler", c: "Economic Autobiography", d: "An intellectual autobiography recounting Stigler's career, his contributions to economics, and his reflections on regulation, markets, and economic thought.", u: "https://www.goodreads.com/search?q=Memoirs+of+an+Unregulated+Economist+George+Stigler" },
    { t: "My Grandfather's Son", a: "Clarence Thomas", c: "Autobiography and Politics", d: "A personal account of Clarence Thomas's upbringing, education, career, and journey to the United States Supreme Court.", u: "https://www.goodreads.com/search?q=My+Grandfathers+Son+Clarence+Thomas" },
    { t: "The Limits of Liberty", a: "James M. Buchanan", c: "Political Economy", d: "An examination of the foundations of political order, social cooperation, constitutional constraints, and the limits of government between anarchy and Leviathan.", u: "https://www.goodreads.com/search?q=The+Limits+of+Liberty+James+Buchanan" },
    { t: "Brownlie's Principles of Public International Law", a: "James Crawford", c: "International Law", d: "A comprehensive examination of public international law, covering state sovereignty, treaties, international responsibility, jurisdiction, and the legal foundations of relations between states.", u: "https://www.goodreads.com/search?q=Brownlies+Principles+of+Public+International+Law+James+Crawford" },
    { t: "The Constitution of Liberty", a: "Friedrich A. Hayek", c: "Constitutional Liberalism", d: "A systematic defense of individual freedom, constitutional safeguards, the rule of law, and the institutional foundations of a free society.", u: "https://www.goodreads.com/search?q=The+Constitution+of+Liberty+Friedrich+Hayek" },
    { t: "Taxes Have Consequences", a: "Arthur B. Laffer, Brian Domitrovic, and Jeanne Sinquefield", c: "Supply-Side Economics", d: "A historical and economic examination of income taxation in the United States, exploring the relationship between tax policy, incentives, investment, economic growth, and government revenue.", u: "https://www.goodreads.com/search?q=Taxes+Have+Consequences+Arthur+Laffer" }
  ];

  var rowsEl = document.getElementById("rows");
  var modal = document.getElementById("overlay");
  var ovArt = document.getElementById("ov-art");
  var ovInfo = document.getElementById("ov-info");
  var peek = document.getElementById("peek");
  var lastFocus = null, current = -1;
  var fineMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function pad(n) { return String(n).padStart(2, "0"); }

  var BINDINGS = [
    { c1: "#6e3b34", c2: "#45231e", fg: "#f3e7d3", fr: "rgba(232,205,160,.6)" },
    { c1: "#37503b", c2: "#1f2e20", fg: "#eee9d8", fr: "rgba(232,205,160,.6)" },
    { c1: "#2e3a52", c2: "#1a2233", fg: "#e8e4d6", fr: "rgba(232,205,160,.55)" },
    { c1: "#efe7d2", c2: "#d9cba6", fg: "#4a4234", fr: "rgba(96,74,44,.6)" },
    { c1: "#5a4634", c2: "#372a1e", fg: "#f0e6d2", fr: "rgba(232,205,160,.55)" },
    { c1: "#3a3630", c2: "#221f1a", fg: "#ece4d0", fr: "rgba(232,205,160,.6)" },
    { c1: "#b9a77f", c2: "#8f7c52", fg: "#2e2820", fr: "rgba(58,49,38,.55)" },
    { c1: "#274a52", c2: "#152b31", fg: "#dde8e4", fr: "rgba(210,230,225,.5)" }
  ];

  function plateVars(el, i) {
    var p = BINDINGS[i % BINDINGS.length];
    el.style.setProperty("--c1", p.c1); el.style.setProperty("--c2", p.c2);
    el.style.setProperty("--fg", p.fg); el.style.setProperty("--fr", p.fr);
  }
  function plateInner(b, i) {
    return '<span class="p-fr"></span><span class="p-no">Nº ' + pad(i + 1) + '</span><span class="p-cat">' + esc(b.c) + '</span>' +
           '<div class="p-mid"><h3 class="p-title">' + esc(b.t) + '</h3><span class="p-rule"></span><span class="p-au">' + esc(b.a) + '</span></div>';
  }

  /* ===== portadas: ISBN en OL → búsqueda OL → Google Books. Verifica cada URL con un Image real ===== */
  function verify(url) {
    if (!url) return Promise.resolve(null);
    return new Promise(function (res) {
      var im = new Image();
      im.onload = function () { res(url); };
      im.onerror = function () { res(null); };
      im.src = url;
    });
  }
  function olByIsbn(b) {
    return b.isbn ? "https://covers.openlibrary.org/b/isbn/" + String(b.isbn).replace(/[^0-9Xx]/g, "") + "-L.jpg" : null;
  }
  function olSearch(b) {
    if (b._ol !== undefined) return Promise.resolve(b._ol);
    var q = encodeURIComponent(b.t + " " + b.a);
    return fetch("https://openlibrary.org/search.json?q=" + q + "&fields=cover_i&limit=1")
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var ci = d && d.docs && d.docs[0] && d.docs[0].cover_i;
        b._ol = ci ? "https://covers.openlibrary.org/b/id/" + ci + "-L.jpg" : null;
        return b._ol;
      })
      .catch(function () { b._ol = null; return null; });
  }
  function gSearch(b) {
    if (b._g !== undefined) return Promise.resolve(b._g);
    var main = b.t.split(":")[0].trim();
    var au = b.a.split(/\s+and\s+/i)[0].split(",")[0].trim();
    var q = encodeURIComponent('intitle:"' + main + '" inauthor:"' + au + '"');
    return fetch("https://www.googleapis.com/books/v1/volumes?q=" + q + "&maxResults=5&printType=books&country=US")
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var gid = null, items = (d && d.items) || [];
        for (var k = 0; k < items.length; k++) {
          var v = items[k].volumeInfo || {};
          if (!v.imageLinks) continue;
          if (!gid) gid = items[k].id;
          var vt = (v.title || "").toLowerCase();
          if (vt.indexOf(main.toLowerCase().slice(0, 12)) > -1) { gid = items[k].id; break; }
        }
        b._g = gid ? ("https://books.google.com/books/content?id=" + gid + "&printsec=frontcover&img=1&zoom=2&source=gbs_api").replace(/^http:/, "https:") : null;
        return b._g;
      })
      .catch(function () { b._g = null; return null; });
  }
  function resolveCover(b) {
    if (b._cov !== undefined) return Promise.resolve(b._cov);
    return verify(olByIsbn(b))
      .then(function (u) { if (u) return u; return olSearch(b); })
      .then(function (u) { if (u) return u; return gSearch(b); })
      .then(function (u) { b._cov = u; return u; });
  }

  /* ===== loader ===== */
  var loader = document.getElementById("loader"), lc = document.getElementById("lcount"), t0 = performance.now();
  (function tick(now) {
    var k = Math.min(1, ((now || t0) - t0) / 1000);
    lc.textContent = pad(Math.round(100 * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(tick);
    else setTimeout(function () { loader.classList.add("done"); document.body.classList.add("loaded"); }, 160);
  })(t0);

  /* ===== cursor ===== */
  if (fineMouse) {
    var dot = document.getElementById("cdot"), ring = document.getElementById("cring"), label = document.getElementById("clabel");
    var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    document.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; });
    (function loop() {
      rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
      dot.style.transform = "translate(" + (mx - 4) + "px," + (my - 4) + "px)";
      ring.style.transform = "translate(" + (rx - ring.offsetWidth / 2) + "px," + (ry - ring.offsetHeight / 2) + "px)";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("[data-cursor-label]");
      if (t) { label.textContent = t.getAttribute("data-cursor-label"); ring.classList.add("big"); }
      else ring.classList.remove("big");
    });
  }

  /* ===== marquees ===== */
  var words = ["ECONOMICS", "LAW", "POLITICAL PHILOSOPHY", "CLASSICAL LIBERALISM", "FINANCE", "LIBERTY"];
  var strip = words.map(function (w) { return "<span>" + w + " <b>✦</b></span>"; }).join("");
  ["mq1", "mq2"].forEach(function (id) {
    var el = document.getElementById(id); if (el) el.innerHTML = strip + strip + strip + strip;
  });

  /* ===== reveals ===== */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });

  /* ===== index rows + floating real cover ===== */
  BOOKS.forEach(function (b, i) {
    var li = document.createElement("li");
    li.className = "row"; li.setAttribute("data-reveal", "");
    li.setAttribute("data-cursor-label", "OPEN");
    li.innerHTML = '<span class="r-no">' + pad(i + 1) + '</span><h3 class="r-title">' + esc(b.t) + '</h3>' +
                   '<span class="r-meta">' + esc(b.a) + ' · ' + esc(b.c) + '</span><span class="r-go">↗</span>';
    li.addEventListener("mouseenter", function () {
      if (!fineMouse) return;
      peek.dataset.i = i;
      peek.innerHTML = "";
      var card = document.createElement("div"); card.className = "peek-card";
      var mini = document.createElement("div"); mini.className = "plate";
      plateVars(mini, i); mini.innerHTML = plateInner(b, i);
      mini.style.height = "272px"; mini.style.aspectRatio = "auto";
      card.appendChild(mini); peek.appendChild(card); peek.classList.add("on");
      if (b._cov) {
        var im0 = document.createElement("img"); im0.className = "peek-img"; im0.src = b._cov;
        im0.addEventListener("load", function () { if (peek.dataset.i === String(i)) im0.classList.add("show"); });
        card.appendChild(im0);
      } else {
        resolveCover(b).then(function (url) {
          if (!url || peek.dataset.i !== String(i)) return;
          var im = document.createElement("img"); im.className = "peek-img"; im.src = url;
          im.addEventListener("load", function () { if (peek.dataset.i === String(i)) im.classList.add("show"); });
          card.appendChild(im);
        });
      }
    });
    li.addEventListener("mouseleave", function () { peek.classList.remove("on"); });
    li.addEventListener("click", function () { openBook(i, li); });
    rowsEl.appendChild(li);
    io.observe(li);
  });

  if (fineMouse) {
    var px = 0, py = 0, tx = 0, ty = 0, lastX = 0;
    document.addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; });
    (function ploop() {
      px += (tx - px) * 0.12; py += (ty - py) * 0.12;
      var rot = Math.max(-8, Math.min(8, (tx - lastX) * 0.35)); lastX = tx;
      var x = Math.min(px + 28, window.innerWidth - 220);
      peek.style.transform = "translate(" + x + "px," + (py - 150) + "px) rotate(" + rot + "deg) scale(" + (peek.classList.contains("on") ? 1 : 0.92) + ")";
      requestAnimationFrame(ploop);
    })();
  }

  /* ===== overlay ===== */
  function openBook(i, origin) {
    var b = BOOKS[i];
    current = i;
    ovArt.innerHTML = plateInner(b, i); plateVars(ovArt, i);
    ovInfo.innerHTML =
      '<button class="ov-exit" id="ov-exit" data-cursor-label="CLOSE">← BACK TO SHELF</button>' +
      '<p class="ov-eyebrow"><b>Nº ' + pad(i + 1) + "</b> · " + esc(b.c) + "</p>" +
      '<h3 class="ov-title">' + esc(b.t) + "</h3>" +
      '<span class="ov-gold"></span>' +
      '<p class="ov-author">' + esc(b.a) + "</p>" +
      '<p class="ov-desc">' + esc(b.d) + "</p>" +
      '<a class="ov-link" href="' + b.u + '" target="_blank" rel="noopener noreferrer">View on Goodreads ↗</a>';
    document.getElementById("ov-exit").addEventListener("click", closeBook);

    lastFocus = origin || document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("locked");
    document.getElementById("ov-close").focus();

    resolveCover(b).then(function (url) {
      if (!url || current !== i || !modal.classList.contains("open")) return;
      var img = document.createElement("img");
      img.className = "ov-real"; img.alt = "Cover of " + b.t; img.src = url;
      img.addEventListener("load", function () { if (current === i) img.classList.add("show"); });
      ovArt.appendChild(img);
    });
  }
  function closeBook() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("locked");
    if (lastFocus) lastFocus.focus();
  }
  document.getElementById("ov-close").addEventListener("click", closeBook);
  document.getElementById("ov-backdrop").addEventListener("click", closeBook);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeBook(); });

  var tiltEl = document.getElementById("ov-plate");
  tiltEl.addEventListener("mousemove", function (e) {
    var r = tiltEl.getBoundingClientRect();
    var dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
    ovArt.style.transform = "rotateY(" + (dx * 14) + "deg) rotateX(" + (-dy * 12) + "deg)";
    ovArt.style.transformStyle = "preserve-3d";
  });
  tiltEl.addEventListener("mouseleave", function () { ovArt.style.transform = "rotateY(0) rotateX(0)"; });

  /* ===== resolver portadas en segundo plano (suave, 1 cada 300ms) ===== */
  setTimeout(function () {
    var qi = 0;
    (function nextQ() {
      if (qi >= BOOKS.length) return;
      resolveCover(BOOKS[qi++]).then(function () { setTimeout(nextQ, 300); });
    })();
  }, 2500);
})();
</script>
