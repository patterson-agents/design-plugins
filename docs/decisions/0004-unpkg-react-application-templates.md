# 0004. React/Babel-via-unpkg application templates in `patterson-docs` and `patterson-file-manager`

- Status: Proposed
- Deciders: Daniel Bodnar (decision owner)
- Date: 2026-08-12

## Context

Every plugin in this marketplace ships a `ds/` snapshot that is meant to be self-contained: no
build step, no JavaScript runtime, no CDN — just `<link rel="stylesheet" href="…/styles.css">`
against the shared token/component layer. That invariant holds for seven of the nine plugins.

Two plugins break it on purpose:

- **`patterson-docs`** — `ds/ui_kits/patterson-docs/index.html` plus `data.jsx`, `collections.jsx`,
  `pages1.jsx`, `pages2.jsx`, and `app.jsx` (1,440 lines combined) implement a full VitePress-style
  documentation site: routing, a Diátaxis-organized sidebar, a command-palette search, light/dark
  theming, and five fully wired how-to/reference pages.
- **`patterson-file-manager`** — `ds/templates/file-manager/index.html` (806 lines) implements a
  complete file-browser application: list/grid views, a preview pane, breadcrumbs, drag state,
  and bulk-action toolbars.

Both load React 18, ReactDOM, and `@babel/standalone` from `unpkg.com` with SRI hashes
(`react@18.3.1`, `react-dom@18.3.1`, `@babel/standalone@7.29.0`), then transpile in-browser via
`<script type="text/babel">`. This is what makes them runnable by double-clicking the HTML file
with zero tooling — but it is also a live, unpinned-by-version-range, third-party network
dependency baked into files this marketplace hands to consumers.

These two are not component specimens like the `.dc.html` cards or the `*.card.html` swatches
elsewhere in the tree. They are genuine, working **application templates**: the thing a consumer
copies out and extends into their own docs site or file manager, not a picture of what a button
looks like. Converting them to the plain CSS + static-HTML layer used everywhere else would mean
throwing away client-side routing, state, and interactivity — i.e., throwing away the reason
these two templates exist. That tension (self-containment vs. genuine application behavior) is
what this ADR is about.

## Decision drivers

- **Self-containment invariant.** Every other plugin in this marketplace works fully offline,
  with no CDN calls and no version drift risk. These two are the only exceptions.
  - **Supply-chain exposure.** `unpkg.com` is a live CDN; even with SRI-pinned URLs, availability
    and load-time behavior are outside this repo's control, and Socket-style scoring gates don't
    apply to a `<script src>` the way they do to a `package.json` dependency.
  - **Fidelity of purpose.** These two plugins are supposed to demonstrate (and ship) a working
    application, not a static mockup. Losing interactivity changes what the plugin *is*.
  - **Repo size / maintenance burden.** Vendoring React + Babel adds real, non-trivial weight to
    a marketplace that is otherwise all markup and CSS.

## Options considered

### (a) Keep as-is, documented exception

Leave both plugins loading React/Babel from unpkg exactly as they do today. Document the
exception (this ADR, plus a note in each plugin's `README.md` and the root `CLAUDE.md`) so it's
a known, intentional deviation rather than something a future maintainer "fixes" by accident.

- **Pros:** zero migration risk, zero added repo weight, preserves exact current behavior
  (including the SRI hashes, which is more scrutiny than most CDN usage gets). Fastest option.
- **Cons:** the marketplace is not offline-clean for these two plugins; a consumer with a locked-
  down network (or an outage at unpkg) gets a blank page for exactly these two templates; version
  drift is possible if unpkg ever serves a different asset at the same pinned URL (mitigated, not
  eliminated, by SRI).

### (b) Vendor the React/Babel builds locally

Copy `react.development.js`, `react-dom.development.js`, and `babel.min.js` (or a minimal custom
Babel preset) into each plugin's `ds/`, and rewrite the `<script src>` tags to relative paths.
Estimated add: **~1–2 MB** across the two plugins (Babel standalone alone is close to 1 MB
minified; React + ReactDOM development builds add a few hundred KB more).

- **Pros:** restores full self-containment — no network call, no CDN dependency, works in an
  air-gapped environment. Removes the SRI/CDN-availability risk entirely.
- **Cons:** meaningfully larger repo (a `git clone` of a CSS/markup marketplace suddenly carries
  megabytes of vendored JS runtime); those files need a refresh policy (React/Babel security
  patches) that nothing else in this repo requires; using the **development** builds of
  React/ReactDOM (as currently loaded) is intentionally unminified for in-browser readability but
  is not what you'd ship to production — vendoring makes that trade-off more visible and more
  "official-looking" than a CDN `<script>` tag does.

### (c) Convert to the local CSS layer (no JS runtime)

Rebuild both as static HTML against `ds/styles.css` and `ds/components/components.css`, matching
every other plugin.

- **Recommended against.** This is the option that destroys the thing being preserved. The
  Diátaxis-routed docs site and the interactive file browser are the deliverable; a static
  rendering of "what page 1 looks like" is a screenshot with extra steps. If a consumer wanted a
  static docs page or a static file-manager mockup, `patterson-corporate-page` and the `.dc.html`
  card pattern already cover that use case elsewhere in this marketplace. Converting these two
  would not simplify the marketplace, it would remove two of its more useful plugins in favor of
  worse versions of plugins that already exist.

### (d) Remove the two plugins

Drop `patterson-docs` and `patterson-file-manager` from the marketplace entirely rather than
carry the exception.

- **Not recommended.** Both are functioning, documented, in-demand plugin categories (docs sites
  and file managers are common Patterson internal-tool asks per the plugin READMEs). Removing
  them solves the self-containment purity question by deleting the value they provide. There is
  no evidence the CDN dependency has caused an actual incident — this would be a preemptive
  amputation for a documentation inconsistency, not a response to a real failure.

## Recommendation

**Option (a), keep as-is with this ADR as the documented exception**, with a light-touch fallback
to **(b)** if a concrete need for offline/air-gapped use of these two plugins shows up.

Reasoning: the SRI hashes already pin exact byte content, which closes most of the realistic
supply-chain gap that a bare `<script src>` would otherwise leave open — the residual risk is CDN
*availability*, not CDN *integrity*. That's a small, well-understood risk for two plugins whose
entire value proposition is "a real, runnable application," versus a certain, permanent increase
in repo weight and a new patch-tracking obligation (option b) to close a gap that's already
mostly closed. If Patterson's threat model changes — an air-gapped deployment target, a
compliance requirement that forbids any third-party network call in shipped artifacts — that's
the trigger to revisit and move to (b), not a reason to do it preemptively tonight.

This is Daniel's call to make, not this workstream's. The options above are laid out so the
trade-off is legible either way.

## Consequences if (a) is chosen

- Each plugin's `README.md` should carry a one-line callout: "This template loads React 18 and
  Babel from unpkg.com at runtime; it is the one plugin in this marketplace that requires network
  access to render."
- No CI/test changes needed — `tests/run-tests.sh` does not (and should not) attempt to reach the
  network to validate CDN availability.

## Consequences if (b) is chosen later

- Vendor exact pinned versions (`react@18.3.1`, `react-dom@18.3.1`, `@babel/standalone@7.29.0`)
  matching what's loaded today, so behavior does not change alongside the delivery mechanism.
  Run each through the `socket` CLI supply-chain gate before vendoring, same as any other
  third-party artifact entering the repo.
  Add a `ds/vendor/` (or similar) subpath per plugin and update the relative `<script src>` paths.
- Add a refresh note to `CLAUDE.md`'s maintenance loop describing when/how to bump the vendored
  versions.
