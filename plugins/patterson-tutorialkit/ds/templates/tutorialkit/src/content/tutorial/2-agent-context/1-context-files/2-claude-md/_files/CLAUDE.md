# CLAUDE.md

## Project facts

- Design system for Patterson Companies (dental + veterinary).
- Static HTML + React, no bundler; tokens live in tokens/colors.css.
- Brand: navy #003767, sky #00A8E1.

## Conventions

- Reference tokens, never raw hex, in components.
- New templates go in templates/<slug>/.

## Deployment

Deployment procedure:
Step 1. Run the test suite with npm run check.
Step 2. Build the static bundle with npm run build.
Step 3. Verify the bundle size is under 2 MB.
Step 4. Copy dist/ to the staging bucket.
Step 5. Smoke-test staging on Chrome and Safari.
Step 6. Ask #design-systems for sign-off.
Step 7. Promote staging to production.
Step 8. Invalidate the CDN cache.
Step 9. Tag the release in git.
Step 10. Announce in #releases.
