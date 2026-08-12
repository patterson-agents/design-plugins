---
name: deck-template
description: Build a Patterson Companies branded slide deck (16:9 presentation). Use when the user asks for a Patterson deck, presentation, slides, or company overview. Scaffolds from the official deck template with cover, divider, stats, comparison, quote, table, photo-band and closing archetypes.
user-invocable: true
---

# patterson-deck

Patterson 16:9 presentation deck template: cover, section divider, stats, comparison, quote, capabilities table, full-bleed photo band, and closing slides with the wave watermark and official brand imagery. Static HTML — print-to-PDF ready.

## What this plugin ships

Everything lives under `${CLAUDE_PLUGIN_ROOT}/ds/`, laid out exactly like the Patterson design-system source tree, so every relative reference inside the files (`../../styles.css`, `../../assets/brand/…`, `../../components/components.css`) resolves without edits.

## Scaffolding workflow

1. Copy the snapshot into the user's project, preserving the tree:

   ```bash
   cp -R "${CLAUDE_PLUGIN_ROOT}/ds" ./patterson
   ```

   If the project already has a `patterson/` design-system folder from another Patterson plugin, merge instead of duplicating — only add the subfolders that are missing.
2. The working entry point is then `patterson/templates/deck/index.html`.
3. Edit CONTENT in place; keep the structure, class names, and token usage intact. Never inline raw hex colors — use the CSS variables.
4. Open the entry file in a browser (or a static server) to preview.

## Contents

- `ds/templates/deck/index.html` — 9 archetype slides as `<section class="slide">` elements
- `ds/templates/deck/deck-stage.js` — viewport scaling, keyboard nav, print-to-PDF (one page per slide)
- `ds/templates/deck/ds-base.js` — loads the token stylesheet (base path `../..`)
- plus `ds/styles.css`, `ds/tokens/`, `ds/assets/` (fonts, logos, wave background, photo band)

## Template notes

- Slides are plain 1920×1080 HTML `<section>` elements — no build step. Duplicate an archetype section to add a slide; delete what the brief does not need.
- Archetypes: navy wave cover · light lead-in · stats grid (use big sky numbers) · comparison columns · section divider · quote · capabilities table · full-bleed photo band · navy closing.
- Keep `data-label` attributes on sections; keep the footer logo + page number pattern.
- Navy slides use the white logo lockup; light slides the navy lockup.
- Content rules: sentence-case headings, numbers as proof points, min 24px text, no emoji.

## Patterson brand quick reference

- **Brand:** Patterson Companies, Inc. — oral (dental) & animal health distribution. Since 1877. Promise: *"Trusted Expertise. Unrivaled Support."*
- **Colors:** Navy `#003767` (primary), Sky `#00A8E1` (accent, hovers, stats). Secondary blue `#147EC2`. Tertiary green `#7BC24D`, teal `#00817D`, purple `#522E91` — data/infographics only, never page chrome. Body gray `#58585B`, light gray `#ECECEC`.
- **Type:** Proxima Nova, loaded from Adobe Fonts kit `uth1qfm` — never self-hosted; no font binaries and no embedded font declarations anywhere in the repo (Adobe's Terms of Use bar re-hosting Typekit payloads). Arial is the sanctioned substitute [BG25 p.25]. Navy headlines (Extrabold 800), tracking -10 [BG25 p.27]; body at 1.5 leading (BG25 p.27 allows 125-150%); big sky-blue stats. Eyebrows are teal `#00817D` and **sentence case** [DS20 p.16]. **Sentence case is mandatory** — all caps are barred from digital channels [BG25 p.25].
- **Shape:** 5px corner radius on buttons, cards and inputs [BG25 p.57]; 46px control height, 30px horizontal button padding [BG25 p.57]; soft navy-tinted shadows [TBD: no elevation scale is published]; 3px sky focus ring.
- **Voice:** Confident, warm, plain-spoken. "We" for Patterson, "you" for the customer. Short declarative sentences. Numbers as proof points. **Never use emoji.**
- **Motion:** Restrained, 120–320ms, no bounces, no infinite loops.

All of this is encoded as CSS custom properties in `ds/tokens/*.css` (linked via `ds/styles.css`). Always style with the `--pat-*`, `--surface-*`, `--space-*`, `--fs-*`, `--shadow-*` variables rather than raw hexes.
