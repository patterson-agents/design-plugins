---
type: lesson
title: Define the Patterson brand tokens
focus: /brand-tokens.css
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# Define the Patterson brand tokens

A design system starts with **tokens** — named values that stand in for raw hex,
pixel, and font values. Patterson's palette is carried by two brand colors, navy
`#003767` and sky `#00A8E1`, with a cool gray for text. Product UI never hardcodes
those hex values; it references a *semantic alias* (like `--accent`) that points at
a primitive. That indirection is what lets the whole system re-theme from one place.

:::info
**What you'll build:** a `brand-tokens.css` that declares the Patterson brand
primitives and one semantic alias.
**How it's checked:** the terminal runs `node validate.mjs`, which scrapes your
`--custom-property` declarations and lints them against the brand.
:::

## Your task

Open `brand-tokens.css` in the editor. It defines `--pat-navy`, but the palette is
incomplete and there's no semantic alias yet.

**1.** Add the two missing primitives — sky and gray — with their exact brand values.
**2.** Add a semantic `--accent` alias that **references** the sky primitive with
`var(…)` rather than repeating the hex.

Your finished file should look like this:

```css title="brand-tokens.css" ins={4-5,8}
:root {
  /* Patterson brand primitives */
  --pat-navy: #003767;
  --pat-sky: #00A8E1;
  --pat-gray: #58585B;

  /* Semantic aliases — reference the primitives above */
  --accent: var(--pat-sky);
}
```

:::warn
`--accent: #00A8E1;` would look identical on screen but the validator rejects it.
Aliases must point at a primitive (`var(--pat-sky)`) so a single edit re-themes
everything downstream — that's the whole point of a token layer.
:::

Run the validator in the terminal to check your work:

```sh
node validate.mjs
```

:::success
When every line reads `✓` and the terminal prints **PASS — on brand!**, you've got
a valid Patterson token layer. This is exactly the pattern the full design system
uses in `tokens/colors.css`.
:::

:::tip
Stuck? Press **Solve** to reveal the completed `_solution/` version, then compare it
with yours. **Reset** puts your starting files back.
:::
