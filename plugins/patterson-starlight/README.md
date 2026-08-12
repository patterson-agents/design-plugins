<picture>
  <source media="(prefers-color-scheme: dark)" srcset="ds/templates/starlight/public/patterson-logo-white.svg">
  <img src="ds/templates/starlight/public/patterson-logo-navy.svg" alt="Patterson" width="150">
</picture>

# Starlight docs site — `patterson-starlight`

> Runnable Astro 7 starter · install-verified · Diátaxis sidebar · committed lockfile

![category](https://img.shields.io/badge/category-template-147EC2?labelColor=003767)
![version](https://img.shields.io/badge/version-0.1.0-00A8E1?labelColor=003767)

<!-- Screenshot placeholder: add docs/screenshots/patterson-starlight.png (820px wide,
     light theme, showing the navy header, hero, and Diátaxis sidebar) and swap the
     comment below for the <img> tag. -->
<!-- <img src="../../docs/screenshots/patterson-starlight.png" width="820" alt="Starlight docs site preview"> -->

## Contents

- [Install](#install)
- [What you get](#what-you-get)
- [Quick start](#quick-start)
- [File tree](#file-tree)
- [Working with it](#working-with-it)
- [Accent and contrast policy](#accent-and-contrast-policy)
- [Dependencies](#dependencies)

## Install

```bash
/plugin marketplace add patterson-agents/design-plugins   # once
/plugin install patterson-starlight@patterson-design
```

## What you get

| Component | Name | Notes |
|---|---|---|
| Skill | `starlight-site` | auto-invoked; also runnable as `/patterson-starlight:starlight-site` |
| Command | `/patterson-starlight:new-starlight-site` | e.g. `/patterson-starlight:new-starlight-site docs/ for the ordering API` |
| Agent | `starlight-site-builder` | scaffolds and fills a Starlight docs site on brand |
| Template | `ds/templates/starlight/` | runnable Astro 7 starter with a committed `bun.lock` |

## Quick start

```text
/patterson-starlight:new-starlight-site my-docs for the clinic ordering API
```

Or scaffold it yourself:

```bash
bun create patterson-starlight my-docs      # if the template is registered locally
cd my-docs && bun run dev
```

`bun create` copies the template and runs `bun install`. It needs the target directory
not to exist, and resolves the name from `~/.bun-create/patterson-starlight`. Without
that copy it falls through to npm, where the name does not exist — so the portable path
is a plain copy:

```bash
cp -R ds/templates/starlight my-docs
cd my-docs && bun install && bun run dev
```

## File tree

```text
ds/
└── templates/starlight/          # runnable starter (Astro 7 + Starlight)
    ├── package.json · bun.lock   # astro 7.1.5, @astrojs/starlight 0.41.5 — pinned exactly
    ├── astro.config.mjs          # title/logo/favicon, Diátaxis sidebar, typekit head, passthrough images
    ├── tsconfig.json
    ├── README.md                 # scaffold, customize, accent policy, font policy
    ├── public/                   # favicon + nav logo lockups
    └── src/
        ├── content.config.ts     # Astro content-layer docs collection
        ├── styles/patterson.css  # THE brand file — remaps every --sl-* onto Patterson tokens
        ├── assets/               # hero logo lockups
        └── content/docs/         # index.mdx splash · getting-started · guides/ · reference/
```

## Working with it

**Start fresh** — copy the starter, install, run:

```bash
cp -R ds/templates/starlight my-docs && cd my-docs
bun install && bun run dev      # http://localhost:4321
bun run build                   # static output → dist/
```

**Brand an existing Starlight project** — copy two things, nothing else:

```bash
cp ds/templates/starlight/src/styles/patterson.css  your-docs/src/styles/
cp ds/templates/starlight/public/*.svg              your-docs/public/
```

Then add `customCss: ['./src/styles/patterson.css']` and the typekit `head` entry to
that project's `starlight()` config.

Every color is a `--pat-*` variable remapped onto Starlight's `--sl-*` tokens. No
Starlight component is ejected, so the theme survives Starlight upgrades. Change a
token, not a rule.

## Accent and contrast policy

Sky `#00A8E1` is the brand's signature color and the easiest one to misuse. White text
on sky fails WCAG contrast, and so does sky text on white.

- **Light canvas:** navy `#003767` for strong text, link blue `#147EC2` for links. Sky
  only as non-text chrome — the header hairline, the focus ring.
- **Dark canvas:** sky and its lighter tints carry the accent, text included.
- **Primary button hover on light** is a lighter navy `#315D83`, never sky.

Sentence case everywhere, no uppercase transforms, no emoji.

## Dependencies

`astro@7.1.5` and `@astrojs/starlight@0.41.5`, pinned without a caret, install-verified,
lockfile committed. Astro's `passthroughImageService` replaces the default sharp-backed
service, so no native image binary is compiled at install and no image library advisory
applies. Adding a dependency to this template means supply-chain scoring it first.

Proxima Nova is served by Adobe Fonts kit `uth1qfm` via the `head` entry in
`astro.config.mjs`. It is never self-hosted — Adobe's terms bar re-hosting Typekit
payloads. Arial is the sanctioned substitute.

## Brand quick reference

Navy `#003767` · Sky `#00A8E1` · link blue `#147EC2` · body gray `#58585B` — always via
`var(--pat-*)` tokens, never raw hexes. 5px radius [BG25 p.57], 2px sky focus ring.
Sentence case everywhere [BG25 p.25]. Voice: confident, plain-spoken, "we/you", numbers
as proof. **No emoji.** Full guide: [`patterson-brand`](../patterson-brand/) →
`ds/readme.md`.
