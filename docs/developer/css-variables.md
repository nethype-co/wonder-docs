---
title: "CSS Variables Reference"
sidebar_label: "CSS Variables"
sidebar_position: 4
---

# CSS Variables Reference

Wonder Theme uses CSS custom properties (variables) extensively for theming. You can override these in your custom CSS to change colors, typography, spacing, and more without editing theme files.

---

## How to Override Variables

### Global override (all pages)

Add to **Theme Settings > Custom CSS**:

```css
:root {
  --border-radius: 12px;
  --gap: 12px;
}
```

### Section-specific override

Add to a section's **Custom CSS** field:

```css
.section-{{ section.id }} {
  --color-background: #f5f5f5;
  --color-text: #333333;
}
```

---

## Colors

### General

| Variable | Description | Default source |
|---|---|---|
| `--color-background` | Page/section background | Theme Settings > Colors |
| `--color-text` | Primary text color | Theme Settings > Colors |
| `--color-links` | Link color | Theme Settings > Colors |
| `--color-overlay` | Overlay color | Theme Settings > Colors |
| `--color-overlay-rgb` | Overlay color as RGB values (for rgba()) | Auto-generated |

### Header & Navigation

| Variable | Description |
|---|---|
| `--color-header-text` | Header text/icon color |
| `--color-menu-text` | Navigation menu text |
| `--color-transparent-header` | Header color in transparent mode |
| `--color-announcement-background` | Announcement bar background |
| `--color-announcement-text` | Announcement bar text |

### Buttons

| Variable | Description |
|---|---|
| `--color-button-primary-background` | Primary button background |
| `--color-button-primary-text` | Primary button text |
| `--color-button-secondary-background` | Secondary button background |
| `--color-button-secondary-text` | Secondary button text |
| `--color-button-secondary-border` | Secondary button border |

### Forms & Inputs

| Variable | Description |
|---|---|
| `--color-input-text` | Input field text |
| `--color-input-background` | Input field background |
| `--color-input-border` | Input field border |
| `--color-success-background` | Success message background |
| `--color-error-text` | Error message text |

### Product & Pricing

| Variable | Description |
|---|---|
| `--color-price` | Regular price color |
| `--color-sale-price` | Sale price color |
| `--color-star-rating` | Star rating color |

### Footer

| Variable | Description |
|---|---|
| `--color-footer-background` | Footer background |
| `--color-footer-text` | Footer text |

### RGB Variants

Many color variables have an `-rgb` variant for use with `rgba()`:

```css
/* Use the RGB variant for transparency */
background: rgba(var(--color-overlay-rgb), 0.5);
```

---

## Typography

### Font Families

| Variable | Description |
|---|---|
| `--font-base` | Body/paragraph font family |
| `--font-headline` | Heading font family |
| `--font-navigation` | Navigation menu font |
| `--font-button` | Button text font |
| `--font-price` | Price display font |

### Font Weights

| Variable | Description |
|---|---|
| `--font-base-weight` | Body font weight |
| `--font-headline-weight` | Heading font weight |
| `--font-navigation-weight` | Navigation font weight |
| `--font-button-weight` | Button font weight |
| `--font-price-weight` | Price font weight |

### Font Scaling

Section-level font scaling is applied via multiplier variables:

| Variable | Description |
|---|---|
| `--font-headline-scale-desk` | Desktop heading scale (0-1) |
| `--font-headline-scale` | Mobile heading scale (0-1) |
| `--font-text-scale-desk` | Desktop body text scale |
| `--font-text-scale` | Mobile body text scale |

---

## Spacing & Layout

| Variable | Default | Description |
|---|---|---|
| `--gap` | `8px` | Base spacing unit. Used with `calc(var(--gap) * N)` throughout |
| `--section-gap-top` | varies | Section top padding |
| `--section-gap-bottom` | varies | Section bottom padding |
| `--grid-gap` | varies | Grid gap between items |
| `--site-max-width` | varies | Maximum content width |
| `--site-max-width-big` | varies | Maximum width for wide sections |
| `--navbar-height` | `56px` | Header navbar height |

