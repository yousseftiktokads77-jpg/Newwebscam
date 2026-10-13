/* Site colour themes. Loaded in <head> (not deferred) so a saved choice is applied before first paint. */
(function () {
  var T = {
    classic: { name: ['الافتراضي', 'Classic'], orange: '#ff6a13', o2: '#ff8a3d', o3: '#ffb27a', orgb: '255,106,19', blue: '#1e4fe0', brgb: '30,79,224', navy: '#0b1740' },
    emerald: { name: ['زمردي', 'Emerald'], orange: '#059669', o2: '#34d399', o3: '#6ee7b7', orgb: '5,150,105', blue: '#0f766e', brgb: '15,118,110', navy: '#052e2b' },
    purple:  { name: ['بنفسجي', 'Purple'], orange: '#9333ea', o2: '#c084fc', o3: '#d8b4fe', orgb: '147,51,234', blue: '#6d28d9', brgb: '109,40,217', navy: '#1e1040' },
    rose:    { name: ['وردي', 'Rose'], orange: '#e11d48', o2: '#fb7185', o3: '#fda4af', orgb: '225,29,72', blue: '#be123c', brgb: '190,18,60', navy: '#3b0a1a' },
    ocean:   { name: ['سماوي', 'Ocean'], orange: '#0891b2', o2: '#22d3ee', o3: '#67e8f9', orgb: '8,145,178', blue: '#0369a1', brgb: '3,105,161', navy: '#082f49' },
    amber:   { name: ['ذهبي', 'Amber'], orange: '#d97706', o2: '#f59e0b', o3: '#fcd34d', orgb: '217,119,6', blue: '#b45309', brgb: '180,83,9', navy: '#2a1604' }
  };
  var VARS = { orange: '--orange', o2: '--orange-2', o3: '--orange-3', orgb: '--orange-rgb', blue: '--blue', brgb: '--blue-rgb', navy: '--navy' };
  function paint(id) {
    var s = document.documentElement.style, th = T[id];
    Object.keys(VARS).forEach(function (k) {
      if (id === 'classic' || !th) s.removeProperty(VARS[k]); else s.setProperty(VARS[k], th[k]);
    });
    document.documentElement.setAttribute('data-color', T[id] ? id : 'classic');
  }
  var saved = 'classic';
  try { saved = localStorage.getItem('ya-theme') || 'classic'; } catch (e) {}
  if (!T[saved]) saved = 'classic';
  paint(saved);
  window.YA_THEME = {
    themes: T,
    current: function () { return document.documentElement.getAttribute('data-color') || 'classic'; },
    set: function (id) { if (!T[id]) return; paint(id); try { localStorage.setItem('ya-theme', id); } catch (e) {} }
  };
})();
