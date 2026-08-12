---
type: lesson
title: Your first SKILL.md
focus: /SKILL.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# Your first SKILL.md

A **skill** is a folder with a `SKILL.md` inside: YAML frontmatter that tells the
agent *when* to load it, and a Markdown body with the instructions it follows.
The format is the open **Agent Skills** standard (agentskills.io), used by Claude
Code and a growing list of other agents; browse shared ones at **skills.sh**.

The spec is strict about exactly two fields:

- **`name`** — max 64 chars; lowercase letters, numbers, and hyphens only; no
  leading/trailing/consecutive hyphens; must match the folder name.
- **`description`** — max 1024 chars, non-empty, and written in the **third
  person**. It must say *what* the skill does **and when to use it** — this is
  the only text the agent sees when deciding whether to load the skill.

:::warn
The starter frontmatter breaks both rules: `Patterson-Deck-Helper` has uppercase
letters, and *"Helps with decks."* gives the agent nothing to match against.
:::

## Your task

Fix the frontmatter in `SKILL.md`:

**1.** Rename to a valid spec name: `patterson-deck-builder`.

**2.** Rewrite the description in the third person, stating what it does *and*
when to use it — include the phrase **"Use when"** and real trigger words.

```yaml title="SKILL.md" del={2-3} ins={4-5}
---
name: Patterson-Deck-Helper
description: Helps with decks.
name: patterson-deck-builder
description: Builds on-brand Patterson slide decks from the 16:9 HTML template. Use when the user asks for a deck, presentation, or slides.
---
```

```sh
node validate.mjs
```

:::success
In Claude Code this file would live at `.claude/skills/patterson-deck-builder/SKILL.md`
and be invokable as `/patterson-deck-builder` — or loaded automatically whenever a
request matches the description.
:::
