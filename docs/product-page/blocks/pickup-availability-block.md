---
title: "Pickup availability block"
sidebar_label: "Pickup availability block"
---

import SectionMeta from '@site/src/components/SectionMeta';

## **Pickup availability block**

<SectionMeta version="v1.0.0" availability="Product page" />

The Pickup Availability block displays real-time in-store pickup information on the product page. It shows customers which of your physical locations have the selected variant available for pickup, along with the estimated ready time and store address. Availability updates automatically when the customer switches variants.

## **Settings**

This block has no configurable settings — it renders automatically based on your Shopify store's location and local pickup configuration.

## **Requirements**

Before the block can display anything, three things must be true in the Shopify admin:

1. **Multiple locations enabled** — Go to **Settings → Locations** and add at least one physical store location in addition to your default warehouse or fulfillment location.
2. **Local pickup enabled per location** — For each store location, go to **Settings → Shipping and delivery → Pickup in Store**, enable it, and set an estimated pickup time (e.g. "Usually ready in 2 hours"). The block only shows locations where local pickup is enabled.
3. **Product stocked at pickup locations** — The product must have inventory tracked and assigned to the pickup location. If inventory is 0 and "Continue selling when out of stock" is off, that location shows as unavailable. If inventory tracking is off entirely, Shopify treats the product as available everywhere.

## **How to add the block**

1. Open the theme editor and navigate to a product page.
2. In the left panel, click **Add block** inside the Product section.
3. Select **Pickup availability**.
4. Position it after the **Buy buttons** block (recommended placement).