### Grid Columns

| Variable | Description |
|---|---|
| `--columns-desktop` | Number of grid columns on desktop |
| `--columns-mobile` | Number of grid columns on mobile |
| `--cols` | Generic column count |

---

## Border Radius

| Variable | Description |
|---|---|
| `--border-radius` | Global border radius for containers |
| `--border-radius-button` | Button border radius |
| `--border-radius-button-video` | Video button border radius |

---

## Animation & Timing

### Durations

| Variable | Default | Description |
|---|---|---|
| `--duration-short` | `100ms` | Quick transitions (hover states) |
| `--duration-default` | `200ms` | Standard transitions |
| `--duration-medium` | `300ms` | Medium transitions |
| `--duration-long` | `500ms` | Longer animations |
| `--duration-extended` | `3s` | Extended animations (slideshows) |

### Easing

| Variable | Description |
|---|---|
| `--ease-out-slow` | Cubic bezier easing for smooth deceleration |

### Hover Effects

| Variable | Default | Description |
|---|---|---|
| `--onhover-picture-scale` | `1.05` | Image zoom scale on hover |
| `--onhover-picture-duration` | `1.5s` | Image zoom animation duration |

---

## Media & Aspect Ratios

| Variable | Description |
|---|---|
| `--aspect-ratio` | Section/card aspect ratio |
| `--aspect-ratio-portait` | Portrait aspect ratio (`0.67`) |
| `--section-height` | Mobile section height (fixed height mode) |
| `--section-height-desk` | Desktop section height (fixed height mode) |
| `--first-slide-ratio` | Mobile aspect ratio of first slide (adapt mode) |
| `--first-slide-ratio-desk` | Desktop aspect ratio of first slide (adapt mode) |
| `--image-object-position` | Mobile image focal point |
| `--image-object-position-desktop` | Desktop image focal point |

---

## Icons

| Variable | Default | Description |
|---|---|---|
| `--size-icon` | varies | Icon size (mobile) |
| `--size-icon-desk` | varies | Icon size (desktop) |

---

## Section-Level Variables

Individual sections set their own variables via inline styles. Common patterns:

### Section Spacing

Every section supports:
```css
--section-gap-top: 40px;    /* Top padding */
--section-gap-bottom: 40px; /* Bottom padding */
```

### Section Colors

Sections can define independent color schemes:
```css
--color-background: #1a1a1a;
--color-text: #ffffff;
--color-custom-text: #cccccc;
--color-overlay-rgb: 0, 0, 0;
--color-overlay-opacity: 0.4;
```

### Block-Level Variables

Individual blocks within sections:
```css
--block-color-background: #f0f0f0;
--block-color-text: #333333;
--block-padding-top: 20px;
--block-padding-bottom: 20px;
--block-margin-top: 10px;
--block-margin-bottom: 10px;
```

---

## Header-Specific Variables

| Variable | Description |
|---|---|
| `--logo-width` | Mobile logo width |
| `--logo-width-desk` | Desktop logo width |

---

## Examples

### Change global border radius

```css
:root {
  --border-radius: 16px;
  --border-radius-button: 8px;
}
```

### Speed up hover animations

```css
:root {
  --onhover-picture-duration: 0.5s;
  --onhover-picture-scale: 1.08;
}
```

### Custom section spacing

```css
/* Reduce spacing on a specific section */
.section-{{ section.id }} {
  --section-gap-top: 10px;
  --section-gap-bottom: 10px;
}
```

### Override colors for dark sections

```css
.section-{{ section.id }} {
  --color-background: #111111;
  --color-text: #f5f5f5;
  --color-button-primary-background: #ffffff;
  --color-button-primary-text: #111111;
}
```

---

:::info
CSS variables are defined in `assets/settings.css.liquid` and `layout/theme.liquid`. Values are populated from theme settings configured in the Shopify theme editor.
:::
