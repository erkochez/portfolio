'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'view' | 'click';
  revealDirection?: 'left' | 'right' | 'center';
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  revealDirection = 'left'
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  const animateText = () => {
    if (isAnimating || (animateOn === 'view' && hasAnimated)) return;
    
    setIsAnimating(true);
    setHasAnimated(true);
    
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => {
        return prev
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');
      });

      if (iterations >= text.length) {
        clearInterval(interval);
        setIsAnimating(false);
        setDisplayText(text);
      }

      iterations += 1 / maxIterations;
    }, speed);

    return () => clearInterval(interval);
  };

  const handleInteraction = () => {
    if (animateOn === 'hover' || animateOn === 'click') {
      animateText();
    }
  };

  useEffect(() => {
    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              animateText();
            }
          });
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [animateOn, hasAnimated]);

  const getRevealDirection = () => {
    switch (revealDirection) {
      case 'left':
        return { x: -20, opacity: 0 };
      case 'right':
        return { x: 20, opacity: 0 };
      case 'center':
        return { scale: 0.8, opacity: 0 };
      default:
        return { x: -20, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`decrypted-text-container ${parentClassName}`}
      initial={getRevealDirection()}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={animateOn === 'hover' ? handleInteraction : undefined}
      onClick={animateOn === 'click' ? handleInteraction : undefined}
      style={{ cursor: animateOn === 'hover' || animateOn === 'click' ? 'pointer' : 'default' }}
    >
      <span
        className={`decrypted-text ${className} ${
          isAnimating ? encryptedClassName : ''
        }`}
        style={{
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
          transition: 'all 0.1s ease-in-out'
        }}
      >
        {displayText}
      </span>
    </motion.div>
  );
}
