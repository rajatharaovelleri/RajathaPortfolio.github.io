/* Shared header, panels and page transitions. Edit CONTACT details here. */
(()=>{
const CONTACT={email:"rajathraovalleri@gmail.com",linkedin:"linkedin.com/in/rajathrao1412"};
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const file=(location.pathname.split("/").pop()||"index.html").toLowerCase();
const onWork=["work.html","enotifiers.html","second-cycle.html","bridge-ed.html"].includes(file);
const mk=(id,tag,body,link)=>`<div class="sx-backdrop" id="sx-${id}" hidden><section class="sx-panel" role="dialog" aria-modal="true" aria-labelledby="sx-${id}-h" tabindex="-1"><div class="sx-label"><span class="mono">// ${tag}</span><button class="sx-x" type="button" aria-label="Close" data-close>×</button></div>${body}<div class="sx-bottom"><span class="mono">${link[0]}</span><a href="${link[1]}">${link[2]} <span aria-hidden="true">↗</span></a></div></section></div>`;
const step=(a,b,c)=>`<div><span class="mono">${a}</span><strong>${b}</strong><small>${c}</small></div>`;
const html=`<div class="toolbar" role="banner"><a class="logo" href="index.html" aria-label="Rajatha, home"><span>R.</span> RAJATHA</a><nav class="toplinks" aria-label="Main navigation"><i class="sx-pill"></i><a href="work.html" data-nav="work"${onWork?' aria-current="page"':""}>Work ↗</a><a href="#approach" data-open="approach">My approach</a><a href="#research" data-open="research">Research</a><a href="#about" data-open="about">About me</a><a href="#resume" data-open="resume">Resume ↗</a></nav><div class="right"><div class="online mono"><i></i> Available for opportunities</div><div class="contact-icons"><a aria-label="LinkedIn" class="contact-icon" href="https://www.linkedin.com/in/rajathrao1412/" rel="noopener noreferrer" target="_blank" title="LinkedIn"><svg aria-hidden="true" viewBox="0 0 24 24"><rect height="20" rx="3" width="20" x="2" y="2"/><path d="M7 10v7M7 7v.1M11 17v-7h3v1c1-2 5-2 5 2v4"/></svg></a><a aria-label="Email" class="contact-icon" href="mailto:rajathraovalleri@gmail.com" title="Email"><svg aria-hidden="true" viewBox="0 0 24 24"><rect height="14" rx="2" width="20" x="2" y="5"/><path d="m3 7 9 7 9-7"/></svg></a></div><a class="outline" href="#contact" data-open="contact">Let's talk ↗</a></div><i class="navline"></i></div>`;
const panels=
mk("approach","MY APPROACH",`<div class="sx-main"><div><h2 id="sx-approach-h">Curiosity first.<br><em>Clarity by design.</em></h2><p>I love untangling complex problems. I ask questions, break challenges into smaller pieces, and explore what people actually need before deciding what to design.</p><p>Research gives my curiosity direction. I turn what I learn into clear, visual, practical experiences — then test and refine them until they make sense in real life.</p></div><div class="sx-steps">${step("01 / DISCOVER + DEFINE","Find the problem beneath the problem.","Ask why, understand people, spot patterns, and challenge assumptions through research.")}${step("02 / EXPLORE + DESIGN","Make the complicated feel simple.","Experiment with flows, digital wireframes, and interactive prototypes. Balance usability with visual craft.")}${step("03 / TEST + REFINE","Let real interactions guide the next step.","Observe what works, learn from feedback, and improve with purpose — not just polish.")}</div></div>`,["CURIOSITY · RESEARCH · EXPERIMENTATION · VISUAL DESIGN","work.html","Explore my work"])+
mk("research","RESEARCH",`<div class="sx-main"><div><h2 id="sx-research-h">Understand people.<br><em>Design with purpose.</em></h2><p>I pursued HCI because I wanted to go beyond designing interfaces that look good. I wanted to understand how people think, what they struggle with, and why certain experiences work.</p><p>I love finding patterns in what people say and do, then using those insights to question assumptions and shape practical design decisions.</p></div><div class="sx-steps">${step("01 / LISTEN + EXPLORE","Start with people, not pixels.","Use interviews, surveys, and competitive analysis to understand needs, motivations, and context.")}${step("02 / FIND + EVALUATE","Connect the dots.","Synthesize patterns and uncover friction through usability testing, heuristic evaluation, and walkthroughs.")}${step("03 / APPLY + IMPROVE","Make insights useful.","Translate findings into clearer flows, thoughtful interactions, and prototypes that can be tested and refined.")}</div></div>`,["CURIOSITY · USER RESEARCH · USABILITY · HCI","second-cycle.html","Explore Second Cycle"])+
mk("about","ABOUT ME",`<div class="sx-main"><div><h2 id="sx-about-h">Hey, I’m Rajatha! <em>👋</em></h2><p>I’m a UI/UX Designer passionate about creating seamless digital experiences through thoughtful design and empathy-driven decisions. I enjoy turning complex ideas into intuitive user journeys and meaningful product experiences.</p><p>I believe in one simple principle: “I am not my user.” It reminds me to look beyond my own assumptions, let research guide my decisions, and design around what people actually need.</p><p class="story-subhead">So, how did I get here?</p><p>My journey started as a Statistics and Computer Science student with a strong interest in art and creativity. I began exploring design by creating posters and working on web design projects during college. What started as a creative interest soon sparked my curiosity about UI/UX, and I haven’t looked back since. I loved discovering how design, technology, and human needs come together to shape the products we use every day.</p><p>I later worked as a UI/UX Designer, but I wanted to go beyond creating visually appealing interfaces. I wanted to understand the people behind the screens. That curiosity led me to pursue my Master’s in Human-Computer Interaction at DePaul University, where I developed a deeper understanding of user research, usability, and interaction design.</p><p>Today, I’m excited to bring together my design skills, prototyping experience, and research-driven perspective to help teams create products that are both useful and enjoyable.</p><p>Outside of design, I’m naturally curious, love experimenting with ideas, and have a soft spot for solving puzzles. When I’m not designing, you’ll probably find me gaming, going for a bike ride, or exploring quiet, lesser-known places.</p><p>I guess I’m just someone who enjoys discovering new things and figuring them out along the way.</p></div><div class="sx-steps about-stickers"><h3>If I’m not designing, then I’d be…</h3><div class="sticker-grid"><div aria-label="Solving puzzles" class="sticker-tile" role="img" title="Solving puzzles">🧩</div><div aria-label="Gaming" class="sticker-tile" role="img" title="Gaming">🎮</div><div aria-label="Bike rides" class="sticker-tile" role="img" title="Bike rides">🏍️</div><div aria-label="Exploring quiet places" class="sticker-tile" role="img" title="Exploring quiet places">🏞️</div></div></div></div>`,["CURIOUS MIND · PRACTICAL THINKER · PUZZLE SOLVER","work.html","Explore my work"])+
mk("resume","RESUME",`<div class="sx-main"><div><h2 id="sx-resume-h">My resume.<br><em>One page.</em></h2><p>UI/UX product designer with an MS in Human-Computer Interaction.</p><div class="rs-btns"><a class="rs-btn primary" href="assets/Rajatha_Rao_Resume.pdf" target="_blank" rel="noopener">View PDF <span aria-hidden="true">↗</span></a><a class="rs-btn" href="assets/Rajatha_Rao_Resume.pdf" download="Rajatha_Rao_Resume.pdf">Download <span aria-hidden="true">↓</span></a></div></div><div class="rs-side"><a class="rs-thumb" href="assets/Rajatha_Rao_Resume.pdf" target="_blank" rel="noopener" aria-label="Open resume PDF in a new tab"><img src="assets/resume-preview.webp" alt="Preview of Rajatha Rao V's resume" loading="lazy"></a></div></div>`,["RESUME · PDF · 1 PAGE","work.html","Explore my work"])+
mk("contact","LET'S CONNECT",`<div class="sx-main"><div><h2 id="sx-contact-h">Have something in mind?<br><em>Let's talk.</em></h2><p>Whether it's a design opportunity, an interesting project, or just a conversation about ideas, I'd love to hear from you.</p></div><div class="sx-steps">${step("01 / DROP ME A MESSAGE","Start a conversation.","Have an idea or opportunity? My inbox is open.")}<a class="contact-method contact-email" href="mailto:${CONTACT.email}">Email me <span aria-hidden="true">↗</span></a>${step("02 / CONNECT PROFESSIONALLY","Find me on LinkedIn.","Let's connect and keep in touch.")}<a class="contact-method contact-linkedin" href="https://www.${CONTACT.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div>`,["OPEN TO OPPORTUNITIES · COLLABORATIONS · CONVERSATIONS","mailto:"+CONTACT.email,"Say hello"]);
const slot=document.getElementById("site-header");
const shell=document.querySelector(".sx-shell");if(slot)slot.outerHTML=html;else (shell||document.body).insertAdjacentHTML("afterbegin",html);
document.body.insertAdjacentHTML("beforeend",panels);

const hdr=document.querySelector(".toolbar"),setH=()=>document.documentElement.style.setProperty("--sx-h",hdr.offsetHeight+"px");setH();addEventListener("resize",setH);
/* sliding nav pill */
const nav=document.querySelector(".toplinks"),pill=nav.querySelector(".sx-pill"),links=[...nav.querySelectorAll("a")];
function pillTo(a){if(!a){pill.style.opacity=0;return}pill.style.opacity=1;pill.style.width=a.offsetWidth+"px";pill.style.transform=`translateX(${a.offsetLeft}px)`}
const rest=()=>pillTo(nav.querySelector("[aria-current=page]"));
links.forEach(a=>{a.addEventListener("mouseenter",()=>pillTo(a));a.addEventListener("focus",()=>pillTo(a));a.addEventListener("blur",rest)});
nav.addEventListener("mouseleave",rest);addEventListener("resize",rest);
pill.style.transition="none";rest();requestAnimationFrame(()=>requestAnimationFrame(()=>pill.style.transition=""));
document.fonts&&document.fonts.ready.then(rest);

/* panels */
let active=null,ret=null;
function open(name,from){
 const o=document.getElementById("sx-"+name);if(!o)return;
 if(active)close(true);
 ret=from||document.activeElement;active=o;o.hidden=false;document.documentElement.classList.add("sx-lock");
 requestAnimationFrame(()=>{o.classList.add("open");o.querySelector("[data-close]").focus({preventScroll:true})});
}
function close(fast){
 if(!active)return;const o=active;active=null;o.classList.remove("open");
 const done=()=>{o.hidden=true;if(!active)document.documentElement.classList.remove("sx-lock")};
 fast||reduce?done():setTimeout(done,300);
 if(!fast&&ret&&ret.focus)ret.focus({preventScroll:true});
}
document.addEventListener("click",e=>{
 const t=e.target.closest("[data-open]");if(t){e.preventDefault();open(t.dataset.open,t);return}
 if(e.target.closest("[data-close]")||e.target.classList.contains("sx-backdrop"))close();
});
document.addEventListener("keydown",e=>{
 if(!active)return;
 if(e.key==="Escape"){close();return}
 if(e.key==="Tab"){const n=[...active.querySelectorAll("a[href],button")],f=n[0],l=n[n.length-1];
  if(e.shiftKey&&document.activeElement===f){e.preventDefault();l.focus()}else if(!e.shiftKey&&document.activeElement===l){e.preventDefault();f.focus()}}
});

/* page navigation: calm fade out, header stays, then the next page rises in */
function go(h){if(reduce){location.href=h;return}document.documentElement.classList.add("sx-leaving");setTimeout(()=>{location.href=h},340)}
window.sxGo=go;
document.addEventListener("click",e=>{
 const a=e.target.closest("a[href]");
 if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||a.target||a.hasAttribute("download")||a.hasAttribute("data-open"))return;
 const raw=a.getAttribute("href");if(!raw||raw[0]==="#")return;
 const u=new URL(a.href,location.href);
 if(u.origin!==location.origin||u.pathname===location.pathname)return;
 e.preventDefault();close(true);go(u.href);
});
const pf=new Set();
document.addEventListener("pointerover",e=>{const a=e.target.closest("a[href$='.html']");if(!a||pf.has(a.href))return;pf.add(a.href);const l=document.createElement("link");l.rel="prefetch";l.href=a.href;document.head.appendChild(l)});
addEventListener("pageshow",e=>{if(e.persisted)document.documentElement.classList.remove("sx-leaving")});
})();
