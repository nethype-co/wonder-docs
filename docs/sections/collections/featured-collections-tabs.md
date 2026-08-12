---
title: "Featured Collections: Tabs"
sidebar_label: "Featured Collections: Tabs"
---

import DocVideo from '@site/src/components/DocVideo';
import SectionMeta from '@site/src/components/SectionMeta';

### What is the Featured Collections: Tabs section?

<SectionMeta version="v2.3.0" />

The Featured Collections: Tabs section allows you to display products from multiple collections in a tabbed interface. Customers can easily switch between collections using navigation tabs, making it simple to browse different product categories without leaving the page.

<DocVideo src="/img/docs/featured-collection-tabs-desktop.webm" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

### Main settings

**General**

- **Heading:** Set the title for the section. Optionally enable the rich text field to access text formatting options.
- **Disable on mobile:** Hide the entire section on mobile devices.
- **Enable stack products:** Enable stacking behavior for product cards within the section.
- **Enable "View all" if collection has more products than shown:** Display a "View all" button when the collection contains more products than the current display limit.
- **"View all" style:** Choose the visual style of the "View all" button.

**Large Screen Version**

- **Products per row on desktop:** Define how many product columns are displayed on desktop.
- **Spacing between products on desktop:** Define the gap between product cards on desktop.
- **Make products full width:** Enable this toggle to stretch product cards to full width on desktop.

**Mobile Version**

- **Products per row on mobile:** Define how many product columns are displayed on mobile.
- **Spacing between columns on mobile:** Define the gap between product cards on mobile.

**Product Card**

- **Card style:** Choose the style of the product card — Classic or Pro. Pro style adds an in-card image gallery and a quick buy button.
- **Max gallery images** *(Pro style only)*: Sets how many product images are shown in the in-card gallery.
- **Enable quick buy picker** *(Pro style only)*: Adds a size picker directly on the product card. Replaces the standard quick add-to-cart button.
- **Text alignment:** Set the alignment of product text — Center or Left.
- **Image ratio:** Define the aspect ratio of product images.
- **Show product media video:** Enable to display video for products with Shopify-hosted videos.
- **Show second image on hover:** Display an alternate product image when a customer hovers over the product card.
- **Show vendor:** Display the product vendor name on each product card.
- **Enable vendor link:** Make the vendor name a clickable link.
- **Show product rating:** Display the product rating on each card. Requires a product rating app to be installed.
- **Show review count:** Display the numeric rating value next to the stars on product cards and search results.
- **Hide rating if no reviews:** Hide the rating on a card if the product has no reviews yet.
- **Enable quick add button:** Display a quick add-to-cart button directly on the product card. Recommended for lower-priced items to facilitate quick shopping.
- **Desktop button position** *(Classic style only)*: Choose where the quick add button appears on desktop — Below product or On hover. *(Only shown when "Enable quick add button" is on.)*
- **Content** *(Pro style only)*: Optional page shown in the size guide popup (title + content), below the table.

For the full Classic vs Pro breakdown, see [How to Set Up a Product Card](/guides/how-to-articles/how-to-set-up-a-product-card). Pro card swatches rely on product siblings — see [How to Set Up a Product Siblings (Product Variations) Block in Product Page](/guides/how-to-articles/how-to-set-up-a-product-variations-block-in-product-page).

**Colors**

- **Text color:** Define the global text color for the section.
- **Background color:** Customize the background color of the entire section.

**Section Spacing**

- **Top distance:** Adjust the spacing above the section.
- **Bottom distance:** Adjust the spacing below the section.

### Mobile view example

<DocVideo src="/img/docs/featured-collection-tabs-mobile.webm" autoPlay playsInline muted loop style={{width: "40%", display: "block", marginBottom: "20px", marginLeft: "auto", marginRight: "auto", borderRadius: "8px"}} />

### Collection block

The Collection block represents a single tab within the Featured Collections: Tabs section. Use the **Add Collection** button to add more tabs, each displaying products from a different collection.

**Settings**

- **Collection:** Select the collection whose products will be displayed when this tab is active.
- **Products List:** Manually select specific products to display in this tab. When set, overrides the products pulled automatically from the selected collection.
- **Maximum products to show:** Define how many products are displayed per collection tab.
- **Collection Title:** Set a custom title displayed on the navigation tab. If left empty, the collection's actual title will be used instead.

### How to set up Featured Collections Tabs

<DocVideo src="/img/docs/featured-collection-tabs.webm" controls muted style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />