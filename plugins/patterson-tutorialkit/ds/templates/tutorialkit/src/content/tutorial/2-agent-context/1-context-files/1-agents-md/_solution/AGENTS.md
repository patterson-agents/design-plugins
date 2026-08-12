# Patterson Design System

Brand tokens, templates, and UI kits for Patterson Companies.
Deliverables are static HTML + React; no bundler.

## Setup commands

```sh
npm install
npm run dev     # serves the kit previews on :4321
```

## Code style

- Reference tokens (`var(--pat-sky)`), never raw hex in components.
- Components live in `ui_kits/`; templates in `templates/`.
- Two-space indentation; semantic HTML first.
