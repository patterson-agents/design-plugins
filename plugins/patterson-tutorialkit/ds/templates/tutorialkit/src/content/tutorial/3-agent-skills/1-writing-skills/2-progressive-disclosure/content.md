---
type: lesson
title: Progressive disclosure
focus: /SKILL.md
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# Progressive disclosure

Skills load in three stages: **metadata** (~100 tokens, always in context),
the **SKILL.md body** (loaded when the skill activates), and **bundled files**
(`references/`, `scripts/`, `assets/` — loaded only if the task needs them).

The context window is a public good. Anthropic's authoring guidance is blunt:
assume the model is already smart, keep the body **under 500 lines** (ideally far
less), and move reference material into linked files that cost nothing until read.

:::warn
The starter `SKILL.md` narrates the entire Patterson color theory, spacing
rationale, and accessibility appendix inline — dozens of lines the agent pays for
on *every* activation, to answer questions it usually isn't asking.
:::

## Your task

**1.** Cut the body down to the essentials: the quick-start fence and the three
rules. Get the whole file **under 40 lines**.

**2.** Move the detail out: link it as
`[references/REFERENCE.md](references/REFERENCE.md)` under an
"Additional resources" heading. (The Solve version ships that file too.)

```md title="SKILL.md" ins={3-5}
## Additional resources

- Color rationale, spacing scale, and a11y notes:
  [references/REFERENCE.md](references/REFERENCE.md)
```

```sh
node validate.mjs
```

:::tip
Keep references **one level deep** from SKILL.md. A chain of file → file → file
gets partially read (`head -100`) and the agent misses the payload.
:::
