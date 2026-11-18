---
title: "Tutorial: Update a Customised Wonder Theme"
sidebar_label: "Tutorial: Theme Update"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: Update a Customised Wonder Theme

When you update Wonder, Shopify installs the new version as a **new, unpublished theme copy**. Your theme settings, section content and **Theme settings → Custom CSS** are carried over automatically. **Your code changes are not**: edited theme files, `assets/custom.css`, `assets/custom.js` and custom sections stay behind in the old copy.

This tutorial moves those changes for you. It follows a real update from **Wonder 2.4.0 to 2.5.2** on a store with four typical customisations, and every output below comes from that run.

**You need:**
- a coding agent with the [Wonder AI Toolkit](./setup) (Claude Code, Codex, Cursor or VS Code);
- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) and Node.js 20 or newer;
- staff or collaborator access to the store (or a **Theme Access** password).

Only use Shopify admin? Jump to [Without Shopify CLI](#without-shopify-cli).

:::tip Let the agent drive
You can start the whole process with one prompt and the `wonder-update` skill will walk through the steps below, asking you before anything risky:

```text
Update my customised Wonder store your-store.myshopify.com to the latest Wonder version without losing my changes.
```

The rest of this page explains what happens in each step, so you can follow along or do it by hand.
:::

---

## Step 1: See what the update brings

Ask your assistant:

```text
I'm on Wonder 2.4.0. What do I get by updating to the latest version, and which known issues does it fix?
```

It calls `get_changelog` and `get_known_issues` and summarises the [release notes](/changelog). Decide whether you want the update now.

## Step 2: Back up and add the update (Shopify admin)

1. **Online Store → Themes**: on your live theme click **⋯ → Duplicate**. This is your backup.
2. On the same page, use the Wonder update notice (**View update** / **Add to theme library**). Shopify adds **Wonder 2.5.2** as an unpublished copy with your current settings.

:::warning
Settings you change in the live theme **after** this point won't be in the new copy. Avoid editing the live theme until you publish the update.
:::

## Step 3: Download both copies

```bash
shopify theme list --store your-store.myshopify.com
```

Note the IDs of the **live** theme and the new **Wonder 2.5.2** copy, then:

```bash
shopify theme pull --store your-store.myshopify.com --theme <live-id> --path wonder-current
shopify theme pull --store your-store.myshopify.com --theme <new-id> --path wonder-new
```

Put the new copy under version control so you can review every change later:

```bash
cd wonder-new && git init -q && git add -A && git commit -qm "Wonder 2.5.2 as installed" && cd ..
```

## Step 4: Find your customisations

The toolkit includes a small script that compares every file in your current theme with the **original** Wonder release. It downloads only fingerprints (short hashes) of the original files from the Wonder server; your files are never uploaded.

<Tabs groupId="toolkit-client">
<TabItem value="claude-code" label="Claude Code" default>

```bash
node "${CLAUDE_PLUGIN_ROOT}/skills/wonder-update/scripts/compare.mjs" wonder-current
```

The agent fills in `CLAUDE_PLUGIN_ROOT` itself. To run it yourself, use the path to the plugin's install folder instead.

</TabItem>
<TabItem value="other" label="Other agents / manual">

Download the script from the toolkit repository and run it:

```bash
curl -fsSLO https://raw.githubusercontent.com/nethype-co/wonder-ai-toolkit/main/skills/wonder-update/scripts/compare.mjs
node compare.mjs wonder-current
```

</TabItem>
</Tabs>

The real output for our example store:

```json title="compare.mjs wonder-current"
{
  "version": "2.4.0",
  "compared": 448,
  "unchanged": 444,
  "modified": [
    "assets/custom.css",
    "sections/contact-form.liquid",
    "sections/page-footer.liquid"
  ],
  "added": [
    "sections/custom-trust-badges.liquid"
  ],
  "deleted": [],
  "changes": {
    "sections/contact-form.liquid": [
      { "yourLines": "178-178", "added": 1, "removedOriginal": 1,
        "preview": ["      \"default\": \"#F7F3EE\","] }
    ],
    "sections/page-footer.liquid": [
      { "yourLines": "321-321", "added": 1, "removedOriginal": 0,
        "preview": ["      <p class=\"wt-footer__aside__copy custom-footer-note\">Family-run since 1998 · Handmade in Kraków</p>"] }
    ]
  }
}
```

Out of 448 files, the script found exactly the four that were customised, down to the line: a custom section, two rules in `custom.css`, a different default background in the contact form, and an extra line of text in the footer. Your agent summarises this in plain words for you.

:::note
Settings and content files (JSON) are skipped on purpose: Shopify already carried them over in step 2. If the output contains a `warning` that most files differ, the version in `config/settings_schema.json` is probably wrong or the files were reformatted.
:::

## Step 5: Get the update plan

The agent sends the **file names** (never the contents) to `plan_update`:

```text title="plan_update → response (excerpt)"
# Update plan: Wonder 2.4.0 → 2.5.2
Releases in between: 2.4.1, 2.5.0, 2.5.1, 2.5.2.

## 1. Copy as is: your own files (1)
  - sections/custom-trust-badges.liquid

## 2. Copy your version over Wonder's (1)
You changed these and Wonder did not change them between 2.4.0 and 2.5.2.
  - assets/custom.css

## 3. Merge (2)
Both you and Wonder changed these. Start from the NEW file (it has Wonder's fixes) and re-apply
only your own changes. With a local theme folder, the wonder-update skill's compare script does
this for you (`compare.mjs <current> --merge <new>`) ...
  - sections/contact-form.liquid
  - sections/page-footer.liquid
```

## Step 6: Merge your changes into the new version

The same script now ports everything into `wonder-new`, with a three-way merge for files that both you and Wonder changed:

```bash
node compare.mjs wonder-current --merge wonder-new
```

```json title="Merge report"
{
  "from": "2.4.0",
  "to": "2.5.2",
  "copiedOwn": ["sections/custom-trust-badges.liquid"],
  "copiedOver": ["assets/custom.css"],
  "merged": ["sections/page-footer.liquid"],
  "conflicts": [{ "path": "sections/contact-form.liquid", "conflicts": 1 }],
  "manual": [],
  "nameClash": [],
  "removedUpstream": []
}
```

Three files were handled automatically. The footer line landed in the right place in the new 2.5.2 footer:

```diff title="git diff sections/page-footer.liquid"
       <p class="wt-footer__aside__copy">
         {{ section.settings.text }}
       </p>
+      <p class="wt-footer__aside__copy custom-footer-note">Family-run since 1998 · Handmade in Kraków</p>
     {% endif %}
```

### Resolving a conflict

One file has a real conflict: the store had changed the contact form's default background, and Wonder 2.5.2 removed that `default` line entirely. The script marks the spot instead of guessing:

```diff title="sections/contact-form.liquid"
       "id": "background_color",
+<<<<<<< your change (Wonder 2.4.0, customised)
+      "default": "#F7F3EE",
+=======
+>>>>>>> Wonder 2.5.2
       "label": "t:sections.settings.settings.background-color.label"
```

Your agent explains both sides and proposes a resolution. Here, keeping the store's line is safe: Wonder now treats an empty color as "no background", and `#F7F3EE` simply sets one again. The agent removes the markers and checks that none are left:

```bash
grep -rn "^<<<<<<<\|^=======\|^>>>>>>>" wonder-new/{assets,blocks,layout,sections,snippets}
```

:::tip When the intent isn't clear
A good agent asks you before dropping or rewriting a customisation. If you don't know why a change was made, keep Wonder's new code and test the page.
:::

## Step 7: Review and check

```bash
cd wonder-new
git diff                # must contain only your customisations
shopify theme check     # Shopify's linter
```

Custom sections are also run through `validate_section`.

## Step 8: Upload only the files you changed

Push only the ported files, so you don't overwrite settings or content in the new copy. **Never use the live theme's ID here.**

```bash
shopify theme push --store your-store.myshopify.com --theme <new-id> --path wonder-new --nodelete \
  --only sections/custom-trust-badges.liquid \
  --only assets/custom.css \
  --only sections/page-footer.liquid \
  --only sections/contact-form.liquid
```

## Step 9: Preview and publish

1. **Online Store → Themes** → new copy → **⋯ → Preview**. Check the home page, a collection, a product, the cart drawer, search, and every page that uses a ported file, on desktop and mobile.
2. Check that **Theme settings → Custom CSS** still targets existing elements.
3. Publish the new copy when you're happy. Keep the old copy for a few weeks in case you need to roll back.

---

## Without Shopify CLI

In an AI chat without access to your files, the assistant can't compare files automatically, but it can still guide you:

1. Do steps 1 and 2 above.
2. Ask: *"Which of my changes will I lose when I update Wonder, and how do I re-add them?"*
3. Re-add by hand in the new copy (**⋯ → Edit code**):
   - every custom section (`sections/custom-*.liquid`): create the same file and paste the old content;
   - the content of `assets/custom.css` and `assets/custom.js`.
4. Edits inside Wonder's own files can't be found reliably without the files. A developer can download the theme (**⋯ → Download theme file**), unzip it and run the compare script from step 4 on it.

## Avoid the problem next time

- Put small style changes in **Theme settings → Custom CSS**. It carries over on every update.
- Build new features as custom sections (`sections/custom-*.liquid`) instead of editing Wonder's files. They still need copying, but never need merging.
- Keep your theme folder in git. Then you always know what you changed.
