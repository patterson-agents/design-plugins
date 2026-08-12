// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'SKILL.md';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
const obj = null;
const checks = [
  { label: 'Whole file under 40 lines', test: (s) => s.trimEnd().split('\n').length <= 40 },
  { label: 'Keeps the quick-start code fence', test: (s) => /```css[\s\S]*?--pat-navy[\s\S]*?```/.test(s) },
  { label: 'Links detail one level deep: references/REFERENCE.md', test: (s) => /references\/REFERENCE\.md/.test(s) },
  { label: 'Description keeps its trigger keywords', test: (s) => { const m = s.match(/^description:\s*(.+)$/m); return !!m && /Patterson/i.test(m[1]) && /use when/i.test(m[1]); } },
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
