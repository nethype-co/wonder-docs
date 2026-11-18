---
title: "Notify me block"
sidebar_label: "Notify me block"
---

import SectionMeta from '@site/src/components/SectionMeta';
import DocVideo from '@site/src/components/DocVideo';

## **Notify me block**

<SectionMeta version="v2.6.0" availability="Product page, Featured product" />

The **Notify me** block lets customers ask to be told when a sold-out product is back in stock. They leave their email address in a popup on the product page, and the request reaches you as a message from your store's contact form.

The block is built into the theme: you don't need an app.

<div style={{backgroundColor: "#f4f4f4", padding: "24px", borderRadius: "8px", marginBottom: "20px"}}>
  <img src="/img/docs/notify_me.jpg" style={{display: "block", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: "8px"}} alt="Sold out - Notify me buy button on the product page" />
</div>

---

## Prerequisites

Requests are sent through Shopify's contact form, so they arrive at your **sender email** address. Check it in your Shopify admin under **Settings > Notifications > Sender email**.

The email you receive includes:
- the customer's email address (and name, phone, and consent if those fields are on),
- the product title, ID, and handle,
- the variant title and ID,
- a direct link to the product with the variant selected.

:::caution[This is not an automatic notification system]
The block only collects requests. Customers are **not** emailed automatically when the product is back in stock.

When you restock a product, go through the *Notify me* emails in your inbox, find the requests for that product and variant, and contact those customers yourself. Each request tells you who asked and for which variant.
:::

---

## How to add it

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
2. Open a product page (**Products > Default product**).
3. In the **Product information** section, click **Add block** and choose **Notify me**.
4. Choose a **Trigger** (see below) and adjust the popup text.
5. Click **Save**.

The block can also be added to the [**Featured product**](../../sections/products/featured-product.md) section. You can add it once per section.

> To preview the popup in the theme editor, click the **Notify me** block. The popup opens even if the product isn't sold out.

<DocVideo src="/img/docs/notify_me-video.mp4" controls playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

---

## Trigger options

- **Inside buy button** (default): when the selected variant is sold out, the buy button changes to *Sold out - Notify me* and opens the popup. The block itself doesn't show anything where it sits.
- **Separate button:** a separate **Notify me** button appears where the block sits, but only when the selected variant is sold out. The buy button stays *Sold out*.

With **Inside buy button**, the **sticky add to cart** bar also shows *Sold out - Notify me* and opens the same popup.

---

## Settings

### Button

- **Trigger:** choose where customers open the popup — **Inside buy button** (default) or **Separate button**. See [Trigger options](#trigger-options).
- **Text:** enter the button text (default: *Notify me*). It appears on the submit button in the popup and, with **Inside buy button**, after *Sold out -* in the buy button.
- **Style:** choose the style of the separate button — **Primary** (default), **Secondary**, or **Underline Link Button**. Shown for **Separate button**.
- **Make button full width:** enable this toggle to stretch the separate button to the full width of the product information column. On by default. Shown for **Separate button**.

### Popup

- **Heading:** enter the popup heading (default: *Notify me*). If empty, the button text is used.
- **Text:** enter the text shown above the form (default: *Get notified by email when this item is back in stock.*). Rich text formatting options are available.
- **Show name field:** enable this toggle to add an optional name field. Off by default.
- **Show phone field:** enable this toggle to add an optional phone number field. Off by default.
- **Show consent checkbox (required):** enable this toggle to add a checkbox customers must tick before sending the request. Off by default.
- **Consent checkbox label:** enter the text next to the consent checkbox (default: *I agree to be contacted when this product is back in stock*). Shown when the checkbox is on. You can add a link, for example to your privacy policy.
- **Success message:** enter the message shown after the request is sent (default: *Thanks! We'll email you as soon as it's back in stock.*). Leave empty to use the default contact form message.

---

## How it works

- **When it appears:** only when the **selected variant** is sold out. Products set to **Continue selling when out of stock** count as available, so the block doesn't appear for them.
- **Variants:** the popup shows the product image, title, and selected options, for example *Size: M, Color: Black*. When the customer switches variants, the button and the popup update, so the request is always for the variant they're looking at.
- **The form:** the email field is required. For logged-in customers, their email, name, and phone are filled in automatically.
- **After sending:** the page reloads and the popup opens again with the success message (or an error, for example an invalid email).
- **Quick add:** the popup isn't available in the quick add drawer on product cards. Sold-out variants show *Sold out* there.

---

## Tips

- Turn on **Show consent checkbox** if you plan to send marketing emails to these customers, and link to your privacy policy in the label.
- Set up an email filter in your inbox for the *Notify me* requests (for example by the *Product handle* field), so they don't get lost among other contact messages.
- **Separate button** works well when you want customers to still see the plain *Sold out* state, for example when you aren't sure if a product will be restocked.
- The popup uses Shopify's contact form, so spam protection (hCaptcha) works the same way as on your contact page.
