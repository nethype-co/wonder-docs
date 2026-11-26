---
title: "Tutorial: Preview a Sample Custom Section on Your Store"
sidebar_label: "Tutorial: Preview on Your Store"
sidebar_position: 5
---

# Tutorial: Preview a Sample Custom Section on Your Store

See what your AI assistant built **on your own store**, with your products, fonts and colors, before your customers see anything. The assistant puts the change on a private **preview copy** of your theme and sends you a link.

In this tutorial we add a sample **Team** section ("Meet our experts") to the home page. You type one message, log in once, and open a link. The assistant does the rest.

**You need:**

- a coding agent (Claude Code, Codex or Cursor) with the [Wonder AI Toolkit](./setup) installed;
- access to your store's Shopify admin. No account on the store? See [Without a store account](#without-a-store-account) below.

That's all. If something else is needed (like Shopify's command-line tool), the assistant asks and installs it for you.

:::tip Your live store stays untouched
The assistant only uploads to the preview copy it created. It never changes your live theme and never publishes anything. Publishing stays your decision.
:::

---

## Step 1: Ask for the section and a preview

Open your assistant in your project folder and describe what you want. Add your store's address:

```text title="Prompt"
Add a "Meet our experts" team section to my home page: photo, name, role and a short
bio for each person, three per row. Show me a preview. My store is beauty-store.com
```

Your normal domain is fine. The assistant finds the Shopify address itself.

## Step 2: Log in once

The first time, the assistant asks whether you log in to the store's admin. Say yes: a **Shopify login page opens in your browser**. Log in with the account you use for your store admin (owner, staff or collaborator) and confirm. That's it. The assistant remembers your store, so you won't be asked again.

<img src="/img/docs/ai-preview-login.png" alt="Claude Code: the assistant finds the store's Shopify address, opens the Shopify login page in the browser, and confirms the store is connected" />

## Step 3: Open the preview link

The assistant builds the section the Wonder way (see [Tutorial: Custom Section](./tutorial-custom-section)), checks it against your Wonder version, copies your live theme as a private draft and uploads the section to it. Then it sends you two links:

<img src="/img/docs/ai-preview-session.png" alt="The assistant validates the section, creates the preview copy, uploads two files and returns a preview link and a theme editor link" />

Open the **preview link**. You see your store with the new section. The bar at the bottom shows the copy's name and **Draft**. Use **Copy link** to share the preview with a colleague or client. They don't need an account.

<img src="/img/docs/ai-preview-preview.jpg" alt="Store preview with the new Meet our experts section and the Draft preview bar" />

## Step 4: Adjust it

The **theme editor link** opens the preview copy in the editor. The section has Wonder's own settings, like the built-in sections: heading, colors and spacing (with a separate mobile option). Team members are blocks you can add, reorder and edit.

<img src="/img/docs/ai-preview-editor.jpg" alt="Theme editor of the preview copy with the Team section selected: team member blocks on the left and Wonder's heading, color and spacing settings on the right" />

Prefer to ask? Tell the assistant ("make the photos square", "four per row on desktop"). It updates the same preview and sends a fresh link.

## Step 5: Go live

The copy is listed in Shopify admin under **Online Store → Themes → Draft themes**:

<img src="/img/docs/ai-preview-draft.png" alt="Shopify admin Draft themes list with Wonder preview – team section" />

When you're happy, either:

- **ask the assistant to add the change to your live theme**, or add the section yourself in the editor of your live theme. This is the safer choice on a busy store;
- or **publish the copy** (**Publish** next to it), but only if nobody changed the live theme since the copy was made: publishing replaces the live theme, including its settings.

Delete preview copies you don't need anymore: a store can keep at most 20 themes.

:::info Keep your custom files
Custom sections aren't part of Wonder. When you [update Wonder](./tutorial-update-theme), they need to be added to the new version again (the assistant's `wonder-update` workflow does this for you).
:::

## Without a store account

Agencies and freelancers usually have collaborator access and can log in as in step 2. If you don't have an account on the store, the store owner can give you a **Theme Access password** instead. It can only change themes, nothing else in the store:

1. The owner installs Shopify's free [Theme Access](https://apps.shopify.com/theme-access) app and chooses **Create password** with your name and email.
2. You open the link from the email and copy the password (`shptka_…`). The link works only once.
3. Tell the assistant you have a Theme Access password. It opens a small text file: **paste the password there, save and close**.

:::warning Don't paste the password into the chat
Chat history is stored. If it happens, delete that password in the Theme Access app and create a new one. The owner can revoke it the same way anytime.
:::

## What stays on your computer

Everything runs on your computer through Shopify's official command-line tool. Your store address and login (or Theme Access password) stay there, in the project's `.wonder/` folder and Shopify's own login session. They're never sent to the Wonder MCP server or written into the chat. See [Privacy](./privacy).
