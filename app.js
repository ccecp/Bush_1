const modules=window.MODULES;let chapter=0,current=null,state={};try{state=JSON.parse(localStorage.getItem("bush123")||"{}")}catch(e){}
const CH={1:["CAPITOLUL I","Importanța leadershipului și a managementului educațional","0003.gif","0004.gif"],2:["CAPITOLUL II","Modele de leadership și management educațional","0005.gif","0006.gif"],3:["CAPITOLUL III","Modelele formale","0007.gif","0008.gif"]};
function k(m,q){return m.id+":"+q}function save(){localStorage.setItem("bush123",JSON.stringify(state))}
function chooseChapter(c){chapter=c;let sb=document.querySelector('.tabs button[data-tab="scheme"]');if(sb)sb.textContent=(c===1?"🧭 Busola interactivă":c===2?"👓 Cele 6 lentile":"🧠 Hartă interactivă");document.getElementById("home").classList.add("hidden");document.getElementById("study").classList.remove("hidden");document.getElementById("chapterLabel").textContent=CH[c][0];document.getElementById("chapterTitle").textContent=CH[c][1];document.getElementById("chapterHead").innerHTML='<div class="head-pair"><img src="'+CH[c][2]+'"><img src="'+CH[c][3]+'"></div><b>'+CH[c][0]+'</b><span>'+CH[c][1]+'</span>';buildMenu();let ms=modules.filter(m=>m.id.startsWith(c+"."));if(ms.length)openModule(modules.indexOf(ms[0]))}
function goHome(){document.getElementById("study").classList.add("hidden");document.getElementById("home").classList.remove("hidden");window.scrollTo(0,0)}
function buildMenu(){let box=document.getElementById("moduleList");box.innerHTML="";modules.forEach((m,i)=>{if(!m.id.startsWith(chapter+"."))return;let a=0;m.questions.forEach((q,j)=>{if(Number.isInteger(state[k(m,j)]))a++});let b=document.createElement("button");b.className="navitem"+(i===current?" active":"");b.innerHTML='<strong>'+m.id+'</strong><span>'+m.title+'</span><em>'+a+'/'+m.questions.length+'</em>';b.onclick=()=>openModule(i);box.appendChild(b)});updateProgress()}
function updateProgress(){let ms=modules.filter(m=>m.id.startsWith(chapter+".")),tot=0,ans=0;ms.forEach(m=>m.questions.forEach((q,j)=>{tot++;if(Number.isInteger(state[k(m,j)]))ans++}));let p=tot?Math.round(ans/tot*100):0;document.getElementById("progressText").textContent=ans+" / "+tot+" · "+p+"%";document.getElementById("progressBar").style.width=p+"%"}
function openModule(i){current=i;let m=modules[i];document.getElementById("moduleCode").textContent="SECȚIUNEA "+m.id;document.getElementById("moduleTitle").textContent=m.title;document.getElementById("audioPlayer").src=m.audio||"";showTab("audio");renderQuiz();buildMenu();window.scrollTo({top:150,behavior:"smooth"})}
function showTab(tab){let m=modules[current],L=(window.LEARNING||{})[m.id]||{ideas:["Material de fixare în curs de completare."],formula:"",scheme:[]};document.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));document.getElementById("audioPane").classList.toggle("hidden",tab!=="audio");document.getElementById("ideasPane").classList.toggle("hidden",tab!=="ideas");document.getElementById("schemePane").classList.toggle("hidden",tab!=="scheme");if(tab==="ideas"){document.getElementById("ideasPane").innerHTML='<div class="learnbox"><h4>💡 Idei esențiale</h4><ul>'+L.ideas.map(x=>'<li>'+x+'</li>').join("")+'</ul>'+(L.formula?'<div class="formula"><b>De reținut:</b> '+L.formula+'</div>':"")+'</div>'}if(tab==="scheme"){if(m&&m.id==="1.1"){renderLeadershipMap()}else if(m&&m.id==="2.1"){renderLensesMap()}else if(m&&m.id==="3.1"){renderFormalMap()}else{document.getElementById("schemePane").innerHTML='<div class="learnbox"><h4>⌘ Schema de memorare</h4><div class="schemeflow">'+L.scheme.map((x,j)=>'<div class="schemeitem">'+x+'</div>'+(j<L.scheme.length-1?'<div class="arrow">↓</div>':"")).join("")+'</div>'+(L.formula?'<div class="formula"><b>Formula:</b> '+L.formula+'</div>':"")+'</div>'}}}
function renderQuiz(){let m=modules[current],box=document.getElementById("quiz");box.innerHTML="";let answered=0;m.questions.forEach((q,qi)=>{let chosen=state[k(m,qi)];if(Number.isInteger(chosen))answered++;let card=document.createElement("section");card.className="question";card.innerHTML='<div class="qtitle"><b>?</b><span>Întrebarea '+(qi+1)+'</span></div><h4>'+q.q+'</h4>';let ops=document.createElement("div");ops.className="options";let arr=q.options.map((t,orig)=>({t,orig})).sort((x,y)=>x.t.localeCompare(y.t,"ro",{sensitivity:"base"}));arr.forEach((x,di)=>{let bt=document.createElement("button");bt.className="option";bt.innerHTML='<strong>'+String.fromCharCode(97+di)+'.</strong><span>'+x.t+'</span>';if(Number.isInteger(chosen)){bt.disabled=true;if(x.orig===q.answer)bt.classList.add("correct");if(x.orig===chosen&&chosen!==q.answer)bt.classList.add("wrong")}else bt.onclick=()=>{state[k(m,qi)]=x.orig;save();renderQuiz();buildMenu()};ops.appendChild(bt)});card.appendChild(ops);if(Number.isInteger(chosen)){let f=document.createElement("div");f.className="feedback";f.innerHTML='<b>'+(chosen===q.answer?"Corect.":"Răspuns incorect.")+'</b> '+q.feedback;card.appendChild(f)}box.appendChild(card)});document.getElementById("questionCounter").textContent=answered+" din "+m.questions.length+" rezolvați";updateProgress()}

