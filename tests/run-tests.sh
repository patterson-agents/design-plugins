#!/bin/sh
# Zero-dependency validation suite for the design-plugins marketplace.
# POSIX sh + `node` one-liners only. No package.json, no npm install.
#
# Checks:
#   1. .claude-plugin/marketplace.json parses and every plugins[].source
#      path exists on disk and starts with "./"
#   2. every plugin.json (one per marketplace source) parses and has
#      non-empty "name" and "version" fields
#   3. no `text-transform: uppercase` anywhere in plugins/**.css
#   4. forbidden strings (Figtree, d98a00, c0392b, rul6mjk) are absent
#      from the tree outside prose docs (*.md files are skipped)
#   5. the `.pat-docs` CSS class is defined somewhere in plugins/**.css
#
# Prints ALL TESTS PASSED and exits 0 on success; prints the first
# failure and exits 1 otherwise.

set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$ROOT_DIR"

fail() {
  echo "FAIL: $1" >&2
  exit 1
}

MARKETPLACE_JSON=".claude-plugin/marketplace.json"

[ -f "$MARKETPLACE_JSON" ] || fail "$MARKETPLACE_JSON not found"

# ---------------------------------------------------------------------------
# 1. marketplace.json parses; every plugins[].source exists and starts with ./
# ---------------------------------------------------------------------------
SOURCES=$(node -e '
  const fs = require("fs");
  const raw = fs.readFileSync(process.argv[1], "utf8");
  let json;
  try {
    json = JSON.parse(raw);
  } catch (e) {
    console.error("marketplace.json is not valid JSON: " + e.message);
    process.exit(1);
  }
  if (!Array.isArray(json.plugins) || json.plugins.length === 0) {
    console.error("marketplace.json has no plugins[] array");
    process.exit(1);
  }
  const bad = json.plugins.filter(p => typeof p.source !== "string" || !p.source.startsWith("./"));
  if (bad.length) {
    console.error("plugins with a source not starting with \"./\": " + JSON.stringify(bad.map(p => p.name)));
    process.exit(1);
  }
  console.log(json.plugins.map(p => p.source).join("\n"));
' "$MARKETPLACE_JSON") || fail "marketplace.json validation failed"

echo "$SOURCES" | while IFS= read -r src; do
  [ -n "$src" ] || continue
  [ -d "$ROOT_DIR/$src" ] || fail "marketplace source path does not exist: $src"
done

echo "PASS: marketplace.json parses and every source path exists and starts with ./"

# ---------------------------------------------------------------------------
# 2. every plugin.json (one per marketplace source) parses, has name/version
# ---------------------------------------------------------------------------
echo "$SOURCES" | while IFS= read -r src; do
  [ -n "$src" ] || continue
  pj="$ROOT_DIR/$src/.claude-plugin/plugin.json"
  [ -f "$pj" ] || fail "missing plugin.json for source $src"
  node -e '
    const fs = require("fs");
    const path = process.argv[1];
    const raw = fs.readFileSync(path, "utf8");
    let json;
    try {
      json = JSON.parse(raw);
    } catch (e) {
      console.error(path + " is not valid JSON: " + e.message);
      process.exit(1);
    }
    if (!json.name || typeof json.name !== "string") {
      console.error(path + " is missing a non-empty \"name\"");
      process.exit(1);
    }
    if (!json.version || typeof json.version !== "string") {
      console.error(path + " is missing a non-empty \"version\"");
      process.exit(1);
    }
  ' "$pj" || fail "plugin.json validation failed for $pj"
done

echo "PASS: every plugin.json parses and has name + version"

# ---------------------------------------------------------------------------
# 3. no `text-transform: uppercase` in plugins/**.css
# ---------------------------------------------------------------------------
UPPERCASE_HITS=$(find plugins -name "*.css" -print0 | xargs -0 grep -l "text-transform:[[:space:]]*uppercase" 2>/dev/null || true)
if [ -n "$UPPERCASE_HITS" ]; then
  fail "text-transform: uppercase found in: $UPPERCASE_HITS"
fi

echo "PASS: no text-transform: uppercase in plugins/**.css"

# ---------------------------------------------------------------------------
# 4. forbidden strings absent outside prose docs (skip *.md)
# ---------------------------------------------------------------------------
FORBIDDEN="Figtree d98a00 c0392b rul6mjk"
for term in $FORBIDDEN; do
  HITS=$(grep -rl --exclude="*.md" --exclude-dir=.git --exclude-dir=tests "$term" . 2>/dev/null || true)
  if [ -n "$HITS" ]; then
    fail "forbidden string '$term' found outside *.md in: $HITS"
  fi
done

echo "PASS: forbidden strings absent outside prose docs"

# ---------------------------------------------------------------------------
# 5. .pat-docs class is defined somewhere in plugins/**.css
# ---------------------------------------------------------------------------
PAT_DOCS_DEFINED=$(find plugins -name "*.css" -print0 | xargs -0 grep -l "\.pat-docs" 2>/dev/null || true)
if [ -z "$PAT_DOCS_DEFINED" ]; then
  fail ".pat-docs class is not defined in any plugins/**.css file"
fi

echo "PASS: .pat-docs class is defined in plugins/**.css"

echo "ALL TESTS PASSED"
