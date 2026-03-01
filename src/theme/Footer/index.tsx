import React from 'react';
import Footer from '@theme-original/Footer';

function CustomizationBanner() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      padding: '48px 24px',
      textAlign: 'center',
      borderTop: '1px solid #333',
    }}>
      <div style={{maxWidth: '720px', margin: '0 auto'}}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '6px 14px',
          marginBottom: '16px',
          fontSize: '13px',
          color: '#fbbf24',
          fontWeight: 600,
        }}>
          <span style={{fontSize: '16px'}}>★</span>
          +1000 Happy Customers
        </div>

        <p style={{
          fontSize: '13px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: '#9ca3af',
          marginBottom: '4px',
        }}>
          Customization Services
        </p>

        <h2 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#ffffff',
          margin: '0 0 16px 0',
          lineHeight: 1.3,
        }}>
          Expert Shopify<br />Support
        </h2>

        <p style={{
          fontSize: '15px',
          lineHeight: 1.7,
          color: '#d1d5db',
          marginBottom: '24px',
          maxWidth: '560px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Need custom tweaks or unique design enhancements for your Wonder Theme?
          Our expert developers and UX/UI designers are here to help!
          Get dedicated Shopify development or design tailored to your needs.
        </p>

        <a
          href="https://services.nethype.co"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#1a1a1a',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Choose Your Support Package →
        </a>
      </div>
    </div>
  );
}

export default function FooterWrapper(props) {
  return (
    <>
      <CustomizationBanner />
      <Footer {...props} />
    </>
  );
}
