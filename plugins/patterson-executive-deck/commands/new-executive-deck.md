---
description: Scaffold a Patterson executive-briefing deck from the official template
argument-hint: [topic or brief]
---

# new executive deck

The user request: $ARGUMENTS

Follow the `executive-deck-template` skill from the `patterson-executive-deck` plugin:

1. Copy `${CLAUDE_PLUGIN_ROOT}/ds` into the project as `./patterson` (merge if it already exists).
2. Start from `patterson/templates/executive-deck/index.html`.
3. Adapt the content to the request above, keeping structure, class names, tokens, logos, and the Patterson voice intact (no emoji, no off-palette colors).
4. Tell the user which files you produced and how to open/preview them.
