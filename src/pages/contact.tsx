import React from 'react';
import Layout from '@theme/Layout';

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Submit a Request',
    description: 'Have a question or need help? Send us a message and our support team will get back to you.',
    action: () => {
      if (typeof window !== 'undefined' && (window as any).FreshworksWidget) {
        (window as any).FreshworksWidget('open');
      }
    },
    buttonLabel: 'Get Support',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: 'Browse Documentation',
    description: 'Find answers in our guides, section references, and troubleshooting articles.',
    link: '/',
    buttonLabel: 'View Docs',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: 'Video Tutorials',
    description: 'Watch step-by-step video guides to set up and customize your Wonder theme.',
    link: '/video-tutorials',
    buttonLabel: 'Watch Videos',
  },
];

export default function Contact(): React.JSX.Element {
  return (
    <Layout title="Contact Support" description="Get help with the Wonder Shopify Theme">
      <main>
        {/* Hero */}
        <div
          style={{
            background: "url('/img/hero-bg.jpg') center / cover no-repeat #000",
            color: '#fff',
            textAlign: 'center',
            padding: '5rem 1.5rem 4rem',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              margin: '0 0 0.75rem',
            }}
          >
            How can we help?
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              opacity: 0.85,
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Whether you have a question about the theme, need setup guidance, or
            want to report an issue — we're here to help.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            maxWidth: 960,
            margin: '-2.5rem auto 0',
            padding: '0 1.5rem 4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: 'var(--ifm-background-surface-color, #fff)',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: 12,
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.75rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: 'var(--ifm-color-emphasis-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <h3 style={{margin: 0, fontSize: '1.15rem'}}>{card.title}</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.92rem',
                  color: 'var(--ifm-color-emphasis-700)',
                  lineHeight: 1.55,
                  flex: 1,
                }}
              >
                {card.description}
              </p>
              {card.action ? (
                <button
                  onClick={card.action}
                  style={{
                    marginTop: '0.5rem',
                    padding: '0.6rem 1.25rem',
                    borderRadius: 8,
                    border: 'none',
                    background: '#0077b6',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  {card.buttonLabel}
                </button>
              ) : (
                <a
                  href={card.link}
                  style={{
                    marginTop: '0.5rem',
                    padding: '0.6rem 1.25rem',
                    borderRadius: 8,
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    background: 'transparent',
                    color: 'var(--ifm-font-color-base)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  {card.buttonLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
