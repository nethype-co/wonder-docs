import React from 'react';

interface SectionMetaProps {
  version: string;
  availability?: string;
}

const badgeStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '2px 10px',
  borderRadius: '4px',
  fontSize: '0.78rem',
  fontWeight: 600,
  lineHeight: '1.6',
  background: 'var(--ifm-color-emphasis-100)',
  color: 'var(--ifm-color-emphasis-700)',
  border: '1px solid var(--ifm-color-emphasis-200)',
};

export default function SectionMeta({version, availability}: SectionMetaProps) {
  return (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '-0.5rem 0 1rem'}}>
      <span style={badgeStyle}>Since {version}</span>
      {availability && <span style={badgeStyle}>{availability}</span>}
    </div>
  );
}
