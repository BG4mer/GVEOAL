// AI helpers: mocked analysis pipeline. Replace with real model endpoints or WASM models.
document.getElementById('aiRunBtn')?.addEventListener('click', async ()=>{
  const status = document.getElementById('aiStatus'); status.textContent = 'Analyzing...';
  await new Promise(r=>setTimeout(r, 1500));
  status.textContent = 'Ready — suggested trims & captions created (mock)';
  // Store mocked suggestions to local storage
  const mock = { suggestions:[{clip:'demo',start:0,end:12,score:0.92}], captions:[{start:0,end:3,text:'Nice play!'}] };
  GE.storage.set('lastAi', mock);
});