---
title: "Scrollytelling Video"
sidebar_label: "Scrollytelling Video"
---

import DocVideo from '@site/src/components/DocVideo';
import SectionMeta from '@site/src/components/SectionMeta';

## What is the Scrollytelling Video section?

<SectionMeta version="v2.3.0" />

The Scrollytelling Video section creates an immersive scroll-driven experience where a video or series of images plays in sync with the user's scrolling. Content blocks appear and disappear at defined scroll positions, allowing you to guide the visitor through a cinematic product story.

<DocVideo src="/img/docs/scrollytelling-video-desktop.webm" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## Main Settings

**Layout Settings**

- **Make section full width:** Enable this toggle to stretch the section to the full width of the screen.
- **Scroll speed:** Control the speed of video playback during scroll. A higher value results in slower playback.
- **Enable advanced timing controls in block settings:** When enabled, allows you to set custom timing start and end points directly within each Content block.

**Media (Video or Images)**

- **Media type:** Choose between Video or Images. Selecting Images displays scroll-synced images from content blocks instead of loading a video.
- **Use images instead of video on mobile:** Show images from content blocks on mobile instead of the video to avoid playback lag.
- **Only on Android (when above is on):** When the option above is enabled, turn on to show images only on Android devices, or turn off to apply this to all mobile viewports.

**Large Screen Version**

- **Layout type:** Choose how the media is displayed on desktop — Contain or Cover.
- **A Shopify-hosted video:** Select the video to display as the scrollytelling background on desktop.
- **Media width:** Adjust the width of the media on large screens.

**Mobile Version**

- **Layout type:** Choose how the media is displayed on mobile — Contain or Cover.
- **A Shopify-hosted video:** Select the video to display as the scrollytelling background on mobile devices.

**Colors**

The Transparent value is the default and subsequently inherits the value from the global settings.

- **Text color:** Define the global text color for the section.
- **Background color:** Customize the background color of the section.
- **Background opacity:** Adjust the opacity of the background color.

**Section Spacing**

- **Distance from the top:** Adjust the spacing above the section.
- **Distance from the bottom:** Adjust the spacing below the section.

### Mobile view example

<DocVideo src="/img/docs/scrollytelling-video-mobile.webm" autoPlay playsInline muted loop style={{display: "block", maxWidth: "350px", width: "100%", margin: "0 auto 20px", borderRadius: "8px"}} />

## Content Block

The Content block defines a single text overlay that appears at a specific point during the scroll sequence. Use the **Add Content Block** button to add more steps to the scrollytelling experience.

**Settings**

- **Heading:** Enter the title displayed for this scroll step.
- **Text:** Add a description for this scroll step. Rich text formatting options are available.
- **Image for this step:** Upload an image used when Media type is set to Images, or when image fallback on mobile is enabled. The image is shown at this block's scroll timing.

**Timing (0–100% of Scroll)**

- **Show at %:** Define the scroll position at which this content block becomes visible.
- **Hide at %:** Define the scroll position at which this content block disappears.

**Large Screen Version**

- **Position on screen:** Set the horizontal position of the content block on desktop — Left, Center, or Right.
- **Text alignment:** Set the text alignment within the content block on desktop — Left, Center, or Right.
- **Heading scale large screen:** Adjust the font size of the heading on large screens.
- **Text max width:** Define the maximum width of the text container on desktop.

**Mobile Version**

- **Text alignment:** Set the text alignment within the content block on mobile — Left, Center, or Right.
- **Heading scale mobile:** Adjust the font size of the heading on mobile devices.
- **Distance from the bottom:** Adjust the spacing below the content block on mobile.

## How to set up a Scrollytelling Video section?

<DocVideo src="/img/docs/scrollytelling-video-main.webm" controls playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />
