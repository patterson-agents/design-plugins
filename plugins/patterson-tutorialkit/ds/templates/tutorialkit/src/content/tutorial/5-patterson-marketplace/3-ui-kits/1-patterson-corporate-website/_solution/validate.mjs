// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'setup.md';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
const obj = null;
const checks = [
  { label: 'Adds the marketplace from patterson-agents/design-system', test: (s) => /\/plugin marketplace add patterson-agents\/design-system/.test(s) },
  { label: 'Installs patterson-corporate-website from the patterson-design marketplace', test: (s) => /\/plugin install patterson-corporate-website@patterson-design/.test(s) },
  { label: 'Tries the namespaced command /patterson-corporate-website:new-corporate-site', test: (s) => /\/patterson-corporate-website:new-corporate-site/.test(s) },
  { label: 'Names at least one kit screen (hero / stats / newsroom)', test: (s) => new RegExp('(hero|stats|newsroom|capability tabs)', 'i').test(s) },
];
let fails = 0;
for (const c of checks) {
  let ok = false;
  try { ok = !!c.test(src, obj); } catch { ok = false; }
  console.log((ok ? '✓' : '✗') + ' ' + c.label);
  if (!ok) fails++;
}
console.log('');
if (fails) { console.log('FAIL — ' + fails + ' check(s) to fix. Edit ' + FILE + ' and re-run.'); process.exit(1); }
console.log('PASS — on brand!');
