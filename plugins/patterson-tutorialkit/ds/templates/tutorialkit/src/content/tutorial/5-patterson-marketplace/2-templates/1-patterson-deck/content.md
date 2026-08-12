---
type: lesson
title: patterson-deck
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-deck — 16:9 presentations

## What it ships

- **Skill** `deck-template` — slide recipes: cover, section divider, stats, comparison, quote, capabilities table, full-bleed photo band, closing
- **Command** `/patterson-deck:new-deck`
- **Agent** a deck reviewer
- **`ds/` snapshot** — the static-HTML 16:9 deck template with wave watermark and brand imagery

## When to use it

Reach for it whenever the ask is "make a deck / slides / presentation" — output is print-to-PDF-ready static HTML at 1920×1080.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-deck**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-deck@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-deck:new-deck`
(scaffolds a deck from the template).

**3.** Under *Remember*, record the key fact: *Slides are fixed 16:9 (1920×1080) — print-to-PDF ready.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
