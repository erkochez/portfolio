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
      // Only run animations on desktop (lg and above)
      if (window.innerWidth < 1024) return;

      // Simple animation to move rectangle to center
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".test-section",
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      // Move rectangle to center of screen
      tl.to(rectangleRef.current, {
        x: () => {
          const rect = rectangleRef.current?.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const rectWidth = rect?.width || 600;
          return (windowWidth - rectWidth) / 2 - (rect?.left || 0);
        },
        y: () => {
          const rect = rectangleRef.current?.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const rectHeight = rect?.height || 400;
          return (windowHeight - rectHeight) / 2 - (rect?.top || 0);
        },
        scale: 1.2,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-slate-50">
      <div className="test-section min-h-screen relative">
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">
            Test Page - Rectangle Animation
          </h1>
          
          <div className="flex justify-start">
            <div
              ref={rectangleRef}
              className="w-[600px] h-[400px] bg-white rounded-lg overflow-hidden relative shadow-lg"
            >
              {/* Landing Page Content */}
              <div className="p-4 h-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-blue-600">
                    Open Auction
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">100 $</span>
                    <img
                      src="/avatar.webp"
                      alt="Avatar"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Search Bar */}
                <div className="mb-4">
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <input
                      type="text"
                      placeholder="Enter keyword..."
                      className="flex-1 text-sm outline-none"
                    />
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="border rounded p-2">
                    <img
                      src="/macbookpro.webp"
                      alt="MacBook Pro"
                      className="w-full h-16 object-contain rounded mb-2"
                    />
                    <div className="text-xs font-semibold">MacBook Pro</div>
                    <div className="text-xs text-blue-600">$800</div>
                    <div className="text-xs text-gray-500">
                      42 Participants
                    </div>
                  </div>
                  <div className="border rounded p-2">
                    <img
                      src="/iphone.webp"
                      alt="iPhone 15"
                      className="w-full h-16 object-contain rounded mb-2"
                    />
                    <div className="text-xs font-semibold">iPhone 15</div>
                    <div className="text-xs text-blue-600">$200</div>
                    <div className="text-xs text-gray-500">
                      28 Participants
                    </div>
                  </div>
                  <div className="border rounded p-2">
                    <img
                      src="/macbookpro.webp"
                      alt="MacBook Air"
                      className="w-full h-16 object-contain rounded mb-2"
                    />
                    <div className="text-xs font-semibold">MacBook Air</div>
                    <div className="text-xs text-blue-600">$250</div>
                    <div className="text-xs text-gray-500">
                      35 Participants
                    </div>
                  </div>
                  <div className="border rounded p-2">
                    <img
                      src="/iphone.webp"
                      alt="iPhone 14"
                      className="w-full h-16 object-contain rounded mb-2"
                    />
                    <div className="text-xs font-semibold">iPhone 14</div>
                    <div className="text-xs text-blue-600">$100</div>
                    <div className="text-xs text-gray-500">
                      19 Participants
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
