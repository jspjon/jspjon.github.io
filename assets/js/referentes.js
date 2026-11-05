/* REFERENTES — 33 placas cronológicas. Datos + render.
   files: candidatos en Wikimedia (se prueban en orden).
   host: wiki de origen (por defecto: Commons). */
const PLATES=[
{ no:"REF.01", name:"John Locke", slug:"john-locke", dates:"1632–1704", origin:"Wrington, England",
  role:"Social Contract · Natural Rights",
  desc:"Father of liberalism. Government by consent, and natural rights to life, liberty and property — the soil in which every later argument for freedom grew.",
  quote:"Where there is no law, there is no freedom.",
  work:"Two Treatises of Government · 1689",
  files:["John Locke.jpg"], pos:[50,18] },

{ no:"REF.02", name:"Adam Smith", slug:"adam-smith", dates:"1723–1790", origin:"Kirkcaldy, Scotland",
  role:"Classical Political Economy",
  desc:"Moral philosopher of the Scottish Enlightenment. His inquiry into the nature and causes of the wealth of nations founded political economy — the bedrock of every floor above.",
  quote:"It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
  work:"The Wealth of Nations · 1776",
  files:["Adam Smith The Muir portrait.jpg"], pos:[50,12] },

{ no:"REF.03", name:"Lysander Spooner", slug:"lysander-spooner", dates:"1808–1887", origin:"Athol, Massachusetts",
  role:"Law & Individualist Anarchism",
  desc:"Abolitionist, lawyer, individualist anarchist. He argued that no constitution binds those who never signed it — and that no state rules without consent.",
  quote:"Vices are those acts by which a man injures himself or his property. Crimes are those acts by which one man injures the person or property of another.",
  work:"No Treason VI · 1870",
  files:["LysanderSpooner.jpg"], pos:[50,22] },

{ no:"REF.04", name:"Carl Menger", slug:"carl-menger", dates:"1840–1921", origin:"Neu-Sandec, Austria-Hungary",
  role:"Austrian School · Founder",
  desc:"Founder of the Austrian school. From marginal utility he rebuilt value from the ground up — subjective, ordinal, human — and gave economics its causal method.",
  quote:"All things are subject to the law of cause and effect.",
  work:"Principles of Economics · 1871",
  files:["Carl Menger.jpg"], pos:[50,20] },

{ no:"REF.05", name:"Eugen von Böhm-Bawerk", slug:"eugen-bohm-bawerk", dates:"1851–1914", origin:"Brno, Austria-Hungary",
  role:"Austrian School · Capital & Interest",
  desc:"Menger's great successor. His theory of capital and interest — present goods valued over future goods — explained profit, wages and the roundabout structure of production.",
  quote:"Present goods are, as a rule, worth more than future goods.",
  work:"Capital and Interest · 1884",
  files:["Eugen von Böhm-Bawerk 1896 Portrait cropped.png","Eugen von Böhm-Bawerk.jpg","Eugen von Boehm-Bawerk.jpg"], pos:[50,18] },

{ no:"REF.06", name:"Winston Churchill", slug:"winston-churchill", dates:"1874–1965", origin:"Blenheim Palace, England",
  role:"Statesmanship · Rhetoric",
  desc:"Statesman, historian and writer. In the darkest hour of the twentieth century, his words proved that rhetoric anchored in principle can hold a civilization together.",
  quote:"Democracy is the worst form of government, except for all the others.",
  work:"The Second World War · 1948–1953",
  files:["Sir Winston Churchill - 19086236948.jpg","Winston Churchill cph.3a49758.jpg"], pos:[50,15] },

{ no:"REF.07", name:"Ludwig von Mises", slug:"ludwig-von-mises", dates:"1881–1973", origin:"Lemberg, Austria-Hungary",
  role:"Austrian School · Praxeology",
  desc:"System-builder of the Austrian school. From human action he derived money, prices, interest — and the impossibility of rational calculation under socialism.",
  quote:"Not mythical 'material productive forces,' but reason and ideas determine the course of human affairs.",
  work:"Human Action · 1949",
  files:["Ludwig von Mises.jpg"], pos:[50,22] },

{ no:"REF.08", name:"Henry Hazlitt", slug:"henry-hazlitt", dates:"1894–1993", origin:"Philadelphia, Pennsylvania",
  role:"Economic Journalism",
  desc:"The journalist who made Austrian economics readable. One lesson, repeated against every fashion: trace the unseen, long-run consequences for all groups, not the visible few.",
  quote:"The art of economics consists in looking not merely at the immediate but at the longer effects of any act or policy; it consists in tracing the consequences of that policy not merely for one group but for all groups.",
  work:"Economics in One Lesson · 1946",
  files:["Hazlitt-photo.jpg","Henry Hazlitt.jpg","Henry Hazlitt 1964.jpg"], pos:[50,20] },

{ no:"REF.09", name:"Friedrich A. Hayek", slug:"friedrich-hayek", dates:"1899–1992", origin:"Vienna, Austria",
  role:"Austrian School · Spontaneous Order",
  desc:"Nobel laureate and philosopher of spontaneous order. The price system as a communications network, the knowledge problem of planners, and the long argument against serfdom.",
  quote:"The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.",
  work:"The Road to Serfdom · 1944",
  files:["Friedrich Hayek portrait.jpg"], pos:[50,20] },

{ no:"REF.10", name:"Karl Popper", slug:"karl-popper", dates:"1902–1994", origin:"Vienna, Austria",
  role:"Philosophy of Science · Open Society",
  desc:"Philosopher of falsifiability and the open society. Knowledge grows by conjecture and refutation — and utopias that promise to remake man end by destroying him.",
  quote:"True ignorance is not the absence of knowledge, but the refusal to acquire it.",
  work:"The Open Society and Its Enemies · 1945",
  files:["Karl Popper.jpg"], pos:[50,20] },

{ no:"REF.11", name:"Frank S. Meyer", slug:"frank-s-meyer", dates:"1909–1972", origin:"Newark, New Jersey",
  role:"Fusionism · National Review",
  desc:"Ex-communist turned architect of fusionism — the marriage of traditionalist conservatism and libertarianism that powered the postwar American right beside Buckley.",
  quote:"Virtue is the fruit of freedom.",
  work:"In Defense of Freedom · 1962",
  files:["YoungFSM2.jpg"], pos:[50,20] },

{ no:"REF.12", name:"Ronald Coase", slug:"ronald-coase", dates:"1910–2013", origin:"Willesden, England",
  role:"Institutional Economics · Transaction Costs",
  desc:"Nobel laureate who asked why firms exist and answered with transaction costs. Property rights, institutions and real-world frictions became economics after him.",
  quote:"The world of zero transaction costs has often been described as a Coasean world. Nothing could be further from the truth.",
  work:"The Problem of Social Cost · 1960",
  files:["Coase scan 11 edited (cropped).jpg"], pos:[50,20] },

{ no:"REF.13", name:"Milton Friedman", slug:"milton-friedman", dates:"1912–2006", origin:"Brooklyn, New York",
  role:"Chicago School · Monetarism",
  desc:"Nobel laureate and great popularizer. Monetarism, the permanent-income hypothesis, and the argument that economic and political freedom rise and fall together.",
  quote:"Underlying most arguments against the free market is a lack of belief in freedom itself.",
  work:"Capitalism and Freedom · 1962",
  files:["Milton Friedman.jpg"], pos:[50,22] },

{ no:"REF.14", name:"Bruno Leoni", slug:"bruno-leoni", dates:"1913–1967", origin:"Ancona, Italy",
  role:"Austrian Economics · Law",
  desc:"Italian jurist and philosopher of law. Against the legislator's decree he set law as a spontaneously evolved order — discovered, not made.",
  quote:"Law is not made — it is found.",
  work:"Freedom and the Law · 1961",
  host:"it.wikipedia.org",
  files:["Bruno Leoni (1913-1967).jpg"], pos:[50,20] },

{ no:"REF.15", name:"James M. Buchanan", slug:"james-m-buchanan", dates:"1919–2013", origin:"Murfreesboro, Tennessee",
  role:"Public Choice · Constitutional Political Economy",
  desc:"Nobel laureate and founder of constitutional political economy. Rules must bind rulers, because rulers cannot bind themselves.",
  quote:"Politics without romance.",
  work:"The Calculus of Consent · 1962",
  files:["James Buchanan by Atlas network.jpg"], pos:[50,18] },

{ no:"REF.16", name:"Margaret Thatcher", slug:"margaret-thatcher", dates:"1925–2013", origin:"Grantham, England",
  role:"Political Leadership · Classical Liberalism",
  desc:"The Grocer's Daughter. Three general elections, the Falklands, the miners' strike, Big Bang — she governed as she believed: there is no such thing as a free lunch.",
  quote:"The problem with socialism is that you eventually run out of other people's money.",
  work:"The Downing Street Years · 1993",
  files:["Margaret Thatcher stock portrait (cropped).jpg","Margaret Thatcher stock portrait.jpg","Margaret Thatcher (1983).jpg"], pos:[50,18] },

{ no:"REF.17", name:"William F. Buckley Jr.", slug:"william-f-buckley", dates:"1925–2008", origin:"New York, New York",
  role:"Conservative Intellect · National Review",
  desc:"Fusionist, polemicist, sailor. He founded National Review, hosted a thousand Firing Lines, and made the argument for ordered liberty entertaining enough to survive.",
  quote:"I would rather be governed by the first 2,000 people in the Boston telephone directory than by the 2,000 people on the faculty of Harvard University.",
  work:"God and Man at Yale · 1951",
  files:["William F. Buckley, Jr. Public Domain (cropped).jpg","William F. Buckley Jr. 1985.jpg","William F. Buckley.jpg"], pos:[50,18] },

{ no:"REF.18", name:"Murray N. Rothbard", slug:"murray-rothbard", dates:"1926–1995", origin:"New York, New York",
  role:"Austrian School · Libertarian Theory",
  desc:"Historian, economist, polymath of the Austrian revival. Man, Economy, and State rebuilt economic science from first principles — and counted the costs of power and market.",
  quote:"The state is a gang of thieves writ large.",
  work:"Man, Economy, and State · 1962",
  files:["Murray Rothbard.jpg"], pos:[50,20] },

{ no:"REF.19", name:"Thomas Sowell", slug:"thomas-sowell", dates:"b. 1930", origin:"Gastonia, North Carolina",
  role:"Chicago School · Empiricism",
  desc:"Empiricist of the Hoover Institution. Knowledge, decisions, incentives and trade-offs — a long career spent auditing the unintended consequences of the intended.",
  quote:"It is hard to imagine a more stupid or more dangerous way of making decisions than by putting those decisions in the hands of people who pay no price for being wrong.",
  work:"Basic Economics · 2000",
  files:["Thomas Sowell Portrait (3x4 cropped).jpg","Thomas Sowell.jpg"], pos:[50,18] },

{ no:"REF.20", name:"Antonin Scalia", slug:"antonin-scalia", dates:"1936–2016", origin:"Trenton, New Jersey",
  role:"Constitutional Law · Originalism",
  desc:"Justice of the U.S. Supreme Court, 1986–2016. Originalist, textualist, and the finest dissenter of his age — his arguments outlived his losses.",
  quote:"The judge who always likes the results he reaches is a bad judge.",
  work:"Scalia Dissents · 2004",
  files:["Antonin Scalia Official SCOTUS Portrait.jpg"], pos:[50,18] },

{ no:"REF.21", name:"Robert E. Lucas Jr.", slug:"robert-lucas", dates:"1937–2023", origin:"Yakima, Washington",
  role:"New Classical Macroeconomics · Rational Expectations",
  desc:"Nobel laureate. Rational expectations and the Lucas critique: policy changes the very behavior it tries to predict — macroeconomics after him was another science.",
  quote:"Once you start thinking about growth, it is hard to think about anything else.",
  work:"Expectations and the Neutrality of Money · 1972",
  files:["La Revolución Industrial Pasado y Futuro, Robert E. Lucas Jr. screenshot (cropped).jpg"], pos:[50,18] },

{ no:"REF.22", name:"Robert Nozick", slug:"robert-nozick", dates:"1938–2002", origin:"Brooklyn, New York",
  role:"Political Philosophy · The Minimal State",
  desc:"The libertarian answer to Rawls. Rights as side constraints, the minimal state as the only legitimate one — a book that reset political philosophy in a single stroke.",
  quote:"Individuals have rights, and there are things no person or group may do to them without violating their rights.",
  work:"Anarchy, State, and Utopia · 1974",
  files:["Robert Nozick 1977 Libertarian Review cover (4x5 cropped).jpg"], pos:[50,15] },

{ no:"REF.23", name:"David Gordon", slug:"david-gordon", dates:"b. 1942", origin:"United States",
  role:"Austrian Economics · Philosophy",
  desc:"Philosopher of the Austrian school at the Mises Institute. Reviewer of everything, editor of the Journal of Libertarian Studies, guardian of the school's intellectual lineage.",
  quote:"Austrian economics has its origins in the late scholastics.",
  work:"The Philosophical Origins of Austrian Economics · 1993",
  files:["David Gordon by Gage Skidmore.jpg"], pos:[50,20] },

{ no:"REF.24", name:"Walter Block", slug:"walter-block", dates:"b. 1942", origin:"Brooklyn, New York",
  role:"Austrian Economics · Anarcho-Capitalism",
  desc:"The professor of unpopular defenses. From rent control to roads, he took the arguments nobody would touch and gave them a market-case rigor that trained a generation.",
  quote:"Taxation is theft.",
  work:"Defending the Undefendable · 1976",
  files:["Walter Block.jpg","Walter Block by Gage Skidmore.jpg","Walter Block 2016.jpg"], pos:[50,20] },

{ no:"REF.25", name:"Deirdre N. McCloskey", slug:"deirdre-mccloskey", dates:"b. 1942", origin:"Ann Arbor, Michigan",
  role:"Economic History · Rhetoric",
  desc:"Historian of the Great Enrichment. Her trilogy argues the modern world was made not by capital but by ideas — dignity and liberty for the bourgeois innovators.",
  quote:"Not capital, but ideas, made the modern world.",
  work:"Bourgeois Dignity · 2010",
  files:["Deirdre McCloskey (15579711609).jpg","Deirdre McCloskey.jpg","Deirdre Nansen McCloskey.jpg"], pos:[50,22] },

{ no:"REF.26", name:"Richard A. Epstein", slug:"richard-epstein", dates:"b. 1943", origin:"New York, New York",
  role:"Law & Economics · Simple Rules",
  desc:"Legal scholar of simple rules. Takings, torts, and the case that a complex world needs few — and firm — principles.",
  quote:"You own yourself.",
  work:"Simple Rules for a Complex World · 1995",
  files:["Epsteinatgmu.jpg"], pos:[50,20] },

{ no:"REF.27", name:"Roger Scruton", slug:"roger-scruton", dates:"1944–2020", origin:"Buslingthorpe, England",
  role:"Philosophy · Conservatism",
  desc:"Philosopher of beauty, home and inheritance. He taught that conservatism begins in gratitude — that good things are easily destroyed and slowly, lovingly, built.",
  quote:"Good things are easily destroyed, but not easily created.",
  work:"How to Be a Conservative · 2014",
  files:["Roger Scruton.jpg","Roger Scruton 2015.jpg","Roger Scruton 2014.jpg"], pos:[50,20] },

{ no:"REF.28", name:"Clarence Thomas", slug:"clarence-thomas", dates:"b. 1948", origin:"Pin Point, Georgia",
  role:"Constitutional Law · Originalism",
  desc:"Justice of the U.S. Supreme Court since 1991. From Pin Point, Georgia, to the bench — originalism as lived autobiography, and a jurisprudence of quiet conviction.",
  quote:"Good manners will open doors that the best education cannot.",
  work:"My Grandfather's Son · 2007",
  files:["Clarence Thomas official SCOTUS portrait crop.jpg"], pos:[50,18] },

{ no:"REF.29", name:"Hans-Hermann Hoppe", slug:"hans-hermann-hoppe", dates:"b. 1949", origin:"Peine, Germany",
  role:"Austrian Economics · Philosophy",
  desc:"Mises–Rothbard's sharpest heir. Argumentation ethics, the private-property order, and a systematic case that democracy erodes exactly what it promises to protect.",
  quote:"Democracy has nothing to do with freedom. Democracy is a soft variant of communism.",
  work:"Democracy: The God That Failed · 2001",
  files:["Hans-Hermann Hoppe.jpg","Hans-Hermann Hoppe 2012.jpg"], pos:[50,20] },

{ no:"REF.30", name:"Samuel A. Alito Jr.", slug:"samuel-alito", dates:"b. 1950", origin:"Trenton, New Jersey",
  role:"Constitutional Law · Originalism",
  desc:"Justice of the U.S. Supreme Court since 2006. The careful craftsman of the modern Court's originalist majority.",
  quote:"A judge's job is to apply the law, not to remake it.",
  work:"So Ordered",
  files:["Samuel Alito official photo.jpg"], pos:[50,18] },

{ no:"REF.31", name:"Randy E. Barnett", slug:"randy-barnett", dates:"b. 1952", origin:"United States",
  role:"Constitutional Law · Presumption of Liberty",
  desc:"Constitutional scholar and advocate. The presumption of liberty, the structure of rights, and the case that rebuilt the Ninth Amendment.",
  quote:"The presumption of liberty.",
  work:"The Structure of Liberty · 1998",
  files:["Randy Barnett.jpg"], pos:[50,20] },

{ no:"REF.32", name:"Jesús Huerta de Soto", slug:"jesus-huerta-de-soto", dates:"b. 1956", origin:"Madrid, Spain",
  role:"Austrian Economics · Finance",
  desc:"The Spanish master of the Austrian school. Money, bank credit and economic cycles — a complete theory of fractional-reserve instability, taught from Madrid to the world.",
  quote:"Socialism is the most widespread intellectual error of our time.",
  work:"Money, Bank Credit, and Economic Cycles · 1998",
  files:["Profesor Jesus-Huerta-de-Soto.jpg","Jesús Huerta de Soto.jpg","Jesus Huerta de Soto.jpg","Huerta de Soto.jpg"], pos:[50,0] },

{ no:"REF.33", name:"Javier Milei", slug:"javier-milei", dates:"b. 1970", origin:"Buenos Aires, Argentina",
  role:"Austrian School · Political Leadership",
  desc:"Economist turned president. From classrooms and television to the Casa Rosada — proof that the ideas of Mises and Hoppe can win a national election in the 21st century.",
  quote:"¡Viva la libertad, carajo!",
  work:"Davos Speech · 2024",
  files:["Javier Milei - Presidencia (crop).jpg","Javier Milei 2023 (cropped).jpg","Javier Milei.jpg","Retrato oficial de Javier Milei (cropped).jpg","Javier Milei - Davos 2024 (cropped).jpg"], pos:[50,15] }
];

