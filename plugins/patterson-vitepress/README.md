<picture>
  <source media="(prefers-color-scheme: dark)" srcset="ds/templates/vitepress/docs/public/patterson-logo-white.svg">
  <img src="ds/templates/vitepress/docs/public/patterson-logo-navy.svg" alt="Patterson" width="150">
</picture>

# VitePress docs site — `patterson-vitepress`

> Runnable VitePress starter · install-verified · Diátaxis nav · committed lockfile

![category](https://img.shields.io/badge/category-template-147EC2?labelColor=003767)
![version](https://img.shields.io/badge/version-0.1.0-00A8E1?labelColor=003767)

<!-- Screenshot placeholder: add docs/screenshots/patterson-vitepress.png (820px wide,
     light theme, showing the navy nav bar, hero, and sidebar) and swap the comment
     below for the <img> tag. -->
<!-- <img src="../../docs/screenshots/patterson-vitepress.png" width="820" alt="VitePress docs site preview"> -->

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
/plugin install patterson-vitepress@patterson-design
```

## What you get

| Component | Name | Notes |
|---|---|---|
| Skill | `vitepress-site` | auto-invoked; also runnable as `/patterson-vitepress:vitepress-site` |
| Command | `/patterson-vitepress:new-vitepress-site` | e.g. `/patterson-vitepress:new-vitepress-site docs/ for the ordering API` |
| Agent | `vitepress-site-builder` | scaffolds and fills a VitePress docs site on brand |
| Template | `ds/templates/vitepress/` | runnable VitePress starter with a committed `bun.lock` |

## Quick start

```text
/patterson-vitepress:new-vitepress-site my-docs for the clinic ordering API
```

Or scaffold it yourself:

```bash
bun create patterson-vitepress my-docs      # if the template is registered locally
cd my-docs && bun run docs:dev
```

`bun create` copies the template, runs `bun install`, and initializes a git repo. Point
it at a **new** directory: it does not refuse an existing one, it replaces the contents
without prompting. It also rewrites `package.json` `name` to the directory name, and
resolves the template from `~/.bun-create/patterson-vitepress` — without that copy it
falls through to npm, where the name does not exist. The portable path is a plain copy:

```bash
cp -R ds/templates/vitepress my-docs
cd my-docs && bun install && bun run docs:dev
```

## File tree

```text
ds/
└── templates/vitepress/              # runnable starter (VitePress ^2.0.0-alpha.19)
    ├── package.json · bun.lock       # docs:dev / docs:build / docs:preview
    ├── README.md                     # scaffold, customize, accent policy, font policy
    └── docs/                         # the VitePress source root
        ├── .vitepress/
        │   ├── config.ts             # title, nav, sidebar, footer, appearance, lastUpdated, typekit head
        │   └── theme/
        │       ├── index.ts          # extends the default theme, never forks it
        │       └── custom.css        # THE brand file — every --vp-* override
        ├── public/                   # favicon + logo lockups, served from /
        ├── index.md                  # home layout: hero + feature cards
        ├── getting-started.md
        ├── guides/                   # brand-tokens · theming
        └── reference/                # design-system
```

## Working with it

**Start fresh** — copy the starter, install, run:

```bash
cp -R ds/templates/vitepress my-docs && cd my-docs
bun install && bun run docs:dev     # http://localhost:5173
bun run docs:build                  # static output → docs/.vitepress/dist/
```

**Brand an existing VitePress project** — copy two things, nothing else:

```bash
cp ds/templates/vitepress/docs/.vitepress/theme/custom.css  your-docs/docs/.vitepress/theme/
cp ds/templates/vitepress/docs/public/*.svg                 your-docs/docs/public/
```

Then import `./custom.css` from that project's `theme/index.ts` and add the typekit
`head` entry to its `config.ts`.

Every color is a `--pat-*` variable remapped onto VitePress's `--vp-*` tokens. The
default theme is extended, never forked, so the branding survives VitePress upgrades.
Change a token, not a rule.

## Accent and contrast policy

Sky `#00A8E1` is the brand's signature color and the easiest one to misuse. White text
on sky fails WCAG contrast, and so does sky text on white.

- **Light canvas:** navy `#003767` for strong text, link blue `#147EC2` for links. Sky
  only as non-text chrome — the nav hairline, the focus ring.
- **Dark canvas:** sky and light blue `#6DCFF6` carry the accent, text included.
- **Primary button hover on light** is a lighter navy `#315D83`, never sky.

That split is why `--vp-c-brand-1` (link text) and `--vp-c-brand-3` (solid fill) hold
different colors. Shape is 5px — the `patterson-docs` UI kit's 9px is a kit convention,
not the brand value. Sentence case everywhere, no uppercase transforms, no gradients,
no emoji.

## Dependencies

`vitepress@^2.0.0-alpha.19`, install-verified, lockfile committed. It is the only
dependency. Adding one to this template means supply-chain scoring it first.

The range is a caret on a pre-release, so a fresh `bun install` takes the newest
matching 2.x rather than the build the theme was verified against. `bun.lock` is the
reproducibility guarantee here, not the version string — install from it, and pin the
exact version if you need the theme to hold still across installs.

Proxima Nova is served by Adobe Fonts kit `uth1qfm` via the `head` entry in
`docs/.vitepress/config.ts`. It is never self-hosted — Adobe's terms bar re-hosting
Typekit payloads. Arial is the sanctioned substitute.

Two build-time behaviors to know: dead internal links fail the build, and `lastUpdated`
reads git commit times (rendering nothing, harmlessly, outside a repo).

## Brand quick reference

Navy `#003767` · Sky `#00A8E1` · link blue `#147EC2` · body gray `#58585B` — always via
`var(--pat-*)` tokens, never raw hexes. 5px radius [BG25 p.57], 2px sky focus ring.
Sentence case everywhere [BG25 p.25]. Voice: confident, plain-spoken, "we/you", numbers
as proof. **No emoji.** Full guide: [`patterson-brand`](../patterson-brand/) →
`ds/readme.md`.
