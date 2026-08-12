// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'CLAUDE.md';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
const obj = null;
const checks = [
  { label: 'Keeps the project facts section', test: (s) => /^## Project facts/mi.test(s) },
  { label: 'The step-by-step procedure is gone', test: (s) => !/Step \d/i.test(s) },
  { label: 'Points to the /deploy skill instead', test: (s) => /\/deploy/.test(s) },
  { label: 'Stays concise — under 40 lines', test: (s) => s.trimEnd().split('\n').length <= 40 },
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
