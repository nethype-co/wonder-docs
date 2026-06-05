---
title: "How to Set Up a Product Variations Block in Product Page"
sidebar_label: "How to Set Up a Product Variations Block in Product Page"
---

## How to Set Up a Product Variations Block in Product Page

In this guide, we’ll walk through the process of setting up a **Product Variations Block** in Shopify using metafields. This method allows you to display related product variations, such as different colors or styles, in a structured and visually appealing way.

![](/img/docs/3f607d7fc0aa.jpg)


### **Step 1:** Set up the Metaobject “Color” (if not already present)

1. In your Shopify admin, go to **Settings > Content > Metaobjects** .
2. Click **Add definition** .
3. In the **Name** field, type **Color** .
4. Add Fields llike Label, Color or Image, please find the details on the screenshoot. 
5. Click **Save.**


### **Step 2: Create a Product Metafiled - Color** 

To store color values or images for product variations, create a **Color** metafield.

1. In the **Shopify Admin** , go to **Settings** → **Metafields and metaobjects** → **Products**.
2. Click **Add definition** .
4. Enter a name (e.g., **Color** ) and set the **Type** to **Metaobject** .
5. Select "Color" Metaobject from the list that will expand.
6. Click **Save** .


### **Step 3: Create a Product Variations Metafield** 

This metafield will store a list of related product variations.

1. In **Settings** → **Metafields and metaobjects** → **Products**.
2. Click **Add definition** .
3. Enter a name (e.g., **Product Variations** ).
4. Select **Product** as the field type and choose **List of products** .
5. Click **Save** .


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
