import React, { useState, useEffect, useRef } from 'react';

interface LiquidImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  containerClassName?: string;
  imageClassName?: string;
  priority?: boolean;
  aspectRatio?: string;
  containerBg?: string;
  fallbackSrc?: string;
}

export const LiquidImage: React.FC<LiquidImageProps> = ({
  src,
  alt,
  srcSet,
  sizes,
  width,
  height,
  className = '',
  containerClassName = '',
  imageClassName = '',
  priority = false,
  aspectRatio,
  containerBg,
  fallbackSrc,
  loading,
  decoding = 'async',
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [currentSrcSet, setCurrentSrcSet] = useState(srcSet);
  const imgRef = useRef<HTMLImageElement>(null);

  // Sync state if src changes
  useEffect(() => {
    setCurrentSrc(src);
    setCurrentSrcSet(srcSet);
    setHasError(false);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src, srcSet]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      // Fallback from thumb to full resolution image
      setCurrentSrc(fallbackSrc);
      setCurrentSrcSet(undefined);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      style={{
        aspectRatio: aspectRatio,
        backgroundColor: containerBg || '#F7F3E9'
      }}
    >
      {/* 1. LIQUID WAVE MASK & RIPPLE PLACEHOLDER (Only active while image is loading) */}
      {!isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 pointer-events-none overflow-hidden flex items-end justify-center"
          style={{ backgroundColor: '#F7F3E9' }}
        >
          {/* Subtle Organic Liquid Under-Glow (#E9DFC9) */}
          <div className="absolute inset-0 bg-radial from-transparent to-[#E9DFC9]/40" />

          {/* Liquid Wave Boundary SVG flowing from bottom to top */}
          <div className="absolute inset-x-0 bottom-0 w-[200%] h-full animate-liquid-rise pointer-events-none">
            {/* Wave 1: Forest Green Sheen (#234B35 with soft opacity) */}
            <svg
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
              className="absolute bottom-0 w-full h-32 opacity-15 animate-liquid-wave-1"
            >
              <path
                d="M0,80 C150,140 250,20 400,70 C550,120 650,40 800,80 L800,200 L0,200 Z"
                fill="#234B35"
              />
            </svg>

            {/* Wave 2: Kokum Burgundy Accent Ripple (#762E3F) */}
            <svg
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
              className="absolute bottom-0 w-full h-28 opacity-10 animate-liquid-wave-2"
            >
              <path
                d="M0,100 C180,40 280,130 400,90 C520,50 680,120 800,90 L800,200 L0,200 Z"
                fill="#762E3F"
              />
            </svg>

            {/* Wave Crest: Golden Muted Water Surface line (#C6A46A) */}
            <svg
              viewBox="0 0 800 20"
              preserveAspectRatio="none"
              className="absolute bottom-24 w-full h-3 opacity-30 animate-liquid-wave-1"
            >
              <path
                d="M0,10 Q200,0 400,10 T800,10"
                fill="none"
                stroke="#C6A46A"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Soft Centered Botanical Leaf Icon watermark while loading */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#234B35"
              strokeWidth="1.5"
              className="animate-pulse"
            >
              <path d="M12 2L15 8C19 10 21 14 20 18C19 22 14 22 12 22C10 22 5 22 4 18C3 14 5 10 9 8L12 2Z" />
              <path d="M12 22V8" />
            </svg>
          </div>
        </div>
      )}

      {/* 2. ACTUAL PRODUCT / ASSET PHOTOGRAPH WITH LIQUID REVEAL */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        srcSet={currentSrcSet}
        sizes={sizes}
        width={width}
        height={height}
        loading={priority ? 'eager' : (loading || 'lazy')}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full transition-all duration-700 ease-out ${imageClassName} ${className} ${
          isLoaded
            ? 'opacity-100 filter-none liquid-reveal-active'
            : 'opacity-0'
        }`}
        {...rest}
      />
    </div>
  );
};

