---
title: Getting started
description: Install the Patterson Starlight starter, run it locally, and publish your first page.
---

This is a ready-to-run [Starlight](https://starlight.astro.build) project skinned
in the Patterson Companies brand. Copy the folder, run it, and start writing.

## Prerequisites

- Node 20+ (or [Bun](https://bun.sh) 1.1+). The commands below use Bun; `npm`
  works identically (`npm install`, `npm run dev`).

## Install and run

```sh
bun install
bun run dev
```

The dev server boots the themed docs at `http://localhost:4321`. Edits to content
and styles hot-reload.

## Add a page

Create a Markdown or MDX file under `src/content/docs/`. Its location decides
where it appears in the sidebar (the `guides/` and `reference/` folders are
auto-generated into their sections):

```md
---
title: Placing an order
description: How to submit an order through the API.
---

Your content here.
```

Every page needs a `title`; `description` feeds search and social previews.

## Re-theme

All brand mapping lives in `src/styles/patterson.css` — it remaps Starlight's
`--sl-*` variables to Patterson tokens. Change a value there and both the light
and dark themes update. See [Theming](/guides/theming/) for the full surface.

:::note
The real Patterson typeface, Proxima Nova, is an Adobe Fonts (Typekit) face. The
starter ships the `"proxima-nova", Arial, sans-serif` stack; add the Adobe Fonts kit `uth1qfm`
embed to render Proxima Nova in production.
:::
