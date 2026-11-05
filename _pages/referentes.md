<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" rel="stylesheet">

<style>
:root{
  --ref-bg:#faf9f7; --ref-border:#e5e1d9; --ref-accent:#9a8d78; --ref-muted:#817766;
  --ref-text:#2a2a2a; --ref-num:#a69a84;
}
.ref-system,.ref-system *{box-sizing:border-box;margin:0;padding:0}
.ref-system{
  font-family:"JetBrains Mono",monospace;-webkit-font-smoothing:antialiased;
  background:#faf9f7;color:var(--ref-text);margin:20px 0 80px;
}

/* ---------- Cabecera ---------- */
.ref-header{text-align:center;max-width:1080px;margin:0 auto 6px;padding:0 20px 30px;border-bottom:1px solid var(--ref-border)}
.ref-header h2{font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:var(--ref-accent);font-weight:500;margin-bottom:24px}
.ref-header h1{font-size:clamp(1.8rem,4vw,2.4rem);font-weight:700;letter-spacing:-.02em;line-height:1.4;margin-bottom:20px}
.ref-welcome{display:block;font-size:.55em;font-weight:500;letter-spacing:.02em;color:var(--ref-muted);margin-bottom:12px}
.ref-main-title{display:block;font-size:1em;font-weight:700;letter-spacing:-.02em}
.ref-header p{font-size:.78rem;color:var(--ref-muted);max-width:700px;margin:0 auto;line-height:1.9}
.ref-actions-top{margin-top:24px;display:flex;justify-content:center;align-items:center;gap:14px;flex-wrap:wrap}
.ref-depth{font-size:.58rem;letter-spacing:.28em;text-transform:uppercase;color:var(--ref-accent);padding:5px 12px;border:1px solid var(--ref-border);background:rgba(154,141,120,.05)}

/* ---------- Botones ---------- */
.btn-dl{
  font-family:inherit;font-size:.6rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;
  padding:10px 14px;border:1px solid var(--ref-accent);background:transparent;color:var(--ref-accent);
  cursor:pointer;transition:all .25s ease;
}
.btn-dl:hover:not(:disabled){background:rgba(154,141,120,.12);box-shadow:0 0 0 4px rgba(154,141,120,.08)}
.btn-dl:disabled{opacity:.55;cursor:wait}
.btn-src,.btn-raw{
  font-family:inherit;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;
  padding:10px 12px;border:1px solid var(--ref-border);background:transparent;color:var(--ref-muted);
  cursor:pointer;text-decoration:none;display:inline-block;transition:all .25s ease;
}
.btn-src:hover,.btn-raw:hover{border-color:var(--ref-accent);color:var(--ref-accent)}

/* ---------- Muro de placas ---------- */
.ref-grid{max-width:1080px;margin:52px auto 0;padding:0 20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}
.ref-card{
  position:relative;overflow:hidden;display:flex;flex-direction:column;
  background:var(--ref-bg);border:1px solid var(--ref-border);
  opacity:0;transform:translateY(22px);
  transition:opacity .7s ease,transform .7s cubic-bezier(.23,1,.32,1),border-color .35s ease,box-shadow .4s ease;
}
.ref-card.on{opacity:1;transform:none}
.ref-card:hover{border-color:var(--ref-accent);transform:translateY(-5px);box-shadow:0 16px 34px -14px rgba(154,141,120,.25)}