const FORMAL_MAP=[
 {icon:"🎯",name:"OBIECTIVE",q:"Ce vrem să realizăm?",details:["clare și oficiale","orientează deciziile","permit evaluarea rezultatelor"],links:["3.4 Modelele raționale","3.6.1 Obiective"]},
 {icon:"🧱",name:"STRUCTURĂ",q:"Cum ne organizăm?",details:["roluri și poziții","diviziunea muncii","coordonare","organigramă","relații formale"],links:["3.1 Modelele structurale","3.6.2 Structura organizațională"]},
 {icon:"👤",name:"AUTORITATE",q:"Cine decide?",details:["ierarhie","poziție formală","responsabilitate","raportare"],links:["3.3 Modelele birocratice","3.3.1 Birocrația în educație","3.5 Modelele ierarhice"]},
 {icon:"⚙️",name:"FUNCȚIONARE",q:"Cum lucrăm?",details:["reguli și proceduri","decizie rațională","coordonare","control și evaluare"],links:["3.2 Modelele sistemice","3.2.1 Sisteme deschise sau închise","3.6.3 Mediul extern"]},
 {icon:"📊",name:"REZULTATE",q:"Ce obținem?",details:["atingerea obiectivelor","eficacitate","feedback și ajustare"],links:["3.6.4 Leadership","3.7 Leadershipul managerial","3.8 Limitările modelelor formale","3.9 Concluzie"]}
];
function renderFormalMap(){
 let box=document.getElementById("schemePane");
 box.innerHTML='<div class="formalmap"><div class="maptop"><div><small>HARTA CAPITOLULUI III</small><h4>🏫 ȘCOALA CA ORGANIZAȚIE FORMALĂ</h4><p>Pornește de la cele 5 repere. Apasă pe fiecare pentru a reconstrui capitolul.</p></div><button class="visualtest" onclick="startVisualTest()">🧠 Testează-mă vizual</button></div><div class="mapline">'+FORMAL_MAP.map((x,i)=>'<button class="mapnode" onclick="toggleMapNode('+i+',this)"><span class="mapnum">'+(i+1)+'</span><b>'+x.icon+' '+x.name+'</b><small>'+x.q+'</small><em>Apasă pentru detalii ↓</em></button>').join('<span class="maparrow">→</span>')+'</div><div id="mapDetail" class="mapdetail"><b>Alege un element din schemă.</b></div><div class="feedbackloop">↶ FEEDBACK ȘI AJUSTARE — contextul influențează toate elementele ↷</div><div class="maplinks"><h5>Cum derivă subcapitolele din această hartă?</h5>'+FORMAL_MAP.map((x,i)=>'<div><strong>'+(i+1)+'. '+x.name+'</strong><span>'+x.links.join(" • ")+'</span></div>').join("")+'</div></div>';
}
function toggleMapNode(i,el){
 document.querySelectorAll(".mapnode").forEach(x=>x.classList.remove("open"));el.classList.add("open");
 let x=FORMAL_MAP[i];document.getElementById("mapDetail").innerHTML='<div class="detailicon">'+x.icon+'</div><div><h5>'+x.name+' — '+x.q+'</h5><ul>'+x.details.map(d=>'<li>'+d+'</li>').join("")+'</ul><p><b>Legături în capitol:</b> '+x.links.join(" • ")+'</p></div>';
}
function startVisualTest(){
 let box=document.getElementById("schemePane"), order=[...FORMAL_MAP.keys()].sort(()=>Math.random()-.5), missing=order.slice(0,2);
 box.innerHTML='<div class="formalmap testmode"><div class="maptop"><div><small>ACTIVE RECALL</small><h4>🧠 Completează harta din memorie</h4><p>Două repere au dispărut. Alege denumirea corectă pentru fiecare.</p></div><button class="visualtest secondary" onclick="renderFormalMap()">← Înapoi la hartă</button></div><div class="mapline">'+FORMAL_MAP.map((x,i)=>missing.includes(i)?'<div class="mapnode missing" id="miss'+i+'"><span class="mapnum">'+(i+1)+'</span><b>❓</b><select onchange="checkVisual('+i+',this)"><option value="">Alege...</option>'+FORMAL_MAP.map(y=>'<option>'+y.name+'</option>').join("")+'</select></div>':'<div class="mapnode fixed"><span class="mapnum">'+(i+1)+'</span><b>'+x.icon+' '+x.name+'</b><small>'+x.q+'</small></div>').join('<span class="maparrow">→</span>')+'</div><div id="visualResult" class="mapdetail"><b>Reconstituie cele două elemente lipsă.</b></div></div>';
}
function checkVisual(i,sel){
 let ok=sel.value===FORMAL_MAP[i].name, card=document.getElementById("miss"+i);
 card.classList.remove("good","bad");card.classList.add(ok?"good":"bad");
 document.getElementById("visualResult").innerHTML=ok?'<b>Corect:</b> '+FORMAL_MAP[i].icon+' '+FORMAL_MAP[i].name+' — '+FORMAL_MAP[i].q:'<b>Mai încearcă.</b> Gândește-te la ordinea: Obiective → Structură → Autoritate → Funcționare → Rezultate.';
}
const LEADERSHIP_SIDES=[
 {icon:"🧭",name:"LEADERSHIP",question:"Încotro mergem?",items:["viziune","valori","direcție","influență"],note:"Leadershipul fixează direcția și mobilizează oamenii în jurul scopurilor educaționale."},
 {icon:"⚙️",name:"MANAGEMENT",question:"Cum facem?",items:["organizare","implementare","coordonare","funcționare"],note:"Managementul transformă direcția în organizare și acțiune."}
];
function renderLeadershipMap(){
 let b=document.getElementById("schemePane");
 b.innerHTML='<div class="conceptmap compassmap"><div class="maptop"><div><small>HARTA CAPITOLULUI I</small><h4>🧭 BUSOLA CONDUCERII ȘCOLII</h4><p>Leadershipul dă direcția; managementul o pune în practică.</p></div><button class="visualtest" onclick="startLMTest()">🎯 Leadership sau management?</button></div><div class="compasscore">🏫 <b>ȘCOALA</b></div><div class="twobranches">'+LEADERSHIP_SIDES.map((x,i)=>'<button class="branchcard" onclick="showLM('+i+',this)"><span>'+x.icon+'</span><b>'+x.name+'</b><small>'+x.question+'</small><em>Apasă pentru detalii ↓</em></button>').join("")+'</div><div id="lmDetail" class="mapdetail"><b>Alege Leadership sau Management.</b></div><div class="context-ring"><b>🌍 CONTEXTUL</b><span>școala • comunitatea • cultura • autonomia / descentralizarea</span></div><div class="formula"><b>Formula vizuală:</b> LEADERSHIP = direcție · MANAGEMENT = punerea direcției în practică · CONTEXT = adaptare.</div></div>';
}
function showLM(i,el){
 document.querySelectorAll(".branchcard").forEach(x=>x.classList.remove("open"));el.classList.add("open");let x=LEADERSHIP_SIDES[i];
 document.getElementById("lmDetail").innerHTML='<div class="detailicon">'+x.icon+'</div><div><h5>'+x.name+' — '+x.question+'</h5><ul>'+x.items.map(v=>'<li>'+v+'</li>').join("")+'</ul><p>'+x.note+'</p></div>';
}
const LM_TEST=[["viziune","LEADERSHIP"],["organizare","MANAGEMENT"],["valori","LEADERSHIP"],["implementare","MANAGEMENT"],["influență","LEADERSHIP"],["coordonare","MANAGEMENT"],["direcție","LEADERSHIP"],["funcționare","MANAGEMENT"]];
function startLMTest(){
 let q=LM_TEST[Math.floor(Math.random()*LM_TEST.length)],b=document.getElementById("schemePane");
 b.innerHTML='<div class="conceptmap testmode"><div class="maptop"><div><small>ACTIVE RECALL</small><h4>🎯 Unde se potrivește?</h4><p>Încadrează termenul în categoria corectă.</p></div><button class="visualtest secondary" onclick="renderLeadershipMap()">← Înapoi la busolă</button></div><div class="testword">'+q[0]+'</div><div class="twobranches"><button class="branchcard" onclick="answerLM(\''+q[1]+'\',\'LEADERSHIP\')">🧭 <b>LEADERSHIP</b></button><button class="branchcard" onclick="answerLM(\''+q[1]+'\',\'MANAGEMENT\')">⚙️ <b>MANAGEMENT</b></button></div><div id="lmResult" class="mapdetail"><b>Alege una dintre cele două categorii.</b></div></div>';
}
function answerLM(correct,chosen){document.getElementById("lmResult").innerHTML=correct===chosen?'<b>Corect.</b> Ai identificat funcția termenului. <button class="miniagain" onclick="startLMTest()">Alt termen →</button>':'<b>Mai încearcă.</b> Reține: leadership = direcție; management = implementare.'}

