---
title: "Web Components Reference"
sidebar_label: "Web Components"
sidebar_position: 5
---

# Web Components Reference

Wonder Theme is built on native Web Components (Custom Elements). Every interactive feature is a self-contained component with its own markup, behavior, and public API.

This reference lists all 45+ custom elements organized by category, with their public methods for integration.

---

## Cart

### `<cart-drawer>`

The main cart drawer that slides in from the side. See the dedicated [Cart Drawer API](./cart-drawer-api) article for full documentation.

| Method / Property | Description |
|---|---|
| `toggleDrawerClasses()` | Open/close the cart drawer |
| `renderContents(data, isClosedCart)` | Update drawer contents from cart API response |
| `getSectionsToRender()` | Get sections array for Shopify section rendering |
| `refreshCartDrawer()` | Refresh drawer contents from server |
| `isOpen` | Boolean - whether drawer is currently open |

**File:** `assets/cart-drawer.js`

---

### `<cart-drawer-items>`

Cart line items container inside the drawer. Extends cart-items functionality.

| Method | Description |
|---|---|
| `updateQuantity(line, quantity, name)` | Update a line item's quantity (0 to remove) |

**File:** `assets/cart-drawer.js`

---

### `<cart-items>`

Cart line items on the full cart page (`/cart`).

| Method | Description |
|---|---|
| `updateQuantity(line, quantity, name)` | Update a line item's quantity |
| `onCartUpdate()` | Refresh cart from server |

**File:** `assets/cart.js`

---

### `<cart-note>` / `<drawer-cart-note>`

Order note fields for the cart page and cart drawer respectively.

**Files:** `assets/cart.js`, `assets/cart-drawer-note.js`

---

## Product

### `<product-form>`

Handles add-to-cart form submission with loading states and error handling.

| Method | Description |
|---|---|
| `onSubmitHandler(evt)` | Handle form submission (add to cart) |
| `handleErrorMessage(msg)` | Show/hide error message |

**Publishes:** `cart-update` or `cart-error` via pub/sub
**Dispatches:** `cart-drawer:refresh` DOM event
**File:** `assets/product-form.js`

---

### `<gallery-section>`

Product image gallery with Swiper carousel and lightbox.

| Method | Description |
|---|---|
| `initializeGallery()` | Initialize the gallery carousel |
| `filterSlides(options, media_id, animate)` | Filter slides by variant media |
| `destroyCarouselGallery()` | Destroy the carousel instance |

**Dispatches:** `gallery:updated` DOM event
**File:** `assets/gallery.js`

---

### `<quick-add>`

Quick add-to-cart modal on collection pages.

| Method | Description |
|---|---|
| `fetchProduct(url)` | Load a product into the quick-add modal |

**Publishes:** `quick-buy-drawer-open` / `quick-buy-drawer-close`
**File:** `assets/quick-add.js`

---

### `<sticky-buy-button>`

Sticky add-to-cart button that appears when the main button scrolls out of view.

| Method | Description |
|---|---|
| `initialize()` | Set up intersection observer |

**File:** `assets/pdp.js`

---

### `<shoppable-video>`

Interactive video with clickable product hotspots.

| Method | Description |
|---|---|
| `togglePlayPause()` | Play or pause the video |
| `playVideo()` | Start video playback |

**File:** `assets/shoppable-video.js`

---

### `<gallery-fashion>`

Fashion-style product gallery layout (alternate PDP layout).

| Method | Description |
|---|---|
| `init()` | Initialize the fashion gallery |
| `reinit()` | Reinitialize after DOM changes |

**File:** `assets/pdp.js`

---

## Navigation

### `<page-header>`

Main site header with sticky and transparent modes.

| Method | Description |
|---|---|
| `enableStickyHeader()` | Enable sticky header behavior |
| `disableStickyHeader()` | Disable sticky header |
| `getHeaderHeight()` | Get current header height in px |

**File:** `assets/page-header.js`

---

