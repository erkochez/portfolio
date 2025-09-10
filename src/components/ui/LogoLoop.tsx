'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Logo {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

export default function LogoLoop({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Technology logos'
}: LogoLoopProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const totalWidth = logos.length * (logoHeight + gap);
  const animationDuration = totalWidth / speed;

  const logoElements = logos.map((logo, index) => (
    <div
      key={index}
      className="flex-shrink-0 flex items-center justify-center"
      style={{ height: logoHeight, marginRight: gap }}
    >
      {logo.href ? (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center transition-transform duration-200 hover:scale-110 p-4"
          title={logo.title}
        >
          {logo.node || (
            <img
              src={logo.src}
              alt={logo.alt || logo.title}
              style={{ height: logoHeight, width: 'auto' }}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </a>
      ) : (
        <div className="flex items-center justify-center p-4">
          {logo.node || (
            <img
              src={logo.src}
              alt={logo.alt || logo.title}
              style={{ height: logoHeight, width: 'auto' }}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>
      )}
    </div>
  ));

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: '100px',
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: '100px',
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`
            }}
          />
        </>
      )}
      
      <motion.div
        className="flex items-center"
        animate={{
          x: direction === 'left' ? [0, -totalWidth] : [0, totalWidth]
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: 'linear',
          ...(isHovered && pauseOnHover ? { duration: 0 } : {})
        }}
        style={{ width: totalWidth * 2 }}
      >
        {/* First set of logos */}
        <div className="flex items-center">
          {logoElements}
        </div>
        {/* Second set of logos for seamless loop */}
        <div className="flex items-center">
          {logoElements}
        </div>
      </motion.div>
    </div>
  );
}
