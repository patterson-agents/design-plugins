---
type: lesson
title: patterson-corporate-website
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-corporate-website — the .com kit

## What it ships

- **Skill** `corporate-website-kit` — home hero, We-Are-Patterson stats, capability tabs, What-We-Do, newsroom, header, footer as separate React screens
- **Command** `/patterson-corporate-website:new-corporate-site`
- **Agent** a site reviewer
- **`ds/` snapshot** — the interactive recreation of pattersoncompanies.com

## When to use it

Use when recreating or extending the corporate site — every section ships as its own screen you can compose.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-corporate-website**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-corporate-website@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-corporate-website:new-corporate-site`
(assembles screens from the kit).

**3.** Under *Remember*, record the key fact: *Screens include: home hero, stats band, capability tabs, newsroom, header, footer.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
