---
title: "Grid View with Drawer"
sidebar_label: "Grid View with Drawer"
---

import DocVideo from '@site/src/components/DocVideo';

## What is the Grid View with Drawer section?

The **Grid View with Drawer** section allows you to display products in a structured grid or carousel layout. Each product card can be opened in a side drawer for a quick preview, letting customers explore product details without navigating away from the page.

<DocVideo src="/img/docs/grid-view-with-drawer-main.webm" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## Main settings

**General**

* **Heading**: Set the title for the section using the rich text editor.
* **Make section full width**: Enable this toggle to stretch the section across the full width of the page.

**Card Layout**

* **Cards layout**: Choose between Grid (static layout) or Carousel (scrollable layout) for displaying product cards.
* **Image ratio**: Define the aspect ratio of product images.

**Large Screen Version**

* **Columns per row on desktop**: Define how many product columns are displayed on desktop.
* **Spacing desktop**: Define the gap between product cards on desktop.

**Mobile Version**

* **Columns per row on mobile**: Define how many product columns are displayed on mobile.
* **Spacing mobile**: Define the gap between product cards on mobile.

**Colors**

The Transparent value is the default and subsequently inherits the value from the global settings.

* **Text color**: Define the global text color for the section.
* **Background color**: Customize the background color of the entire section.

**Section Spacing**

* **Distance from the top**: Adjust the spacing above the section.
* **Distance from the bottom**: Adjust the spacing below the section.

## Card Block

The **Card** block represents a single item within the Grid View with Drawer section. Each card displays an image, heading, and text, and can open a drawer with additional details.

**General**

* **Heading**: Set the title displayed on the card using the rich text editor.
* **Disable on mobile**: Hide this card on mobile devices.
* **Heading scale large screen**: Adjust the heading font size on desktop as a percentage of the base size.
* **Heading scale mobile**: Adjust the heading font size on mobile as a percentage of the base size.
* **Text**: Add a short description or supporting copy displayed beneath the heading on the card.
* **Disable on mobile**: Hide the text on mobile devices.

**Button**

* **Style**: Choose between Primary or Secondary visual style for the card button.
* **Icon**: Select the button icon — Plus or Arrow.
* **Button alignment**: Set the horizontal alignment of the button to Left or Right.

**Card Large Screen**

* **A Shopify-hosted video**: Select a video to display on the card on desktop.
* **Image**: Upload or select the image displayed on the card on desktop.
* **Large screen text alignment**: Set the alignment of text on desktop — Left, Center, or Right.

**Card Mobile Screen**

* **A Shopify-hosted video**: Select a video to display on the card on mobile.
* **Image**: Upload or select the image displayed on the card on mobile.
* **Large screen text alignment**: Set the alignment of text on mobile — Left, Center, or Right.

**Colors**

The Transparent value is the default and inherits its value from the section settings or, if not specified, from the global settings.

* **Text color**: Define the text color for this individual card.
* **Background color**: Set the background color of the card.
* **Background opacity**: Adjust the opacity of the background color.

**Drawer**

* **Heading**: Set the title displayed inside the drawer using the rich text editor.
* **Image**: Upload or select an image shown inside the drawer.
* **Tab content**: Add additional details related to this card item. Content will be displayed inside the drawer.
* **Tab content from page**: Select a page whose content will be used as the drawer tab content.