.ref-plate{padding:16px 16px 12px;border-bottom:1px solid var(--ref-border);background:linear-gradient(180deg,#f3f1ec,#eceae4)}
.ref-photo{position:relative;aspect-ratio:4/5;border:1px solid var(--ref-border);overflow:hidden;background:#e6e3dc}
.ref-photo img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(1) contrast(1.07) brightness(1.01);transition:filter .5s ease,transform .8s cubic-bezier(.23,1,.32,1)}
.ref-card:hover .ref-photo img{filter:grayscale(1) contrast(1.14);transform:scale(1.03)}
.ref-photo::after{content:"";position:absolute;inset:7px;border:1px solid rgba(250,249,247,.5);pointer-events:none;z-index:2}
.ref-photo.noimg img{display:none}
.ref-photo.noimg::before{content:attr(data-mono);position:absolute;inset:0;display:grid;place-items:center;font-size:2.6rem;font-weight:800;letter-spacing:.06em;color:var(--ref-accent);z-index:1}
.ref-photo.noimg{background:linear-gradient(160deg,#efede7,#ded9cf)}

.ref-body{padding:18px 18px 16px;flex:1}
.ref-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;gap:8px}
.ref-no{font-size:.62rem;letter-spacing:.22em;color:var(--ref-num);font-weight:700}
.ref-dates{font-size:.6rem;letter-spacing:.1em;color:var(--ref-muted);text-align:right}
.ref-name{font-size:1.02rem;font-weight:700;letter-spacing:-.01em;margin-bottom:10px}
.ref-tag{display:inline-block;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ref-accent);padding:4px 9px;border:1px solid var(--ref-border);background:rgba(154,141,120,.05);margin-bottom:12px}
.ref-desc{font-size:.71rem;line-height:1.85;color:var(--ref-muted)}
.ref-quote{margin-top:14px;padding-left:12px;border-left:2px solid var(--ref-accent);font-style:italic;font-size:.67rem;line-height:1.8;opacity:.92}
.ref-work{margin-top:13px;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ref-accent)}

.ref-actions{display:flex;gap:8px;align-items:center;padding:13px 18px;border-top:1px solid var(--ref-border);flex-wrap:wrap}
.res-chip{margin-left:auto;font-size:.56rem;letter-spacing:.1em;color:var(--ref-muted);white-space:nowrap;width:100%;text-align:right}
.res-chip.fourk{color:var(--ref-accent);font-weight:700}

/* ---------- Toast ---------- */
#refToast{
  position:fixed;right:24px;bottom:24px;z-index:999;max-width:340px;
  padding:13px 16px;background:var(--ref-bg);border:1px solid var(--ref-accent);border-left:3px solid var(--ref-accent);
  color:var(--ref-text);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;line-height:1.7;
  opacity:0;transform:translateY(12px);pointer-events:none;
  transition:opacity .35s ease,transform .35s cubic-bezier(.23,1,.32,1);
  box-shadow:0 14px 30px -12px rgba(154,141,120,.35);
}
#refToast.show{opacity:1;transform:none}
#refToast.warn{border-color:#b3542e;border-left-color:#b3542e}

/* ---------- Pie ---------- */
.ref-footer{max-width:1080px;margin:44px auto 0;padding:20px;border-top:1px solid var(--ref-border);display:flex;justify-content:space-between;align-items:center;font-size:.62rem;color:var(--ref-muted);letter-spacing:.15em;text-transform:uppercase;flex-wrap:wrap;gap:14px}
.ref-status{display:flex;align-items:center;gap:8px}
.ref-dot{width:6px;height:6px;border-radius:50%;background:var(--ref-accent);animation:refPulse 2.5s ease-in-out infinite}
@keyframes refPulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(154,141,120,.4)}50%{opacity:.5;box-shadow:0 0 0 4px rgba(154,141,120,0)}}

@media(max-width:560px){
  .ref-grid{padding:0 14px}
  .ref-plate{padding:12px 12px 10px}
  .ref-body{padding:16px 15px 14px}
  .ref-name{font-size:.95rem}
  #refToast{left:14px;right:14px;max-width:none}
}
@media(prefers-reduced-motion:reduce){
  .ref-card{opacity:1;transform:none;transition:none}
  .ref-dot{animation:none}
}
</style>

<div class="ref-system">
  <header class="ref-header">
    <h2>Intellectual Lineage — Plate Archive</h2>
    <h1><span class="ref-welcome">The bedrock, in maximum resolution</span><span class="ref-main-title">The Referents · 4K Archive</span></h1>
    <p>Twenty-one minds whose ideas anchor the structure. Each export is the complete plate —
    mat, hairlines, portrait, caption &amp; quote — composited to a single PNG at download time,
    at the highest true resolution the Commons archive provides.</p>
    <div class="ref-actions-top">
      <button class="btn-dl" id="allBtn" type="button">↓ All Plates</button>
      <span class="ref-depth">21 Plates · 1723 — 1970</span>
    </div>
  </header>

  <section class="ref-grid" id="refGrid" aria-label="Portrait plates"></section>

  <footer class="ref-footer">
    <div class="ref-status"><span class="ref-dot"></span><span>Archive Operational</span></div>
    <div>Wikimedia Commons · No Upscaling</div>
    <div>Export · Composited PNG</div>
  </footer>
</div>

<div id="refToast" role="status" aria-live="polite"></div>

