---
title: "Information Popup block"
sidebar_label: "Information Popup block"
---

import SectionMeta from '@site/src/components/SectionMeta';

<SectionMeta version="v1.0.0" availability="Product page" />

The Information Popup block adds a clickable trigger on the product page that opens a popup overlay with additional product information — such as a size guide, materials table, or any other supplementary content. The popup content can be sourced from a Shopify page or a product metafield.

![](/img/docs/information-popup-1.png)

![](/img/docs/information-popup-2.png)

## Settings

* **Icon**: Choose a built-in icon displayed as the popup trigger — for example Check mark.
* **Link text**: Enter the label displayed next to the icon that triggers the popup when clicked.
* **Content**: Select a Shopify page to use as the source of the popup content. You can add text, tables, or images to the selected page.
* **Metafield**: Enter the metafield namespace and key to retrieve a size chart table, using the format `namespace.key` — for example `custom.size_chart`. The metafield type should be multi-line text.
* **Enable striped rows table layout**: Enable this toggle to apply alternating row colors to the table displayed in the popup. When enabled, odd rows will have a grey background.

## Using a Shopify Page as Popup Content

You can use any Shopify page as the content source for the popup. This is useful for size guides, ingredient lists, or materials tables that you want to maintain independently and reuse across multiple products.

**To set it up:**

1. In the **Shopify Admin**, go to **Online Store** → **Pages** and click **Add page**.
2. Give the page a descriptive name (e.g., *Size Guide* or *Materials Table*).
3. Use the page editor to add your content — text, images, or tables are all supported.
4. Click **Save**.
5. In the **Theme Editor**, select the **Information Popup** block and choose the page you just created in the **Content** setting.

The popup will display the full content of the selected page whenever a customer clicks the trigger on the product page.

![](/img/docs/information-popup-page.png)
