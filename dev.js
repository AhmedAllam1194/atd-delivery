
(function(){
  function injectDevIcon(){
    const topbar = document.querySelector('.topbar');
    if(!topbar || document.querySelector('#devBtn')) return;
    const btn = document.createElement('button');
    btn.id='devBtn'; btn.className='button dev-only'; btn.textContent='مطوّر';
    btn.onclick = ()=> location.href='users-admin.html';
    const right = topbar.lastElementChild || topbar;
    right.prepend(btn);
    document.documentElement.classList.add('dev-mode');
  }
  function allowDev(u){
    try{
      const uname = localStorage.getItem('AT_USERNAME')||'';
      const role = localStorage.getItem('AT_ROLE')||'';
      const allowed = (uname==='Ahmedallam') || (role==='developer');
      if (allowed) injectDevIcon();
    }catch(e){}
  }
  firebase?.auth?.().onAuthStateChanged(allowDev);
})();
