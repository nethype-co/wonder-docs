import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  link?: string;
  reverse?: boolean;
}

const features: Feature[] = [
  {
    title: 'Logo Banner',
    subtitle: 'Showcase Your Brand',
    description:
      'Dynamic logo banner with customizable background. Display trusted brand logos, partner badges, or certification marks to build credibility and trust with your customers.',
    images: ['/img/features/logo-banner.png'],
    link: '/sections/header-navigation/logo-banner',
  },
  {
    title: 'Parallax Section',
    subtitle: 'Captivating Scroll Effects',
    description:
      'Dynamic and visually appealing scrolling effect that captures users\' attention. Create depth and immersion as visitors scroll through your store.',
    images: ['/img/features/parallax.jpg'],
    link: '/sections/storytelling/parallax-section',
    reverse: true,
  },
  {
    title: 'Shoppable Video',
    subtitle: 'The Future of eCommerce',
    description:
      'Interactive video feature allowing products to slide in based on video timestamps. Let customers shop directly from your video content for a seamless buying experience.',
    images: [],
    link: '/sections/video/shoppable-video',
  },
  {
    title: 'Testimonial Video Reels',
    subtitle: 'Real Voices, Real Trust',
    description:
      'Showcase customer success with video testimonials, star ratings, and smooth slider functionality. Build social proof with authentic video reviews.',
    images: [],
    link: '/sections/testimonials/testimonial-video-reels',
    reverse: true,
  },
  {
    title: 'Product Benefits',
    subtitle: 'One of the Best-Converting Sections',
    description:
      'Centered product photos with side icons and descriptive text. Highlight key product features and benefits in a visually compelling layout that drives conversions.',
    images: ['/img/features/product-benefits.png'],
    link: '/sections/products/benefits-product',
  },
  {
    title: 'Mega Menu',
    subtitle: 'Mobile-First Navigation',
    description:
      'A perfectly crafted mega menu with mobile and desktop variations. Organize your store navigation with rich content, images, and promotional links.',
    images: ['/img/features/megamenu-desktop.png', '/img/features/megamenu-mobile.png'],
    link: '/sections/header-navigation/how-to-set-up-a-mega-menu-promotion-menu-in-your-shopify-theme-a-step-by-step-guide',
    reverse: true,
  },
  {
    title: 'Custom Option Block',
    subtitle: 'Personalized Product Choices',
    description:
      'Interactive dropdowns and checkboxes for personalized product options. Give customers the ability to customize their orders with ease.',
    images: ['/img/features/custom-options-desktop.png', '/img/features/custom-options-mobile.png'],
    link: '/guides/how-to-articles/a-step-by-step-guide-to-personalizing-your-product-pages-with-custom-options',
  },
  {
    title: 'Mobile Navigation',
    subtitle: 'High-Performing Mobile Headers',
    description:
      'Two optimized mobile header options designed for maximum usability across all business types. Provide a smooth, intuitive navigation experience on every device.',
    images: ['/img/features/mobile-nav-2.png', '/img/features/mobile-nav-1.png'],
    link: '/sections/header-navigation/header',
    reverse: true,
  },
  {
    title: 'Sticky Buy Button',
    subtitle: 'Boost Conversion Rates',
    description:
      'A sticky "Buy Now" button that stays visible as customers scroll. Reduce friction and increase add-to-cart rates with an always-accessible purchase option.',
    images: ['/img/features/sticky-desktop.png', '/img/features/sticky-mobile.png'],
  },
  {
    title: 'Shoppable Video Reels',
    subtitle: 'Buy Like on Social Media',
    description:
      'Reel-format slider linked to products. Bring the social media shopping experience directly to your store with swipeable, shoppable video content.',
    images: [],
    link: '/sections/video/shoppable-video-reels',
    reverse: true,
  },
  {
    title: 'Mobile Filter',
    subtitle: 'Optimized Filtering Experience',
    description:
      'Two mobile filter options optimized for different business types. Help customers find exactly what they are looking for with smooth, intuitive filtering.',
    images: ['/img/features/filters-desktop.png', '/img/features/filters-mobile.png'],
  },
  {
    title: 'Autosuggest Search',
    subtitle: 'Predictive Smart Search',
    description:
      'Enable predictive or smart searching with desktop and mobile versions. Deliver instant, relevant results as customers type to improve product discovery.',
    images: ['/img/features/autosuggest-desktop.png', '/img/features/autosuggest-mobile.png'],
    reverse: true,
  },
  {
    title: 'Products Slider',
    subtitle: 'Products in Motion',
    description:
      'Unique backgrounds and smooth animations for showcasing product collections. Create visually dynamic product carousels that draw attention and encourage browsing.',
    images: [],
    link: '/sections/products/products-slider',
  },
  {
    title: 'Notification Popup',
    subtitle: 'Grow Your Audience',
    description:
      'Email subscription popup to encourage newsletter sign-ups. Capture visitor emails with a well-timed, beautifully designed popup.',
    images: ['/img/features/newsletter-popup.png'],
    link: '/sections/text-forms/notification-pop-up',
    reverse: true,
  },
  {
    title: 'Banners',
    subtitle: 'Desktop & Mobile Customization',
    description:
      'Separate mobile and desktop banner options for full creative control. Design impactful hero sections tailored to each screen size.',
    images: ['/img/features/banners-section.png'],
    link: '/sections/banners',
  },
  {
    title: 'Image Hotspot',
    subtitle: 'Shop the Look',
    description:
      'Beautiful interactive section for upselling and enhancing the customer experience. Let shoppers click on hotspots to discover and purchase featured products.',
    images: ['/img/features/image-hotspot.jpg'],
    link: '/sections/products/shoppable-image',
    reverse: true,
  },
  {
    title: 'Color & Image Swatches',
    subtitle: 'Visual Variant Selection',
    description:
      'Display color options across product and collection pages. Give customers a quick, visual way to browse product variants without extra clicks.',
    images: ['/img/features/swatches-desktop.png', '/img/features/swatches-mobile.png'],
    link: '/theme-settings/color-swatches',
  },
  {
    title: 'Quick Buy',
    subtitle: 'Best Mobile Quick Buy Solution',
    description:
      'Streamlined mobile quick buy feature for faster checkout. Let customers add products to cart instantly without leaving the page.',
    images: ['/img/features/quick-buy-desktop.png', '/img/features/quick-buy-mobile.png'],
    reverse: true,
  },
  {
    title: 'Video Banner',
    subtitle: 'Half Image, Half Video',
    description:
      'Combine static imagery with dynamic video content for a striking visual impact. Showcase your products in action alongside beautiful photography.',
    images: ['/img/features/video-banner.gif'],
    link: '/sections/video/background-video',
  },
  {
    title: 'Cross Sell',
    subtitle: 'Smart Suggestions',
    description:
      'Enhance every order with intelligent product recommendations. Increase average order value by surfacing relevant upsell and cross-sell opportunities.',
    images: ['/img/features/cross-sell.png'],
    link: '/theme-settings/cross-sell',
    reverse: true,
  },
  {
    title: 'Countdown Timer',
    subtitle: 'Maximize Impact with Urgency',
    description:
      'Create a sense of urgency with ticking countdown deals. Drive conversions by highlighting limited-time offers and flash sales.',
    images: ['/img/features/countdown-timer.png'],
    link: '/sections/banners/image-with-text-with-countdown',
  },
];

