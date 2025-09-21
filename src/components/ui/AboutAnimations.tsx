'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutAnimationsProps {
  sectionId: string;
}

export default function AboutAnimations({ sectionId }: AboutAnimationsProps) {
  const animationsInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || animationsInitialized.current) return;

    const sectionElement = document.getElementById(sectionId);
    const timelineElement = sectionElement?.querySelector('.timeline-container');

    if (!sectionElement) return;

    // Title and description animations
    const title = sectionElement.querySelector('h2');
    const description = sectionElement.querySelector('p');
    const aboutText = sectionElement.querySelector('.space-y-6');
    const profileGrid = sectionElement.querySelector('.grid');

    // Set initial states
    gsap.set([title, description, aboutText, profileGrid].filter(Boolean), {
      opacity: 0,
      y: 60
    });

    // Create entrance timeline
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      }
    });

    if (title) entranceTl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });
    
    if (description) entranceTl.to(description, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");
    
    if (aboutText) entranceTl.to(aboutText, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");
    
    if (profileGrid) entranceTl.to(profileGrid, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    const timelineItems = timelineElement?.querySelectorAll(".timeline-item");

    if (timelineItems) {
      gsap.fromTo(
        timelineItems,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineElement,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    animationsInitialized.current = true;

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionId]);

  return null; // This component doesn't render anything
}
