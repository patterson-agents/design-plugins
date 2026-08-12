// templates/file-manager/ds-base.js
// Loads the Patterson Companies design system (tokens + component CSS).
// styles.css imports components/components.css, so the component layer comes
// with it — there is no JavaScript bundle to load.
// Consuming projects: point `base` at the bound _ds/<folder> tree relative to this page.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  // Expose the resolved asset base so the template can reference brand assets.
  window.__PAT_DS_BASE = base;
})();
