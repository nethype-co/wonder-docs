---
title: "Theme Architecture Overview"
sidebar_label: "Theme Architecture"
sidebar_position: 3
---

# Theme Architecture Overview

A technical overview of how Wonder Theme is structured, for developers and agencies building custom integrations or modifications.

---

## File Organization

```
wonder-theme/
  assets/          # JavaScript, CSS, and static assets
  config/          # Theme settings schema and defaults
  layout/          # Base layout templates (theme.liquid)
  locales/         # Translation files (en, de, fr, es, it)
  sections/        # Section Liquid templates + JSON schemas
  snippets/        # Reusable Liquid partials
  templates/       # Page templates (JSON-based)
```

---

## JavaScript Architecture

### Web Components

Wonder is built on **native Web Components** (Custom Elements). Every interactive feature is a self-contained custom element registered via `customElements.define()`.

The theme defines **45+ custom elements** including `<cart-drawer>`, `<product-form>`, `<quick-add>`, `<variant-options>`, `<gallery-section>`, `<mega-menu-section>`, and more. See the [Web Components Reference](./web-components) for the full list.

### Pub/Sub Event System

Core theme communication uses a lightweight publish/subscribe system defined in `assets/pubsub.js`:

```javascript
// Two global functions available on every page
subscribe(eventName, callback)  // Returns unsubscribe function
publish(eventName, data)        // Fire event to all subscribers
```

Event constants are defined in `assets/constants.js`. See the [JavaScript Events Reference](./javascript-events) for all available events.

### Key JavaScript Files

| File | Purpose |
|---|---|
| `assets/base.js` | Core components: modal, drawer nav, mega menu, collapsible sections, `fetchConfig()` utility |
| `assets/constants.js` | Event name constants (`PUB_SUB_EVENTS`) and debounce timer |
| `assets/pubsub.js` | Pub/sub event system (`subscribe`, `publish`) |
| `assets/global.js` | Utility components: quantity counter, product recommendations, Shopify helpers |
| `assets/cart-drawer.js` | Cart drawer component and cart drawer items |
| `assets/cart.js` | Cart page components (cart items, remove button, cart note) |
| `assets/product-form.js` | Add-to-cart form handling |
| `assets/variants.js` | Variant selection logic |
| `assets/gallery.js` | Product image gallery with Swiper |
| `assets/facets.js` | Collection filter/facet system |
| `assets/quick-add.js` | Quick add modal on collection pages |
| `assets/page-header.js` | Header with sticky and transparent modes |
| `assets/color-swatch.js` | Color swatch variant selector |

### Third-Party Libraries

| Library | Purpose |
|---|---|
| [Swiper](https://swiperjs.com/) | Carousels, sliders, product gallery |
| [noUiSlider](https://refreshless.com/nouislider/) | Price range slider in filters |

---

## CSS Architecture

### Global Variables

Wonder uses **380+ CSS custom properties** for theming. Global variables are defined in two locations:

1. **`assets/settings.css.liquid`** - Theme settings mapped to CSS variables in `:root`
2. **`layout/theme.liquid`** - Font face declarations and custom font overrides

See the [CSS Variables Reference](./css-variables) for a categorized list.

### How CSS is Organized

| Location | Purpose |
|---|---|
| `assets/settings.css.liquid` | Global CSS variables from theme settings |
| `assets/main.css` | Core component styles |
| `assets/base.css` | Reset, typography, utility classes |
| Section `{% style %}` blocks | Section-specific CSS with scoped variables |
| Theme Settings > Custom CSS | User's global custom CSS (rendered before `</body>`) |
| Section-level Custom CSS | Per-section custom CSS fields |

### Section-Level Variable Overrides

Each section can override global CSS variables via inline styles. For example:

```liquid
<div data-section-id="{{ section.id }}" style="
  --section-gap-top: {{ section.settings.gap_top }}px;
  --section-gap-bottom: {{ section.settings.gap_bottom }}px;
  --color-background: {{ section.settings.color_background }};
">
```

This allows sections to have independent color schemes, spacing, and typography without affecting the rest of the page.

---

## Liquid Architecture

### Layout

`layout/theme.liquid` is the base template. It loads:
1. Global CSS variables (`settings.css.liquid`)
2. Custom font faces (from theme settings `fontfaces` field)
3. Core CSS and JavaScript
4. Section groups (header, footer)
5. Page content via `{{ content_for_layout }}`

### Templates (JSON-based)

Wonder uses Shopify's **JSON templates** (`templates/*.json`). Each template defines an ordered list of sections:

```json
{
  "sections": {
    "main": {
      "type": "main-product",
      "settings": { ... }
    },
    "recommendations": {
      "type": "product-recommendations",
      "settings": { ... }
    }
  },
  "order": ["main", "recommendations"]
}
```

### Sections

Each section in `sections/` contains:
- Liquid template code
- Optional `{% style %}` block for scoped CSS
- JSON schema defining settings, blocks, and presets

### Snippets

Reusable Liquid partials in `snippets/`. Key snippets:

| Snippet | Purpose |
|---|---|
| `card.liquid` | Product card (used in collections, recommendations, search) |
| `price.liquid` | Price display with compare-at-price and sale logic |
| `icons.liquid` | SVG icon library |
| `card-color-swatches.liquid` | Color swatch display on product cards |
| `quick-add-button.liquid` | Quick add button on collection cards |
| `rating.liquid` | Star rating display |

---

## Adding Custom Code

### Custom CSS

**For small changes** - use the built-in Custom CSS field:
- **Global**: Theme Settings > Custom CSS (applies to all pages)
- **Per-section**: Each section has its own Custom CSS field (applies only to that section)

**For larger changes** - add a `custom.css` file to `assets/` and include it in `layout/theme.liquid`. This keeps your CSS separate and easier to maintain across theme updates.

### Custom JavaScript

Add custom JavaScript via:
- **Theme Settings > Custom CSS** field (can include `<script>` tags via the Liquid field)
- A separate `custom.js` file in `assets/`, linked in `layout/theme.liquid`

### Hooking Into Theme Events

Use the pub/sub system and DOM events to integrate without modifying theme files:

```javascript
// Listen for cart changes
subscribe("cart-update", (data) => {
  // Your custom logic
});

// Listen for variant selection
document.addEventListener("variantChangeEnd", () => {
  // Your custom logic
});
```

See the [JavaScript Events Reference](./javascript-events) and [Cart Drawer API](./cart-drawer-api) for all available hooks.

---

## Preserving Upgrade Eligibility

To keep your store compatible with future theme updates:

**Do:**
- Use the Custom CSS fields (global and per-section)
- Use separate custom.css / custom.js files
- Hook into theme events via `subscribe()` and `addEventListener()`
- Use CSS variable overrides instead of modifying source CSS

**Avoid:**
- Editing core theme files in `assets/` (base.js, main.css, etc.)
- Modifying section Liquid templates directly
- Overriding custom element class definitions

:::tip
Custom code added via separate files or the Custom CSS/JS fields will persist through theme updates. Direct edits to theme files will be overwritten.
:::
