---
title: "Feature icons block"
sidebar_label: "Feature icons block"
---

### Feature Icons Block

The **Feature Icons** block allows you to showcase product highlights using visually appealing icons. Powered by metafields, this feature enables you to store and display a **list of custom icons** on the product page. Whether you want to emphasize **product attributes, unique features, or available facilities** , this block provides **flexibility and customization** to fit your needs. With adjustable settings, you can tailor the icon display to match your branding and enhance the product presentation.

## Video Tutorial

## **Settings** 

![](https://cdn.prod.website-files.com/60ec3c220e1aca3c15ec9e9c/67c9a0cd13b68f9474c56e09_feature-icons-block-2.jpg)

## How to Create a Metafield for the Feature Icons Block

Follow these steps to properly set up a metafield for the **Feature Icons** block:

#### **1. Create a Metaobject for Feature Icons** 

* Go to **Content** → **Metaobjects** and click **Add definition** .
* Name it (e.g., **Product Feature Icon** ).
* Add the following fields:
  * **Single line text** – Name it **Label** (stores the feature name).
  * **File** – Name it **Image** (stores the icon). Under **Accept specific file types**, select **Images** only

![](https://cdn.prod.website-files.com/60ec3c220e1aca3c15ec9e9c/67c9c662ae1cc1c55046a9aa_feature-icons-block-4.jpg)

 **Single line text field** 

![](https://cdn.prod.website-files.com/60ec3c220e1aca3c15ec9e9c/67c9c65a3810d6c415c0e943_feature-icons-block-3.jpg)

 **File field** 

![](https://cdn.prod.website-files.com/60ec3c220e1aca3c15ec9e9c/67c9c428722db03a1255baf3_feature-icons-block-5.jpg)

 **Product feature icon metaobject** 

* Click **Save** .

#### **2. Add Entries for Feature Icons** 

* Go to **Content** → **Metaobjects** , select the metaobject created in Step 1.
* Click **Add entry** .
* Enter a **Label** and upload an **Image** for each feature icon.
* Repeat for all feature icons needed.

![](https://cdn.prod.website-files.com/60ec3c220e1aca3c15ec9e9c/67c9c6b11be337cd0fe265c6_feature-icons-block-6.jpg)

#### **3. Create a Metafield for Feature Icons** 

* Go to **Settings** → **Custom Data** → **Products** and click **Add definition** .
* Name it (e.g., **Feature Icons** ).
* Select **Metaobject** as the type and reference the metaobject created earlier ( **Product Feature Icon** ).
* Enable **List of entries** .
* Click **Save** .

![](https://cdn.prod.website-files.com/60ec3c220e1aca3c15ec9e9c/67c9c80a4922bcc88cd4049d_feature-icons-block-7.jpg)

#### **4. Add the Feature Icons Block in the Theme Editor** 

* Open **Online Store** → **Customize** .
* Select the **Product** template.
* In the **Product Information** section, click **Add block** and choose **Feature Icons** .
* In the **Metafield setting** , enter the **namespace and key** (e.g., custom.feature_icons).

#### **5. Save and Apply** 

* Adjust block settings as needed.
* Click **Save** and preview the product page to ensure proper display.

####
