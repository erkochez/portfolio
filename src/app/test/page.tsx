"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TestPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rectangleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a simple scroll trigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      // Calculate the movement needed to center the rectangle
      const screenCenterX = window.innerWidth / 2;
      const screenCenterY = window.innerHeight / 2;
      
      // Get rectangle's current position and size
      if (!rectangleRef.current) return;
      const rect = rectangleRef.current.getBoundingClientRect();
      
      // Calculate current center of rectangle
      const currentCenterX = rect.left + rect.width / 2;
      const currentCenterY = rect.top + rect.height / 2;
      
      // Calculate how much to move to reach screen center
      const moveX = screenCenterX - currentCenterX;
      const moveY = screenCenterY - currentCenterY;

      tl.to(rectangleRef.current, {
        x: moveX,
        y: moveY,
        scale: 1.2,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-gray-100">
      <div className="h-screen relative">
        <div
          ref={rectangleRef}
          className="w-100 h-30 bg-blue-500 rounded-lg absolute"
          style={{ top: '100px', left: '100px' }}
        >
          <div className="p-4 text-white font-bold">
            Test Rectangle
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
