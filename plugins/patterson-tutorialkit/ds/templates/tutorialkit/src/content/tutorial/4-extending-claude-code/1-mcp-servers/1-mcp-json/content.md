---
type: lesson
title: Wire up an MCP server
focus: /mcp.json
previews: false
terminal:
  panels: ['terminal']
  activePanel: 0
---

# Wire up an MCP server

**MCP (Model Context Protocol)** servers give an agent live tools — query a
database, search a docs index, call an internal API. Claude Code reads them from
a `.mcp.json` at the project root (shown here as `mcp.json`): each entry names a
server and says how to launch it.

Two details trip everyone up:

- Every server needs a **`command`** plus an **`args` array** — one string per
  argument, not one long string.
- Paths to files a *plugin* bundles must use **`${CLAUDE_PLUGIN_ROOT}`**, because
  installed plugins run from a cache directory, not your repo.

:::warn
The starter file has a trailing comma (invalid JSON), a missing `args` array, and
a hardcoded path. Agents fail silently on all three.
:::

## Your task

Fix `mcp.json` so the `patterson-assets` server launches:

```json title="mcp.json"
{
  "mcpServers": {
    "patterson-assets": {
      "command": "node",
      "args": ["${CLAUDE_PLUGIN_ROOT}/servers/assets.mjs"],
      "env": { "ASSET_INDEX": "${CLAUDE_PLUGIN_ROOT}/data/index.json" }
    }
  }
}
```

```sh
node validate.mjs
```

:::tip
In a skill that calls MCP tools, always use the fully-qualified name —
`patterson-assets:search_assets` — so the agent finds the right server.
:::
