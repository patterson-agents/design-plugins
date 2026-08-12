# Copilot instructions — Patterson Design Claude Code Marketplace

This repository is a **Claude Code plugin marketplace** for the Patterson Companies design system. It contains no application build — it is a catalog (`.claude-plugin/marketplace.json`) plus nine plugins under `plugins/`, each shipping a skill, slash commands, subagents, and a self-contained `ds/` snapshot of design-system files.

## Layout rules (do not break these)

- `.claude-plugin/marketplace.json` is the catalog. Each plugin lives at `plugins/<name>/` with **only** `plugin.json` inside its `.claude-plugin/` folder; `skills/`, `commands/`, `agents/` sit at the plugin root.
- Every plugin's `ds/` folder mirrors the design-system source tree (`styles.css`, `tokens/`, `components/`, `assets/`, `templates/…` or `ui_kits/…`). Files inside reference each other with relative paths like `../../styles.css` — **never move or flatten files inside `ds/`**. `tokens/`, `styles.css` and `components/` are byte-identical across all nine plugins.
- Components are **CSS classes**, not a JavaScript runtime: `ds/components/components.css` (`.pat-btn`, `.pat-card`, `.pat-badge`, `.pat-stat`, `.pat-alert`, `.pat-tabs`, `.pat-input`, `.pat-select`, `.pat-checkbox`, `.pat-radio`, `.pat-switch`) is imported by `styles.css`. Never add React/Babel CDN `<script>` tags to a `ds/` artifact.
- `ds/` snapshots are deliberately duplicated across plugins so each plugin is self-contained. A token change must be re-copied into every plugin's snapshot.

## Brand rules (apply to any HTML/CSS you touch)

- Style with the CSS custom properties from `ds/tokens/*.css` (`--pat-navy`, `--pat-sky`, `--space-*`, `--fs-*`, `--shadow-*`) — never raw hex values. Primary navy `#003767`, accent sky `#00A8E1` exist only inside the token files.
- 5px radius [BG25 p.57], 46px control height [BG25 p.57], navy-tinted shadows, sky focus ring. Proxima Nova from Adobe Fonts kit `uth1qfm` (Arial substitute).
- Voice: confident, plain-spoken, "we/you", short declarative sentences. **Never add emoji.**
- Use the bundled logo SVGs in `ds/assets/brand/` — never redraw the wave mark. White lockup on navy, navy lockup on white.

## Workflow expectations

- After editing any `plugin.json`, skill, command, or agent file, run `claude plugin validate .` (also available as the default VS Code test task).
- Bump the plugin `version` in **both** `plugins/<name>/.claude-plugin/plugin.json` and the matching entry in `.claude-plugin/marketplace.json` for any content change.
- Markdown component files use YAML frontmatter: commands need `description` (+ optional `argument-hint`); agents need `name` and `description`; skills need `name`, `description`, `user-invocable`.
- Keep this repo private-distribution only: logos, Proxima Nova subsets, and brand imagery are proprietary.
