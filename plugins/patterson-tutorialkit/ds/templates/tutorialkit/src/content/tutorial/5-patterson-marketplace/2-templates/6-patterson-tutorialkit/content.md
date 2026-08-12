---
type: lesson
title: patterson-tutorialkit
focus: /setup.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# patterson-tutorialkit — this very tutorial

## What it ships

- **Skill** `tutorialkit-theme` — the canonical `theme.css` (--tk-* surface mapped to Patterson tokens, 4 themes)
- **Command** `/patterson-tutorialkit:brand-tutorialkit`
- **Agent** a theme reviewer
- **`ds/` snapshot** — the runnable Astro starter you are reading right now

## When to use it

Use to spin up interactive, in-browser workshops (like this one). Lessons run in a WebContainer, so the hands-on loop is always author → `node validate.mjs` → pass/fail.

:::info
**What you'll build:** a `setup.md` runbook a teammate can follow verbatim to
install and try **patterson-tutorialkit**.
**How it's checked:** `node validate.mjs` lints the runbook for the exact
commands and the one fact people always forget.
:::

## Your task

Complete `setup.md`:

**1.** In the *Install* block, add the marketplace and install the plugin:

```text
/plugin marketplace add patterson-agents/design-system
/plugin install patterson-tutorialkit@patterson-design
```

**2.** Under *Try it*, invoke the plugin's command — `/patterson-tutorialkit:brand-tutorialkit`
(applies the Patterson theme to a TutorialKit project).

**3.** Under *Remember*, record the key fact: *The whole brand lives in theme.css — every --tk-* var traces to a Patterson token.*

```sh
node validate.mjs
```

:::tip
Plugin commands are always namespaced `/<plugin>:<command>` — the plugin's
`name` in `plugin.json` is the namespace. That's why the catalog insisted on
kebab-case.
:::
