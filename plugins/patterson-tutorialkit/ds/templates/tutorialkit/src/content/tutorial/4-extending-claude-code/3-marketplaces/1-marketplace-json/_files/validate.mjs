// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'marketplace.json';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
let obj = null;
try { obj = JSON.parse(src); } catch {}
const checks = [
  { label: 'Valid JSON', test: (s, o) => !!o },
  { label: 'Catalog has a name', test: (s, o) => !!(o && typeof o.name === 'string' && o.name.length) },
  { label: 'owner.name identifies the maintainer', test: (s, o) => !!(o && o.owner && typeof o.owner.name === 'string' && o.owner.name.length) },
  { label: 'Every plugin entry has name + relative ./ source', test: (s, o) => !!(o && Array.isArray(o.plugins) && o.plugins.length >= 2 && o.plugins.every(p => p && p.name && typeof p.source === 'string' && p.source.startsWith('./'))) },
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
