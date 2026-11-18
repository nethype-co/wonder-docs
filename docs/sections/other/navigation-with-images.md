---
title: "Navigation with Images"
sidebar_label: "Navigation with Images"
---

import SectionMeta from '@site/src/components/SectionMeta';
import DocVideo from '@site/src/components/DocVideo';

## What is the Navigation with Images section?

<SectionMeta version="v2.6.0" />

The **Navigation with images** section shows the links of a menu as a row of image tiles, each with a title below the image. Use it to help customers jump to your main categories, for example at the top of the home page or above a collection.

The links come from a menu you build in **Content > Menus**. Images are added in the theme editor as **Menu link image** blocks, one per link.

> Looking for a text-only version? Use the [**Featured navigation**](../text-forms/featured-navigation.md) section.

<DocVideo src="/img/docs/navigation-images-desktop.mp4" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## Mobile view example

<DocVideo src="/img/docs/navigation-images-mobile.mp4" autoPlay playsInline muted loop style={{display: "block", width: "100%", maxWidth: "375px", margin: "0 auto 20px", borderRadius: "8px"}} />

---

## How to set up

### 1. Prepare the menu

1. In your Shopify admin, go to **Content > Menus**.
2. Create a menu (for example *Shop by category*) or use an existing one, such as **Main menu**.
3. Add the links you want to show, in the order you want them to appear.

### 2. Add the section

1. Go to **Online Store > Themes** and click **Customize**.
2. Open the page where you want the navigation, then click **Add section** and choose **Navigation with images** (in the **Other** category).
3. In **Menu**, choose your menu.

### 3. Add the images

1. The section comes with four **Menu link image** blocks. Click the first one and upload an image. It belongs to the first link in the menu.
2. Upload images in the next blocks for the following links.
3. Click **Add block > Menu link image** for any extra links. You can add up to 50 blocks.
4. Click **Save**.

> Links without a matching block show their title only.

---

## How images are matched to links

By default, blocks follow the **menu order**: the first block belongs to the first link, the second block to the second link, and so on.

If you later reorder or add links in the menu, the images could end up next to the wrong titles. To pin an image to a specific link, enter the link's exact title in the block's **Menu link title** field. Matching ignores upper and lower case.

- Blocks **with** a **Menu link title** are matched by title, wherever the link is in the menu.
- Blocks **without** a title are matched by position, to the links that weren't matched by title.

**Example:** your menu has *Women*, *Men*, *Kids*. You add a *Sale* link at the start of the menu. Blocks matched by position would now shift by one. If each block has its link title set, every image stays with its link.

---

## Settings

### General

- **Headline** — The section heading. Leave empty to hide it.
- **Menu** — The menu whose links are shown.
- **Desktop placement** — The alignment of the tiles on desktop. **Center** applies when all tiles fit on the screen; if they don't, the row scrolls from the left.
- **Text style** — The font of the link titles. **Button** uses your button typography (font, weight, letter case).

### Images

- **Display images as circles** — Crops every image to a circle and rounds its background to match.
- **Image ratio** — The shape of the images. **Adapt to image** uses the proportions of the first image in the section. Shown when circles are off.
- **Image width** — The width of each image tile on desktop.
- **Image width on mobile** — The width of each image tile on mobile.
- **Image padding** — The space between the image and the edge of its background.
- **Space between image and title** — The gap between the image and the link title.
- **Show swipe arrows on mobile** — Shows arrows on mobile when the tiles don't fit on the screen. The arrows hide automatically when there is nothing left to scroll.
- **Underline the active title** — Underlines the title of the link that matches the current page.

### Colors

- **Text color** — The color of the link titles.
- **Background color** — The section background.
- **Active text color** — The title color of the link that matches the current page.
- **Image background** — The background behind every image. Each **Menu link image** block can override it.

> Colors left empty use your theme's color settings.

### Section spacing

- **Distance from the top** — The space above the section.
- **Distance from the bottom** — The space below the section.
- **Show custom mobile spacing** — Sets separate spacing for mobile.
- **Distance from the top mobile** — The space above the section on mobile. Shown when custom mobile spacing is on.
- **Distance from the bottom mobile** — The space below the section on mobile. Shown when custom mobile spacing is on.

---

## Menu link image block

- **Image** — The image shown above the link title.
- **Mobile image** — Optional. Replaces the image on screens narrower than 900 px, for example a tighter crop.
- **Image background** — Optional. Overrides the section's **Image background** for this link only.
- **Menu link title** — Optional. The exact title of the menu link this image belongs to. Leave empty to match by position. See [How images are matched to links](#how-images-are-matched-to-links).

> If a block has no image, the link shows a placeholder image. Remove the block if you want that link to show its title only.

---

## How it works

- **Scrolling:** when the tiles don't fit on the screen, the row becomes a slider that customers can swipe or scroll.
- **Active link:** the link matching the current page is highlighted with the **Active text color** and an underline. On load, the slider scrolls to it automatically so it's visible.
- **Submenus:** on a page that belongs to a submenu (for example a collection listed under *Women*), the section shows the links of that submenu instead of the top level. This lets one section work as subcategory navigation across all collections in a group. Images are matched to the submenu links in the same way, so use **Menu link title** if you share the section between levels.
- **Image sizes:** images load at the tile width (and twice that for sharp screens), so you can upload larger images without slowing the page.

---

## Tips

- Use images with the same proportions and a similar style (for example products on a plain background) for a tidy row.
- **Display images as circles** works well with product cut-outs on a light **Image background**.
- Keep link titles short: one or two words fit best under small tiles, especially on mobile.
- Fill in **Menu link title** on each block if your menu changes often. Your images then stay with the right links.
- To show category navigation at the top of every collection page, add the section to the collection template, above the **Product grid**.
