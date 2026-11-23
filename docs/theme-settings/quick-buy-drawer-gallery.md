---
title: "Quick buy drawer gallery"
sidebar_label: "Quick buy drawer gallery"
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the quick buy drawer gallery?

<SectionMeta version="v2.6.0" availability="Theme settings > Cart" />

The quick buy drawer gallery shows all of a product's images and Shopify-hosted videos in the quick buy drawer, instead of the first image only. Customers can swipe, drag, or click through the media before they add the product to the cart.

The gallery is off by default, so your quick buy drawer looks the same as before until you turn it on.

![](/img/docs/quick-buy-drawer-gallery.jpg)

## How to set up

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
2. Open **Theme settings** (the gear icon) **> Cart**.
3. Scroll down to **Quick buy drawer**.
4. Check **Show product gallery**.
5. Adjust the gallery settings (see below).
6. Click **Save**.

The other gallery settings appear only after you check **Show product gallery**.

:::note
The gallery uses the media of the product itself. You don't need to add any blocks or set anything up on the product.
:::

## Main Settings

Go to **Theme settings > Cart > Quick buy drawer**.

* **Show product gallery:** Off by default. Shows every product image with arrows and a counter instead of the first image only. Picking a variant scrolls to its image.
* **Images in view:** How many images are visible at once, from 1 to 2 (default 1). Use a fraction, for example 1.5, to show part of the next image. The same value is used on desktop and mobile.
* **Gap between images:** The space between images, from 0 to 40 px (default 8 px).
* **Image ratio:** **Adapt to image** (default) shows each image at its own height. **Portrait** (4:5) and **Square** (1:1) crop every image and video to the same shape.
* **Show arrows:** On by default. Shows previous and next arrows on the sides of the image. The arrows appear on hover.
* **Pagination:** What appears below the images: **Counter and line** (default), **Counter**, **Dots**, or **None**. See [Pagination styles](#pagination-styles).

All settings except **Show product gallery** are shown only when **Show product gallery** is on.

### Pagination styles

* **Counter and line** (default): A counter, for example *1/5*, and a line split into parts that highlights the current position.
* **Counter:** Only the counter.
* **Dots:** A row of dots, one for each position. Customers can click a dot to jump to it.
* **None:** Nothing below the images. Customers still move through the gallery with arrows, swiping, or dragging.

### Arrow style

The gallery arrows look like the other slider arrows in your theme. To change their colors and shape, go to **Theme settings > Icon set > Set next/prev icon** and adjust **Icon background**, **Background opacity**, **Icon color**, and **Border radius**.

## How it works

### Where the drawer opens

The gallery appears everywhere the quick buy drawer opens. For example:

* **Classic product cards:** The **Choose option** button on products with more than one variant (or with product siblings as swatches).
* **Pro product cards:** The quick buy picker button, when the picker can't show the product's options on the card itself. For example, when the product has more than one option, or its option isn't listed in **Options shown in the picker**.
* **Other buttons** that can open the quick buy drawer, such as the ones in the **Upsell** and **Complementary products** blocks, shoppable videos, and the compare popup.

### What the gallery shows

* **Images and Shopify-hosted videos** of the product, in the same order as on the product page. The image of the selected variant comes first.
* **Videos** play automatically, muted and on a loop, and show their cover image while they load.
* **YouTube and Vimeo videos and 3D models** aren't shown in the drawer gallery.
* **One image only:** The gallery shows the image without arrows or pagination.
* **All images in view:** When all images fit in view at once, the pagination is hidden.

### Variants

When a customer picks a variant, the gallery scrolls to that variant's image. If the variant has no image of its own, the gallery stays where it is.

### Moving through the gallery

* **Mobile and touch screens:** Customers swipe through the images.
* **Desktop:** Customers can click the arrows, or press and drag the images with the mouse. When they let go, the gallery snaps to the nearest image. Dragging doesn't trigger a click on the image.
* **Arrows:** Arrows appear on screens 900 px wide and larger, when the cursor is over the gallery. An arrow is hidden when there's nothing more to show in that direction, for example the previous arrow on the first image. With **Show arrows** off, customers can still swipe, drag, and use the keyboard.
* **Keyboard:** Customers can Tab to the gallery and use the Left and Right arrow keys, and Home and End, to move through it.
* **Edges:** The gallery runs to the edges of the drawer, so the neighbouring images peek in at the sides.

### Several images in view

With **Images in view** above 1:

* The arrows move one image at a time.
* The counter, line, and dots count positions, not images. For example, with 4 images and 2 images in view, there are 3 positions, so the counter goes from *1/3* to *3/3*.

### Product siblings

If your product page has a **Product siblings** block, it also appears in the quick buy drawer. When a customer clicks a sibling there, the drawer reloads with that product (its gallery, price, options, and add to cart button) instead of leaving the page. The **View all details** link then goes to the sibling's product page.

* Clicking the product that is already selected does nothing.
* Customers can still open a sibling in a new tab, for example with Ctrl-click or Cmd-click.
* If the sibling can't be loaded in the drawer, the customer is taken to the sibling's product page.

### With the gallery off

The drawer shows only the first product image, as in earlier versions. Picking a variant swaps it for the variant's image.
