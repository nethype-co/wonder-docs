---
title: "How to Set Up a Size Guide per Product"
sidebar_label: "Size Guide per Product"
---

## How to Set Up a Size Guide per Product

The Wonder Theme's [Variant Picker block](/product-page/blocks/variant-picker-block) includes a built-in size guide popup that appears next to a specific variant option (typically "Size"). It can display a size chart sourced from a product metafield, a Shopify page, or both — and automatically shows different content per product when using metafields.

## Settings Overview

All size guide settings live under the **Size guide popup** section of the Variant Picker block settings in the Theme Editor.

- **Icon** — Choose an icon displayed next to the size guide link (e.g. ruler, shirt, question mark, or none).
- **Link text** — The clickable text displayed next to the variant option (e.g. "Size guide", "Size chart").
- **Variant name** — Enter the variant option name (case-insensitive) that the size guide should appear next to. For most stores this is `Size`. Must exactly match the option name as defined on your products.
- **Content** — Select a Shopify page to use as the popup content. The page's title and body content will be displayed. Useful when the size guide is the same for all products.
- **Metafield** — Provide a metafield namespace and key (format: `namespace.key`) to pull a per-product size chart from product metafields. The metafield type must be **multi-line text**. Use this when each product needs its own size chart.
- **Enable striped rows** — When enabled, odd rows in the metafield size table will have a grey background for easier reading.

## How the Content Priority Works

The popup displays content based on which settings are filled in:

| Settings filled | What the popup shows |
|-----------------|---------------------|
| **Metafield only** | Size table from the product metafield |
| **Content (page) only** | Page title + page body content |
| **Both metafield and content** | Page title on top, then the metafield size table, then the page body content |
| **Neither** | The popup link will not be displayed |

The **Link text** field must be filled in for the popup to appear — if empty, the entire size guide link is hidden.

## Metafield Format for Per-Product Size Charts

Create a product metafield with type **multi-line text** (Shopify admin → **Settings** → **Custom data** → **Products** → **Add definition**).

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

## Step-by-Step Setup

### Step 1: Create the metafield definition

1. Go to **Settings** → **Custom data** → **Products** in your Shopify admin.
2. Click **Add definition**.
3. Configure the definition:
   - **Name:** `Size chart`
   - **Namespace and key:** `custom.size_chart`
   - **Type:** **Multi-line text**
4. Save the definition.

### Step 2: Fill in the metafield per product

1. Open a product in your Shopify admin.
2. Scroll down to the **Metafields** section.
3. Find the **Size chart** field and paste in your pipe-separated size table (see format above).
4. Save the product.
5. Repeat for each product that should have its own size chart.

### Step 3: Configure the Variant Picker block

1. Open the Theme Editor and navigate to a product page.
2. Select the **Variant Picker** block.
3. Scroll to the **Size guide popup** section and configure:
   - **Link text:** `Size guide`
   - **Variant name:** `Size` (must match your product option name exactly)
   - **Icon:** `ruler` (or any icon you prefer)
   - **Metafield:** `custom.size_chart`
   - **Enable striped rows:** enabled
4. Save the changes.

Now each product page displays a "Size guide" link next to the Size option, opening a popup with that product's specific size chart.

## Using a Shared Page Instead

If all your products use the same size guide, you can skip the metafield and use a single Shopify page:

1. Create a new page in **Online Store** → **Pages** with your size guide content (text, tables, images).
2. In the Variant Picker block's **Content** setting, select the page you created.
3. Leave the **Metafield** field empty.

The popup will display the page's title and content for all products.

## Combining Both

You can fill in both **Metafield** and **Content** if you want a shared page with per-product tables. The popup will show:

1. The page title
2. The product-specific size table (from the metafield)
3. The page body content (e.g. measurement instructions, care tips)

This is useful when you want consistent surrounding content (like "How to measure") but different size charts per product.
