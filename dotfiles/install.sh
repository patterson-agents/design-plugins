#!/usr/bin/env bash
# Minimal dotfiles installer. Codespaces runs install.sh automatically when this
# folder is used as (or copied into) your dotfiles repository; the devcontainer
# setup.sh also calls it so the aliases work out of the box in this repo.
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

line="source \"$DIR/aliases.sh\""
for rc in "$HOME/.bashrc" "$HOME/.zshrc"; do
  [ -f "$rc" ] || touch "$rc"
  grep -qsF "$line" "$rc" || printf '\n# Patterson agent workbench\n%s\n' "$line" >> "$rc"
done

# Sensible git defaults (no-op if already set by the user/Codespaces)
git config --global --get init.defaultBranch >/dev/null || git config --global init.defaultBranch main
git config --global --get pull.rebase >/dev/null || git config --global pull.rebase false

echo "dotfiles installed (aliases sourced from $DIR/aliases.sh)"