### `<drawer-nav>`

Mobile navigation drawer menu.

| Method | Description |
|---|---|
| `toggleMenu()` | Toggle the drawer open/closed |
| `openMenu()` | Open the drawer |
| `closeMenu()` | Close the drawer |
| `openMobileSubmenu()` | Open a submenu level |

**File:** `assets/base.js`

---

### `<mega-menu-section>`

Desktop mega menu navigation.

| Method | Description |
|---|---|
| `isMobileMenu()` | Check if currently in mobile mode |

**File:** `assets/base.js`

---

### `<announcement-bar>`

Top announcement banner with auto-rotate.

| Method | Description |
|---|---|
| `changeAnnouncement()` | Advance to next announcement |
| `previousAnnouncement()` | Go to previous announcement |
| `hideForOneDay()` | Dismiss for 24 hours (cookie-based) |

**File:** `assets/announcement-bar.js`

---

## UI / Modals

### `<modal-dialog>`

Generic modal dialog with focus trap and keyboard navigation.

| Method | Description |
|---|---|
| `show(opener)` | Open modal, set focus, remember opener element |
| `hide()` | Close modal, return focus to opener |
| `getFocusableElements()` | Get all focusable elements inside modal |

**Dispatches:** `modalClosed` on `document.body`
**File:** `assets/base.js`

---

### `<details-modal>`

Modal using the native `<details>` element pattern.

| Method | Description |
|---|---|
| `open()` | Open the modal |
| `close()` | Close the modal |
| `isOpen()` | Check if modal is open |

**File:** `assets/details-modal.js`

---

### `<modal-swiper>`

Full-screen image/video carousel modal.

| Method | Description |
|---|---|
| `open()` | Open the modal carousel |
| `close()` | Close the modal |

**File:** `assets/modal-swiper.js`

---

### `<collapsible-section>`

Accordion/collapsible content block.

| Method | Description |
|---|---|
| `toggleState()` | Toggle open/closed |
| `enableCollapsible()` | Enable collapsible behavior |
| `disableCollapsible()` | Disable (keep open) |

**File:** `assets/base.js`

---

### `<notification-popup>`

Newsletter/notification popup with auto-display.

| Method | Description |
|---|---|
| `setCookie()` | Set dismissal cookie |

**File:** `assets/notification-popup.js`

---

### `<cart-notification>`

Toast notification shown after adding to cart.

| Method | Description |
|---|---|
| `open()` | Show the notification |
| `close()` | Hide the notification |
| `renderContents()` | Update notification content |

**File:** `assets/base.js`

---

## Collection & Filters

### `<collection-section>`

Collection page with filter drawer.

| Method | Description |
|---|---|
| `toggleDrawer()` | Toggle the filter sidebar drawer |
| `isDrawerMode()` | Check if filters are in drawer mode |

**File:** `assets/collection-section.js`

---

### `<facet-filters-form>`

Product filter form with faceted search.

| Static Method | Description |
|---|---|
| `renderPage(params, event, updateURL)` | Update collection with filter results |
| `toggleActiveFacets(disable)` | Enable/disable active filter display |

**Dispatches:** `facets:change` DOM event
**File:** `assets/facets.js`

---

### `<color-swatch>`

Color variant selector with swatch display on product cards.

| Method | Description |
|---|---|
| `initialize()` | Set up swatch buttons and events |

**File:** `assets/color-swatch.js`

---

### `<products-slider>`

Synchronized dual-slider for products and promotional content.

**File:** `assets/products-slider.js`

---

### `<collection-feature>`

Collection with hover color-changing features.

| Method | Description |
|---|---|
| `changeColors()` | Apply hover color scheme |
| `resetColors()` | Reset to default colors |

**File:** `assets/collection-feature.js`

---

## Search & Localization

### `<search-drawer>`

Predictive search drawer with live results.

