---
type: lesson
title: patterson-docs
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-docs — documentation sites

## What it ships

- **Skill** `docs-site` — VitePress-styled, Diátaxis-organized docs UI (sidebar nav, content pages, collections)
- **Command** `/patterson-docs:new-docs`
- **Agent** a docs reviewer
- **`ds/` snapshot** — the docs UI kit + a browser-openable page template

## When to use it

Use for any documentation site or knowledge base. Content is organized by Diátaxis: tutorials, how-to guides, reference, explanation.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-docs**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-docs@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-docs:new-docs`
(scaffolds the docs page).

**3.** Under *Remember*, record the key fact: *Docs follow Diátaxis: tutorials / how-to / reference / explanation.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
