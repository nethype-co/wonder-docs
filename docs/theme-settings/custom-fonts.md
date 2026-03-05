---
title: "Custom Fonts: How to Set Them Up in the Wonder Theme"
sidebar_label: "Custom Fonts"
---

## Custom Fonts: How to Set Them Up in the Wonder Theme

Want your store to stand out and feel truly unique? Adding custom fonts is the way to go. Showcase your brand's personality, make your text pop, and create a more memorable shopping experience for your customers—without being limited to default fonts.

### How to set up Custom Fonts

#### Step 1: Upload font files

- Go to **Content → Files** in your Shopify admin
- Upload font files (recommended formats: `woff2`, `woff`, or `ttf`)
- Copy the file URL after uploading

#### Step 2: Add the font to your theme

- Access **Theme Editor → Theme settings → Typography**
- Scroll to the **Custom fonts** section
- Define font-face: Enter the font-family name, copied font URL, font-style, and font-weight

:::note
Not every font includes all weight variations (e.g., 400, 500, 700). You may need to upload separate files and create separate font-face definitions for each weight/style combination.
:::

#### Step 3: Assign custom font

- Apply your custom font to specific areas: **base**, **heading**, **navigation**, **button**, or **price** elements

### How to register custom fonts in the theme

#### Method 1: Use font-face

Add a `@font-face` declaration with the URL of the font file you uploaded to Shopify:

```css
@font-face {
  font-family: 'MyFont';
  src: url('https://cdn.shopify.com/s/files/.../MyFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

#### Method 2: Use an external font link

You can also import fonts from external sources like Google Fonts by pasting the provided import link into the theme settings.
