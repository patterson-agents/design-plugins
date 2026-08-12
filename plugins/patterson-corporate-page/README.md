<picture>
  <source media="(prefers-color-scheme: dark)" srcset="ds/assets/brand/patterson-logo-white.svg">
  <img src="ds/assets/brand/patterson-logo-navy.svg" alt="Patterson" width="150">
</picture>

# Corporate Page — `patterson-corporate-page`

> Web page shell · sticky nav · navy hero · React, no build step

![category](https://img.shields.io/badge/category-template-147EC2?labelColor=003767)
![version](https://img.shields.io/badge/version-1.0.0-00A8E1?labelColor=003767)

<img src="../../docs/screenshots/patterson-corporate-page.png" width="820" alt="Corporate Page preview">

## Contents

- [Install](#install)
- [What you get](#what-you-get)
- [Quick start](#quick-start)
- [File tree](#file-tree)
- [Working with it](#working-with-it)
- [Terminal demo](#terminal-demo)
- [Live demo](#live-demo)
- [Brand quick reference](#brand-quick-reference)

## Install

```bash
/plugin marketplace add patterson-agents/design-system   # once
/plugin install patterson-corporate-page@patterson-design
```

## What you get

| Component | Name | Notes |
|---|---|---|
| Skill | `corporate-page-template` | auto-invoked; also runnable as `/patterson-corporate-page:corporate-page-template` |
| Command | `/patterson-corporate-page:new-page` | e.g. `/patterson-corporate-page:new-page careers landing page with stats band` |
| Agent | `page-builder` | extends the shell with sections from design-system components |

## Quick start

```text
/patterson-corporate-page:new-page careers landing page with stats band
```

The command copies `${CLAUDE_PLUGIN_ROOT}/ds` into your project as `./patterson` (merging with snapshots from other Patterson plugins), starts from `patterson/templates/corporate-page/index.html`, and adapts the content to your brief — structure, class names, tokens and voice stay intact.

## File tree

```text
ds/
├── styles.css · tokens/ · components/ · assets/{brand,fonts}/
└── templates/corporate-page/
    ├── index.html          # the shell — React 18 UMD + Babel, JSX inline
    └── ds-base.js          # loads styles.css (tokens + component CSS), base path ../..
```

## Working with it

Add sections inside `<main>` between hero and footer. `pat-container` gives the centered max-width column; keep 64–128px section rhythm via `--space-*`:

```jsx

<section style={{ paddingTop: "var(--space-8)", paddingBottom: "var(--space-8)" }}>
  <div className="pat-container">
    <p className="eyebrow">Since 1877</p>
    <h2>Generations of quality customer service</h2>
    <Stat value="60" label="fulfillment centers" />
    <Button>Join us</Button>
  </div>
</section>
```

## Terminal demo

Scripted with [VHS](https://github.com/charmbracelet/vhs) — render it locally:

```bash
vhs ../../demos/vhs/patterson-corporate-page.tape    # → demos/vhs/gif/patterson-corporate-page.gif
```

<img src="../../demos/vhs/gif/patterson-corporate-page.gif" width="820" alt="patterson-corporate-page terminal demo">

## Live demo

Open [`ds/templates/corporate-page/index.html`](ds/templates/corporate-page/index.html) straight from this folder (all relative assets resolve), or browse every plugin in the [demo gallery](../../demos/index.html).

## Brand quick reference

Navy `#003767` · Sky `#00A8E1` · body gray `#58585B` — always via `var(--pat-*)` tokens, never raw hexes. Proxima Nova from Adobe Fonts kit `uth1qfm` (Arial substitute; no self-hosted files). 5px radius [BG25 p.57], 46px controls [BG25 p.57], sky focus ring. Sentence case everywhere [BG25 p.25]. Voice: confident, plain-spoken, “we/you”, numbers as proof. **No emoji.** Full guide: [`patterson-brand`](../patterson-brand/) → `ds/readme.md`.
