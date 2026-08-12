# Contributing to design-plugins

This repo follows the same house conventions as
[`patterson-corp/CONTRIBUTING.md`](https://github.com/patterson-agents/patterson-corp/blob/main/CONTRIBUTING.md)
— conventional commits, no emoji on brand surfaces, `[TBD: …]` instead of an invented answer,
kebab-case naming. Read that document first; this one only covers what's specific to a plugin
marketplace.

## The two invariants that don't auto-enforce

These came out of grafting `patterson-design-plugins#9`'s asset-optimization pass (see
[REFERENCES.md](REFERENCES.md)) and nothing in CI catches a violation — `claude plugin validate .`
checks manifests, not snapshot hygiene:

1. **Never flatten, rename, or move files inside any `ds/`.** Each `ds/` mirrors the
   design-system source tree; files reference each other with relative paths
   (`../../styles.css`, `../../assets/brand/…`) that must resolve identically in this repo, in
   the plugin cache, and after being copied into a consuming project. Ship a raster asset only
   into the `ds/` of plugins whose templates actually reference it — don't copy "just in case."
2. **Dual version source of truth.** Any content change bumps `version` in **both**
   `plugins/<name>/.claude-plugin/plugin.json` **and** the matching entry in
   `.claude-plugin/marketplace.json`, and the two must stay equal. `sh tests/run-tests.sh` checks
   that every plugin has a non-empty version; it does not check that the two numbers match.

## Before opening a PR

```bash
claude plugin validate .   # manifests, skills, commands, agents
sh tests/run-tests.sh      # the zero-dependency validation suite
```

See [CLAUDE.md](CLAUDE.md) for the full invariant list and the maintenance loop (source →
snapshots).
