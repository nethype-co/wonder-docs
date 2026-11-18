---
title: "Updating Wonder: What's Kept and What Isn't"
sidebar_label: "Updating Wonder"
sidebar_position: 7
---

# Updating Wonder: what's kept and what isn't

When a new Wonder version is out, Shopify shows an update notice next to your theme in **Online Store → Themes**. This article explains what happens when you update, what moves to the new version on its own, and what you have to bring over yourself.

## How an update works

Updating installs the new Wonder version as a **new, unpublished theme copy** in **Online Store → Themes**. Your live theme isn't touched: customers keep seeing it until you publish the new copy. You can preview and adjust the new copy first, without any rush.

## What's carried over, and what isn't

| Carried over automatically | **Not** carried over |
|---|---|
| Theme editor settings (colours, typography, layout…) | Any edit made in **Edit code** |
| Sections, blocks and their content on every template | Changes to Wonder's own files (sections, snippets, assets, layout) |
| Your templates (product, collection and page templates) | `assets/custom.css` and `assets/custom.js` |
| **Theme settings → Custom CSS** and section **Custom CSS** | Custom sections you added (for example `sections/custom-*.liquid`) |
| | Code installed by hand by an app or a developer |

In short: anything you did in the **theme editor** moves over. Anything you did in **Edit code** has to be added to the new copy again before you publish it.

:::info Apps
Apps that use **app embeds** or **app blocks** (most modern apps) keep working, because they're stored with your theme settings. If an app's setup guide asked you to paste code into theme files, re-add that code or reinstall the app's snippet.
:::

## Recommended routine

1. **Back up.** In **Online Store → Themes**, open the **⋯** menu of your live theme and choose **Duplicate**.
2. **Add the update.** Use the update notice to add the new Wonder version. It appears as a new, unpublished theme.
3. **Re-apply your code changes.** Copy your changes from the old theme's **Edit code** to the new copy. Don't copy whole Wonder files over the new ones: you'd lose the fixes in the new version. Copy only the lines you changed.
4. **Preview.** Click **Preview** on the new copy and check the pages your customers use most: home page, a collection, a product page, the cart drawer and search. Check on mobile too.
5. **Publish** the new copy.
6. **Keep the old copy** for a few weeks, in case you notice something missing later.

Not sure what's new? See the [Changelog](/changelog) for every version.

## Make the next update easier

- **Put style tweaks in [Theme settings → Custom CSS](/theme-settings/custom-css)**, not in theme files. It carries over on every update.
- **Prefer settings over code.** Many changes people make in code already have a setting. Search this documentation, or ask an [AI assistant connected to Wonder](/ai-agents/setup): it checks the section's settings before suggesting code.
- **Keep a list of your code changes**: which file, what you changed and why. It turns step 3 into a few minutes of work.
- **Developers:** the [AI update tutorial](/ai-agents/tutorial-update-theme) finds every line you changed, merges it into the new version and flags real conflicts.

## Related

- [Editing theme files](./customizing-your-theme-by-editing-theme-files)
- [Support policy: theme updates](/getting-started/about-theme/support-policy#theme-updates)
