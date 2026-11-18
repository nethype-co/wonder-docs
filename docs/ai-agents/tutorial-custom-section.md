---
title: "Tutorial: Build a Custom Section with AI"
sidebar_label: "Tutorial: Custom Section"
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: Build a Custom Section with AI

In this tutorial you'll add a **Trust badges** section to a Wonder store (three badges with an icon, a title and a short text) with the help of an AI assistant. It takes about 10 minutes. You'll see the whole loop: the assistant gets a Wonder blueprint, adapts it, **fails validation on the first try**, fixes it and hands you a file that's ready to paste.

**You need:** an AI assistant with the Wonder MCP server or the Wonder AI Toolkit ([setup](./setup)), and access to your Shopify admin.

:::info Why not just ask any AI for a section?
Sections written from scratch usually break Wonder's section spacing, restyle other parts of the theme through unscoped CSS, or use SCSS that Shopify can't read. The Wonder tools prevent all three.
:::

---

## Step 1: Duplicate your theme

Never test on the live theme. In Shopify admin go to **Online Store → Themes**, open the **⋯** menu next to your current theme and choose **Duplicate**. Work on the copy.

## Step 2: Ask for the section

Pick how you work:

<Tabs groupId="workflow" queryString>
<TabItem value="chat" label="AI chat (Claude, ChatGPT…)" default>

Paste this into your assistant:

```text title="Prompt"
Create a custom Wonder section called "Trust badges": a heading and three badges, each with
an icon image, a title and a short text, on a light background. I want to control the icon
size and the background color in the theme editor. Validate it before you give it to me.
```

</TabItem>
<TabItem value="agent" label="Coding agent (Claude Code, Codex, Cursor…)">

