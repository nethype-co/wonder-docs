import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wonder Theme Docs',
  tagline: 'Documentation for the Wonder Shopify Theme',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://support.wonder-theme.com',
  baseUrl: '/',

  organizationName: 'nethype-co',
  projectName: 'wonder-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-3LW9RNKL3E',
      async: true,
    },
    {
      src: 'https://euc-widget.freshworks.com/widgets/204000000466.js',
      async: true,
      defer: true,
    },
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-3LW9RNKL3E');`,
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://api.fontshare.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `window.fwSettings={'widget_id':204000000466};!function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}()`,
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        explicitSearchResultPath: true,
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Old /question/ article URLs → new docs paths
          { from: '/question/a-complete-guide-to-customizing-the-variant-picker', to: '/guides/how-to-articles/a-complete-guide-to-customizing-the-variant-picker' },
          { from: '/question/a-step-by-step-guide-to-personalizing-your-product-pages-with-custom-options', to: '/guides/how-to-articles/a-step-by-step-guide-to-personalizing-your-product-pages-with-custom-options' },
          { from: '/question/how-to-set-up-a-product-variations-block-in-product-page', to: '/guides/how-to-articles/how-to-set-up-a-product-variations-block-in-product-page' },
          { from: '/question/maximizing-seo-potential-within-your-theme', to: '/guides/how-to-articles/maximizing-seo-potential-within-your-theme' },
          { from: '/question/unlocking-page-speed-mastery-for-your-shopify-store', to: '/guides/how-to-articles/unlocking-page-speed-mastery-for-your-shopify-store' },
          { from: '/question/which-reviews-app-should-you-use-on-shopify-free-paid-options', to: '/guides/how-to-articles/which-reviews-app-should-you-use-on-shopify-free-paid-options' },
          { from: '/question/custom-fonts-how-to-set-them-up-in-the-wonder-theme', to: '/theme-settings/custom-fonts' },
          // New articles
          { from: '/question/featured-icon-block', to: '/product-page/blocks/featured-icon-block' },
          { from: '/question/custom-option-block', to: '/product-page/blocks/custom-option-block' },
          { from: '/question/image-with-scrolling-text', to: '/sections/storytelling/image-with-scrolling-text' },
          { from: '/question/lookbook', to: '/sections/storytelling/lookbook' },
          { from: '/question/image-with-video', to: '/sections/storytelling/image-with-video' },
          { from: '/question/testimonial-images', to: '/sections/testimonials/testimonial-images' },
          { from: '/question/image-with-video-home', to: '/sections/banners/image-with-video-home' },
          { from: '/question/image-banner', to: '/sections/banners/image-banner' },
          { from: '/question/feature-collection', to: '/sections/collections/feature-collection' },
          { from: '/question/logo-banner-with-text', to: '/sections/header-navigation/logo-banner-with-text' },
          { from: '/question/logo-banner', to: '/sections/header-navigation/logo-banner' },
          { from: '/question/standard-variant-picker-vs-product-variations-block', to: '/guides/how-to-articles/standard-variant-picker-vs-product-variations-block' },
          // Sections — Header & Navigation
          { from: '/question/announcement-bar', to: '/sections/header-navigation/announcement-bar' },
          { from: '/question/header', to: '/sections/header-navigation/header' },
          { from: '/question/how-to-set-up-a-promotion-menu-in-your-shopify-theme-a-step-by-step-guide', to: '/sections/header-navigation/how-to-set-up-a-mega-menu-promotion-menu-in-your-shopify-theme-a-step-by-step-guide' },
          { from: '/question/how-to-set-up-a-transparent-header-in-the-wonder-theme', to: '/sections/header-navigation/how-to-set-up-a-transparent-header-in-the-wonder-theme' },
          // Sections — Banners
          { from: '/question/card-banner', to: '/sections/banners/banner-card' },
          { from: '/question/image-with-text-with-countdown', to: '/sections/banners/image-with-text-with-countdown' },
          { from: '/question/scrolling-text', to: '/sections/banners/scrolling-text-banner' },
          { from: '/question/slideshow', to: '/sections/banners/slideshow' },
          // Sections — Video
          { from: '/question/background-video', to: '/sections/video/background-video' },
          { from: '/question/benefits-video-reels', to: '/sections/video/benefits-video-reels' },
          { from: '/question/shoppable-video', to: '/sections/video/shoppable-video' },
          { from: '/question/shoppable-video-reels', to: '/sections/video/shoppable-video-reels' },
          { from: '/question/video-reels-with-product-block', to: '/sections/video/video-reels-with-product-block' },
          // Sections — Collections
          { from: '/question/collection-list', to: '/sections/collections/collection-list' },
          { from: '/question/collection-feature', to: '/sections/storytelling/collection-links' },
          // Sections — Storytelling
          { from: '/question/before-and-after', to: '/sections/storytelling/before-and-after' },
          { from: '/question/brand', to: '/sections/storytelling/brands' },
          { from: '/question/collage', to: '/sections/storytelling/collage' },
          { from: '/question/grid-view', to: '/sections/storytelling/grid-view' },
          { from: '/question/image-with-table', to: '/sections/storytelling/image-with-table' },
          { from: '/question/image-with-text', to: '/sections/storytelling/image-with-text' },
          { from: '/question/marquee-images', to: '/sections/storytelling/marquee-images' },
          { from: '/question/multicolumn', to: '/sections/storytelling/multicolumn' },
          { from: '/question/parallax-section', to: '/sections/storytelling/parallax-section' },
          { from: '/question/rich-text-with-image', to: '/sections/storytelling/rich-text-with-image' },
          // Sections — Products
          { from: '/question/benefits-product', to: '/sections/products/benefits-product' },
          { from: '/question/featured-product', to: '/sections/products/featured-product' },
          { from: '/question/product-recommendations', to: '/sections/products/product-recommendations' },
          { from: '/question/products-slider', to: '/sections/products/products-slider' },
          { from: '/question/shoppable-image', to: '/sections/products/shoppable-image' },
          // Sections — Testimonials
          { from: '/question/testimonial-video-reels', to: '/sections/testimonials/testimonial-video-reels' },
          // Sections — Text & Forms
          { from: '/question/ai-section', to: '/sections/text-forms/ai-section' },
          { from: '/question/featured-navigation', to: '/sections/text-forms/featured-navigation' },
          { from: '/question/features-banner', to: '/sections/text-forms/features-banner' },
          { from: '/question/map-section', to: '/sections/text-forms/map-section' },
          { from: '/question/newsletter-with-image', to: '/sections/text-forms/newsletter-with-image' },
          { from: '/question/notification-pop-up', to: '/sections/text-forms/notification-pop-up' },
          { from: '/question/specification-table-block', to: '/sections/text-forms/specification-table-block' },
          // Product Page — Blocks
          { from: '/question/bulletpoints-block', to: '/product-page/blocks/bulletpoints-block' },
          { from: '/question/buy-button-block', to: '/product-page/blocks/buy-button-block' },
          { from: '/question/collapsible-files-row-block', to: '/product-page/blocks/collapsible-files-row-block' },
          { from: '/question/collapsible-tab-block', to: '/product-page/blocks/collapsible-tab-block' },
          { from: '/question/complementary-products-block', to: '/product-page/blocks/complementary-products-block' },
          { from: '/question/feature-icons-block', to: '/product-page/blocks/feature-icons-block' },
          { from: '/question/feature-tags-block', to: '/product-page/blocks/feature-tags-block' },
          { from: '/question/inventory-status-block', to: '/product-page/blocks/inventory-status-block' },
          { from: '/question/payments-badge-block', to: '/product-page/blocks/payments-badge-block' },
          { from: '/question/price-block', to: '/product-page/blocks/price-block' },
          { from: '/question/product-page', to: '/product-page/blocks/product-page' },
          { from: '/question/promo-block', to: '/product-page/blocks/promo-block' },
          { from: '/question/rating-block', to: '/product-page/blocks/rating-block' },
          { from: '/question/separator-block', to: '/product-page/blocks/separator-block' },
          { from: '/question/share-buttons-block', to: '/product-page/blocks/share-buttons-block' },
          { from: '/question/title-block', to: '/product-page/blocks/title-block' },
          { from: '/question/upsell-block', to: '/product-page/blocks/upsell-block' },
          { from: '/question/variant-picker-block', to: '/product-page/blocks/variant-picker-block' },
          // Product Page — Variants & Media
          { from: '/question/multi-images-variant-gallery', to: '/product-page/variants-media/multi-images-variant-gallery' },
          { from: '/question/product-variations', to: '/product-page/variants-media/product-variations' },
          { from: '/question/product-variations-block', to: '/product-page/variants-media/product-variations-block' },
          // Theme Settings
          { from: '/question/color-swatches', to: '/theme-settings/color-swatches' },
          { from: '/question/product-badges', to: '/theme-settings/product-badges' },
          { from: '/question/cross-sell', to: '/theme-settings/cross-sell' },
          // Getting Started
          { from: '/question/customizing-your-theme-by-editing-theme-files', to: '/getting-started/basics/customizing-your-theme-by-editing-theme-files' },
          { from: '/question/sharing-a-preview-of-your-shopify-theme', to: '/getting-started/basics/sharing-a-preview-of-your-shopify-theme' },
          // Category pages
          { from: '/question-category/product-page', to: '/product-page/blocks' },
          { from: '/question-category/sections', to: '/' },
          { from: '/question-category/theme-settings', to: '/theme-settings' },
          { from: '/question-category/frequently-asked-questions', to: '/' },
          // Top-level pages
          { from: '/support', to: '/' },
          { from: '/support-policy', to: '/getting-started/about-theme/support-policy' },
          { from: '/home-v2', to: '/' },
          // Changelog
          { from: '/changelog-category/release-notes', to: '/changelog' },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Wonder Theme',
      logo: {
        alt: 'Wonder Theme',
        src: 'img/wonder-logo-light.svg',
        srcDark: 'img/wonder-logo-light.svg',

        href: '/',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/features',
          label: 'Features',
          position: 'left',
        },
        {
          to: '/video-tutorials',
          label: 'Video Tutorials',
          position: 'left',
        },
        {
          to: '/changelog',
          label: 'Changelog',
          position: 'left',
        },
        {
          href: 'https://wonder-theme.com',
          label: 'Wonder Theme',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/basics',
            },
            {
              label: 'Theme Settings',
              to: '/theme-settings',
            },
            {
              label: 'Sections',
              to: '/sections/header-navigation',
            },
            {
              label: 'Product Page',
              to: '/product-page/blocks',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Support Policy',
              to: '/getting-started/about-theme/support-policy',
            },
            {
              label: 'Refund Policy',
              to: '/getting-started/about-theme/refund-policy',
            },
            {
              label: 'Theme Licensing',
              to: '/getting-started/about-theme/theme-licensing',
            },
            {
              label: 'Video Tutorials',
              to: '/video-tutorials',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Wonder Theme',
              href: 'https://wonder-theme.com',
            },
            {
              label: 'Shopify Theme Store',
              href: 'https://themes.shopify.com/themes/wonder/styles/developer-preview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nethype.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
