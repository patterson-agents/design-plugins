# UI Kit — Patterson Companies Corporate Website

An interactive, brand-accurate recreation of **pattersoncompanies.com**, composed entirely
from this design system's tokens and components.

## Run it
Open `index.html` — no server, no build, no CDN. It is static HTML styled by `styles.css`
(which imports `components/components.css`) and renders the **Home** route; the capability
tabs are CSS-only (`:checked`). The `.jsx` files are React sources kept for reuse — they
are not loaded by `index.html`.

## Screens / routes
- **Home** — rendered statically in `index.html` (React source: `HomeScreen.jsx`) — navy hero with the brand promise, four capability pillars,
  the "We Are Patterson" stats band (86M / 90% / 250M), a tabbed capabilities section, a
  news preview and a sky CTA band.
- **What We Do** (React source only: `WhatWeDoScreen.jsx`) — page header + alternating Service / Logistics /
  Products sections.
- **Newsroom** (React source only: `NewsroomScreen.jsx`) — filterable press-release list with a featured story.
- Other nav links route to a simple placeholder (not part of the recreation).

## Composition
- `Header.jsx` (React source) — sticky product-switch bar + main nav (active state = sky underline).
- `Footer.jsx` (React source) — visit-our-sites, connect, contact, legal.
- `icons.jsx` — Lucide-style inline SVG icons (2px rounded stroke).
- Components come from `ds/components/components.css` as plain classes: **`.pat-btn`,
  `.pat-card`, `.pat-stat`, `.pat-tabs`, `.pat-badge`**.

## Fidelity notes
Built from the live site's **content, navigation, messaging and statistics** (the site's
exact CSS/layout source was not available). Imagery is represented with navy/sky placeholder
panels — drop in real Patterson photography to finish. The wordmark is the system's
placeholder; replace with the official logo.

## VHS terminal demo

<img src="../../../../../demos/vhs/gif/patterson-corporate-website.gif" width="820" alt="patterson-corporate-website terminal demo">
