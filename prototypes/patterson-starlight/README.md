# Patterson Starlight starter (prototype)

A Patterson Companies–branded [Starlight](https://starlight.astro.build) documentation
starter on **modern, patched Astro 7** (zero open Astro advisories). This is the
forward-looking counterpart to the `patterson-tutorialkit` plugin, which is pinned to
Astro 4 by TutorialKit's upstream and therefore carries unpatchable Astro CVEs.

> **Status: prototype.** Scaffolded but not yet `install`-verified in this repo — the
> Astro/Starlight toolchain packages score < 0.9 on Socket `depscore` quality/supply-chain
> axes (though `vulnerability` is 1.00 for all). Run `bun install` at your discretion.

## Run it

```sh
bun install        # or: npm install
bun run dev        # http://localhost:4321
bun run build      # static output → dist/
bun run check      # astro check (type + content validation)
```

## What's branded, and where

| Concern | File | Notes |
|---|---|---|
| **Theme** | `src/styles/patterson.css` | Remaps Starlight `--sl-*` vars to Patterson tokens (accent, fonts, chrome) for light + dark. The only brand file. |
| **Config** | `astro.config.mjs` | Starlight integration: title, logo, Diátaxis sidebar, `customCss`. |
| **Collection** | `src/content.config.ts` | Astro content-layer `docs` collection (`docsLoader` + `docsSchema`). |
| **Content** | `src/content/docs/` | `index.mdx` splash + Start-here / Guides / Reference pages. |
| **Logos** | `src/assets/`, `public/` | White + navy lockups (hero, nav, favicon). |

## Why Starlight (not TutorialKit)

`@tutorialkit/astro@1.6.0` — the latest TutorialKit — hard-pins `astro ^4.15.0`. Every
current Astro advisory is patched only in Astro 5/6/7, so TutorialKit cannot be made
secure by a version bump. Starlight runs on Astro 7 today. Use TutorialKit when you
specifically need in-browser interactive coding lessons; use this for docs, guides,
and reference sites.

## Design decisions

- **Variable-remap only, no component ejection** — upgrade-safe across Starlight releases.
- **Accent + chrome remapped, neutral grays left intact** — brand signal without
  contrast regressions.
- **No emoji** — B2B healthcare distribution brand voice throughout.

## Promoting this to a plugin

To ship as `patterson-starlight` in the marketplace: create `plugins/patterson-starlight/`
with a `.claude-plugin/plugin.json`, a `skills/`/`commands/`/`agents/` set, and place this
tree under `ds/templates/starlight/`; then add the entry to `.claude-plugin/marketplace.json`
and run `claude plugin validate .`.
