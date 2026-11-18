---
title: "AI Tools for Wonder"
sidebar_label: "Overview"
sidebar_position: 0
---

# AI Tools for Wonder

Wonder comes with free tools that make AI assistants (Claude, ChatGPT, Codex, Cursor, GitHub Copilot and others) work properly with your Wonder store. Once connected, your assistant can:

- answer questions from the **official Wonder documentation**, with links to the articles it used;
- find the **right section or setting** before writing code, with the labels you see in the theme editor;
- check **known issues** for your Wonder version, with the workaround and the version that fixes them;
- build **custom sections** that look native to Wonder, survive theme updates and pass validation before you paste them into your store;
- write **JavaScript on Wonder's documented events and cart drawer API**, so it keeps working after updates;
- **update a customised store** to a new Wonder version: find exactly which lines you changed, merge them into the new theme copy and flag real conflicts;
- tell you **what changed in which version**, straight from the release notes.

No account is needed and nothing is installed in your store.

---

## Two ways to connect

| | **Wonder MCP server** | **Wonder AI Toolkit** (plugin) |
|---|---|---|
| What it is | A hosted server at `https://mcp.wonder-theme.com/mcp` | A plugin that bundles the MCP server with five ready-made workflows (skills) |
| Works with | Any assistant that supports remote MCP servers: Claude (web, desktop), ChatGPT, Cursor, VS Code, Windsurf, Gemini CLI… | Claude Code, Codex, Cursor, VS Code (Copilot) |
| Best for | Merchants asking questions and getting ready-to-paste code | Developers and agencies working on theme files |
| Includes the theme update workflow | Planning only | Yes: find, merge and check changes |

Not sure? Pick the **plugin** if you use a coding agent, and the **MCP server** for everything else.

**[Set it up →](./setup)**

---

## Articles

- [**Install the Wonder AI Toolkit & MCP server**](./setup): step-by-step setup for every supported assistant
- [**Using the Wonder MCP server**](./using-wonder-mcp): the tools, the skills and prompts that work well
- [**Tutorial: build a custom section with AI**](./tutorial-custom-section): from an idea to a validated section in your store
- [**Tutorial: update a customised Wonder theme**](./tutorial-update-theme): move your code changes to a new Wonder version without losing them
- [**Privacy & data**](./privacy): what the Wonder AI tools receive and how long it's kept

---

## What the AI tools don't do

- **They don't access your store.** The server never asks for your Shopify login, store data or customer data. Your assistant shows you the code; you (or your assistant, in a local theme folder) put it in place.
- **They don't run an AI model.** Your own assistant writes the code. The Wonder server only provides documentation, known issues, starting code and rule-based checks, so every response is instant and costs you nothing.
- **They don't replace testing.** Always try changes on an unpublished copy of your theme first (Online Store → Themes → **⋯ → Duplicate**).

:::tip Shopify questions
For general Shopify, Liquid and API questions, add Shopify's own [AI Toolkit](https://shopify.dev/docs/api/ai-toolkit) next to Wonder's. The two work well together.
:::
