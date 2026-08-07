---
title: "Quiz"
sidebar_label: "Quiz"
---

import DocVideo from '@site/src/components/DocVideo';
import SectionMeta from '@site/src/components/SectionMeta';

## What is the Quiz section?

<SectionMeta version="v2.5.0" />

The Quiz section lets you build an interactive, multi-step quiz that guides customers through a series of questions and recommends personalized products based on their answers. It supports intro and results slides, a progress bar, customizable navigation buttons, and an optional newsletter capture step, making it a powerful tool for product discovery and lead generation.

Each answer a customer selects is linked to one or more **tags**. As the customer moves through the quiz, the theme tallies those tags, and at the end it shows the Result block whose **Matching tag** was chosen most often — along with the products you've assigned to that result.
<DocVideo src="/img/docs/quiz-example.mp4" autoPlay playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## How to add the Quiz section

1. In your Shopify admin, go to **Online Store > Themes**.
2. Click **Customize** on the theme you want to edit.
3. Choose the page (or template) where the quiz should appear, then click **Add section** and select **Quiz**.
4. The section starts with an **Intro slide**, a **Question**, and a **Results slide**. Add, remove, and reorder blocks in the left-hand panel to build out your quiz.
5. Click **Save**.

> **Tip:** The order of the blocks in the section is the order the customer experiences them. A typical flow is: **Intro → Question → Question → … → Newsletter (optional) → Results**.

### How to set up the Quiz section

<DocVideo src="/img/docs/quiz-setup.webm" controls playsInline muted loop style={{width: "100%", marginBottom: "20px", borderRadius: "8px"}} />

## Main settings

These settings apply to the whole quiz.

**General**

- **Heading:** The title shown at the top of the quiz.

**Colors**

- **Text color** and **Background color:** Set the overall look of the quiz.

**Progress bar**

- **Show progress bar:** Turn this on to show customers how far along they are. The bar and its counter (for example, "2 / 4") only appear on question slides — they're hidden on the intro, newsletter, and results screens.

**Navigation**

- **Next question button style** and **Previous question button style:** Pick how the two navigation buttons look — **Primary**, **Secondary**, or **Link**.

**Section spacing**

- **Distance from the top** and **Distance from the bottom:** Adjust the space above and below the quiz.
- **Enable mobile spacing:** Turn this on to set different top and bottom spacing on mobile.

## Blocks

### Intro Slide block

The welcome screen customers see before the questions start. Its button always begins the quiz — it doesn't link anywhere else.

**Layout**

- **Style:** **Banner** (a full-width hero) or **Image with text** (image and text side by side).
- **Desktop layout:** Put the image or the text first on desktop. *(Only shown for the "Image with text" style.)*

**Section height**

- **Height:** Let the slide **adapt to content** or set a **fixed height**.
- **Desktop height / Mobile height:** The exact height for each screen size, used when "Fixed height" is chosen.

**Large screen version**

- **A Shopify-hosted video / Image:** The media shown on desktop.
- **Large screen text alignment:** Position the text vertically — Top, Center, or Bottom.
- **Horizontal alignment:** Position the text horizontally — Left, Center, or Right.

**Mobile version**

- **A Shopify-hosted video / Image:** The media shown on mobile.
- **Mobile screen text alignment:** Position the text vertically — Top, Center, or Bottom.
- **Horizontal alignment:** Position the text horizontally — Left, Center, or Right.

**General**

- **Subheading**, **Heading**, and **Text:** The wording that introduces your quiz.
- **Button label:** The text on the button that starts the quiz.
- **Style:** How that button looks — Primary, Secondary, or Link.

**Colors**

- **Text color:** The color of the intro text.
- **Image container color:** The background color behind the image.
- **Background opacity:** How see-through that background is (0–100%).

### Question block

A single quiz question with its set of answers. Customers have to pick an answer before the "Next" button becomes clickable.

**General**

- **Question heading:** The question itself.
- **Supporting text:** Optional extra text below the question.
- **Answers per row (desktop):** How many answers sit side by side on desktop (1–4).
- **Answers per row (mobile):** How many answers sit side by side on mobile (1–3).

**Icon**

- **Image:** Upload your own icon to show next to the question.
- **Select Icon:** Or pick one of the built-in icons instead. *(Only shown when no image is uploaded.)*
- **Icon alignment:** Place the icon above (Top) or beside (Left) the question.
- **Icon scale desktop / Icon scale mobile:** The icon's size on each screen size.

**Colors**

- **Background color** and **Text color:** The look of this question.

#### Answer block

One selectable answer inside a question. Its **tags** are what decide the customer's final result, so this is where the quiz logic lives.

**Icon**

- **Icon:** Pick a built-in icon to show with the answer.
- **Image:** Or upload your own. *(An uploaded image takes priority over a built-in icon.)*
- **More icon settings:** Turn this on to fine-tune the icon's size and spacing:
  - **Icon scale desktop / Icon scale mobile:** The icon's size on each screen size.
  - **Icon top margin desktop / Icon top margin mobile:** Space above the icon on each screen size.

**General**

