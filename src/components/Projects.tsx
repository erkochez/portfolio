"use client";

import gsap from "gsap";
import React, { useRef } from "react";
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

  useGSAP(
    () => {
      // Only run animations on desktop (lg and above)
      if (window.innerWidth < 1024) return;

      // Kill all existing ScrollTriggers to prevent conflicts
      ScrollTrigger.killAll();
      
      // Reset all elements to initial state with more comprehensive clearing
      gsap.set([rectangleRef.current, rectangleRef2.current, rectangleRef3.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        skewX: 0,
        skewY: 0,
        transformOrigin: "50% 50%"
      });
      
      // Reset content and icons elements
      gsap.set([contentRef.current, contentRef2.current, contentRef3.current, iconsRef.current, iconsRef2.current, iconsRef3.current], {
        clearProps: "all",
        opacity: 1,
        y: 0,
        scale: 1
      });

      // Throttle scroll events to prevent animation conflicts
      // Optimize for mobile performance
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: true,
        syncInterval: window.innerWidth < 768 ? 120 : 60 // Slower refresh on mobile
      });
      
      // Header animation
      if (headerRef.current) {
        const title = headerRef.current.querySelector('h2');
        const description = headerRef.current.querySelector('p');
        
        gsap.set([title, description], { opacity: 0, y: 60 });
        gsap.to([title, description], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
      
      // Initial stage animations for all sections (entrance animations)
      const sections = [
        { 
          section: ".section-1", 
          rectangle: rectangleRef.current, 
          content: contentRef.current, 
          icons: iconsRef.current,
          title: ".section-1 .w-1\\/2 h1" // Desktop title inside left container
        },
        { 
          section: ".section-2", 
          rectangle: rectangleRef2.current, 
          content: contentRef2.current, 
          icons: iconsRef2.current,
          title: ".section-2 .w-1\\/2 h1" // Desktop title inside left container
        },
        { 
          section: ".section-3", 
          rectangle: rectangleRef3.current, 
          content: contentRef3.current, 
          icons: iconsRef3.current,
          title: ".section-3 .w-1\\/2 h1" // Desktop title inside left container
        }
      ];

      sections.forEach(({ section, rectangle, content, icons, title }) => {
        // Set initial states (hidden)
        gsap.set([title, rectangle, content, icons], {
          opacity: 0,
          y: 60,
          scale: 0.9
        });

          // Create entrance timeline with proper queuing
          const entranceTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true
            }
          });

        // Animate elements in sequence
        entranceTl
          .to(title, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          })
          .to(rectangle, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out"
          }, "-=0.4")
          .to(content, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.6")
          .to(icons, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.4");
      });
      
      // First section animation
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-1",
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      tl1.to(".section-1 .h-screen", {
        y: "-100vh",
        duration: 1.3,
        ease: "power2.inOut",
      });

      tl1.to(
        [contentRef.current, iconsRef.current],
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "-=0.9"
      );

      tl1
        .to(
          rectangleRef.current,
          {
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
          },
          "-=0.7"
        )
        .to(
          "#landing-content",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.7"
        )
        .to(
          "#auction-content",
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.3"
        )
        .to({}, { duration: 0.7 }); // Pause at the end

      // Second section animations
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-2",
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      tl2.to(".section-2 .h-screen", {
        y: "-100vh",
        duration: 1.3,
        ease: "power2.inOut",
      });

      tl2.to(
        [contentRef2.current, iconsRef2.current],
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "-=0.9"
      );

      tl2
        .to(
          rectangleRef2.current,
          {
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
          },
          "-=0.7"
        )
        .to(
          "#landing-content-2",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.7"
        )
        .to(
          "#detail-content-2",
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.3"
        )
        .to({}, { duration: 0.7 }); // Pause at the end

      // Third section animations
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-3",
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      tl3.to(".section-3 .h-screen", {
        y: "-100vh",
        duration: 1.3,
        ease: "power2.inOut",
      });

      tl3.to(
        [contentRef3.current, iconsRef3.current],
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "-=0.9"
      );

      tl3
        .to(
          rectangleRef3.current,
          {
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
          },
          "-=0.7"
        )
        .to(
          "#landing-content-3",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.7"
        )
        .to(
          "#detail-content-3",
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.3"
        )
        .to({}, { duration: 0.7 }); // Pause at the end
    },
    { 
      scope: containerRef,
      dependencies: [],
      revertOnUpdate: true
    }
  );

  // Cleanup function to reset everything on unmount
  React.useEffect(() => {
    const handleResize = () => {
      // Reset animations on resize
      ScrollTrigger.killAll();
      gsap.set([rectangleRef.current, rectangleRef2.current, rectangleRef3.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        skewX: 0,
        skewY: 0,
        transformOrigin: "50% 50%"
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Reset animations when page becomes visible
        ScrollTrigger.killAll();
        gsap.set([rectangleRef.current, rectangleRef2.current, rectangleRef3.current], {
          clearProps: "all",
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          skewX: 0,
          skewY: 0,
          transformOrigin: "50% 50%"
        });
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Kill all ScrollTriggers
      ScrollTrigger.killAll();
      
      // Reset all elements to initial state
      gsap.set([rectangleRef.current, rectangleRef2.current, rectangleRef3.current], {
        clearProps: "all",
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        skewX: 0,
        skewY: 0,
        transformOrigin: "50% 50%"
      });
      
      // Reset content and icons elements
      gsap.set([contentRef.current, contentRef2.current, contentRef3.current, iconsRef.current, iconsRef2.current, iconsRef3.current], {
        clearProps: "all",
        opacity: 1,
        y: 0,
        scale: 1
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-50 overflow-x-hidden">
      <div className="container mx-auto px-4 mb-16" ref={headerRef}>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-recoleta">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing my most impactful work across different industries and
            technologies.
          </p>
        </div>
      </div>
      <div
        ref={containerRef}
        className="min-h-0 lg:min-h-[900vh] overflow-x-hidden"
      >
        {/* Section 1: Auction Platform */}
        <div className="section-1 min-h-screen lg:h-screen relative py-8 lg:py-12 overflow-x-hidden">
          <div className="container mx-auto px-4">
          {/* Mobile Title */}
          <h1 className="lg:hidden text-2xl font-bold text-slate-800 mb-4">
            Online Auction Center
          </h1>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center min-h-[80vh]">
          {/* Left side with rectangle and icons */}
          <div className="w-1/2 pr-8">
            {/* Desktop Title positioned just above rectangle */}
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-left">
              Online Auction Center
            </h1>
              {/* Rectangle with content */}
              <div
                ref={rectangleRef}
                className="w-[600px] h-[400px] bg-white rounded-lg mb-8 overflow-hidden relative"
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
                        src={typeof window !== 'undefined' && window.innerWidth <= 768 ? '/macbookpro-mobile.webp' : '/macbookpro.webp'}
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
              <div className="w-[350px] h-[220px] bg-white rounded-lg overflow-hidden relative">
                {/* Landing Page Content */}
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
            Bank Workflow
          </h1>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center min-h-[80vh]">
            <div className="w-1/2 pr-8">
            {/* Desktop Title positioned just above rectangle */}
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              Bank Workflow
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
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              AR Menu App
            </h1>
              <div
                ref={rectangleRef3}
                className="w-[200px] h-[400px] bg-gray-800 rounded-[40px] mb-8 overflow-hidden relative ml-0 border-4 border-gray-600"
                style={{ boxShadow: "0 0 0 8px #1f2937, 0 0 0 12px #374151, 0 8px 32px rgba(0,0,0,0.3)" }}
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
                className="w-[150px] h-[300px] bg-gray-800 rounded-[20px] overflow-hidden relative border-2 border-gray-600"
                style={{ boxShadow: "0 0 0 4px #1f2937, 0 0 0 6px #374151, 0 4px 16px rgba(0,0,0,0.3)" }}
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
                className="w-[150px] h-[300px] bg-gray-800 rounded-[20px] overflow-hidden relative border-2 border-gray-600"
                style={{ boxShadow: "0 0 0 4px #1f2937, 0 0 0 6px #374151, 0 4px 16px rgba(0,0,0,0.3)" }}
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
      </div>
    </section>
  );
};

export default Projects;
