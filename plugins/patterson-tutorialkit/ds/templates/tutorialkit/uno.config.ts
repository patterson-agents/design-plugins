import { defineConfig } from '@tutorialkit/theme';

// TutorialKit renders its shell with UnoCSS utility classes (sizing, icons,
// layout). This config wires UnoCSS to the TutorialKit theme preset so those
// classes are generated. Visual branding (the Patterson palette) is handled
// separately by theme.css at the project root — leave that to the tokens.
export default defineConfig({
  // Add UnoCSS overrides here if needed: https://unocss.dev/guide/config-file
});
