---
title: "Tutorial: Build a Custom Section with AI"
sidebar_label: "Tutorial: Custom Section"
sidebar_position: 3
description: "Build a Wonder-native custom section with your AI assistant, validate it against your Wonder version and preview it on your own store before customers see it."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: Build a Custom Section with AI

In this tutorial you add a **Team** section ("Meet our experts") to your home page with the help of your AI assistant: a photo, name, role and short bio for each person, three per row. It takes about 10 minutes. You'll see the whole loop: the assistant starts from how Wonder builds its own sections, **fails validation on the first try**, fixes it, and puts the result in your store, where you check it before your customers see anything.

There are two ways to do it. The steps are the same; only step 1 and step 3 differ.

| | **AI chat** (Claude, ChatGPT…) | **Coding agent** (Claude Code, Codex, Cursor) |
|---|---|---|
| You connect | the [Wonder MCP server](./setup) | the [Wonder AI Toolkit](./setup) plugin |
| You get | a validated file and install steps | the section on a private **preview copy** of your theme, with a preview link |
| You do | paste the file into a copy of your theme | type one message and log in to Shopify once |

Either way, **your live store stays untouched** until you decide to publish.

:::info Why not just ask any AI for a section?
Sections written from scratch usually break Wonder's section spacing, ignore your Theme settings colours and fonts, restyle other parts of the theme through unscoped CSS, or use SCSS that Shopify can't read. The Wonder tools prevent all of that.
:::

---

## Step 1: Ask for the section

<Tabs groupId="workflow" queryString>
<TabItem value="chat" label="AI chat" default>

Paste this into your assistant. Your Wonder version is shown in Shopify admin under **Online Store → Themes**, below the theme name:

```text title="Prompt"
My store runs Wonder 2.5.2. Create a custom Wonder section "Team" with the heading "Meet our experts":
a photo, name, role and a short bio for each person, three per row. Validate it before you give it to me.
```

</TabItem>
<TabItem value="agent" label="Coding agent">

Open your assistant in a folder for this store (an empty one is fine) and add your store's address:

```text title="Prompt"
Add a "Meet our experts" team section to my home page: photo, name, role and a short
bio for each person, three per row. Show me a preview. My store is beauty-store.com
```

