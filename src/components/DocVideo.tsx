import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const VIDEO_TYPES: Record<string, string> = {
  webm: 'video/webm',
  mp4: 'video/mp4',
  mov: 'video/quicktime',
};

export default function DocVideo({src, ...props}: {src: string} & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const resolvedSrc = useBaseUrl(src);
  const extension = src.split('.').pop()?.toLowerCase() ?? '';
  return (
    <video {...props}>
      <source src={resolvedSrc} type={VIDEO_TYPES[extension] ?? 'video/webm'} />
    </video>
  );
}
