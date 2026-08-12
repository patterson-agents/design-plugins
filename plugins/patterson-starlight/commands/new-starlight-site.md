---
description: Scaffold a Patterson-branded Starlight documentation site and fill it with content
argument-hint: [target directory and what the docs are about]
---

# new starlight site

The user request: $ARGUMENTS

Follow the `starlight-site` skill from the `patterson-starlight` plugin.

1. Scaffold the starter into the requested directory. Use
   `cp -R "${CLAUDE_PLUGIN_ROOT}/ds/templates/starlight" <dir>` followed by
   `bun install`, or `bun create patterson-starlight <dir>` if the template is
   registered locally. Use `bun create` only against a directory that does not exist
   yet — it replaces the contents of an existing one without prompting.
2. Run `bun run build` once before writing anything, to confirm a clean `dist/`.
3. Set `title`, `description`, and `tagline` in `astro.config.mjs`. Uncomment `site`
   only if the user gave you a deploy origin.
4. Replace the starter pages in `src/content/docs/` with content for the request
   above, using the skill's content mapping: overview in `index.mdx`, install and
   first run in `getting-started.md`, task-shaped how-tos in `guides/`, surfaces and
   tables in `reference/`.
5. Keep the theme intact. Style only through the tokens in
   `src/styles/patterson.css`, never raw hex. Sentence case, no emoji, no sky text on
   a light canvas.
6. Run `bun run build` again, then tell the user which files you produced, the page
   count, and how to preview (`bun run dev`).