const HOST=r=>r.host||"commons.wikimedia.org";
const special=(r,f,w)=>`https://${HOST(r)}/wiki/Special:FilePath/${encodeURIComponent(f)}?width=${w}`;
const commonsPage=r=>`https://${HOST(r)}/wiki/File:${r.fileUsed||r.files[0]}`;

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
    <a class="btn-src" href="${commonsPage(r)}" target="_blank" rel="noopener">Source ↗</a>
  </div>
</article>`).join("");

function loadWithFallbacks(card,r){
  const img=card.querySelector(".ref-photo img");
  const link=card.querySelector(".btn-src");
  let k=0;
  img.onload=()=>{ r.fileUsed=r.files[k]; link.href=commonsPage(r); };
  img.onerror=()=>{
    k++;
    if(k<r.files.length) img.src=special(r,r.files[k],900);
    else{img.onerror=null;card.querySelector(".ref-photo").classList.add("noimg")}
  };
  img.src=special(r,r.files[0],900);
}

const refCards=grid.querySelectorAll(".ref-card");
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(reduced){refCards.forEach(c=>c.classList.add("on"))}
else{
  const io=new IntersectionObserver(es=>es.forEach((e,i)=>{
    if(e.isIntersecting){setTimeout(()=>e.target.classList.add("on"),(i%3)*90);io.unobserve(e.target)}
  }),{threshold:.1});
  refCards.forEach(c=>io.observe(c));
}
refCards.forEach((card,i)=>loadWithFallbacks(card,PLATES[i]));
