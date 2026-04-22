---
title: "Cart & Shipping"
sidebar_label: "Cart & Shipping"
---

## Cart & Shipping

Configure the cart drawer behavior, free shipping progress bar, and cross-sell recommendations. These settings are found under **Theme Settings** → **Cart** in the Theme Editor.

## Cart

- **Cart type** — Choose between **Page** (full cart page) or **Drawer** (slide-out cart drawer). Default: Drawer.
- **Show order note** — Display an order note field in the cart where customers can add special instructions.
- **Show additional service** — Display a checkbox for an optional service (e.g. gift wrapping, insurance).
- **Additional service name** — Set the label for the additional service checkbox.
- **Show View Cart button** — Display a "View Cart" button in the cart drawer. Useful when the cart drawer is used alongside a full cart page.
- **Hide checkout button** — Hide the checkout button in the cart drawer. Enable this if you want customers to go through the cart page before checkout.

## Cross-Sells

Display product recommendations in the cart to increase average order value.

- **Enable cross-sells** — Show cross-sell products in the cart drawer.
- **Cross-sells collapsed** — Start with the cross-sells section collapsed by default.
- **Show vendor** — Display the product vendor name alongside cross-sell items.
- **Heading** — Set the heading text for the cross-sells section (e.g. "You might also like").
- **Product limit** — Set the maximum number of cross-sell products to display (1–9).
- **Product source** — Choose where cross-sell products come from:
  - **Collection** — Select a collection to pull products from.
  - **Product list** — Manually select specific products (up to 9).

For a detailed guide on configuring cross-sells, see [Cross Sell](/theme-settings/cross-sell).

## Free Shipping Bar

Display a progress bar in the cart that shows how much more the customer needs to spend to qualify for free shipping.

- **Enable free shipping bar** — Show the free shipping progress bar in the cart.
- **Free shipping amount** — Set the minimum order amount required for free shipping. Enter the value in your store's default currency without the currency symbol (e.g. `100`).
- **Free shipping bar text** — Customize the message displayed when the threshold has not been reached. Use `||amount||` as a placeholder for the remaining amount. Default: `Spend ||amount|| more for FREE shipping!`
- **Success message** — Set the message displayed when the customer qualifies for free shipping. Default: `You have unlocked free shipping!`

The free shipping bar supports multi-currency stores — the amount is automatically converted based on the customer's selected currency.
