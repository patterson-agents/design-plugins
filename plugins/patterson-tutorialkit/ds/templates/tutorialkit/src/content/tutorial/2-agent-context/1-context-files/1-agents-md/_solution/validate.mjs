// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'AGENTS.md';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
const obj = null;
const checks = [
  { label: 'Top-level # heading orients the agent', test: (s) => /^# .+/m.test(s) },
  { label: 'Has a "## Setup commands" section', test: (s) => /^## Setup commands/mi.test(s) },
  { label: 'Setup commands are in a fenced sh block with npm install', test: (s) => /```(sh|bash)[\s\S]*?npm (install|i)\b[\s\S]*?```/.test(s) },
  { label: 'Has a "## Code style" section with at least two rules', test: (s) => { const m = s.match(/^## Code style([\s\S]*?)(^## |$(?![\s\S]))/mi); return !!m && (m[1].match(/^- /gm) || []).length >= 2; } },
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
