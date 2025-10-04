"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const BankPage = () => {
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
          section: ".bank-section", 
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
          trigger: ".bank-section",
          start: "top top",
          end: "+=800%",
          scrub: 0.5,
          pin: true,
          fastScrollEnd: true,
          preventOverlaps: true
        },
      });

      // Hide content, icons, and title when scrolling starts (like other projects)
      tl.to([contentRef.current, iconsRef.current, ".bank-section h1"], {
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
        <div className="bank-section hidden lg:flex items-center h-screen">
          {/* Left side with rectangle */}
          <div className="w-1/2 pr-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-left -mt-2">
              Bank Workflow
            </h1>
            
            {/* Rectangle with app interface mockups */}
            <div
              ref={rectangleRef}
              className="w-[600px] h-[400px] bg-white rounded-lg mb-8 overflow-hidden relative shadow-lg"
            >
              {/* Landing Content */}
              <div
                className="p-4 h-full absolute inset-0 transition-opacity duration-500"
                id="landing-content"
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
                id="detail-content"
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
        <div className="lg:hidden">
          <div className="w-full max-w-sm mx-auto mb-8">
            <div className="w-full h-[300px] bg-white rounded-lg overflow-hidden relative shadow-lg">
              <div className="p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-blue-600">Loan Dashboard</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">Joe Evans</span>
                    <img src="/employee.webp" alt="employee" className="w-4 h-4 rounded-full object-cover" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border rounded p-2">
                    <div className="text-xs font-semibold text-green-600">Active</div>
                    <div className="text-lg font-bold text-blue-600">24</div>
                  </div>
                  <div className="border rounded p-2">
                    <div className="text-xs font-semibold text-blue-600">Total</div>
                    <div className="text-lg font-bold text-blue-600">156</div>
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
  );
};

export default BankPage;
