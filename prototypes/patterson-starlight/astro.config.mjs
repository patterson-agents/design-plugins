// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Patterson-branded Starlight docs. Modern Astro 7 (no open Astro CVEs), themed
// entirely through src/styles/patterson.css — the Starlight `--sl-*` custom
// properties are remapped to Patterson brand tokens there.
// https://astro.build/config
export default defineConfig({
  site: 'https://docs.example.patterson.com',
  integrations: [
    starlight({
      title: 'Patterson Docs',
      description:
        'Documentation, guides, and reference for teams building on the Patterson Companies design system.',
      tagline: 'Trusted Expertise. Unrivaled Support.',
      logo: {
        light: './src/assets/patterson-logo-navy.svg',
        dark: './src/assets/patterson-logo-white.svg',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/patterson.css'],
      social: [
        { icon: 'external', label: 'Patterson Companies', href: 'https://www.pattersoncompanies.com' },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagination: true,
      expressiveCode: {
        // Copy button on code frames; Patterson borders/radius come from patterson.css.
        frames: { showCopyToClipboardButton: true },
      },
      // Diátaxis-flavored information architecture (mirrors the patterson-docs plugin).
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Overview', link: '/' },
            { label: 'Getting started', link: '/getting-started/' },
          ],
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
