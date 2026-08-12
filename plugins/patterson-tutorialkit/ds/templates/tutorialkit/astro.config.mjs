import { defineConfig } from 'astro/config';
import tutorialkit from '@tutorialkit/astro';

// Patterson-branded TutorialKit.
// Branding lives in the conventional places TutorialKit reads automatically:
//   - ./theme.css        → the --tk-* Patterson theme (light / dark / dental / veterinary)
//   - ./uno.config.ts    → wires UnoCSS to the TutorialKit theme preset (utility + icon classes)
//   - ./public/logo.svg  → the top-bar wordmark (+ logo-dark.svg for dark mode)
// See https://tutorialkit.dev/reference/configuration and /reference/theming
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [tutorialkit()],
});
