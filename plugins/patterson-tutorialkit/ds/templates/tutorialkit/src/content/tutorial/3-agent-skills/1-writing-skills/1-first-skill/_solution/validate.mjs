// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'SKILL.md';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
const obj = null;
const checks = [
  { label: 'Frontmatter block present (--- … ---)', test: (s) => /^---\n[\s\S]+?\n---/.test(s) },
  { label: 'name is spec-valid (lowercase kebab, ≤64 chars)', test: (s) => { const m = s.match(/^name:\s*(.+)$/m); if (!m) return false; const n = m[1].trim(); return n.length <= 64 && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(n); } },
  { label: 'description says what AND when ("Use when …")', test: (s) => { const m = s.match(/^description:\s*(.+)$/m); return !!m && /use when/i.test(m[1]) && m[1].trim().length >= 40; } },
  { label: 'description is third person, under 1024 chars', test: (s) => { const m = s.match(/^description:\s*(.+)$/m); return !!m && m[1].length <= 1024 && !/\bI can\b|\bI will\b|you can use this/i.test(m[1]); } },
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
