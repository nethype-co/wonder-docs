import React, {useCallback} from 'react';
import NavbarLayout from '@theme-original/Navbar/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HeroBanner() {
  const bgUrl = useBaseUrl('/img/hero-bg.jpg');
  const searchIconUrl = useBaseUrl('/img/search-icon.svg');

  const handleSearchClick = useCallback(() => {
    const input = document.querySelector<HTMLInputElement>('.navbar__search-input');
    if (input) {
      input.focus();
      input.click();
    }
  }, []);

  return (
    <div
      className="hero-banner"
      style={{
        backgroundColor: '#000',
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        padding: '60px 24px 70px',
        textAlign: 'center',
      }}
    >
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1
          style={{
            fontSize: '82px',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.045em',
            margin: '0 0 10px 0',
            paddingBottom: '10px',
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
            color: '#fff',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '32px',
            margin: '0 0 40px 0',
          }}
        >
          Have questions? Search through our Help Center.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            readOnly
            onClick={handleSearchClick}
            style={{
              width: '100%',
              minHeight: '72px',
              padding: '26px 40px 26px 64px',
              fontSize: '18px',
              fontWeight: 400,
              color: '#65687d',
              backgroundColor: '#fff',
              border: '1px solid #e7e9f3',
              borderRadius: '80px',
              outline: 'none',
              cursor: 'pointer',
              backgroundImage: `url(${searchIconUrl})`,
              backgroundPosition: '24px center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '26px',
            }}
          />
        </div>
      </div>
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
