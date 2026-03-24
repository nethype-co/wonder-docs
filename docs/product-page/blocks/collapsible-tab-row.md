---
title: "Collapsible tab row"
sidebar_label: "Collapsible tab row"
---

## **Collapsible tab row** 

The Collapsible Tab Row block displays content inside an expandable row on the product page. Use it for care instructions, sizing guides, shipping info, or any content you want to keep organized and collapsible.

Each row has a heading (e.g. "Wash & Care"), an optional icon, and rich text content. You can also link to a dedicated page for more details.

![](/img/docs/b6d6524e2c98.jpg)

## **Settings**

![](/img/docs/90c8070ed5e3.jpg)

### Variant metafield

The **Variant metafield** setting allows the row content to reload automatically when the customer selects a different variant. This is useful when different variants have different care instructions, materials, or specifications.

To use this feature:

1. Create a metafield definition for **Variants** in **Settings > Custom Data > Variants**
2. Assign content to each variant's metafield
3. In the block settings, enter the metafield namespace and key (e.g. `custom.care_instructions`)

When a customer switches variants, the collapsible row content updates to show the information specific to that variant. If no variant metafield is set, the row displays the same static content for all variants.
