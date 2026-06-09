---
title: "Logo banner (Logo banner for transparent header)"
sidebar_label: "Logo banner (Logo banner for transparent header)"
---

import SectionMeta from '@site/src/components/SectionMeta';
import DocVideo from '@site/src/components/DocVideo';

## What is the Logo Banner (Homepage) section?

<SectionMeta version="v1.0.0" availability="Header group" />

The Logo Banner (Homepage) is a full-screen hero section designed to be used as the first section on the homepage. It displays a large background video or image alongside an overlaid logo, additional text, and a call to action button. This section is required for the Transparent Menu header layout to work correctly — the Transparent menu option in the Header settings only activates when the Logo Banner (Homepage) or Image Banner is set as the first section on the page.

:::info
To display a transparent header over this section, go to the Header settings and set the Layout to **Transparent menu** or **Transparent menu, logo left**.
:::

<DocVideo src="/img/docs/logo-banner-desktop.webm" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

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

**Additional Text**

* **Additional text:** Enter supplementary text displayed below the logo on the banner.

**Call to Action Button**

* **Style:** Choose the visual style of the call to action button — for example Link.
* **Text:** Set the label displayed on the call to action button.
* **Disable on mobile:** Enable this toggle to hide the call to action button on mobile devices.
* **Link:** Set the destination URL or page the button links to when clicked.
* **Open link as a new window:** Enable this toggle to open the linked page in a new browser tab.

## Colors

The Transparent value is the default and subsequently inherits the value from the global settings.

* **Text color:** Set the color of the text displayed over the banner.
* **Background color:** Set the background color of the section.
* **Background opacity:** Adjust the opacity of the background color overlay.



## Mobile view example

<DocVideo src="/img/docs/logo-banner-mobile.webm" autoPlay playsInline muted loop style={{width: "40%", display: "block", marginBottom: "20px", marginLeft: "auto", marginRight: "auto", borderRadius: "8px"}} />

## Video Tutorial

<iframe width="100%" style={{aspectRatio: '16/9'}} src="https://www.youtube.com/embed/Vkb_b3TSyeY?si=zBNCAZj8SUQC6b-l" title="Logo Banner Tutorial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
