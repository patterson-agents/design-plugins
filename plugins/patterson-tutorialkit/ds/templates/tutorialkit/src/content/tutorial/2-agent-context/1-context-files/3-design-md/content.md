---
type: lesson
title: design.md — design context for agents
focus: /design.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# design.md — design context for agents

AGENTS.md tells agents how to *build*; **design.md** tells them how things should
*look*. It's the file a design-aware agent reads before generating any UI: the
palette, the type stack, the voice, and the non-negotiables — in a form an agent
can apply mechanically.

Unlike AGENTS.md, design.md earns its keep with **exact values**. "Use brand
colors" is useless to an agent; `--pat-navy: #003767` is executable.

:::info
**What you'll build:** a `design.md` for Patterson with a tokens table, a voice
section, and one hard rule about aliases.
:::

## Your task

**1.** Add a `## Tokens` section containing the three brand primitives with exact
hex values — navy `#003767`, sky `#00A8E1`, gray `#58585B`.

**2.** Add the alias rule: accents come from `var(--pat-sky)`, never repeated hex.

**3.** Add a `## Voice` section with two adjectives and one "never" (e.g. *plain,
confident; never exclamation marks*).

```md title="design.md"
## Tokens

| Token | Value |
| --- | --- |
| --pat-navy | #003767 |
…

Accents reference \`var(--pat-sky)\` — never raw hex.

## Voice

Plain, confident. Never exclamation marks.
```

```sh
node validate.mjs
```

:::tip
The Patterson marketplace ships this exact knowledge as the `patterson-brand`
plugin — its skill *is* a design.md that installs itself. You'll meet it in the
last part of this tutorial.
:::
