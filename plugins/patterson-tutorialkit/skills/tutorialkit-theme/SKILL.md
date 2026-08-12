---
name: tutorialkit-theme
description: Brand a TutorialKit (Astro interactive-tutorial) project for Patterson Companies, or scaffold a new Patterson-branded TutorialKit starter. Use when the user mentions TutorialKit, interactive tutorials, or hands-on training content in the Patterson brand.
user-invocable: true
---

# patterson-tutorialkit

Patterson theme for TutorialKit (Astro-based interactive tutorials): a runnable starter project with the canonical theme.css, brand logos, and a static theme-preview page.

## What this plugin ships

Everything lives under `${CLAUDE_PLUGIN_ROOT}/ds/`, laid out exactly like the Patterson design-system source tree, so every relative reference inside the files (`../../styles.css`, `../../assets/brand/…`, `../../components/components.css`) resolves without edits.

## Scaffolding workflow

1. Copy the snapshot into the user's project, preserving the tree:

   ```bash
   cp -R "${CLAUDE_PLUGIN_ROOT}/ds" ./patterson
   ```

   If the project already has a `patterson/` design-system folder from another Patterson plugin, merge instead of duplicating — only add the subfolders that are missing.
2. The working entry point is then `patterson/templates/tutorialkit/README.md`.
3. Edit CONTENT in place; keep the structure, class names, and token usage intact. Never inline raw hex colors — use the CSS variables.
4. Open the entry file in a browser (or a static server) to preview.

## Contents

- `ds/templates/tutorialkit/` — runnable TutorialKit starter (Astro + UnoCSS): `theme.css` (the canonical brand theme), `astro.config.mjs`, `uno.config.ts`, `src/`, `public/` (logo.svg, logo-dark.svg)
- `ds/ui_kits/tutorialkit/index.html` — static preview of the themed TutorialKit shell (renders entirely from `--tk-*` vars)
- `ds/assets/brand/` — logo lockups

## Template notes

- **Theming an existing project:** copy `theme.css` into the project root and `public/logo*.svg`; every color is a `--tk-*` variable TutorialKit reads natively.
- **New project:** copy the whole `ds/templates/tutorialkit/` folder, then `bun install && bun run dev` (or npm equivalents). See its README.
- The preview page links the canonical `theme.css` — never copy values out of it; change the token, and both update.

## Patterson brand quick reference

- **Brand:** Patterson Companies, Inc. — oral (dental) & animal health distribution. Since 1877. Promise: *"Trusted Expertise. Unrivaled Support."*
- **Colors:** Navy `#003767` (primary), Sky `#00A8E1` (accent, hovers, stats). Secondary blue `#147EC2`. Tertiary green `#7BC24D`, teal `#00817D`, purple `#522E91` — data/infographics only, never page chrome. Body gray `#58585B`, light gray `#ECECEC`.
- **Type:** Proxima Nova, loaded from Adobe Fonts kit `uth1qfm` — never self-hosted; no font binaries and no embedded font declarations anywhere in the repo (Adobe's Terms of Use bar re-hosting Typekit payloads). Arial is the sanctioned substitute [BG25 p.25]. Navy headlines (Extrabold 800), tracking -10 [BG25 p.27]; body at 1.5 leading (BG25 p.27 allows 125-150%); big sky-blue stats. Eyebrows are teal `#00817D` and **sentence case** [DS20 p.16]. **Sentence case is mandatory** — all caps are barred from digital channels [BG25 p.25].
- **Shape:** 5px corner radius on buttons, cards and inputs [BG25 p.57]; 46px control height, 30px horizontal button padding [BG25 p.57]; soft navy-tinted shadows [TBD: no elevation scale is published]; 3px sky focus ring.
- **Voice:** Confident, warm, plain-spoken. "We" for Patterson, "you" for the customer. Short declarative sentences. Numbers as proof points. **Never use emoji.**
- **Motion:** Restrained, 120–320ms, no bounces, no infinite loops.

All of this is encoded as CSS custom properties in `ds/tokens/*.css` (linked via `ds/styles.css`). Always style with the `--pat-*`, `--surface-*`, `--space-*`, `--fs-*`, `--shadow-*` variables rather than raw hexes.
