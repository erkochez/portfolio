'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillsAnimationsProps {
  sectionId: string;
}

export default function SkillsAnimations({ sectionId }: SkillsAnimationsProps) {
  const animationsInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || animationsInitialized.current) return;

    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) return;

    // Animate main header
    const title = sectionElement.querySelector('h2');
    const description = sectionElement.querySelector('p');
    
    gsap.set([title, description].filter(Boolean), { opacity: 0, y: 60 });
    gsap.to([title, description].filter(Boolean), {
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

    // Animate skills grid
    const skillsContainer = sectionElement.querySelector('.skills-container');
    if (skillsContainer) {
      const skillItems = skillsContainer.querySelectorAll('.grid > div');
      gsap.set(skillItems, { opacity: 0, y: 30, scale: 0.9 });
      gsap.to(skillItems, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsContainer,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }

    // Animate achievements
    const achievementsContainer = sectionElement.querySelector('.achievements-container');
    if (achievementsContainer) {
      const achievementItems = achievementsContainer.querySelectorAll('.space-y-6 > div');
      gsap.set(achievementItems, { opacity: 0, x: -50 });
      gsap.to(achievementItems, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: achievementsContainer,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }

    animationsInitialized.current = true;

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [sectionId]);

  return null; // This component doesn't render anything
}
