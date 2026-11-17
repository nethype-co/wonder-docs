---
title: "How to Set Up the Compare Products Feature"
sidebar_label: "Compare Products Feature"
sidebar_position: 2
---

import SectionMeta from '@site/src/components/SectionMeta';
import DocVideo from '@site/src/components/DocVideo';

## What is the Compare Products feature?

<SectionMeta version="v2.6.0" availability="Collection page" />

The **Compare Products** feature lets customers pick several products on a collection page and see them side by side in a comparison table: images, price, description, vendor and any product details you store in metafields. Customers can add a product to the cart or open its page straight from the table.

The feature is part of the **Product grid** section on collection pages. You set it up with the **Compare product** block and its row blocks.

<DocVideo src="/img/docs/compare-products-desktop.mp4" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## How to set up the Compare Products feature?

* In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
* Open a collection page (**Collections > Default collection**).
* Click the **Product grid** section and turn on **Compare products**.
* A **Compare product** block appears inside the **Product grid** section. Click it to set up the compare bar, popup and buttons.
* Inside the **Compare product** block, add, remove or drag the row blocks (**Price row**, **Description row**, **Vendor row**, **Custom row**) to choose which rows the comparison table shows and in what order.
* Click **Save**.

:::note
The **Compare product** block holds the settings only. Customers start comparing by turning on the **Compare** toggle above the product grid.
:::

## How it works for customers

* On a collection page, the customer turns on the **Compare** toggle in the toolbar above the products. A checkbox appears on every product card.
* Ticking a checkbox adds the product to the **compare bar** at the bottom of the screen. The bar shows thumbnails of the selected products, empty placeholder slots for the rest, and a counter, for example *Compare (2/5)*.
* When the maximum is reached, the remaining checkboxes are locked and their tooltip reads *Compare full (5/5)*. Removing a product from the bar frees a slot.
* The **Compare** button in the bar opens the comparison as a **popup** or on a **separate page**, depending on your settings.
* In the comparison table, the customer can remove products, open a product with **View details**, or add it to the cart.

The selection is saved in the customer's browser. It stays when they move between pages, filter, sort, or come back later.

## Mobile view example

<DocVideo src="/img/docs/compare-products-mobile.mp4" autoPlay playsInline muted loop style={{display: "block", maxWidth: "350px", width: "100%", margin: "0 auto 20px", borderRadius: "8px"}} />

## Compare Product Block Settings

**General**

* **Show product limit:** Enable this toggle to show the selected count against the maximum in the compare bar, for example *Compare (2/5)*. When off, the bar just says *Compare*.
* **Maximum products to compare:** Set how many products a customer can compare at once (2–7). It also sets the number of slots in the compare bar.
* **Compare button opens:** Choose whether the **Compare** button opens the comparison in a **popup** on the collection page or on a separate **page**.
* **Compare page:** Choose the page to open when **Compare button opens** is set to **Page**. See [Using a compare page](#using-a-compare-page). Without a page, the popup is used.

**Buttons**

* **Clear button style:** Choose the style of the **Clear all** button in the compare bar (primary, secondary or underline link).
* **Compare button style:** Choose the style of the **Compare** button in the compare bar (primary, secondary or underline link).
* **Icon position on product cards:** Choose where the compare checkbox sits on product cards (top left or top right). If the wishlist heart is in the same corner, the checkbox sits next to it.

**Colors**

* **Compare icon color:** Set the outline and fill of the compare checkbox on product cards. With a light color, the check mark automatically turns dark so it stays visible.
* **Text color:** Set the text color in the compare bar. Transparent uses your theme colors.
* **Placeholder color:** Set the color of the empty slots in the compare bar.

**Popup**

These settings shape the comparison table. They apply to the popup, and the image ratio, text alignment and **Add to cart button style** also apply on the compare page.

* **Popup heading:** Set the heading at the top of the popup.
* **Image ratio:** Choose the shape of the product images in the table (adapt to image, portrait or square).
* **Text alignment for rows:** Choose the text alignment of the values in the table rows (left, center or right).
* **Show view details button:** Enable this toggle to add a **View details** button under each product that links to its product page.
* **View details button style:** Choose the style of the **View details** button (primary, secondary or underline link). Shown when the button is on.
* **Add to cart button style:** Choose the style of the add to cart button for single-variant products, in the popup and on the compare page (primary, secondary or underline link).

## Row Blocks

Row blocks decide which rows appear in the comparison table and in what order. Product images and titles are always shown at the top, so you don't need a row for them. The **Compare product** block comes with **Price row** and **Description row** by default.

**Price row**

Shows the product price. Products with prices that vary by variant show *From …*.

* **Row label:** Leave blank to use *Price*.

**Description row**

Shows the product description as plain text.

* **Row label:** Leave blank to use *Description*.
* **Show full description:** Enable this toggle to show the whole description. When off, only the first 25 words are shown, which keeps collection pages light.

**Vendor row**

Shows the product vendor.

* **Row label:** Leave blank to use *Vendor*.

**Custom row**

Shows the value of a product metafield. You can add as many custom rows as you like, one per metafield.

* **Product metafield:** Enter the namespace and key, for example `custom.material`.
* **Row label:** Set the name shown in the table. Leave blank to use the metafield path.

## Video Tutorial

<DocVideo src="/img/docs/compare-products-how-to.mp4" controls playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## Using a compare page

Instead of a popup, the comparison can open on its own page. This gives the table more room, which helps with many products or long descriptions.

* In your Shopify admin, go to **Online Store > Pages** and create a page, for example *Compare*.
* In the theme editor, open the **Compare product** block and set **Compare button opens** to **Page**.
* Choose your page in **Compare page**.

Any page works: it always opens with the theme's **compare** template (`page.compare`), whatever template the page itself uses. The page shows the products the customer selected, with the rows set up in the **Compare product** block. If no products are selected, it shows *Select products to compare.*

The **Compare products** section on the compare template has its own settings. Edit them by opening the page in the theme editor with the **compare** template.

**General**

* **Clear button style:** Choose the style of the **Clear all** button on the page (primary, secondary or underline link).
* **Show view details button:** Enable this toggle to add a **View details** button under each product.
* **View details button style:** Choose the style of the **View details** button (primary, secondary or underline link).

**Section Spacing**

* **Distance from the top:** Adjust the spacing above the section.
* **Distance from the bottom:** Adjust the spacing below the section.

## Add to cart from the comparison

* **Products with one variant** show an add to cart button that adds the product directly.
* **Products with several variants** (or product variations set up via a metafield) show **Choose option**, which opens quick buy so the customer can pick a variant, as on product cards.
* **Sold-out products** can't be added to the cart.

## Tips

* Use **Custom rows** for the details that set your products apart, such as material, size, capacity or ingredients. Fill the same metafields on all products in the collection so the table has no gaps.
* Keep **Show full description** off for long descriptions. The first 25 words are usually enough to compare, and the page loads faster.
* A **Maximum products to compare** of 3–4 reads best on mobile. Higher values suit stores where customers mostly shop on desktop.
* For a static, hand-written comparison you add to any page, use the [Compare Products](/sections/products/compare-products) section (two products with a "VS" badge) or the [Comparison Table](/sections/products/comparison-table) section. Both are separate from this collection page feature.
* Custom row values come from the products loaded with the page. Products added later with **Load more** or infinite scroll show the price, description and vendor, but their custom rows stay empty.
