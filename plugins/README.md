# plugins/

Nine self-contained Claude Code plugins — see the [root README](../README.md#plugin-catalog) for the full catalog with previews.

## Contents

- [Shared structure](#shared-structure)
- [The ds/ contract](#the-ds-contract)
- [Adding a new plugin](#adding-a-new-plugin)

## Shared structure

```text
<name>/
├── .claude-plugin/plugin.json    # manifest — the ONLY file in this folder
├── skills/<skill>/SKILL.md       # knowledge + workflow (user-invocable)
├── commands/<cmd>.md             # slash command(s)
├── agents/<agent>.md             # subagent definition(s)
├── ds/                           # self-contained design-system snapshot
└── README.md
```

<p align="center"><img src="../docs/diagrams/plugin-anatomy.svg" width="820" alt="Plugin anatomy"></p>

## The ds/ contract

Every `ds/` mirrors the design-system source tree (`styles.css`, `tokens/`, `assets/`, then `templates/…` or `ui_kits/…`). Files reference each other with relative paths (`../../styles.css`), so the snapshot works unchanged in this repo, in the plugin cache, and after `cp -R ds/ ./patterson` into a project. **Never flatten, rename, or move files inside `ds/`.** Duplication across plugins is deliberate — plugins cannot read each other's files.

## Adding a new plugin

1. Create the folder structure above (kebab-case name).
2. Copy the design-system files it needs into `ds/`, preserving paths.
3. Write the skill (workflow + brand quick reference), a command with `description`/`argument-hint` frontmatter, and an agent with `name`/`description` frontmatter.
4. Register it in [`../.claude-plugin/marketplace.json`](../.claude-plugin/marketplace.json).
5. `claude plugin validate .` and add a screenshot to `../docs/screenshots/` + a tape to `../demos/vhs/`.

## VHS terminal demo

<img src="../demos/vhs/gif/marketplace-tour.gif" width="820" alt="marketplace terminal demo">
