---
type: lesson
title: The plugin manifest
focus: /plugin.json
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# The plugin manifest

A **plugin** is a directory that bundles skills, commands, agents, hooks, and MCP
servers into one installable unit. Its identity card is
`.claude-plugin/plugin.json` — the *only* file that lives inside
`.claude-plugin/`; every component directory (`skills/`, `agents/`, `hooks/`)
sits at the plugin **root**.

The rules that matter:

- **`name`** is required: kebab-case, no spaces. It becomes the namespace —
  the `new-deck` command in `patterson-deck` is invoked as
  `/patterson-deck:new-deck`.
- **`version`** is your update switch. Semver (`1.2.0`), and users only receive
  changes when you **bump it** — pushing commits alone does nothing.
- **`description`** is what users read in the `/plugin` picker. Non-empty, specific.

## Your task

The starter manifest fails `claude plugin validate` three ways. Fix it:

```json title="plugin.json" del={2} ins={3-5}
{
  "name": "Patterson Deck Tools",
  "name": "patterson-deck",
  "version": "1.0.0",
  "description": "Patterson 16:9 deck template with skills, a /new-deck command, and a review agent."
}
```

```sh
node validate.mjs
```

:::info
Real check, same idea: `claude plugin validate ./my-plugin --strict` in a terminal
runs Anthropic's validator with warnings promoted to errors — wire it into CI.
:::
