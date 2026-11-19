---
title: "Custom CSS: Change the Look Safely"
sidebar_label: "Custom CSS"
---

# Custom CSS: change the look safely

Custom CSS lets you adjust how Wonder looks without editing theme files. Unlike changes made in **Edit code**, it **carries over when you update Wonder** (see [Updating Wonder](/getting-started/basics/updating-wonder)).

## Check for a setting first

Most visual changes already have a setting, and settings are easier to change later:

- **Colours, fonts, buttons and spacing:** [Theme settings](/theme-settings): [Colors](./colors), [Typography](./typography), [General settings](./general-settings).
- **One section:** select the section in the theme editor. Most sections have their own colours, spacing (*Distance from the top / bottom*) and layout options.

Use Custom CSS only for what no setting covers.

## Where to add it

There are two places, both in **Online Store → Themes → Customize**:

| Where | Applies to | Use it for |
|---|---|---|
| **Theme settings → Custom CSS** | The whole store | Changes to elements that appear everywhere, like the announcement bar or the header |
| A section's own **Custom CSS** field (at the bottom of the section's settings) | Only that section, on that template | Changes to one section |

Both are saved with your theme settings, so both carry over on updates.

## Keep your rules scoped

Wonder's own CSS classes start with `wt-`. A rule on a `wt-…` class in **Theme settings → Custom CSS** changes that element **in the whole store**, which is rarely what you want. To change one section only:

- **Easiest:** use that section's own **Custom CSS** field. Shopify limits the rules to that section automatically.
- **Or** target the section's wrapper in **Theme settings → Custom CSS**. Right-click the section in your browser, choose **Inspect**, and look for the parent element with an id like `shopify-section-template--1234__image_with_text`. Start your rule with that id.

## Examples

**Bold announcement bar text on mobile only**, in **Theme settings → Custom CSS**:

```css
@media (max-width: 899px) {
  .wt-announcement__text {
    font-weight: 700;
  }
}
```

**Wider letter spacing for the headings of one Image with text section**, in that section's **Custom CSS** field:

```css
h2 {
  letter-spacing: 0.08em;
}
```

Because it's in the section's own field, this changes only that section's headings, not every `h2` in the store.

## Tips

- **Test on a copy.** Duplicate your theme (**Online Store → Themes → ⋯ → Duplicate**) and try the CSS there first.
- **Avoid `!important`** unless a rule really doesn't apply without it.
- **After a Wonder update, check your CSS still works.** If an element was renamed in the new version, a rule can stop matching. The [Changelog](/changelog) lists what changed.
- For larger amounts of CSS, developers can use `assets/custom.css`. Remember that files are **not** carried over on updates. See the [developer guide](/developer/theme-architecture#custom-css).

:::tip Let your AI assistant write it
Ask an [AI assistant connected to Wonder](/ai-agents/setup), for example *"In Wonder, make the announcement bar text bold on mobile only, using Theme settings → Custom CSS"*. It checks whether a setting already does it, looks up the real class names in your Wonder version, and checks the CSS against Shopify's limits before giving it to you.
:::
