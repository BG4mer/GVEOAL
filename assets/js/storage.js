// Simple wrapper around localStorage for projects & settings
window.GE = window.GE || {};
GE.storage = {
  get(key, def){ try{ const v = localStorage.getItem('ge.'+key); return v?JSON.parse(v):def; }catch(e){return def} },
  set(key, val){ localStorage.setItem('ge.'+key, JSON.stringify(val)); }
};
