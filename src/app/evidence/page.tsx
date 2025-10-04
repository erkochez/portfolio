"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const EvidencePage = () => {
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
          section: ".evidence-section", 
          rectangle: rectangleRef.current, 
          content: contentRef.current, 
          icons: iconsRef.current
        }
      ];

      sections.forEach(({ rectangle, content, icons }) => {
        // Set initial states (VISIBLE initially like other projects)
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
          trigger: ".evidence-section",
          start: "top top",
          end: "+=800%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      // Hide content, icons, and title when scrolling starts (like other projects)
      tl.to([contentRef.current, iconsRef.current, ".evidence-section h1"], {
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
      tl.to("#app-overview", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.8")
      .to("#investigation-form", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.2")
      .to("#investigation-form", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }, "+=2.0")
      .to("#blueprint-matrix", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.2")
      .to("#blueprint-matrix", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }, "+=2.0")
      .to("#dashboard", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      }, "-=0.2")
      .to({}, { duration: 2.0 }); // Pause at the end
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div ref={containerRef} className="h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
      

        {/* Desktop Layout */}
        <div className="evidence-section hidden lg:flex items-center h-screen">
          {/* Left side with rectangle */}
          <div className="w-1/2 pr-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-left -mt-2">
              E-Evidence System
            </h1>
            
            {/* Rectangle with app interface mockups */}
            <div
              ref={rectangleRef}
              className="w-[600px] h-[400px] bg-white rounded-lg mb-8 overflow-hidden relative shadow-lg"
            >
              {/* App Overview Content */}
              <div
                className="p-6 h-full absolute inset-0 transition-opacity duration-500"
                id="app-overview"
              >
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-1/4 bg-gray-800 text-white p-3 rounded-l-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-6 h-6 bg-blue-500 rounded mr-2"></div>
                      <span className="text-sm font-bold">E-Evidence</span>
                    </div>
                    <nav className="space-y-2">
                      <div className="text-xs font-semibold text-gray-400 mb-2">Navigation</div>
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Investigations</div>
                      <div className="text-gray-300 px-2 py-1 text-xs">Cases</div>
                      <div className="text-gray-300 px-2 py-1 text-xs">Blueprints</div>
                      <div className="text-gray-300 px-2 py-1 text-xs">Matrix</div>
                      <div className="text-gray-300 px-2 py-1 text-xs">Evidence</div>
                    </nav>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Investigation Overview</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                        <div className="text-sm font-semibold text-blue-800">Purpose</div>
                        <div className="text-xs text-blue-700">Systematic case management for investigators</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                        <div className="text-sm font-semibold text-green-800">Core Question</div>
                        <div className="text-xs text-green-700">"Do I have enough evidence?"</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                        <div className="text-sm font-semibold text-purple-800">Solution</div>
                        <div className="text-xs text-purple-700">Blueprint Matrix system</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investigation Form Content */}
              <div
                className="p-4 h-full absolute inset-0 transition-opacity duration-500 opacity-0"
                id="investigation-form"
              >
                <div className="bg-gray-50 h-full rounded p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Create Investigation</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-600 mb-1 block">Investigation #</label>
                        <input className="w-full border rounded px-2 py-1 text-xs" value="INV-2025-09-00386" readOnly />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 mb-1 block">Status</label>
                        <select className="w-full border rounded px-2 py-1 text-xs">
                          <option>In Progress</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Court</label>
                      <select className="w-full border rounded px-2 py-1 text-xs">
                        <option>Select competent court</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Description</label>
                      <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Investigation description..." />
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">Investigation Acts</h4>
                      <div className="text-xs text-blue-700">Add criminal acts and entities to structure your case</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blueprint Matrix Content */}
              <div
                className="p-4 h-full absolute inset-0 transition-opacity duration-500 opacity-0"
                id="blueprint-matrix"
              >
                <div className="h-full">
                  <div className="bg-gray-800 text-white p-2 rounded-t text-sm font-semibold">Legal Elements</div>
                  <div className="bg-white border rounded-b h-5/6 p-2">
                    <div className="text-xs text-gray-600 mb-2">Crime Type: Financial Fraud</div>
                    <div className="grid grid-cols-5 gap-1 text-xs">
                      <div className="font-semibold text-gray-700">Legal Elements</div>
                      <div className="font-semibold text-blue-700">What we have</div>
                      <div className="font-semibold text-red-700">What we lack</div>
                      <div className="font-semibold text-green-700">Tasks</div>
                      <div className="font-semibold text-purple-700">Proof Strength</div>
                    </div>
                    <div className="space-y-1 mt-2">
                      <div className="grid grid-cols-5 gap-1 text-xs">
                        <div className="bg-gray-100 p-1.5 rounded">1. A person who</div>
                        <div className="bg-blue-50 p-1.5 rounded text-blue-800">Suspect identified</div>
                        <div className="bg-red-50 p-1.5 rounded text-red-800">Financial records</div>
                        <div className="bg-green-50 p-1.5 rounded text-green-800">Bank audit</div>
                        <div className="bg-purple-50 p-1.5 rounded flex justify-center items-center">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full border border-yellow-500"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-xs">
                        <div className="bg-gray-100 p-1.5 rounded">2. Person</div>
                        <div className="bg-blue-50 p-1.5 rounded text-blue-800">Transaction logs</div>
                        <div className="bg-red-50 p-1.5 rounded text-red-800">Digital signatures</div>
                        <div className="bg-green-50 p-1.5 rounded text-green-800">IT analysis</div>
                        <div className="bg-purple-50 p-1.5 rounded flex justify-center items-center">
                          <div className="w-4 h-4 bg-green-400 rounded-full border border-green-500"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-xs">
                        <div className="bg-gray-100 p-1.5 rounded">3. Who received</div>
                        <div className="bg-blue-50 p-1.5 rounded text-blue-800">Receipt records</div>
                        <div className="bg-red-50 p-1.5 rounded text-red-800">Witness statements</div>
                        <div className="bg-green-50 p-1.5 rounded text-green-800">Interview witnesses</div>
                        <div className="bg-purple-50 p-1.5 rounded flex justify-center items-center">
                          <div className="w-4 h-4 bg-red-400 rounded-full border border-red-500"></div>
                        </div>
                      </div>
                      {/* Blurry 4th element to show there are more */}
                      <div className="grid grid-cols-5 gap-1 text-xs opacity-40 blur-sm">
                        <div className="bg-gray-100 p-1.5 rounded">4. For gain</div>
                        <div className="bg-blue-50 p-1.5 rounded text-blue-800">Bank statements</div>
                        <div className="bg-red-50 p-1.5 rounded text-red-800">Asset tracking</div>
                        <div className="bg-green-50 p-1.5 rounded text-green-800">Financial audit</div>
                        <div className="bg-purple-50 p-1.5 rounded flex justify-center items-center">
                          <div className="w-4 h-4 bg-gray-300 rounded-full border border-gray-400"></div>
                        </div>
                      </div>
                      <div className="text-center text-xs text-gray-400 mt-1">... and 9 more elements</div>
                    </div>
                    <div className="mt-3 bg-yellow-50 p-2 rounded text-xs">
                      <div className="font-semibold text-yellow-800">Progress: 25%</div>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                        <div className="bg-yellow-500 h-1 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div
                className="p-1 h-full absolute inset-0 transition-opacity duration-500 opacity-0"
                id="dashboard"
              >
                <div className="h-full">
                  <h3 className="text-xs font-bold text-gray-800 mb-1">Dashboard</h3>
                  <div className="grid grid-cols-2 gap-1 h-5/6 text-xs">
                    
                    {/* Calendar */}
                    <div className="bg-gray-50 p-1.5 rounded border border-gray-300">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-xs font-semibold text-gray-800">Calendar</div>
                        <div className="flex space-x-0.5">
                          <button className="text-xs text-gray-500">‹</button>
                          <button className="text-xs text-gray-500">›</button>
                        </div>
                      </div>
                      <div className="text-xs text-center text-gray-600 mb-1">September 2025</div>
                      <div className="grid grid-cols-7 gap-0.5 text-xs">
                        <div className="text-center text-gray-500 font-semibold text-xs">Su</div>
                        <div className="text-center text-gray-500 font-semibold text-xs">Mo</div>
                        <div className="text-center text-gray-500 font-semibold text-xs">Tu</div>
                        <div className="text-center text-gray-500 font-semibold text-xs">We</div>
                        <div className="text-center text-gray-500 font-semibold text-xs">Th</div>
                        <div className="text-center text-gray-500 font-semibold text-xs">Fr</div>
                        <div className="text-center text-gray-500 font-semibold text-xs">Sa</div>
                        
                        <div className="text-center text-gray-400 p-0.5 text-xs">31</div>
                        <div className="text-center p-0.5 text-xs">1</div>
                        <div className="text-center p-0.5 text-xs">2</div>
                        <div className="text-center p-0.5 text-xs">3</div>
                        <div className="text-center p-0.5 text-xs">4</div>
                        <div className="text-center p-0.5 text-xs">5</div>
                        <div className="text-center p-0.5 text-xs">6</div>
                        
                        <div className="text-center p-0.5 text-red-600 font-bold text-xs">7</div>
                        <div className="text-center p-0.5 text-xs">8</div>
                        <div className="text-center p-0.5 text-xs">9</div>
                        <div className="text-center p-0.5 bg-red-100 rounded text-red-800 text-xs">10</div>
                        <div className="text-center p-0.5 text-xs">11</div>
                        <div className="text-center p-0.5 text-xs">12</div>
                        <div className="text-center p-0.5 text-xs">13</div>
                        
                        <div className="text-center p-0.5 text-xs">14</div>
                        <div className="text-center p-0.5 text-xs">15</div>
                        <div className="text-center p-0.5 text-xs">16</div>
                        <div className="text-center p-0.5 text-xs">17</div>
                        <div className="text-center p-0.5 text-xs">18</div>
                        <div className="text-center p-0.5 text-xs">19</div>
                        <div className="text-center p-0.5 text-xs">20</div>
                        
                        <div className="text-center p-0.5 text-red-600 text-xs">21</div>
                        <div className="text-center p-0.5 bg-gray-800 text-white rounded font-bold text-xs">22</div>
                        <div className="text-center p-0.5 text-xs">23</div>
                        <div className="text-center p-0.5 text-xs">24</div>
                        <div className="text-center p-0.5 text-xs">25</div>
                        <div className="text-center p-0.5 text-xs">26</div>
                        <div className="text-center p-0.5 bg-blue-100 rounded text-blue-800 text-xs">27</div>
                      </div>
                    </div>

                    {/* Active Investigations by Priority */}
                    <div className="bg-gray-50 p-1.5 rounded border border-gray-300">
                      <div className="text-xs font-semibold text-gray-800 mb-1">Priority</div>
                      <div className="grid grid-cols-2 gap-2">
                        {/* Critical */}
                        <div className="text-center">
                          <div className="relative w-8 h-8 mx-auto mb-1">
                            <svg className="w-8 h-8 transform -rotate-90">
                              <circle cx="16" cy="16" r="12" stroke="#e5e7eb" strokeWidth="2" fill="transparent"/>
                              <circle cx="16" cy="16" r="12" stroke="#dc2626" strokeWidth="2" fill="transparent" 
                                      strokeDasharray="75" strokeDashoffset="73" className="transition-all duration-300"/>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-red-600">1%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                            <span className="text-xs text-gray-700">Critical</span>
                          </div>
                        </div>

                        {/* High */}
                        <div className="text-center">
                          <div className="relative w-8 h-8 mx-auto mb-1">
                            <svg className="w-8 h-8 transform -rotate-90">
                              <circle cx="16" cy="16" r="12" stroke="#e5e7eb" strokeWidth="2" fill="transparent"/>
                              <circle cx="16" cy="16" r="12" stroke="#f59e0b" strokeWidth="2" fill="transparent" 
                                      strokeDasharray="75" strokeDashoffset="71" className="transition-all duration-300"/>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-yellow-600">2%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                            <span className="text-xs text-gray-700">High</span>
                          </div>
                        </div>

                        {/* Medium */}
                        <div className="text-center">
                          <div className="relative w-8 h-8 mx-auto mb-1">
                            <svg className="w-8 h-8 transform -rotate-90">
                              <circle cx="16" cy="16" r="12" stroke="#e5e7eb" strokeWidth="2" fill="transparent"/>
                              <circle cx="16" cy="16" r="12" stroke="#d97706" strokeWidth="2" fill="transparent" 
                                      strokeDasharray="75" strokeDashoffset="73" className="transition-all duration-300"/>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">1%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                            <span className="text-xs text-gray-700">Medium</span>
                          </div>
                        </div>

                        {/* Low */}
                        <div className="text-center">
                          <div className="relative w-8 h-8 mx-auto mb-1">
                            <svg className="w-8 h-8 transform -rotate-90">
                              <circle cx="16" cy="16" r="12" stroke="#e5e7eb" strokeWidth="2" fill="transparent"/>
                              <circle cx="16" cy="16" r="12" stroke="#1f2937" strokeWidth="2" fill="transparent" 
                                      strokeDasharray="75" strokeDashoffset="3" className="transition-all duration-300"/>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-gray-800">96%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                            <span className="text-xs text-gray-700">Low</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Investigations by Status */}
                    <div className="bg-gray-50 p-1.5 rounded border border-gray-300">
                      <div className="text-xs font-semibold text-gray-800 mb-1">Status</div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-3 gap-1 text-xs text-gray-600">
                          <span></span>
                          <span className="text-center">All</span>
                          <span className="text-center">My</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-xs items-center">
                          <div className="flex items-center space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded"></div>
                            <span>Progress</span>
                          </div>
                          <span className="text-center font-semibold">135</span>
                          <span className="text-center font-semibold">135</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-xs items-center">
                          <div className="flex items-center space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded"></div>
                            <span>Submitted</span>
                          </div>
                          <span className="text-center font-semibold">79</span>
                          <span className="text-center font-semibold">79</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-xs items-center">
                          <div className="flex items-center space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded"></div>
                            <span>Complete</span>
                          </div>
                          <span className="text-center font-semibold">5</span>
                          <span className="text-center font-semibold">5</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-xs items-center">
                          <div className="flex items-center space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded"></div>
                            <span>Rejected</span>
                          </div>
                          <span className="text-center font-semibold">3</span>
                          <span className="text-center font-semibold">3</span>
                        </div>
                      </div>
                    </div>

                    {/* Investigations Over Time */}
                    <div className="bg-gray-50 p-1.5 rounded border border-gray-300">
                      <div className="text-xs font-semibold text-gray-800 mb-1">Over Time</div>
                      <div className="relative h-12">
                        {/* Grid lines */}
                        <div className="absolute inset-0">
                          <div className="h-full flex flex-col justify-between text-xs text-gray-400">
                            <div className="border-t border-gray-300">100</div>
                            <div className="border-t border-gray-200">50</div>
                            <div className="border-t border-gray-300">0</div>
                          </div>
                        </div>
                        {/* Chart lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          {/* Opened line (yellow) */}
                          <polyline
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="1.5"
                            points="10,40 25,30 40,15 55,18 70,20 85,22"
                          />
                          {/* Closed line (red) */}
                          <polyline
                            fill="none"
                            stroke="#dc2626"
                            strokeWidth="1.5"
                            points="10,45 25,45 40,44 55,44 70,44 85,43"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-center space-x-2 mt-1">
                        <div className="flex items-center space-x-0.5">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                          <span className="text-xs text-gray-700">Open</span>
                        </div>
                        <div className="flex items-center space-x-0.5">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                          <span className="text-xs text-gray-700">Close</span>
                        </div>
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
                <img src="/postgresql.webp" alt="PostgreSQL" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div ref={contentRef} className="w-1/2 pl-8">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight uppercase mb-8">
              E-EVIDENCE
            </h2>
            <p className="text-2xl text-slate-600 mb-6">
              Investigation Management System for Legal Professionals
            </p>
            <p className="text-xl text-slate-700 mb-4">
              <strong>Problem Solved:</strong>
            </p>
            <p className="text-lg text-slate-600 mb-6">
              The biggest question for investigators and prosecutors: "Do I have enough evidence?" 
              E-Evidence provides a systematic approach to answer this critical question through 
              structured case analysis and evidence scoring.
            </p>
            <p className="text-xl text-slate-700 mb-4">
              <strong>How it Works:</strong>
            </p>
            <ul className="text-lg text-slate-600 space-y-2">
              <li>• Create investigations with court and criminal act details</li>
              <li>• Add entities (suspects, victims, witnesses) to cases</li>
              <li>• Use Blueprint Matrix to break down laws by elements</li>
              <li>• Track evidence with "What we have" vs "What we lack"</li>
              <li>• Score evidence strength and investigation progress</li>
              <li>• Determine court readiness automatically</li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="w-full max-w-sm mx-auto mb-8">
            <div className="w-full h-[300px] bg-white rounded-lg overflow-hidden relative shadow-lg">
              <div className="p-4 h-full">
                <div className="flex h-full">
                  {/* Mobile Sidebar */}
                  <div className="w-1/3 bg-gray-800 text-white p-2 rounded-l-lg">
                    <div className="text-xs font-bold mb-3">E-Evidence</div>
                    <div className="space-y-1">
                      <div className="bg-blue-600 text-white px-1 py-1 rounded text-xs">Cases</div>
                      <div className="text-gray-300 px-1 py-1 text-xs">Matrix</div>
                      <div className="text-gray-300 px-1 py-1 text-xs">Evidence</div>
                    </div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="flex-1 p-3">
                    <h3 className="text-sm font-bold text-gray-800 mb-3">Investigation</h3>
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-2 rounded text-xs">
                        <div className="font-semibold text-blue-800">System Purpose</div>
                        <div className="text-blue-700">Case management</div>
                      </div>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <div className="font-semibold text-green-800">Core Question</div>
                        <div className="text-green-700">Enough evidence?</div>
                      </div>
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
              A comprehensive investigation management tool that helps investigators 
              systematically analyze cases and determine court readiness.
            </p>
            <p className="text-base text-slate-700 mb-3">
              <strong>Key Features:</strong>
            </p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Blueprint Matrix for legal breakdown</li>
              <li>• Entity management system</li>
              <li>• Evidence scoring & tracking</li>
              <li>• Court readiness assessment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidencePage;
