// Core helpers: inject navbar/sidebar, smooth page transitions
(function(){
  // inject nav & sidebar are handled by navbar.js and sidebar.js (loaded before this script)
  // page transitions
  function fadeOutAndNavigate(url){ document.body.style.transition = 'opacity .28s'; document.body.style.opacity = 0; setTimeout(()=> location.href = url, 300); }
  document.querySelectorAll('[data-navigate]').forEach(b=> b.addEventListener('click', (e)=>{ e.preventDefault(); fadeOutAndNavigate(b.getAttribute('href')); }));

  // UI small helpers
  document.addEventListener('DOMContentLoaded', ()=>{
    document.body.style.opacity = 1;
  });
})();