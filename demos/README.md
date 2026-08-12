# demos/

## Contents

- [`index.html`](index.html) — browsable gallery of every plugin's live HTML artifact, with screenshots. Open directly or serve the repo root (`npx serve`) and visit `/demos/`.
- [`vhs/`](vhs/) — [VHS](https://github.com/charmbracelet/vhs) tapes scripting a real terminal session per plugin: start `claude`, add the marketplace, install the plugin, run its slash command.

## Rendering the terminal GIFs

```bash
brew install vhs                      # or: go install github.com/charmbracelet/vhs@latest
vhs demos/vhs/patterson-deck.tape     # single plugin → demos/vhs/gif/patterson-deck.gif
for t in demos/vhs/*.tape; do vhs "$t"; done
```

GIFs land in `vhs/gif/` and are embedded across the repository README files.

## VHS terminal demo

<img src="vhs/gif/marketplace-tour.gif" width="820" alt="marketplace terminal demo">

The tapes use a Patterson-navy terminal theme and assume the repo is checked out at `~/patterson-design-marketplace` — edit the `cd` line if yours differs.
