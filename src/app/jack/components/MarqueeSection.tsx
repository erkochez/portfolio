'use client';
import { useEffect, useRef, useState } from 'react';

const ROW1 = [
  'Spring Boot', 'Java', 'React', 'Next.js', 'TypeScript',
  'Node.js', 'PostgreSQL', 'Docker', 'REST APIs',
];

const ROW2 = [
  'React Native', 'Microservices', 'Redis', 'AWS',
  'Tailwind CSS', 'Spring Security', 'Git', 'AR Development', 'Kotlin',
];

function tripled<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

function SkillChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6 flex-shrink-0">
      <span
        className="font-black uppercase tracking-wide whitespace-nowrap"
        style={{ color: '#D7E2EA', fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}
      >
        {label}
      </span>
      <span
        className="flex-shrink-0"
        style={{ color: '#646973', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', lineHeight: 1 }}
      >
        ✦
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-6"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Row 1 — moves right on scroll */}
      <div
        className="flex items-center gap-6"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {tripled(ROW1).map((skill, i) => (
          <SkillChip key={i} label={skill} />
        ))}
      </div>

      {/* Row 2 — moves left on scroll */}
      <div
        className="flex items-center gap-6"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {tripled(ROW2).map((skill, i) => (
          <SkillChip key={i} label={skill} />
        ))}
      </div>
    </div>
  );
}