- **Answer label:** The text of the answer.
- **Description:** Optional extra text for the answer.
- **Tags:** Comma-separated words that link this answer to a result, for example `dry, sensitive`. These are matched against your Result blocks. (See [How it works](#how-it-works) below.)

### Newsletter Slide block

An optional email sign-up step, usually placed just before the results — a nice way to capture leads in exchange for the recommendation. Emails collected here are added to your customer list with a `newsletter` tag. Either way — subscribe or skip — the customer continues to the next slide.

- **Heading:** The sign-up prompt.
- **Text:** Optional supporting text below it.
- **Subscribe button label:** The text on the sign-up button.
- **Skip button label:** The text on the "no thanks" button.

### Results Slide block

The final screen, where the customer sees their personalized result and the products you've recommended for it.

**General**

- **Slide heading:** An optional heading shown above the result.
- **Fallback heading** and **Fallback text:** What customers see if their answers don't match any result. Always worth filling in.
- **Retake button label:** The text on the button that restarts the quiz.
- **Style:** How the retake button looks — Primary, Secondary, or Link.
- **Redirect to product or collection:** Turn this on to send customers straight to the matching product or collection page instead of showing this results screen. (See [How it works](#how-it-works) below.)

**Icon**

- **Image:** Upload your own icon for the results screen.
- **Select Icon:** Or pick a built-in one. *(Only shown when no image is uploaded.)*
- **Icon scale desktop / Icon scale mobile:** The icon's size on each screen size.

**Colors**

- **Background color** and **Text color:** The look of the results screen.

#### Result block

One possible outcome of the quiz. It's matched to customers by tag, and holds the products you want to recommend for that outcome.

**General**

- **Matching tag:** The tag that connects this result to the customer's answers, for example `oily`, `dry`, or `sensitive`. It needs to match a tag you've used on your answers.

**Icon**

- **Image:** Upload your own icon for this result.
- **Select Icon:** Or pick a built-in one. *(Only shown when no image is uploaded.)*

**General**

- **Slide heading:** The result's title.
- **Supporting text:** The description shown with the result.
- **Badges:** Short labels shown with the result, **one per line** — for example `Dry Skin` and `Dehydrated Skin`.

**Result**

- **Product:** Recommend one specific product.
- **Collection:** Or pull recommendations from a whole collection.
- **Maximum products to show:** The cap on how many products appear (2–12).

**Large screen version**

- **Products per row on desktop:** How many products sit side by side on desktop.
- **Spacing between products on desktop:** 8px, 16px, or 24px.

**Mobile version**

- **Products per row on mobile:** How many products sit side by side on mobile.
- **Spacing between products on mobile:** The gap between products on mobile.

**Product card**

These control how each recommended product looks:

- **Text alignment:** Center or Left.
- **Image ratio:** The image shape — Adapt to image, Portrait, or Square.
- **Show product media video:** Play a Shopify-hosted product video (only for products that have one).
- **Show second image on hover:** Reveal a second image when customers hover over the card.
- **Show vendor:** Display the product's vendor name.
- **Enable vendor link:** Make that vendor name clickable. *(Only shown when "Show vendor" is on.)*
- **Show product rating:** Display the product's rating (requires a product rating app).
- **Enable quick add button:** Add a quick-add button to the card. Great for lower-priced items where customers buy on impulse.
- **Desktop button position:** Show that button On hover or Below product. *(Only shown when "Enable quick add button" is on.)*

**Colors**

- **Background color** and **Text color:** The look of the result description area.
- **Badge color:** The color of the result's badges.

## How it works

### How answers become a result

The quiz works on a simple tagging system. Here's the flow:

1. You give each **answer** one or more **tags** (for example, an answer might be tagged `dry`).
2. As the customer works through the quiz, every tag on the answers they pick is counted up in the background.
3. When they finish, the quiz looks for the tag that was chosen most often and treats it as their result.
4. It then shows the **Result block** whose **Matching tag** is that winning tag — with its heading, description, badges, and recommended products.
5. If nothing matches (for example, the customer's top tag has no Result block, or none of their answers were tagged), the customer sees your **Fallback heading** and **Fallback text** instead.

**A quick example:** In a skincare quiz you set up three results with the matching tags `dry`, `oily`, and `combination`. You tag each answer with one of those words. If a customer picks mostly `dry` answers, they land on your "Dry skin" result and see the products you chose for it.

> **Tip:** Tags aren't case-sensitive — `Dry` and `dry` count as the same tag. Just make sure the tags on your answers are spelled the same as the "Matching tag" on your results so they connect. If two tags end up tied, the one reached first wins, so it's worth thinking about the order of your questions and answers.

### How the recommended products look

- Pick a **single product** and it shows as one product card.
- Pick a **collection** and it shows as a row of products. If the collection has more products than fit in a row on desktop, customers can swipe or use the arrows to browse through them.

### Sending customers straight to a product or collection

If you turn on **Redirect to product or collection** on the Results slide, the customer skips the results screen entirely and goes straight to the matching product or collection page as soon as they answer the last question. This is handy if you'd rather send people directly to shopping than show them a summary.

### Remembering the customer's result

The quiz remembers where each customer got to and the result they landed on. If they come back to the page later, they'll see their previous result right away instead of starting over. The **Retake** button clears this and restarts the quiz from the beginning.

## Tips

- **Plan your tags first.** Decide on your set of result tags (for example, `dry`, `oily`, `combination`) before writing questions, then tag each answer accordingly. This makes matching predictable.
- **Every result needs a matching tag.** A Result block only appears if its "Matching tag" is a tag you actually used on your answers.
- **Always configure the fallback.** Write a helpful Fallback heading and text so customers who don't match any result still get a useful message.
- **Keep the newsletter optional.** The Newsletter slide always offers a skip option, so customers are never blocked from reaching their result.
- **Use the progress bar for longer quizzes.** It reassures customers by showing how many questions remain.
