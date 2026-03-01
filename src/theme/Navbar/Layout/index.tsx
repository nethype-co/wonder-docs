import React from 'react';
import NavbarLayout from '@theme-original/Navbar/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HeroBanner() {
  const bgUrl = useBaseUrl('/img/hero-bg.jpg');

  return (
    <div
      className="hero-banner"
      style={{
        backgroundColor: '#000',
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        padding: '32px 24px 36px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '36px',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: 0,
          backgroundImage: 'linear-gradient(91deg, #3249e9, #47cae4)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Wonder Theme
      </h1>
      <p
        style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '15px',
          fontWeight: 400,
          margin: '6px 0 0 0',
        }}
      >
        Have questions? Search through our Help Center.
      </p>
    </div>
  );
}

export default function NavbarLayoutWrapper(props) {
  return (
    <>
      <NavbarLayout {...props} />
      <HeroBanner />
    </>
  );
}
