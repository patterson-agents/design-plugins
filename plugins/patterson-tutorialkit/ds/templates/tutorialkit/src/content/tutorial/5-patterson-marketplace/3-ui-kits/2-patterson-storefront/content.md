---
type: lesson
title: patterson-storefront
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-storefront — e-commerce kit

## What it ships

- **Skill** `storefront-kit` — utility bar, search, category nav + flyouts, hero, featured products, manufacturers, rewards, footer
- **Command** `/patterson-storefront:new-storefront`
- **Agent** a storefront reviewer
- **`ds/` snapshot** — the pattern-library v5.7.2 shell, switchable Dental ↔ Veterinary

## When to use it

Use for anything shop-shaped. One switch swaps the whole brand between Dental and Veterinary.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-storefront**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-storefront@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-storefront:new-storefront`
(assembles the storefront shell).

**3.** Under *Remember*, record the key fact: *One switch swaps the whole storefront between Dental and Veterinary brands.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
