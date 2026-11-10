const CONFIG={
  NAME:"Timali",        // le prénom de ton amie
  AGE:"",                  // ex : "25" (laisse vide pour ne pas l’afficher)
  FROM:"Jemima",           // ta signature
  SUB:"Convocation officielle : présence obligatoire, tenue correcte exigée (cravate comprise).",
  SKILLS:[["Mini pizzas, mini croques, mini crêpes","chef étoilée"],["Fous rires à 2h du matin","10/10"],["Poses devant les miroirs","expert"],["Ponctualité","en cours de négociation"],["Câlins","illimités"],["Conseils de vie (non sollicités)","excellents"],["Danser sans honte","certifié"]],
  MENU:[["Mini pizzas","croustillantes, fondantes, impossibles à manger une seule","1 compliment"],["Mini croques-monsieur","le petit format qui fait grand bruit","1 merci sincère"],["Mini crêpes","dorées, légères, vite disparues","1 câlin"],["Mini panekak","pour les soirées où on refait le monde","1 grand merci"],["Et tout ce qui est petit et délicieux","le menu change selon l’humeur de la chef","1 sourire"]],
  CAPS:["Le style, c’est elle","Le clip officiel","Le mode soleil","Séance mode, tenue de gala"],
  MESSAGE:"Joyeux anniversaire ma Timali 🤭💛🎂\n\nAujourd’hui c’est le jour de l'une de mes personnes préférée, ma crœurrrrr.\n\nTima, tu es tellement adorable, douce, gentille et aimante. Tu as un cœur en or, un vrai. En si peu de temps, tu m’as fait une place dans ta vie, dans ta maison, dans ta famille, comme si j’en avais toujours fait partie. C’était la première fois que je me sentais aussi bien, aussi à l’aise avec une personne qui n’est pas ma sœur. Et ça, je ne l’oublierai jamais.\n\nJe pense à nos soirées, nos danses jusqu’à ce qu’on n’en puisse plus 😭😂 avec tes apprentie et la chef Christellie, nos longues discussions où on refait le monde, et surtout... tes amuse-bouche ! Tes petites pizzas, tes croque-monsieur, tes crêpes, tes panekak... Seigneur, rien que d’y penser j’ai l’eau à la bouche et envie de pleurer en même temps 🥹❤️\n\nMerci d’être toi. Merci d'etre toujours là pour nous quand on a besion d'une orielle pour nous ecouter. Merci pour ton amour, ta générosité, ta joie de vivre. Tu rends tout plus beau, plus doux, plus simple.\n\nEn ce jour de ton anniversaire, je te souhaite tout ce que tu donnes aux autres : beaucoup d’amour, de bonheur, de paix, de santé, et une vie remplie de belles choses. Que Dieu te bénisse abondamment et te garde toujours aussi rayonnante.\n\nJe t’aime tellement ma Timali. On doit refaire une de nos soirées très vite hein, avec danse et amuse-bouche obligatoires !\n\nJoyeux anniversaire mon cœur en or 💛✨🎉!\n\n JEMIMA ",
  FIN:"Que tous tes vœux se réalisent, Tima. 💛"
};
const $=id=>document.getElementById(id);
const M={p:["media/photo1.jpg","media/photo2.jpg","media/photo3.jpg"],v:["media/video1.mp4","media/video2.mp4","media/video3.mp4","media/video4.mp4"]};
// Titre
const words=("Joyeux anniversaire, "+CONFIG.NAME+(CONFIG.AGE?" !":" !")).split(" ");
$("ttl").innerHTML=words.map((w,i)=>`<span style="animation-delay:${.35+i*.12}s">${w}${i==words.length-1?"":"&nbsp;"}</span>`).join("");
$("sub").textContent=CONFIG.SUB;
$("fn").textContent="Poste : Mon amie du coeur"+(CONFIG.AGE?" ("+CONFIG.AGE+" ans d’expérience de vie)":"");
$("rows").innerHTML=CONFIG.SKILLS.map(s=>`<div class="row"><span>${s[0]}</span><i></i><b>${s[1]}</b></div>`).join("");
$("menu").innerHTML=CONFIG.MENU.map(d=>`<div class="dish"><div class="row"><span>${d[0]}</span><i></i><b>${d[2]}</b></div><small>${d[1]}</small></div>`).join("");
// Galerie : photos puis vidéos
const items=[...M.p.map((s,i)=>`<figure class="pol"><img src="${s}" alt="" loading="lazy"><figcaption>${CONFIG.CAPS[i]||""}</figcaption></figure>`),
 ...M.v.map((s,i)=>`<figure class="pol"><video src="${s}" controls playsinline preload="metadata"></video><figcaption>Preuve n°${i+1}</figcaption></figure>`)];
$("strip").innerHTML=items.join("");
// Lettre : machine à écrire au scroll
const txt=Array.from(CONFIG.MESSAGE);let k=0,started=false;
const L=$("letter");
function show(n){L.textContent=txt.slice(0,n).join("")}
function type(){show(++k);if(k<txt.length)setTimeout(type,/[.!\n]/.test(txt[k-1])?110:20);else L.classList.remove("cur")}
L.onclick=()=>{k=txt.length;show(k);L.classList.remove("cur")};
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting&&!started){started=true;
 if(matchMedia("(prefers-reduced-motion:reduce)").matches){show(txt.length);L.classList.remove("cur")}else{show(txt.length);L.style.minHeight=L.offsetHeight+"px";show(0);type()}o.disconnect()}},{threshold:.4}).observe(L);
// Confettis
const cv=$("cv"),x=cv.getContext("2d");let P=[],run=false;
function sz(){cv.width=innerWidth;cv.height=innerHeight}sz();addEventListener("resize",sz);
function boom(){const c=["#d4ad55","#d0618a","#f4ecdc","#c08a5a","#3fb5a8"];
 for(let i=0;i<180;i++)P.push({x:innerWidth/2,y:innerHeight*.6,vx:(Math.random()-.5)*16,vy:-Math.random()*17-4,r:Math.random()*7+4,c:c[i%5],a:Math.random()*6});
 if(!run){run=true;loop()}}
function loop(){x.clearRect(0,0,cv.width,cv.height);P.forEach(p=>{p.vy+=.38;p.x+=p.vx;p.y+=p.vy;p.a+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()});
 P=P.filter(p=>p.y<cv.height+20);if(P.length)requestAnimationFrame(loop);else run=false}
$("cake").onclick=()=>{const c=$("cake");if(c.classList.contains("out"))return boom();c.classList.add("out");$("fin").textContent=CONFIG.FIN;boom();setTimeout(boom,500)};