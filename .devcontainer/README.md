# .devcontainer/

Node 22 (bookworm) dev container with the full agent toolchain.

| File | Role |
|---|---|
| `devcontainer.json` | image + features (`github-cli`, `claude-code`), lifecycle hooks, port 3000 for docs preview, VS Code extensions/settings |
| `setup.sh` | `onCreateCommand` → runs during **prebuilds**: installs `@github/copilot` + `opencode-ai`, then the repo dotfiles |
| `welcome.sh` | `postAttachCommand` → prints the tool cheat-sheet on every terminal attach |

First-run auth: `claude` (browser sign-in) · `copilot` → `/login` · `opencode` → `/connect` · `gh auth status` (pre-authed in Codespaces).

Prebuild: enable in repo Settings → Codespaces; the [`devcontainer-prebuild.yml`](../.github/workflows/devcontainer-prebuild.yml) workflow additionally pushes the image to GHCR. A publishable copy of this config lives in [`../devcontainer-template/`](../devcontainer-template/).

## VHS terminal demo

<img src="../demos/vhs/gif/marketplace-tour.gif" width="820" alt="marketplace terminal demo">
