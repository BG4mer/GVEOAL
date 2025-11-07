// Navbar content injection
const NAV_HTML = `
<div class="navbar container">
  <div class="logo">
    <img src="/assets/icons/logo.svg" alt="logo" style="width:36px;height:36px" />
    <div>
      <div style="font-weight:700">GREATEST EDITOR</div>
      <div class="small">Pro web editor for gamers & reactors</div>
    </div>
  </div>
  <div class="nav-links">
    <a class="btn" href="/home/index.html">Home</a>
    <a class="btn" href="/editor/editor.html">Editor</a>
    <a class="btn" href="/settings/index.html">Settings</a>
    <a class="btn" href="/account/index.html">Account</a>
    <a class="btn" href="/docs/index.html">Docs</a>
    <button id="themeToggle" class="btn">Theme</button>
  </div>
</div>
`;

document.querySelectorAll('[data-inject="navbar"]').forEach(el=> el.innerHTML = NAV_HTML);

document.getElementById('themeToggle')?.addEventListener('click', ()=>{
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  if(cur==='dark'){ document.documentElement.setAttribute('data-theme','clean'); alert('Theme: clean'); }
  else { document.documentElement.setAttribute('data-theme','dark'); alert('Theme: dark'); }
});