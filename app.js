
const modules = window.MODULES;
let current = 0;
let state = {};
try {
  state = JSON.parse(localStorage.getItem('bushCap123State') || '{}') || {};
} catch(e) {
  state = {};
}
// Curăță valori vechi/invalide care pot bloca opțiunile.
Object.keys(state).forEach(k => {
  if (!Number.isInteger(state[k]) || state[k] < 0 || state[k] > 3) delete state[k];
});
localStorage.setItem('bushCap123State', JSON.stringify(state));

function save(){ localStorage.setItem('bushCap123State', JSON.stringify(state)); }
function key(mid, qi){ return mid + ':' + qi; }

function chapterOf(m){ return String(m.id).split('.')[0]; }
function chapterName(n){ return 'CAPITOLUL ' + ({'1':'I','2':'II','3':'III'}[n]||n); }
function chapterImage(n){ return ({'1':'0007.gif','2':'0005.gif','3':'0006.gif'}[n]||''); }
function buildMenu(){
  const box=document.getElementById('moduleList'); box.innerHTML='';
  let lastChapter='';
  modules.forEach((m,i)=>{
    const ch=chapterOf(m);
    if(ch!==lastChapter){
      const h=document.createElement('div'); h.className='chapter-separator';
      h.innerHTML=`<img src="${chapterImage(ch)}" alt=""><span>${chapterName(ch)}</span>`;
      box.appendChild(h); lastChapter=ch;
    }
    let answered=0, correct=0;
    m.questions.forEach((qq,qi)=>{let v=state[key(m.id,qi)]; if(Number.isInteger(v)){answered++; if(v===qq.answer) correct++;}});
    const b=document.createElement('button'); b.className='module-btn'+(i===current&&!document.getElementById('moduleView').classList.contains('hidden')?' active':'');
    b.innerHTML=`<span class="code">${m.id}</span><span class="title">${m.title}</span><span class="done">${answered}/${m.questions.length}</span>`;
    b.onclick=()=>openModule(i); box.appendChild(b);
  });
  updateGlobal();
}
function updateGlobal(){
  let answered=0, correct=0;
  modules.forEach(m=>m.questions.forEach((qq,qi)=>{let v=state[key(m.id,qi)];if(Number.isInteger(v)){answered++; if(v===qq.answer)correct++;}}));
  const total=modules.reduce((s,m)=>s+m.questions.length,0); document.getElementById('globalScore').textContent = answered ? Math.round(correct/total*100)+'%' : '0%';
}
function openModule(i){
  current=i; const m=modules[i];
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('moduleView').classList.remove('hidden');
  document.getElementById('moduleCode').textContent=chapterName(chapterOf(m))+' · SECȚIUNEA '+m.id;
  document.getElementById('moduleTitle').textContent=m.title;
  document.getElementById('audioPlayer').src=m.audio;
  renderQuiz(); buildMenu(); window.scrollTo({top:120,behavior:'smooth'});
}
function renderQuiz(){
  const m=modules[current], box=document.getElementById('quiz'); box.innerHTML='';
  let answered=0, correct=0;
  m.questions.forEach((qq,qi)=>{
    const rawChosen=state[key(m.id,qi)]; const chosen=Number.isInteger(rawChosen)?rawChosen:undefined;
    if(chosen!==undefined){answered++; if(chosen===qq.answer)correct++;}
    const card=document.createElement('div'); card.className='question';
    const head=document.createElement('div'); head.className='qhead';
    head.innerHTML=`<div class="qnum">${qi+1}</div><div><div class="qtext">${qq.q}</div><span class="kind">${qq.kind}</span></div>`;
    card.appendChild(head);
    const ops=document.createElement('div'); ops.className='options';
    const sorted=qq.options.map((op,orig)=>({op,orig})).sort((a,b)=>a.op.localeCompare(b.op,'ro',{sensitivity:'base'}));
    sorted.forEach((item,displayIndex)=>{
      const op=item.op, oi=item.orig;
      const btn=document.createElement('button'); btn.className='option'; btn.textContent=String.fromCharCode(97+displayIndex)+'. '+op;
      if(chosen!==undefined){
        btn.disabled=true;
        if(oi===qq.answer)btn.classList.add('correct');
        if(oi===chosen && chosen!==qq.answer)btn.classList.add('wrong');
      }else{
        btn.onclick=()=>{state[key(m.id,qi)]=oi;save();renderQuiz();buildMenu();};
      }
      ops.appendChild(btn);
    });
    card.appendChild(ops);
    if(chosen!==undefined){
      const f=document.createElement('div'); f.className='feedback';
      const ok=chosen===qq.answer;
      f.innerHTML=`<strong class="${ok?'ok':'bad'}">${ok?'Corect.':'Răspuns incorect.'}</strong> ${qq.feedback}`;
      card.appendChild(f);
    }
    box.appendChild(card);
  });
  document.getElementById('moduleScore').textContent=`${correct}/${m.questions.length}`;
  document.getElementById('questionCounter').textContent=`${answered} din ${m.questions.length} itemi rezolvați`;
}
document.getElementById('resetBtn').onclick=()=>{
  const m=modules[current];
  m.questions.forEach((qq,qi)=>delete state[key(m.id,qi)]);
  save(); renderQuiz(); buildMenu();
}
buildMenu();