<script>
/* PLACAS — 21 referentes en orden cronológico.
   files: candidatos en Wikimedia Commons (se prueban en orden). */
const PLATES=[
{ no:"REF.01", name:"Adam Smith", slug:"adam-smith", dates:"1723–1790", origin:"Kirkcaldy, Scotland",
  role:"Classical Political Economy",
  desc:"Moral philosopher of the Scottish Enlightenment. His inquiry into the nature and causes of the wealth of nations founded political economy — the bedrock of every floor above.",
  quote:"It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
  work:"The Wealth of Nations · 1776",
  files:["Adam Smith The Muir portrait.jpg"], pos:[50,12] },

{ no:"REF.02", name:"Lysander Spooner", slug:"lysander-spooner", dates:"1808–1887", origin:"Athol, Massachusetts",
  role:"Law & Individualist Anarchism",
  desc:"Abolitionist, lawyer, individualist anarchist. He argued that no constitution binds those who never signed it — and that no state rules without consent.",
  quote:"Vices are those acts by which a man injures himself or his property. Crimes are those acts by which one man injures the person or property of another.",
  work:"No Treason VI · 1870",
  files:["LysanderSpooner.jpg"], pos:[50,22] },

{ no:"REF.03", name:"Carl Menger", slug:"carl-menger", dates:"1840–1921", origin:"Neu-Sandec, Austria-Hungary",
  role:"Austrian School · Founder",
  desc:"Founder of the Austrian school. From marginal utility he rebuilt value from the ground up — subjective, ordinal, human — and gave economics its causal method.",
  quote:"All things are subject to the law of cause and effect.",
  work:"Principles of Economics · 1871",
  files:["Carl Menger.jpg"], pos:[50,20] },

{ no:"REF.04", name:"Eugen von Böhm-Bawerk", slug:"eugen-bohm-bawerk", dates:"1851–1914", origin:"Brno, Austria-Hungary",
  role:"Austrian School · Capital & Interest",
  desc:"Menger's great successor. His theory of capital and interest — present goods valued over future goods — explained profit, wages and the roundabout structure of production.",
  quote:"Present goods are, as a rule, worth more than future goods.",
  work:"Capital and Interest · 1884",
  files:["Eugen von Böhm-Bawerk 1896 Portrait cropped.png","Eugen von Böhm-Bawerk.jpg","Eugen von Boehm-Bawerk.jpg"], pos:[50,18] },

{ no:"REF.05", name:"Winston Churchill", slug:"winston-churchill", dates:"1874–1965", origin:"Blenheim Palace, England",
  role:"Statesmanship · Rhetoric",
  desc:"Statesman, historian and writer. In the darkest hour of the twentieth century, his words proved that rhetoric anchored in principle can hold a civilization together.",
  quote:"Democracy is the worst form of government, except for all the others.",
  work:"The Second World War · 1948–1953",
  files:["Sir Winston Churchill - 19086236948.jpg","Winston Churchill cph.3a49758.jpg"], pos:[50,15] },

{ no:"REF.06", name:"Ludwig von Mises", slug:"ludwig-von-mises", dates:"1881–1973", origin:"Lemberg, Austria-Hungary",
  role:"Austrian School · Praxeology",
  desc:"System-builder of the Austrian school. From human action he derived money, prices, interest — and the impossibility of rational calculation under socialism.",
  quote:"Not mythical 'material productive forces,' but reason and ideas determine the course of human affairs.",
  work:"Human Action · 1949",
  files:["Ludwig von Mises.jpg"], pos:[50,22] },

{ no:"REF.07", name:"Henry Hazlitt", slug:"henry-hazlitt", dates:"1894–1993", origin:"Philadelphia, Pennsylvania",
  role:"Economic Journalism",
  desc:"The journalist who made Austrian economics readable. One lesson, repeated against every fashion: trace the unseen, long-run consequences for all groups, not the visible few.",
  quote:"The art of economics consists in looking not merely at the immediate but at the longer effects of any act or policy; it consists in tracing the consequences of that policy not merely for one group but for all groups.",
  work:"Economics in One Lesson · 1946",
  files:["Hazlitt-photo.jpg","Henry Hazlitt.jpg","Henry Hazlitt 1964.jpg"], pos:[50,20] },

{ no:"REF.08", name:"Friedrich A. Hayek", slug:"friedrich-hayek", dates:"1899–1992", origin:"Vienna, Austria",
  role:"Austrian School · Spontaneous Order",
  desc:"Nobel laureate and philosopher of spontaneous order. The price system as a communications network, the knowledge problem of planners, and the long argument against serfdom.",
  quote:"The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.",
  work:"The Road to Serfdom · 1944",
  files:["Friedrich Hayek portrait.jpg"], pos:[50,20] },

{ no:"REF.09", name:"Milton Friedman", slug:"milton-friedman", dates:"1912–2006", origin:"Brooklyn, New York",
  role:"Chicago School · Monetarism",
  desc:"Nobel laureate and great popularizer. Monetarism, the permanent-income hypothesis, and the argument that economic and political freedom rise and fall together.",
  quote:"Underlying most arguments against the free market is a lack of belief in freedom itself.",
  work:"Capitalism and Freedom · 1962",
  files:["Milton Friedman.jpg"], pos:[50,22] },

{ no:"REF.10", name:"Margaret Thatcher", slug:"margaret-thatcher", dates:"1925–2013", origin:"Grantham, England",
  role:"Political Leadership · Classical Liberalism",
  desc:"The Grocer's Daughter. Three general elections, the Falklands, the miners' strike, Big Bang — she governed as she believed: there is no such thing as a free lunch.",
  quote:"The problem with socialism is that you eventually run out of other people's money.",
  work:"The Downing Street Years · 1993",
  files:["Margaret Thatcher stock portrait (cropped).jpg","Margaret Thatcher stock portrait.jpg","Margaret Thatcher (1983).jpg"], pos:[50,18] },

{ no:"REF.11", name:"William F. Buckley Jr.", slug:"william-f-buckley", dates:"1925–2008", origin:"New York, New York",
  role:"Conservative Intellect · National Review",
  desc:"Fusionist, polemicist, sailor. He founded National Review, hosted a thousand Firing Lines, and made the argument for ordered liberty entertaining enough to survive.",
  quote:"I would rather be governed by the first 2,000 people in the Boston telephone directory than by the 2,000 people on the faculty of Harvard University.",
  work:"God and Man at Yale · 1951",
  files:["William F. Buckley, Jr. Public Domain (cropped).jpg","William F. Buckley Jr. 1985.jpg","William F. Buckley.jpg"], pos:[50,18] },

{ no:"REF.12", name:"Murray N. Rothbard", slug:"murray-rothbard", dates:"1926–1995", origin:"New York, New York",
  role:"Austrian School · Libertarian Theory",
  desc:"Historian, economist, polymath of the Austrian revival. Man, Economy, and State rebuilt economic science from first principles — and counted the costs of power and market.",
  quote:"The state is a gang of thieves writ large.",
  work:"Man, Economy, and State · 1962",
  files:["Murray Rothbard.jpg"], pos:[50,20] },

{ no:"REF.13", name:"Thomas Sowell", slug:"thomas-sowell", dates:"b. 1930", origin:"Gastonia, North Carolina",
  role:"Chicago School · Empiricism",
  desc:"Empiricist of the Hoover Institution. Knowledge, decisions, incentives and trade-offs — a long career spent auditing the unintended consequences of the intended.",
  quote:"It is hard to imagine a more stupid or more dangerous way of making decisions than by putting those decisions in the hands of people who pay no price for being wrong.",
  work:"Basic Economics · 2000",
  files:["Thomas Sowell Portrait (3x4 cropped).jpg","Thomas Sowell.jpg"], pos:[50,18] },

{ no:"REF.14", name:"Antonin Scalia", slug:"antonin-scalia", dates:"1936–2016", origin:"Trenton, New Jersey",
  role:"Constitutional Law · Originalism",
  desc:"Justice of the U.S. Supreme Court, 1986–2016. Originalist, textualist, and the finest dissenter of his age — his arguments outlived his losses.",
  quote:"The judge who always likes the results he reaches is a bad judge.",
  work:"Scalia Dissents · 2004",
  files:["Antonin Scalia Official SCOTUS Portrait.jpg"], pos:[50,18] },

{ no:"REF.15", name:"Walter Block", slug:"walter-block", dates:"b. 1942", origin:"Brooklyn, New York",
  role:"Austrian Economics · Anarcho-Capitalism",
  desc:"The professor of unpopular defenses. From rent control to roads, he took the arguments nobody would touch and gave them a market-case rigor that trained a generation.",
  quote:"Taxation is theft.",
  work:"Defending the Undefendable · 1976",
  files:["Walter Block.jpg","Walter Block by Gage Skidmore.jpg","Walter Block 2016.jpg"], pos:[50,20] },

{ no:"REF.16", name:"Deirdre N. McCloskey", slug:"deirdre-mccloskey", dates:"b. 1942", origin:"Ann Arbor, Michigan",
  role:"Economic History · Rhetoric",
  desc:"Historian of the Great Enrichment. Her trilogy argues the modern world was made not by capital but by ideas — dignity and liberty for the bourgeois innovators.",
  quote:"Not capital, but ideas, made the modern world.",
  work:"Bourgeois Dignity · 2010",
  files:["Deirdre McCloskey (15579711609).jpg","Deirdre McCloskey.jpg","Deirdre Nansen McCloskey.jpg"], pos:[50,22] },

{ no:"REF.17", name:"Roger Scruton", slug:"roger-scruton", dates:"1944–2020", origin:"Buslingthorpe, England",
  role:"Philosophy · Conservatism",
  desc:"Philosopher of beauty, home and inheritance. He taught that conservatism begins in gratitude — that good things are easily destroyed and slowly, lovingly, built.",
  quote:"Good things are easily destroyed, but not easily created.",
  work:"How to Be a Conservative · 2014",
  files:["Roger Scruton.jpg","Roger Scruton 2015.jpg","Roger Scruton 2014.jpg"], pos:[50,20] },

{ no:"REF.18", name:"Clarence Thomas", slug:"clarence-thomas", dates:"b. 1948", origin:"Pin Point, Georgia",
  role:"Constitutional Law · Originalism",
  desc:"Justice of the U.S. Supreme Court since 1991. From Pin Point, Georgia, to the bench — originalism as lived autobiography, and a jurisprudence of quiet conviction.",
  quote:"Good manners will open doors that the best education cannot.",
  work:"My Grandfather's Son · 2007",
  files:["Clarence Thomas official SCOTUS portrait crop.jpg"], pos:[50,18] },

{ no:"REF.19", name:"Hans-Hermann Hoppe", slug:"hans-hermann-hoppe", dates:"b. 1949", origin:"Peine, Germany",
  role:"Austrian Economics · Philosophy",
  desc:"Mises–Rothbard's sharpest heir. Argumentation ethics, the private-property order, and a systematic case that democracy erodes exactly what it promises to protect.",
  quote:"Democracy has nothing to do with freedom. Democracy is a soft variant of communism.",
  work:"Democracy: The God That Failed · 2001",
  files:["Hans-Hermann Hoppe.jpg","Hans-Hermann Hoppe 2012.jpg"], pos:[50,20] },

{ no:"REF.20", name:"Jesús Huerta de Soto", slug:"jesus-huerta-de-soto", dates:"b. 1956", origin:"Madrid, Spain",
  role:"Austrian Economics · Finance",
  desc:"The Spanish master of the Austrian school. Money, bank credit and economic cycles — a complete theory of fractional-reserve instability, taught from Madrid to the world.",
  quote:"Socialism is the most widespread intellectual error of our time.",
  work:"Money, Bank Credit, and Economic Cycles · 1998",
    files:["Profesor Jesus-Huerta-de-Soto.jpg","Jesús Huerta de Soto.jpg","Jesus Huerta de Soto.jpg","Huerta de Soto.jpg"], pos:[50,20] },

{ no:"REF.21", name:"Javier Milei", slug:"javier-milei", dates:"b. 1970", origin:"Buenos Aires, Argentina",
  role:"Austrian School · Political Leadership",
  desc:"Economist turned president. From classrooms and television to the Casa Rosada — proof that the ideas of Mises and Hoppe can win a national election in the 21st century.",
  quote:"¡Viva la libertad, carajo!",
  work:"Davos Speech · 2024",
  files:["Javier Milei - Presidencia (crop).jpg","Javier Milei 2023 (cropped).jpg","Javier Milei.jpg","Retrato oficial de Javier Milei (cropped).jpg","Javier Milei - Davos 2024 (cropped).jpg"], pos:[50,15] }
];