const LENSES=[
 {icon:"🏛️",name:"FORMAL",focus:"structură, obiective și autoritate oficială",lead:"MANAGERIAL"},
 {icon:"🤝",name:"COLEGIAL",focus:"participare, consens și decizie comună",lead:"PARTICIPATIV / TRANSFORMAȚIONAL / DISTRIBUIT"},
 {icon:"♟️",name:"POLITIC",focus:"interese, putere, conflict și negociere",lead:"TRANZACȚIONAL"},
 {icon:"👤",name:"SUBIECTIV",focus:"percepții, interpretări și semnificații individuale",lead:"POSTMODERN"},
 {icon:"❓",name:"AMBIGUITATE",focus:"incertitudine, obiective neclare și imprevizibilitate",lead:"CONTINGENT"},
 {icon:"🎭",name:"CULTURAL",focus:"valori, credințe, norme și simboluri comune",lead:"MORAL"}
];
function renderLensesMap(){
 let b=document.getElementById("schemePane");
 b.innerHTML='<div class="conceptmap lensesmap"><div class="maptop"><div><small>HARTA CAPITOLULUI II</small><h4>👓 CELE 6 LENTILE</h4><p>Același tip de organizație poate fi înțeles din perspective diferite.</p></div><button class="visualtest" onclick="startLensTest()">🧩 Asociază modelul</button></div><div class="lenscore">🏫<b>ORGANIZAȚIA</b><span>Prin ce lentilă o privesc?</span></div><div class="lensgrid">'+LENSES.map((x,i)=>'<button class="lens" onclick="showLens('+i+',this)"><span>'+x.icon+'</span><b>'+x.name+'</b><small>Apasă pentru a deschide lentila</small></button>').join("")+'</div><div id="lensDetail" class="mapdetail"><b>Alege una dintre cele 6 lentile.</b></div><div class="formula"><b>Cheia de examen:</b> model de management → perspectivă asupra organizației → tip de leadership asociat.</div></div>';
}
function showLens(i,el){
 document.querySelectorAll(".lens").forEach(x=>x.classList.remove("open"));el.classList.add("open");let x=LENSES[i];
 document.getElementById("lensDetail").innerHTML='<div class="detailicon">'+x.icon+'</div><div><h5>'+x.name+'</h5><p><b>Ce pune în centru?</b> '+x.focus+'.</p><p><b>Leadership asociat:</b> '+x.lead+'.</p></div>';
}
function startLensTest(){
 let i=Math.floor(Math.random()*LENSES.length),x=LENSES[i],opts=[x.lead];
 while(opts.length<4){let y=LENSES[Math.floor(Math.random()*LENSES.length)].lead;if(!opts.includes(y))opts.push(y)}
 opts.sort(()=>Math.random()-.5);let b=document.getElementById("schemePane");
 b.innerHTML='<div class="conceptmap testmode"><div class="maptop"><div><small>ACTIVE RECALL</small><h4>'+x.icon+' '+x.name+'</h4><p>Ce tip de leadership se asociază acestui model?</p></div><button class="visualtest secondary" onclick="renderLensesMap()">← Înapoi la lentile</button></div><div class="matchoptions">'+opts.map(o=>'<button onclick="answerLens(\''+encodeURIComponent(x.lead)+'\',\''+encodeURIComponent(o)+'\')">'+o+'</button>').join("")+'</div><div id="lensResult" class="mapdetail"><b>Alege asocierea corectă.</b></div></div>';
}
function answerLens(c,o){c=decodeURIComponent(c);o=decodeURIComponent(o);document.getElementById("lensResult").innerHTML=c===o?'<b>Corect.</b> Asocierea este '+c+'. <button class="miniagain" onclick="startLensTest()">Alt model →</button>':'<b>Mai încearcă.</b> Caută asocierea dintre modelul de management și forma de leadership.'}
