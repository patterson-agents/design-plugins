# Theming

All Patterson branding is applied in one stylesheet,
`docs/.vitepress/theme/custom.css`, imported by `docs/.vitepress/theme/index.ts`. That
file extends VitePress's default theme rather than forking it, so the branding survives
VitePress upgrades.

```ts
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default { extends: DefaultTheme };
```

## How it works

VitePress is themed through CSS custom properties. Light values live on `:root` and
dark values on `.dark`. The Patterson stylesheet overrides five groups.

1. **Surfaces.** `--vp-c-bg`, `-bg-alt`, `-bg-soft`, `-bg-elv`.
2. **Text.** `--vp-c-text-1` through `-3`. Headings are navy on light, body is
   Patterson gray.
3. **Brand tiers.** `--vp-c-brand-1` is accent and link *text*, `-2` is the hover
   state, `-3` is the solid fill behind reversed text, and `-soft` is the tinted
   background. Because `-1` is text and `-3` is a fill, they take different colors
   under the accent policy.
4. **Buttons.** `--vp-button-brand-*` for background, text, border, and their hover
   and active states.
5. **Chrome and shape.** The navy nav bar with its sky hairline, the sky focus ring,
   and the 5px radius applied by selector where VitePress hard-codes a value.

## The `--c-*` to `--vp-c-*` map

The Patterson docs UI kit in the `patterson-docs` plugin uses a `--c-*` vocabulary that
maps almost one-to-one onto VitePress.

| Docs kit | VitePress | Light | Dark |
|---|---|---|---|
| `--c-bg` | `--vp-c-bg` | `#FFFFFF` | `#15181E` |
| `--c-bg-alt` | `--vp-c-bg-alt` | `#F8F8F8` | `#1B1F27` |
| `--c-bg-soft` | `--vp-c-bg-soft` | `#F8F8F8` | `#20252E` |
| `--c-text` | `--vp-c-text-1` | `#003767` | `#F1F3F5` |
| `--c-text-2` | `--vp-c-text-2` | `#58585B` | `#B4BAC4` |
| `--c-text-3` | `--vp-c-text-3` | `#8A8A8E` | `#828A96` |
| `--c-divider` | `--vp-c-divider` | `#ECECEC` | `#262B34` |
| `--c-border` | `--vp-c-border` | `#E4E5E8` | `#2A2F39` |
| `--c-brand-3` | `--vp-c-brand-1` | `#147EC2` | `#6DCFF6` |
| `--c-brand` | `--vp-c-brand-3` | `#003767` | `#00A8E1` |
| `--c-brand-soft` | `--vp-c-brand-soft` | `rgba(0,168,225,.10)` | `rgba(0,168,225,.14)` |
| `--radius` | applied by selector | `5px` | `5px` |

The one deliberate divergence is the radius. The kit ships `9px`; the brand value is
`5px`, so this template overrides it.

## Adjusting the accent

Edit the brand tier block for the theme you want.

```css
/* light canvas */
:root {
  --vp-c-brand-1: var(--pat-blue);   /* link text */
  --vp-c-brand-2: var(--pat-navy);   /* hover */
  --vp-c-brand-3: var(--pat-navy);   /* solid fill */
}

/* dark canvas */
.dark {
  --vp-c-brand-1: var(--pat-blue-light);
  --vp-c-brand-2: var(--pat-sky-40);
  --vp-c-brand-3: var(--pat-sky);
}
```

Keep the light `-1` tier on navy or link blue. Moving sky into a text role on white
breaks contrast.

## Loading Proxima Nova

The font stack is `'proxima-nova', Arial, sans-serif`, verbatim from the live Patterson
sites. The face comes from Adobe Fonts kit `uth1qfm`, loaded by the `head` entry in
`docs/.vitepress/config.ts`.

```ts
head: [
  ['link', { rel: 'stylesheet', href: 'https://use.typekit.net/uth1qfm.css' }],
],
```

Never self-host the face and never add an `@font-face` block for it. Adobe's terms do
not permit re-hosting Typekit payloads. If the kit cannot be reached from your
deployment, the stack falls back to Arial, which is the sanctioned substitute.

## Swapping the logo

Logos live in `docs/public/` and are referenced by `themeConfig.logo` and the hero
frontmatter in `docs/index.md`. Replace the white and navy lockups with your own. Keep
the white lockup on the navy chrome and the navy lockup on light surfaces, and never
redraw the wave mark.

## Adding Vue components

`docs/.vitepress/theme/index.ts` is the place. Register a component there and it is
available in every Markdown file.

```ts
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Callout from './Callout.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Callout', Callout);
  },
};
```

Style any component you add with the `--pat-*` variables, never raw hex.
