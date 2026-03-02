import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';

function CustomizationBanner() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(315deg, #47cae4 0%, #0077b6 33%, #131c82 52%, #3249e9 100%)',
      backgroundSize: 'cover',
      backgroundPosition: '100% 7%',
    }}>
      <div className="container container-fluid" style={{padding: '48px 16px'}}>
        <p style={{
          color: '#f1f2f5',
          fontSize: '16px',
          margin: '0 0 4px 0',
          fontWeight: 400,
        }}>
          Customization Services
        </p>

        <div className="customization-banner-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'start',
        }}>
          {/* Left column */}
          <div>
            <h2 style={{
              color: '#e7e9f3',
              fontSize: '52px',
              fontWeight: 500,
              lineHeight: 1,
              margin: '4px 0 0 0',
            }}>
              Expert Shopify<br />Support
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '11px',
              marginTop: '24px',
              flexWrap: 'wrap',
            }}>
              <img
                src="https://cdn.prod.website-files.com/60ec3c210e1acadedeec9e82/67a117595de340fe1a459c98_675b48cab6a43826473fe5f0_star-yellow.png"
                alt=""
                style={{width: '74px'}}
              />
              <span style={{color: '#e7e9f3', fontSize: '16px'}}>
                +1000 Happy Customers
              </span>
            </div>
          </div>

          {/* Right column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <p style={{
              color: '#e7e9f3',
              fontSize: '16px',
              lineHeight: 1.6,
              margin: 0,
            }}>
              Need custom tweaks or unique design enhancements for your Wonder Theme?
              <br />Our expert developers and UX/UI designers
              <br />are here to help! Get dedicated Shopify development or design tailored to your needs.
            </p>

            <a
              href="https://services.nethype.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#ffd01e',
                color: '#020622',
                padding: '16px 40px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 700,
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '24px',
                lineHeight: 1,
                transition: 'opacity 0.2s',
                maxWidth: '350px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Choose Your Support Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx(ThemeClassNames.layout.footer.container, 'footer', {
        'footer--dark': style === 'dark',
      })}
      style={{padding: 0}}>
      <CustomizationBanner />
      <div className="container container-fluid" style={{
        paddingTop: 'calc(var(--ifm-spacing-vertical) * 2)',
        paddingBottom: 'calc(var(--ifm-spacing-vertical) * 2)',
      }}>
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