| Method / Property | Description |
|---|---|
| `toggleDrawerClasses()` | Open/close search drawer |
| `getSearchResults(query)` | Fetch search results |
| `clearResults()` | Clear search results |
| `isOpen` | Boolean - whether drawer is open |

**File:** `assets/search-drawer.js`

---

### `<localization-drawer>`

Language and country/currency selector drawer.

| Method | Description |
|---|---|
| `toggleDrawerClasses()` | Open/close the drawer |
| `setActiveTab(tab)` | Switch between language and country tabs |

**File:** `assets/localization-drawer.js`

---

## Media

### `<slideshow-section>`

Full-width image/video carousel.

**File:** `assets/slideshow.js`

---

### `<video-reels>`

Short video carousel with mute controls.

| Method | Description |
|---|---|
| `init()` | Initialize the video reel |
| `updateAllVideosSound()` | Toggle mute/unmute across all videos |

**File:** `assets/video-reels.js`

---

### `<product-video-reels>`

Vertical video reels with quick-add integration.

| Method | Description |
|---|---|
| `openModalAt(index)` | Open fullscreen modal at specific video |

**File:** `assets/module-video-reels.js`

---

### `<model-element>`

3D model viewer with modal interface.

| Method | Description |
|---|---|
| `showModel()` | Open the 3D model viewer |

**File:** `assets/model_element.js`

---

## Form & Input

### `<custom-select>`

Custom dropdown select element (used for variant options, sorting).

| Method | Description |
|---|---|
| `toggleState()` | Open/close the dropdown |
| `onSelect(value)` | Programmatically select a value |

**Dispatches:** `wtSelectChange` DOM event
**File:** `assets/custom-select.js`

---

### `<drawer-select>`

Variant selector that opens options in a drawer (for products with many variants).

| Method | Description |
|---|---|
| `openDrawer()` | Open the selection drawer |
| `closeDrawer()` | Close the drawer |
| `setOption(value)` | Set selected option |

**File:** `assets/drawer-select.js`

---

### `<quantity-counter>`

Plus/minus quantity input.

| Method | Description |
|---|---|
| `onIncrease()` | Increment quantity |
| `onDecrease()` | Decrement quantity |
| `updateValue(value)` | Set quantity programmatically |

**File:** `assets/global.js`

---

### `<recipient-form>`

Gift card recipient information form.

**File:** `assets/recipient-form.js`

---

## Other

### `<countdown-timer>`

Countdown timer display with expiration handling.

| Method | Description |
|---|---|
| `updateCountdown()` | Refresh the countdown display |

**File:** `assets/countdown-timer.js`

---

### `<product-recommendations>`

Dynamic product recommendations section (loaded via Shopify API).

**File:** `assets/global.js`

---

### `<logo-banner>`

Logo/video banner section with header transparency detection.

| Method | Description |
|---|---|
| `isFirstSection()` | Check if this is the first section on the page |

**File:** `assets/logo-banner.js`

---

### `<custom-scroll>`

Swiper-based vertical scroll container with custom scrollbar.

**File:** `assets/custom-scroll.js`

---

## Working with Web Components

### Querying components

```javascript
// Get a specific component
const cartDrawer = document.querySelector("cart-drawer");
const productForm = document.querySelector("product-form");

// Get all instances of a component
const allCollapsibles = document.querySelectorAll("collapsible-section");
```

### Waiting for components to be defined

```javascript
// If you need to interact with a component that may not be loaded yet
customElements.whenDefined("cart-drawer").then(() => {
  const cartDrawer = document.querySelector("cart-drawer");
  // Safe to use
});
```

### Checking if a component exists

Always check before calling methods, as components may not be present on every page:

```javascript
const cartDrawer = document.querySelector("cart-drawer");
if (cartDrawer) {
  cartDrawer.toggleDrawerClasses();
}
```

---

:::note
Web Components are progressively loaded. Not all components exist on every page - for example, `<cart-drawer>` only exists when cart type is set to "Drawer", and `<quick-add>` only exists on collection pages.
:::
