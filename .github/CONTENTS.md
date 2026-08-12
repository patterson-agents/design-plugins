# .github/

| File | Role |
|---|---|
| `copilot-instructions.md` | repo conventions GitHub Copilot loads automatically (layout rules, `ds/` contract, brand/token rules, versioning workflow) |
| `workflows/devcontainer-prebuild.yml` | builds the dev container and pushes the image to GHCR on `.devcontainer/**` changes |
| `workflows/publish-devcontainer-template.yml` | publishes `devcontainer-template/src/patterson-agents` to GHCR per the containers.dev distribution spec |

Codespaces prebuilds themselves are enabled in repo **Settings → Codespaces → Set up prebuild** (the workflow only publishes the reusable image).
