---
title: Theming
description: How the Patterson brand is mapped onto Starlight, and how to adjust it.
---

All Patterson branding is applied in a single stylesheet — `src/styles/patterson.css`,
loaded via `customCss` in `astro.config.mjs`. There are no ejected components, so the
theme survives Starlight upgrades.

## How it works

Starlight is themed through CSS custom properties. It publishes **dark** values on
`:root` and **light** values on `:root[data-theme='light']`. The Patterson stylesheet
overrides three things and leaves the rest of Starlight's tuned defaults alone:

1. **Accent tiers** — `--sl-color-accent-low / -accent / -accent-high`, set per theme
   (sky-forward on dark, navy-forward on light).
2. **Fonts** — `--sl-font` and `--sl-font-mono` point at the Patterson stacks.
3. **Brand chrome** — the navy top bar with a sky hairline, the sky focus ring, pill
   call-to-action buttons, and 5px corners [BG25 p.57].

We deliberately do **not** remap Starlight's full neutral gray ramp — that is where
contrast regressions hide. Keeping the tuned grays preserves accessibility while the
accent and chrome carry the brand.

## Adjusting the accent

Edit the accent block for the theme you want:

```css
/* dark canvas */
:root {
  --sl-color-accent-low: #012d4d;
  --sl-color-accent: #0a84b8;
  --sl-color-accent-high: #9bdcf4;
}
/* light canvas */
:root[data-theme='light'] {
  --sl-color-accent-low: #d8eefb;
  --sl-color-accent: #147ec2;
  --sl-color-accent-high: #003767;
}
```

## Adding Proxima Nova

The font stack is `"proxima-nova", Arial, sans-serif` — verbatim from the live Patterson sites. Proxima Nova comes from Adobe Fonts kit `uth1qfm`; Arial is the sanctioned substitute [BG25 p.25].
To render the real face, add your Adobe Fonts (Typekit) embed via a custom `Head`
component (`components.Head` in `astro.config.mjs`) — the stack picks it up with no
other change.

## Swapping the logo

Logos live in `src/assets/` (hero) and `public/` (nav + favicon). Replace the white
and navy lockups with your own; keep the white lockup on the navy chrome and the
navy lockup on light surfaces.
