---
name: patterson-design
description: Design anything on-brand for Patterson Companies (oral & animal health distribution). Use whenever the user asks for Patterson-branded UI, pages, mocks, decks, components, styling, colors, typography, or brand review. Contains tokens, components, logos, fonts, and framework adapters.
user-invocable: true
---

# patterson-brand

Patterson Companies design-system core: brand tokens, fonts, logos, brand imagery, React component library, guideline specimens, and framework adapters (Tailwind v3/v4, UnoCSS, Theme UI, shadcn/ui). Foundation plugin for all Patterson work.

## What this plugin ships

Everything lives under `${CLAUDE_PLUGIN_ROOT}/ds/`, laid out exactly like the Patterson design-system source tree, so every relative reference inside the files (`../../styles.css`, `../../assets/brand/…`, `../../components/components.css`) resolves without edits.

## Scaffolding workflow

1. Copy the snapshot into the user's project, preserving the tree:

   ```bash
   cp -R "${CLAUDE_PLUGIN_ROOT}/ds" ./patterson
   ```

   If the project already has a `patterson/` design-system folder from another Patterson plugin, merge instead of duplicating — only add the subfolders that are missing.
2. The working entry point is then `patterson/readme.md`.
3. Edit CONTENT in place; keep the structure, class names, and token usage intact. Never inline raw hex colors — use the CSS variables.
4. Open the entry file in a browser (or a static server) to preview.

## Contents

- `ds/styles.css` + `ds/tokens/` — the CSS custom-property system (link `styles.css` only)
- `ds/theme.json` — canonical machine-readable theme (Theme UI spec shape)
- `ds/components/components.css` — the component layer: Button, IconButton, Badge, Stat, Card, Alert, Tabs, Input, Select, Checkbox, Radio, Switch as plain CSS classes (`pat-` prefix), imported by `styles.css`. No JavaScript, no build step.
- `ds/components/` — also holds the authored React sources (`.jsx`) plus `.d.ts` types and per-component `*.prompt.md` usage guides
- `ds/integrations/` — tailwind.css (v4), tailwind.config.js (v3), uno.config.js, theme-ui.js, shadcn-theme.css + README
- `ds/assets/brand/` — official logo lockups (white/navy/sky/square), wave background, photo band, value-prop art
- `ds/assets/fonts/` — Proxima Nova woff2 (400/700/italic)
- `ds/guidelines/` — browser-openable specimen cards for colors, type, spacing, radii, shadows, logo, voice
- `ds/readme.md` — the full design guide (voice, visual foundations, iconography, provenance)

## How to use it

- **Production code:** pick the adapter in `ds/integrations/` that matches the stack (see its README) — every adapter carries the exact brand hexes. For plain CSS, link `ds/styles.css` and use the variables.
- **Static mocks / prototypes:** link `ds/styles.css` and use the classes directly — `<button class="pat-btn pat-btn--primary">Shop now</button>`. Nothing else to load.
- **React:** the `.jsx` sources in `ds/components/` are available to import, but they are unbundled sources carrying pre-correction inline styling; prefer the CSS layer.
- **Component API details:** read the sibling `*.prompt.md` next to each component before using it.
- **Logos:** always use the bundled SVGs — never redraw the wave mark. White lockup on navy, navy lockup on white.
- Read `ds/readme.md` in full before large design tasks — it is the authoritative guide.

## Patterson brand quick reference

- **Brand:** Patterson Companies, Inc. — oral (dental) & animal health distribution. Since 1877. Promise: *"Trusted Expertise. Unrivaled Support."*
- **Colors:** Navy `#003767` (primary), Sky `#00A8E1` (accent, hovers, stats). Secondary blue `#147EC2`. Tertiary green `#7BC24D`, teal `#00817D`, purple `#522E91` — data/infographics only, never page chrome. Body gray `#58585B`, light gray `#ECECEC`.
- **Type:** Proxima Nova, loaded from Adobe Fonts kit `uth1qfm` — never self-hosted; no font binaries and no embedded font declarations anywhere in the repo (Adobe's Terms of Use bar re-hosting Typekit payloads). Arial is the sanctioned substitute [BG25 p.25]. Navy headlines (Extrabold 800), tracking -10 [BG25 p.27]; body at 1.5 leading (BG25 p.27 allows 125-150%); big sky-blue stats. Eyebrows are teal `#00817D` and **sentence case** [DS20 p.16]. **Sentence case is mandatory** — all caps are barred from digital channels [BG25 p.25].
- **Shape:** 5px corner radius on buttons, cards and inputs [BG25 p.57]; 46px control height, 30px horizontal button padding [BG25 p.57]; soft navy-tinted shadows [TBD: no elevation scale is published]; 3px sky focus ring.
- **Voice:** Confident, warm, plain-spoken. "We" for Patterson, "you" for the customer. Short declarative sentences. Numbers as proof points. **Never use emoji.**
- **Motion:** Restrained, 120–320ms, no bounces, no infinite loops.

All of this is encoded as CSS custom properties in `ds/tokens/*.css` (linked via `ds/styles.css`). Always style with the `--pat-*`, `--surface-*`, `--space-*`, `--fs-*`, `--shadow-*` variables rather than raw hexes.
