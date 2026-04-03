---
title: "Collection Navigator"
sidebar_label: "Collection Navigator"
---

import DocVideo from '@site/src/components/DocVideo';

## What is the Collection Navigator section?

The Collection Navigator section allows you to display products from multiple collections in a single tabbed interface. Customers can switch between collections using the navigation tabs, making it easy to browse different product categories without leaving the page.

<DocVideo src="/img/docs/collection-navigator-desktop.webm" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## Main settings

### General

- **Headline:** Set the title for the section using the rich text editor.
- **Make section full width:** Enable this toggle to stretch the section across the full width of the page.
- **Enable "View all" if the collection has more products than shown:** Display a "View all" button when the collection contains more products than the current maximum display limit.
- **"View all" style:** Choose the visual style of the "View all" button.

### Tabs

- **Enable progress bar:** Display a progress indicator beneath the active tab.
- **Button type:** Choose the style of the tab navigation buttons.

### Large Screen Version

- **Maximum products to show:** Define how many products are displayed per collection tab on the desktop.
- **Columns number:** Select the number of product columns displayed on the desktop.
- **Spacing between products:** Define the gap between product cards on desktop.

### Mobile Version

- **Maximum products to show:** Define how many products are displayed per collection tab on mobile.
- **Columns number:** Select the number of product columns on mobile.
- **Spacing between products:** Define the gap between product cards on mobile.

### Product Card

- **Text alignment:** Set the alignment of product text.
- **Image ratio:** Define the aspect ratio of product images.
- **Show product media video:** Enable to display video for products with Shopify-hosted videos.
- **Show second image on hover:** Display an alternate product image when a customer hovers over the product card.
- **Show vendor:** Display the product vendor name on each product card.
- **Enable vendor link:** Make the vendor name a clickable link.
- **Show product rating:** Display the product rating on each card. Requires a product rating app to be installed.
- **Enable quick add button:** Display a quick add-to-cart button directly on the product card. Recommended for lower-priced items to facilitate quick shopping.

### Colors

The Transparent value is the default and inherits settings from the global theme configuration.

- **Active progress bar color:** Define the color of the active tab's progress bar.
- **Active tab button text color:** Set the text color of the currently active tab button.
- **Text color:** Define the global text color for the section.
- **Background color:** Customize the background color of the entire section.

### Section Spacing

- **Top distance:** Control the spacing above the section.
- **Bottom distance:** Control the spacing below the section.

## Mobile view example

<DocVideo src="/img/docs/collection-navigator-mobile.webm" autoPlay playsInline muted loop style={{width: "40%", display: "block", marginBottom: "20px", marginLeft: "auto", marginRight: "auto", borderRadius: "8px"}} />

## Customize Collection blocks

Each Collection block represents a single tab within the Collection Navigator section. Use the **Add Collection** button to add more tabs, each displaying products from a different collection.

- **Tab label:** Enter the name displayed on the navigation tab using the rich text editor.
- **Collection:** Select the collection whose products will be displayed when this tab is active.
- **Products:** Manually select specific products to display in this tab. When set, these replace the products pulled automatically from the selected collection.

## How to set up Collection Navigator

<DocVideo src="/img/docs/collection-navigator.webm" controls  muted  style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />
