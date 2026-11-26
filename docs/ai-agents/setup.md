---
title: "Install the Wonder AI Toolkit & MCP Server"
sidebar_label: "Setup"
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install the Wonder AI Toolkit & MCP Server

Connect your AI assistant to Wonder in a couple of minutes. Everything is free, and you don't need an account or an API key.

**Server address** (Streamable HTTP, no authentication):

```text
https://mcp.wonder-theme.com/mcp
```

- **Using a coding agent** (Claude Code, Codex, Cursor, VS Code)? Install the **Wonder AI Toolkit** plugin. It adds the server plus six ready-made workflows, including the [theme update workflow](./tutorial-update-theme) and [previews of changes on your own store](./tutorial-preview-custom-section).
- **Using an AI chat** (Claude, ChatGPT) or another tool? Add the **MCP server** on its own.

Not sure what the difference is? See the [overview](./).

---

## Coding agents: install the Wonder AI Toolkit

<Tabs groupId="ai-client" queryString>
<TabItem value="claude-code" label="Claude Code" default>

In your terminal:

```bash
claude plugin marketplace add nethype-co/wonder-ai-toolkit
claude plugin install wonder-theme@nethype
```

Or inside a Claude Code session:

```text
/plugin marketplace add nethype-co/wonder-ai-toolkit
/plugin install wonder-theme@nethype
```

Restart Claude Code, then run `/mcp`: **wonder** should be listed as connected.

Plugins from this marketplace don't update automatically. To get the latest version:

```bash
claude plugin update wonder-theme@nethype
```

</TabItem>
<TabItem value="codex" label="Codex">

Add the Wonder marketplace:

```bash
codex plugin marketplace add nethype-co/wonder-ai-toolkit
```

Then install the plugin:

- **CLI:** start `codex`, type `/plugins`, open the **Nethype (Wonder theme)** marketplace and install **Wonder Theme**. Start a new session.
- **Codex app:** open the **Plugins** directory, choose **Nethype (Wonder theme)** and install **Wonder Theme**.

</TabItem>
<TabItem value="cursor" label="Cursor">

1. Open **Customize** in the sidebar (or **Settings → Plugins**).
2. Add a plugin **from a GitHub repository** and paste:

```text
https://github.com/nethype-co/wonder-ai-toolkit
```

3. Choose whether to install it for this project or for all projects.

