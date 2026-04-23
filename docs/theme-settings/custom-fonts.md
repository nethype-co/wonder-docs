---
title: "Custom Fonts: How to Set Them Up"
sidebar_label: "Custom Fonts"
---

## Custom Fonts: How to Set Them Up

Want your store to stand out and feel truly unique? Adding custom fonts is the way to go. Showcase your brand's personality, make your text pop, and create a more memorable shopping experience for your customers — without being limited to default fonts.

All custom font settings are found in **Theme Settings** → **Typography** → **Custom fonts** in the Theme Editor.

## Step 1: Prepare your @font-face declaration

First, you need to register your font using a `@font-face` CSS declaration. There are two ways to do this:

### Option A: Upload font files to Shopify

1. Go to **Content** → **Files** in your Shopify admin.
2. Upload your font files (recommended formats: `.woff2`, `.woff`, or `.ttf`).
3. Copy the file URL after uploading.
4. Write a `@font-face` declaration using that URL:

```css
@font-face {
  font-family: 'MyFont';
  src: url('https://cdn.shopify.com/s/files/.../MyFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

If your font has multiple weights (e.g. Regular and Bold), add a separate `@font-face` block for each:

```css
@font-face {
  font-family: 'MyFont';
  src: url('https://cdn.shopify.com/s/files/.../MyFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'MyFont';
  src: url('https://cdn.shopify.com/s/files/.../MyFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
```

### Option B: Use an external font (e.g. Google Fonts)

You can also import fonts from external sources. For example, to use a Google Font, paste a `<link>` tag:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

## Step 2: Paste the declaration into the theme

In the Theme Editor, go to **Theme Settings** → **Typography** → **Custom fonts**.

Paste your `@font-face` declaration(s) or external font `<link>` tag into the **@font-face declarations** field.

## Step 3: Assign the font to theme areas

The Wonder Theme lets you assign custom fonts to 5 separate areas. For each area, you need to fill in two fields:

| Area | Font name field | Font weight field | Example name | Example weight |
|------|----------------|-------------------|--------------|----------------|
| **Body** | Body font name | Body font weight | `MyFont` | `400` |
| **Headings** | Heading font name | Heading font weight | `MyFont` | `700` |
| **Navigation** | Navigation font name | Navigation font weight | `MyFont` | `600` |
| **Buttons** | Button font name | Button font weight | `MyFont` | `600` |
| **Price** | Price font name | Price font weight | `MyFont` | `400` |

- **Font name** — Enter the exact `font-family` name from your `@font-face` declaration (e.g. `MyFont`, `Inter`). This must match exactly, including capitalization.
- **Font weight** — Enter the numeric weight value (e.g. `400` for regular, `500` for medium, `600` for semi-bold, `700` for bold). The weight must correspond to one of the weights defined in your `@font-face` declarations.

You don't have to fill in all 5 areas — only set the ones you want to override. Areas left empty will use the default Shopify font picker selection from the Typography settings.

## Example: Full setup with Google Fonts

1. **@font-face declarations** field:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

2. **Assign the font:**

| Field | Value |
|-------|-------|
| Body font name | `Inter` |
| Body font weight | `400` |
| Heading font name | `Inter` |
| Heading font weight | `700` |
| Button font name | `Inter` |
| Button font weight | `600` |

For more information on all typography settings (font sizes, letter spacing, line height), see [Typography](/theme-settings/typography).
