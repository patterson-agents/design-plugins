---
type: lesson
title: patterson-executive-deck
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-executive-deck — briefings

## What it ships

- **Skill** `executive-deck-template` — editorial navy cover, key takeaways, breakdown matrix, requirements, build outputs, benefits slides
- **Command** `/patterson-executive-deck:new-executive-deck`
- **Agent** an executive-tone reviewer
- **`ds/` snapshot** — the executive deck template

## When to use it

Denser and more formal than `patterson-deck` — use for leadership briefings, program reviews, and anything with a decision at the end.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-executive-deck**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-executive-deck@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-executive-deck:new-executive-deck`
(scaffolds the denser executive variant).

**3.** Under *Remember*, record the key fact: *Denser and more formal than the standard deck — built for leadership briefings.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