Your normal domain is fine: the assistant finds the Shopify address and reads your Wonder version from the live theme. If something else is needed (like Shopify's command-line tool), it asks and installs it for you.

</TabItem>
</Tabs>

## Step 2: Watch the assistant work

A well-behaved assistant goes through a few Wonder tool calls. You'll see them in the conversation, usually as collapsible "tool call" entries.

**1. Look at how Wonder does it.** The assistant finds the closest built-in Wonder section (`list_sections`, `get_section_schema`) and calls `get_conventions` for your Wonder version. That's why your custom section gets the same settings as Wonder's own sections (heading, colours, top and bottom spacing with separate mobile values), follows your **Theme settings** colours, fonts and animations, and reuses Wonder's heading and layout markup.

**2. Get a blueprint.** `get_section_blueprint` returns a starting file built on those conventions, with an update-safe name (`sections/custom-team.liquid`) and a preset, so the section appears under **Add section → Custom**. The assistant then adds the name, role and bio fields.

**3. Validate the first draft.** Assistants often slip in SCSS, a global selector or a hard-coded colour. This is the real result for a first draft:

```text title="validate_section → first draft"
INVALID (Wonder 2.5.2, with Shopify Theme Check + Wonder conventions): 1 error(s), 3 warning(s).
- [ERROR] no-scss (line 54): SCSS syntax found ($variables, @mixin/@include or & nesting).
  Wonder sections use plain CSS.
- [WARNING] translation-key-label: 1 setting label(s) use t: translation keys (image). ...in a NEW
  custom section use literal labels, because locale files are replaced on theme update.
- [WARNING] css-unscoped (line 54): Selector "h3" is not scoped to this section and may change
  styles elsewhere in the theme.
- [WARNING] wonder-hardcoded-color (line 63): 1 hard-coded colour(s), e.g. "color: #8a8a8a".
  They ignore the merchant's Theme settings colours.
```

Each of these would have caused a real problem: Shopify doesn't compile SCSS, `t:` labels show as raw keys after a theme update, the `h3` rule would change every heading in your store, and the grey wouldn't follow your colour scheme.

Besides Shopify's own Theme Check rules, the validator runs Wonder consistency checks (`wonder-*`) against your exact Wonder version: hard-coded colours or fonts, settings that don't do anything, and CSS variables or classes that don't exist in that version.

**4. Validate again** after the fixes:

```text title="validate_section → final version"
VALID (Wonder 2.5.2, with Shopify Theme Check + Wonder conventions): no errors, 0 warning(s).
```

:::warning If your assistant skips validation
Ask it: *"Run validate_section on the full file and fix every error."* Don't install a section that hasn't passed.
:::

<details>
<summary><strong>The finished file: sections/custom-team.liquid</strong> (214 lines, click to expand)</summary>

You can use it as is: the copy button is in the top-right corner of the code block.

```liquid title="sections/custom-team.liquid"
{%- comment -%}
  Custom section: Team
  Not part of the Wonder theme package. Theme updates do NOT copy this file:
  keep a copy and add it to the new theme version before publishing the update.
{%- endcomment -%}

<style>
  [data-section-id="{{ section.id }}"] {
    --section-gap-top: {{ section.settings.margin-top }}px;
    --section-gap-bottom: {{ section.settings.margin-bottom }}px;
    {%- if section.settings.color-body-text != blank %}
      --color-custom-text: {{ section.settings.color-body-text }};
    {%- endif %}
    {%- if section.settings.background_color != blank %}
      --color-background: {{ section.settings.background_color }};
    {%- endif %}
    {%- if section.settings.show_mobile_spacing %}
      --section-gap-top-mobile: {{ section.settings.margin-top-mobile }}px;
      --section-gap-bottom-mobile: {{ section.settings.margin-bottom-mobile }}px;
    {%- endif %}
  }
</style>

<div class="custom-team{% if settings.animations %} scroll-trigger animate--slide-in{% endif %}{% if settings.disabled_animations_on_mobile %} disabled-on-mobile{% endif %}" data-section-id="{{ section.id }}">
  <div class="custom-team__inner wt-section__wrapper{% if section.settings.full-width-enabled %} wt-section__wrapper--full{% endif %}">
    {%- if section.settings.advanced_heading -%}
      {%- if section.settings.heading_richtext != blank -%}
        <div class="headline headline--rich{% if settings.animations %} scroll-trigger animate--slide-in{% endif %}{% if settings.disabled_animations_on_mobile %} disabled-on-mobile{% endif %}">{{ section.settings.heading_richtext }}</div>
      {%- endif -%}
    {%- elsif section.settings.heading != blank -%}
      {% render 'headline', title: section.settings.heading %}
    {%- endif -%}
    <ul class="custom-team__list" role="list" style="--custom-team-columns: {{ section.settings.columns_desktop }};">
      {%- for block in section.blocks -%}
        <li class="custom-team__item{% if settings.animations %} scroll-trigger animate--slide-in{% endif %}{% if settings.disabled_animations_on_mobile %} disabled-on-mobile{% endif %}" {{ block.shopify_attributes }}>
          {%- if block.settings.image != blank -%}
            {{ block.settings.image | image_url: width: 800 | image_tag: loading: 'lazy', class: 'custom-team__image', sizes: '(min-width: 900px) 33vw, 100vw', widths: '400, 600, 800' }}
          {%- endif -%}
          {%- if block.settings.name != blank -%}
            <h3 class="custom-team__name">{{ block.settings.name | escape }}</h3>
          {%- endif -%}
          {%- if block.settings.role != blank -%}
            <p class="custom-team__role">{{ block.settings.role | escape }}</p>
          {%- endif -%}
          {%- if block.settings.bio != blank -%}
            <div class="custom-team__bio rte">{{ block.settings.bio }}</div>
          {%- endif -%}
        </li>
      {%- endfor -%}
    </ul>
  </div>
</div>

{% stylesheet %}
.custom-team { color: var(--color-custom-text); background-color: var(--color-background); }
.custom-team__list { display: grid; gap: calc(var(--gap, 8px) * 3); grid-template-columns: 1fr; list-style: none; margin: 0; padding: 0; }
@media (min-width: 900px) {
  .custom-team__list { grid-template-columns: repeat(var(--custom-team-columns, 3), minmax(0, 1fr)); }
}
.custom-team__image { width: 100%; height: auto; aspect-ratio: 1; object-fit: cover; display: block; border-radius: 50%; }
.custom-team__name { margin: calc(var(--gap, 8px) * 2) 0 calc(var(--gap, 8px) / 2); font-family: var(--font-headline); }
.custom-team__role { margin: 0 0 var(--gap, 8px); font-size: 0.8em; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.7; }
{% endstylesheet %}

{% schema %}
{
  "name": "Team",
  "tag": "section",
  "class": "wt-shopify-section",
  "settings": [
    {
      "type": "checkbox",
      "id": "advanced_heading",
      "label": "Use rich text field for heading",
      "info": "Enables bold, italic, links, heading levels (H1-H6 for SEO), and dynamic content in the heading field."
    },
    {
      "type": "textarea",
      "id": "heading",
      "label": "Heading",
      "default": "Meet our experts",
      "visible_if": "{{ section.settings.advanced_heading == false }}"
    },
    {
      "type": "richtext",
      "id": "heading_richtext",
      "label": "Headline",
      "default": "<h2>Meet our experts</h2>",
      "visible_if": "{{ section.settings.advanced_heading == true }}"
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
      "type": "checkbox",
      "id": "full-width-enabled",
      "label": "Make section full width",
      "default": false
    },
    {
      "type": "color",
      "id": "color-body-text",
      "label": "Text color"
    },
    {
      "type": "color",
      "id": "background_color",
      "label": "Background color"
    },
    {
      "type": "range",
      "id": "margin-top",
      "label": "Distance from the top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "default": 20
    },
    {
      "type": "range",
      "id": "margin-bottom",
      "label": "Distance from the bottom",
      "info": "Add distance from top and the bottom.",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "default": 20
    },
    {
      "type": "checkbox",
      "id": "show_mobile_spacing",
      "label": "Show custom mobile spacing"
    },
    {
      "type": "range",
      "id": "margin-top-mobile",
      "label": "Distance from the top mobile",
      "min": 0,
      "max": 100,
      "step": 2,
      "unit": "px",
      "default": 20,
      "visible_if": "{{ section.settings.show_mobile_spacing }}"
    },
    {
      "type": "range",
      "id": "margin-bottom-mobile",
      "label": "Distance from the bottom mobile",
      "min": 0,
      "max": 100,
      "step": 2,
      "unit": "px",
      "default": 20,
      "visible_if": "{{ section.settings.show_mobile_spacing }}"
    }
  ],
  "max_blocks": 12,
  "blocks": [
    {
      "type": "member",
      "name": "Team member",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Photo"
        },
        {
          "type": "text",
          "id": "name",
          "label": "Name",
          "default": "Name"
        },
        {
          "type": "text",
          "id": "role",
          "label": "Role",
          "default": "Role"
        },
        {
          "type": "richtext",
          "id": "bio",
          "label": "Short bio"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Team",
      "category": "Custom",
      "blocks": [
        {
          "type": "member"
        },
        {
          "type": "member"
        },
        {
          "type": "member"
        }
      ]
    }
  ]
}
{% endschema %}
```

What makes it Wonder-native and update-safe:

| In the code | Why |
|---|---|
| File name `custom-team.liquid` | The `custom-` prefix can't clash with a Wonder file, now or in future versions |
| Wonder's own setting ids (`margin-top`, `color-body-text`, `show_mobile_spacing`…) and `data-section-id` | Wonder's spacing and colour CSS picks them up, so the section lines up with the rest of the page |
| `{% render 'headline' %}`, `wt-section__wrapper`, `rte` | Heading, width and text look exactly like Wonder's built-in sections |
| `var(--font-headline)`, `var(--gap)`, `settings.animations` | Follows your Theme settings fonts, spacing and animations |
| All CSS under `.custom-team` | The section can't restyle anything else in the store |
| Setting values in `<style>`, not in `{% stylesheet %}` | Shopify doesn't render Liquid inside `{% stylesheet %}` |
| Literal labels (`"Short bio"`) | `t:` translation keys point to Wonder's locale files, which are replaced on update |
| `presets` | Makes the section show up under **Add section** |

</details>

## Step 3: Put it on a copy of your theme

<Tabs groupId="workflow" queryString>
<TabItem value="chat" label="AI chat" default>

1. In Shopify admin go to **Online Store → Themes**, open the **⋯** menu next to your live theme and choose **Duplicate**. Never test on the live theme.
2. On the copy click **⋯ → Edit code**.
3. In the **Sections** folder click **Add a new section**, name it `custom-team` and click **Done**.
4. Replace everything in the new file with the code from your assistant and click **Save**.
5. Click **Customize** on the copy, then **Add section** and find **Team** under **Custom**. Add your team members and click **Save**.
6. Use **⋯ → Preview** on the copy to see it on your store.

</TabItem>
<TabItem value="agent" label="Coding agent">

The first time, the assistant asks whether you log in to the store's admin. Say yes: a **Shopify login page opens in your browser**. Log in with the account you use for your store admin (owner, staff or collaborator) and confirm. The assistant remembers your store, so you won't be asked again. No account on the store? See [Without a store account](#without-a-store-account).

<img src="/img/docs/ai-preview-login.png" alt="Claude Code: the assistant finds the store's Shopify address, opens the Shopify login page in the browser, and confirms the store is connected" />

Then the assistant copies your live theme as a private draft, uploads only the files it changed (the section and the home page template) and sends you two links:

<img src="/img/docs/ai-preview-session.png" alt="The assistant validates the section, creates the preview copy, uploads two files and returns a preview link and a theme editor link" />

Open the **preview link**. You see your store, with your products, fonts and colours, plus the new section. The bar at the bottom shows the copy's name and **Draft**. Use **Copy link** to share the preview with a colleague or client; they don't need an account.

<img src="/img/docs/ai-preview-preview.jpg" alt="Store preview with the new Meet our experts section and the Draft preview bar" />

:::tip Your live store stays untouched
The assistant only uploads to the preview copy it created and checks that the copy is unpublished before every upload. It never changes your live theme and never publishes anything.
:::

</TabItem>
</Tabs>

## Step 4: Adjust it

In the theme editor of the copy (the **theme editor link**, or **Customize** on the copy), the section has the same settings as Wonder's built-in sections: heading, columns, colours and spacing, with a separate mobile option. Team members are blocks you can add, reorder and edit.

<img src="/img/docs/ai-preview-editor.jpg" alt="Theme editor of the preview copy with the Team section selected: team member blocks on the left and Wonder's heading, colour and spacing settings on the right" />

Prefer to ask? Tell the assistant ("make the photos square", "four per row on desktop"). A coding agent updates the same preview copy and sends a fresh link; in a chat you get an updated file to paste.

## Step 5: Go live

The copy is listed in Shopify admin under **Online Store → Themes → Draft themes**:

<img src="/img/docs/ai-preview-draft.png" alt="Shopify admin Draft themes list with Wonder preview – team section" />

When you're happy, either:

- **add the section to your live theme**: ask the assistant to do it, or repeat step 3 on the live theme (**Edit code**, then **Customize**). This is the safer choice on a busy store;
- or **publish the copy** (**Publish** next to it), but only if nobody changed the live theme since the copy was made: publishing replaces the live theme, including its settings.

Delete copies you don't need anymore: a store can keep at most 20 themes.

:::danger Keep a copy of the file
Theme updates **don't copy custom section files** to the new Wonder version. Keep `custom-team.liquid` somewhere safe and add it to the new theme copy before you publish an update. The [update tutorial](./tutorial-update-theme) does this for you.
:::

---

## Without a store account

Agencies and freelancers usually have collaborator access and can log in as in step 3. If you don't have an account on the store, the store owner can give you a **Theme Access password** instead. It can only change themes, nothing else in the store:

1. The owner installs Shopify's free [Theme Access](https://apps.shopify.com/theme-access) app and chooses **Create password** with your name and email.
2. You open the link from the email and copy the password (`shptka_…`). The link works only once.
3. Tell the assistant you have a Theme Access password. It opens a small text file: **paste the password there, save and close**.

:::warning Don't paste the password into the chat
Chat history is stored. If it happens, delete that password in the Theme Access app and create a new one. The owner can revoke it the same way anytime.
:::

## What stays on your computer

With a coding agent, everything runs on your computer through Shopify's official command-line tool. Your store address and login (or Theme Access password) stay there, in the project's `.wonder/` folder and Shopify's own login session. They're never sent to the Wonder MCP server or written into the chat. See [Privacy](./privacy).

## More ideas to try

```text
Add a custom Wonder section with an FAQ accordion, using the Wonder heading style. Each question is a block.
```

```text
Create a "Shop the look" Wonder section: one large image on the left and up to four product cards on the right.
```

```text
Make a logo strip section for press mentions (grayscale logos, colour on hover) that matches Wonder's spacing.
```

```text
In Theme settings → Custom CSS, make the Wonder announcement bar text bold on mobile only. Keep the selector scoped.
```

The last one isn't a section at all: small style changes belong in **Theme settings → Custom CSS**, which carries over on theme updates. A good assistant will suggest that itself.
