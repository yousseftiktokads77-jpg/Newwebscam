/*
 * Pre-renders the Arabic version of every page into the HTML files, so the text, header
 * and footer are already in the page when it loads instead of being written by main.js
 * afterwards (faster first paint, and search engines see the content straight away).
 *
 * It runs the site's real theme.js + main.js inside jsdom and saves the resulting DOM.
 * Run it after changing any text in assets/js/main.js or in the HTML pages:
 *
 *   npm install --no-save jsdom
 *   node tools/prerender.js
 *
 * Safe to run repeatedly (the output is stable). Runtime-only widgets (colour picker,
 * reading-progress bar) are removed from the snapshot because main.js adds them on load.
 */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const root = path.join(__dirname, '..');
const pages = { 'index.html': '/', 'services.html': '/services', 'portfolio.html': '/portfolio', 'contact.html': '/contact' };
const theme = fs.readFileSync(path.join(root, 'assets/js/theme.js'), 'utf8');
const main = fs.readFileSync(path.join(root, 'assets/js/main.js'), 'utf8');

for (const [file, urlPath] of Object.entries(pages)) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const dom = new JSDOM(html, { url: 'http://localhost' + urlPath, runScripts: 'outside-only', pretendToBeVisual: true });
  const { window } = dom;
  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  window.scrollTo = () => {};
  window.eval(theme);
  window.eval(main);
  window.document.dispatchEvent(new window.Event('DOMContentLoaded'));

  const doc = window.document;
  doc.querySelectorAll('.theme-picker, .progress, .lightbox').forEach(el => el.remove());
  doc.documentElement.removeAttribute('data-color');
  if (!doc.documentElement.getAttribute('style')) doc.documentElement.removeAttribute('style');

  // jsdom moves the file's trailing newline into <body>; drop it so repeated runs give identical output
  while (doc.body.lastChild && doc.body.lastChild.nodeType === 3 && !doc.body.lastChild.textContent.trim()) doc.body.removeChild(doc.body.lastChild);
  const out = '<!doctype html>\n' + doc.documentElement.outerHTML + '\n';
  fs.writeFileSync(path.join(root, file), out);
  window.close();
  console.log('pre-rendered', file, out.length, 'bytes');
}
