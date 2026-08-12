---
type: lesson
title: patterson-corporate-page
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-corporate-page — web page shell

## What it ships

- **Skill** `corporate-page-template` — sticky nav with logo, navy hero, content band, footer
- **Command** `/patterson-corporate-page:new-page`
- **Agent** a page reviewer
- **`ds/` snapshot** — the React page shell

## When to use it

The starting point for any on-brand marketing or informational page — hero copy in, page out.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-corporate-page**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-corporate-page@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-corporate-page:new-page`
(scaffolds the page shell).

**3.** Under *Remember*, record the key fact: *Shell parts: sticky nav with logo → navy hero → content band → footer.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