const RES={};
const special=(f,w)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=${w}`;
const commonsPage=f=>`https://commons.wikimedia.org/wiki/File:${f}`;

let toastTimer;
function toast(msg,warn){
  const t=document.getElementById("refToast");
  t.textContent=msg;t.classList.toggle("warn",!!warn);t.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),3800);
}
function saveBlob(blob,name){
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);a.download=name;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),6000);
}

const grid=document.getElementById("refGrid");
grid.innerHTML=PLATES.map((r,i)=>`
<article class="ref-card" id="plate-${i}">
  <div class="ref-plate">
    <div class="ref-photo" data-mono="${r.name.split(" ").filter(w=>w[0]===w[0].toUpperCase()).map(w=>w[0]).slice(0,2).join("")}">
      <img alt="Portrait of ${r.name}" loading="lazy" decoding="async">
    </div>
  </div>
  <div class="ref-body">
    <div class="ref-row"><span class="ref-no">${r.no}</span><span class="ref-dates">${r.dates} · ${r.origin}</span></div>
    <h3 class="ref-name">${r.name}</h3>
    <span class="ref-tag">${r.role}</span>
    <p class="ref-desc">${r.desc}</p>
    <p class="ref-quote">“${r.quote}”</p>
    <p class="ref-work">Key Work — ${r.work}</p>
  </div>
  <div class="ref-actions">
    <button class="btn-dl" type="button" data-plate="${i}">↓ Plate 4K</button>
    <button class="btn-raw" type="button" data-raw="${i}">Raw ↓</button>
    <a class="btn-src" href="${commonsPage(r.files[0])}" target="_blank" rel="noopener">Source ↗</a>
    <span class="res-chip" id="chip-${i}">RESOLVING…</span>
  </div>
</article>`).join("");

