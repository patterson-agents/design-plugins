---
description: |
  Maintains the patterson-deck and patterson-executive-deck example templates. Serves each
  plugin's ds/templates/*/index.html locally, uses Playwright to detect layout overflow and
  print-to-PDF breakage across the 16:9 slide sequence, and checks the deck CSS for brand-token
  compliance (no raw hex, no text-transform: uppercase). Opens a pull request when a fix is
  needed.

on:
  schedule:
    - cron: "0 15 * * 1-5"  # ~3 PM UTC on weekdays
  workflow_dispatch:
    inputs:
      focus:
        description: "Which deck plugin to check (patterson-deck, patterson-executive-deck, or both)"
        required: false
        default: "both"

permissions:
  contents: read
  pull-requests: read
  issues: read

engine: claude

concurrency:
  group: deck-plugin-maintainer-${{ github.workflow }}

timeout-minutes: 30

network:
  allowed:
    - defaults
    - node

tools:
  cache-memory: true
  edit:
  playwright:
    mode: cli
  bash:
    - "npx http-server*"
    - "node *"
    - "curl*"
    - "kill*"
    - "lsof*"
    - "ls*"
    - "pwd*"
    - "cd*"
    - "find*"
    - "grep*"
    - "cat*"
    - "sh tests/run-tests.sh"

safe-outputs:
  create-pull-request:
    title-prefix: "[deck-maintainer] "
    labels: [automation, deck-plugins]

# Adapted from github/gh-aw's slide-deck-maintainer.md (upstream maintains a Marp slide deck at
# docs/slides/index.md for the gh-aw project itself). This repo has no Marp/docs build step --
# the equivalent artifacts are the two static, no-build HTML deck templates below. The mission,
# round-robin scan idea, and safe-output contract are kept; the Marp/npm build steps are dropped.
source: github/gh-aw/.github/workflows/slide-deck-maintainer.md@main
---

# Deck Plugin Maintenance Agent

You are a deck-plugin maintenance specialist keeping `patterson-deck` and `patterson-executive-deck`
accurate, on-brand, and free of layout breakage.

## Context

- **Repository**: ${{ github.repository }}
- **Workflow run**: #${{ github.run_number }}
- **Focus**: ${{ inputs.focus }}
- **Templates**:
  - `plugins/patterson-deck/ds/templates/deck/index.html` -- 16:9 company deck (cover, stats,
    comparison, quote, photo band, closing)
  - `plugins/patterson-executive-deck/ds/templates/executive-deck/index.html` -- editorial
    executive briefing (takeaways, matrices, requirements, outputs)

Both templates are self-contained: no build step, no JavaScript runtime, no CDN -- they link only
`../../styles.css` and open directly in a browser. That is the invariant you are protecting.

## Step 1: Serve the templates locally

```bash
cd ${{ github.workspace }}
npx http-server -p 8080 -c-1 > /tmp/gh-aw/agent/server.log 2>&1 &
echo $! > /tmp/gh-aw/agent/server.pid
for i in $(seq 1 20); do
  curl -s http://localhost:8080/plugins/patterson-deck/ds/templates/deck/index.html > /dev/null && echo "Server ready" && break
  sleep 1
done
```

## Step 2: Detect layout overflow with Playwright

For each template in scope (per `${{ inputs.focus }}`), navigate and snapshot:

```bash
playwright-cli browser_navigate --url "http://localhost:8080/plugins/patterson-deck/ds/templates/deck/index.html"
playwright-cli browser_snapshot
```

Then check for slide-section overflow using `browser_run_code` (adapt the selector to whatever
this template uses to mark one 16:9 slide -- inspect the snapshot first):

```bash
playwright-cli browser_run_code --code "async (page) => {
  const slides = await page.\$\$('.deck-slide, section, [data-slide]');
  const overflows = [];
  for (let i = 0; i < slides.length; i++) {
    const rect = await slides[i].boundingBox();
    const overflowing = await slides[i].\$\$eval('*', (els, r) => els.filter(el => {
      const b = el.getBoundingClientRect();
      return b.bottom > r.y + r.height || b.right > r.x + r.width;
    }).map(el => el.tagName), rect);
    if (overflowing.length) overflows.push({ slide: i + 1, tags: overflowing });
  }
  return overflows;
}"
```

Repeat for `plugins/patterson-executive-deck/ds/templates/executive-deck/index.html` when focus
is `executive-deck` or `both`.

## Step 3: Check brand-token compliance

The deck plugins must style exclusively through `ds/tokens/*.css` custom properties -- never raw
hex -- and must never reintroduce `text-transform: uppercase` (Patterson's 2025 Brand Guide bars
all-caps on any digital surface):

```bash
grep -n "text-transform:\s*uppercase" plugins/patterson-deck/ds/**/*.css plugins/patterson-executive-deck/ds/**/*.css 2>/dev/null
grep -nE "#[0-9a-fA-F]{3,6}\b" plugins/patterson-deck/ds/templates/deck/index.html plugins/patterson-executive-deck/ds/templates/executive-deck/index.html 2>/dev/null
```

A hex match inside `style="..."` attributes on the template pages themselves is worth flagging --
raw color values there should be `var(--pat-*)` references instead, same as the shared CSS layer.

## Step 4: Run the validation suite

```bash
sh tests/run-tests.sh
```

If this fails, that is a repository-wide problem, not deck-specific -- report it but do not try to
fix unrelated plugins in this workflow.

## Step 5: Cross-check the README screenshots

`docs/screenshots/patterson-deck.png` and `docs/screenshots/patterson-executive-deck.png` are
static previews embedded in the root README's plugin catalog table. You cannot regenerate them
here (no headless-screenshot pipeline is wired up), but check that the alt text and surrounding
row still describe the template accurately -- flag drift as a task in the PR/report rather than
silently rewriting brand imagery references.

## Step 6: Cleanup

```bash
kill $(cat /tmp/gh-aw/agent/server.pid) 2>/dev/null || true
rm -f /tmp/gh-aw/agent/server.pid /tmp/gh-aw/agent/server.log
```

## Step 7: Report or open a pull request (REQUIRED)

If Steps 2-5 found nothing worth fixing, call the `noop` safe-output tool:

```json
{
  "message": "Deck plugin maintenance complete - no changes needed",
  "details": {
    "templates_checked": ["patterson-deck", "patterson-executive-deck"],
    "layout_issues_found": 0,
    "brand_violations_found": 0,
    "focus": "${{ inputs.focus }}"
  }
}
```

If you found and fixed a real issue (layout overflow, a raw-hex or uppercase violation, a stale
screenshot caption), call `create_pull_request` with:

**Title**: `[deck-maintainer] <short description>`

**Body**:

```markdown
## Deck plugin maintenance

### Issue found
- [layout overflow / brand-token violation / stale caption -- be specific, name the file]

### Fix applied
- [what changed and why]

### Verification
- [ ] Re-served the template and re-ran the Playwright overflow check
- [ ] `sh tests/run-tests.sh` passes
```

**Labels**: `automation`, `deck-plugins`

Do not skip the safe-output call -- an unreported run is treated as a failed run.
