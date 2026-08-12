// validate.mjs — dependency-free lesson validator (Node stdlib only)
import { readFileSync } from 'node:fs';
const FILE = 'mcp.json';
let src;
try { src = readFileSync(new URL('./' + FILE, import.meta.url), 'utf8'); }
catch { console.error('✗ ' + FILE + ' not found'); process.exit(1); }
let obj = null;
try { obj = JSON.parse(src); } catch {}
const checks = [
  { label: 'Valid JSON (no trailing commas)', test: (s, o) => !!o },
  { label: 'Declares an mcpServers map', test: (s, o) => !!(o && o.mcpServers && typeof o.mcpServers === 'object') },
  { label: 'patterson-assets has command + args array', test: (s, o) => { const sv = o && o.mcpServers && o.mcpServers['patterson-assets']; return !!(sv && typeof sv.command === 'string' && !sv.command.includes(' ') && Array.isArray(sv.args) && sv.args.length); } },
  { label: 'Bundled paths use ${CLAUDE_PLUGIN_ROOT}', test: (s) => s.includes('${CLAUDE_PLUGIN_ROOT}') && !/\/Users\//.test(s) },
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
