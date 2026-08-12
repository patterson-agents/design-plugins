---
name: corporate-page-template
description: Build a Patterson-branded web page (marketing, landing, informational). Use when the user asks for a Patterson web page, landing page, or site section. Scaffolds a React shell with sticky nav, navy hero, content band, and footer wired to brand tokens and components.
user-invocable: true
---

# patterson-corporate-page

Patterson corporate web page shell: sticky nav with logo, navy hero, content band, and footer — a React starting point for any on-brand marketing or informational page.

## What this plugin ships

Everything lives under `${CLAUDE_PLUGIN_ROOT}/ds/`, laid out exactly like the Patterson design-system source tree, so every relative reference inside the files (`../../styles.css`, `../../assets/brand/…`, `../../components/components.css`) resolves without edits.

## Scaffolding workflow

1. Copy the snapshot into the user's project, preserving the tree:

   ```bash
   cp -R "${CLAUDE_PLUGIN_ROOT}/ds" ./patterson
   ```

   If the project already has a `patterson/` design-system folder from another Patterson plugin, merge instead of duplicating — only add the subfolders that are missing.
2. The working entry point is then `patterson/templates/corporate-page/index.html`.
3. Edit CONTENT in place; keep the structure, class names, and token usage intact. Never inline raw hex colors — use the CSS variables.
4. Open the entry file in a browser (or a static server) to preview.

## Contents

- `ds/templates/corporate-page/index.html` — page shell (React 18 UMD + Babel, in-browser JSX)
- `ds/templates/corporate-page/ds-base.js` — loads `styles.css` (tokens + component CSS), base path `../..`
- plus `ds/styles.css`, `ds/tokens/`, `ds/components/` (the CSS component layer), `ds/assets/`

## Template notes

- No build step: React + Babel standalone run in the browser; JSX lives inline in `index.html`.
- Design-system components are CSS classes from `ds/components/components.css` (`.pat-btn`, `.pat-card`, `.pat-stat`, `.pat-badge`, …), available as soon as `styles.css` loads. There is no component runtime.
- Add sections inside the `<main>` between hero and footer; use `pat-container` for the centered max-width column and `--space-*` rhythm (64–128px between sections).

## Patterson brand quick reference

- **Brand:** Patterson Companies, Inc. — oral (dental) & animal health distribution. Since 1877. Promise: *"Trusted Expertise. Unrivaled Support."*
- **Colors:** Navy `#003767` (primary), Sky `#00A8E1` (accent, hovers, stats). Secondary blue `#147EC2`. Tertiary green `#7BC24D`, teal `#00817D`, purple `#522E91` — data/infographics only, never page chrome. Body gray `#58585B`, light gray `#ECECEC`.
- **Type:** Proxima Nova, loaded from Adobe Fonts kit `uth1qfm` — never self-hosted; no font binaries and no embedded font declarations anywhere in the repo (Adobe's Terms of Use bar re-hosting Typekit payloads). Arial is the sanctioned substitute [BG25 p.25]. Navy headlines (Extrabold 800), tracking -10 [BG25 p.27]; body at 1.5 leading (BG25 p.27 allows 125-150%); big sky-blue stats. Eyebrows are teal `#00817D` and **sentence case** [DS20 p.16]. **Sentence case is mandatory** — all caps are barred from digital channels [BG25 p.25].
- **Shape:** 5px corner radius on buttons, cards and inputs [BG25 p.57]; 46px control height, 30px horizontal button padding [BG25 p.57]; soft navy-tinted shadows [TBD: no elevation scale is published]; 3px sky focus ring.
- **Voice:** Confident, warm, plain-spoken. "We" for Patterson, "you" for the customer. Short declarative sentences. Numbers as proof points. **Never use emoji.**
- **Motion:** Restrained, 120–320ms, no bounces, no infinite loops.

All of this is encoded as CSS custom properties in `ds/tokens/*.css` (linked via `ds/styles.css`). Always style with the `--pat-*`, `--surface-*`, `--space-*`, `--fs-*`, `--shadow-*` variables rather than raw hexes.
