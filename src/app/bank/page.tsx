"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const BankPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.killAll();

      const isMobile = window.innerWidth < 1024;

      // Hero section animations
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Platform section - parallax
      if (!isMobile) {
        gsap.to(".platform-image", {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: ".platform-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Task cards animation
      const taskCards = gsap.utils.toArray<HTMLElement>(".task-card");
      taskCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Workflow steps animation
      const workflowSteps = gsap.utils.toArray<HTMLElement>(".workflow-step");
      workflowSteps.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Document progress bars animation
      gsap.to(".progress-bar", {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".documents-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Hierarchy tree animation
      gsap.fromTo(
        ".hierarchy-level",
        { opacity: 0, scale: 0, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".hierarchy-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Reports section dramatic entrance
      gsap.fromTo(
        ".reports-section",
        { opacity: 0, scale: 0.5, rotateX: 90 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".reports-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tech stack floating animation
      gsap.to(".tech-icon", {
        y: -20,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Stats counter animation
      const stats = gsap.utils.toArray<HTMLElement>(".stat-number");
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target") || "0");
        gsap.fromTo(
          stat,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Notification pulse
      gsap.to(".notification-dot", {
        scale: 1.5,
        opacity: 0.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-teal-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent uppercase tracking-tighter">
            E-DOSSIER
          </h1>
          <p className="hero-subtitle text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-8">
            STREAMLINED LOAN PROCESSING
          </p>
          <div className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering bank employees with intelligent workflow management for seamless loan processing and approval.
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="platform-section relative py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase">
              INTELLIGENT <span className="text-green-400">WORKFLOW SYSTEM</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              A comprehensive platform designed for bank employees to efficiently manage loan workflows. From application to approval, every step is streamlined and tracked.
            </p>
            <div className="space-y-4 text-lg text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <p>Centralized dashboard for all open tasks and workflows</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                <p>Role-based access with multi-level approval hierarchy</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <p>Real-time document management and tracking</p>
              </div>
            </div>
          </div>

          <div className="platform-image relative">
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 shadow-2xl shadow-green-500/50">
              <div className="bg-gray-900 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-400">My Tasks</h3>
                  <div className="flex items-center gap-2">
                    <div className="notification-dot w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">3 New</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { client: "John Smith", type: "Housing Loan", amount: "$250K", status: "Review", color: "blue" },
                    { client: "Sarah Johnson", type: "Personal Loan", amount: "$25K", status: "Sign", color: "orange" },
                    { client: "Mike Davis", type: "Business Loan", amount: "$100K", status: "Approve", color: "green" },
                  ].map((task, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-xl p-3 hover:bg-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">{task.client}</div>
                        <div className={`text-xs px-2 py-1 rounded-full bg-${task.color}-500/20 text-${task.color}-400 border border-${task.color}-500`}>
                          {task.status}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">{task.type}</div>
                      <div className="text-lg font-bold text-green-400">{task.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Tasks Section */}
      <section className="relative py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            YOUR <span className="text-green-400">TASKS</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto">
            Users see workflows assigned to their group or sent directly to them. Click any task to view details, manage documents, and take action.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="task-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-green-500 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500">
                  Review
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Housing Loan</h3>
              <p className="text-gray-400 mb-4">John Smith - #WF12345</p>
              <div className="text-3xl font-black text-green-400 mb-4">$250,000</div>
              <div className="text-sm text-gray-400">Assigned to: Credit Team</div>
            </div>

            <div className="task-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-orange-500 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500">
                  Sign
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Personal Loan</h3>
              <p className="text-gray-400 mb-4">Sarah Johnson - #WF12346</p>
              <div className="text-3xl font-black text-green-400 mb-4">$25,000</div>
              <div className="text-sm text-gray-400">Sent to: You</div>
            </div>

            <div className="task-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-teal-500 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500">
                  Approve
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Business Loan</h3>
              <p className="text-gray-400 mb-4">Mike Davis - #WF12347</p>
              <div className="text-3xl font-black text-green-400 mb-4">$100,000</div>
              <div className="text-sm text-gray-400">Assigned to: Manager Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className="relative py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            THE <span className="text-green-400">PROCESS</span>
          </h2>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="workflow-step grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-black text-green-400 mb-4">01</div>
                <h3 className="text-4xl font-bold mb-6">LOGIN & VIEW TASKS</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Bank employees log in to see their dashboard with all open workflows. Tasks are organized by priority, with those assigned to your group or sent directly to you appearing in &quot;My Tasks&quot;.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/employee.webp" alt="Employee" className="w-16 h-16 rounded-full object-cover border-2 border-green-400" />
                    <div>
                      <div className="text-xl font-bold">Welcome, Joe Evans</div>
                      <div className="text-sm text-gray-400">Credit Analyst</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-400">Open Tasks</div>
                      <div className="text-2xl font-black text-green-400">12</div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="workflow-step grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="text-6xl font-black text-teal-400 mb-4">02</div>
                <h3 className="text-4xl font-bold mb-6">SELECT WORKFLOW</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Click on any workflow to view detailed information. See the loan product type (Housing, Personal, Business), client information, requested amount, and current status in the approval pipeline.
                </p>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/johnsmith.webp" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="font-bold">John Smith</div>
                      <div className="text-sm text-gray-400">#WF12345</div>
                    </div>
                  </div>
                  <div className="bg-teal-500/20 border border-teal-500 rounded-xl p-4 mb-4">
                    <div className="text-sm text-gray-400 mb-1">Loan Product</div>
                    <div className="text-xl font-bold">Housing Loan</div>
                    <div className="text-2xl font-black text-green-400 mt-2">$250,000</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400">Status:</span>
                    <span className="text-blue-400 font-semibold">Under Review</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="workflow-step grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-black text-emerald-400 mb-4">03</div>
                <h3 className="text-4xl font-bold mb-6">MANAGE DOCUMENTS</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  View all required documents for the loan application. Sign documents electronically if needed, upload additional supporting files, or request missing documents from clients. All actions are tracked and logged.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6 documents-section">
                  <div className="text-sm font-semibold mb-4">Required Documents</div>
                  <div className="space-y-3">
                    {[
                      { name: "Identity Document", status: "complete", color: "green", width: "100%" },
                      { name: "Income Certificate", status: "complete", color: "green", width: "100%" },
                      { name: "Bank Statements", status: "pending", color: "orange", width: "60%" },
                      { name: "Credit Report", status: "missing", color: "red", width: "0%" },
                    ].map((doc, idx) => (
                      <div key={idx} className="bg-gray-800 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-semibold">{doc.name}</div>
                          <div className={`text-xs px-2 py-1 rounded-full bg-${doc.color}-500/20 text-${doc.color}-400 capitalize`}>
                            {doc.status}
                          </div>
                        </div>
                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`progress-bar h-full bg-${doc.color}-400 rounded-full origin-left`}
                            style={{ width: doc.width, transform: "scaleX(0)" }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="workflow-step grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="text-6xl font-black text-cyan-400 mb-4">04</div>
                <h3 className="text-4xl font-bold mb-6">SEND TO NEXT LEVEL</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Once you&apos;ve reviewed everything, send the workflow to the next approval level or send it back if something is wrong. Actions include: Send to Supervisor, Approve, Reject, or Request More Info.
                </p>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <div className="text-sm font-semibold mb-4">Available Actions</div>
                  <div className="space-y-2">
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Send to Supervisor
                    </button>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Approve Workflow
                    </button>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Request More Info
                    </button>
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Send Back / Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Groups & Hierarchy Section */}
      <section className="hierarchy-section relative py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">
            <span className="text-green-400">GROUPS</span> & ROLES
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto">
            Workflows move through the organization based on groups and roles. Multi-level approval hierarchy ensures proper oversight and accountability.
          </p>

          <div className="flex flex-col items-center gap-8">
            {/* Level 1 */}
            <div className="hierarchy-level">
              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-6 shadow-2xl shadow-green-500/50 max-w-md">
                <div className="text-sm text-gray-200 mb-2">Level 1</div>
                <div className="text-2xl font-black mb-2">CREDIT ANALYSTS</div>
                <div className="text-sm text-gray-300">Initial review and document verification</div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">12</span>
                  </div>
                  <span className="text-sm text-gray-300">Team Members</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-green-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Level 2 */}
            <div className="hierarchy-level">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-6 shadow-2xl shadow-teal-500/50 max-w-md">
                <div className="text-sm text-gray-200 mb-2">Level 2</div>
                <div className="text-2xl font-black mb-2">SUPERVISORS</div>
                <div className="text-sm text-gray-300">Secondary review and approval</div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">5</span>
                  </div>
                  <span className="text-sm text-gray-300">Team Members</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-green-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Level 3 */}
            <div className="hierarchy-level">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-6 shadow-2xl shadow-cyan-500/50 max-w-md">
                <div className="text-sm text-gray-200 mb-2">Level 3</div>
                <div className="text-2xl font-black mb-2">MANAGERS</div>
                <div className="text-sm text-gray-300">Final approval and authorization</div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <span className="text-sm text-gray-300">Team Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create New Workflow Section */}
      <section className="relative py-32 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            CREATE NEW <span className="text-green-400">WORKFLOW</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16">
            Employees can create new loan workflows by selecting a client and choosing the loan product type. The system automatically routes it to the appropriate group.
          </p>

          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 shadow-2xl shadow-green-500/50">
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Client</label>
                  <div className="bg-gray-800 rounded-xl p-3 border-2 border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img src="/johnsmith.webp" alt="Client" className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold">John Smith</div>
                        <div className="text-sm text-gray-400">#CS12345</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Loan Product</label>
                  <div className="bg-gray-800 rounded-xl p-3 border-2 border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                    <div className="font-semibold mb-1">Housing Loan</div>
                    <div className="text-sm text-gray-400">Up to $500,000</div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Loan Amount</label>
                <input 
                  type="text" 
                  placeholder="$250,000" 
                  className="w-full bg-gray-800 rounded-xl p-4 border-2 border-gray-700 focus:border-green-500 outline-none transition-colors text-xl font-bold"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white text-xl font-bold py-4 rounded-xl hover:scale-105 transform transition-all shadow-xl">
                CREATE WORKFLOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="reports-section relative py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            COMPREHENSIVE <span className="text-green-400">REPORTS</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto">
            Generate detailed reports on workflow performance, approval rates, processing times, and team productivity. Data-driven insights for better decision making.
          </p>

          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 shadow-2xl shadow-green-500/50">
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Chart 1 */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Monthly Applications</h3>
                  <div className="h-48 bg-gray-700 rounded-lg flex items-end justify-between p-4 gap-2">
                    {[60, 75, 85, 70, 90, 95].map((height, idx) => (
                      <div key={idx} className="flex-1 bg-gradient-to-t from-green-500 to-teal-500 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>

                {/* Chart 2 */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Approval Distribution</h3>
                  <div className="h-48 flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="20"/>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="251" strokeDashoffset="63" transform="rotate(-90 50 50)"/>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="251" strokeDashoffset="226" transform="rotate(180 50 50)"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-black">75%</div>
                          <div className="text-xs text-gray-400">Approved</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Approved</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Rejected</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="stat-number text-3xl font-black text-green-400 mb-1" data-target="156">0</div>
                  <div className="text-sm text-gray-400">Total Workflows</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="stat-number text-3xl font-black text-teal-400 mb-1" data-target="24">0</div>
                  <div className="text-sm text-gray-400">Active</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="stat-number text-3xl font-black text-cyan-400 mb-1" data-target="5">0</div>
                  <div className="text-sm text-gray-400">Avg Days</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="stat-number text-3xl font-black text-emerald-400 mb-1" data-target="19">0</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">
            POWERED BY <span className="text-green-400">MODERN TECH</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="tech-icon bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/50">
              <img src="/react.webp" alt="React" className="w-20 h-20 object-contain mb-4" />
              <div className="text-xl font-bold">React</div>
              <div className="text-sm text-gray-300">TypeScript</div>
            </div>
            <div className="tech-icon bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center shadow-2xl shadow-green-500/50">
              <img src="/springlogo.webp" alt="Spring Boot" className="w-20 h-20 object-contain mb-4" />
              <div className="text-xl font-bold">Spring Boot</div>
              <div className="text-sm text-gray-300">Backend</div>
            </div>
            <div className="tech-icon bg-gradient-to-br from-blue-800 to-purple-800 rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center shadow-2xl shadow-purple-500/50">
              <img src="/postgresql.webp" alt="PostgreSQL" className="w-20 h-20 object-contain mb-4" />
              <div className="text-xl font-bold">PostgreSQL</div>
              <div className="text-sm text-gray-300">Database</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-gray-900 via-green-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase">
            STREAMLINE YOUR <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">WORKFLOW</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300">
            Efficient loan processing with intelligent workflow management
          </p>
        </div>
      </section>
    </div>
  );
};

export default BankPage;
