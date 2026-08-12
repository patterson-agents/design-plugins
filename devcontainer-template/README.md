# Dev Container Template — patterson-agents

Spec-compliant [Dev Container Template](https://containers.dev/implementors/templates/) mirroring this repo's `.devcontainer/` (Node 22 + Claude Code + OpenCode + Copilot CLI + gh).

- **Publish:** the `publish-devcontainer-template.yml` workflow pushes it to GHCR via `devcontainers/action` on changes under this folder.
- **Consume:** `devcontainer templates apply --workspace-folder . -t ghcr.io/patterson-agents/design-system/patterson-agents:latest`, or pick it in VS Code / Codespaces UI once indexed.
- The template omits the repo-specific welcome banner and docs port; the CLIs install via `onCreateCommand` instead of `setup.sh`.

## VHS terminal demo

<img src="../demos/vhs/gif/marketplace-tour.gif" width="820" alt="marketplace terminal demo">
