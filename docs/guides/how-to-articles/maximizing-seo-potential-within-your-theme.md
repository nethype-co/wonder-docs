---
title: "Maximizing SEO Potential Within Your Theme"
sidebar_label: "Maximizing SEO Potential Within Your Theme"
---

## Maximizing SEO Potential Within Your Theme

Wonder Theme includes built-in SEO features to help your store rank better in search engines. This guide covers microdata schema and breadcrumb navigation — two key areas you can configure.

---

## Microdata Schema

Wonder Theme includes structured data (microdata schema) that helps search engines like Google understand your page content and display richer search results.

### What's included

The built-in schema covers:

- **Store details** — Organization name, logo, and contact information
- **Breadcrumb navigation** — Page hierarchy for search result display
- **Product information** — Name, URL, variants, images, price, and availability

### Disabling the built-in schema

If you use a dedicated SEO app or need custom structured data, you can disable the theme's built-in microdata schema in **Theme Settings**. This lets you implement your own solution without conflicts.

:::tip
You can validate your structured data using [Google's Rich Results Test](https://search.google.com/test/rich-results) to make sure everything is set up correctly.
:::

---

## Breadcrumbs

Breadcrumbs provide a navigational trail that helps both users and search engines understand your site hierarchy.

### How breadcrumbs work in Wonder

Wonder Theme uses collection-based breadcrumb paths:

```
Home → Collection Name → Product Name
```

For example, if a customer navigates to a product through the "Creams" collection, the breadcrumb shows:

```
Home → Creams → Firming Face Serum
```

### Multiple URL paths

Because products can belong to multiple collections, the same product may be accessible through different URLs:

- `myshop.com/collections/creams/products/firming-face-serum`
- `myshop.com/collections/women/products/firming-face-serum`

This does **not** cause duplicate content issues because Shopify automatically sets a single canonical URL for every product:

- `myshop.com/products/firming-face-serum`

The canonical URL tells search engines which version is the "official" one, so your SEO is not negatively affected.

### Should you keep breadcrumbs enabled?

Yes, in most cases. Breadcrumbs improve:

- **User experience** — Visitors can easily navigate back to parent collections
- **Search appearance** — Google may display breadcrumb paths directly in search results
- **Site structure signals** — Search engines better understand your content hierarchy

---

## Additional SEO tips

- **Write unique meta titles and descriptions** for each product and collection in Shopify Admin → Edit SEO
- **Use descriptive alt text** on all images — this helps with Google Image search
- **Optimize page speed** — See our [Page Speed Mastery](/guides/how-to-articles/unlocking-page-speed-mastery-for-your-shopify-store) guide
- **Use clean URL handles** — Keep product and collection URLs short and keyword-rich
- **Submit your sitemap** to Google Search Console at `yourstore.com/sitemap.xml`
