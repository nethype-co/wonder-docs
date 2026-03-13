---
title: "JavaScript Events Reference"
sidebar_label: "JavaScript Events"
sidebar_position: 1
---

# JavaScript Events Reference

Wonder Theme fires JavaScript events throughout the shopping experience that you can listen to for custom integrations, analytics, third-party apps, and custom functionality.

There are two event systems:

1. **Pub/Sub Events** - Theme's internal event bus (lightweight, in-memory)
2. **DOM Custom Events** - Standard browser events dispatched on elements

---

## Pub/Sub Events

Wonder uses a lightweight publish/subscribe system for core theme events. The global functions `subscribe()` and `publish()` are available on every page.

### Subscribing to Events

```javascript
// Subscribe - returns an unsubscribe function
const unsubscribe = subscribe("cart-update", (data) => {
  console.log("Cart updated:", data);
});

// Unsubscribe when no longer needed
unsubscribe();
```

### Available Events

#### `cart-update`

Fired when the cart contents change (item added, removed, or quantity updated).

```javascript
subscribe("cart-update", (data) => {
  // data.source - what triggered the update ("product-form", "cart-items", etc.)
  // data.productVariantId - the variant ID that was added/changed
  // data.cartData - full cart response from Shopify API
  console.log("Item added:", data.productVariantId);
  console.log("Cart total:", data.cartData.total_price);
});
```

| Property | Type | Description |
|---|---|---|
| `source` | string | Component that triggered the update |
| `productVariantId` | string | Variant ID involved |
| `cartData` | object | Full Shopify cart JSON response |

---

#### `cart-error`

Fired when a cart operation fails (e.g., item sold out, quantity exceeds inventory).

```javascript
subscribe("cart-error", (data) => {
  // data.source - what triggered the error
  // data.errors - error details from Shopify
  // data.message - human-readable error message
  console.log("Cart error:", data.message);
});
```

| Property | Type | Description |
|---|---|---|
| `source` | string | Component that triggered the error |
| `productVariantId` | string | Variant ID involved |
| `errors` | string | Error details from Shopify |
| `message` | string | Human-readable error message |

---

#### `cart-drawer-open`

Fired when the cart drawer opens.

```javascript
subscribe("cart-drawer-open", () => {
  console.log("Cart drawer opened");
});
```

---

#### `cart-drawer-close`

Fired when the cart drawer closes.

```javascript
subscribe("cart-drawer-close", () => {
  console.log("Cart drawer closed");
});
```

---

#### `quick-buy-drawer-open`

Fired when the Quick Add/Quick Buy modal opens on collection pages.

```javascript
subscribe("quick-buy-drawer-open", (data) => {
  console.log("Quick buy opened");
});
```

---

#### `quick-buy-drawer-close`

Fired when the Quick Add/Quick Buy modal closes.

```javascript
subscribe("quick-buy-drawer-close", (data) => {
  console.log("Quick buy closed");
});
```

---

#### `variant-change`

Fired when a customer selects a different product variant.

```javascript
subscribe("variant-change", (data) => {
  console.log("Variant changed:", data);
});
```

---

#### `quantity-update`

Fired when a line item quantity changes in the cart.

```javascript
subscribe("quantity-update", () => {
  console.log("Quantity updated");
});
```

---

### Publishing Events

You can also publish events to trigger theme behavior:

```javascript
// Trigger a cart update notification
publish("cart-update", {
  source: "my-custom-integration",
  cartData: responseFromShopifyAPI
});
```

---

## DOM Custom Events

These are standard browser events dispatched on DOM elements using `dispatchEvent()`. Listen for them with `addEventListener()`.

### `cart-drawer:refresh`

Dispatched on the `document` to request a cart drawer content refresh. This is the most commonly used event for third-party integrations.

**Listen for it:**
```javascript
document.addEventListener("cart-drawer:refresh", (e) => {
  console.log("Cart drawer refreshing");
});
```

**Dispatch it** (e.g., after adding to cart via your own AJAX call):
```javascript
document.dispatchEvent(new CustomEvent("cart-drawer:refresh"));
```

---

### `variantChangeStart`

Dispatched on the `variant-options` element when a customer begins selecting a variant, before the UI updates.

