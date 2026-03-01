import React from 'react';
import Layout from '@theme/Layout';

const videos = [
  {
    id: 'H34IrovkOIA',
    title: 'How to Set Up a Product Variations Block in Product Page',
  },
  {
    id: '4fCU-xnf2a0',
    title: 'How to Setup a Feature Icons Block in Product Page',
  },
  {
    id: 'tQiOUqnvOvc',
    title: 'Product Page with Multi-Images Variant',
  },
  {
    id: 'yB1X8tUQ-BA',
    title: 'How to Setup Product Badges in Wonder Theme',
  },
  {
    id: 'Vkb_b3TSyeY',
    title: 'How to Setup Logo Banner Section in Wonder Theme',
  },
  {
    id: 'gqBPIxKX2as',
    title: 'How to Create a Trendy 2025 Shopify Store',
  },
  {
    id: 'hCeI0ZnXeFA',
    title: 'How to Setup Mega Menu in Shopify',
  },
];

function VideoCard({id, title}: {id: string; title: string}) {
  return (
    <div style={{
      background: 'var(--ifm-card-background-color, #fff)',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid var(--ifm-color-emphasis-200)',
      transition: 'box-shadow 0.2s',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
      }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        />
      </div>
      <div style={{padding: '16px'}}>
        <h3 style={{
          fontSize: '15px',
          fontWeight: 600,
          margin: 0,
          lineHeight: 1.4,
          color: 'var(--ifm-heading-color)',
        }}>
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function VideoTutorials() {
  return (
    <Layout title="Video Tutorials" description="Wonder Theme video tutorials and guides">
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '40px 24px 60px',
      }}>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h1 style={{fontSize: '32px', fontWeight: 700, marginBottom: '12px'}}>
            Video Tutorials
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--ifm-color-emphasis-700)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Step-by-step video guides to help you set up and customize your Wonder Theme.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
