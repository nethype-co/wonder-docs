---
title: "Privacy & Data: Wonder AI Tools"
sidebar_label: "Privacy & Data"
sidebar_position: 6
---

# Privacy & Data: Wonder AI Tools

This notice explains what data the **Wonder MCP server** (`mcp.wonder-theme.com`) and the **Wonder AI Toolkit** plugin process, why, and for how long. It supplements the [Nethype Privacy Policy](https://www.nethype.co/privacy-policy), which applies in full.

*Last updated: November 18, 2026*

---

## In short

- No account is needed, and we never get access to your Shopify store, store data or customer data.
- Section code you ask us to check is validated in memory and **is not stored or logged**.
- Theme files on your computer are **never uploaded**. When you update your theme, the comparison runs locally.
- Our server **doesn't use AI models** and doesn't send your data to any AI provider.
- Usage statistics are kept for up to **90 days** and contain no IP address. Technical request logs are kept for up to **7 days**.

---

## Controller

Nethype Sp. z o.o., ul. Mogilska 35, 31-545 Kraków, Poland (KRS 0001042291, NIP PL6793269650, REGON 525615910).
Privacy contact: [info@nethype.co](mailto:info@nethype.co), or by post to the address above.

## Data we receive

If you connect an AI assistant (for example Claude, ChatGPT, Codex or Cursor) to the Wonder MCP server, directly or through the Wonder AI Toolkit plugin, your assistant sends us the requests it makes to the server's tools. Depending on the tool, a request contains:

| Tool | What it sends |
|---|---|
| `search_docs`, `get_known_issues` | Your search text or a description of the problem, and the Wonder version |
| `get_changelog` | Wonder versions and search text |
| `get_section_blueprint` | The kind of section and its short name |
| `validate_section` | The code of the theme section you ask it to check |
| `plan_update` | Wonder versions and the **names (paths)** of theme files you changed, for example `sections/header.liquid`, **never their contents** |

When you update your theme, the toolkit's comparison script runs on your computer and only **downloads** fingerprints (short hashes) of the original Wonder release from us. It doesn't send your files.

Each request also includes technical data: the IP address, the name and version of the AI client, and the time of the request.

### What we don't receive

- No access to your Shopify store, store data or customer data.
- No account, name or email address. The tools work without registration.
- No cookies. The Wonder MCP server and plugin don't set cookies.

### Your AI assistant

Your AI assistant is provided by a third party (for example Anthropic, OpenAI, Cursor or GitHub). That provider processes your conversations under its own terms and privacy policy. Our server doesn't send your data to any AI provider and doesn't use AI models.

## Purposes and legal bases (GDPR)

- **Providing the Wonder AI tools** (answering tool requests): Art. 6(1)(f) GDPR, our legitimate interest in offering support tools to users of our theme.
- **Security and abuse prevention** (rate limiting, debugging errors): Art. 6(1)(f) GDPR.
- **Usage statistics** (which tools are used, which documentation topics are missing, which checks fail most often), to improve the theme, its documentation and the tools: Art. 6(1)(f) GDPR.

## Retention

- **Section code** sent for checking is not retained. It is discarded when the request ends.
- **Usage statistics** are kept for up to 90 days: tool name, AI client name and version, theme version, search text (shortened to 120 characters), names of changed theme files when planning an update, number of results, identifiers of failed checks, and response time. These records don't include the IP address or section code.
- **Technical request logs**, which may include the IP address, are kept for up to 7 days.

## Recipients

Cloudflare, Inc. hosts the Wonder MCP server, including its request logs and usage statistics, as our processor. Transfers outside the EEA are covered as described in the [Nethype Privacy Policy](https://www.nethype.co/privacy-policy). Access to the usage statistics is limited to authorised Nethype staff.

## Automated decision-making

None. The server's checks are rule-based code checks, not decisions about people.

## Your rights

You have the rights described in the [Nethype Privacy Policy](https://www.nethype.co/privacy-policy), including access, rectification, erasure, restriction, objection and the right to lodge a complaint with a supervisory authority (in Poland, the President of the Personal Data Protection Office, UODO). Usage statistics contain no IP address or account, so we generally can't link them to a person.

## Changes

If the Wonder AI tools change, for example if accounts are added, we'll update this notice and the date above.
