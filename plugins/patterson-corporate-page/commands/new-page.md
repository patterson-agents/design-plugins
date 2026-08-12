---
description: Scaffold a Patterson-branded web page from the corporate page shell
argument-hint: [page purpose]
---

# new page

The user request: $ARGUMENTS

Follow the `corporate-page-template` skill from the `patterson-corporate-page` plugin:

1. Copy `${CLAUDE_PLUGIN_ROOT}/ds` into the project as `./patterson` (merge if it already exists).
2. Start from `patterson/templates/corporate-page/index.html`.
3. Adapt the content to the request above, keeping structure, class names, tokens, logos, and the Patterson voice intact (no emoji, no off-palette colors).
4. Tell the user which files you produced and how to open/preview them.
