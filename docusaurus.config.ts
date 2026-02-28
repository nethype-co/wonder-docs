import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wonder Theme Docs',
  tagline: 'Documentation for the Wonder Shopify Theme',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://nethype-co.github.io',
  baseUrl: '/wonder-docs/',

  organizationName: 'nethype-co',
  projectName: 'wonder-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  scripts: [
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
        src: 'img/wonder-logo-dark.svg',
        srcDark: 'img/wonder-logo-light.svg',
        href: '/',
        width: 32,
        height: 32,
      },
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://wonder-theme.com',
          label: 'Wonder Theme',
          position: 'right',
        },
        {
          href: 'https://support.nethype.co/support/tickets/new',
          label: 'Submit a Ticket',
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
              to: '/getting-started/setup',
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
              label: 'Submit a Ticket',
              href: 'https://support.nethype.co/support/tickets/new',
            },
            {
              label: 'Freshdesk Portal',
              href: 'https://support.nethype.co',
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
      copyright: `Copyright © ${new Date().getFullYear()} Nethype. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
