---
type: lesson
title: AGENTS.md — a README for agents
focus: /AGENTS.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# AGENTS.md — a README for agents

**AGENTS.md** is an open convention: one plain-Markdown file at the repo root that
tells *any* coding agent (Claude Code, Copilot, OpenCode, Cursor…) how to work in
your project. There is no required schema — it wins by being predictable: agents
look for it, read it, and follow it.

A good AGENTS.md answers three questions fast:

1. **What is this project?** One or two sentences of orientation.
2. **How do I run it?** Exact setup, dev, and test commands in fenced blocks.
3. **What are the house rules?** Code style, naming, what not to touch.

:::info
**What you'll build:** a complete `AGENTS.md` for the Patterson design-system repo.
**How it's checked:** `node validate.mjs` lints the file for the sections agents
rely on.
:::

## Your task

Open `AGENTS.md`. The overview is written; the two sections agents need most are
missing.

**1.** Add a `## Setup commands` section with a fenced `sh` block containing the
real commands (`npm install`, `npm run dev`).

**2.** Add a `## Code style` section with at least two concrete rules — e.g.
*"reference tokens, never raw hex"* and *"components live in `ui_kits/`"*.

```md title="AGENTS.md" ins={7-14}
# Patterson Design System

Brand tokens, templates, and UI kits for Patterson Companies.
Deliverables are static HTML + React; no bundler.

## Setup commands

```
(fenced sh block with npm install / npm run dev)
```

## Code style

- Reference tokens (\`var(--pat-sky)\`), never raw hex in components.
```

Run the validator:

```sh
node validate.mjs
```

:::tip
Keep AGENTS.md **imperative and specific**. "Run `npm run check` before committing"
beats a paragraph about testing philosophy. Agents follow commands, not vibes.
:::