function loadWithFallbacks(img,r){
  let k=0;
  img.onerror=()=>{
    k++;
    if(k<r.files.length) img.src=special(r.files[k],900);
    else{img.onerror=null;img.closest(".ref-photo").classList.add("noimg")}
  };
  img.src=special(r.files[0],900);
}

async function resolvePlate(r,card){
  const chip=card.querySelector(".res-chip");
  for(const f of r.files){
    try{
      const api="https://commons.wikimedia.org/w/api.php?action=query&format=json&formatversion=2&origin=*"
        +"&prop=imageinfo&iiprop=url%7Csize&iiurlwidth=3840&titles="+encodeURIComponent("File:"+f);
      const j=await(await fetch(api)).json();
      const pg=j&&j.query&&j.query.pages&&j.query.pages[0];
      if(pg&&!pg.missing&&pg.imageinfo&&pg.imageinfo[0]){
        const ii=pg.imageinfo[0];
        RES[r.no]={thumburl:ii.thumburl||ii.url,width:ii.thumbwidth||ii.width,height:ii.thumbheight||ii.height,file:f};
        card.querySelector(".btn-src").href=commonsPage(f);
        const w=RES[r.no].width,h=RES[r.no].height;
        chip.textContent=`MAX ${w}×${h} PX${w>=3000?" · 4K":""}`;
        if(w>=3000)chip.classList.add("fourk");
        return;
      }
    }catch(e){}
  }
  chip.textContent="NO PHOTO ON COMMONS";
}

