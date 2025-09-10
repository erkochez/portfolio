'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Typing Animation Component
export const TypewriterText = ({ 
  text, 
  speed = 100, 
  className = "",
  onComplete = () => {} 
}: { 
  text: string; 
  speed?: number; 
  className?: string;
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete, isMounted]);

  // Show full text during SSR and initial render
  if (!isMounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block"
      >
        |
      </motion.span>
    </span>
  );
};

// Gradient Text Animation
export const AnimatedGradientText = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      className={`bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-500 bg-[length:200%_200%] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Word Pull Up Animation
export const WordPullUp = ({
  words,
  delayMultiple = 0.08,
  className = "",
}: {
  words: string;
  delayMultiple?: number;
  className?: string;
}) => {
  const wordArray = words.split(" ");

  const pullUp = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className={className}>
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          variants={pullUp}
          initial="initial"
          animate="animate"
          transition={{
            delay: i * delayMultiple,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Character Reveal Animation
export const CharacterReveal = ({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) => {
  const characters = text.split("");

  const characterAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={characterAnimation}
          initial="initial"
          animate="animate"
          transition={{
            delay: delay + i * 0.05,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// Fade In Blur Animation
export const FadeInBlur = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        delay,
        duration: 0.8,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Bounce Animation
export const BounceText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
