---
title: "Tutorial: Preview AI Changes on a Test Copy of Your Theme"
sidebar_label: "Tutorial: Test Theme"
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: Preview AI Changes on a Test Copy of Your Theme

Your AI assistant can put its work straight onto your store, without touching what customers see. It copies your live theme as an unpublished draft, uploads only the files it changed, and sends you a **preview link** and a **theme editor link**. You check the change on the real store with your products, fonts and colors, then decide whether to publish.

In this tutorial a coding agent adds a **Team** section to the home page of a test copy. It takes about 5 minutes once you're connected.

**You need:**

- a coding agent that can run commands: Claude Code, Codex or Cursor, with the [Wonder AI Toolkit](./setup) installed (it includes the `wonder-test-theme` skill);
- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) (`npm install -g @shopify/cli`);
- access to the store: an admin account (owner, staff or collaborator) **or** a Theme Access password from the merchant.

:::tip Safe by design
The assistant only ever uploads to the test copy it created, and checks that the copy is unpublished before every upload. It never pushes to the live theme, never publishes or deletes a theme, and uploads only the files it changed, so nothing else in the copy is lost. Publishing stays your decision, in Shopify admin.
:::

---

## Step 1: Connect your store (once)

Choose how the assistant signs in to Shopify:

<Tabs groupId="auth" queryString>
<TabItem value="login" label="I have an admin account" default>

Owners, staff members and **collaborators** (agencies and freelancers with access through the Shopify Partner Dashboard) sign in with their own account. In your terminal, in your project folder, run:

```bash
shopify auth login --alias my-agency
```

Your browser opens the Shopify login page. After you sign in, the assistant can work with every store your account can access. Your account needs the **Themes** permission.

<img src="/img/docs/ai-test-theme-login.png" alt="Terminal: shopify auth login --alias my-agency opens the browser and confirms Logged in" />

Access follows your account: when the store removes you as staff or collaborator, the assistant loses access too.

</TabItem>
<TabItem value="password" label="I don't have an account on the store">

The merchant creates a password that can **only change themes**, nothing else in the store:

1. In Shopify admin, install Shopify's free [Theme Access](https://apps.shopify.com/theme-access) app.
2. Choose **Create password** and enter the name and email of the person who'll use it.
3. That person opens the link from the email. **It works only once**, so copy the password (`shptka_…`) right away.

Save the password in your own terminal, in the project folder. It's typed into a hidden field, never into the AI chat:

```bash title="macOS / Linux"
mkdir -p .wonder && printf 'Theme Access password: ' && stty -echo && read t; stty echo; echo; printf 'SHOPIFY_CLI_THEME_TOKEN=%s\n' "$t" > .wonder/.env && chmod 600 .wonder/.env; unset t
```

```powershell title="Windows (PowerShell)"
New-Item -ItemType Directory -Force .wonder | Out-Null; $s = Read-Host 'Theme Access password' -AsSecureString; "SHOPIFY_CLI_THEME_TOKEN=$([Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($s)))" | Set-Content .wonder/.env
```

The merchant can revoke it anytime by deleting the password in the Theme Access app.

</TabItem>
</Tabs>

Then start your assistant in the same folder and tell it your store's **myshopify domain** (Shopify admin → **Settings → Domains**, e.g. `your-store.myshopify.com`; your public domain doesn't work here). It checks the connection, reads your Wonder version from the live theme and saves both in `.wonder/store.json`, so you won't be asked again.

:::warning Never paste the password into the chat
Chat history is stored. If it happens, delete that password in the Theme Access app and create a new one.
:::

## Step 2: Ask for the change and a preview

Ask for what you want and say you'd like to see it on a test copy:

```text title="Prompt"
Add a "Meet our experts" team section to my home page: photo, name, role and a short bio
for each person, three per row. Put it on a test copy of my theme and send me a preview link.
```

The assistant builds the section the Wonder way (see [Tutorial: Custom Section](./tutorial-custom-section)), validates it against your Wonder version, then:

1. **Copies your live theme** as an unpublished theme named *Wonder AI test – …*. The copy has your code, settings and content. Next time it reuses the same copy, unless you ask for a fresh one.
2. **Uploads only the changed files.** Here, the new section file and the home page template with the section added.
3. **Gives you the links** and lists what it uploaded.

<img src="/img/docs/ai-test-theme-session.png" alt="Claude Code session: the wonder-test-theme skill lists themes, duplicates the live theme, validates the section, uploads two files and returns preview and theme editor links" />

## Step 3: Check the preview

Open the **preview link**. You see your store with the test theme: same products, fonts and colors, plus the new section. The bar at the bottom shows the theme's name and **Draft**. Use **Copy link** to send the preview to a colleague or client. They don't need an account.

<img src="/img/docs/ai-test-theme-preview.jpg" alt="Store preview of the test theme with the new Meet our experts section and the Draft preview bar" />

To check another page, add `?preview_theme_id=<id>` to its address, or simply ask the assistant for the link.

## Step 4: Adjust it in the theme editor

The **theme editor link** opens the test copy in the editor. The section uses Wonder's own controls, so it behaves like the built-in sections: heading (with the rich text option), text and background color, and Wonder's spacing settings with a separate mobile option. Team members are blocks you can add, reorder and edit.

<img src="/img/docs/ai-test-theme-editor.jpg" alt="Theme editor of the test copy with the Team section selected: team member blocks on the left and Wonder's standard heading, color and spacing settings on the right" />

Want something different? Tell the assistant ("make the photos square", "four per row on desktop"). It updates the same test copy and sends a fresh link.

## Step 5: Go live

The copy is listed under **Online Store → Themes → Draft themes**:

<img src="/img/docs/ai-test-theme-draft.png" alt="Shopify admin Draft themes list with Wonder AI test – team section" />

When you're happy, either:

- **Publish the copy** (**Publish** next to it). Do this only if nobody changed the live theme after the copy was made: publishing replaces the live theme with the copy, including any older settings in it.
- **Or add the same change to the live theme.** Ask the assistant for the files and steps, or add the section in the editor of your live theme. This is the safer choice on a busy store.

Delete old test copies you don't need anymore: a store can keep at most 20 themes.

:::info Keep your custom files
Custom sections and other files you add aren't part of Wonder. When you [update Wonder](./tutorial-update-theme), add them to the new version again (the `wonder-update` skill does this for you).
:::

## What stays on your computer

Everything runs locally through Shopify CLI. Your store domain, theme IDs and Theme Access password stay on your computer (in the project's `.wonder/` folder and in Shopify CLI's login session). They're never sent to the Wonder MCP server or written into the chat. Add `.wonder/` to `.gitignore` if the folder is in a Git repository; the assistant does this for you. See [Privacy](./privacy).
