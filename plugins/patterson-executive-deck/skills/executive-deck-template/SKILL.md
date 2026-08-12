---
name: executive-deck-template
description: Build a Patterson Companies executive briefing deck. Use when the user asks for an executive deck, leadership briefing, board-style presentation, or formal readout in the Patterson brand. Denser, editorial layout compared to the standard deck.
user-invocable: true
---

# patterson-executive-deck

Patterson executive-briefing deck template: editorial navy cover, key takeaways, breakdown matrix, requirements, build outputs, and benefits slides — denser and more formal than the standard deck.

## What this plugin ships

Everything lives under `${CLAUDE_PLUGIN_ROOT}/ds/`, laid out exactly like the Patterson design-system source tree, so every relative reference inside the files (`../../styles.css`, `../../assets/brand/…`, `../../components/components.css`) resolves without edits.

## Scaffolding workflow

1. Copy the snapshot into the user's project, preserving the tree:

   ```bash
   cp -R "${CLAUDE_PLUGIN_ROOT}/ds" ./patterson
   ```

   If the project already has a `patterson/` design-system folder from another Patterson plugin, merge instead of duplicating — only add the subfolders that are missing.
2. The working entry point is then `patterson/templates/executive-deck/index.html`.
3. Edit CONTENT in place; keep the structure, class names, and token usage intact. Never inline raw hex colors — use the CSS variables.
4. Open the entry file in a browser (or a static server) to preview.

## Contents

- `ds/templates/executive-deck/index.html` — cover, takeaways, matrix, requirements, outputs, benefits slides
- `ds/templates/executive-deck/deck-stage.js` — scaling, keyboard nav, print-to-PDF
- `ds/templates/executive-deck/ds-base.js` — token loader (base path `../..`)
- plus `ds/styles.css`, `ds/tokens/`, `ds/assets/`

## Template notes

- Slides carry a running footer (`.foot`) with a per-slide metadata row and the Patterson logo — keep and update it per slide.
- `data-tweak` attributes mark speaker/date fields meant to be personalized.
- Editorial register: terse, declarative, evidence-first. Every slide answers one question.
- Same static-HTML mechanics as the standard deck (duplicate `<section>`s, print-to-PDF via deck-stage.js).

## Patterson brand quick reference

- **Brand:** Patterson Companies, Inc. — oral (dental) & animal health distribution. Since 1877. Promise: *"Trusted Expertise. Unrivaled Support."*
- **Colors:** Navy `#003767` (primary), Sky `#00A8E1` (accent, hovers, stats). Secondary blue `#147EC2`. Tertiary green `#7BC24D`, teal `#00817D`, purple `#522E91` — data/infographics only, never page chrome. Body gray `#58585B`, light gray `#ECECEC`.
- **Type:** Proxima Nova, loaded from Adobe Fonts kit `uth1qfm` — never self-hosted; no font binaries and no embedded font declarations anywhere in the repo (Adobe's Terms of Use bar re-hosting Typekit payloads). Arial is the sanctioned substitute [BG25 p.25]. Navy headlines (Extrabold 800), tracking -10 [BG25 p.27]; body at 1.5 leading (BG25 p.27 allows 125-150%); big sky-blue stats. Eyebrows are teal `#00817D` and **sentence case** [DS20 p.16]. **Sentence case is mandatory** — all caps are barred from digital channels [BG25 p.25].
- **Shape:** 5px corner radius on buttons, cards and inputs [BG25 p.57]; 46px control height, 30px horizontal button padding [BG25 p.57]; soft navy-tinted shadows [TBD: no elevation scale is published]; 3px sky focus ring.
- **Voice:** Confident, warm, plain-spoken. "We" for Patterson, "you" for the customer. Short declarative sentences. Numbers as proof points. **Never use emoji.**
- **Motion:** Restrained, 120–320ms, no bounces, no infinite loops.

All of this is encoded as CSS custom properties in `ds/tokens/*.css` (linked via `ds/styles.css`). Always style with the `--pat-*`, `--surface-*`, `--space-*`, `--fs-*`, `--shadow-*` variables rather than raw hexes.
