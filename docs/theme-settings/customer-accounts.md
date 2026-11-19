---
title: "Customer Accounts: Login, Register and Account Pages"
sidebar_label: "Customer Accounts"
description: "How customer accounts work in Wonder: login, sign in, register, create account and account pages; new vs legacy customer accounts; adding a custom registration field such as a VAT or tax number; styling the account pages."
keywords: [customer account, login, sign in, register, registration, create account, sign up, account page, VAT, tax number, custom field]
---

# Customer accounts: login, register and account pages

This page explains how the customer login, sign-up (registration) and account pages work in Wonder, and how to change them: for example, how to add a **VAT number** or **tax number** field to the registration form.

## New or legacy customer accounts?

Shopify offers two kinds of customer accounts. Check which one your store uses in Shopify admin → **Settings → Customer accounts**.

| | **New customer accounts** | **Legacy customer accounts** |
|---|---|---|
| How customers sign in | With a one-time code sent by email, no password | Email and password |
| Where the pages come from | Hosted by Shopify, outside your theme | Wonder's templates (`templates/customers/*`): login, register, account, addresses, order, account activation and password reset |
| What you can change in the theme | Only the account link and icon in the header | The pages themselves: content, fields and styling |
| How to change their look | Shopify admin → **Settings → Customer accounts** (branding) | [Custom CSS](./custom-css) or Edit code |

Wonder's own login, register and account templates are only used with **legacy** customer accounts. With new customer accounts, the theme's templates and your Custom CSS don't apply to those pages.

## Account icon and menu in the header

- **Account icon:** the header shows it when customer accounts are turned on in Shopify. To use your own image, go to **Theme settings → Icon set → Account icon** (see [General settings](./general-settings#custom-icons)).
- **Customer account menu:** with new customer accounts, choose the menu shown to signed-in customers in the [Header](/sections/header-navigation/header) section.

## Add a field to the registration form (legacy accounts)

Shopify's registration form has first name, last name, email and password. To ask for more, for example a **VAT number**, add a field whose name starts with `customer[note]`. Shopify saves its value in the customer's **Note** in Shopify admin → **Customers**.

1. In **Online Store → Themes**, open the **⋯** menu of a **copy** of your theme and choose **Edit code**.
2. Open `templates/customers/register.liquid`.
3. Paste this field after the **Last name** field (after its closing `</label>`):

```liquid title="templates/customers/register.liquid"
<label class="form__field" for="RegisterForm-VAT">
  <input
    type="text"
    name="customer[note][VAT number]"
    id="RegisterForm-VAT"
    class="form__field__input"
    autocomplete="off"
    placeholder=" "
  >
  <span class="form__field__label"> VAT number </span>
</label>
```

4. Save, preview the register page (`/account/register`) and create a test account. The value appears in the customer's note as `VAT number: …`.

Change both `VAT number` texts to the label you need. For several fields, repeat the block with a different name in the brackets and a different `id`.

:::warning This is a code change
Edits made in **Edit code** are **not** carried over when you update Wonder. Add the field again after each update. See [Updating Wonder: what's kept and what isn't](/getting-started/basics/updating-wonder).
:::

The field is optional for customers. Shopify doesn't check its format (for example, whether a VAT number is valid). For validated or required fields, use a customer account or B2B app.

## Style the account pages (legacy accounts)

The login, register and account pages use Wonder's `wt-customer…` classes and the `assets/customers.css` stylesheet. To change their look without editing files, add rules in **Theme settings → [Custom CSS](./custom-css)**, for example:

```css
.wt-customer__form--container {
  max-width: 480px;
}
```

:::tip Ask your AI assistant
An [AI assistant connected to Wonder](/ai-agents/setup) can look up the exact classes of these pages in your Wonder version and check your CSS before you paste it.
:::
