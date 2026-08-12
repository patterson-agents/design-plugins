---
type: lesson
title: CLAUDE.md — memory, not manuals
focus: /CLAUDE.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# CLAUDE.md — memory, not manuals

Claude Code loads **CLAUDE.md** into context at the start of *every* session.
That makes it the most expensive file in your repo: every line is a recurring
token cost, whether or not it's relevant to the task at hand.

The rule of thumb from Anthropic's own guidance: CLAUDE.md holds **facts and
conventions**; **procedures become skills**. A skill's body loads only when
invoked — long reference material costs almost nothing until you need it.

:::warn
The starter file below has grown a 10-step deployment *procedure*. That's the
classic smell: a section of CLAUDE.md that reads like a runbook belongs in
`.claude/skills/deploy/SKILL.md`, invoked as `/deploy`.
:::

## Your task

Open `CLAUDE.md` and put it on a diet:

**1.** Delete the step-by-step "Deployment procedure" section entirely.

**2.** Replace it with one line of *memory*: deployment is handled by the
`/deploy` skill.

**3.** Keep the file under 40 lines. Facts, commands, conventions — nothing else.

```md title="CLAUDE.md" del={3-12} ins={13}
## Deployment

Deployment procedure:
Step 1. Run the test suite…
Step 2. Build the bundle…
…
Step 10. Announce in #releases.

Deployment: run \`/deploy\` (see .claude/skills/deploy/).
```

Then check your work:

```sh
node validate.mjs
```

:::success
CLAUDE.md and AGENTS.md coexist happily: AGENTS.md is the cross-agent contract;
CLAUDE.md adds the Claude-specific memory layer on top.
:::
