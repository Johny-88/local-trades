(()=>{
  const MJQ_IFRAME_BASE='https://www.myjobquote.co.uk/iframes/v1/ifr_gaqubieivjwserhvbwhg5kr0dxcf';
  const tradeIds={
    'Handyman':104,
    'Plumber':162,
    'Electrician':64,
    'Roofer':174,
    'Painter & Decorator':145,
    'Flooring Fitter':72,
    'Builder':18,
    'Gardener':87
  };

  const modal=document.getElementById('modal');
  if(!modal) return;

  // Remove the old prototype card handlers while preserving the exact cards/design.
  const liveCards=[];
  document.querySelectorAll('[data-service]').forEach(card=>{
    const clean=card.cloneNode(true);
    card.replaceWith(clean);
    liveCards.push(clean);
  });

  // Remove the old prototype modal behaviour before installing the real quote flow.
  modal.onclick=null;
  document.onkeydown=null;
  modal.setAttribute('aria-hidden','true');
  modal.innerHTML=`<div class="quote-box" id="quoteBox" role="dialog" aria-modal="true" aria-labelledby="quoteTitle"><div class="box-top"><div><span class="smallcap">Your quote request</span><h3 id="quoteTitle">Find someone local</h3><p id="quoteSub">Tell us a little about the job to get started.</p></div><button class="close" id="quoteClose" type="button" aria-label="Close quote form">×</button></div><div class="quote-frame-wrap"><div class="quote-loading" id="quoteLoading">Loading your quote form…</div><iframe src="about:blank" width="100%" height="760" frameborder="0" scrolling="no" id="mjqquoteform" class="quote-frame" title="Local trade quote request"></iframe></div><div class="quote-footer">Free for homeowners · Up to 3 local quotes · No obligation to hire</div></div>`;

  const quoteBox=document.getElementById('quoteBox');
  const title=document.getElementById('quoteTitle');
  const sub=document.getElementById('quoteSub');
  const iframe=document.getElementById('mjqquoteform');
  const closeButton=document.getElementById('quoteClose');
  const loading=document.getElementById('quoteLoading');
  let chosen='';
  let lastTrigger=null;

  function quoteUrl(service){
    const tradeId=tradeIds[service];
    return tradeId ? `${MJQ_IFRAME_BASE}?trade=${tradeId}` : MJQ_IFRAME_BASE;
  }

  function openQuoteForm(trigger){
    chosen=trigger.dataset.service;
    lastTrigger=trigger;
    title.textContent=chosen==='Other'?'Tell us what needs doing':`Find a local ${chosen}`;
    sub.textContent=chosen==='Other'
      ? 'Choose the type of work and tell us a little about your job.'
      : `${chosen} is already selected. Just tell us a little about the job.`;
    iframe.title=chosen==='Other'?'General local trade quote request':`${chosen} quote request`;
    iframe.classList.remove('ready');
    loading.classList.remove('hidden');
    iframe.style.height='760px';
    iframe.src=quoteUrl(chosen);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('quote-open');
    quoteBox.scrollTop=0;
    setTimeout(()=>closeButton.focus(),50);
  }

  function shut(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('quote-open');
    if(lastTrigger) lastTrigger.focus();
  }

  liveCards.forEach(card=>card.addEventListener('click',()=>openQuoteForm(card)));
  closeButton.addEventListener('click',shut);
  modal.addEventListener('click',event=>{if(event.target===modal)shut()});
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&modal.classList.contains('open')) shut();
  });

  iframe.addEventListener('load',()=>{
    if(iframe.src==='about:blank') return;
    loading.classList.add('hidden');
    iframe.classList.add('ready');
  });

  window.addEventListener('message',event=>{
    if(event.origin!=='https://www.myjobquote.co.uk') return;
    const data=event.data;
    if(!data||typeof data!=='object') return;
    if(data.name==='heightChange'){
      const height=Number(data.value);
      if(Number.isFinite(height)&&height>=200&&height<=5000){
        iframe.style.height=`${height}px`;
      }
    }else if(data.name==='pageChange'){
      quoteBox.scrollTo({top:0,behavior:'smooth'});
    }
  },false);
})();
