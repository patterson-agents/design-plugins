/**
 * Patterson Companies — Tailwind config (v3-style / JS)
 * -------------------------------------------------------------
 * Prefer integrations/tailwind.css (the CSS-first v4 theme) when you can.
 * Use THIS file if you are on Tailwind v3, or on v4 but loading a JS config
 * with `@config "./tailwind.config.js";`.
 *
 * All values mirror tokens/*.css and theme.json. Spacing is intentionally
 * left as Tailwind's default (0.25rem base).
 * [TBD] Patterson publishes no named spacing scale; the documented reality is a
 * 5px grid ([DPL] padding steps 5/10/15/20/25/30/50/60/80; [BG25 p.57] 30px
 * button padding). Set `--spacing: 0.3125rem` in Tailwind v4 to land on it.
 *
 *   // tailwind.config.js
 *   import patterson from '@patterson/design-system/integrations/tailwind.config.js';
 *   export default { presets: [patterson], content: ['./src/**\/*.{html,js,jsx,ts,tsx}'] };
 */
const navy = '#003767';
const sky = '#00A8E1';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["proxima-nova", "Arial", "sans-serif"],
        display: ["proxima-nova", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SF Mono", "Menlo", "Consolas", "monospace"],
      },
      colors: {
        // Tints: published 75/50/25 ramp over white [BG25 p.24].
        navy: { DEFAULT: navy, 75: "#40698D", 50: "#809BB3", 25: "#BFCDD9" },
        sky:  { DEFAULT: sky,  75: "#40BEE8", 50: "#80D4F0", 25: "#BFE9F8" },
        blue: "#147EC2",
        "blue-light": "#6DCFF6",
        green: "#7BC24D",
        teal: "#00817D",
        purple: "#522E91",
        ink: "#003767",
        gray: {
          brand: "#58585B",
          700: "#58585B", 600: "#58585B", 500: "#828284", 400: "#9B9B9B",
          300: "#ACACAD", 200: "#D5D5D6", 100: "#ECECEC", 50: "#F8F8F8",
        },
        success: "#0CA50F", "success-bg": "#F8F8F8", // [DPL] .message-box--success
        info: "#147EC2", "info-bg": "#F8F8F8",
        warning: "#F5A623", "warning-bg": "#F8F8F8",
        danger: "#D0021B", "danger-bg": "#F8F8F8",
        // role aliases
        heading: "#003767",
        body: "#58585B",
        muted: "#9B9B9B", // [DS20 p.7] digital medium grey
        link: "#147CBD", // [DS20 p.8]
        border: "#ECECEC",
        "border-strong": "#A8A9AC",
        surface: "#FFFFFF",
        "surface-subtle": "#F8F8F8",
        ring: sky,
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        body: "1rem",
        h5: "1.0625rem",
        lead: "1.25rem",
        h4: "1.25rem",
        h3: "clamp(1.375rem, 1.15rem + 0.8vw, 1.75rem)",
        h2: "clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)",
        h1: "clamp(2.25rem, 1.5rem + 2.6vw, 3.25rem)",
        display: "clamp(2.75rem, 1.6rem + 4.2vw, 4.5rem)",
        stat: "clamp(2.5rem, 1.4rem + 4vw, 4rem)",
      },
      fontWeight: {
        light: "300", medium: "500", semibold: "600", bold: "700", extra: "800", black: "900",
      },
      lineHeight: {
        // [BG25 p.27] headline 75% of size, body 125-150%; [DPL] web equivalents.
        "print-headline": "0.75", tight: "1.15", snug: "1.25", heading: "1.3", body: "1.5", relaxed: "1.5",
      },
      letterSpacing: {
        tight: "-0.025em", snug: "-0.01em", wide: "0.04em", caps: "0.08em", // [BG25 p.27] tracking -25 / -10
      },
      borderRadius: {
        xs: "2px", sm: "5px", md: "6px", lg: "10px", xl: "16px", "2xl": "24px", pill: "999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0, 55, 103, 0.06)",
        sm: "0 1px 3px rgba(0, 55, 103, 0.08), 0 1px 2px rgba(0, 55, 103, 0.06)",
        md: "0 4px 12px rgba(0, 55, 103, 0.10), 0 2px 4px rgba(0, 55, 103, 0.06)",
        lg: "0 12px 28px rgba(0, 55, 103, 0.12), 0 4px 10px rgba(0, 55, 103, 0.07)",
        xl: "0 24px 48px rgba(0, 55, 103, 0.16)",
      },
      maxWidth: {
        container: "1300px", // [DPL]
        text: "720px",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0.2, 1)",
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        fast: "120ms", base: "200ms", slow: "320ms",
      },
    },
  },
};
