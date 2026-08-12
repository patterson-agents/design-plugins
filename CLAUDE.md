# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A **Claude Code plugin marketplace** for the Patterson Companies design system — not an application. There is no bundler, no test suite, no server to run. The repo is a catalog (`.claude-plugin/marketplace.json`) plus **9 self-contained plugins** under `plugins/`. Each plugin packages the same four parts:

- `skills/<name>/SKILL.md` — auto-invoked knowledge Claude loads on relevant work
- `commands/*.md` — explicit slash-command scaffold workflows
- `agents/*.md` — a subagent specialist Claude can delegate to
- `ds/` — a self-contained snapshot of every design-system file that plugin needs (tokens, the CSS component layer `components/components.css`, fonts, logos, and the plugin's own HTML/JSX artifact)

The plugins: `patterson-brand` (core — install first), `patterson-deck`, `patterson-executive-deck`, `patterson-corporate-page`, `patterson-file-manager`, `patterson-docs`, `patterson-tutorialkit` (templates), `patterson-corporate-website`, `patterson-storefront` (UI kits).

The HTML inside each `ds/` tree are **design references and runnable starters** — they render on-brand with no build step, no JavaScript runtime and no CDN (just `<link rel="stylesheet" href="…/styles.css">`), and open directly in a browser. They are the *output* the plugins produce, not production app code. When a plugin is used, Claude copies the relevant `ds/` files into the target project and adapts them to that project's stack.

## Commands

```bash
claude plugin validate .          # the canonical check — run after ANY change to a
                                  # plugin.json, marketplace.json, skill, command, or agent.
                                  # Also the default VS Code test task.
claude plugin list                # list installed plugins

# Local smoke test of the end-to-end path
claude
/plugin marketplace add .
/plugin install patterson-brand@patterson-design   # foundation first
/plugin install patterson-deck@patterson-design
/patterson-deck:new-deck Q3 dental equipment business review

# Docs / demo preview (static — no build)
npx --yes serve -l 3000 .         # then open /docs/ or /demos/

# Render terminal demo GIFs (optional; requires charmbracelet/vhs)
vhs demos/vhs/patterson-deck.tape          # → demos/vhs/gif/patterson-deck.gif
for t in demos/vhs/*.tape; do vhs "$t"; done
```

The marketplace suffix is `@patterson-design` (from `marketplace.json` `name`), independent of the repo folder name.

## Invariants (easy to break, nothing auto-enforces them)

- **`ds/` is a mirror of the source tree.** Files reference each other with relative paths (`../../styles.css`, `../../components/components.css`, `../../assets/brand/…`) that must resolve identically in this repo, in the plugin cache, and after being copied into a consuming project. **Never flatten, rename, or move files inside any `ds/`.**
- **`ds/` snapshots are intentionally duplicated** across plugins so each plugin is self-contained. A change to a shared brand-core file (a token, font, or logo) must be **re-copied into every plugin's `ds/`** that references it — there is no shared/symlinked source.
- **`ds/tokens/`, `ds/styles.css` and `ds/components/` are byte-identical across all nine plugins.** Change one, re-copy to the other eight, and verify with md5. There is no compiled component bundle any more — `components/components.css` is hand-authored and every rule carries a provenance citation.
- **`.claude-plugin/` holds only manifests** — `marketplace.json` at the repo-root `.claude-plugin/`, `plugin.json` at each plugin's `.claude-plugin/`. Skills, commands, and agents live *outside* `.claude-plugin/`, at the plugin root.
- **Dual version source of truth:** for any content change, bump `version` in **both** `plugins/<name>/.claude-plugin/plugin.json` **and** the matching entry in `.claude-plugin/marketplace.json`, and keep them equal.
- **One-to-one:** every folder under `plugins/` has exactly one entry in `marketplace.json`, and vice versa (currently 9 each).
- **Frontmatter (YAML) per component type:** commands need `description` (+ optional `argument-hint`); agents need `name` and `description`; skills need `name`, `description`, `user-invocable`.
- Agent/command files reference plugin files via `${CLAUDE_PLUGIN_ROOT}/ds/…` so they resolve wherever the plugin is installed.

## Brand rules (any HTML/CSS you touch)

- Style with CSS custom properties from `ds/tokens/*.css` (`--pat-navy`, `--pat-sky`, `--space-*`, `--fs-*`, `--shadow-*`) — **never raw hex**. Primary navy `#003767`, accent sky `#00A8E1` live only inside the token files.
- 5px radius [BG25 p.57], 46px control height [BG25 p.57], navy-tinted shadows, sky focus ring. Proxima Nova from Adobe Fonts kit `uth1qfm` (Arial substitute).
- Use the bundled logo SVGs in `ds/assets/brand/` — never redraw the wave mark. White lockup on navy, navy lockup on white.
- Voice: confident, plain-spoken, "we/you", short declarative sentences. **Never use emoji** in any brand-facing surface — this is a B2B healthcare distribution brand.
- Assets are **proprietary** (Patterson logos, brand imagery). Proxima Nova is licensed from Adobe Fonts (kit `uth1qfm`) and is never bundled. This repo is private-distribution only.

## Maintenance loop (source → snapshots)

This marketplace is *generated from* the upstream design-system project. When the source changes: (1) re-copy the changed files into every affected plugin `ds/` (plain copies, identical paths), (2) bump the paired versions, (3) `claude plugin validate .`, then commit.

## Reference docs

- `CLAUDE_CODE_HANDOFF.md` — paste-ready prompt covering publish, validate, dev-container setup, and the maintenance loop.
- `.github/copilot-instructions.md` — the same layout/brand rules for Copilot.
- Each `plugins/<name>/README.md` — that plugin's file tree, usage, and primary command.
