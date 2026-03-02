---
title: "Color swatches"
sidebar_label: "Color swatches"
---

### What is the Color Swatches?

Swatches serve as compact yet impactful visual cues that reveal the array of colors, textures, and materials a product offers. 

Moving beyond mere textual descriptions, swatches offer a tactile and visual representation that brings customer interaction with product variants to life. Opt for vivid hex codes, utilize variant-specific imagery, or introduce bespoke swatch designs for a tailored display. Available in circular or square formats, swatches infuse a touch of elegance and practicality into the shopping experience. Here’s how they enhance the Wonder theme:

![](/img/docs/f8d69e94c5d2.jpeg)

### How to Configure Color Swatches in Your Theme Editor

1. **Access Theme Customization:** Navigate to your Theme Editor by clicking on 'Theme Settings', then look for the 'Color Swatch' section.
2. **Enable Swatches:** Check the 'Enable color swatch' option to activate swatches on your product pages.
3. **Filter Integration:** If you want the swatches to appear in filter options as well, ensure 'Enable color swatch in filters' is checked.
4. **Choose Swatch Shape:** Opt for 'Enable round color swatches' if you prefer circular swatches over the default square shape.
5. **Input Color Values:**
   - **IMPORTANT:** Shopify now provides own color swatches via metafields. If color metafields are defined, the swatches take values from there. [Link to Shopify Metafield Documentation](https://help.shopify.com/en/manual/custom-data/metafields/category-metafields/using-category-metafields). If not set, the Theme settings>Color swatch>Custom colors setting will be used.
   - In the 'Custom colors' field, input each color option as a color name followed by its hex code, or a color name followed by an image filename for patterned swatches. Place each entry on a separate line to define the swatches for your product variants.
6. **Set Display Options:** In the 'Options listed as Color Swatches' field, enter 'Color' to specify which variant option will show as color swatches.
7. **Assign Variant Pictures:** Similarly, in the 'Options listed as Variant Pictures' field, input 'Color' to determine which option should display its variants as pictures.

Remember to keep each color rule on its own line to ensure proper display and functionality.

![](/img/docs/5d862e19e1a1.jpeg)

### Color swatch settings

 **Enable color swatch:** Enable or disable color swatch.

![](/img/docs/63a399c4a7e2.jpeg)

 **Enable color swatch in filters:** Enable or disable color swatch in filters.

![](/img/docs/d57c1d0d01b8.jpeg)

 **Enable round color swatches:** Enable or disable rounded shape of color swatches.

![](/img/docs/7696bd857f6c.jpeg)

 **Custom colors:** Define color swatches not only with hex color codes but also with image files. 

 **IMPORTANT:** Shopify now provides own color swatches via metafields. If color metafields are defined, the swatches take values from there.[ Link to Shopify Metafield Documentation](https://help.shopify.com/en/manual/custom-data/metafields/category-metafields/using-category-metafields). If not set, the **Theme settings>Color swatch>Custom colors** setting will be used.

![](/img/docs/380f9dca467a.jpeg)

How to do it:

1. **Single Color Assignment:** For a single color, input the color name followed by a colon and its corresponding hex code. For example: **White:#ffffff** defines a swatch as white.
2. **Combination Colors:** To represent a combination of colors, list the color names separated by slashes and their respective hex codes consecutively, each prefixed with **#** . For example: **Red/Green/Blue:#ff0000#00ff00#0000ff** creates a swatch showing red, green, and blue.
3. **Image File for Color:** If you have a specific pattern or material that can't be represented by a hex code, use an image file. Enter the color name followed by a colon and the image file name. For instance: **Gray melange:gray-melange.jpg** would use the "gray-melange.jpg" image to represent the "Gray melange" swatch.

Remember to place each rule on its own line to ensure the system interprets each color or image swatch correctly. 

 **Options listed as Color Swatches:** specify which product option names should be displayed using color swatches.

![](/img/docs/9ba893220e22.jpeg)

How to do it?

1. **Identify the Option Name:** Determine the name of the product option that corresponds to color variations. Typically, this is simply "Color".
2. **Input the Option Name:** Enter the name exactly as it appears in your product descriptions into the field. If your variant name is "Color", then you would write "Color" in the box.
3. **One Option Per Line:** If you have multiple options that require swatches, such as "Material" or "Finish", list each one on a separate line within the field.

 **Options listed as Variant Pictures:** define which variant option names should display their choices as images.

![](/img/docs/76c1e38a4454.jpeg)

How to do it?

1. **Specify Variant Names:** List the variant option names that have corresponding images. Common examples include "Color", "Front Color", or "Cover Color".
2. **Input Each Variant Name Separately:** Write each variant option name that you want to associate with an image on a new line within this field.
3. **Ensure Correct Mapping:** Each name entered must exactly match the option names set up in your product details to ensure the correct images are displayed when a customer selects a variant.
