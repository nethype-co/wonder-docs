---
title: "Collapsible files row block"
sidebar_label: "Collapsible files row block"
---

### **Collapsible Files Row** 

The **Collapsible Files Row** section allows you to display downloadable file links inside an expandable row on the product page. A key advantage of this feature is its dynamic metafield connection, ensuring that file links update automatically when a variant is changed.

You can connect metafields at the **variant** level, so the file changes with each selection, or at the **product** level, keeping the file consistent across all variants. The section supports up to **three files** , each with a customizable label - if no label is set, the original file name with its extension will be displayed.

This feature is ideal for providing **product guides, spec sheets, certificates, or downloadable resources** in an organized and user-friendly way.

![](/img/docs/29c6911f7d0e.jpg)

## **Settings** 

![](/img/docs/62b6579ff401.jpg)

## **How to Set Up a Collapsible Files Row 1. Create a File Metafield:** 

* Go to **Settings > Custom Data** and choose **Products** or **Variants** (depending on whether the file should change per variant or remain the same for the product).
* Click **Add definition** , name it (e.g., _Single file_).
* Select **File** as the type.
* In **Validations** , choose **Accept all file types** and save.

![](/img/docs/121940e6c61d.jpg)

 2. **Assign Files to Metafields:** 

* If using **Product metafields** , go to the **Product Metafields** section, upload a file, and save.
* If using **Variant metafields** , open the variant, scroll to the metafield, upload a file, and repeat for other variants.

![](/img/docs/4d1b4a699f8b.jpg)

 **3. Add the Block in Theme Editor:** 

* Open **Shopify Theme Customization** and navigate to **Products > Product Template** .
* Add the **Collapsible Files Row** block inside the **Product Information** section.

 **4. Configure the Block Settings:** 

* Set a **Heading** and **Icon** (optional).
* Add **custom file labels** (optional).
* Enter the **metafield namespace and key** (e.g., custom.single_file).

![](/img/docs/a0e27ee4d2c5.jpg)

5. **Save and Test** the setup to ensure the file updates correctly when switching variants.
