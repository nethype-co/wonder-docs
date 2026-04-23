---
title: "Variant picker block"
sidebar_label: "Variant picker block"
---

import SectionMeta from '@site/src/components/SectionMeta';

## **Variant picker block** 

<SectionMeta version="v1.0.0" availability="Product page" />

This option allows customers to select product variants, like color or size, through a dropdown menu or button format. Merchants can personalize the display by choosing custom colors for the variant options and how they appear, ensuring a seamless and branded shopping experience. Additionally, the feature includes a pop-up implementation for detailed product information and links to further informative pages, enhancing customer engagement and informed purchasing.

Learn more about the differences between [**Standard Variant Picker** and **Product Variations**](/guides/how-to-articles/standard-variant-picker-vs-product-variations-block) in our detailed comparison guide.

![](/img/docs/2a529427e61f.jpg)

:::tip Shopify Category Metafields
Shopify provides native color swatches via category metafields. When defined, the theme automatically uses these values for swatch display. See the [Shopify Category Metafields guide](https://help.shopify.com/en/manual/custom-data/metafields/category-metafields/using-category-metafields) for setup instructions.
:::

## **Settings**

![](/img/docs/6a0fc3e1ee3c.jpg)

## Size Guide Popup

The Variant Picker block includes a built-in size guide popup that appears next to a specific variant option (typically "Size"). It can display a size chart sourced from a product metafield, a Shopify page, or both — and automatically shows different content per product when using metafields.

### Settings

Under the **Size guide popup** section of the Variant Picker block settings:

- **Icon** — Choose an icon displayed next to the size guide link (e.g. ruler, shirt, question mark, or none).
- **Link text** — The clickable text displayed next to the variant option (e.g. "Size guide", "Size chart").
- **Variant name** — Enter the variant option name (case-insensitive) that the size guide should appear next to. For most stores this is `Size`. Must exactly match the option name as defined on your products.
- **Content** — Select a Shopify page to use as the popup content. The page's title and body content will be displayed. Useful when the size guide is the same for all products.
- **Metafield** — Provide a metafield namespace and key (format: `namespace.key`) to pull a per-product size chart from product metafields. The metafield type must be **multi-line text**. Use this when each product needs its own size chart.
- **Enable striped rows** — When enabled, odd rows in the metafield size table will have a grey background for easier reading.

### How the content priority works

The popup displays content based on which settings are filled in:

| Settings filled | What the popup shows |
|-----------------|---------------------|
| **Metafield only** | Size table from the product metafield |
| **Content (page) only** | Page title + page body content |
| **Both metafield and content** | Page title on top, then the metafield size table, then the page body content |
| **Neither** | The popup link will not be displayed |

The **Link text** field must be filled in for the popup to appear — if empty, the entire size guide link is hidden.

### Metafield format for per-product size charts

Create a product metafield with type **multi-line text** (Shopify admin → Settings → Custom data → Products → Add definition).

Use the following format in the metafield value:
- Use `|` (pipe) to separate columns within a row
- Use new lines to separate rows
- Prefix a cell with `#` to render it as a header (`<th>`) instead of a regular cell (`<td>`)

**Example metafield value:**

```
#Size | #Chest (cm) | #Waist (cm)
S | 88-92 | 72-76
M | 96-100 | 80-84
L | 104-108 | 88-92
XL | 112-116 | 96-100
```

This renders as a proper size table inside the popup. You can set a different value per product, and the theme automatically displays the correct chart.

### Setup Example

1. **Create a metafield definition:**
   - Go to **Settings** → **Custom data** → **Products** → **Add definition**.
   - Name: `Size chart`, namespace/key: `custom.size_chart`, type: **Multi-line text**.

2. **Fill in the metafield per product** using the pipe-separated format above.

3. **Configure the Variant Picker block:**
   - **Link text:** `Size guide`
   - **Variant name:** `Size` (must match your product option name)
   - **Icon:** `ruler`
   - **Metafield:** `custom.size_chart`
   - **Enable striped rows:** enabled

Now each product page displays a "Size guide" link next to the Size option, opening a popup with that product's specific size chart.