Open your local theme folder (see [Shopify CLI setup](#working-locally-with-shopify-cli) below) and ask:

```text title="Prompt"
Add a custom Wonder section "Trust badges" to this theme: a heading and three badges, each
with an icon image, a title and a short text, on a light background. Icon size and background
color should be settings. Validate it and preview it with shopify theme dev.
```

In Claude Code with the Wonder AI Toolkit you can also start the skill directly:

```text
/wonder-theme:wonder-sections Trust badges: heading + three badges (icon, title, text), icon size and background settings
```

</TabItem>
</Tabs>

## Step 3: Watch the assistant work

A well-behaved assistant goes through three tool calls. You'll see them in the conversation, usually as collapsible "tool call" entries.

**1. `get_section_blueprint`** with `kind: "blocks"` and `handle: "trust-badges"`. The blueprint already contains Wonder's section spacing settings, the Wonder heading style, a scoped stylesheet and a preset, so the section appears under **Add section → Custom**.

**2. `validate_section` on the first draft.** Assistants often slip in SCSS or a global selector. Here is a real result for a first draft:

```text title="validate_section → first draft"
INVALID: 1 error(s), 2 warning(s). Fix the errors and run validate_section again.
- [ERROR] no-scss (line 39): SCSS syntax found ($variables, @mixin/@include or & nesting).
  Wonder sections use plain CSS.
- [WARNING] translation-key-label: 1 setting label(s) use t: translation keys (heading).
- [WARNING] css-unscoped (line 39): Selector "h3" is not scoped to this section and may
  change styles elsewhere in the theme.
```

Each of these would have caused a real problem: Shopify doesn't compile SCSS, `t:` labels show as raw keys after a theme update, and the `h3` rule would change every heading in your store.

**3. `validate_section` again** after the fixes:

```text title="validate_section → final version"
VALID: no errors, 0 warning(s).
```

:::warning If your assistant skips validation
Ask it: *"Run validate_section on the full file and fix every error."* Don't paste a section that hasn't passed.
:::

## Step 4: Get the file

The assistant gives you the complete file, its name, and install steps. This is the validated result from this tutorial. You can use it as is: the copy button is in the top-right corner of the code block.

<details>
<summary><strong>sections/custom-trust-badges.liquid</strong> (182 lines, click to expand)</summary>

```liquid title="sections/custom-trust-badges.liquid"
{%- comment -%}
  Custom section: Trust badges
  Not part of the Wonder theme package. Theme updates do NOT copy this file:
  keep a copy and add it to the new theme version before publishing the update.
{%- endcomment -%}

<style>
  [data-section-id="{{ section.id }}"] {
    --section-gap-top: {{ section.settings.margin_top }}px;
    --section-gap-bottom: {{ section.settings.margin_bottom }}px;
    {%- if section.settings.show_mobile_spacing %}
      --section-gap-top-mobile: {{ section.settings.margin_top_mobile }}px;
      --section-gap-bottom-mobile: {{ section.settings.margin_bottom_mobile }}px;
    {%- endif %}
  }
  [data-section-id="{{ section.id }}"] .custom-trust-badges {
    --custom-trust-badges-icon: {{ section.settings.icon_size }}px;
    background: {{ section.settings.background }};
  }
</style>

<div class="custom-trust-badges" data-section-id="{{ section.id }}" style="--custom-trust-badges-columns: {{ section.settings.columns_desktop }};">
  {%- if section.settings.heading != blank -%}
    {% render 'headline', title: section.settings.heading %}
  {%- endif -%}
  <ul class="custom-trust-badges__list" role="list">
    {%- for block in section.blocks -%}
      <li class="custom-trust-badges__item" {{ block.shopify_attributes }}>
        {%- if block.settings.image != blank -%}
          {{ block.settings.image | image_url: width: 160 | image_tag: loading: 'lazy', class: 'custom-trust-badges__image', widths: '80, 160' }}
        {%- endif -%}
        {%- if block.settings.title != blank -%}
          <h3 class="custom-trust-badges__title">{{ block.settings.title | escape }}</h3>
        {%- endif -%}
        {%- if block.settings.text != blank -%}
          <div class="custom-trust-badges__text">{{ block.settings.text }}</div>
        {%- endif -%}
      </li>
    {%- endfor -%}
  </ul>
</div>

{% stylesheet %}
.custom-trust-badges__list { display: grid; gap: 24px; grid-template-columns: 1fr; list-style: none; margin: 0; padding: 0; }
@media (min-width: 900px) {
  .custom-trust-badges__list { grid-template-columns: repeat(var(--custom-trust-badges-columns, 3), minmax(0, 1fr)); }
}
.custom-trust-badges { padding: 32px 20px; }
.custom-trust-badges__item { text-align: center; }
.custom-trust-badges__image { width: var(--custom-trust-badges-icon, 48px); height: var(--custom-trust-badges-icon, 48px); object-fit: contain; margin: 0 auto; display: block; }
.custom-trust-badges__title { margin: 12px 0 4px; font-size: 16px; }
{% endstylesheet %}

{% schema %}
{
  "name": "Trust badges",
  "tag": "section",
  "class": "wt-shopify-section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Why shop with us"
    },
    {
      "type": "range",
      "id": "columns_desktop",
      "min": 1,
      "max": 6,
      "step": 1,
      "default": 3,
      "label": "Columns on desktop"
    },
    {
      "type": "range",
      "id": "icon_size",
      "min": 24,
      "max": 96,
      "step": 4,
      "default": 48,
      "unit": "px",
      "label": "Icon size"
    },
    {
      "type": "color",
      "id": "background",
      "label": "Background",
      "default": "#F5F5F0"
    },
    {
      "type": "header",
      "content": "Section spacing"
    },
    {
      "type": "range",
      "id": "margin_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "default": 20,
      "unit": "px",
      "label": "Top spacing"
    },
    {
      "type": "range",
      "id": "margin_bottom",
      "min": 0,
      "max": 100,
      "step": 4,
      "default": 20,
      "unit": "px",
      "label": "Bottom spacing"
    },
    {
      "type": "checkbox",
      "id": "show_mobile_spacing",
      "label": "Custom spacing on mobile",
      "default": false
    },
    {
      "type": "range",
      "id": "margin_top_mobile",
      "min": 0,
      "max": 100,
      "step": 2,
      "default": 20,
      "unit": "px",
      "label": "Top spacing (mobile)",
      "visible_if": "{{ section.settings.show_mobile_spacing }}"
    },
    {
      "type": "range",
      "id": "margin_bottom_mobile",
      "min": 0,
      "max": 100,
      "step": 2,
      "default": 20,
      "unit": "px",
      "label": "Bottom spacing (mobile)",
      "visible_if": "{{ section.settings.show_mobile_spacing }}"
    }
  ],
  "max_blocks": 12,
  "blocks": [
    {
      "type": "item",
      "name": "Item",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "text",
          "id": "title",
          "label": "Title",
          "default": "Item title"
        },
        {
          "type": "richtext",
          "id": "text",
          "label": "Text"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Trust badges",
      "category": "Custom",
      "blocks": [
        { "type": "item", "settings": { "title": "Free shipping", "text": "<p>On orders over $50</p>" } },
        { "type": "item", "settings": { "title": "30-day returns", "text": "<p>No questions asked</p>" } },
        { "type": "item", "settings": { "title": "Secure checkout", "text": "<p>SSL-encrypted payments</p>" } }
      ]
    }
  ]
}
{% endschema %}

```

</details>

What makes this section Wonder-native and update-safe:

| In the code | Why |
|---|---|
| File name `custom-trust-badges.liquid` | The `custom-` prefix can't clash with a Wonder file, now or in future versions |
| `data-section-id="{{ section.id }}"` and the `margin_*` settings | Wonder's section spacing hooks onto them, so the section lines up with the rest of the page |
| `{% render 'headline' %}` | The heading uses Wonder's own heading style and animation |
| All CSS under `.custom-trust-badges` | The section can't restyle anything else in the store |
| Setting values in `<style>`, not in `{% stylesheet %}` | Shopify doesn't render Liquid inside `{% stylesheet %}` |
| Literal labels (`"Icon size"`) | `t:` translation keys point to Wonder's locale files, which are replaced on update |
| `presets` | Makes the section show up under **Add section** |

## Step 5: Install it

<Tabs groupId="workflow" queryString>
<TabItem value="chat" label="Shopify admin" default>

1. In Shopify admin go to **Online Store → Themes**, and on your **theme copy** click **⋯ → Edit code**.
2. In the **Sections** folder click **Add a new section**, name it `custom-trust-badges` and click **Done**.
3. Replace everything in the new file with the code from step 4 and click **Save**.
4. Click **Customize** on the theme copy, then **Add section** and find **Trust badges** under **Custom**.
5. Upload an icon for each badge and adjust the heading, icon size and background.

</TabItem>
<TabItem value="agent" label="Shopify CLI">

The agent writes the file to `sections/custom-trust-badges.liquid` in your theme folder. Preview it locally:

```bash
shopify theme dev --store your-store.myshopify.com
```

Open the local preview, add **Trust badges** in the theme editor and check it on desktop and mobile. When you're happy, upload it to your **theme copy** (never to the live theme):

```bash
shopify theme push --store your-store.myshopify.com --theme <copy-id> --only sections/custom-trust-badges.liquid
```

Find the copy's ID with `shopify theme list --store your-store.myshopify.com`.

</TabItem>
</Tabs>

## Step 6: Check and publish

Preview the theme copy on desktop and mobile. When it looks right, publish the copy from **Online Store → Themes**.

:::danger Keep a copy of the file
Theme updates **don't copy custom section files** to the new Wonder version. Save `custom-trust-badges.liquid` somewhere safe and add it to the new theme copy before you publish an update. The [update tutorial](./tutorial-update-theme) shows how to do this automatically.
:::

---

## Working locally with Shopify CLI

For more than a few changes, developers usually work in a local theme folder with a coding agent:

1. Install [Shopify CLI](https://shopify.dev/docs/api/shopify-cli).
2. Duplicate the live theme in Shopify admin and download the copy:

```bash
shopify theme list --store your-store.myshopify.com
shopify theme pull --store your-store.myshopify.com --theme <copy-id> --path my-wonder-store
```

3. Open `my-wonder-store` in your coding agent. If your agent reads `AGENTS.md` files and you're not using the plugin, copy [`AGENTS.md`](https://github.com/nethype-co/wonder-ai-toolkit/blob/main/AGENTS.md) from the Wonder AI Toolkit into the folder, but **don't push it to the theme**: Shopify rejects unknown files at the theme root.

Developers without an admin account can sign in with a password from Shopify's **Theme Access** app (`--password`).

## More ideas to try

```text
Add a custom Wonder section with an FAQ accordion, using the Wonder heading style. Each question is a block.
```

```text
Create a "Shop the look" Wonder section: one large image on the left and up to four product cards on the right.
```

```text
Make a logo strip section for press mentions (grayscale logos, color on hover) that matches Wonder's spacing.
```

```text
In Theme settings → Custom CSS, make the Wonder announcement bar text bold on mobile only. Keep the selector scoped.
```

The last one isn't a section at all: small style changes belong in **Theme settings → Custom CSS**, which carries over on theme updates. A good assistant will suggest that itself.
