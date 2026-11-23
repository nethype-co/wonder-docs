---
title: "How to Set Up a Wishlist"
sidebar_label: "Wishlist"
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Wishlist?

<SectionMeta version="v2.6.0" />

The **Wishlist** lets customers save products they like by clicking a heart icon and come back to them later on a dedicated wishlist page.

The wishlist is built into the theme: you don't need an app or customer accounts. Saved products are stored in the customer's browser.

<div className="doc-image-frame">
  <img src="/img/docs/wishlist.jpg" alt="Wishlist" />
</div>

## Where the heart appears

When the wishlist is on, customers can save products from:

* **Product cards** in collections, search results and product sliders.
* **Product page gallery**, as a heart on the product images.
* **Buy buttons**, as a heart button next to **Add to cart** on the product page.
* **Header**, as a wishlist icon with a counter of saved products that links to the wishlist page.

Each place can be turned on or off separately (see [Choose where the heart appears](#3-choose-where-the-heart-appears)).

<div className="doc-image-frame">
  <img src="/img/docs/wishlist-example.jpg" alt="Wishlist hearts on product cards" />
</div>

## How to set up the Wishlist?

### 1. Turn on the wishlist

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
2. Open **Theme settings** (the gear icon) **> Wishlist**.
3. Enable **Enable wishlist**.
4. Click **Save**.

### 2. Create the wishlist page

1. In your Shopify admin, go to **Online Store > Pages** and click **Add page**.
2. Name the page **Wishlist**, so its handle is `wishlist`.
3. In **Theme template**, choose **wishlist**.
4. Click **Save**.

The theme finds a page with the handle `wishlist` automatically. To use a page with a different name, select it in **Theme settings > Wishlist > Wishlist page**.

:::note
The header icon only appears when the wishlist is on **and** a wishlist page exists.
:::

### 3. Choose where the heart appears

* **Product cards:** **Theme settings > Wishlist > Show heart on product cards**.
* **Product page gallery:** **Product information** section **> Show wishlist heart on gallery**.
* **Next to Add to cart:** **Product information** section **> Buy buttons** block **> Show wishlist button**.
* **Header:** **Header** section **> Wishlist icon**. Choose where the icon is shown (desktop and mobile, desktop only, mobile only or hidden).

The gallery heart and the **Buy buttons** option are also available in the **Featured product** section.

## Theme Settings

Go to **Theme settings > Wishlist**.

**General**

* **Enable wishlist:** Enable this toggle to turn the wishlist on across the store.
* **Wishlist page:** Choose the page that shows saved products. Leave empty to use the page with the handle `wishlist`.
* **Maximum saved products:** Set how many products a customer can save (10–100). When the limit is reached, the oldest product is removed to make room.

**Product cards**

* **Show heart on product cards:** Enable this toggle to show the heart on product cards.
* **Heart position:** Choose the corner of the image where the heart sits (top right or top left). Applies to product cards and the product gallery.
* **Heart style:** Choose how the heart looks. **Icon only** shows just the heart. **Icon in a circle** places it on a round button that stands out on busy images. Applies to product cards and the product gallery.

**Heart colors**

* **Heart:** Set the color of the heart outline. Leave empty to use the text color.
* **Heart on hover:** Set the heart color when the cursor is over it.
* **Saved heart color:** Set the color of the filled heart on saved products.

**Heart button**

These colors are used by the heart button next to **Add to cart** and by the **Icon in a circle** style. They are independent of the primary and secondary button colors.

* **Background:** Set the button background.
* **Background on hover:** Set the button background on hover.
* **Border:** Set the button border.
* **Border on hover:** Set the button border on hover.

**Custom header icon**

To replace the default wishlist icon in the header with your own, upload it in **Theme settings > Icon set > Wishlist icon**.

## Wishlist Section

The **Wishlist** section shows the customer's saved products. It's already on the **wishlist** page template, set up as a grid of all saved products. You can also add it to other pages, for example as a *Your favorites* slider on the home page.

:::note
The theme editor shows example products, because your own browser's wishlist may be empty. Customers see their own saved products.
:::

**General**

* **Use rich text field for heading:** Enable this toggle to swap the plain heading field for a rich text editor (bold, italic, links, H1–H6).
* **Heading:** Set the section heading. Shown when the rich text option is off.
* **Headline:** Set the section heading in rich text. Shown when the rich text option is on.
* **Disable heading on mobile:** Enable this toggle to hide the heading on mobile.
* **Hide section when no products:** Enable this toggle to hide the whole section when the wishlist is empty. Useful on the home page.
* **Maximum products to show:** Set how many products the slider shows (3–24). Shown when **Enable stack products** is off.
* **Enable stack products:** Enable this toggle to show all saved products in a grid instead of a slider. Recommended for the wishlist page.
* **Show "View all" button:** Enable this toggle to link to the wishlist page when more products are saved than the slider shows.
* **"View all" style:** Choose the style of the **View all** button (primary, secondary or underline link).

**Large screen version**

* **Products per row on desktop:** Set how many products are shown per row on desktop (2–5).
* **Spacing between products on desktop:** Choose the gap between product cards (8, 16 or 24 px).
* **Make products full width:** Enable this toggle to stretch the products to the full width of the screen.

**Mobile version**

* **Products per row on mobile:** Set how many products are visible at once on mobile (1.1–2.5). A decimal value shows part of the next card, hinting that customers can swipe.
* **Spacing between columns on mobile:** Choose the gap between product cards on mobile (4, 8, 12 or 16 px).

**Product card**

The product card settings work the same as in the **Product grid** section: card style (Classic or Pro), max gallery images, quick buy picker, text alignment, image ratio, product video, second image on hover, vendor, rating, quick add button and the size guide popup. See [Product Grid](/collection-page/product-grid) and [How to Set Up a Product Card](/guides/how-to-articles/how-to-set-up-a-product-card) for details.

:::note
Unlike the Product grid, **Show vendor** is on by default in the Wishlist section.
:::

**Colors**

* **Text color:** Set the text color of the section.
* **Background color:** Set the section background.

**Section Spacing**

* **Top distance:** Adjust the spacing above the section.
* **Bottom distance:** Adjust the spacing below the section.
* **Show custom mobile spacing:** Enable this toggle to set separate spacing values for mobile devices.
* **Distance from the top mobile:** Adjust the spacing above the section on mobile. Applied only when Show custom mobile spacing is enabled.
* **Distance from the bottom mobile:** Adjust the spacing below the section on mobile. Applied only when Show custom mobile spacing is enabled.

## How it works

* **Saving:** Clicking the heart saves the product, and the heart fills with the **Saved heart color**. Clicking it again removes the product. The heart updates everywhere on the page at once, for example on the card and in the header counter.
* **Order:** The most recently saved products appear first.
* **Storage:** The wishlist is saved in the customer's browser. It stays after the browser is closed, and open tabs update together. It isn't linked to a customer account, so it doesn't carry over to another device or browser, and clearing browser data empties it.
* **Limit:** When a customer saves more than **Maximum saved products**, the oldest product is removed.
* **Deleted products:** Products you delete or unpublish are removed from wishlists automatically the next time the list is shown.
* **Sold-out products** stay in the wishlist, so customers can come back when they're in stock again.
* **Header counter:** The number next to the header icon shows how many products are saved. It's hidden when the wishlist is empty.
