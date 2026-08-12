---
type: lesson
title: patterson-brand
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-brand — the foundation

## What it ships

- **Skill** `patterson-design` — the brand knowledge Claude loads when doing any Patterson work
- **Commands** `/patterson-brand:design` and `/patterson-brand:wire-tokens` (framework adapters: Tailwind v3/v4, UnoCSS, Theme UI, shadcn/ui)
- **Agent** a brand-guardian reviewer
- **`ds/` snapshot** — `tokens/colors.css`, fonts, logos, brand imagery, the React component library

## When to use it

Install it first, always — every other Patterson plugin assumes its tokens and fonts. It is the plugin form of the `design.md` you wrote in Part 2.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-brand**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-brand@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-brand:design`
(loads the full design context (tokens, voice, component rules)).

**3.** Under *Remember*, record the key fact: *Tokens land in ds/tokens/colors.css — reference them, never raw hex.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
