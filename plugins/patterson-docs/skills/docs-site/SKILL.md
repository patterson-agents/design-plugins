---
name: docs-site
description: Build Patterson-branded documentation sites and doc pages. Use when the user asks for Patterson docs, a documentation site, developer docs, knowledge base, or help center. Ships a VitePress/Diátaxis-styled React UI kit and a standalone docs page template.
user-invocable: true
---

# patterson-docs

Patterson documentation-site package: a VitePress + Diátaxis styled docs UI kit (sidebar nav, content pages, collections) and a browser-openable docs page template.

## What this plugin ships

Everything lives under `${CLAUDE_PLUGIN_ROOT}/ds/`, laid out exactly like the Patterson design-system source tree, so every relative reference inside the files (`../../styles.css`, `../../assets/brand/…`, `../../components/components.css`) resolves without edits.

## Scaffolding workflow

1. Copy the snapshot into the user's project, preserving the tree:

   ```bash
   cp -R "${CLAUDE_PLUGIN_ROOT}/ds" ./patterson
   ```

   If the project already has a `patterson/` design-system folder from another Patterson plugin, merge instead of duplicating — only add the subfolders that are missing.
2. The working entry point is then `patterson/ui_kits/patterson-docs/index.html`.
3. Edit CONTENT in place; keep the structure, class names, and token usage intact. Never inline raw hex colors — use the CSS variables.
4. Open the entry file in a browser (or a static server) to preview.

## Contents

- `ds/ui_kits/patterson-docs/` — full docs-site UI kit (React 18 UMD + Babel): `app.jsx`, `pages1/2.jsx`, `collections.jsx`, `data.jsx`
- `ds/templates/patterson-docs/PattersonDocs.dc.html` + `support.js` — standalone docs page template, opens directly in a browser
- plus `ds/styles.css`, `ds/tokens/`, `ds/components/` (the CSS component layer), `ds/assets/`

## Template notes

- The UI kit follows **Diátaxis**: organize content as tutorials, how-to guides, reference, and explanation; `data.jsx` holds the nav tree and page registry — edit it first.
- The kit's look mirrors VitePress conventions restyled to Patterson tokens; keep the sidebar/content/aside proportions.
- For a single doc page (not a whole site), use `ds/templates/patterson-docs/PattersonDocs.dc.html` and edit its content in place.

## Patterson brand quick reference

- **Brand:** Patterson Companies, Inc. — oral (dental) & animal health distribution. Since 1877. Promise: *"Trusted Expertise. Unrivaled Support."*
- **Colors:** Navy `#003767` (primary), Sky `#00A8E1` (accent, hovers, stats). Secondary blue `#147EC2`. Tertiary green `#7BC24D`, teal `#00817D`, purple `#522E91` — data/infographics only, never page chrome. Body gray `#58585B`, light gray `#ECECEC`.
- **Type:** Proxima Nova, loaded from Adobe Fonts kit `uth1qfm` — never self-hosted; no font binaries and no embedded font declarations anywhere in the repo (Adobe's Terms of Use bar re-hosting Typekit payloads). Arial is the sanctioned substitute [BG25 p.25]. Navy headlines (Extrabold 800), tracking -10 [BG25 p.27]; body at 1.5 leading (BG25 p.27 allows 125-150%); big sky-blue stats. Eyebrows are teal `#00817D` and **sentence case** [DS20 p.16]. **Sentence case is mandatory** — all caps are barred from digital channels [BG25 p.25].
- **Shape:** 5px corner radius on buttons, cards and inputs [BG25 p.57]; 46px control height, 30px horizontal button padding [BG25 p.57]; soft navy-tinted shadows [TBD: no elevation scale is published]; 3px sky focus ring.
- **Voice:** Confident, warm, plain-spoken. "We" for Patterson, "you" for the customer. Short declarative sentences. Numbers as proof points. **Never use emoji.**
- **Motion:** Restrained, 120–320ms, no bounces, no infinite loops.

All of this is encoded as CSS custom properties in `ds/tokens/*.css` (linked via `ds/styles.css`). Always style with the `--pat-*`, `--surface-*`, `--space-*`, `--fs-*`, `--shadow-*` variables rather than raw hexes.
