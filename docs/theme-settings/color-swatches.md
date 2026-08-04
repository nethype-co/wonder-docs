---
title: "Color swatches"
sidebar_label: "Color swatches"
---

### What is the Color Swatches?

Swatches serve as compact yet impactful visual cues that reveal the array of colors, textures, and materials a product offers.

Moving beyond mere textual descriptions, swatches offer a tactile and visual representation that brings customer interaction with product variants to life. Opt for vivid hex codes, utilize variant-specific imagery, or introduce bespoke swatch designs for a tailored display. Available in circular or square formats, swatches infuse a touch of elegance and practicality into the shopping experience. Here's how they enhance the Wonder theme:

![](/img/docs/f8d69e94c5d2.jpeg)

### Two ways to set up swatches

There are two ways to show swatches in the Wonder theme. Pick the one that matches how your products are built:

| Method | Use it when | Where to configure |
| --- | --- | --- |
| [**1. Variant option swatches**](#method-1-variant-option-swatches) | Your colors are **variant options on a single product** (the standard Shopify setup) | **Theme Settings > Color swatch** — described in the rest of this article |
| [**2. Product siblings as swatches**](#method-2-product-siblings-as-swatches) | Your colors are **separate products** linked together (Combined listings) | **Theme Settings > Product siblings / variations** |

### Method 1: Variant option swatches

This is the method covered by this article. Your product has an option such as `Color`, and each option value renders as a swatch — from a Shopify color metafield, a **Custom colors** rule, or the variant's own image.

Continue with [Where each setting applies](#where-each-setting-applies) below.

### Where each setting applies

Swatches appear in two different places, and they are controlled separately:

| Location | Controlled by |
| --- | --- |
| **Product cards** (collection pages, featured collections, search results) | **Enable color swatch** checkbox, plus the option-name fields below |
| **Product page** (variant picker) | The option-name fields below only — the **Enable color swatch** checkbox has no effect here |
| **Filters** (collection sidebar / drawer) | **Enable color swatch in filters** checkbox |

:::caution
**Enable color swatch** turns swatches on and off for **product cards only**. Product-page swatches are driven entirely by **Options listed as Color Swatches** — an option name listed there renders as swatches whether this checkbox is on or off.
:::

### How to Configure Color Swatches in Your Theme Editor

1. **Access Theme Customization:** Navigate to your Theme Editor by clicking on 'Theme Settings', then look for the 'Color Swatch' section.
2. **Enable Swatches on Cards:** Check the 'Enable color swatch' option to show swatches on product cards in collections and grids.
3. **Filter Integration:** If you want the swatches to appear in filter options as well, ensure 'Enable color swatch in filters' is checked.
4. **Choose Swatch Shape:** Opt for 'Enable round color swatches' if you prefer circular swatches over the default square shape.
5. **Input Color Values:**
   - **IMPORTANT:** Shopify now provides own color swatches via metafields. If color metafields are defined, the swatches take values from there. Learn more in the [Shopify Category Metafields guide](https://help.shopify.com/en/manual/custom-data/metafields/category-metafields/using-category-metafields). If not set, the Theme settings>Color swatch>Custom colors setting will be used.
   - In the 'Custom colors' field, input each color option as a color name followed by its hex code, or a color name followed by an image filename for patterned swatches. Place each entry on a separate line to define the swatches for your product variants.
6. **Choose one display style per option — colors *or* images:**
   - To show an option as **color/image swatches**, enter its name (usually `Color`) in **Options listed as Color Swatches**.
   - To show an option as **variant photos** instead, enter its name in **Options listed as Variant Images** and leave it out of the field above.

Remember to keep each color rule on its own line to ensure proper display and functionality.

![](/img/docs/5d862e19e1a1.jpeg)

### Color swatch settings

 **Enable color swatch:** Show or hide color swatches on product cards. Off by default. This setting does not affect the product page.

![](/img/docs/63a399c4a7e2.jpeg)

 **Enable color swatch in filters:** Enable or disable color swatch in filters.

![](/img/docs/d57c1d0d01b8.jpeg)

 **Enable round color swatches:** Enable or disable rounded shape of color swatches.

![](/img/docs/7696bd857f6c.jpeg)

 **Custom colors:** Define color swatches not only with hex color codes but also with image files.

 **IMPORTANT:** Shopify now provides own color swatches via metafields. If color metafields are defined, the swatches take values from there. Learn more in the [Shopify Category Metafields guide](https://help.shopify.com/en/manual/custom-data/metafields/category-metafields/using-category-metafields). If not set, the **Theme settings>Color swatch>Custom colors** setting will be used.

![](/img/docs/380f9dca467a.jpeg)

How to do it:

1. **Single Color Assignment:** For a single color, input the color name followed by a colon and its corresponding hex code. For example: **White:#ffffff** defines a swatch as white.
2. **Combination Colors:** To represent a combination of colors, list the color names separated by slashes and their respective hex codes consecutively, each prefixed with **#** . For example: **Red/Green/Blue:#ff0000#00ff00#0000ff** creates a swatch showing red, green, and blue.
   - Two colors render as a diagonal split, three colors as three diagonal bands.
   - **A maximum of three colors is supported.** An entry with four or more hex codes is ignored, and the swatch falls back to the option value's own color name.
   - Use full six-digit hex codes (`#ff0000`, not `#f00`).
3. **Image File for Color:** If you have a specific pattern or material that can't be represented by a hex code, use an image file. Enter the color name followed by a colon and the image file name. For instance: **Gray melange:gray-melange.jpg** would use the "gray-melange.jpg" image to represent the "Gray melange" swatch.
   - The image must be uploaded to **Content > Files** in your Shopify admin, and the filename in the rule must match exactly, including its extension.

Remember to place each rule on its own line to ensure the system interprets each color or image swatch correctly.

:::tip
Standard CSS color names work with no configuration at all. If an option value has no metafield swatch and no **Custom colors** rule, the theme uses the value itself as a color — so a variant named "Red" or "Olive" already renders correctly. You only need a rule for custom shades, multi-color swatches, and image swatches.
:::

 **Options listed as Color Swatches:** specify which product option names should be displayed using color swatches.

![](/img/docs/9ba893220e22.jpeg)

How to do it?

1. **Identify the Option Name:** Determine the name of the product option that corresponds to color variations. Typically, this is simply "Color".
2. **Input the Option Name:** Enter the option name — not an option value — into the field. If your option is called "Color", write "Color". Capitalization does not matter, but spelling must match the option name in your product setup.
3. **One Option Per Line:** If you have multiple options that require swatches, such as "Material" or "Finish", list each one on a separate line within the field.

 **Options listed as Variant Images:** define which variant option names should display their choices as images taken from the variant photos assigned in **Admin > Products**.

![](/img/docs/76c1e38a4454.jpeg)

How to do it?

1. **Specify Variant Names:** List the variant option names that have corresponding images. Common examples include "Color", "Front Color", or "Cover Color".
2. **Input Each Variant Name Separately:** Write each variant option name that you want to associate with an image on a new line within this field.
3. **Ensure Correct Mapping:** Each name entered must exactly match the option names set up in your product details to ensure the correct images are displayed when a customer selects a variant.

:::caution
**Do not list the same option in both fields.** Variant Images takes priority, so an option that appears in both will render as variant photos and its color swatches will never show. On product cards the rule is stricter still: as soon as **Options listed as Variant Images** contains anything, it replaces **Options listed as Color Swatches** for every option on the card. Pick one style per option.
:::

### Overriding these settings on a single product page

The settings above apply store-wide. The **Variant picker** block on the product page has its own **Options listed as Color Swatches** and **Options listed as Variant Images** fields, which override the theme settings for that section when filled in, plus a third option-name field for rendering an option as a dropdown. See [Variant picker block](/product-page/blocks/variant-picker-block) for details.

### Method 2: Product siblings as swatches

![Product siblings / variations settings](/img/docs/product-variations.png)

Use this method when your colors are **separate products** rather than variant options on one product — also known as **Combined listings** or **Product variations**. Each linked product renders as a swatch on the product card, and clicking a swatch takes the customer to that product.

The settings live at the bottom of the same panel, under the **Product siblings / variations** heading: **Theme Settings > Color swatch > Product siblings / variations**. They replace the option-name fields from Method 1 — sibling swatches ignore **Options listed as Color Swatches** and **Options listed as Variant Images** entirely.

#### Before you start: two metafields

Both settings below point at product metafields, so create these first in **Settings > Custom data > Products**:

1. **A products metafield** of type **Product**, configured as a **List of products** — for example `custom.product_variations`. On each product, select every sibling in the group, **including the product itself**. This lets one product page template serve the whole group.
2. **An option value metafield** that supplies each sibling's swatch.

:::tip
**You usually don't need to create the option value metafield.** If your products already use Shopify's category (taxonomy) color metafield — `shopify.color-pattern`, the same one that powers Shopify's native variant swatches — point the setting at that and you are done. It is a multi-select field, and the theme uses the **first selected entry**, so pick the sibling's main color first.
:::

If you would rather define your own, create a metafield such as `custom.color`. These types are supported:

- **Metaobject reference** (recommended) — a single metaobject containing a **Label** plus an **Image** or a **Color (HEX)**.
- **Category (taxonomy)** and **list** metafields — the first selected entry is used.
- **Single-line text** — shown as the swatch tooltip.

You can find more details on how to set up these metafields and metaobjects in [Product Siblings (Product Variations)](/product-page/blocks/product-siblings-block).

#### Settings

 **Enable product siblings / variations as swatches:** turn sibling swatches on or off for product cards. Off by default.

 **Input type:** how each sibling is drawn.
- **Swatch / Image** (default) — uses the color or image from the option value metafield.
- **Product image** — uses the sibling product's featured image as the swatch. The tooltip falls back to the product title when the option value metafield is empty.

 **Option value metafield:** the namespace and key of the metafield holding the option value, for example `shopify.color-pattern` or `custom.color`. It should be a single metaobject containing Label and Image or Color (HEX). List and category (taxonomy) metafields are also supported — the first selected entry is used. A single-line text metafield is also supported and is shown as the swatch tooltip. If this is empty and the input type is **Product image**, the product title is used as the tooltip.

 **Products metafield:** the namespace and key of the metafield holding the linked products, for example `custom.product_variations`.

Once enabled, each linked sibling appears as a swatch on the product card:

![Product siblings swatches on product cards](/img/docs/product-siblings-product-card.png)
