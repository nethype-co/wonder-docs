---
title: "Using the Wonder MCP Server"
sidebar_label: "Using the MCP Server"
sidebar_position: 2
---

# Using the Wonder MCP Server

Once the Wonder MCP server is [connected](./setup), you don't call its tools yourself. You ask your assistant in plain words, and it decides which Wonder tool to use. This article explains what each tool does, so you know what to ask for and what a good answer looks like.

---

## Prompts that work well

Copy one of these into your assistant to try it out. Mentioning **Wonder** and your **theme version** helps the assistant pick the right tool.

```text title="Find a setting"
In the Wonder theme, how do I show color swatches on product cards? Link the docs you used.
```

```text title="Something looks wrong"
My store runs Wonder 2.5.1. The theme editor freezes after I move the Scrolling text banner. Is this a known issue?
```

```text title="Build a section"
Create a custom Wonder section with three trust badges (icon, title, short text) on a light background. Validate it before you give it to me.
```

```text title="Before updating"
I'm on Wonder 2.4.0. What do I get by updating to the latest version? Summarise the highlights.
```

```text title="Developer question"
How do I open the Wonder cart drawer from my own JavaScript after adding a product with the Ajax API?
```

:::tip Where to find your Wonder version
Shopify admin → **Online Store → Themes**. The version is shown under the theme name.
:::

---

## The tools

All tools are **read-only**. They never change your store, and they never generate code with AI: your assistant writes the code, and the Wonder tools give it the right knowledge and check the result.

| Tool | What your assistant uses it for |
|---|---|
| `search_docs` | Searches this documentation and returns the matching passages with links |
| `get_known_issues` | Known bugs per Wonder version, the workaround, and the version that fixes them |
| `get_changelog` | Release notes: what changed in a version, between two versions, or since when a feature exists |
| `get_section_blueprint` | Starting code for a new custom section that follows Wonder's spacing, headings and naming |
| `validate_section` | Checks a section file against Shopify's schema rules and Wonder conventions |
| `plan_update` | Turns a list of changed theme files into an update plan: copy, copy over or merge |

### search_docs

Answers how-to questions from [support.wonder-theme.com](https://support.wonder-theme.com), including the [developer reference](/developer) (JavaScript events, cart drawer API, CSS variables, web components). A good answer **links the articles it used**. If yours doesn't, ask: *"Which Wonder docs did you use?"*

### get_known_issues

The assistant should call this first when you report a problem. Here is a real response for a store on an older version:

```text title="get_known_issues → response (excerpt)"
Latest Wonder release: 2.5.2.

## Theme editor freezes after moving Scrolling text banner / Scrolling icon with text [FIXED in 2.5.2]
Affects: earlier – 2.5.1
Symptom: Reordering homepage sections a few times freezes the theme editor. Closing and
reopening the editor resets it. The live storefront is not affected.
Workaround: Update to 2.5.2 or later. On older versions, reload the editor after reordering
these sections.
```

### get_changelog

Answers *"what's new"*, *"what do I get by updating from 2.4.0"* and *"since which version does Wonder have Quick Buy?"*. It reads the same release notes as our [Changelog](/changelog).

### get_section_blueprint and validate_section

Used together whenever you ask for a new section. The blueprint gives the assistant a starting point that already handles Wonder's section spacing, heading style and update-safe file naming (`sections/custom-<name>.liquid`). The validator then checks the finished file. A first draft often fails, which is exactly why the check exists:

```text title="validate_section → response for a first draft"
INVALID: 1 error(s), 2 warning(s). Fix the errors and run validate_section again.
- [ERROR] no-scss (line 39): SCSS syntax found ($variables, @mixin/@include or & nesting).
  Wonder sections use plain CSS.
- [WARNING] translation-key-label: 1 setting label(s) use t: translation keys (heading).
  ... in a NEW custom section use literal labels, because locale files are replaced on theme update.
- [WARNING] css-unscoped (line 39): Selector "h3" is not scoped to this section and may
  change styles elsewhere in the theme. Prefix it with your section class (e.g. .custom-<name>).
```

The assistant fixes the problems and validates again until it gets `VALID`. See the full walkthrough in [Tutorial: build a custom section with AI](./tutorial-custom-section).

### plan_update

Used when you move a customised theme to a new Wonder version. It receives only the **names** of the files you changed (never their contents) and tells the assistant which ones to copy, which to copy over and which need a merge. See [Tutorial: update a customised Wonder theme](./tutorial-update-theme).

---

## Skills (Wonder AI Toolkit only)

If you installed the [Wonder AI Toolkit](./setup) plugin, your coding agent also gets four skills: step-by-step workflows that use the tools in the right order. They load on their own when your request matches, so you usually don't need to call them.

| Skill | Starts when you… |
|---|---|
| `wonder-setup` | start working on a Wonder store, or ask how to set things up |
| `wonder-sections` | ask for a new section or a change to a custom section |
| `wonder-troubleshooting` | report that something looks broken, misaligned or missing |
| `wonder-update` | want to update Wonder, or ask what you lose by updating |

In Claude Code you can also run a skill directly:

```text
/wonder-theme:wonder-sections Testimonials slider with star ratings and customer photos
```

## Ready-made prompts (MCP server)

The server also offers two guided prompts. In clients that support MCP prompts they appear in the prompt or slash-command menu (for example, in Claude Code with the server added as `wonder`: `/mcp__wonder__new-section` and `/mcp__wonder__debug-issue`):

- **new-section**: blueprint → adapt → validate → ready-to-paste file with install steps;
- **debug-issue**: checks known issues for your version and the docs before suggesting any change.

---

## Rules the assistant follows

The Wonder tools teach your assistant these rules. If an answer breaks one of them, point it out:

- **Plain CSS only.** No SCSS or build tools.
- **The least invasive change wins:** a theme setting first, then **Theme settings → Custom CSS**, then a new custom section, and only as a last resort an edit to a Wonder file.
- **Theme updates don't copy file edits.** Theme settings and **Theme settings → Custom CSS** carry over when you update Wonder. Edited theme files, `assets/custom.css`, `assets/custom.js` and custom sections don't: keep a copy.
- **Work on a copy.** Test on an unpublished duplicate of your theme, never on the live theme.

## If the assistant doesn't use the Wonder tools

- Make sure the server is connected: ask *"Which Wonder tools do you have?"*. It should list the six tools above. If not, see [Troubleshooting](./setup#troubleshooting).
- Mention **Wonder** in your question. Without it, the assistant may answer from general Shopify knowledge.
- In ChatGPT, turn on the Wonder connector for the conversation (see [setup](./setup)).
