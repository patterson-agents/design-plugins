---
title: Design system reference
description: Where this starter fits in the Patterson design-system marketplace, and how it maps to Starlight.
---

## Where this fits

This starter is the modern-Astro counterpart to the `patterson-tutorialkit` plugin.
TutorialKit is pinned to Astro 4 by its upstream (`@tutorialkit/astro` requires
`astro ^4.15.0`), which carries open Astro advisories that are only patched in Astro
5/6/7. Starlight runs on current, patched Astro — so use this when you want a
documentation or reference site rather than an interactive WebContainer tutorial.

| Need | Use |
|---|---|
| Docs / guides / reference site | **This starter** (Starlight, Astro 7) |
| Interactive, in-browser coding tutorial | `patterson-tutorialkit` (Astro 4, WebContainer) |
| Single on-brand marketing page | `patterson-corporate-page` |
| VitePress-style docs UI kit | `patterson-docs` |

## Starlight ↔ Patterson token map

| Starlight variable | Patterson source |
|---|---|
| `--sl-color-accent-high` (dark) | sky-40 `#9BDCF4` |
| `--sl-color-accent-high` (light) | navy `#003767` |
| `--sl-color-accent` (light) | blue `#147EC2` |
| `--sl-font` | proxima-nova → Arial → sans-serif [BG25 p.25] |
| `.header` background | navy `#003767`, sky `#00A8E1` hairline |
| focus ring | sky `#00A8E1` |
| `.sl-link-button.primary` | navy, sky on hover, pill radius |
| `.card`, `.starlight-aside` | 10px radius |

## Components

Starlight ships MDX components — `Card`, `CardGrid`, `Tabs`, `Aside`, `Steps`,
`LinkCard`, `FileTree`, and more — all inheriting the Patterson accent and shape
tokens. Import them in any `.mdx` page:

```mdx
import { Card, CardGrid, Aside } from '@astrojs/starlight/components';
```

See the [Starlight components reference](https://starlight.astro.build/components/)
for the full set.
