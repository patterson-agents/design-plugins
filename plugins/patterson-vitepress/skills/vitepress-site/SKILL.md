---
name: vitepress-site
description: Scaffold a Patterson-branded VitePress documentation site, or brand an existing VitePress project. Use when the user asks for a docs site, a documentation site for this repo, a VitePress site, a handbook, or a guides-and-reference site in the Patterson brand.
user-invocable: true
---

# patterson-vitepress

A runnable, install-verified VitePress documentation starter in the Patterson Companies
brand. VitePress 1.6.4, pinned exactly, with a committed `bun.lock`.

Reach for this when the user says "docs site", "documentation site for this repo",
"VitePress", "handbook", or "guides and reference site", and especially when the team
already writes Vue or wants a single Vite dependency. Pick `patterson-starlight`
instead when the site needs Astro's content collections or MDX components, and
`patterson-tutorialkit` when they want in-browser interactive lessons rather than pages.

## Scaffolding workflow

1. Scaffold the project. Prefer the registered `bun create` template when it exists:

   ```bash
   bun create patterson-vitepress my-docs
   ```

   Otherwise copy the template out of the plugin, which works everywhere:

   ```bash
   cp -R "${CLAUDE_PLUGIN_ROOT}/ds/templates/vitepress" my-docs
   cd my-docs && bun install
   ```

   Only point `bun create` at a **new** directory. It does not refuse an existing one —
   it replaces the contents without prompting, so an occupied target loses its files.
   It also rewrites `package.json` `name` to the directory name and initializes a git
   repo there. It resolves the template from `~/.bun-create/patterson-vitepress`; if
   that copy is missing it falls through to npm, where the name does not exist. The
   `cp -R` path has none of these behaviors and is the safe default when you are unsure.

2. Verify before writing content: `bun run docs:build` must complete cleanly into
   `docs/.vitepress/dist/`.

3. Set identity in `docs/.vitepress/config.ts`: `title` and `description`. Uncomment
   `base` only for a sub-path deploy such as a GitHub Pages project site.

4. Write content into `docs/`. Replace the starter pages rather than adding alongside
   them, and update `themeConfig.sidebar` and `themeConfig.nav` as you go — VitePress
   does not autogenerate the sidebar.

5. Run `bun run docs:build` again and report the result.

## Content mapping

The nav and sidebar follow Diataxis.

| The user's material | Where it goes |
|---|---|
| Product pitch, what this is, why it exists | `docs/index.md` hero and `features` frontmatter |
| Install, first run, first success | `docs/getting-started.md` |
| Task-shaped how-tos, one goal per page | `docs/guides/` |
| API surfaces, config keys, CLI flags, token tables | `docs/reference/` |
| Background, rationale, architecture | a new `docs/explanation/` folder plus a sidebar group |

Map an existing README by splitting it: the pitch becomes the hero and feature cards,
the install section becomes getting started, each numbered walkthrough becomes a guide,
and every options table becomes a reference page. Do not paste a whole README into one
page.

Every page's first `# heading` becomes its title. Every new page needs a sidebar entry
in `config.ts`.

## Two build-time behaviors to respect

- **Dead links fail the build.** Removing a page means removing every link to it, or
  setting `ignoreDeadLinks` in `config.ts`. Check your cross-links before building.
- **`lastUpdated` reads git commit times.** Outside a git repository it renders nothing
  and the build still succeeds.

## Brand rules that apply to what you write

- **Sentence case everywhere.** No uppercase transforms, in content, nav labels, or CSS.
- **No emoji.** This is a business-to-business healthcare distribution brand.
- **Accent policy.** On light, navy `#003767` carries strong text and link blue
  `#147EC2` carries links; sky `#00A8E1` appears only as non-text chrome. On dark, sky
  and light blue `#6DCFF6` carry the accent. Never put sky text on white or white text
  on sky. This is why `--vp-c-brand-1` (link text) and `--vp-c-brand-3` (solid fill)
  hold different colors.
- **Shape.** 5px radius on buttons, feature cards, callouts, and code blocks. 2px on
  form fields. The docs UI kit's 9px is a kit convention, not the brand value.
- **Primary button hover on light is a lighter navy `#315D83`**, never sky.
- **No gradients.** The hero name is a flat navy, not VitePress's default gradient.
- **Fonts.** Proxima Nova comes from Adobe Fonts kit `uth1qfm`, linked from the `head`
  entry in `config.ts`. Never self-host it, never add `@font-face` for it. Arial is the
  sanctioned substitute.
- **Voice.** Confident, warm, plain-spoken. "We" for Patterson, "you" for the customer.
  Short declarative sentences. Numbers as proof points.

## Dependency rule

`vitepress@^2.0.0-alpha.19` is the only dependency. Adding one means supply-chain
scoring it first and surfacing anything below 90 to the user.

The range is a caret on a pre-release, so `bun install` takes the newest matching 2.x
rather than the verified build — install from the committed `bun.lock`, and treat a
version bump as a change that needs the site re-checked in both themes.

## Contents

- `ds/templates/vitepress/` — the runnable starter: `package.json` (+ `bun.lock`),
  `docs/.vitepress/config.ts`, `docs/.vitepress/theme/index.ts` and `custom.css` (the
  only brand file), `docs/` starter pages, `docs/public/` logos and favicon
- `ds/templates/vitepress/README.md` — scaffold instructions, customization points,
  the accent policy, and the font policy
