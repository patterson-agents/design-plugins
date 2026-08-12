---
name: starlight-site
description: Scaffold a Patterson-branded Starlight documentation site, or brand an existing Starlight project. Use when the user asks for a docs site, a documentation site for this repo, a Starlight site, a knowledge base, or a guides-and-reference site in the Patterson brand.
user-invocable: true
---

# patterson-starlight

A runnable, install-verified Starlight documentation starter in the Patterson
Companies brand. Astro 7.1.5 and Starlight 0.41.5, pinned exactly, with a committed
`bun.lock`.

Reach for this when the user says "docs site", "documentation site for this repo",
"Starlight", "knowledge base", or "guides and reference site". Pick
`patterson-vitepress` instead when the user wants VitePress or a Vue-flavored
toolchain, and `patterson-tutorialkit` when they want in-browser interactive lessons
rather than pages.

## Scaffolding workflow

1. Scaffold the project. Prefer the registered `bun create` template when it exists:

   ```bash
   bun create patterson-starlight my-docs
   ```

   Otherwise copy the template out of the plugin, which works everywhere:

   ```bash
   cp -R "${CLAUDE_PLUGIN_ROOT}/ds/templates/starlight" my-docs
   cd my-docs && bun install
   ```

   `bun create` requires the target directory not to exist, and resolves the template
   from `~/.bun-create/patterson-starlight`. If that copy is missing it falls through
   to npm, where the name does not exist. The `cp -R` path has no such dependency.

2. Verify before writing content: `bun run build` must produce `dist/` cleanly.

3. Set identity in `astro.config.mjs`: `title`, `description`, `tagline`, and, once the
   deploy target is known, uncomment `site` (and `base` for a sub-path deploy).

4. Write content into `src/content/docs/`. Replace the starter pages rather than
   adding alongside them.

5. Run `bun run build` again and report the page count.

## Content mapping

The sidebar follows Diataxis. `guides/` and `reference/` autogenerate from their
folders, so a new file lands in the sidebar with no config change.

| The user's material | Where it goes |
|---|---|
| Product pitch, what this is, why it exists | `src/content/docs/index.mdx` hero and card grid |
| Install, first run, first success | `src/content/docs/getting-started.md` |
| Task-shaped how-tos, one goal per page | `src/content/docs/guides/` |
| API surfaces, config keys, CLI flags, token tables | `src/content/docs/reference/` |
| Background, rationale, architecture | a new `explanation/` folder plus a sidebar group |

Map an existing README by splitting it: the pitch becomes the hero, the install
section becomes getting started, each numbered walkthrough becomes a guide, and every
options table becomes a reference page. Do not paste a whole README into one page.

Every page needs frontmatter `title`; add `description` because it feeds search and
social previews.

## Brand rules that apply to what you write

- **Sentence case everywhere.** No uppercase transforms, in content or CSS.
- **No emoji.** This is a business-to-business healthcare distribution brand.
- **Accent policy.** On light, navy `#003767` carries strong text and link blue
  `#147EC2` carries links; sky `#00A8E1` appears only as non-text chrome. On dark, sky
  and its tints carry the accent. Never put sky text on white or white text on sky.
- **Shape.** 5px radius on buttons, cards, and callouts. 2px on form fields.
- **Primary button hover on light is a lighter navy `#315D83`**, never sky.
- **Fonts.** Proxima Nova comes from Adobe Fonts kit `uth1qfm`, linked from the `head`
  entry in `astro.config.mjs`. Never self-host it, never add `@font-face` for it. Arial
  is the sanctioned substitute.
- **Voice.** Confident, warm, plain-spoken. "We" for Patterson, "you" for the customer.
  Short declarative sentences. Numbers as proof points.

## Dependency rule

`astro@7.1.5` and `@astrojs/starlight@0.41.5` are pinned without a caret and are the
only two dependencies. The image pipeline uses Astro's `passthroughImageService`
rather than an optimizing image library, deliberately, so nothing native compiles at
install time. Adding any dependency means supply-chain scoring it first and surfacing
anything below 90 to the user.

## Contents

- `ds/templates/starlight/` — the runnable starter: `package.json` (+ `bun.lock`),
  `astro.config.mjs`, `src/content.config.ts`, `src/styles/patterson.css` (the only
  brand file), `src/content/docs/` starter pages, `src/assets/` and `public/` logos
- `ds/templates/starlight/README.md` — scaffold instructions, customization points,
  the accent policy, and the font policy
