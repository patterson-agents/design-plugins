# dotfiles/

A minimal, portable dotfiles scaffold for the agent workbench.

- `install.sh` — idempotent; sources `aliases.sh` from `~/.bashrc` / `~/.zshrc` and sets safe git defaults. Called automatically by `.devcontainer/setup.sh`.
- `aliases.sh` — shortcuts for the agent CLIs (`cc`, `oc`, `cop`), plugin validation, and the docs server.

## Use with GitHub Codespaces dotfiles

Codespaces can install *personal* dotfiles into every codespace: copy this folder's contents into a repo named `dotfiles` on your account (or any repo selected under **Settings → Codespaces → Dotfiles**). Codespaces clones it and runs `install.sh` automatically at creation. Keep personal secrets out — dotfiles run in every codespace you create.

## VHS terminal demo

<img src="../demos/vhs/gif/marketplace-tour.gif" width="820" alt="marketplace terminal demo">
