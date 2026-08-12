# References

Citation sources used throughout this repo's brand rules, prompts, and skills, plus the
provenance of the invariants that shape the `ds/` snapshot layout.

## Brand guide citations

Inline citations like `[BG25 p.57]` and `[DS20 p.16]` point at internal Patterson brand
references, not files in this repo:

| Tag | Source | Used for |
|---|---|---|
| `BG25` | Patterson Companies Brand Guide (2025 edition) | Corner radius (5px, p.57), control height (46px, p.57), sentence-case mandate (p.25), type tracking/leading (p.27) |
| `DS20` | Patterson digital-style reference (2020 edition) | Eyebrow color/case conventions (p.16) |

Where a rule has no published page reference, prompts and skills mark it `[TBD: no elevation
scale is published]` rather than inventing one — see any `agents/*.md` shape-rule line for an
example.

## Typography

Proxima Nova is licensed from **Adobe Fonts, kit `uth1qfm`** — loaded at runtime, never
self-hosted or vendored as a binary. Adobe's Typekit Terms of Use bar re-hosting kit payloads,
which is why no plugin's `ds/` carries a Proxima Nova file; Arial is the sanctioned fallback
substitute per `BG25` p.25.

## Decisions

- **[ADR 0004](docs/decisions/0004-unpkg-react-application-templates.md)** — why
  `patterson-docs` and `patterson-file-manager` load React/Babel from `unpkg.com` instead of
  following the offline-first, no-build-step rule every other plugin follows. Read this before
  touching either plugin's `ds/` application shell.

## Upstream credit

- **[patterson-agents/patterson-design-plugins#9](https://github.com/patterson-agents/patterson-design-plugins/pull/9)**
  by `copilot-swe-agent` — the raster-asset optimization this repo's asset layout is grafted
  from (85 MB → 6.5 MB install footprint by shipping a raster only into the plugins whose
  templates actually reference it). Grafted in `1e922ba` (`perf(assets): graft PR #9 asset
  optimization from upstream`); adapted because this fork's seed history had already converted
  the four brand rasters from PNG to `.webp` and pre-applied the version bumps, so the graft
  ports PR #9's *invariant* (asset-per-reference, not asset-per-plugin) rather than replaying
  its diff verbatim. The upstream PR remains open in `patterson-design-plugins` pending
  disposition there; this repo's copy is independent history per its fork note in
  [README.md](README.md#what-this-is).
- `docs/screenshots/demo-gallery.webp` is a fresh capture of the demo gallery (not a re-encode of
  an existing raster), sized to the same "downscale to largest on-screen use, convert to `.webp`"
  rule PR #9 established — see the Invariants section of [CLAUDE.md](CLAUDE.md).