const C={bg:"#faf9f7",border:"#e5e1d9",accent:"#9a8d78",muted:"#817766",text:"#2a2a2a",
         num:"#a69a84",matTop:"#f3f1ec",matBot:"#eceae4",tagBg:"#f4f1eb",hair:"rgba(250,249,247,.55)"};
const F=(w,s,it)=>`${it?"italic ":""}${w} ${s}px "JetBrains Mono", monospace`;
const setLS=(ctx,v)=>{try{ctx.letterSpacing=v}catch(e){}};

let fontsReady=false;
async function ensureFonts(){
  if(fontsReady)return;
  await Promise.all(['400 20px','500 20px','700 20px','800 20px','italic 400 20px','italic 500 20px']
    .map(s=>document.fonts.load(`${s} "JetBrains Mono"`).catch(()=>{})));
  await document.fonts.ready;
  fontsReady=true;
}
function wrapText(ctx,text,maxW){
  const out=[];let cur="";
  for(const w of text.split(" ")){
    const t=cur?cur+" "+w:w;
    if(ctx.measureText(t).width>maxW&&cur){out.push(cur);cur=w}else cur=t;
  }
  if(cur)out.push(cur);
  return out;
}
async function blobToImage(blob){
  if(window.createImageBitmap)return await createImageBitmap(blob);
  return new Promise((res,rej)=>{
    const u=URL.createObjectURL(blob),im=new Image();
    im.onload=()=>{URL.revokeObjectURL(u);res(im)};im.onerror=rej;im.src=u;
  });
}

