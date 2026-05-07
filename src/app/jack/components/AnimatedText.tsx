'use client';
import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

function AnimatedChar({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min((index + 1) / total, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = char === ' ' ? ' ' : char;

  return (
    <span className="relative inline-block">
      <span className="invisible">{display}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {display}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <AnimatedChar key={i} char={char} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}
