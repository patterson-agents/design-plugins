/**
 * Patterson Companies — UnoCSS config
 * -------------------------------------------------------------
 * Import into your uno.config.js (or use as a preset). Uses presetWind4
 * (Tailwind-v4-compatible utilities) plus Patterson theme values and a set
 * of brand shortcuts that reproduce the component recipes as utilities.
 *
 *   import { defineConfig, presetWind4, presetIcons } from 'unocss';
 *   import { pattersonPreset } from '@patterson/design-system/integrations/uno.config.js';
 *
 *   export default defineConfig({
 *     presets: [presetWind4(), presetIcons({ scale: 1.1 }), pattersonPreset()],
 *   });
 *
 * Then: <button class="btn btn-primary">Shop</button>
 *       <div class="pat-card">…</div>
 *       <p class="eyebrow">Since 1877</p>
 *       <span class="stat">98%</span>
 *
 * This module intentionally does NOT import from 'unocss' itself — it is pure
 * theme data, so it can be consumed anywhere without a build step. You supply
 * defineConfig + presets in your own uno.config.js as shown above.
 */
const theme = {
  colors: {
    // Tints: published 75/50/25 ramp over white [BG25 p.24].
    navy: { DEFAULT: '#003767', 75: '#40698D', 50: '#809BB3', 25: '#BFCDD9' },
    sky:  { DEFAULT: '#00A8E1', 75: '#40BEE8', 50: '#80D4F0', 25: '#BFE9F8' },
    blue: '#147EC2', bluelight: '#6DCFF6', green: '#7BC24D', teal: '#00817D', purple: '#522E91',
    ink: '#003767',
    gray: { brand: '#58585B', 700: '#58585B', 600: '#58585B', 500: '#828284', 400: '#9B9B9B', 300: '#ACACAD', 200: '#D5D5D6', 100: '#ECECEC', 50: '#F8F8F8' },
    success: '#0CA50F', info: '#147EC2', warning: '#F5A623', danger: '#D0021B', // [DPL] .message-box--*
    heading: '#003767', body: '#58585B', muted: '#9B9B9B', link: '#147CBD',
    border: '#ECECEC', 'border-strong': '#A8A9AC', 'field-border': '#A8A9AC', rule: '#D8D8D8',
    surface: '#FFFFFF', 'surface-subtle': '#F8F8F8', ring: '#00A8E1',
    'digital-sky': '#269BCB', 'digital-link': '#147CBD', 'digital-green': '#0CA50F',
    'digital-teal': '#008E8B', 'digital-purple': '#512E91', 'navy-deep': '#001C34',
  },
  fontFamily: {
    sans: "'proxima-nova',Arial,sans-serif",
    display: "'proxima-nova',Arial,sans-serif",
    mono: "'IBM Plex Mono',ui-monospace,'SF Mono',Menlo,Consolas,monospace",
  },
  fontSize: {
    xs: '0.75rem', sm: '0.875rem', body: '1rem', h5: '1.0625rem', lead: '1.25rem', h4: '1.25rem',
    h3: 'clamp(1.375rem, 1.15rem + 0.8vw, 1.75rem)',
    h2: 'clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)',
    h1: 'clamp(2.25rem, 1.5rem + 2.6vw, 3.25rem)',
    display: 'clamp(2.75rem, 1.6rem + 4.2vw, 4.5rem)',
    stat: 'clamp(2.5rem, 1.4rem + 4vw, 4rem)',
  },
  fontWeight: { light: '300', medium: '500', semibold: '600', bold: '700', extra: '800', black: '900' },
  // [BG25 p.27] headline leading 75% of size, body 125-150%; [DPL] web equivalents.
  lineHeight: { 'print-headline': '0.75', tight: '1.15', snug: '1.25', heading: '1.3', body: '1.5', relaxed: '1.5' },
  letterSpacing: { tight: '-0.025em', snug: '-0.01em', wide: '0.04em', caps: '0.08em' },
  borderRadius: { xs: '2px', sm: '5px', md: '6px', lg: '10px', xl: '16px', '2xl': '24px', pill: '999px' },
  boxShadow: {
    xs: '0 1px 2px rgba(0,55,103,0.06)',
    sm: '0 1px 3px rgba(0,55,103,0.08), 0 1px 2px rgba(0,55,103,0.06)',
    md: '0 4px 12px rgba(0,55,103,0.10), 0 2px 4px rgba(0,55,103,0.06)',
    lg: '0 12px 28px rgba(0,55,103,0.12), 0 4px 10px rgba(0,55,103,0.07)',
    xl: '0 24px 48px rgba(0,55,103,0.16)',
    focus: '0 0 0 3px rgba(0,168,225,0.45)',
  },
  maxWidth: { container: '1300px', text: '720px' }, // [DPL]
  easing: { standard: 'cubic-bezier(0.2,0,0.2,1)', out: 'cubic-bezier(0.16,1,0.3,1)' },
};

/* Component recipes as shortcuts — reproduce the .jsx primitives' looks. */
const shortcutsMap = {
  // [DS20 p.16] eyebrows are teal and SENTENCE CASE — never uppercase [BG25 p.25].
  'eyebrow': 'text-[15px] font-bold leading-[19px] normal-case text-teal',
  'stat': 'font-display text-stat font-bold leading-tight tracking-tight text-sky',
  'pat-container': 'w-full max-w-container mx-auto px-6',
  'pat-card': 'bg-surface border border-border rounded-lg shadow-sm p-6',
  'pat-card-interactive': 'pat-card transition-all duration-200 ease-standard hover:-translate-y-[3px] hover:shadow-lg',
  // [BG25 p.57] 46px height, 30px horizontal padding, 5px radius, sentence case.
  'btn': 'inline-flex items-center justify-center gap-2 h-[46px] px-[30px] rounded-sm normal-case font-sans font-semibold leading-none cursor-pointer transition-colors duration-[120ms] ease-standard border-2',
  'btn-primary': 'btn bg-navy text-white border-navy hover:bg-sky hover:border-sky',
  'btn-sky': 'btn bg-sky text-white border-sky hover:bg-navy hover:border-navy',
  'btn-outline': 'btn bg-transparent text-navy border-navy hover:bg-navy hover:text-white',
  'btn-ghost': 'btn bg-transparent text-navy border-transparent hover:bg-navy-10',
  'btn-on-dark': 'btn bg-white text-navy border-white hover:bg-sky hover:text-white hover:border-sky',
  'input': 'w-full h-[46px] px-3 rounded-sm border border-field-border bg-surface text-body font-sans focus-visible:(outline-none border-sky shadow-focus)',
  'badge': 'inline-flex items-center gap-1 px-3 py-1 rounded-pill text-xs font-semibold',
};

export const shortcuts = shortcutsMap;

/** UnoCSS preset carrying the Patterson theme + brand shortcuts. */
export function pattersonPreset() {
  return { name: 'patterson', theme, shortcuts: shortcutsMap };
}

export default pattersonPreset;