function drawPlate(r,img){
  const B=5,MAT=80,MATB=64,BPAD=70;
  const W=2800,innerW=W-2*B,photoW=innerW-2*MAT,photoH=Math.round(photoW*5/4);
  const matH=MAT+photoH+MATB,textW=innerW-2*BPAD,bodyX=B+BPAD;

  const mc=document.createElement("canvas").getContext("2d");
  setLS(mc,"-2px");mc.font=F(800,88);
  setLS(mc,"6px");mc.font=F(500,30);
  const tagText=r.role.toUpperCase(),tagW=mc.measureText(tagText).width;
  setLS(mc,"0px");mc.font=F(400,34);
  const descLines=wrapText(mc,r.desc,textW);
  mc.font=F(400,33,true);
  const quoteLines=wrapText(mc,"“"+r.quote+"”",textW-36);

  const rowH=44,g1=36,nameH=100,g2=32,tagH=62,g3=36,descLH=62,g4=46,quoteLH=60,g5=46,workH=38,padB=76;
  const bodyH=rowH+g1+nameH+g2+tagH+g3+descLines.length*descLH+g4+quoteLines.length*quoteLH+g5+workH+padB;
  const H=Math.round(B+matH+B+bodyH+B);

  const cnv=document.createElement("canvas");cnv.width=W;cnv.height=H;
  const x=cnv.getContext("2d");

  x.fillStyle=C.bg;x.fillRect(0,0,W,H);
  x.strokeStyle=C.border;x.lineWidth=B;x.strokeRect(B/2,B/2,W-B,H-B);

  const g=x.createLinearGradient(0,B,0,B+matH);
  g.addColorStop(0,C.matTop);g.addColorStop(1,C.matBot);
  x.fillStyle=g;x.fillRect(B,B,innerW,matH);
  x.fillStyle=C.border;x.fillRect(B,B+matH-4,innerW,4);

  const px=B+MAT,py=B+MAT;
  const scale=Math.max(photoW/img.width,photoH/img.height);
  const cropW=photoW/scale,cropH=photoH/scale;
  const sx=(img.width-cropW)*(r.pos[0]/100),sy=(img.height-cropH)*(r.pos[1]/100);
  let filterOK=false;
  try{x.filter="grayscale(1) contrast(1.07) brightness(1.01)";filterOK=x.filter!=="none"}catch(e){}
  x.drawImage(img,sx,sy,cropW,cropH,px,py,photoW,photoH);
  x.filter="none";
  if(!filterOK){
    const d=x.getImageData(px,py,photoW,photoH),a=d.data,con=1.07;
    for(let i=0;i<a.length;i+=4){
      const l=(a[i]*.2126+a[i+1]*.7152+a[i+2]*.0722-128)*con+128;
      a[i]=a[i+1]=a[i+2]=l<0?0:l>255?255:l;
    }
    x.putImageData(d,px,py);
  }
  x.strokeStyle=C.border;x.lineWidth=4;x.strokeRect(px,py,photoW,photoH);
  x.strokeStyle=C.hair;x.lineWidth=3;x.strokeRect(px+26,py+26,photoW-52,photoH-52);

  let y=B+matH+B+BPAD;
  setLS(x,"10px");x.font=F(700,38);x.fillStyle=C.num;
  x.fillText(r.no,bodyX,y+38);
  x.textAlign="right";setLS(x,"3px");x.font=F(500,34);x.fillStyle=C.muted;
  x.fillText(r.dates+" · "+r.origin,W-B-BPAD,y+38);
  x.textAlign="left";

  y+=rowH+g1+nameH;
  setLS(x,"-2px");x.font=F(800,88);x.fillStyle=C.text;
  x.fillText(r.name,bodyX,y);

  y+=g2;
  x.fillStyle=C.tagBg;x.fillRect(bodyX,y,tagW+52,tagH);
  x.strokeStyle=C.border;x.lineWidth=3;x.strokeRect(bodyX,y,tagW+52,tagH);
  setLS(x,"6px");x.font=F(500,30);x.fillStyle=C.accent;
  x.fillText(tagText,bodyX+26,y+tagH/2+11);

  y+=tagH+g3;
  setLS(x,"0px");x.font=F(400,34);x.fillStyle=C.muted;
  descLines.forEach(l=>{x.fillText(l,bodyX,y+34);y+=descLH});

  y+=g4-14;
  x.fillStyle=C.accent;x.fillRect(bodyX,y+8,5,quoteLines.length*quoteLH-24);
  x.font=F(400,33,true);x.fillStyle="rgba(42,42,42,.92)";
  quoteLines.forEach(l=>{x.fillText(l,bodyX+36,y+34);y+=quoteLH});

  y+=g5;
  setLS(x,"5px");x.font=F(700,30);x.fillStyle=C.accent;
  x.fillText("KEY WORK — "+r.work.toUpperCase(),bodyX,y+30);

  return cnv;
}

