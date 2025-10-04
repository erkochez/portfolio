"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AuctionPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rectangleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only run animations on desktop (lg and above)
      if (window.innerWidth < 1024) return;

      // Kill all existing ScrollTriggers to prevent conflicts
      ScrollTrigger.killAll();

      // Reset all elements to initial state
      gsap.set([rectangleRef.current, contentRef.current, iconsRef.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });

      // Set initial states for sections
      const sections = [
        { 
          section: ".auction-section", 
          rectangle: rectangleRef.current, 
          content: contentRef.current, 
          icons: iconsRef.current
        }
      ];

      sections.forEach(({ rectangle, content, icons }) => {
        // Set initial states (VISIBLE initially like Evidence page)
        gsap.set([content, icons], {
          opacity: 1,
          y: 0
        });
        gsap.set(rectangle, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1
        });
      });

      // Header animation removed - title is now controlled by main timeline

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".auction-section",
          start: "top top",
          end: "+=800%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      // Hide content, icons, and title when scrolling starts (like other projects)
      tl.to([contentRef.current, iconsRef.current, ".auction-section h1"], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.9");

      // Move rectangle to center using getBoundingClientRect (like Projects section)
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
        duration: 1.3,
        ease: "power2.inOut",
      }, "-=0.7");

      // Content transitions inside rectangle
      tl.to("#landing-content", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.8")
      .to("#auction-content", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.2")
      .to({}, { duration: 0.7 }); // Pause at the end
    },
    { scope: containerRef, dependencies: [] }
  );

  // Cleanup function to reset everything on unmount
  React.useEffect(() => {
    return () => {
      ScrollTrigger.killAll();
      // Only reset if refs exist
      if (rectangleRef.current) {
        gsap.set(rectangleRef.current, {
          clearProps: "all",
          x: 0,
          y: 0,
          scale: 1
        });
      }
      if (contentRef.current) {
        gsap.set(contentRef.current, {
          clearProps: "all",
          x: 0,
          y: 0,
          scale: 1
        });
      }
      if (iconsRef.current) {
        gsap.set(iconsRef.current, {
          clearProps: "all",
          x: 0,
          y: 0,
          scale: 1
        });
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="auction-section hidden lg:flex items-center h-screen">
          {/* Left side with rectangle */}
          <div className="w-1/2 pr-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-left -mt-2">
              Online Auction Center
            </h1>
            
            {/* Rectangle with app interface mockups */}
            <div
              ref={rectangleRef}
              className="w-[600px] h-[400px] bg-white rounded-lg mb-8 overflow-hidden relative shadow-lg"
            >
              {/* Landing Page Content */}
              <div
                className="p-4 h-full absolute inset-0 transition-opacity duration-500"
                id="landing-content"
              >
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

              {/* Auction Page Content */}
              <div
                className="p-4 h-full absolute inset-0 opacity-0 transition-opacity duration-500"
                id="auction-content"
              >
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

                {/* Product Info */}
                <div className="flex gap-3 mb-10">
                  <img
                    src="/macbookpro.webp"
                    alt="MacBook Pro"
                    className="w-20 h-18 object-contain rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold">MacBook Pro</h4>
                    <p className="text-xs text-gray-600">
                      14&quot; 256 GB SSD + 8 GB RAM
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs line-through text-gray-500">
                        $2,000
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        $800
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bidding Section */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-600">Last bid: $750</div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="850"
                      className="flex-1 text-xs border rounded px-2 py-1"
                    />
                    <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                      Place Bid
                    </button>
                  </div>
                  <div className="text-xs text-red-600">30 seconds left!</div>
                </div>

                {/* Bidders List */}
                <div className="mt-3">
                  <div className="text-xs font-semibold mb-2">Bids</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs">
                      <img
                        src="/chris.webp"
                        alt="Chris"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Chris</div>
                        <div className="text-green-600 font-bold">$750</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <img
                        src="/oliver.webp"
                        alt="Oliver"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Oliver</div>
                        <div className="text-green-600 font-bold">$720</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech stack icons */}
            <div ref={iconsRef} className="icons flex gap-4 justify-center mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                <img src="/react.webp" alt="React" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                <img src="/springlogo.webp" alt="Spring Boot" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                <img src="/redis.webp" alt="Redis" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                <img src="/postgresql.webp" alt="PostgreSQL" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div ref={contentRef} className="w-1/2 pl-8">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight uppercase mb-8">
              NEXT-GEN AUCTION PLATFORM
            </h2>
            <p className="text-2xl text-slate-600 mb-6">
              A revolutionary token-based auction system built with
              cutting-edge technology. Features real-time bidding, dynamic
              participant thresholds, and unlimited scalability.
            </p>
            <p className="text-xl text-slate-700 mb-4">
              <strong>Key Features:</strong>
            </p>
            <ul className="text-lg text-slate-600 space-y-2">
              <li>• Token-based bidding system with minimum bid requirements</li>
              <li>• Dynamic auction start based on participant thresholds</li>
              <li>• Real-time updates and unlimited participant capacity</li>
              <li>• Secure, fast, and reliable transaction processing</li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="w-full max-w-sm mx-auto mb-8">
            <div className="w-full h-[300px] bg-white rounded-lg overflow-hidden relative shadow-lg">
              <div className="p-4 h-full">
                {/* Mobile content similar to desktop but smaller */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-blue-600">Open Auction</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">100 $</span>
                    <img src="/avatar.webp" alt="Avatar" className="w-4 h-4 rounded-full object-cover" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border rounded p-2">
                    <img src="/macbookpro.webp" alt="MacBook Pro" className="w-full h-8 object-contain rounded mb-1" />
                    <div className="text-xs font-semibold">MacBook Pro</div>
                    <div className="text-xs text-blue-600">$800</div>
                  </div>
                  <div className="border rounded p-2">
                    <img src="/iphone.webp" alt="iPhone 15" className="w-full h-8 object-contain rounded mb-1" />
                    <div className="text-xs font-semibold">iPhone 15</div>
                    <div className="text-xs text-blue-600">$200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Tech stack icons */}
          <div className="flex gap-4 justify-center mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
              <img src="/react.webp" alt="React" className="w-full h-full object-contain" />
            </div>
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
              <img src="/springlogo.webp" alt="Spring Boot" className="w-full h-full object-contain" />
            </div>
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
              <img src="/redis.webp" alt="Redis" className="w-full h-full object-contain" />
            </div>
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
              <img src="/postgresql.webp" alt="PostgreSQL" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Mobile Text content */}
          <div className="text-left">
            <p className="text-lg text-slate-600 mb-4">
              A revolutionary token-based auction system built with
              cutting-edge technology. Features real-time bidding, dynamic
              participant thresholds, and unlimited scalability.
            </p>
            <p className="text-base text-slate-700 mb-3">
              <strong>Key Features:</strong>
            </p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Token-based bidding system with minimum bid requirements</li>
              <li>• Dynamic auction start based on participant thresholds</li>
              <li>• Real-time updates and unlimited participant capacity</li>
              <li>• Secure, fast, and reliable transaction processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionPage;
