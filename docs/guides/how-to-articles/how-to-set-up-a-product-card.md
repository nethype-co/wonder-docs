---
title: "How to Set Up a Product Card"
sidebar_label: "Product Card"
---

## How to Set Up a Product Card

The **product card** is the small preview of a product that appears anywhere the theme shows a grid or row of products — the collection page, search results, Featured collection, Product recommendations, and more. It's the image, title, price, and rating that customers click to reach a product.

Wonder gives you two card styles that you switch between with a single setting:

- **Classic** — the standard card: one image (with an optional second image on hover), title, price, rating, and an optional quick add button.
- **Pro** — everything Classic has, plus an in-card image gallery customers can browse without leaving the page, sibling/variation swatches (combined listings), and a new inline **quick buy picker** with an optional size guide.

Both styles share the same core settings (image ratio, vendor, rating, and so on). Pro simply layers extra shopping features on top.

This guide covers:

- [**Where you'll find the settings**](#where-youll-find-the-product-card-settings) — which sections host the product card
- [**How to switch the card style**](#how-to-switch-the-card-style) — step-by-step in the Theme Editor
- [**Shared settings**](#shared-settings) — options common to both styles
- [**Classic-only settings**](#classic-only-settings) — quick add button
- [**Pro-only settings**](#pro-only-settings) — gallery, quick buy picker, and size guide
- [**How it works**](#how-it-works) — Classic vs Pro, the quick buy picker, and swatches
- [**Tips**](#tips) — getting the most out of each style

## Where you'll find the product card settings

The card style and its settings live inside each section that displays products. You'll see them in:

- **Collection page** (product grid)
- **Search results**
- [**Featured collection**](/sections/collections/feature-collection)
- [**Featured collections (tabs)**](/sections/collections/featured-collections-tabs)
- [**Product recommendations**](/sections/products/product-recommendations)
- [**Recently viewed products**](/sections/products/recently-viewed-products)
- [**Collection navigator**](/sections/collections/collection-navigator)

Each of these sections has its own **Card style** setting, so you can, for example, use Pro cards on your main collection page and Classic cards in a smaller Featured collection.

## How to switch the card style

1. In your Shopify admin, go to **Online Store > Themes**.
2. Click **Customize** on the theme you want to edit.
3. Open the page (or template) that shows the section — for example a **Collection** template for the product grid.
4. Click the section in the left-hand panel (for example **Product grid** or **Featured collection**).
5. Find the **Card style** setting and choose **Classic** or **Pro**.
6. Click **Save**.

:::note
Switching to **Pro** reveals the extra Pro-only settings (Max gallery images, quick buy picker) right below the Card style selector.
:::

## Shared settings

These apply to both Classic and Pro cards.

| Setting | Options / default | What it does |
| --- | --- | --- |
| **Text alignment** | Center or Left (default *Left*) | Aligns the title, price, and rating under the image. |
| **Image ratio** | Adapt to image, Portrait, or Square (default *Square*) | The shape of the product image. *Adapt to image* keeps each product's natural proportions. |
| **Show product media video** | Off by default | Plays a Shopify-hosted product video on the card, for products that have one. |
| **Show second image on hover** | Off by default | Reveals the product's second image when customers hover over the card on desktop. |
| **Show vendor** | On by default | Displays the product's vendor name. |
| **Enable vendor link** | Off by default | Makes the vendor name clickable. *(Only shown when "Show vendor" is on.)* |
| **Show product rating** | On by default | Displays the product's star rating. Requires a product rating app to be installed. |
| **Show review count** | On by default | Shows the numeric rating value next to the stars. *(Only shown when "Show product rating" is on.)* |
| **Hide rating if no reviews** | Off by default | Hides the rating entirely on products that don't have any reviews yet. *(Only shown when "Show product rating" is on.)* |

## Classic-only settings

| Setting | Options / default | What it does |
| --- | --- | --- |
| **Enable quick add button** | Off by default | Adds a quick add button to the card so customers can add a product to the cart without opening its page. Recommended for lower-priced, impulse items. |
| **Desktop button position** | On hover or Below product (default *On hover*) | Where the quick add button appears on desktop. *(Only shown when "Enable quick add button" is on.)* |

## Pro-only settings

| Setting | Options / default | What it does |
| --- | --- | --- |
| **Max gallery images** | 2–10 (default *5*) | How many of the product's images to load into the in-card gallery customers can browse. |
| **Enable quick buy picker** | Off by default | Adds an inline size picker directly on the card. This **replaces the quick add button** for this section. |
| **Options shown in the picker** | Default *Size* | Option names (one per line) that open the picker — for example `Size` or `Shoe size`. A product with a single option of this name gets the inline picker; other products fall back to the quick add drawer. *(Only shown when the quick buy picker is on.)* |

### Size guide popup (Pro quick buy picker)

When the quick buy picker is on, you can attach a size guide that customers open from inside the picker.

| Setting | What it does |
| --- | --- |
| **Link text** | The text of the size guide link shown in the picker header. Leave it empty to hide the link. |
| **Content** | An optional page (title + content) shown in the size guide popup, below the size table. |
| **Metafield** | A product metafield holding the size table — for example `custom.size_chart`. Rows are separated by new lines, cells by `\|`, and a leading `#` marks a header cell. |

:::tip
The size table format here is the same one used by the Variant Picker block. See [How to Set Up a Size Guide per Product](/guides/how-to-articles/how-to-set-up-size-guide-per-product) for the full metafield format and examples.
:::

## Colors and spacing

Every section that hosts the product card also has its own **Colors** (text and background) and **Section spacing** (top/bottom distance, plus optional separate mobile spacing) settings. These affect the whole section, not the individual cards — set them in the same panel.

## How it works

### Classic vs Pro at a glance

- **Classic** shows one image per card, swaps to a second image on hover (if enabled), and can offer a quick add button.
- **Pro** turns that single image into a small **gallery** — customers can swipe (on mobile) or use the arrows (on desktop) to look through several of the product's images right on the card, up to your **Max gallery images** limit.

### The quick buy picker (Pro)

With the picker enabled, a product whose options match your **Options shown in the picker** list (for example a product with a single `Size` option) shows those values inline on the card. Customers pick a size and add to cart in one step — no page load, no drawer. Products that don't fit that pattern quietly fall back to the standard quick add drawer, so nothing is ever left without a way to buy.

If you add a **size guide** (link text plus a metafield table and/or page), a link appears in the picker header that opens the guide in a popup.

### Sibling / variation swatches (combined listings)

If you've enabled **product siblings / variations as swatches** in your theme settings (**Theme settings > Color swatch**), Pro cards can show swatches that switch between related products — Shopify's "combined listings" pattern. Selecting a swatch updates the card's image gallery to that sibling's images. This relies on the product-variations metafields configured in theme settings.

See [How to Set Up a Product Siblings (Product Variations) Block in Product Page](/guides/how-to-articles/how-to-set-up-a-product-variations-block-in-product-page) to configure the metafields, or [learn more about product variations](https://support.wonder-theme.com/question/product-variations).

### Ratings need an app

The **Show product rating** setting only displays stars if you have a product rating app installed that Wonder supports. Without one, there's no rating data to show. [See which review apps work with Wonder](/guides/how-to-articles/which-reviews-app-should-you-use-on-shopify-free-paid-options).

## Tips

- **Match the card style to the section's job.** Use Pro cards where discovery matters — your main collection page or a hero Featured collection — and Classic cards for compact rows like Recently viewed.
- **Keep the gallery lean.** More gallery images mean more to load. Five is a good default; raise the **Max gallery images** limit only if the extra angles really help customers decide.
- **The quick buy picker replaces quick add.** On a Pro section, turning on the quick buy picker removes the quick add button for that section — so choose one shopping shortcut per section rather than expecting both.
- **Name your picker options exactly.** The **Options shown in the picker** list is matched against your product option names. If your products use `Shoe size` rather than `Size`, add that line or the picker won't trigger.
- **Set up siblings once.** Sibling swatches are driven by theme-level metafields configured in **Theme settings > Color swatch**. Configure them once and every Pro section can use them.
