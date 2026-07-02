---
title: "Logo Banner with Text"
sidebar_label: "Logo Banner with Text"
---

import SectionMeta from '@site/src/components/SectionMeta';
import DocVideo from '@site/src/components/DocVideo';

## What is the Logo Banner with Text section?

<SectionMeta version="v2.1.0" availability="Header group" />

The Logo Banner with Text is a full-screen hero section designed to be used as the first section on the homepage. It displays a large background video or image with an overlaid logo, and supports multiple content blocks including text, subheading, heading, and call to action buttons. This section is required for the Transparent Menu header layout to work correctly.

:::info
To display a transparent header over this section, go to the Header settings and set the Layout to **Transparent menu** or **Transparent menu, logo left**.
:::

<DocVideo src="/img/docs/banner-with-text-desktop.webm" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## Mobile view example

<DocVideo src="/img/docs/banner-with-text-mobile.webm" autoPlay playsInline muted loop style={{width: "40%", display: "block", marginBottom: "20px", marginLeft: "auto", marginRight: "auto", borderRadius: "8px"}} />

## Main Settings

**General**

* **Logo image:** Upload the logo displayed over the banner. This logo is used specifically for the transparent header version.

**Shopify-hosted Video**

Videos play on loop with no sound.

* **A Shopify-hosted video:** Upload or select a video to display as the background on desktop. When a video is selected, it takes priority over the background image.

**Shopify-hosted Video for Mobile**

Videos play on loop with no sound.

* **A Shopify-hosted video:** Upload or select a video to display as the background on mobile devices.

**Large Screen Version**

* **Background image:** Upload the background image displayed on desktop. Shown when no Shopify-hosted video is selected.

**Mobile Version**

* **Background image:** Upload the background image displayed on mobile devices. Shown when no Shopify-hosted video is selected.

**Content**

* **Horizontal alignment:** Set the horizontal alignment of the content on desktop — Left, Center, or Right.
* **Mobile screen text alignment:** Set the horizontal alignment of the content on mobile — Left, Center, or Right.

**Colors**

* **Text color:** Set the color of the text displayed over the banner.
* **Background color:** Set the background color of the section.
* **Background opacity:** Adjust the opacity of the background color overlay.

## Blocks

**Text**

* **Text:** Enter the body text displayed over the banner.
* **Text style:** Choose between Subtitle and Body styling for the text.
* **Disable on mobile:** Enable this toggle to hide this text block on mobile devices.

**Subheading**

* **Subheading:** Enter the subheading text displayed over the banner.
* **Disable on mobile:** Enable this toggle to hide this subheading block on mobile devices.

**Heading**

* **Heading:** Enter the main heading displayed over the banner.
* **Heading scale large screen:** Adjust the font size of the heading on large screens.
* **Heading scale mobile:** Adjust the font size of the heading on mobile devices.
* **Disable on mobile:** Enable this toggle to hide this heading block on mobile devices.


**Button**

The Button block supports two buttons displayed side by side. Each button has the following settings:

* **Style:** Choose the visual style of the button.
* **Text:** Set the label displayed on the button.
* **Link:** Set the destination URL or page the button links to when clicked.
* **Disable on mobile:** Enable this toggle to hide this button on mobile devices.


**Spacer**

* **Desktop spacer height:** Set the height of the empty space added between blocks on desktop.
* **Mobile spacer height:** Set the height of the empty space added between blocks on mobile devices.

**Custom Liquid**

* **Liquid code:** Add custom app snippets or other Liquid code to create custom content within the banner.

## How to Set Up Logo Banner with Text

<DocVideo src="/img/docs/banner-with-text.webm" controls playsInline muted style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />