// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'plugin.json';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
let obj = null;
try { obj = JSON.parse(src); } catch {}
const checks = [
  { label: 'Valid JSON', test: (s, o) => !!o },
  { label: 'name is kebab-case (no spaces or uppercase)', test: (s, o) => !!(o && typeof o.name === 'string' && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(o.name)) },
  { label: 'version is semver — the update switch', test: (s, o) => !!(o && /^\d+\.\d+\.\d+$/.test(o.version || '')) },
  { label: 'description is non-empty and specific', test: (s, o) => !!(o && typeof o.description === 'string' && o.description.trim().length >= 20) },
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
