---
title: "Product Grid"
sidebar_label: "Product Grid"
sidebar_position: 1
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Product Grid section?

<SectionMeta version="v1.0.0" availability="Collection page" />

The **Product grid** section is the main section of a collection page. It shows the collection's products together with the toolbar for sorting and filtering, and the pagination. Here you choose the grid layout and the product card style, and you can turn on product comparison.

You can also mix promotional content into the grid with **Banner card** and **Shop the look** blocks, placed between products.

## Where to find it

* In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
* In the page selector at the top, choose **Collections > Default collection** (or another collection template).
* Click the **Product grid** section in the sidebar.

:::note
The section is part of the collection template and can't be added to other pages. Changes apply to every collection that uses this template. To give some collections a different layout, create a new collection template and assign it in **Products > Collections**.
:::

<div className="doc-image-frame">
  <img src="/img/docs/product-grid.jpg" alt="Product grid" />
</div>

## Main Settings

**General**

* **Make section full width:** Enable this toggle to stretch the grid to the full width of the screen.

**Pagination**

* **Products per page:** Set how many products load at once, from 12 to 120.
* **Pagination type:** Choose how customers reach more products. **Standard** shows numbered pages. **Load more button** adds the next products below the current ones without leaving the page.
* **Enable previous/next labels:** Enable this toggle to add *Previous* and *Next* text to the page arrows. Shown for **Standard** pagination.
* **Load more button style:** Choose the style of the **Load more** button (primary, secondary or underline link). Shown for **Load more button** pagination.
* **Show progress bar and item count:** Enable this toggle to show how many products have been loaded out of the total, with a progress bar. Shown for **Load more button** pagination.
* **Hide incomplete last row:** Enable this toggle to hide products that don't fill the last row, so the grid always ends with a full row. The hidden products appear after the customer clicks **Load more**. Shown for **Load more button** pagination.

**Large screen version**

* **Number of columns:** Choose 3 or 4 products per row on desktop.
* **Spacing between products:** Choose the gap between product cards on desktop (8, 16 or 24 px).

**Mobile version**

* **Number of columns:** Choose 1 or 2 products per row on mobile and tablet.
* **Fill gaps before banners on mobile:** Enable this toggle so that, when a full-width banner would leave an empty cell, the next product moves up to fill it. The banner may then appear one product later.
* **Spacing between columns:** Choose the gap between product cards on mobile (4, 8, 12 or 16 px).

**Product card**

These settings are described in detail in [How to Set Up a Product Card](/guides/how-to-articles/how-to-set-up-a-product-card).

* **Image ratio:** Choose the shape of product images (adapt to image, portrait or square).
* **Card style:** Choose **Classic** or **Pro**. Pro adds an image gallery inside the card and a new quick buy.
* **Max gallery images:** Set how many images the in-card gallery shows (2–10). **Pro** only.
* **Enable quick buy picker:** Enable this toggle to add a size picker directly on the card. It replaces the quick add button. **Pro** only.
* **Options shown in the picker:** Enter the option names, one per line, that open the size picker, for example *Size* or *Shoe size*. Products with a single option of this name get the picker; others fall back to the quick add drawer. Shown when the quick buy picker is on.
* **Show product media video:** Enable this toggle to play the product's video in the card. Works with Shopify-hosted videos. **Classic** only.
* **Show second image on hover:** Enable this toggle to show the product's second image when the cursor is over the card. **Classic** only.
* **Show vendor:** Enable this toggle to show the product vendor on the card.
* **Enable vendor link:** Enable this toggle to turn the vendor name into a link to all products from that vendor. Shown when **Show vendor** is on.
* **Show product rating:** Enable this toggle to show star ratings. Requires a product reviews app ([which app to choose](/guides/how-to-articles/which-reviews-app-should-you-use-on-shopify-free-paid-options)).
* **Show review count:** Enable this toggle to show the numeric rating next to the stars. Shown when ratings are on.
* **Hide rating if no reviews:** Enable this toggle to hide the stars on products that have no reviews yet. Shown when ratings are on.
* **Enable product url within collection:** Enable this toggle to link products through the collection (`/collections/…/products/…`). This keeps the collection in the breadcrumbs and in navigation on the product page.
* **Enable quick add button:** Enable this toggle to add an add to cart button to the card. Recommended for lower-priced products. **Classic** only.
* **Desktop button position:** Choose where the quick add button appears on desktop (on hover or below product). Shown when quick add is on.
* **Text alignment:** Choose the alignment of the product title, price and other card text (center or left).

