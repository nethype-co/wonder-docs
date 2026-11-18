import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const VIDEO_TYPES: Record<string, string> = {
  mp4: 'video/mp4',
  m4v: 'video/mp4',
  mov: 'video/quicktime',
  webm: 'video/webm',
  ogv: 'video/ogg',
  ogg: 'video/ogg',
};

function getVideoType(src: string): string | undefined {
  const ext = src.split(/[?#]/)[0].split('.').pop()?.toLowerCase();
  return ext ? VIDEO_TYPES[ext] : undefined;
}

export default function DocVideo({src, ...props}: {src: string} & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const resolvedSrc = useBaseUrl(src);
  return (
    <video {...props}>
      <source src={resolvedSrc} type={getVideoType(src)} />
    </video>
  );
}
