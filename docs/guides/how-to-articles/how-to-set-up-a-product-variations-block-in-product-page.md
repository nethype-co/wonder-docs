---
title: "How to Set Up a Product Variations Block in Product Page"
sidebar_label: "How to Set Up a Product Variations Block in Product Page"
---

## How to Set Up a Product Variations Block in Product Page

In this guide, we’ll walk through the process of setting up a **Product Variations Block** in Shopify using metafields. This method allows you to display related product variations, such as different colors or styles, in a structured and visually appealing way.

![](/img/docs/3f607d7fc0aa.jpg)

## Video Tutorial

<iframe width="100%" style={{aspectRatio: '16/9'}} src="https://www.youtube.com/embed/H34IrovkOIA?si=XX7WvBLehHgssugt" title="Product Variations Block Setup Tutorial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### **Step 1:** Set up the “Color” Category Metafield (if not already present)

If you do **not** yet have a **Color** metafield set up as a **category metafield** in your Shopify admin, follow these steps to create one:

1. In your Shopify admin, go to **Settings > Custom data > Products** .
2. Click **Add definition** .
3. In the **Name** field, type **Color** .
4. From the suggested standard definitions that appear, **select the first "Color" option** (Defines the primary color or pattern, such as blue or striped).
5. Click **Save.**

![](/img/docs/35f09af1e85c.png)

### **Step 2: Create a Color Metafield** 

To store color values or images for product variations, create a **Color** metafield.

1. In the **Shopify Admin** , go to **Settings** → **Custom Data** .
2. Under **Metafield Definitions** , select **Products** .
3. Click **Add definition** .
4. Enter a name (e.g., **Color** ) and set the **Type** to **Metaobject** .
5. Select **Reference** and choose **Color** .
6. Click **Save** .

![](/img/docs/958813e88a2b.jpg)

Color metafield definition

### **Step 3: Create a Product Variations Metafield** 

This metafield will store a list of related product variations.

1. In **Settings** → **Custom Data** , select **Products** .
2. Click **Add definition** .
3. Enter a name (e.g., **Product Variations** ).
4. Select **Product** as the field type and choose **List of products** .
5. Click **Save** .

![](/img/docs/9b362527f3e1.jpg)

Product variation metafield definition

### **Step 4: Assign Metafields to Products** 

Now, apply the created metafields to each product.

1. Navigate to **Products** in the Shopify admin.
2. Select the product that will have variations.
3. Scroll to the **Product Metafields** section.
4. Click the **Color** field and assign the appropriate **color or image** .
5. Click **Product Variations** and add all related products (including the current product).
6. Click **Save** .

 **Note:** To properly link all product variations, repeat this step for each variant.

![](/img/docs/21422753f154.jpg)

### **Step 5: Configure the Product Page** 

Now, set up the **Product Variations Block** in your theme.

1. Go to **Online Store** → **Themes** , then click **Customize** on your active **Wonder** theme.
2. Open the **Product template** .
3. In the **Product information** section, add the **Product Variations** block.
4. Set the **Option Name** (this will be displayed above the variations).
5. Enter the **namespace and key** of the **Color** metafield (e.g., custom.color).You can find this in the **Metafield Definition** settings.
6. Click the **Dynamic Source** icon and select **Product Variations** metafield as the **product list** .

Click **Save** , and your product variations will now be visible on the product page.

![](/img/docs/6f2aa274f1e3.jpg)

### **Final Step: Connect Variations for Each Product** 

To ensure seamless linking between products, repeat **Step 3** for every product variant.

Your Product Variations Block is now fully set up!
