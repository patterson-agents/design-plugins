---
description: Scaffold a Patterson-branded VitePress documentation site and fill it with content
argument-hint: [target directory and what the docs are about]
---

# new vitepress site

The user request: $ARGUMENTS

Follow the `vitepress-site` skill from the `patterson-vitepress` plugin.

1. Scaffold the starter into the requested directory. Use
   `cp -R "${CLAUDE_PLUGIN_ROOT}/ds/templates/vitepress" <dir>` followed by
   `bun install`, or `bun create patterson-vitepress <dir>` if the template is
   registered locally and the directory does not yet exist.
2. Run `bun run docs:build` once before writing anything, to confirm a clean build.
3. Set `title` and `description` in `docs/.vitepress/config.ts`. Uncomment `base` only
   if the user is deploying to a sub-path.
4. Replace the starter pages in `docs/` with content for the request above, using the
   skill's content mapping: hero and feature cards in `index.md`, install and first run
   in `getting-started.md`, task-shaped how-tos in `guides/`, surfaces and tables in
   `reference/`. Update `themeConfig.nav` and `themeConfig.sidebar` for every page you
   add or remove — VitePress does not autogenerate the sidebar.
5. Keep the theme intact. Style only through the tokens in
   `docs/.vitepress/theme/custom.css`, never raw hex. Sentence case, no emoji, no sky
   text on a light canvas.
6. Run `bun run docs:build` again — dead internal links fail the build, so this catches
   any link you left pointing at a page you replaced. Then tell the user which files
   you produced and how to preview (`bun run docs:dev`).