async function makePlateCanvas(r){
  const info=RES[r.no];
  const url=info?info.thumburl:special(r.files[0],3840);
  const res=await fetch(url,{mode:"cors"});
  if(!res.ok)throw new Error("HTTP "+res.status);
  const img=await blobToImage(await res.blob());
  await ensureFonts();
  return drawPlate(r,img);
}
const canvasToBlob=cnv=>new Promise(s=>cnv.toBlob(s,"image/png"));

async function downloadRaw(r){
  const info=RES[r.no];
  const url=info?info.thumburl:special(r.files[0],3840);
  const res=await fetch(url,{mode:"cors"});
  if(!res.ok)throw new Error("HTTP "+res.status);
  const ext=(url.split("?")[0].match(/\.(jpe?g|png|webp)$/i)||[,"jpg"])[1].toLowerCase().replace("jpeg","jpg");
  saveBlob(await res.blob(),r.slug+"-portrait-"+(info?info.width:3840)+"px."+ext);
}
async function downloadPlate(r,btn){
  const label=btn?btn.textContent:null;
  if(btn){btn.disabled=true;btn.textContent="RENDERING…"}
  try{
    const cnv=await makePlateCanvas(r);
    saveBlob(await canvasToBlob(cnv),r.slug+"-plate-"+cnv.width+"x"+cnv.height+"px.png");
    toast("PLATE EXPORTED · "+r.name.toUpperCase()+" · "+cnv.width+"×"+cnv.height+" PX");
  }catch(e){
    toast("RENDER FAILED — TRYING RAW PHOTO",true);
    try{await downloadRaw(r)}catch(e2){toast("ARCHIVE UNREACHABLE — CHECK CONNECTION",true)}
  }finally{
    if(btn){btn.disabled=false;btn.textContent=label}
  }
}

grid.addEventListener("click",e=>{
  const p=e.target.closest("[data-plate]");
  if(p){downloadPlate(PLATES[+p.dataset.plate],p);return}
  const w=e.target.closest("[data-raw]");
  if(w){
    const b=w;b.disabled=true;b.textContent="…";
    downloadRaw(PLATES[+w.dataset.raw])
      .then(()=>toast("RAW PHOTO SAVED · "+PLATES[+w.dataset.raw].name.toUpperCase()))
      .catch(()=>toast("ARCHIVE UNREACHABLE — CHECK CONNECTION",true))
      .finally(()=>{b.disabled=false;b.textContent="Raw ↓"});
  }
});
document.getElementById("allBtn").addEventListener("click",async function(){
  if(this.disabled)return;
  this.disabled=true;
  toast("EXPORTING 21 PLATES — ALLOW MULTIPLE FILES IF ASKED");
  for(let i=0;i<PLATES.length;i++){
    this.textContent="RENDERING "+(i+1)+"/21…";
    await downloadPlate(PLATES[i]);
    await new Promise(s=>setTimeout(s,1200));
  }
  this.disabled=false;this.textContent="↓ All Plates";
  toast("ALL 21 PLATES EXPORTED");
});

const refCards=grid.querySelectorAll(".ref-card");
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(reduced){refCards.forEach(c=>c.classList.add("on"))}
else{
  const io=new IntersectionObserver(es=>es.forEach((e,i)=>{
    if(e.isIntersecting){setTimeout(()=>e.target.classList.add("on"),(i%3)*90);io.unobserve(e.target)}
  }),{threshold:.1});
  refCards.forEach(c=>io.observe(c));
}
refCards.forEach((card,i)=>{
  const r=PLATES[i];
  loadWithFallbacks(card.querySelector(".ref-photo img"),r);
  resolvePlate(r,card);
});
</script>
