#!/usr/bin/env node
/**
 * validate.mjs — dependency-free checker for a Patterson brand-token file.
 *
 * Runs inside the TutorialKit WebContainer (Node-in-the-browser), so it uses
 * only the Node standard library — no npm install, no CSS parser. It scrapes
 * the `--custom-property: value;` declarations out of brand-tokens.css and
 * lints them against the Patterson design system.
 *
 * Usage: node validate.mjs [path]   (defaults to ./brand-tokens.css)
 * Exit code 0 = all checks passed, 1 = at least one error.
 */

import { readFile } from 'node:fs/promises';
import { argv, exit } from 'node:process';

const target = argv[2] ?? 'brand-tokens.css';

/** Scrape `--name: value` declarations into a map (last one wins). */
function parseTokens(css) {
  const tokens = {};
  const re = /(--[a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(css)) !== null) {
    tokens[m[1].toLowerCase()] = m[2].trim();
  }
  return tokens;
}

const checks = [];
const record = (ok, label, detail = '') => checks.push({ ok, label, detail });
const isHex6 = (v) => /^#[0-9a-f]{6}$/i.test(v);
const sameColor = (a, b) => a.replace('#', '').toLowerCase() === b.replace('#', '').toLowerCase();

let css;
try {
  css = await readFile(target, 'utf8');
} catch {
  console.error(`✗ Could not read ${target}`);
  exit(1);
}

const tokens = parseTokens(css);

// Structure ----------------------------------------------------------------
record(/:root\s*{/.test(css), 'Tokens are declared inside a :root { } block');

// Required brand primitives (name + exact brand value) ----------------------
const required = [
  ['--pat-navy', '#003767'],
  ['--pat-sky', '#00A8E1'],
  ['--pat-gray', '#58585B'],
];
for (const [name, expected] of required) {
  const value = tokens[name];
  record(value !== undefined, `Defines ${name}`);
  if (value !== undefined) {
    record(
      sameColor(value, expected),
      `${name} uses the brand value ${expected}`,
      sameColor(value, expected) ? '' : `got: ${value}`,
    );
  }
}

// Every --pat-* primitive must be a valid 6-digit hex ----------------------
const badHex = Object.entries(tokens)
  .filter(([n, v]) => n.startsWith('--pat-') && !isHex6(v) && !v.startsWith('var('))
  .map(([n]) => n);
record(badHex.length === 0, 'All --pat-* primitives are valid 6-digit hex', badHex.join(', '));

// Semantic alias must POINT AT a primitive, not restate a literal ----------
const accent = tokens['--accent'];
record(accent !== undefined, 'Defines a semantic alias --accent');
record(
  !accent || /var\(\s*--pat-/.test(accent),
  '--accent references a primitive via var(--pat-…), not a raw hex',
  accent && !/var\(\s*--pat-/.test(accent) ? `got: ${accent}` : '',
);

// Report -------------------------------------------------------------------
let failures = 0;
console.log(`\nValidating ${target}\n`);
for (const c of checks) {
  console.log(`  ${c.ok ? '✓' : '✗'} ${c.label}${c.detail ? `  — ${c.detail}` : ''}`);
  if (!c.ok) failures++;
}
console.log(
  `\n${failures === 0 ? '✓ PASS — on brand!' : `✗ FAIL (${failures} issue${failures === 1 ? '' : 's'})`}\n`,
);
exit(failures === 0 ? 0 : 1);
