---
title: Brand tokens
description: The Patterson color, type, and shape tokens this starter is built on.
---

The Patterson design system is token-first: you reference semantic variables, never
raw hex values. This starter maps those tokens onto Starlight's theme so the docs
render on-brand automatically.

## Core palette

| Token | Value | Use |
|---|---|---|
| `--pat-navy` | `#003767` | Primary — chrome, strong text, primary buttons |
| `--pat-sky` | `#00A8E1` | Accent — hover, focus ring, links on dark |
| `--pat-blue` | `#147EC2` | Secondary blue [BG25 p.24] |
| `--pat-digital-link` | `#147CBD` | Links on light backgrounds (WCAG-adjusted) [DS20 p.8] |
| `--pat-gray` | `#58585B` | Body copy [BG25 p.24] |
| `--pat-ink` | `#003767` | Headings — navy, not near-black [DPL `.rtf h1/h2/h3`] |

The full ramp (the published 75/50/25 tints, the sourced neutral ramp, the
WCAG-adjusted digital palette, and the tertiary green/teal/purple set) lives in
the `patterson-brand` plugin's `ds/tokens/` — copy those files in if
you need the complete palette in content.

## Type

Proxima Nova is the brand face [BG25 p.25], with **Arial** as the sanctioned substitute and a system
stack beneath it. The scale runs from a fluid display size down to 12px captions;
Starlight's body type is set to the Patterson stack via `--sl-font`.

## Shape and interaction

- **Buttons** are 46px tall with 30px horizontal padding and a 5px radius
  [BG25 p.57]; the default fill is sky `#00A8E1` with white text, and CTA text is
  sentence case — never all caps.
- **Cards and callouts** use the same 5px radius [BG25 p.57].
- **Focus** is a 2px sky ring, offset 2px, on every interactive element.

## Voice

Confident, plain-spoken, "we/you", short declarative sentences, numbers as proof.
Never use emoji — this is a B2B healthcare distribution brand.
