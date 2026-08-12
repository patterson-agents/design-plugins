---
type: lesson
title: patterson-file-manager
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-file-manager — app shell

## What it ships

- **Skill** `file-manager-template` — navy top bar, sidebar tree, content grid ("Skill Studio")
- **Command** `/patterson-file-manager:new-app-shell`
- **Agent** an app-shell reviewer
- **`ds/` snapshot** — the React prototype shell

## When to use it

Use for internal tools and dashboard-style prototypes — anything with a tree on the left and content on the right.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-file-manager**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-file-manager@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-file-manager:new-app-shell`
(scaffolds the Skill Studio shell).

**3.** Under *Remember*, record the key fact: *Layout: navy top bar, sidebar tree, content grid.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
