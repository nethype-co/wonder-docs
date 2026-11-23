---
title: "Block - Shop the Look"
sidebar_label: "Block - Shop the Look"
sidebar_position: 2
---

import SectionMeta from '@site/src/components/SectionMeta';
import DocVideo from '@site/src/components/DocVideo';

## What is the Shop the Look block?

<SectionMeta version="v2.6.0" availability="Product grid" />

The **Shop the look** block adds a banner between the products on a collection page. When a customer clicks it, a drawer slides in with a set of products they can add to the cart right away, without leaving the collection.

Use it to sell a styled outfit, a furnished room, a skincare routine, or a product bundle: the photo shows the products together, and the drawer lets customers buy them in one place.

The block belongs to the [Product Grid](./product-grid.md) section.

<DocVideo src="/img/docs/shop-look-example.mp4" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## How to add it

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
2. Open a collection page (**Collections > Default collection**).
3. In the **Product grid** section, click **Add block** and choose **Shop the look**.
4. Upload the banner **Image** (in **Large screen version**, and optionally in **Mobile version**).
5. In **Products**, pick the products shown in the photo.
6. Set **Position before nth product** to choose where the banner appears in the grid.
7. Click **Save**.

:::note
The banner's button appears only when the block has at least one product to show. Without products, it works like a regular banner.
:::

## How it works for customers

1. The customer sees the banner in the product grid. Clicking anywhere on the banner, or on its button, opens the drawer.
2. The drawer slides in from the side. On desktop, the look image is shown next to it. On mobile, the image is shown above the products.
3. Each product has its image, title, price, option pickers, an optional quantity selector, and an **Add to cart** button.
4. Choosing options updates the price, the image (if the variant has its own), and the button. Sold-out options are marked, and the button changes to *Sold out* or *Unavailable* when needed.
5. **Add to cart** adds the product without closing the drawer. The button briefly shows *Added*, the cart counter in the header updates, and a **View cart** button appears at the bottom of the drawer.
6. **View cart** opens the cart drawer (if your cart type is set to drawer) or the cart page.

Customers can close the drawer with the close button, by clicking outside it, with the Esc key, or by swiping it away on mobile.

## Main Settings

### Banner

* **Text:** The text on the banner. Default: *Shop the look*.
* **Text style:** The typography of the banner text: **Heading** or **Body** (default).
* **Button text:** The text of the banner button. Leave empty to use the drawer **Heading**.
* **Style:** The style of the banner button: **Primary** (default), **Secondary**, or **Underline Link Button**.
* **Position before nth product:** Where the banner appears in the grid (default 1). For example, *5* places it before the 5th product.

### Drawer

* **Products:** The products shown in the drawer, in this order.
* **Heading:** The drawer heading. Default: *Shop the look*.
* **Show product count:** On by default. Shows the number of products next to the heading.
* **Hide sold out products:** Off by default. Leaves sold-out products out of the drawer and the product count.
* **Show quantity selector:** On by default. Lets customers choose a quantity before adding a product.
* **Image ratio:** The shape of the product images in the drawer: **Adapt to image**, **Portrait**, or **Square** (default).
* **Show image in the drawer:** On by default. Shows the look image next to the drawer on desktop and above the products on mobile.
* **Drawer image (desktop):** The image shown next to the drawer on desktop. Defaults to the desktop banner image. Shown when **Show image in the drawer** is on.
* **Drawer image (mobile):** The image shown in the drawer on mobile. Defaults to the mobile banner image, then the desktop drawer image. Shown when **Show image in the drawer** is on.

### Large screen version

* **Banner column width:** How many product columns the banner spans on desktop: **1** or **2** (default).
* **Text scale large screen:** The size of the banner text on desktop, from 100 to 400% (default 180%).
* **Image:** The banner image on desktop.
* **A Shopify-hosted video:** A video to use instead of the image on desktop.
* **Vertical text position:** The vertical position of the text on the banner: **Top**, **Center** (default), or **Bottom**.
* **Horizontal text position:** The horizontal position of the text on the banner: **Left**, **Center** (default), or **Right**.

### Mobile version

* **Banner column width:** How many product columns the banner spans on mobile: **1** or **2** (default).
* **Text scale mobile screen:** The size of the banner text on mobile, from 100 to 300% (default 180%).
* **Image:** The banner image on mobile.
* **A Shopify-hosted video:** A video to use instead of the image on mobile.
* **Vertical text position:** The vertical position of the text on mobile: **Top**, **Center** (default), or **Bottom**.
* **Horizontal text position:** The horizontal position of the text on mobile: **Left**, **Center** (default), or **Right**.

### Colors

* **Text color:** The color of the banner text.
* **Background color:** The color of the overlay on the banner.
* **Background opacity:** The opacity of the overlay, from 0 to 100% (default 100%).

## How it works

* **Option pickers:** Pickers follow your theme's swatch setup. Options listed in **Theme settings** as color or picture swatches show as swatches. Other options show as buttons when they have up to 6 values, and as a dropdown when they have more.
* **Variant images:** When a variant has its own image, the drawer shows it. Otherwise, the product's main image is used.
* **Pagination:** The banner appears only on the page that contains its position. For example, with 24 products per page, a banner set before the 30th product appears on page 2. With **Load more**, it appears once, when that product loads.
* **Several looks:** You can add several **Shop the look** blocks to one collection, each with its own products and position.
