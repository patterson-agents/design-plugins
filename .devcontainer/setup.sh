#!/usr/bin/env bash
# Installs the agent CLIs used with this marketplace.
# Runs as onCreateCommand, i.e. during Codespaces prebuilds — everything here is baked
# into the prebuilt image. Claude Code itself is installed by the devcontainer FEATURE
# (ghcr.io/anthropics/devcontainer-features/claude-code); gh by the github-cli feature.
set -euo pipefail

echo "==> Installing GitHub Copilot CLI + OpenCode (global npm)"
npm install -g @github/copilot opencode-ai@latest

echo "==> Installing dotfiles (aliases, prompt niceties)"
bash "$(dirname "$0")/../dotfiles/install.sh" || true

echo "==> Versions"
node --version
gh --version | head -n1 || true
claude --version || true
copilot --version || true
opencode --version || true

echo "==> Done. Authenticate per tool on first run:"
echo "    claude        (browser sign-in)"
echo "    copilot       (/login inside the CLI, or GH_TOKEN)"
echo "    opencode      (/connect inside the TUI, or provider API keys)"
echo "    gh auth login (usually pre-authenticated in Codespaces)"
