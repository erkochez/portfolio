"use client";

import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rectangleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  // Refs for second section
  const rectangleRef2 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const iconsRef2 = useRef<HTMLDivElement>(null);

  // Refs for third section
  const rectangleRef3 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);
  const iconsRef3 = useRef<HTMLDivElement>(null);

  // Refs for fourth section
  const rectangleRef4 = useRef<HTMLDivElement>(null);
  const contentRef4 = useRef<HTMLDivElement>(null);
  const iconsRef4 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only run animations on desktop (lg and above)
      if (window.innerWidth < 1024) return;

      // Kill all existing ScrollTriggers to prevent conflicts (LIKE INDIVIDUAL PAGES)
      ScrollTrigger.killAll();

      // Reset all elements to initial state (LIKE INDIVIDUAL PAGES)
      gsap.set([rectangleRef.current, contentRef.current, iconsRef.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([rectangleRef2.current, contentRef2.current, iconsRef2.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([rectangleRef3.current, contentRef3.current, iconsRef3.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([rectangleRef4.current, contentRef4.current, iconsRef4.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });

      // Set initial states (VISIBLE initially like individual pages)
      gsap.set([contentRef.current, iconsRef.current], {
        opacity: 1,
        y: 0
      });
      gsap.set(rectangleRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([contentRef2.current, iconsRef2.current], {
        opacity: 1,
        y: 0
      });
      gsap.set(rectangleRef2.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([contentRef3.current, iconsRef3.current], {
        opacity: 1,
        y: 0
      });
      gsap.set(rectangleRef3.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([contentRef4.current, iconsRef4.current], {
        opacity: 1,
        y: 0
      });
      gsap.set(rectangleRef4.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      });

      // First section animation - EXACT COPY from auction page
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-1",
          start: "top top",
          end: "+=800%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      // Hide content, icons, and title when scrolling starts (EXACT COPY from auction page)
      tl1.to([contentRef.current, iconsRef.current, ".section-1 h1"], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.9");

      // Move rectangle to center using getBoundingClientRect (EXACT COPY from auction page)
      tl1.to(rectangleRef.current, {
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

      // Content transitions inside rectangle (EXACT COPY from auction page)
      tl1.to("#landing-content", {
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

      // Second section animation - EXACT COPY from bank page
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-2",
          start: "top top",
          end: "+=800%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      // Hide content, icons, and title when scrolling starts (EXACT COPY from bank page)
      tl2.to([contentRef2.current, iconsRef2.current, ".section-2 h1"], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.9");

      // Move rectangle to center using getBoundingClientRect (EXACT COPY from bank page)
      tl2.to(rectangleRef2.current, {
        x: () => {
          const rect = rectangleRef2.current?.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const rectWidth = rect?.width || 600;
          return (windowWidth - rectWidth) / 2 - (rect?.left || 0);
        },
        y: () => {
          const rect = rectangleRef2.current?.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const rectHeight = rect?.height || 400;
          return (windowHeight - rectHeight) / 2 - (rect?.top || 0);
        },
        scale: 1.2,
        duration: 1.3,
        ease: "power2.inOut",
      }, "-=0.7");

      // Content transitions inside rectangle (EXACT COPY from bank page)
      tl2.to("#landing-content-2", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.8")
        .to("#detail-content-2", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        }, "-=0.2")
        .to({}, { duration: 0.7 }); // Pause at the end

      // Third section animation - EXACT COPY from armenu page
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-3",
          start: "top top",
          end: "+=800%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      // Hide content, icons, and title when scrolling starts (EXACT COPY from armenu page)
      tl3.to([contentRef3.current, iconsRef3.current, ".section-3 h1"], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.9");

      // Move rectangle to center using getBoundingClientRect (EXACT COPY from armenu page)
      tl3.to(rectangleRef3.current, {
        x: () => {
          const rect = rectangleRef3.current?.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const rectWidth = rect?.width || 200;
          return (windowWidth - rectWidth) / 2 - (rect?.left || 0);
        },
        y: () => {
          const rect = rectangleRef3.current?.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const rectHeight = rect?.height || 400;
          return (windowHeight - rectHeight) / 2 - (rect?.top || 0);
        },
        scale: 1.2,
        duration: 1.3,
        ease: "power2.inOut",
      }, "-=0.7");

      // Content transitions inside rectangle (EXACT COPY from armenu page)
      tl3.to("#landing-content-3", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.8")
        .to("#detail-content-3", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        }, "-=0.2")
        .to({}, { duration: 0.7 }); // Pause at the end

      // Fourth section animation - EXACT COPY from evidence page
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-4",
          start: "top top",
          end: "+=800%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      // Hide content, icons, and title when scrolling starts (EXACT COPY from evidence page)
      tl4.to([contentRef4.current, iconsRef4.current, ".section-4 h1"], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.9");

      // Move rectangle to center using getBoundingClientRect (EXACT COPY from evidence page)
      tl4.to(rectangleRef4.current, {
        x: () => {
          const rect = rectangleRef4.current?.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const rectWidth = rect?.width || 600;
          return (windowWidth - rectWidth) / 2 - (rect?.left || 0);
        },
        y: () => {
          const rect = rectangleRef4.current?.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const rectHeight = rect?.height || 400;
          return (windowHeight - rectHeight) / 2 - (rect?.top || 0);
        },
        scale: 1.2,
        duration: 1.3,
        ease: "power2.inOut",
      }, "-=0.7");

      // Content transitions inside rectangle (EXACT COPY from evidence page)
      tl4.to("#landing-content-4", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.8")
        .to("#detail-content-4", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        }, "-=0.2")
        .to({}, { duration: 0.7 }); // Pause at the end
    },
    { scope: containerRef, dependencies: [] }
  );

  // Cleanup function to reset everything on unmount (LIKE INDIVIDUAL PAGES)
  React.useEffect(() => {
    return () => {
      ScrollTrigger.killAll();
      gsap.set([rectangleRef.current, contentRef.current, iconsRef.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([rectangleRef2.current, contentRef2.current, iconsRef2.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([rectangleRef3.current, contentRef3.current, iconsRef3.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });
      gsap.set([rectangleRef4.current, contentRef4.current, iconsRef4.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 mb-16" ref={headerRef}>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-recoleta">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my most impactful work across different industries and
            technologies.
          </p>
        </div>
      </div>
      <div
        ref={containerRef}
        className="min-h-0 lg:min-h-[3200vh] overflow-x-hidden"
      >
        {/* Section 1: Auction Platform */}
        <div className="section-1 min-h-screen lg:h-screen relative py-8 lg:py-12 overflow-x-hidden">
          <div className="container mx-auto px-4">
            {/* Mobile Title */}
            <h1 className="lg:hidden text-2xl font-bold text-foreground mb-4">
              Online Auction Center
            </h1>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center min-h-[80vh]">
              {/* Left side with rectangle and icons */}
              <div className="w-1/2 pr-8">
                {/* Desktop Title positioned just above rectangle */}
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-left font-recoleta">
                  Online Auction Center
                </h1>
                {/* Rectangle with content */}
                <div
                  ref={rectangleRef}
                  className="w-[600px] h-[400px] bg-card border border-border rounded-lg mb-8 overflow-hidden relative"
                >
                  {/* Landing Page Content */}
                  <div
                    className="p-4 h-full absolute inset-0 transition-opacity duration-500"
                    id="landing-content"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-primary">
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
                          src={typeof window !== 'undefined' && window.innerWidth <= 768 ? '/macbookpro-mobile.webp' : '/macbookpro.webp'}
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
                          src="/ps5.webp"
                          alt="PlayStation 5"
                          className="w-full h-16 object-contain rounded mb-2"
                        />
                        <div className="text-xs font-semibold">PlayStation 5</div>
                        <div className="text-xs text-blue-600">$450</div>
                        <div className="text-xs text-gray-500">
                          35 Participants
                        </div>
                      </div>
                      <div className="border rounded p-2">
                        <img
                          src="/camera.png"
                          alt="Digital Camera"
                          className="w-full h-16 object-contain rounded mb-2"
                        />
                        <div className="text-xs font-semibold">Digital Camera</div>
                        <div className="text-xs text-blue-600">$320</div>
                        <div className="text-xs text-gray-500">
                          19 Participants
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
                        src={typeof window !== 'undefined' && window.innerWidth <= 768 ? '/macbookpro-mobile.webp' : '/macbookpro.webp'}
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
                <div ref={iconsRef} className="flex gap-6 mb-8">
                  <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/react.webp"
                      alt="React"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/springlogo.webp"
                      alt="Java"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/redis.webp"
                      alt="Redis"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/postgresql.webp"
                      alt="PostgreSQL"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right side text */}
              <div ref={contentRef} className="w-1/2 pl-8">
                <h2 className="text-4xl font-bold text-foreground leading-tight uppercase mb-8">
                  NEXT-GEN AUCTION PLATFORM
                </h2>
                <p className="text-2xl text-muted-foreground mb-6">
                  A revolutionary token-based auction system built with
                  cutting-edge technology. Features real-time bidding, dynamic
                  participant thresholds, and unlimited scalability.
                </p>
                <p className="text-xl text-foreground mb-4">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-lg text-muted-foreground space-y-2">
                  <li>
                    • Token-based bidding system with minimum bid requirements
                  </li>
                  <li>• Dynamic auction start based on participant thresholds</li>
                  <li>• Real-time updates and unlimited participant capacity</li>
                  <li>• Secure, fast, and reliable transaction processing</li>
                </ul>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              {/* Two rectangles stacked vertically */}
              <div className="flex flex-col gap-4 items-center">
                {/* Initial state rectangle */}
                <div className="w-[350px] h-[220px] bg-card border border-border rounded-lg overflow-hidden relative">
                  {/* Landing Page Content */}
                  <div className="p-3 h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-bold text-primary">
                        Open Auction
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-600">100 $</span>
                        <img
                          src="/avatar.webp"
                          alt="Avatar"
                          className="w-4 h-4 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-2">
                      <div className="flex items-center border rounded px-2 py-1">
                        <input
                          type="text"
                          placeholder="Enter keyword..."
                          className="flex-1 text-xs outline-none"
                        />
                        <svg
                          className="w-3 h-3 text-gray-400"
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
                    <div className="grid grid-cols-2 gap-1">
                      <div className="border rounded p-1">
                        <img
                          src="/macbookpro.webp"
                          alt="MacBook Pro"
                          className="w-full h-8 object-contain rounded mb-1"
                        />
                        <div className="text-xs font-semibold">MacBook Pro</div>
                        <div className="text-xs text-blue-600">$800</div>
                      </div>
                      <div className="border rounded p-1">
                        <img
                          src="/iphone.webp"
                          alt="iPhone 15"
                          className="w-full h-8 object-contain rounded mb-1"
                        />
                        <div className="text-xs font-semibold">iPhone 15</div>
                        <div className="text-xs text-blue-600">$200</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final state rectangle */}
                <div className="w-[350px] h-[220px] bg-white rounded-lg overflow-hidden relative">
                  {/* Auction Page Content */}
                  <div className="p-3 h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-bold text-blue-600">
                        Open Auction
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-600">100 $</span>
                        <img
                          src="/avatar.webp"
                          alt="Avatar"
                          className="w-4 h-4 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex gap-2 mb-2">
                      <img
                        src={typeof window !== 'undefined' && window.innerWidth <= 768 ? '/macbookpro-mobile.webp' : '/macbookpro.webp'}
                        alt="MacBook Pro"
                        className="w-12 h-10 object-contain rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-xs font-bold">MacBook Pro</h4>
                        <p className="text-xs text-gray-600">
                          14&quot; 256 GB SSD
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="text-xs line-through text-gray-500">
                            $2,000
                          </span>
                          <span className="text-xs font-bold text-blue-600">
                            $800
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bidding Section */}
                    <div className="space-y-1 mb-2">
                      <div className="text-xs text-gray-600">Last bid: $750</div>
                      <div className="flex gap-1">
                        <input
                          type="text"
                          placeholder="850"
                          className="flex-1 text-xs border rounded px-1 py-0.5"
                        />
                        <button className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                          Bid
                        </button>
                      </div>
                      <div className="text-xs text-red-600">30 seconds left!</div>
                    </div>

                    {/* Bidders List */}
                    <div>
                      <div className="text-xs font-semibold mb-1">Bids</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <img
                            src="/chris.webp"
                            alt="Chris"
                            className="w-4 h-4 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="font-semibold">Chris</div>
                            <div className="text-green-600 font-bold">$750</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <img
                            src="/oliver.webp"
                            alt="Oliver"
                            className="w-4 h-4 rounded-full object-cover"
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
              </div>

              {/* Tech stack icons */}
              <div className="flex gap-4 justify-center mb-6">
                <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/react.webp"
                    alt="React"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src={typeof window !== 'undefined' && window.innerWidth <= 768 ? '/springlogo-mobile.webp' : '/springlogo.webp'}
                    alt="Java"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/redis.webp"
                    alt="Redis"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/postgresql.webp"
                    alt="PostgreSQL"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text content */}
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
                  <li>
                    • Token-based bidding system with minimum bid requirements
                  </li>
                  <li>• Dynamic auction start based on participant thresholds</li>
                  <li>• Real-time updates and unlimited participant capacity</li>
                  <li>• Secure, fast, and reliable transaction processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Bank Loan Management */}
        <div className="section-2 min-h-screen lg:h-screen relative py-8 lg:py-12 overflow-x-hidden">
          <div className="container mx-auto px-4">
            {/* Mobile Title */}
            <h1 className="lg:hidden text-2xl font-bold text-slate-800 mb-4">
              Bank Workflow Management
            </h1>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center min-h-[80vh]">
              <div className="w-1/2 pr-8">
                {/* Desktop Title positioned just above rectangle */}
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-left font-recoleta">
                  Bank Workflow Management
                </h1>
                <div
                  ref={rectangleRef2}
                  className="w-[600px] h-[400px] bg-white rounded-lg mb-8 overflow-hidden relative ml-0"
                >
                  {/* Landing Content */}
                  <div
                    className="p-4 h-full absolute inset-0 transition-opacity duration-500"
                    id="landing-content-2"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-blue-600">
                        Loan Dashboard
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Joe Evans</span>
                        <img
                          src="/employee.webp"
                          alt="employee"
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center border rounded-lg px-3 py-2">
                        <input
                          type="text"
                          placeholder="Search clients..."
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

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="border rounded p-3">
                        <div className="text-xs font-semibold text-green-600">
                          Active Processes
                        </div>
                        <div className="text-xl font-bold text-blue-600">24</div>
                        <div className="text-xs text-gray-500">In Progress</div>
                        <div className="mt-2 h-8 bg-gray-100 rounded">
                          <div
                            className="h-full bg-green-500 rounded"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="border rounded p-3">
                        <div className="text-xs font-semibold text-blue-600">
                          Total Clients
                        </div>
                        <div className="text-xl font-bold text-blue-600">156</div>
                        <div className="text-xs text-gray-500">This Month</div>
                        <div className="mt-2 h-8 bg-gray-100 rounded">
                          <div
                            className="h-full bg-blue-500 rounded"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="border rounded p-3">
                        <div className="text-xs font-semibold text-orange-600">
                          Pending Review
                        </div>
                        <div className="text-xl font-bold text-blue-600">8</div>
                        <div className="text-xs text-gray-500">
                          Awaiting Approval
                        </div>
                        <div className="mt-2 h-8 bg-gray-100 rounded">
                          <div
                            className="h-full bg-orange-500 rounded"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="border rounded p-3">
                        <div className="text-xs font-semibold text-red-600">
                          Rejected
                        </div>
                        <div className="text-xl font-bold text-blue-600">3</div>
                        <div className="text-xs text-gray-500">This Week</div>
                        <div className="mt-2 h-8 bg-gray-100 rounded">
                          <div
                            className="h-full bg-red-500 rounded"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border rounded p-2">
                        <div className="text-xs font-semibold mb-2">
                          Loan Applications Trend
                        </div>
                        <div className="h-16 bg-gray-50 rounded flex items-end justify-between px-2">
                          <div
                            className="bg-blue-400 w-3 rounded-t"
                            style={{ height: "60%" }}
                          ></div>
                          <div
                            className="bg-blue-400 w-3 rounded-t"
                            style={{ height: "80%" }}
                          ></div>
                          <div
                            className="bg-blue-400 w-3 rounded-t"
                            style={{ height: "45%" }}
                          ></div>
                          <div
                            className="bg-blue-400 w-3 rounded-t"
                            style={{ height: "90%" }}
                          ></div>
                          <div
                            className="bg-blue-400 w-3 rounded-t"
                            style={{ height: "70%" }}
                          ></div>
                          <div
                            className="bg-blue-400 w-3 rounded-t"
                            style={{ height: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="border rounded p-2">
                        <div className="text-xs font-semibold mb-2">
                          Approval Rate
                        </div>
                        <div className="h-16 flex items-center justify-center">
                          <div className="relative w-12 h-12">
                            <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
                            <div
                              className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-green-500 border-r-transparent"
                              style={{ transform: "rotate(270deg)" }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                              78%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detail Content */}
                  <div
                    className="p-4 h-full absolute inset-0 opacity-0 transition-opacity duration-500"
                    id="detail-content-2"
                  >
                    {/* Client Info */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src="/johnsmith.webp"
                          alt="Client"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-sm font-bold">John Smith</h4>
                          <p className="text-xs text-gray-600">
                            Client ID: #CS12345
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-2 rounded">
                        <div className="text-xs font-semibold text-blue-600">
                          #OKR0123
                        </div>
                        <div className="text-sm font-bold">
                          Personal Loan Application
                        </div>
                        <div className="text-xs text-gray-600">
                          Amount: $25,000
                        </div>
                      </div>
                    </div>

                    {/* Documents Table */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold mb-2">
                        Required Documents
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-1">Document Name</th>
                              <th className="text-left py-1">Type</th>
                              <th className="text-left py-1">Archive #</th>
                              <th className="text-left py-1">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-1">Identity Document</td>
                              <td className="py-1">ID</td>
                              <td className="py-1">#ARC001</td>
                              <td className="py-1">
                                <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-1">Income Certificate</td>
                              <td className="py-1">INC</td>
                              <td className="py-1">#ARC002</td>
                              <td className="py-1">
                                <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-1">Bank Statements</td>
                              <td className="py-1">BANK</td>
                              <td className="py-1">-</td>
                              <td className="py-1">
                                <button className="bg-orange-500 text-white px-2 py-1 rounded text-xs">
                                  Upload
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">Credit Report</td>
                              <td className="py-1">CREDIT</td>
                              <td className="py-1">-</td>
                              <td className="py-1">
                                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                                  Request
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Navigation Buttons - Fixed at bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <button className="bg-gray-500 text-white text-xs px-3 py-2 rounded flex-1">
                        ← Back
                      </button>
                      <button className="bg-blue-600 text-white text-xs px-3 py-2 rounded flex-1">
                        Send to Supervisor
                      </button>
                      <button className="bg-red-500 text-white text-xs px-3 py-2 rounded flex-1">
                        Cancel Loan
                      </button>
                    </div>
                  </div>
                </div>

                <div ref={iconsRef2} className="flex gap-6 mb-8">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/react.webp"
                      alt="React"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/springlogo.webp"
                      alt="Java"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/postgresql.webp"
                      alt="PostgreSQL"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div ref={contentRef2} className="w-1/2 pl-8">
                <h2 className="text-4xl font-bold text-slate-800 leading-tight uppercase mb-8">
                  BANK WORKFLOW
                  <br />
                  MANAGEMENT
                </h2>
                <p className="text-2xl text-slate-600 mb-6">
                  A comprehensive document management system for bank loan
                  processing. Streamlines workflow, tracks documents, and manages
                  loan applications efficiently.
                </p>
                <p className="text-xl text-slate-700 mb-4">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-lg text-slate-600 space-y-2">
                  <li>• Document workflow management and tracking</li>
                  <li>• Client information and loan product management</li>
                  <li>• Multi-level approval hierarchy system</li>
                  <li>• Real-time status updates and notifications</li>
                </ul>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              {/* Two rectangles stacked vertically */}
              <div className="flex flex-col gap-4 items-center">
                {/* Initial state rectangle */}
                <div className="w-[350px] h-[220px] bg-white rounded-lg overflow-hidden relative">
                  {/* Landing Content */}
                  <div className="p-3 h-full">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-bold text-blue-600">
                        Loan Dashboard
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-600">Joe Evans</span>
                        <img
                          src="/employee.webp"
                          alt="employee"
                          className="w-4 h-4 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="flex items-center border rounded px-2 py-1">
                        <input
                          type="text"
                          placeholder="Search clients..."
                          className="flex-1 text-xs outline-none"
                        />
                        <svg
                          className="w-3 h-3 text-gray-400"
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

                    <div className="grid grid-cols-2 gap-1 mb-2">
                      <div className="border rounded p-1">
                        <div className="text-xs font-semibold text-green-600">
                          Active
                        </div>
                        <div className="text-lg font-bold text-blue-600">24</div>
                      </div>
                      <div className="border rounded p-1">
                        <div className="text-xs font-semibold text-blue-600">
                          Total
                        </div>
                        <div className="text-lg font-bold text-blue-600">156</div>
                      </div>
                      <div className="border rounded p-1">
                        <div className="text-xs font-semibold text-orange-600">
                          Pending
                        </div>
                        <div className="text-lg font-bold text-blue-600">8</div>
                      </div>
                      <div className="border rounded p-1">
                        <div className="text-xs font-semibold text-red-600">
                          Rejected
                        </div>
                        <div className="text-lg font-bold text-blue-600">3</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final state rectangle */}
                <div className="w-[350px] h-[220px] bg-white rounded-lg overflow-hidden relative">
                  {/* Detail Content */}
                  <div className="p-3 h-full">
                    <div className="mb-2">
                      <div className="flex items-center gap-1 mb-1">
                        <img
                          src="/johnsmith.webp"
                          alt="Client"
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-xs font-bold">John Smith</h4>
                          <p className="text-xs text-gray-600">#CS12345</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-1 rounded">
                        <div className="text-xs font-semibold text-blue-600">
                          #OKR0123
                        </div>
                        <div className="text-xs font-bold">Personal Loan</div>
                        <div className="text-xs text-gray-600">$25,000</div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="text-xs font-semibold mb-1">Documents</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Identity Document</span>
                          <button className="bg-green-500 text-white px-1 py-0.5 rounded text-xs">
                            View
                          </button>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Income Certificate</span>
                          <button className="bg-green-500 text-white px-1 py-0.5 rounded text-xs">
                            View
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-2 left-2 right-2 flex gap-1">
                      <button className="bg-gray-500 text-white text-xs px-2 py-1 rounded flex-1">
                        ← Back
                      </button>
                      <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded flex-1">
                        Send
                      </button>
                      <button className="bg-red-500 text-white text-xs px-2 py-1 rounded flex-1">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech stack icons */}
              <div className="flex gap-4 justify-center mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/react.webp"
                    alt="React"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src={typeof window !== 'undefined' && window.innerWidth <= 768 ? '/springlogo-mobile.webp' : '/springlogo.webp'}
                    alt="Java"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/postgresql.webp"
                    alt="PostgreSQL"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="text-left">
                <p className="text-lg text-slate-600 mb-4">
                  A comprehensive document management system for bank loan
                  processing. Streamlines workflow, tracks documents, and manages
                  loan applications efficiently.
                </p>
                <p className="text-base text-slate-700 mb-3">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Document workflow management and tracking</li>
                  <li>• Client information and loan product management</li>
                  <li>• Multi-level approval hierarchy system</li>
                  <li>• Real-time status updates and notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: AR Restaurant Menu App */}
        <div className="section-3 min-h-screen lg:h-screen relative py-8 lg:py-12 overflow-x-hidden">
          <div className="container mx-auto px-4">
            {/* Mobile Title */}
            <h1 className="lg:hidden text-2xl font-bold text-slate-800 mb-4">
              AR Menu App
            </h1>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center min-h-[80vh]">
              <div className="w-1/2 pr-8">
                {/* Desktop Title positioned just above rectangle */}
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 font-recoleta">
                  AR Menu App
                </h1>
                <div
                  ref={rectangleRef3}
                  className="w-[200px] h-[400px] bg-gray-800 rounded-[40px] mb-8 overflow-hidden relative ml-0"
                  style={{ boxShadow: "0 0 0 8px #1f2937, 0 0 0 12px #374151" }}
                >
                  {/* Landing Content */}
                  <div
                    className="h-full absolute inset-0 transition-opacity duration-500 bg-white"
                    id="landing-content-3"
                  >
                    {/* Phone Header */}
                    <div className="bg-blue-600 text-white px-5 py-5 flex justify-between items-center">
                      <div className="w-6 h-6 flex flex-col justify-center">
                        <div className="w-4 h-0.5 bg-white mb-1"></div>
                        <div className="w-4 h-0.5 bg-white mb-1"></div>
                        <div className="w-4 h-0.5 bg-white"></div>
                      </div>
                      <h3 className="text-sm font-bold">Carmine&apos;s</h3>
                      <div className="w-6 h-6  rounded-full flex items-center justify-center"></div>
                    </div>

                    {/* Search Bar */}
                    <div className="px-3 py-2">
                      <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                        <svg
                          className="w-3 h-3 text-gray-400 mr-1"
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
                        <input
                          type="text"
                          placeholder="Search..."
                          className="flex-1 text-xs outline-none bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="px-3 mb-2">
                      <div className="flex gap-1">
                        <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          All
                        </button>
                        <button className="bg-white text-blue-600 text-xs px-2 py-1 rounded-full border border-blue-600">
                          Pizza
                        </button>
                        <button className="bg-white text-blue-600 text-xs px-2 py-1 rounded-full border border-blue-600">
                          Starters
                        </button>
                        <button className="bg-white text-blue-600 text-xs px-2 py-1 rounded-full border border-blue-600">
                          Main
                        </button>
                      </div>
                    </div>

                    {/* Special Foods */}
                    <div className="px-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xs font-bold">Special Foods</h4>
                        <span className="text-xs text-blue-600">See All</span>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-white border rounded p-2">
                          <div className="relative">
                            <img
                              src="/alfredo.webp"
                              alt="Grilled Chicken Alfredo"
                              className="w-full h-16 object-cover rounded mb-2"
                            />
                            <div className="absolute top-1 left-1 bg-blue-600 text-white text-xs px-1 py-0.5 rounded">
                              SPECIAL
                            </div>
                            <div className="absolute bottom-1 right-1 bg-blue-600 text-white text-xs px-1 py-0.5 rounded">
                              $12
                            </div>
                          </div>
                          <h5 className="text-xs font-bold">
                            Grilled Chicken Alfredo
                          </h5>
                          <p className="text-xs text-gray-600">
                            Tender grilled chicken over creamy fettuccine
                          </p>
                          <div className="flex items-center mt-1">
                            <svg
                              className="w-3 h-3 text-gray-400 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs text-gray-500">20 min</span>
                          </div>
                        </div>

                        <div className="bg-white border rounded p-2">
                          <div className="relative">
                            <img
                              src="/chickenwings.webp"
                              alt="Spicy Chicken Wings"
                              className="w-full h-16 object-cover rounded mb-2"
                            />
                            <div className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1 py-0.5 rounded">
                              HOT
                            </div>
                            <div className="absolute bottom-1 right-1 bg-blue-600 text-white text-xs px-1 py-0.5 rounded">
                              $8
                            </div>
                          </div>
                          <h5 className="text-xs font-bold">
                            Spicy Chicken Wings
                          </h5>
                          <p className="text-xs text-gray-600">
                            Crispy wings with spicy buffalo sauce
                          </p>
                          <div className="flex items-center mt-1">
                            <svg
                              className="w-3 h-3 text-gray-400 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs text-gray-500">15 min</span>
                          </div>
                        </div>

                        <div className="bg-white border rounded p-2">
                          <div className="relative">
                            <img
                              src="/pizza.webp"
                              alt="Margherita Pizza"
                              className="w-full h-16 object-cover rounded mb-2"
                            />
                            <div className="absolute top-1 left-1 bg-green-600 text-white text-xs px-1 py-0.5 rounded">
                              NEW
                            </div>
                            <div className="absolute bottom-1 right-1 bg-blue-600 text-white text-xs px-1 py-0.5 rounded">
                              $15
                            </div>
                          </div>
                          <h5 className="text-xs font-bold">Margherita Pizza</h5>
                          <p className="text-xs text-gray-600">
                            Classic Italian pizza with fresh basil
                          </p>
                          <div className="flex items-center mt-1">
                            <svg
                              className="w-3 h-3 text-gray-400 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs text-gray-500">25 min</span>
                          </div>
                        </div>

                        <div className="bg-white border rounded p-2">
                          <div className="relative">
                            <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                            <div className="absolute top-1 left-1 bg-purple-600 text-white text-xs px-1 py-0.5 rounded">
                              VEG
                            </div>
                            <div className="absolute bottom-1 right-1 bg-blue-600 text-white text-xs px-1 py-0.5 rounded">
                              $9
                            </div>
                          </div>
                          <h5 className="text-xs font-bold">Caesar Salad</h5>
                          <p className="text-xs text-gray-600">
                            Fresh romaine lettuce with parmesan
                          </p>
                          <div className="flex items-center mt-1">
                            <svg
                              className="w-3 h-3 text-gray-400 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs text-gray-500">10 min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detail Content */}
                  <div
                    className="h-full absolute inset-0 opacity-0 transition-opacity duration-500 bg-white"
                    id="detail-content-3"
                  >
                    {/* Phone Header */}
                    <div className="bg-blue-600 text-white px-4 py-4 flex justify-between items-center">
                      <button className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center"></button>
                      <h3 className="text-xs font-bold">Carmine&apos;s</h3>
                      <div className="w-5 h-5  rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Food Image */}
                    <div className="relative">
                      <img
                        src="/alfredo.webp"
                        alt="Grilled Chicken Alfredo Pasta"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        SPECIAL
                      </div>
                      <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        20 min
                      </div>
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">3D</span>
                        </button>
                      </div>
                    </div>

                    {/* Food Details */}
                    <div className="px-3 py-2 pb-16">
                      <h4 className="text-sm font-bold">
                        Grilled Chicken Alfredo Pasta
                      </h4>
                      <p className="text-blue-600 font-bold text-sm">$ 12.00</p>

                      <div className="border-t my-2"></div>

                      <div className="mb-2">
                        <h5 className="text-xs font-semibold text-gray-700 mb-1">
                          Ingredients
                        </h5>
                        <div className="flex gap-2">
                          <div className="text-center">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mb-0.5">
                              <span className="text-xs">🥛</span>
                            </div>
                            <span className="text-xs">Milk</span>
                          </div>
                          <div className="text-center">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mb-0.5">
                              <span className="text-xs">🧄</span>
                            </div>
                            <span className="text-xs">Garlic</span>
                          </div>
                          <div className="text-center">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mb-0.5">
                              <span className="text-xs">🌾</span>
                            </div>
                            <span className="text-xs">Flour</span>
                          </div>
                          <div className="text-center">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mb-0.5">
                              <span className="text-xs">🫒</span>
                            </div>
                            <span className="text-xs">Oil</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-2">
                        <h5 className="text-xs font-semibold text-gray-700 mb-0.5">
                          Description
                        </h5>
                        <p className="text-xs text-gray-600">
                          Tender grilled chicken over creamy Alfredo fettuccine.
                        </p>
                      </div>

                      <div className="mb-2">
                        <h5 className="text-xs font-semibold text-gray-700 mb-1">
                          Allergens
                        </h5>
                        <div className="flex gap-1">
                          <span className="bg-pink-100 text-pink-800 text-xs px-1 py-0.5 rounded flex items-center">
                            <span className="mr-0.5">⚠️</span>
                            Gluten
                          </span>
                          <span className="bg-pink-100 text-pink-800 text-xs px-1 py-0.5 rounded flex items-center">
                            <span className="mr-0.5">⚠️</span>
                            Milk
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t px-3 py-3 flex items-center gap-3">
                      <div className="flex items-center bg-gray-100 rounded-full">
                        <button className="w-6 h-6 flex items-center justify-center text-xs">
                          -
                        </button>
                        <span className="px-2 text-xs">1</span>
                        <button className="w-6 h-6 flex items-center justify-center text-xs">
                          +
                        </button>
                      </div>
                      <button className="flex-1 bg-blue-600 text-white py-1.5 rounded-full flex items-center justify-center text-xs">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>

                <div ref={iconsRef3} className="flex gap-6 mb-8">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/react.webp"
                      alt="React"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/springlogo.webp"
                      alt="Java"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/postgresql.webp"
                      alt="PostgreSQL"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div ref={contentRef3} className="w-1/2 pl-8">
                <h2 className="text-5xl font-bold text-slate-800 leading-tight uppercase mb-6">
                  NEXT GEN
                  <br />
                  AR MENU APP
                </h2>
                <p className="text-xl text-slate-600 mb-4">
                  A revolutionary AR-powered restaurant menu application with
                  modern design. Fully dynamic, scalable, and supports multiple
                  languages, currencies, and AR food models.
                </p>
                <p className="text-lg text-slate-700 mb-3">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-base text-slate-600 space-y-1">
                  <li>• Augmented Reality food visualization and 3D models</li>
                  <li>• Multi-language and multi-currency support</li>
                  <li>• Dynamic menu management for restaurant owners</li>
                  <li>• Real-time order processing and payment integration</li>
                </ul>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              {/* Two phones side by side */}
              <div className="flex gap-4 justify-center">
                {/* Initial state phone */}
                <div
                  className="w-[150px] h-[300px] bg-gray-800 rounded-[20px] overflow-hidden relative"
                  style={{ boxShadow: "0 0 0 4px #1f2937, 0 0 0 6px #374151" }}
                >
                  {/* Landing Content */}
                  <div className="h-full bg-white">
                    {/* Phone Header */}
                    <div className="bg-blue-600 text-white px-2 py-2 flex justify-between items-center">
                      <div className="w-3 h-3 flex flex-col justify-center">
                        <div className="w-2 h-0.5 bg-white mb-0.5"></div>
                        <div className="w-2 h-0.5 bg-white mb-0.5"></div>
                        <div className="w-2 h-0.5 bg-white"></div>
                      </div>
                      <h3 className="text-xs font-bold">Carmine&apos;s</h3>
                      <div className="w-3 h-3"></div>
                    </div>

                    {/* Search Bar */}
                    <div className="px-1 py-1">
                      <div className="flex items-center bg-gray-100 rounded px-1 py-0.5">
                        <svg
                          className="w-2 h-2 text-gray-400 mr-1"
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
                        <input
                          type="text"
                          placeholder="Search..."
                          className="flex-1 outline-none bg-transparent"
                          style={{ fontSize: "7px" }}
                        />
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="px-1 mb-1">
                      <div className="flex gap-1">
                        <button
                          className="bg-blue-600 text-white px-1 py-0.5 rounded-full"
                          style={{ fontSize: "7px" }}
                        >
                          All
                        </button>
                        <button
                          className="bg-white text-blue-600 px-1 py-0.5 rounded-full border border-blue-600"
                          style={{ fontSize: "7px" }}
                        >
                          Pizza
                        </button>
                      </div>
                    </div>

                    {/* Food Items */}
                    <div className="px-2 space-y-1">
                      <div className="bg-white border rounded p-1">
                        <div className="relative">
                          <img
                            src="/alfredo.webp"
                            alt="Grilled Chicken Alfredo"
                            className="w-full h-10 object-cover rounded mb-1"
                          />
                          <div
                            className="absolute top-0.5 left-0.5 bg-blue-600 text-white px-0.5 py-0.5 rounded"
                            style={{ fontSize: "6px" }}
                          >
                            SPECIAL
                          </div>
                          <div
                            className="absolute bottom-0.5 right-0.5 bg-blue-600 text-white px-0.5 py-0.5 rounded"
                            style={{ fontSize: "6px" }}
                          >
                            $12
                          </div>
                        </div>
                        <h5 className="font-bold" style={{ fontSize: "8px" }}>
                          Grilled Chicken Alfredo
                        </h5>
                        <p className="text-gray-600" style={{ fontSize: "7px" }}>
                          Tender grilled chicken
                        </p>
                        <div className="flex items-center mt-0.5">
                          <svg
                            className="w-2 h-2 text-gray-400 mr-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span
                            className="text-gray-500"
                            style={{ fontSize: "7px" }}
                          >
                            20 min
                          </span>
                        </div>
                      </div>

                      <div className="bg-white border rounded p-1">
                        <div className="relative">
                          <img
                            src="/chickenwings.webp"
                            alt="Spicy Chicken Wings"
                            className="w-full h-10 object-cover rounded mb-1"
                          />
                          <div
                            className="absolute top-0.5 left-0.5 bg-red-600 text-white px-0.5 py-0.5 rounded"
                            style={{ fontSize: "6px" }}
                          >
                            HOT
                          </div>
                          <div
                            className="absolute bottom-0.5 right-0.5 bg-blue-600 text-white px-0.5 py-0.5 rounded"
                            style={{ fontSize: "6px" }}
                          >
                            $8
                          </div>
                        </div>
                        <h5 className="font-bold" style={{ fontSize: "8px" }}>
                          Spicy Chicken Wings
                        </h5>
                        <p className="text-gray-600" style={{ fontSize: "7px" }}>
                          Crispy wings
                        </p>
                        <div className="flex items-center mt-0.5">
                          <svg
                            className="w-2 h-2 text-gray-400 mr-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span
                            className="text-gray-500"
                            style={{ fontSize: "7px" }}
                          >
                            15 min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final state phone */}
                <div
                  className="w-[150px] h-[300px] bg-gray-800 rounded-[20px] overflow-hidden relative"
                  style={{ boxShadow: "0 0 0 4px #1f2937, 0 0 0 6px #374151" }}
                >
                  {/* Detail Content */}
                  <div className="h-full bg-white">
                    {/* Phone Header */}
                    <div className="bg-blue-600 text-white px-2 py-2 flex justify-between items-center">
                      <button
                        className="w-3 h-3 bg-blue-600 rounded flex items-center justify-center"
                        aria-label="Bid on item"
                      ></button>
                      <h3 className="text-xs font-bold">Carmine&apos;s</h3>
                      <div className="w-3 h-3 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Food Image */}
                    <div className="relative">
                      <img
                        src="/alfredo.webp"
                        alt="Grilled Chicken Alfredo Pasta"
                        className="w-full h-16 object-cover"
                      />
                      <div
                        className="absolute top-1 right-1 bg-blue-600 text-white px-1 py-0.5 rounded"
                        style={{ fontSize: "6px" }}
                      >
                        SPECIAL
                      </div>
                      <div
                        className="absolute bottom-1 left-1 bg-gray-800 text-white px-1 py-0.5 rounded flex items-center"
                        style={{ fontSize: "6px" }}
                      >
                        <svg
                          className="w-2 h-2 mr-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        20 min
                      </div>
                      <div className="absolute bottom-1 right-1">
                        <button className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <span
                            className="text-white font-bold"
                            style={{ fontSize: "7px" }}
                          >
                            3D
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Food Details */}
                    <div className="px-2 py-2">
                      <h4 className="font-bold" style={{ fontSize: "9px" }}>
                        Grilled Chicken Alfredo
                      </h4>
                      <p
                        className="text-blue-600 font-bold"
                        style={{ fontSize: "8px" }}
                      >
                        $ 12.00
                      </p>

                      <div className="border-t my-1"></div>

                      <div className="mb-2">
                        <h5
                          className="font-semibold text-gray-700 mb-1"
                          style={{ fontSize: "7px" }}
                        >
                          Ingredients
                        </h5>
                        <div className="flex gap-1">
                          <div className="text-center">
                            <div className="w-3 h-3 bg-gray-100 rounded-full flex items-center justify-center mb-0.5">
                              <span style={{ fontSize: "6px" }}>🥛</span>
                            </div>
                            <span style={{ fontSize: "6px" }}>Milk</span>
                          </div>
                          <div className="text-center">
                            <div className="w-3 h-3 bg-gray-100 rounded-full flex items-center justify-center mb-0.5">
                              <span style={{ fontSize: "6px" }}>🧄</span>
                            </div>
                            <span style={{ fontSize: "6px" }}>Garlic</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-2">
                        <h5
                          className="font-semibold text-gray-700 mb-1"
                          style={{ fontSize: "7px" }}
                        >
                          Description
                        </h5>
                        <p className="text-gray-600" style={{ fontSize: "7px" }}>
                          Tender grilled chicken over creamy Alfredo fettuccine.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t px-2 py-2 flex items-center gap-2">
                      <div className="flex items-center bg-gray-100 rounded-full">
                        <button
                          className="w-4 h-4 flex items-center justify-center"
                          style={{ fontSize: "8px" }}
                        >
                          -
                        </button>
                        <span className="px-1" style={{ fontSize: "8px" }}>
                          1
                        </span>
                        <button
                          className="w-4 h-4 flex items-center justify-center"
                          style={{ fontSize: "8px" }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="flex-1 bg-blue-600 text-white py-1 rounded-full flex items-center justify-center"
                        style={{ fontSize: "7px" }}
                      >
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech stack icons */}
              <div className="flex gap-4 justify-center mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/react.webp"
                    alt="React"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src={typeof window !== 'undefined' && window.innerWidth <= 768 ? '/springlogo-mobile.webp' : '/springlogo.webp'}
                    alt="Java"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/postgresql.webp"
                    alt="PostgreSQL"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="text-left">
                <p className="text-lg text-slate-600 mb-4">
                  A revolutionary AR-powered restaurant menu application with
                  modern design. Fully dynamic, scalable, and supports multiple
                  languages, currencies, and AR food models.
                </p>
                <p className="text-base text-slate-700 mb-3">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Augmented Reality food visualization and 3D models</li>
                  <li>• Multi-language and multi-currency support</li>
                  <li>• Dynamic menu management for restaurant owners</li>
                  <li>• Real-time order processing and payment integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: E-Evidence System */}
        <div className="section-4 min-h-screen lg:h-screen relative py-8 lg:py-12 overflow-x-hidden">
          <div className="container mx-auto px-4">
            {/* Mobile Title */}
            <h1 className="lg:hidden text-2xl font-bold text-slate-800 mb-4">
              E-Evidence System
            </h1>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center min-h-[80vh]">
              {/* Left side with rectangle and icons */}
              <div className="w-1/2 pr-8">
                {/* Desktop Title positioned just above rectangle */}
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-left font-recoleta">
                  E-Evidence System
                </h1>
                {/* Rectangle with content */}
                <div
                  ref={rectangleRef4}
                  className="w-[600px] h-[400px] bg-white rounded-lg mb-8 overflow-hidden relative"
                >
                  {/* Landing Page Content */}
                  <div
                    className="p-4 h-full absolute inset-0 transition-opacity duration-500"
                    id="landing-content-4"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-blue-600">
                        Investigation Dashboard
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">INV-2025-09-00386</span>
                        <img
                          src="/employee.webp"
                          alt="Investigator"
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-4">
                      <div className="flex items-center border rounded-lg px-3 py-2">
                        <input
                          type="text"
                          placeholder="Search investigations..."
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

                    {/* Dashboard Grid */}
                    <div className="grid grid-cols-2 gap-2 h-64">
                      {/* Calendar */}
                      <div className="bg-gray-50 p-2 rounded border border-gray-300">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-xs font-semibold text-gray-800">Calendar</div>
                          <div className="flex space-x-1">
                            <button className="text-xs text-gray-500">‹</button>
                            <button className="text-xs text-gray-500">›</button>
                          </div>
                        </div>
                        <div className="text-xs text-center text-gray-600 mb-1">September 2025</div>
                        <div className="grid grid-cols-7 gap-0.5 text-xs">
                          <div className="text-center text-gray-500 font-semibold">Su</div>
                          <div className="text-center text-gray-500 font-semibold">Mo</div>
                          <div className="text-center text-gray-500 font-semibold">Tu</div>
                          <div className="text-center text-gray-500 font-semibold">We</div>
                          <div className="text-center text-gray-500 font-semibold">Th</div>
                          <div className="text-center text-gray-500 font-semibold">Fr</div>
                          <div className="text-center text-gray-500 font-semibold">Sa</div>

                          <div className="text-center text-gray-400 p-0.5">31</div>
                          <div className="text-center p-0.5">1</div>
                          <div className="text-center p-0.5">2</div>
                          <div className="text-center p-0.5">3</div>
                          <div className="text-center p-0.5">4</div>
                          <div className="text-center p-0.5">5</div>
                          <div className="text-center p-0.5">6</div>

                          <div className="text-center p-0.5 text-red-600 font-bold">7</div>
                          <div className="text-center p-0.5">8</div>
                          <div className="text-center p-0.5">9</div>
                          <div className="text-center p-0.5 bg-red-100 rounded text-red-800">10</div>
                          <div className="text-center p-0.5">11</div>
                          <div className="text-center p-0.5">12</div>
                          <div className="text-center p-0.5">13</div>

                          <div className="text-center p-0.5">14</div>
                          <div className="text-center p-0.5">15</div>
                          <div className="text-center p-0.5">16</div>
                          <div className="text-center p-0.5">17</div>
                          <div className="text-center p-0.5">18</div>
                          <div className="text-center p-0.5">19</div>
                          <div className="text-center p-0.5">20</div>

                          <div className="text-center p-0.5 text-red-600">21</div>
                          <div className="text-center p-0.5 bg-gray-800 text-white rounded font-bold">22</div>
                          <div className="text-center p-0.5">23</div>
                          <div className="text-center p-0.5">24</div>
                          <div className="text-center p-0.5">25</div>
                          <div className="text-center p-0.5">26</div>
                          <div className="text-center p-0.5 bg-blue-100 rounded text-blue-800">27</div>
                        </div>
                      </div>

                      {/* Active Investigations by Priority */}
                      <div className="bg-gray-50 p-2 rounded border border-gray-300">
                        <div className="text-xs font-semibold text-gray-800 mb-1">Priority</div>
                        <div className="grid grid-cols-2 gap-2">
                          {/* Critical */}
                          <div className="text-center">
                            <div className="relative w-8 h-8 mx-auto mb-1">
                              <svg className="w-8 h-8 transform -rotate-90">
                                <circle cx="16" cy="16" r="12" stroke="#e5e7eb" strokeWidth="2" fill="transparent" />
                                <circle cx="16" cy="16" r="12" stroke="#dc2626" strokeWidth="2" fill="transparent"
                                  strokeDasharray="75" strokeDashoffset="73" className="transition-all duration-300" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs font-bold text-red-600">1%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                              <span className="text-xs text-gray-700">Critical</span>
                            </div>
                          </div>

                          {/* High */}
                          <div className="text-center">
                            <div className="relative w-8 h-8 mx-auto mb-1">
                              <svg className="w-8 h-8 transform -rotate-90">
                                <circle cx="16" cy="16" r="12" stroke="#e5e7eb" strokeWidth="2" fill="transparent" />
                                <circle cx="16" cy="16" r="12" stroke="#f59e0b" strokeWidth="2" fill="transparent"
                                  strokeDasharray="75" strokeDashoffset="71" className="transition-all duration-300" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs font-bold text-yellow-600">2%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                              <span className="text-xs text-gray-700">High</span>
                            </div>
                          </div>

                          {/* Medium */}
                          <div className="text-center">
                            <div className="relative w-8 h-8 mx-auto mb-1">
                              <svg className="w-8 h-8 transform -rotate-90">
                                <circle cx="16" cy="16" r="12" stroke="#e5e7eb" strokeWidth="2" fill="transparent" />
                                <circle cx="16" cy="16" r="12" stroke="#3b82f6" strokeWidth="2" fill="transparent"
                                  strokeDasharray="75" strokeDashoffset="60" className="transition-all duration-300" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs font-bold text-blue-600">15%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-xs text-gray-700">Medium</span>
                            </div>
                          </div>

                          {/* Low */}
                          <div className="text-center">
                            <div className="relative w-8 h-8 mx-auto mb-1">
                              <svg className="w-8 h-8 transform -rotate-90">
                                <circle cx="16" cy="16" r="12" stroke="#e5e7eb" strokeWidth="2" fill="transparent" />
                                <circle cx="16" cy="16" r="12" stroke="#10b981" strokeWidth="2" fill="transparent"
                                  strokeDasharray="75" strokeDashoffset="45" className="transition-all duration-300" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs font-bold text-green-600">30%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                              <span className="text-xs text-gray-700">Low</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Investigations by Status */}
                      <div className="bg-gray-50 p-2 rounded border border-gray-300">
                        <div className="text-xs font-semibold text-gray-800 mb-1">By Status</div>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-700">Active</span>
                            </div>
                            <span className="text-xs font-bold text-gray-800">24</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-xs text-gray-700">Pending</span>
                            </div>
                            <span className="text-xs font-bold text-gray-800">8</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-xs text-gray-700">Review</span>
                            </div>
                            <span className="text-xs font-bold text-gray-800">12</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-700">Closed</span>
                            </div>
                            <span className="text-xs font-bold text-gray-800">3</span>
                          </div>
                        </div>
                      </div>

                      {/* Investigations over time */}
                      <div className="bg-gray-50 p-2 rounded border border-gray-300">
                        <div className="text-xs font-semibold text-gray-800 mb-1">Over Time</div>
                        <div className="h-16 bg-white rounded flex items-end justify-between px-1">
                          <div className="bg-blue-400 w-2 rounded-t" style={{ height: "60%" }}></div>
                          <div className="bg-blue-400 w-2 rounded-t" style={{ height: "80%" }}></div>
                          <div className="bg-blue-400 w-2 rounded-t" style={{ height: "45%" }}></div>
                          <div className="bg-blue-400 w-2 rounded-t" style={{ height: "90%" }}></div>
                          <div className="bg-blue-400 w-2 rounded-t" style={{ height: "70%" }}></div>
                          <div className="bg-blue-400 w-2 rounded-t" style={{ height: "85%" }}></div>
                          <div className="bg-blue-400 w-2 rounded-t" style={{ height: "95%" }}></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 text-center">Last 7 days</div>
                      </div>
                    </div>
                  </div>

                  {/* Detail Content */}
                  <div
                    className="p-4 h-full absolute inset-0 opacity-0 transition-opacity duration-500"
                    id="detail-content-4"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-blue-600">
                        Blueprint Matrix
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Financial Fraud</span>
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Legal Elements Table */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold mb-2">Legal Elements</div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-4 gap-1 text-xs">
                          <div className="font-semibold text-gray-700">Element</div>
                          <div className="font-semibold text-blue-700">Have</div>
                          <div className="font-semibold text-red-700">Lack</div>
                          <div className="font-semibold text-green-700">Tasks</div>
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-xs">
                          <div className="bg-gray-100 p-1 rounded">1. A person who</div>
                          <div className="bg-blue-50 p-1 rounded text-blue-800">Suspect identified</div>
                          <div className="bg-red-50 p-1 rounded text-red-800">Financial records</div>
                          <div className="bg-green-50 p-1 rounded text-green-800">Bank audit</div>
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-xs">
                          <div className="bg-gray-100 p-1 rounded">2. Person</div>
                          <div className="bg-blue-50 p-1 rounded text-blue-800">Transaction logs</div>
                          <div className="bg-red-50 p-1 rounded text-red-800">Digital signatures</div>
                          <div className="bg-green-50 p-1 rounded text-green-800">IT analysis</div>
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-xs">
                          <div className="bg-gray-100 p-1 rounded">3. Who received</div>
                          <div className="bg-blue-50 p-1 rounded text-blue-800">Receipt records</div>
                          <div className="bg-red-50 p-1 rounded text-red-800">Witness statements</div>
                          <div className="bg-green-50 p-1 rounded text-green-800">Interview witnesses</div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 bg-yellow-50 p-2 rounded text-xs">
                      <div className="font-semibold text-yellow-800">Progress: 25%</div>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                        <div className="bg-yellow-500 h-1 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech stack icons */}
                <div ref={iconsRef4} className="flex gap-6 mb-8">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/react.webp"
                      alt="React"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/springlogo.webp"
                      alt="Java"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img
                      src="/postgresql.webp"
                      alt="PostgreSQL"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right side text */}
              <div ref={contentRef4} className="w-1/2 pl-8">
                <h2 className="text-4xl font-bold text-slate-800 leading-tight uppercase mb-8">
                  E-EVIDENCE
                  <br />
                  INVESTIGATION SYSTEM
                </h2>
                <p className="text-2xl text-slate-600 mb-6">
                  A comprehensive investigation management system for legal professionals.
                  Streamlines case analysis, tracks evidence, and determines court readiness.
                </p>
                <p className="text-xl text-slate-700 mb-4">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-lg text-slate-600 space-y-2">
                  <li>
                    • Blueprint Matrix for systematic legal breakdown
                  </li>
                  <li>• Evidence scoring and progress tracking</li>
                  <li>• Entity management for suspects and witnesses</li>
                  <li>• Court readiness assessment automation</li>
                </ul>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              {/* Two rectangles stacked vertically */}
              <div className="flex flex-col gap-4 items-center">
                {/* Initial state rectangle */}
                <div className="w-[350px] h-[220px] bg-white rounded-lg overflow-hidden relative">
                  {/* Landing Page Content */}
                  <div className="p-3 h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-bold text-blue-600">
                        Investigation Dashboard
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-600">INV-2025-09-00386</span>
                        <img
                          src="/employee.webp"
                          alt="Investigator"
                          className="w-4 h-4 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-2">
                      <div className="flex items-center border rounded px-2 py-1">
                        <input
                          type="text"
                          placeholder="Search investigations..."
                          className="flex-1 text-xs outline-none"
                        />
                        <svg
                          className="w-3 h-3 text-gray-400"
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

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-1">
                      <div className="border rounded p-1">
                        <div className="text-xs font-semibold text-green-600">Active</div>
                        <div className="text-xs text-blue-600">24</div>
                      </div>
                      <div className="border rounded p-1">
                        <div className="text-xs font-semibold text-blue-600">Total</div>
                        <div className="text-xs text-blue-600">156</div>
                      </div>
                      <div className="border rounded p-1">
                        <div className="text-xs font-semibold text-orange-600">Pending</div>
                        <div className="text-xs text-blue-600">8</div>
                      </div>
                      <div className="border rounded p-1">
                        <div className="text-xs font-semibold text-red-600">Closed</div>
                        <div className="text-xs text-blue-600">3</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final state rectangle */}
                <div className="w-[350px] h-[220px] bg-white rounded-lg overflow-hidden relative">
                  {/* Detail Content */}
                  <div className="p-3 h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-bold text-blue-600">
                        Blueprint Matrix
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-600">Financial Fraud</span>
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Legal Elements */}
                    <div className="mb-2">
                      <div className="text-xs font-semibold mb-1">Legal Elements</div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-4 gap-1 text-xs">
                          <div className="font-semibold text-gray-700">Element</div>
                          <div className="font-semibold text-blue-700">Have</div>
                          <div className="font-semibold text-red-700">Lack</div>
                          <div className="font-semibold text-green-700">Tasks</div>
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-xs">
                          <div className="bg-gray-100 p-1 rounded">1. A person who</div>
                          <div className="bg-blue-50 p-1 rounded text-blue-800">Suspect identified</div>
                          <div className="bg-red-50 p-1 rounded text-red-800">Financial records</div>
                          <div className="bg-green-50 p-1 rounded text-green-800">Bank audit</div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-2 bg-yellow-50 p-1 rounded text-xs">
                      <div className="font-semibold text-yellow-800">Progress: 25%</div>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                        <div className="bg-yellow-500 h-1 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech stack icons */}
              <div className="flex gap-4 justify-center mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/react.webp"
                    alt="React"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src={typeof window !== 'undefined' && window.innerWidth <= 768 ? '/springlogo-mobile.webp' : '/springlogo.webp'}
                    alt="Java"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/postgresql.webp"
                    alt="PostgreSQL"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="text-left">
                <p className="text-lg text-slate-600 mb-4">
                  A comprehensive investigation management system for legal professionals.
                  Streamlines case analysis, tracks evidence, and determines court readiness.
                </p>
                <p className="text-base text-slate-700 mb-3">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>
                    • Blueprint Matrix for systematic legal breakdown
                  </li>
                  <li>• Evidence scoring and progress tracking</li>
                  <li>• Entity management for suspects and witnesses</li>
                  <li>• Court readiness assessment automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
