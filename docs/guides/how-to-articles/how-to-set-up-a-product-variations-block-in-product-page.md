---
title: "How to Set Up a Product Siblings (Product Variations) Block in Product Page"
sidebar_label: "How to Set Up a Product Siblings (Product Variations) Block in Product Page"
---

The **Product Variations Block** lets you display linked product siblings — such as different colors or styles — directly on the product page, so customers can easily switch between them.

There are three ways to configure this, depending on how you want to manage swatch visuals:

- [Using product images with a category metaobject list](#method-1-product-siblings-with-product-images-and-a-metaobject-list) — the simplest setup with the least configuration: reuse the **Color** metaobject Shopify shows after you set a product category, and use the featured image as the swatch
- [Using metafields with custom swatches (images)](#method-2-product-siblings-with-custom-metafield-images) — assign a dedicated color or image to each product via a metafield
- [Using product images](#method-3-product-siblings-with-product-images) — use each product's existing featured image as the swatch with a text label

### Example

![Product siblings example](/img/docs/sibllings-example.png)

---

## Method 1: Product Siblings with Product Images and a Metaobject List

:::tip
**This is the simplest method with the least configuration.** It reuses the **Color** metaobject that Shopify already provides once you set a product's category — so there's no metaobject or custom color metafield to build from scratch. The swatch uses each product's existing featured image, and the option label comes from that metaobject list.
:::

Use this method if you want the swatch to display each product's existing **featured image**, with the option label coming from a **metaobject** stored as a **list** — specifically the **Color** metaobject Shopify makes available after you assign the product to a category.

The theme uses the product's featured image as the visual and reads the label from the **first metaobject** in the list. You still need a **Product Variations** metafield to link the sibling products together.

### **Step 1: Set up the Metaobject "Color"** (if not already present)

You have two options here — reuse Shopify's built-in Color metaobject, or create your own.

**Option A — Reuse Shopify's default category Color metaobject (recommended)**

Shopify provides a standard **Color** metaobject that is automatically available once a product is assigned to a category. For example, after you set a product's category to **Dresses**, Shopify shows a **Color** option (with a predefined list of color values and swatches) in the product's category-specific attributes. You can reuse this default metaobject instead of building one from scratch — just point the **Color** metafield in Step 2 at it.

:::tip
Using the default Shopify Color metaobject saves setup time and keeps your color values consistent across products, since Shopify maintains the list of standard colors and their swatches for you.
:::

![Product siblings category metafield](/img/docs/siblings-category-metafield.png)

**Option B — Create a custom Color metaobject**

If you need custom colors or your own swatch images, create your own metaobject:

1. In your Shopify admin, go to **Settings > Content > Metaobjects**.
2. Click **Add definition**.
3. In the **Name** field, type **Color**.
4. Add fields like Label, Color, or Image.
5. Click **Save**.

![Product siblings](/img/docs/product-siblings.png)

### **Step 2: Create a Product Metafield — Color (List)**

:::note
This step is only required if you chose **Option B** (a custom Color metaobject) in Step 1. If you're reusing Shopify's default category **Color** metaobject (Option A), the metafield already exists on the product — skip ahead to Step 3.
:::

To store the option value as a metaobject list, create a **Color** metafield of the **list** type.

1. In the **Shopify Admin**, go to **Settings** → **Metafields and metaobjects** → **Products**.
2. Click **Add definition**.
3. Enter a name (e.g., **Color**) and set the **Type** to **Metaobject**.
4. Select the **Color** metaobject from the list — either Shopify's default category **Color** metaobject (Option A above) or your custom one (Option B).
5. Under **Number of values**, choose **List of entries** so the metafield stores a list of metaobjects.
6. Click **Save**.

:::note
The block reads the **first entry** in the list to display the option label. Make sure the intended value is first.
:::

### **Step 3: Create a Product Variations Metafield**

This metafield will store a list of related product siblings.

1. In **Settings** → **Metafields and metaobjects** → **Products**, click **Add definition**.
2. Enter a name (e.g., **Product Variations**).
3. Select **Product** as the field type and choose **List of products**.
4. Click **Save**.

![Product variations metafield](/img/docs/product-variations-met.png)

### **Step 4: Assign Metafields to Products**

Now apply the metafields to each product.

1. Navigate to **Products** in the Shopify admin.
2. Select the product that will have variations.
3. Scroll to the **Product Metafields** section.
4. Click the **Color** field and add one or more entries — the first entry is used as the label.
5. Click **Product Variations** and add all related products (including the current product).
6. Click **Save**.

:::note
The order of products in the **Product Variations** metafield reflects the order in which the swatches appear on the product page.

Repeat this step for every sibling product, keeping the product order consistent each time.
:::

### Connect Variations for Each Product

To ensure seamless linking between products, repeat **Step 4** for every sibling product.

### **Step 5: Configure the Product Page**

Now set up the **Product Variations Block** in your theme.

1. Go to **Online Store** → **Themes**, then click **Edit theme**.
2. Open the **Product template**.
3. In the **Product information** section, add the **Product siblings** block.
4. Set the **Option Name** (displayed above the swatches).
5. Select the **Input Type** - Product image.
6. Enter the **namespace and key** of the **Color** metafield (e.g., `custom.color`). You can find this in the **Metafield Definition** settings. If you're using the metafield that Shopify added automatically for the product category (Option A), the namespace and key will follow Shopify's convention — for example, `shopify.color-pattern`.
7. Click the **Dynamic Source** icon and select the **Product Variations** metafield as the product list.
8. Click **Save**.

![Product siblings example](/img/docs/sibllings-example.png)

---

## Method 2: Product Siblings with Custom Metafield Images

Use this method if you want full control over the swatch visuals — for example, showing a specific color swatch or a cropped image that differs from the product's main photo.

![Product siblings swatch](/img/docs/siblings-swatch.png)

### **Step 1: Set up the Metaobject "Color"** (if not already present)

1. In your Shopify admin, go to **Settings > Content > Metaobjects**.
2. Click **Add definition**.
3. In the **Name** field, type **Color**.
4. Add fields like Label, Color, or Image.
5. Click **Save**.

![Product siblings](/img/docs/product-siblings.png)

### **Step 2: Create a Product Metafield — Color**

To store color values or images for product variations, create a **Color** metafield.

1. In the **Shopify Admin**, go to **Settings** → **Metafields and metaobjects** → **Products**.
2. Click **Add definition**.
3. Enter a name (e.g., **Color**) and set the **Type** to **Metaobject**.
4. Select the **Color** metaobject from the list.
5. Click **Save**.

![Product metafield color](/img/docs/product-metafiled-color.png)

### **Step 3: Create a Product Variations Metafield**

This metafield will store a list of related product siblings.

1. In **Settings** → **Metafields and metaobjects** → **Products**, click **Add definition**.
2. Enter a name (e.g., **Product Variations**).
3. Select **Product** as the field type and choose **List of products**.
4. Click **Save**.

![Product variations metafield](/img/docs/product-variations-met.png)

### **Step 4: Assign Metafields to Products**

Now apply the metafields to each product.

1. Navigate to **Products** in the Shopify admin.
2. Select the product that will have variations.
3. Scroll to the **Product Metafields** section.
4. Click the **Color** field and assign the appropriate color or image.
5. Click **Product Variations** and add all related products (including the current product).
6. Click **Save**.

:::note
The order of products in the **Product Variations** metafield reflects the order in which the swatches appear on the product page. 

Repeat this step for every sibling product, keeping the product order consistent each time.
:::

### Connect Variations for Each Product

To ensure seamless linking between products, repeat **Step 4** for every sibling product.

![](/img/docs/21422753f154.jpg)

![Product siblings color](/img/docs/siblings-color-2.png)

### **Step 5: Configure the Product Page**

Now set up the **Product Variations Block** in your theme.

1. Go to **Online Store** → **Themes**, then click **Edit theme**.
2. Open the **Product template**.
3. In the **Product information** section, add the **Product siblings** block.
4. Set the **Option Name** (displayed above the swatches).
5. Select the **Input Type** - Swatch/Images or Button.
6. Enter the **namespace and key** of the **Color** metafield (e.g., `custom.color`). You can find this in the **Metafield Definition** settings.
7. Click the **Dynamic Source** icon and select the **Product Variations** metafield as the product list.
8. Click **Save**.

[How to configure the Product Page to set up the Product Siblings block using swatches (metaobject) →](#how-to-configure-the-product-page-product-siblings-with-swatches)

![Product siblings admin](/img/docs/product-siblings-admin.png)

---

## Method 3: Product Siblings with Product Images

Use this method if you want the swatch to display each product's existing featured image — no Metaobject or Color metafield required.

Instead of a custom color swatch, each sibling product's **featured image** is used as the visual indicator. A **Label** metafield is used to display a text label for the currently selected option. You still need a **Product Variations** metafield to link the sibling products together.

![Product siblings](/img/docs/siblings-Product.png)

### **Step 1: Create a Product Metafield — Label**

To display a custom label for selected option.

1. In the **Shopify Admin**, go to **Settings** → **Metafields and metaobjects** → **Products**.
2. Click **Add definition**.
3. Enter a name (e.g., **Label**) and set the **Type** to **Single line text**.
4. Click **Save**.

### **Step 2: Create a Product Variations Metafield**

This metafield will store a list of related product siblings.

1. In **Settings** → **Metafields and metaobjects** → **Products**, click **Add definition**.
2. Enter a name (e.g., **Product Variations**).
3. Select **Product** as the field type and choose **List of products**.
4. Click **Save**.

![Product variations metafield](/img/docs/product-variations-met.png)

### **Step 3: Assign Metafields to Products**

Now apply the metafields to each product.

1. Navigate to **Products** in the Shopify admin.
2. Select the product that will have variations.
3. Scroll to the **Product Metafields** section.
4. Click the **Label**  and complete it.
5. Click **Product Variations** and add all related products (including the current product).
6. Click **Save**.

:::note
The order of products in the **Product Variations** metafield reflects the order in which the swatches appear on the product page.

Repeat this step for every sibling product, keeping the product order consistent each time.
:::

### Connect Variations for Each Product

To ensure seamless linking between products, repeat **Step 3** for every sibling product.

### **Step 4: Configure the Product Page**

Now set up the **Product Variations Block** in your theme.

1. Go to **Online Store** → **Themes**, then click **Edit theme**.
2. Open the **Product template**.
3. In the **Product information** section, add the **Product siblings** block.
4. Set the **Option Name** (displayed above the swatches).
5. Select the **Input Type** - Product image.
6. Enter the **namespace and key** of the **Label** metafield (e.g., `custom.label`). You can find this in the **Metafield Definition** settings.
7. Click the **Dynamic Source** icon and select the **Product Variations** metafield as the product list.
8. Click **Save**.

---

## How to Configure the Product Page: Product Siblings with Swatches

<video controls style={{maxWidth: '100%'}}>
  <source src="/img/docs/siblings-swatch.webm" type="video/webm" />
</video>

---

## How to Configure the Product Page: Product Siblings with Product Images

<video controls style={{maxWidth: '100%'}}>
  <source src="/img/docs/siblings-images.webm" type="video/webm" />
</video>
