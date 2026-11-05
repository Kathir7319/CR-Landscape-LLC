import React, { useState } from 'react';

export default function ReliableImage({
  src,
  fallbackSrc,
  alt = 'CR Landscape LLC',
  className = '',
  loading = 'lazy',
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading={loading}
      {...props}
    />
  );
}
