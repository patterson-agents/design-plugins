---
type: lesson
title: Publish a marketplace
focus: /marketplace.json
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# Publish a marketplace

A **marketplace** is just a git repo with a catalog file at
`.claude-plugin/marketplace.json`. Users add it once —

```sh
/plugin marketplace add patterson-agents/design-system
```

— and every plugin it lists becomes installable as
`/plugin install <plugin>@patterson-design`.

The catalog needs a `name`, an `owner` with at least a `name`, and a `plugins`
array. Each entry needs its own `name` plus a **`source`** — for plugins that
live in the same repo, a relative path starting with `./`.

:::warn
The starter catalog is missing its `owner` and one plugin's `source` — the two
errors that make `/plugin marketplace add` fail with the least helpful messages.
:::

## Your task

```json title="marketplace.json" ins={4,10}
{
  "name": "patterson-design",
  "owner": { "name": "Patterson Companies Design System" },
  "plugins": [
    { "name": "patterson-brand", "source": "./plugins/patterson-brand" },
    { "name": "patterson-deck", "source": "./plugins/patterson-deck" }
  ]
}
```

```sh
node validate.mjs
```

:::success
This is precisely the shape of the real Patterson marketplace you'll tour in the
next part — nine plugins, one catalog, one `add` command.
:::
