import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DocVideo({src, ...props}: {src: string} & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const resolvedSrc = useBaseUrl(src);
  return (
    <video {...props}>
      <source src={resolvedSrc} type="video/webm" />
    </video>
  );
}
