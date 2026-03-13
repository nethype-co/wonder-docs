---
title: "Cart Drawer JavaScript API"
sidebar_label: "Cart Drawer API"
sidebar_position: 2
---

# Cart Drawer JavaScript API

The Wonder Theme cart drawer (`<cart-drawer>`) is a web component with a public API that you can use to programmatically open, close, and refresh the cart from custom code, third-party apps, or page builder integrations like Replo.

---

## Quick Reference

```javascript
const cartDrawer = document.querySelector("cart-drawer");

// Open or close the cart drawer
cartDrawer.toggleDrawerClasses();

// Check if the cart drawer is open
console.log(cartDrawer.isOpen);

// Refresh cart drawer contents
document.dispatchEvent(new CustomEvent("cart-drawer:refresh"));
```

---

## Availability

The `<cart-drawer>` element is only present when the cart type is set to **Drawer** in theme settings. If the cart type is set to **Page**, there is no cart drawer element on the page.

Always check for its existence before calling methods:

```javascript
const cartDrawer = document.querySelector("cart-drawer");
if (cartDrawer) {
  // Safe to use cart drawer API
}
```

You can also check the cart type:

```javascript
const cartDrawer = document.querySelector("cart-drawer");
const cartType = cartDrawer?.dataset.cartType; // "drawer" or "page"
```

---

## Methods

### `toggleDrawerClasses()`

Opens the cart drawer if it's closed, or closes it if it's open. Handles the slide-in animation, body scroll lock, and overlay.

```javascript
const cartDrawer = document.querySelector("cart-drawer");
cartDrawer.toggleDrawerClasses();
```

**Use case:** Opening the cart after a custom add-to-cart action, or adding a "View Cart" button to a custom section.

---

### `renderContents(parsedState, isClosedCart)`

Updates the cart drawer HTML with new content from a Shopify cart API response. This is called internally after add-to-cart, but you can use it to manually update the drawer.

| Parameter | Type | Description |
|---|---|---|
| `parsedState` | object | Parsed JSON response from Shopify's `/cart/add.js` or `/cart/change.js` |
| `isClosedCart` | boolean | If `true`, the drawer will also open after rendering |

```javascript
const cartDrawer = document.querySelector("cart-drawer");

fetch("/cart/add.js", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: variantId, quantity: 1 })
})
.then(res => res.json())
.then(data => {
  // Update and open the cart drawer
  cartDrawer.renderContents(data, true);
});
```

---

### `getSectionsToRender()`

Returns an array of section objects that the cart drawer needs to re-render. Useful when building custom add-to-cart flows that need to include the correct `sections` parameter in the Shopify API call.

```javascript
const cartDrawer = document.querySelector("cart-drawer");
const sections = cartDrawer.getSectionsToRender();
// Returns: [{ id: "cart-drawer", selector: "#CartDrawer" }, ...]

// Use in your add-to-cart request
const formData = new FormData();
formData.append("id", variantId);
formData.append("quantity", 1);
formData.append("sections", sections.map(s => s.id));

fetch("/cart/add.js", { method: "POST", body: formData });
```

---

## Properties

### `isOpen`

Boolean indicating whether the cart drawer is currently open.

```javascript
const cartDrawer = document.querySelector("cart-drawer");

if (cartDrawer.isOpen) {
  console.log("Cart drawer is open");
} else {
  console.log("Cart drawer is closed");
}
```

---

## Events

The cart drawer fires and listens to several events. See the [JavaScript Events Reference](./javascript-events) for the full list.

### Events fired by the cart drawer

| Event | System | When |
|---|---|---|
| `cart-drawer-open` | Pub/Sub | Drawer opens |
| `cart-drawer-close` | Pub/Sub | Drawer closes |
| `cart-update` | Pub/Sub | Cart contents change |

### Events the cart drawer listens to

| Event | System | Effect |
|---|---|---|
| `cart-drawer:refresh` | DOM Event | Triggers a full re-render of the drawer contents |

---

## Common Patterns

### Open cart drawer from a custom button

```html
<button id="my-cart-button">View Cart</button>

<script>
  document.getElementById("my-cart-button").addEventListener("click", () => {
    const cartDrawer = document.querySelector("cart-drawer");
    if (cartDrawer && !cartDrawer.isOpen) {
      cartDrawer.toggleDrawerClasses();
    }
  });
</script>
```

### Add to cart and open drawer (full example)

```javascript
async function addToCartAndOpenDrawer(variantId, quantity = 1) {
  const cartDrawer = document.querySelector("cart-drawer");

  // Build the request
  const formData = new FormData();
  formData.append("id", variantId);
  formData.append("quantity", quantity);

  if (cartDrawer) {
    const sections = cartDrawer.getSectionsToRender().map(s => s.id);
    formData.append("sections", sections);
  }

  formData.append("sections_url", window.location.pathname);

  // Add to cart
  const response = await fetch("/cart/add.js", {
    method: "POST",
    body: formData,
    headers: { "X-Requested-With": "XMLHttpRequest" }
  });

  const data = await response.json();

  if (data.status) {
    // Error (e.g., sold out)
    console.error("Cart error:", data.description);
    return;
  }

  // Success - update and open the drawer
  if (cartDrawer) {
    cartDrawer.renderContents(data, true);
  } else {
    // Fallback: redirect to cart page
    window.location = "/cart";
  }
}

// Usage
addToCartAndOpenDrawer(44567890123, 1);
```

### Refresh cart after external modification

If an external app or script modifies the cart (e.g., a subscription app, upsell widget, or custom AJAX call), dispatch the refresh event so the drawer stays in sync:

```javascript
// After your external cart modification
document.dispatchEvent(new CustomEvent("cart-drawer:refresh"));
```

### Listen for cart drawer state changes

```javascript
subscribe("cart-drawer-open", () => {
  // Drawer just opened
  // e.g., pause a background video, fire analytics
});

subscribe("cart-drawer-close", () => {
  // Drawer just closed
  // e.g., resume background video
});
```

### Integration with page builders (Replo, Shogun, etc.)

Page builder sections often need to add items to cart and open the Wonder cart drawer. Use this pattern:

```javascript
// Inside your page builder's custom code
document.addEventListener("click", (e) => {
  const addToCartBtn = e.target.closest("[data-custom-add-to-cart]");
  if (!addToCartBtn) return;

  const variantId = addToCartBtn.dataset.variantId;
  addToCartAndOpenDrawer(variantId);
});
```

---

:::tip Cart type detection
If you need to handle both cart drawer and cart page modes:

```javascript
const cartDrawer = document.querySelector("cart-drawer");
const isDrawerMode = cartDrawer?.dataset.cartType === "drawer";

if (isDrawerMode) {
  cartDrawer.toggleDrawerClasses();
} else {
  window.location = "/cart";
}
```
:::

---

:::note
The cart drawer is dynamically updated via Shopify's Section Rendering API. If you manually modify the drawer's DOM, your changes will be lost on the next cart update.
:::
