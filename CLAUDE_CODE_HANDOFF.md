# Claude Code Handoff — Patterson Design Marketplace

> **Paste this file (or point Claude Code at it) as your opening prompt when you open this
> repo in Claude Code.** It tells the agent exactly what this repo is, how it's wired, and
> the tasks required to publish, verify, consume, and maintain it. It is self-sufficient — a
> developer who wasn't in the conversation that generated the repo can work from this alone.

---

## Table of contents

- [Your role](#your-role)
- [What this repository is](#what-this-repository-is)
- [About the files in this repo](#about-the-files-in-this-repo)
- [Ground truth & invariants](#ground-truth--invariants)
- [Repository map](#repository-map)
- [Task 1 — Publish to GitHub](#task-1--publish-to-github)
- [Task 2 — Verify the marketplace](#task-2--verify-the-marketplace)
- [Task 3 — Wire up the dev environment](#task-3--wire-up-the-dev-environment)
- [Task 4 — Consume a plugin (smoke test)](#task-4--consume-a-plugin-smoke-test)
- [Task 5 — Render the demos](#task-5--render-the-demos)
- [Task 6 — Maintenance loop (source → snapshots)](#task-6--maintenance-loop-source--snapshots)
- [Definition of done](#definition-of-done)
- [Guardrails](#guardrails)

---

## Your role

You are a developer using Claude Code to **publish, validate, and maintain** the Patterson
Companies design-system marketplace. You are **not** being asked to redesign anything or to
port HTML into a framework. The design work is finished. Your job is repo plumbing: get it
onto `github.com/patterson-agents/design-system`, prove every plugin installs and runs, stand
up the Codespaces/dev-container path, and keep the `ds/` snapshots in sync when the source
design system changes.

## What this repository is

Every part of the Patterson design system — the brand core, each template, each UI kit — is
packaged as its own **[Claude Code plugin](https://code.claude.com/docs/en/plugins-reference)**.
There are **9 plugins** in one **marketplace** (`.claude-plugin/marketplace.json`). Each plugin
ships four things:

1. a **skill** (`skills/<name>/SKILL.md`) — auto-invoked knowledge Claude loads on relevant work,
2. one or more **slash commands** (`commands/*.md`) — explicit scaffold workflows,
3. a **subagent** (`agents/*.md`) — a specialist Claude can delegate to, and
4. a **`ds/` snapshot** — a self-contained copy of every design-system file that plugin needs
   (tokens, the CSS component layer, fonts, logos, and the plugin's own artifact).

The repo also carries a docs site (`docs/`), a demo gallery + VHS tapes (`demos/`), a full
agentic dev environment (`.devcontainer/`, `.vscode/`, `.github/`, `dotfiles/`), and a
publishable Dev Container Template (`devcontainer-template/`).

## About the files in this repo

The HTML/JSX artifacts inside each `plugins/<name>/ds/` tree are **design references and
runnable starters** — they render on-brand with no build step, no JavaScript runtime and no CDN
(just a `<link>` to `styles.css`). They are the intended output of the plugins, not production application code.
When a plugin is *used*, Claude copies the relevant `ds/` files into the target project and
adapts them to that project's stack. Nothing here needs a bundler to be viewed — open any
`ds/**/index.html` directly in a browser.

## Ground truth & invariants

- **Marketplace name:** `patterson-design` (this is the `@patterson-design` suffix used in
  `/plugin install <plugin>@patterson-design`).
- **GitHub target:** `patterson-agents/design-system` — **keep it private** (proprietary brand
  assets: Patterson logos, brand imagery). Proxima Nova is licensed from Adobe Fonts and is never bundled.
- **Plugin count:** 9. The catalog in `.claude-plugin/marketplace.json` and the folders under
  `plugins/` must always match one-to-one.
- **Snapshot rule:** each `ds/` mirrors the source tree so relative refs (`../../styles.css`,
  `../../components/components.css`) resolve identically in this repo, in the plugin cache, and
  after being copied into a consuming project. Never flatten or rename inside `ds/`.
- **`.claude-plugin/` holds only manifests** — `marketplace.json` at the repo root's
  `.claude-plugin/`, and `plugin.json` at each plugin's `.claude-plugin/`. Skills, commands,
  agents live *outside* `.claude-plugin/`.
- **No emoji** in any brand-facing surface. B2B healthcare distribution brand.

## Repository map

```text
design-system/                       # → github.com/patterson-agents/design-system
├── .claude-plugin/
│   └── marketplace.json             # the catalog Claude Code reads (9 plugins)
├── plugins/
│   └── <name>/
│       ├── .claude-plugin/plugin.json
│       ├── skills/<skill>/SKILL.md  # auto-invoked knowledge
│       ├── commands/*.md            # slash commands
│       ├── agents/*.md              # subagent(s)
│       ├── ds/                      # design-system snapshot + this plugin's artifact
│       └── README.md                # file tree, usage, terminal demo
├── docs/                            # docs site (index.html), screenshots, SVG diagrams
├── demos/                           # demos/index.html gallery + demos/vhs/*.tape
├── .devcontainer/                   # Node 22 + Claude Code + OpenCode + Copilot CLI + gh
├── .vscode/                         # settings, tasks, launch, extension picks
├── .github/                         # copilot-instructions.md + CI workflows
├── devcontainer-template/           # publishable Dev Container Template (patterson-agents)
├── dotfiles/                        # agent aliases + idempotent install.sh
├── README.md                        # the human landing page
└── CLAUDE_CODE_HANDOFF.md           # you are here
```

The 10 plugins: `patterson-brand` (core), `patterson-deck`, `patterson-executive-deck`,
`patterson-corporate-page`, `patterson-file-manager`, `patterson-docs`, `patterson-starlight`,
`patterson-vitepress` (templates), `patterson-corporate-website`, `patterson-storefront` (UI kits).

## Task 1 — Publish to GitHub

```bash
gh repo create patterson-agents/design-system --private --source . --remote origin \
  --description "Patterson Companies design-system marketplace for Claude Code"
git add -A
git commit -m "Patterson design-system marketplace: 9 plugins + dev environment"
git branch -M main
git push -u origin main
```

If `patterson-agents` doesn't exist yet, create the org (or swap in the correct owner) before
running the above. Confirm the push kept the repo **private**.

## Task 2 — Verify the marketplace

```bash
claude plugin validate .
```

Expect a clean pass. Then confirm every catalog entry has a matching folder and manifest:

```bash
# every plugins[].name in marketplace.json should have plugins/<name>/.claude-plugin/plugin.json
for p in plugins/*/; do test -f "$p/.claude-plugin/plugin.json" \
  && echo "ok  $(basename "$p")" || echo "MISSING manifest: $p"; done
```

Fix any mismatch before proceeding. The `version` in each `plugins/<name>/.claude-plugin/plugin.json`
must equal the corresponding entry in `.claude-plugin/marketplace.json`.

## Task 3 — Wire up the dev environment

After the first push, two clicks in repo **Settings** make the Codespaces path fully automatic:

1. **Settings → Codespaces → Set up prebuild** (branch `main`) so the toolchain bakes into the
   prebuilt image instead of installing on every launch.
2. **Settings → General → Template repository** (tick it) so *Use this template → Open in a
   codespace* works.

The container (`.devcontainer/devcontainer.json` + `setup.sh`) provisions Node 22, `gh`,
**Claude Code** (`claude`), **OpenCode** (`opencode`), and **GitHub Copilot CLI** (`copilot`).
Verify inside a fresh container:

```bash
claude --version && opencode --version && copilot --version && gh --version
```

## Task 4 — Consume a plugin (smoke test)

From a local checkout, prove the end-to-end path works:

```bash
claude
/plugin marketplace add .
/plugin install patterson-brand@patterson-design
/plugin install patterson-deck@patterson-design
/patterson-deck:new-deck Q3 dental equipment business review
```

`patterson-brand` is the foundation — install it first. Then confirm at least one template
plugin (`patterson-deck`) and one UI-kit plugin (`patterson-storefront`) each scaffold a valid,
on-brand artifact via their primary slash command (listed in each plugin's README).

## Task 5 — Render the demos

VHS tapes script real terminal sessions (install → slash command) per plugin.

```bash
brew install vhs        # or: go install github.com/charmbracelet/vhs@latest
for t in demos/vhs/*.tape; do vhs "$t"; done   # writes demos/vhs/gif/*.gif
```

Open `demos/index.html` in a browser (or `npx serve` and visit `/demos/`) to browse every
plugin's live artifact. Each plugin README embeds its GIF once rendered.

## Task 6 — Maintenance loop (source → snapshots)

This marketplace is **generated from the upstream design-system project**. When tokens, fonts,
logos, or a template/kit change at the source, the plugin `ds/` snapshots must be re-synced:

1. Re-copy the changed files into **every** plugin `ds/` that references them (plain copies,
   identical paths — the brand core files land in all snapshots).
2. Bump `version` in the affected `plugins/<name>/.claude-plugin/plugin.json` **and** the same
   entry in `.claude-plugin/marketplace.json` (keep them equal).
3. Re-validate and commit:

```bash
claude plugin validate .
git commit -am "sync ds/ snapshots + bump versions"
git push
```

Keep `ds/tokens/`, `ds/styles.css` and `ds/components/` byte-identical across all nine plugins.
Never move or rename files inside any `ds/` tree.

## Definition of done

- [ ] Repo pushed to `patterson-agents/design-system`, confirmed **private**.
- [ ] `claude plugin validate .` passes; all 9 catalog entries map to a plugin folder + manifest.
- [ ] Codespaces **prebuild** enabled and **Template repository** ticked.
- [ ] Fresh container reports versions for `claude`, `opencode`, `copilot`, `gh`.
- [ ] `patterson-brand` + one template + one UI kit install and scaffold on-brand artifacts.
- [ ] VHS GIFs rendered; `demos/index.html` opens and shows every artifact.

## Guardrails

- Keep the repo **private** — proprietary brand assets.
- Don't redesign the artifacts; this is a plumbing/publishing handoff.
- One-to-one: `plugins/` folders ↔ `marketplace.json` entries, always.
- Only manifests live in `.claude-plugin/`; skills/commands/agents live outside it.
- `ds/` is a mirror — no flattening, renaming, or hand-editing generated files.
- No emoji in brand-facing surfaces.
