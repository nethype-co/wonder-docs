import React from 'react';
import Layout from '@theme/Layout';

export default function Contact(): React.JSX.Element {
  return (
    <Layout title="Contact Support" description="Get in touch with Wonder Theme support">
      <main
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '2rem 1rem',
        }}
      >
        <h1>Need support?</h1>
        <p>
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>
        <iframe
          title="Feedback Form"
          src="https://support.nethype.co/widgets/feedback_widget/new?&widgetType=embedded&formTitle=Need+support%3F&submitTitle=Send&submitThanks=Thank+you+for+you+message!&searchArea=no"
          scrolling="no"
          frameBorder="0"
          style={{
            width: '100%',
            height: 500,
            border: 'none',
          }}
        />
      </main>
    </Layout>
  );
}
