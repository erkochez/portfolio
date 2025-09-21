'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillsLogosAnimationsProps {
  sectionId: string;
}

export default function SkillsLogosAnimations({ sectionId }: SkillsLogosAnimationsProps) {
  const animationsInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || animationsInitialized.current) return;

    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) return;

    const title = sectionElement.querySelector('h2');
    const subtitle = sectionElement.querySelector('p');
    
    gsap.set([title, subtitle].filter(Boolean), { opacity: 0, y: 60 });
    gsap.to([title, subtitle].filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionElement,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    animationsInitialized.current = true;

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [sectionId]);

  return null; // This component doesn't render anything
}
