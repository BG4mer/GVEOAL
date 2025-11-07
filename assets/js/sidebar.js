// Sidebar injection with contextual items. Pages can set data-sidebar="editor" etc.
const SIDEBAR_TEMPLATES = {
  home: `
    <div class="sidebar">
      <div class="card"><strong>Quick Launch</strong><div class="small">Open editor or templates</div>
        <div style="margin-top:8px"><a class="btn" href="/editor/editor.html">Open Editor</a></div>
      </div>
      <div style="height:12px"></div>
      <div class="card"><strong>Recent</strong><div class="small">No recent projects</div></div>
    </div>`,
  editor: `
    <div class="sidebar">
      <div class="card"><strong>Tools</strong>
        <div style="margin-top:8px;display:flex;flex-direction:column;gap:6px">
          <a class="btn" href="/editor/chroma.html">Chroma Key</a>
          <a class="btn" href="/editor/captions.html">Captions</a>
          <a class="btn" href="/editor/effects.html">Effects</a>
          <a class="btn" href="/editor/transitions.html">Transitions</a>
        </div>
      </div>
      <div style="height:12px"></div>
      <div class="card"><strong>Export</strong><div style="margin-top:8px"><a class="btn" href="/editor/export.html">Export Center</a></div></div>
    </div>`
};

document.querySelectorAll('[data-inject="sidebar"]').forEach(el=>{
  const ctx = el.getAttribute('data-sidebar') || 'home';
  el.innerHTML = SIDEBAR_TEMPLATES[ctx] || SIDEBAR_TEMPLATES.home;
});