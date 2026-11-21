import React, { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteConfig';

interface LiquidPreloaderProps {
  onComplete?: () => void;
  minDuration?: number; // fallback min duration in ms (default: 1800ms)
}

export const LiquidPreloader: React.FC<LiquidPreloaderProps> = ({
  onComplete,
  minDuration = 1900
}) => {
  const [phase, setPhase] = useState<'flow' | 'reveal' | 'exit' | 'done'>('flow');

  useEffect(() => {
    // Check if user has reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase('done');
      onComplete?.();
      return;
    }

    // Phase 1: Fluid wave rises & logo reveals with leaf flutter (0ms - 1300ms)
    const revealTimer = setTimeout(() => {
      setPhase('reveal');
    }, Math.max(1000, minDuration - 600));

    // Phase 2: Smooth settle and exit fade (1300ms - 1900ms)
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, minDuration);

    // Phase 3: Unmount preloader
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, minDuration + 550);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [minDuration, onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      role="status"
      aria-label="Loading Kokan Roots"
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-out select-none ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#F7F3E9' }}
    >
      {/* Background Subtle Organic Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#E9DFC9]/35 to-[#EDE5D2]/70 pointer-events-none" />

      {/* RISING FOREST GREEN & KOKUM LIQUID SURGE */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none h-full overflow-hidden">
        {/* Secondary Deep Burgundy Under-Wave */}
        <div
          className="absolute inset-x-0 -bottom-1 w-[200%] h-full transform -translate-x-1/4 transition-transform duration-1000 ease-out"
          style={{
            transform: phase === 'flow' ? 'translateY(15%)' : 'translateY(0%)'
          }}
        >
          <svg
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            className="w-full h-full opacity-25 animate-liquid-flow-secondary"
          >
            <path
              d="M0,192 C150,225 350,150 500,185 C650,220 900,140 1050,175 C1150,200 1200,190 1200,190 L1200,400 L0,400 Z"
              fill="#762E3F"
            />
          </svg>
        </div>

        {/* Primary Forest Green Wave (#234B35) */}
        <div
          className="absolute inset-x-0 -bottom-1 w-[200%] h-[75%] transform transition-transform duration-1200 ease-in-out"
          style={{
            transform: phase === 'flow' ? 'translateY(35%)' : 'translateY(8%)'
          }}
        >
          <svg
            viewBox="0 0 1200 350"
            preserveAspectRatio="none"
            className="w-full h-full opacity-95 animate-liquid-flow-primary"
          >
            <defs>
              <linearGradient id="forestLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2E5F48" />
                <stop offset="25%" stopColor="#234B35" />
                <stop offset="100%" stopColor="#1A392B" />
              </linearGradient>
            </defs>
            <path
              d="M0,130 C180,85 320,180 520,120 C720,60 880,165 1060,115 C1140,95 1200,125 1200,125 L1200,350 L0,350 Z"
              fill="url(#forestLiquidGrad)"
            />
          </svg>
        </div>

        {/* Liquid Surface Specular Ripple & Gold Shimmer Line */}
        <div
          className="absolute inset-x-0 w-[200%] h-3 pointer-events-none opacity-60 animate-liquid-flow-primary"
          style={{
            bottom: phase === 'flow' ? '48%' : '67%',
            transition: 'bottom 1.2s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,10 Q300,0 600,10 T1200,10"
              fill="none"
              stroke="#C6A46A"
              strokeWidth="2"
              strokeOpacity="0.45"
            />
          </svg>
        </div>
      </div>

      {/* FLOATING BOTANICAL LEAF & GOLDEN DETAILS */}
      <div
        className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-leaf-drift"
        style={{
          left: '52%',
          top: phase === 'flow' ? '54%' : '47%',
          transition: 'all 1.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 40 40"
          fill="none"
          className="drop-shadow-md transform -rotate-12"
        >
          {/* Subtle Botanical Leaf Shape with gold-tipped spine */}
          <path
            d="M8,32 C8,32 12,20 25,12 C35,5 38,4 38,4 C38,4 35,16 26,24 C17,32 8,32 8,32 Z"
            fill="#A8BEA3"
            stroke="#234B35"
            strokeWidth="1.2"
          />
          <path
            d="M12,29 Q23,19 36,6"
            stroke="#C6A46A"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="28" cy="10" r="1.5" fill="#762E3F" />
        </svg>
      </div>

      {/* CENTRAL BRAND EMBLEM & LOGO DISPLAY */}
      <div className="relative z-30 flex flex-col items-center justify-center px-6">
        {/* Soft Golden Halo Glow behind Logo */}
        <div className="absolute w-44 h-44 rounded-full bg-[#C6A46A]/20 blur-2xl animate-pulse -z-10" />

        {/* Circular Medallion */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-[#C6A46A]/60 via-[#F7F3E9] to-[#234B35]/40 shadow-2xl transition-all duration-700 transform">
          <div className="w-full h-full rounded-full bg-[#F7F3E9] overflow-hidden flex items-center justify-center relative p-2 shadow-inner">
            <img
              src="/images/kokan-roots-logo.webp"
              alt={siteConfig.brandName}
              width="120"
              height="120"
              className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-700 ease-out transform scale-100 hover:scale-105"
            />
          </div>

          {/* Kokum-Burgundy & Gold Jewel Accents */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#762E3F] border border-[#C6A46A] shadow-xs" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#C6A46A] border border-[#234B35] shadow-xs" />
        </div>

        {/* Brand Typography & Tagline */}
        <div className="mt-5 text-center transition-all duration-700">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#234B35] leading-tight">
            {siteConfig.brandName}
          </h1>
          <div className="flex items-center justify-center gap-2 mt-1.5">
            <span className="h-[1px] w-5 bg-[#C6A46A]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#762E3F]">
              Authentic Konkan Delicacies
            </span>
            <span className="h-[1px] w-5 bg-[#C6A46A]" />
          </div>
          <p className="mt-1 text-[11px] text-[#6B4633] font-medium opacity-85">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </div>
  );
};

