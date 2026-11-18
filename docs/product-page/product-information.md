---
title: "Product Information"
sidebar_label: "Product Information"
sidebar_position: 0
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Product Information section?

<SectionMeta version="v1.0.0" availability="Product page" />

The Product Information section forms the main product page layout, combining the product media gallery with details such as title, price, variant picker, and buy buttons. It supports a customizable sticky or floating buy button, flexible media layouts (including Fashion, Collage, and Masonry gallery styles), and a range of blocks that can be added, reordered, or removed to build the exact product page experience you need.

![Product Information](/img/docs/product-information.png)

## Main Settings

### Sticky Buy Button

A buy button that stays visible while the customer scrolls the product page. The settings are under the **Sticky buy button** heading of the Product information section.

| Setting | What it does | Default |
|---|---|---|
| **Enable sticky buy button** | Shows a sticky or floating buy button | On |
| **Sticky buy button visibility** | Where it's shown: Only on mobile, Only on desktop, or On both | Only on mobile |
| **Button mode** | How the button behaves: Sticky or Floating | Sticky |
| **Button style** | Primary or Secondary button style | Secondary |
| **Sticky button background opacity** | Opacity of the button's background | 100 |
| **Sticky button background blur** | Blur effect behind the button | 0 |
| **Show shadow** | Shows a shadow behind the button | Off |
| **Show image** | Shows the product image in the bar: Yes or No | Yes |
| **Show product info** | Title only, Price only, Title and price, or None | Title and price |

#### How do I hide the sticky add-to-cart bar?

In the theme editor, open a product template, select **Product information** and turn off **Enable sticky buy button**. To hide it only on phones, keep it on and set **Sticky buy button visibility** to **Only on desktop**.

#### Sticky buy button example

![Sticky Buy Button](/img/docs/sticky-buy-button.png)

### Media

* **Make section full width:** Enable this toggle to stretch the section to the full width of the screen. Works only for "Collage" & "Masonry gallery" layouts.
* **Desktop media size:** Choose the size of the media gallery on desktop — Large or Normal. This option is not compatible with the Fashion style gallery.
* **Desktop layout:** Choose the layout style of the media gallery on desktop — for example, Fashion.
* **Desktop image ratio:** Choose how images are cropped in the gallery on desktop — for example, Original Size.
* **Enable video looping:** Enable this toggle to make product videos loop automatically.
* **Preselect first available variant:** Enable this toggle to automatically select the first available variant when the page loads.
* **Enable image zoom:** Enable this toggle to allow customers to zoom in on product images.

### Video Controls

* **Show default video controls:** Enable this toggle to display the default play/pause and mute controls on videos.
* **Show custom play/pause button:** Enable this toggle to display a custom play/pause button on videos.
* **Show custom unmute button:** Enable this toggle to display a custom unmute button on videos.

### Mobile Version

* **Mobile image:** Choose the size of the media gallery on mobile — Normal or Small.
* **Show thumbnails on mobile:** Enable this toggle to display image thumbnails below the gallery on mobile. Works only with Carousel layout.

## Colors

* **Text and UI element color:** Set the color of the text and UI elements in the section.
* **Background color:** Set the background color of the section.
* **Arrow background color:** Set the background color of the gallery navigation arrows.
* **Arrow background opacity:** Adjust the opacity of the arrow background.
* **Arrow icon color:** Set the color of the arrow icons. If not set, inherits from the section background color.

## Section Spacing

* **Distance from the top:** Adjust the spacing above the section.
* **Distance from the bottom:** Adjust the spacing below the section. Adds distance from the top and the bottom.
* **Show custom mobile spacing:** Enable this toggle to set separate spacing values for mobile devices.
* **Distance from the top mobile:** Adjust the spacing above the section on mobile devices. Applied only when Show custom mobile spacing is enabled.
* **Distance from the bottom mobile:** Adjust the spacing below the section on mobile devices. Applied only when Show custom mobile spacing is enabled.

## Blocks

Inside the Product Information section you can add, reorder, and remove blocks — such as the title, price, variant picker, buy button, description, and upsell blocks — to build the product page layout you need. Each block has its own settings, documented in [Blocks](./blocks/index.md).