---
title: "Grid View with Modal"
sidebar_label: "Grid View with Modal"
---

import DocVideo from '@site/src/components/DocVideo';
import SectionMeta from '@site/src/components/SectionMeta';

## What is the Grid view with modal section?

<SectionMeta version="v2.5.0" />

The **Grid view with modal** section displays a grid of visual cards, each with an image or video, heading, and text, that opens a detailed modal popup when clicked. It's ideal for showcasing collections, brand stories, or product highlights while giving customers access to more in-depth content — such as text, video, or images — without leaving the page.

<DocVideo src="/img/docs/grid-view-with-modal-main.webm" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## Main settings

**General**

* **Headline**: Set the title displayed above the grid.

**Card layout**

* **Cards layout**: Choose how the cards are displayed — Grid or Carousel.
* **Make section full width**: Enable this toggle to stretch the section to the full width of the screen.
* **Image ratio**: Choose the shape of the card images — for example, Square.

**Large screen version**

* **Columns per row on desktop**: Set the number of cards displayed per row on desktop.
* **Spacing desktop**: Choose the spacing between cards on desktop — 8px, 16px, or 24px.

**Mobile version**

* **Columns per row on mobile**: Set the number of cards displayed per row on mobile. Works with carousel layout and full width disabled.
* **Spacing mobile**: Choose the spacing between cards on mobile — 4px, 8px, 12px, or 16px.

**Colors**

* **Text color**: Set the text color for the section.
* **Background color**: Set the background color for the section.

**Section spacing**

* **Distance from the top**: Adjust the spacing above the section.
* **Distance from the bottom**: Adjust the spacing below the section. Adds distance from the top and the bottom.
* **Show custom mobile spacing**: Enable this toggle to set separate spacing values for mobile devices.
* **Distance from the top mobile**: Adjust the spacing above the section on mobile devices. Applied only when Show custom mobile spacing is enabled.
* **Distance from the bottom mobile**: Adjust the spacing below the section on mobile devices. Applied only when Show custom mobile spacing is enabled.

## Card Block

The **Card** block adds an individual card within the Grid view with modal section, displaying an image or video, heading, text, and button. Clicking the card opens a modal with additional content.

**General**

* **Heading**: Enter the heading text displayed on the card.
* **Disable heading on mobile**: Enable this toggle to hide the heading on mobile devices.
* **Heading scale large screen**: Set the size of the heading on desktop.
* **Heading scale mobile**: Set the size of the heading on mobile devices.
* **Text**: Enter the descriptive text displayed on the card.
* **Disable on mobile**: Enable this toggle to hide the text on mobile devices.

**Button**

* **Style**: Choose the visual style of the button — Primary or Secondary.
* **Icon**: Choose the icon displayed on the button — Plus or Arrow.
* **Button alignment**: Set the horizontal alignment of the button on the card — Left or Right.

**Card large screen**

* **A Shopify-hosted video**: Select a Shopify-hosted video to display on the card on desktop.
* **Image**: Upload the image displayed on the card on desktop.
* **Large screen text alignment**: Set the horizontal alignment of the text on the card on desktop — Left, Center, or Right.

**Card mobile screen**

* **A Shopify-hosted video**: Select a Shopify-hosted video to display on the card on mobile devices.
* **Image**: Upload the image displayed on the card on mobile devices.
* **Mobile text alignment**: Set the horizontal alignment of the text on the card on mobile devices — Left, Center, or Right.

**Colors**

* **Text color**: Set the text color of the card.
* **Background color**: Set the background color of the card.
* **Background opacity**: Adjust the opacity level of the card's background color.

**Modal**

* **Heading**: Enter the heading text displayed at the top of the modal popup.
* **A Shopify-hosted video**: Select a Shopify-hosted video to display inside the modal.
* **Image**: Upload an image to display inside the modal.
* **Tab content**: Enter the text content displayed inside the modal.
* **Tab content from page**: Select a Shopify page to use as the source of the modal content instead of the manually entered text above.