```javascript
document.addEventListener("variantChangeStart", () => {
  console.log("Variant selection started");
});
```

---

### `variantChangeEnd`

Dispatched on the `variant-options` element after the variant UI has fully updated.

```javascript
document.addEventListener("variantChangeEnd", () => {
  console.log("Variant selection complete - UI updated");
});
```

---

### `gallery:updated`

Dispatched on the `document` when the product gallery slides change (e.g., after variant selection filters images).

```javascript
document.addEventListener("gallery:updated", (e) => {
  // e.detail.imageSelected - URL of the selected image
  // e.detail.optionName - variant option name (e.g., "Color")
  // e.detail.optionValue - variant option value (e.g., "Red")
  console.log("Gallery updated for:", e.detail.optionValue);
});
```

| Property | Type | Description |
|---|---|---|
| `imageSelected` | string | URL of the selected image |
| `optionName` | string | Variant option name |
| `optionValue` | string | Selected option value |

---

### `facets:change`

Dispatched on the `document` when collection filters change.

```javascript
document.addEventListener("facets:change", (e) => {
  console.log("Filters changed:", e.detail);
});
```

---

### `modalClosed`

Dispatched on `document.body` when any modal dialog closes.

```javascript
document.body.addEventListener("modalClosed", () => {
  console.log("A modal was closed");
});
```

---

### `wtSelectChange`

Dispatched on `custom-select` elements when the selected value changes.

```javascript
document.addEventListener("wtSelectChange", (e) => {
  console.log("Previous:", e.detail.prevValue);
  console.log("Current:", e.detail.currentValue);
});
```

| Property | Type | Description |
|---|---|---|
| `prevValue` | string | Previous selected value |
| `currentValue` | string | New selected value |

---

## Event Summary Table

| Event | System | Fired When |
|---|---|---|
| `cart-update` | Pub/Sub | Cart contents change |
| `cart-error` | Pub/Sub | Cart operation fails |
| `cart-drawer-open` | Pub/Sub | Cart drawer opens |
| `cart-drawer-close` | Pub/Sub | Cart drawer closes |
| `quick-buy-drawer-open` | Pub/Sub | Quick buy modal opens |
| `quick-buy-drawer-close` | Pub/Sub | Quick buy modal closes |
| `variant-change` | Pub/Sub | Variant selected |
| `quantity-update` | Pub/Sub | Cart line item quantity changes |
| `cart-drawer:refresh` | DOM Event | Cart drawer content refresh requested |
| `variantChangeStart` | DOM Event | Variant selection begins |
| `variantChangeEnd` | DOM Event | Variant selection complete |
| `gallery:updated` | DOM Event | Product gallery slides change |
| `facets:change` | DOM Event | Collection filters change |
| `modalClosed` | DOM Event | Modal dialog closes |
| `wtSelectChange` | DOM Event | Custom select value changes |

---

## Common Integration Examples

### Refresh cart after external add-to-cart

If your app or custom code adds items to the cart via the Shopify AJAX API, trigger a cart drawer refresh so the UI stays in sync:

```javascript
// Your custom add-to-cart call
fetch("/cart/add.js", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: variantId, quantity: 1 })
})
.then(response => response.json())
.then(data => {
  // Refresh the cart drawer UI
  document.dispatchEvent(new CustomEvent("cart-drawer:refresh"));
});
```

### Track add-to-cart for analytics

```javascript
subscribe("cart-update", (data) => {
  if (data.source === "product-form") {
    // Fire your analytics event
    gtag("event", "add_to_cart", {
      item_id: data.productVariantId
    });
  }
});
```

### Run code after variant selection

```javascript
document.addEventListener("variantChangeEnd", () => {
  const selectedVariant = document.querySelector(
    'variant-options [name="id"]'
  );
  console.log("Selected variant ID:", selectedVariant?.value);
});
```

### Detect when cart drawer is toggled

```javascript
subscribe("cart-drawer-open", () => {
  // Pause background video, disable scroll, etc.
});

subscribe("cart-drawer-close", () => {
  // Resume background video, enable scroll, etc.
});
```

---

:::note
The pub/sub system is in-memory only and does not persist across page navigations. Subscribers are cleared on each page load.
:::