function FeatureCard({feature, index}: {feature: Feature; index: number}) {
  const isReverse = feature.reverse;
  const hasImages = feature.images.length > 0;
  const hasTwoImages = feature.images.length === 2;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isReverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '48px',
        padding: '48px 0',
        borderBottom: '1px solid var(--ifm-color-emphasis-200)',
      }}
      className="feature-row"
    >
      {/* Text */}
      <div style={{flex: hasImages ? '0 0 40%' : '1'}}>
        <p
          style={{
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--ifm-color-primary)',
            margin: '0 0 6px 0',
          }}
        >
          {feature.subtitle}
        </p>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 700,
            margin: '0 0 14px 0',
            lineHeight: 1.2,
            border: 'none',
            padding: 0,
          }}
        >
          {feature.title}
        </h2>
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'var(--ifm-color-emphasis-700)',
            margin: '0 0 20px 0',
          }}
        >
          {feature.description}
        </p>
        {feature.link && (
          <Link
            to={feature.link}
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--ifm-color-primary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Learn more
            <span style={{fontSize: '18px'}}>&#8594;</span>
          </Link>
        )}
      </div>

      {/* Images */}
      {hasImages && (
        <div
          style={{
            flex: '0 0 55%',
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {feature.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={feature.title}
              style={{
                maxWidth: hasTwoImages ? '48%' : '100%',
                height: 'auto',
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-emphasis-200)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Features() {
  return (
    <Layout title="Features" description="Explore Wonder Theme's suite of innovative tools designed to enhance your online presence and boost sales.">
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '48px 24px 80px',
        }}
      >
        {/* Hero */}
        <div style={{textAlign: 'center', marginBottom: '56px', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto'}}>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 700,
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            Theme Features
          </h1>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--ifm-color-emphasis-700)',
              margin: 0,
            }}
          >
            Explore a suite of innovative tools designed to enhance your online presence and boost sales.
            From seamless navigation and modern design to robust SEO capabilities, Wonder Theme equips you
            with everything you need to succeed on Shopify.
          </p>
        </div>

        {/* Feature list */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .feature-row {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 32px 0 !important;
          }
          .feature-row > div:first-child {
            flex: 1 !important;
          }
          .feature-row > div:last-child {
            flex: 1 !important;
          }
        }
      `}</style>
    </Layout>
  );
}
