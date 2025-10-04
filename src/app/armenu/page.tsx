"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ARMenuPage = () => {
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
          section: ".armenu-section", 
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
          trigger: ".armenu-section",
          start: "top top",
          end: "+=800%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      // Hide content, icons, and title when scrolling starts (like other projects)
      tl.to([contentRef.current, iconsRef.current, ".armenu-section h1"], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.9");

      // Move rectangle to center using getBoundingClientRect (like Projects section)
      tl.to(rectangleRef.current, {
        x: () => {
          const rect = rectangleRef.current?.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const rectWidth = rect?.width || 200;
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
      .to("#detail-content", {
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
        <div className="armenu-section hidden lg:flex items-center h-screen">
          {/* Left side with rectangle */}
          <div className="w-1/2 pr-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-left -mt-2">
              AR Menu App
            </h1>
            
            {/* Rectangle with app interface mockups */}
            <div
              ref={rectangleRef}
              className="w-[200px] h-[400px] bg-gray-800 rounded-[40px] mb-8 overflow-hidden relative border-4 border-gray-600"
              style={{ boxShadow: "0 0 0 8px #1f2937, 0 0 0 12px #374151, 0 8px 32px rgba(0,0,0,0.3)" }}
            >
              {/* Landing Content */}
              <div
                className="h-full absolute inset-0 transition-opacity duration-500 bg-white"
                id="landing-content"
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
                id="detail-content"
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

            {/* Tech stack icons */}
            <div ref={iconsRef} className="icons flex gap-4 justify-center mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                <img src="/react.webp" alt="React" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                <img src="/springlogo.webp" alt="Spring Boot" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                <img src="/postgresql.webp" alt="PostgreSQL" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div ref={contentRef} className="w-1/2 pl-8">
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
        <div className="lg:hidden">
          <div className="w-full max-w-sm mx-auto mb-8">
            <div className="w-full h-[300px] bg-gray-800 rounded-[20px] overflow-hidden relative border-2 border-gray-600"
                 style={{ boxShadow: "0 0 0 4px #1f2937, 0 0 0 6px #374151, 0 4px 16px rgba(0,0,0,0.3)" }}>
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

                {/* Mobile content */}
                <div className="px-2 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-bold">Special Foods</h4>
                    <span className="text-xs text-blue-600">See All</span>
                  </div>
                  <div className="space-y-1">
                    <div className="bg-white border rounded p-1">
                      <div className="relative">
                        <img src="/alfredo.webp" alt="Grilled Chicken Alfredo" className="w-full h-10 object-cover rounded mb-1" />
                        <div className="absolute top-0.5 left-0.5 bg-blue-600 text-white px-0.5 py-0.5 rounded" style={{ fontSize: "6px" }}>
                          SPECIAL
                        </div>
                        <div className="absolute bottom-0.5 right-0.5 bg-blue-600 text-white px-0.5 py-0.5 rounded" style={{ fontSize: "6px" }}>
                          $12
                        </div>
                      </div>
                      <h5 className="font-bold" style={{ fontSize: "8px" }}>Grilled Chicken Alfredo</h5>
                      <p className="text-gray-600" style={{ fontSize: "7px" }}>Tender grilled chicken</p>
                    </div>
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
              <img src="/postgresql.webp" alt="PostgreSQL" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Mobile Text content */}
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
  );
};

export default ARMenuPage;