**Size guide popup**

These settings are shown when **Card style** is **Pro** and the **quick buy picker** is on. They add a size guide link to the picker. See the [Information popup block](/product-page/blocks/information-popup-block) article for details.

* **Link text:** Enter the text of the size guide link in the picker header. Leave empty to hide the link.
* **Content:** Choose an optional page (title and content) shown in the size guide popup, below the table.
* **Metafield:** Enter the product metafield holding the size table, for example `custom.size_chart`. Separate rows with new lines and cells with `|`. A leading `#` marks a header cell.

**Toolbar**

* **Mobile toolbar style:** Choose how the sorting and filter controls look on mobile (minimal or buttons).
* **Enable sorting:** Enable this toggle to let customers sort products, for example by price or newest.
* **Enable filtering:** Enable this toggle to show the filters. Set up which filters appear in the **Search & Discovery** app ([Shopify help](https://help.shopify.com/manual/online-store/search-and-discovery/filters)).
* **Filters position:** Choose where the filters are shown. **Always visible** shows them in a sidebar next to the grid. **Drawer** hides them behind a **Filter** button that opens a side panel.
* **First filter group expanded by default:** Enable this toggle to open the first filter group when the page loads.
* **Compare products:** Enable this toggle to let customers compare products side by side. See [Compare Products](./how-to-set-up-the-compare-products-feature.md).

**Section Spacing**

* **Distance from the top:** Adjust the spacing above the section.
* **Distance from the bottom:** Adjust the spacing below the section.
* **Show custom mobile spacing:** Enable this toggle to set separate spacing values for mobile devices.
* **Distance from the top mobile:** Adjust the spacing above the section on mobile. Applied only when Show custom mobile spacing is enabled.
* **Distance from the bottom mobile:** Adjust the spacing below the section on mobile. Applied only when Show custom mobile spacing is enabled.

## Banner Card Block

Adds a promotional banner between products: an image or video with text, a button and a link. For all settings, see the [Banner Card](/sections/banners/banner-card) article.

<div className="doc-image-frame">
  <img src="/img/docs/banner-card.jpg" alt="Banner card" />
</div>

The most important settings for placing it in the grid:

* **Position before nth product:** Defines where the banner appears in the grid. For example, setting **5** places the banner **before the 5th product**.
* **Banner column width:** Choose whether the banner spans one or two product columns. Set separately in **Large screen version** and **Mobile version**.

## Shop the Look Block

A banner like **Banner card**, but clicking it opens a side drawer with a set of products that customers can add to the cart without leaving the collection. Use it to show a styled outfit, a room setup or a product bundle. For all settings, see the [Shop the Look](./block-shop-the-look.md) article.

The most important settings for placing it in the grid:

* **Products:** Choose the products shown in the drawer.
* **Position before nth product:** Defines where the banner appears in the grid.
* **Banner column width:** Choose whether the banner spans one or two product columns. Set separately in **Large screen version** and **Mobile version**.

## Compare Product Block

Appears automatically when **Compare products** is turned on in the **Toolbar** settings. It holds the settings of the compare bar and popup, and the rows of the comparison table. See [Compare Products](./how-to-set-up-the-compare-products-feature.md).

## Tips

* Pick **Products per page** as a multiple of your column count (for example 24 with 3 or 4 columns) so pages end with full rows. With **Load more**, **Hide incomplete last row** does this for you.
* With many filters, **Always visible** works well on wide screens. Choose **Drawer** to give products the full width.
* Place banners at positions that start a row (for example 1, 4, 7 with 3 columns) so 2-column banners don't leave empty cells. On mobile, **Fill gaps before banners on mobile** helps when that isn't possible.
* **Enable product url within collection** helps customers return to the collection they were browsing, but the same product then has several URLs. Shopify sets the canonical URL, so this doesn't hurt SEO.