On Cursor Enterprise, importing plugins may be turned off by your admin. In that case, [add the MCP server](#ai-chats-and-other-tools-add-the-mcp-server) on its own instead.

</TabItem>
<TabItem value="vscode" label="VS Code (Copilot)">

1. Turn on agent plugins: open Settings and enable **`chat.plugins.enabled`**.
2. Open the Command Palette (<kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>) and run **Chat: Install Plugin from Source**.
3. Paste the repository URL:

```text
https://github.com/nethype-co/wonder-ai-toolkit
```

Plugins installed from a Git repository can be uninstalled but not disabled.

</TabItem>
</Tabs>

:::tip AGENTS.md for other coding agents
If your agent reads `AGENTS.md` files but doesn't support plugins, [add the MCP server](#ai-chats-and-other-tools-add-the-mcp-server) and copy [`AGENTS.md`](https://github.com/nethype-co/wonder-ai-toolkit/blob/main/AGENTS.md) into your working folder. **Don't push it to the theme:** Shopify rejects unknown files at the theme root.
:::

---

## AI chats and other tools: add the MCP server

If you use both the Wonder AI Toolkit plugin and the Wonder Theme connector, you'll see one set of Wonder tools, not two. That's expected.

<Tabs groupId="mcp-client" queryString>
<TabItem value="claude" label="Claude (web & desktop)" default>

**Pro and Max plans**

1. Open **Customize → Connectors**.
2. Click **+ Add → Add custom connector**.
3. Name: `Wonder Theme`, URL: `https://mcp.wonder-theme.com/mcp`.
4. Under **Authentication**, choose **No sign in**, then click **Add**.
5. In a chat, open the **+** menu → **Connectors** and make sure **Wonder Theme** is on.

**Team and Enterprise plans:** an owner adds the connector once under **Organization settings → Connectors → Add → Custom → Web**. Members then click **Connect** in **Customize → Connectors**.

On the Free plan you can add one custom connector. The same connectors work in Claude Desktop.

</TabItem>
<TabItem value="chatgpt" label="ChatGPT">

1. Go to **Plugins** ([chatgpt.com/plugins](https://chatgpt.com/plugins)) and click **+ → Add custom MCP server**.
2. Name: `Wonder Theme`. Connection URL: `https://mcp.wonder-theme.com/mcp`.
3. Authentication: **No authentication**. Confirm the notice and click **Create as a plugin**.
4. Install the plugin. In a new chat, type `@` and choose **Wonder Theme**.

Custom MCP servers are available on the web (not in the mobile apps), on Pro, Business and Enterprise/Edu plans. In a Business or Enterprise workspace, an admin may need to add the server for you. All Wonder tools are read-only, so ChatGPT doesn't ask for confirmation when it uses them.

</TabItem>
<TabItem value="claude-code-mcp" label="Claude Code (server only)">

```bash
claude mcp add --transport http --scope user wonder https://mcp.wonder-theme.com/mcp
```

`--scope user` makes it available in all your projects. To share it with your team through the repository instead, use `--scope project` (it's saved to `.mcp.json`):

```json title=".mcp.json"
{
  "mcpServers": {
    "wonder": {
      "type": "http",
      "url": "https://mcp.wonder-theme.com/mcp"
    }
  }
}
```

</TabItem>
<TabItem value="codex-mcp" label="Codex (server only)">

```bash
codex mcp add wonder --url https://mcp.wonder-theme.com/mcp
```

Or add it to `~/.codex/config.toml` (shared by the Codex CLI, IDE extension and app):

```toml title="~/.codex/config.toml"
[mcp_servers.wonder]
url = "https://mcp.wonder-theme.com/mcp"
```

</TabItem>
<TabItem value="cursor-mcp" label="Cursor (server only)">

[**Add to Cursor**](cursor://anysphere.cursor-deeplink/mcp/install?name=wonder&config=eyJ1cmwiOiJodHRwczovL21jcC53b25kZXItdGhlbWUuY29tL21jcCJ9) (opens Cursor), or add it to `~/.cursor/mcp.json` for all projects (`.cursor/mcp.json` for one project):

```json title="~/.cursor/mcp.json"
{
  "mcpServers": {
    "wonder": {
      "url": "https://mcp.wonder-theme.com/mcp"
    }
  }
}
```

</TabItem>
<TabItem value="vscode-mcp" label="VS Code (server only)">

Command Palette → **MCP: Add Server** → **HTTP** → paste `https://mcp.wonder-theme.com/mcp` → name it `wonder`.

Or add it to `~/.copilot/mcp-config.json`:

```json title="~/.copilot/mcp-config.json"
{
  "mcpServers": {
    "wonder": {
      "type": "http",
      "url": "https://mcp.wonder-theme.com/mcp",
      "tools": ["*"]
    }
  }
}
```

</TabItem>
<TabItem value="gemini" label="Gemini CLI">

```bash
gemini mcp add --transport http --scope user wonder https://mcp.wonder-theme.com/mcp
```

Or add it to `~/.gemini/settings.json`. Use `httpUrl` (not `url`, which means the older SSE transport):

```json title="~/.gemini/settings.json"
{
  "mcpServers": {
    "wonder": {
      "httpUrl": "https://mcp.wonder-theme.com/mcp"
    }
  }
}
```

**Antigravity** (CLI and IDE) uses `~/.gemini/config/mcp_config.json` with `serverUrl` instead:

```json title="~/.gemini/config/mcp_config.json"
{
  "mcpServers": {
    "wonder": {
      "serverUrl": "https://mcp.wonder-theme.com/mcp"
    }
  }
}
```

</TabItem>
<TabItem value="windsurf" label="Windsurf / Devin Desktop">

Open the MCP panel (**Customize → MCPs**) and open the raw config file (`mcp_config.json`). Add:

```json title="mcp_config.json"
{
  "mcpServers": {
    "wonder": {
      "serverUrl": "https://mcp.wonder-theme.com/mcp"
    }
  }
}
```

Save, then refresh the MCP panel.

</TabItem>
<TabItem value="other" label="Other">

**Zed:** **Settings → AI → MCP Servers → Add Server → Add Remote Server**, or in `settings.json`:

```json title="settings.json"
{
  "context_servers": {
    "wonder": {
      "url": "https://mcp.wonder-theme.com/mcp"
    }
  }
}
```

**JetBrains AI Assistant:** **Settings → Tools → AI Assistant → Model Context Protocol (MCP) → Add → HTTP**, then paste:

```json
{
  "mcpServers": {
    "wonder": {
      "url": "https://mcp.wonder-theme.com/mcp"
    }
  }
}
```

**Any other client:** add a remote MCP server with the URL `https://mcp.wonder-theme.com/mcp`, transport **Streamable HTTP** (sometimes just "HTTP"), and **no authentication**.

</TabItem>
</Tabs>

---

## Check that it works

Ask your assistant:

```text
Which Wonder tools do you have? What is the latest Wonder version?
```

It should list twelve tools (`search_docs`, `get_known_issues`, `get_changelog`, `list_sections`, `get_section_schema`, `get_component_api`, `get_conventions`, `get_section_blueprint`, `validate_section`, `find_selector`, `validate_css`, `plan_update`) and name the current Wonder release. Then try one of the [prompts that work well](./using-wonder-mcp#prompts-that-work-well).

## Troubleshooting

**The assistant doesn't see any Wonder tools**
- Restart the app or start a new session after installing. Most clients load MCP servers at startup.
- Check the URL ends in `/mcp`. Opening `https://mcp.wonder-theme.com/mcp` in a browser only shows a short info page: that's expected, because the server talks to AI clients.
- In Claude and ChatGPT, make sure the connector or plugin is turned on for the current chat.
- In Claude Code, run `/mcp` to see the connection status. A server in `.mcp.json` stays at *Pending approval* until you trust the folder.

**The client asks you to sign in**
Choose **No sign in** / **No authentication** when adding the server. The Wonder server doesn't use accounts.

**Your company blocks custom servers**
Team and Enterprise plans often restrict custom MCP servers. Ask your admin to add `https://mcp.wonder-theme.com/mcp`, or to allow it.

**"Too many requests"**
The server allows a generous number of requests per minute. Wait a minute and try again.

Still stuck? [Contact Wonder support](/contact) and tell us which assistant you use.

---

## Privacy

The Wonder tools never access your Shopify store. Code you ask the server to check is not stored. See [Privacy & data](./privacy) for details.
