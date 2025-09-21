"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ContactAnimationsProps {
  sectionId: string;
}

export default function ContactAnimations({ sectionId }: ContactAnimationsProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) return;

    // Get elements for animation
    const title = sectionElement.querySelector('h2');
    const description = sectionElement.querySelector('p');
    const contactInfo = sectionElement.querySelector('.space-y-8');
    const form = sectionElement.querySelector('.contact-form');

    // Filter out null elements
    const elements = [title, description, contactInfo, form].filter(Boolean);

    if (elements.length === 0) return;

    // Set initial states
    gsap.set(elements, {
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
    
    if (contactInfo) entranceTl.to(contactInfo, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");
    
    if (form) entranceTl.to(form, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionId]);

  return null;
}
