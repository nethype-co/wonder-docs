---
title: "Rich text"
sidebar_label: "Rich text"
---

import DocVideo from '@site/src/components/DocVideo';
import SectionMeta from '@site/src/components/SectionMeta';

## What is the Rich text section?

<SectionMeta version="v1.0.0" />

The "Rich text" section is a flexible content block that lets you combine text, icons, countdown timers, spacers, and buttons to build custom layouts such as promotional banners, brand stories, or announcement blocks. Since it supports multiple block types, it can be arranged in countless ways to fit different content needs across your store.

## Example with highlighted words

<DocVideo src="/img/docs/highlight-example.webm" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

:::note
To create this effect, open the **Heading** block and enable **Use rich text field for heading** to switch to the rich text editor. Select the words you want to highlight, apply **Bold**, and then customize the highlight with a custom animation and color.
:::

## Main settings

**General**

- **Section width:** Choose the width of the section — **regular** or **short**.
- **Text alignment:** Set the horizontal alignment of the content within the section — **left**, **center**, or **right**.
- **Make section full width:** Enable this toggle to stretch the section to the full width of the screen.

**Colors**

- **Text color:** Set the text color for the section. Defaults to the value set in global settings.
- **Background color:** Set the background color for the section. Defaults to the value set in global settings.
- **Background gradient:** Choose a gradient to apply to the section background. Will override the background color.

**Section spacing**

- **Distance from the top** – Adjust the spacing above the section.
- **Distance from the bottom** – Adjust the spacing below the section. Adds distance from the top and the bottom.
- **Show custom mobile spacing:** Enable this toggle to set separate spacing values for mobile devices.
- **Distance from the top mobile:** Adjust the spacing above the section on mobile devices. Applied only when Show custom mobile spacing is enabled.
- **Distance from the bottom mobile:** Adjust the spacing below the section on mobile devices. Applied only when Show custom mobile spacing is enabled.
- **Compact size:** Enable this toggle to reduce the internal spacing of the section for a more condensed layout.

## Blocks

### Icon with Text Block

The **Icon with text** block displays a small icon alongside a short line of text, commonly used for highlighting features such as shipping details or short descriptions.

**Icon**

- **Image:** Upload a custom icon image to display next to the text.
- **Select Icon:** Choose a built-in icon to display next to the text.
- **Horizontal alignment desktop:** Set the horizontal alignment of the icon on desktop — **inherit** or a custom value.
- **Horizontal alignment mobile:** Set the horizontal alignment of the icon on mobile devices — **inherit** or a custom value.
- **Align icon to top:** Enable this toggle to align the icon with the top of the text.
- **More icon settings:** Enable this toggle to reveal additional icon sizing and spacing controls.
- **Icon scale desktop:** Set the size of the icon on desktop.
- **Icon scale mobile:** Set the size of the icon on mobile devices.
- **Icon top margin desktop:** Set the top margin of the icon on desktop.
- **Icon top margin mobile:** Set the top margin of the icon on mobile devices.

**Text**

- **Text:** Enter the text content displayed next to the icon.
- **Text scale large screen:** Set the size of the text on desktop.
- **Text scale mobile screen:** Set the size of the text on mobile devices.

**Spacing**

- **Gap:** Set the spacing between the icon and the text.
- **Distance from the top:** Set the spacing above the block.
- **Distance from the bottom:** Set the spacing below the block.
- **Spacing from the left desktop:** Set the left spacing of the block on desktop.
- **Spacing from the left mobile:** Set the left spacing of the block on mobile devices.

### Countdown Timer Block

The **Countdown timer** block displays a live countdown to a specific date and time, ideal for promoting limited-time offers or upcoming launches.

- **End date and time:** Set the date and time the countdown will count down to. Enter the date and time in the format YYYY-MM-DD HH:MM.
- **Expired message:** Enter the message displayed once the countdown has ended.
- **Show labels below the timer:** Enable this toggle to display labels (such as Days, Hours, Min, Sec) below the timer numbers.
- **Style:** Choose the visual style of the timer — **headline** or **text**.
- **Timer scale large screen:** Set the size of the timer on desktop.
- **Timer scale mobile:** Set the size of the timer on mobile devices.
- **Set custom item width:** Enable this toggle to manually define the width of each timer unit.
- **Counter item width (desktop):** Set the width of each timer unit on desktop. Applied only when Set custom item width is enabled.
- **Counter item width (mobile):** Set the width of each timer unit on mobile devices. Applied only when Set custom item width is enabled.

### Spacer Block

The **Spacer** block adds blank vertical space between content elements, allowing you to fine-tune the layout of the section.

- **Desktop spacer height:** Set the height of the spacer on desktop.
- **Mobile spacer height:** Set the height of the spacer on mobile devices.

### Subheading Block

The **Subheading** block adds a short introductory text above the main content, typically used to provide context or a tagline before the heading.

- **Subheading:** Enter the subheading text displayed in the block.
- **Disable on mobile:** Enable this toggle to hide the subheading on mobile devices.
- **Subheading advanced settings:** Enable this toggle to reveal additional subheading style controls. Settings below are only applied when this option is enabled.
- **Text style:** Choose the text style of the subheading — **subtitle** or **body**.
- **Text uppercase:** Enable this toggle to display the subheading in uppercase letters.
- **Letter spacing:** Set the spacing between letters in the subheading.
- **Text scale large screen:** Set the size of the subheading text on desktop.
- **Text scale mobile screen:** Set the size of the subheading text on mobile devices.

### Heading Block

The **Heading** block adds a prominent title within the section, typically used to draw attention to the main message.

- **Use rich text field for heading:** Enable this toggle to access text formatting options including bold, italic, links, and heading levels (H1–H6 for SEO), along with dynamic content in the heading field. Once switched to the rich text editor, selecting **Bold** applies a highlight effect to the selected text, which you can then customize with a custom animation and color.
- **Heading:** Enter the heading text displayed in the block.
- **Disable on mobile:** Enable this toggle to hide the heading on mobile devices.
- **Heading scale large screen:** Set the size of the heading on desktop.
- **Heading scale mobile:** Set the size of the heading on mobile devices.

### Text Block

The **Text** block adds a paragraph of descriptive content within the section, commonly used for additional details or messaging.

- **Text:** Enter the text content displayed in the block.
- **Text style:** Choose the text style — **subtitle** or **body**.
- **Disable on mobile:** Enable this toggle to hide the text on mobile devices.

### Button Block

The **Button** block adds one or two call-to-action buttons within the section.

**Button 1**

- **Style:** Choose the visual style of the button.
- **Text:** Set the button label.
- **Link:** Assign a URL or page link to the button.
- **Open link as a new window:** Enable this toggle to open the link in a new browser tab.
- **Disable on mobile:** Enable this toggle to hide Button 1 on mobile devices.

**Button 2**

- **Style:** Choose the visual style of the button.
- **Text:** Set the button label.
- **Disable on mobile:** Enable this toggle to hide Button 2 on mobile devices.
- **Link:** Assign a URL or page link to the button.
- **Open link as a new window:** Enable this toggle to open the link in a new browser tab.