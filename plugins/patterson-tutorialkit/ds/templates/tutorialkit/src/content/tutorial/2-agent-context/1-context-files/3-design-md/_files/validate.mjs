// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'design.md';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
const obj = null;
const checks = [
  { label: 'Has a "## Tokens" section', test: (s) => /^## Tokens/mi.test(s) },
  { label: 'All three primitives with exact hex (#003767, #00A8E1, #58585B)', test: (s) => /#003767/i.test(s) && /#00A8E1/i.test(s) && /#58585B/i.test(s) },
  { label: 'States the alias rule with var(--pat-sky)', test: (s) => /var\(--pat-sky\)/.test(s) },
  { label: 'Has a "## Voice" section with a "never"', test: (s) => /^## Voice/mi.test(s) && /never/i.test(s) },
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
