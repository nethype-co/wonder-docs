---
title: "Block - Menu Image"
sidebar_label: "Block - Menu Image"
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Menu Image block?

<SectionMeta version="v2.6.0" availability="Header group" />

The **Menu image** block shows a small square image next to items in your header menu, for example a product photo next to *Sneakers* or *Bags* in a dropdown. Images help customers find categories at a glance.

The block belongs to the **Header** section. One block holds one image and the names of the menu items that show it. A header without **Menu image** blocks looks exactly as before.

:::tip
The block works like the [Menu Highlight](/sections/header-navigation/header/block-menu-highlight) block: you type the names of the menu items, separated by commas.
:::

![](/img/docs/menu-image-ex.png)

## How to Set Up a Menu Image

### Step 1: Check your menu item names

1. In your Shopify admin, go to **Content > Menus**.
2. Open the menu used in your header (usually **Main menu**).
3. Note the exact titles of the items that should show an image. You will type these titles in the block.

### Step 2: Add a Menu image block

1. Go to **Online Store > Themes** and click **Customize**.
2. Click the **Header** section, then click **Add block** and choose **Menu image**.
3. In **Menu items**, type the name of the menu item that should show the image, for example *Sneakers*. To use the same image for several items, separate the names with commas, for example *Sale, New Arrivals*.
4. Upload an **Image**.
5. Adjust the size, background, and position if needed.
6. Click **Save**.

Add one **Menu image** block for each image you want to show.

:::note
A block does nothing until it has both an **Image** and at least one name in **Menu items**.
:::

## How images are matched to menu items

Each name in **Menu items** is compared with the titles in your header menu.

* The name must match the whole title. Upper and lower case don't matter, and spaces before or after a name are ignored.
* The image shows next to **every** menu item with that title, at any level of the menu.
* If the same name is in two **Menu image** blocks, the first block (the higher one in the block list) wins.

**Example:** your menu has *Women > Shoes* and *Men > Shoes*. A block with *Shoes* in **Menu items** shows its image next to both. To show different images, rename one of the items in the menu, for example *Women's shoes*.

:::warning
If you rename a menu item in **Content > Menus**, update the name in the block too. Otherwise the image disappears.
:::

## Main Settings

![](/img/docs/menu-image-settings.png)

* **Menu items:** The names of the menu items that show this image, separated by commas (for example *Sale, New Arrivals*). See [How images are matched to menu items](#how-images-are-matched-to-menu-items).
* **Image:** The image shown next to the menu items. It is cropped to a square from the center.
* **Image size:** The width and height of the image, from 24 to 96 px (default 48 px). In the desktop top menu bar, the image is limited to the height of the bar.
* **Image background:** Optional. Adds a background and padding behind the image. Useful for product photos with a transparent background. Leave empty or fully transparent for no background.
* **Image position:** Shows the image **Before title** (default) or **After title**. With **After title**, the arrow or plus icon of a submenu stays at the far edge.
* **Show images on desktop:** On by default. Images always show in the drawer menu. Turn on to also show them in the desktop menu.

## How it works

* **Menu levels:** Images work on all three levels of the header menu: top-level items, their submenu items, and the items one level below.
* **Menu types:** Images show in dropdown menus and in mega menus created with [Promotion Menu](/sections/header-navigation/header/block-promotion-mega-menu) blocks, in the desktop menu bar, and in the drawer menu.
* **Teaser menu:** Items in the **Teaser menu** (next to the menu icon on desktop) can show images too. Turn off **Show images on desktop** to leave them out there.
* **Drawer menu and mobile:** The drawer menu always shows the images, whatever the **Show images on desktop** setting. This includes mobile and the **Logo center, drawer menu** and **Transparent menu** layouts, where the drawer is used on desktop too. On screens narrower than 1200 px, images always show.
* **Desktop menu:** With **Show images on desktop** off, images are hidden in the desktop menu bar, its dropdowns and mega menus (on screens 1200 px and wider).
* **Top menu bar:** In the desktop menu bar and the teaser menu, images are never taller than the bar, even with a large **Image size**. In dropdowns, mega menus, and the drawer, they show at the full size.
* **Corners:** Images have rounded corners that follow the **Border radius** in **Theme settings > Layout**.
* **Tapping the image:** When **Enable submenu link in drawer** is on in the Header section, tapping the image of a submenu item in the drawer opens its page, the same as tapping its title.
* **Image quality:** Images load at the chosen size (and twice that for sharp screens), so you can upload larger images without slowing the page.
