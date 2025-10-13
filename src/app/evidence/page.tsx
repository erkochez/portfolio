"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const EvidencePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      // Kill all existing ScrollTriggers to prevent conflicts
      ScrollTrigger.killAll();

      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
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

      // Problem cards animation
      const problemCards = gsap.utils.toArray<HTMLElement>(".problem-card");
      problemCards.forEach((card, index) => {
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

      // Investigation steps animation
      const investigationSteps = gsap.utils.toArray<HTMLElement>(".investigation-step");
      investigationSteps.forEach((step, index) => {
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

      // Matrix cells animation
      gsap.fromTo(
        ".matrix-cell",
        { opacity: 0, scale: 0.8, rotateY: 90 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".matrix-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Entity cards animation
      gsap.fromTo(
        ".entity-card",
        { opacity: 0, scale: 0, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".entities-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Testimonial section dramatic entrance
      gsap.fromTo(
        ".testimonial-section",
        { opacity: 0, scale: 0.5, rotateX: 90 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Progress bar animation
      gsap.to(".progress-fill", {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".scoring-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

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

      // Evidence pulse
      gsap.to(".evidence-pulse", {
        scale: 1.3,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, 100); // Close setTimeout

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-tighter">
            E-EVIDENCE
          </h1>
          <p className="hero-subtitle text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-8">
            SOLVE CASES FASTER
          </p>
          <div className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering investigators with intelligent case management and systematic evidence tracking.
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
              INVESTIGATION <span className="text-indigo-400">MANAGEMENT</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              E-Evidence is a powerful tool designed for investigators to efficiently manage investigations. From creating cases to tracking evidence, every step is systematic and measurable.
            </p>
            <div className="space-y-4 text-lg text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                <p>Systematic case creation with detailed metadata</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>Blueprint Matrix for legal element breakdown</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                <p>Evidence scoring to identify gaps in investigation</p>
              </div>
            </div>
          </div>

          <div className="platform-image relative">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl shadow-indigo-500/50">
              <div className="bg-gray-900 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-indigo-400">Active Investigations</h3>
                  <div className="flex items-center gap-2">
                    <div className="evidence-pulse w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">Live</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { case: "INV-2025-386", type: "Financial Fraud", progress: 75, color: "blue" },
                    { case: "INV-2025-387", type: "Theft", progress: 45, color: "orange" },
                    { case: "INV-2025-388", type: "Assault", progress: 90, color: "green" },
                  ].map((inv, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-sm">{inv.case}</div>
                        <div className={`text-xs px-2 py-1 rounded-full bg-${inv.color}-500/20 text-${inv.color}-400`}>
                          {inv.progress}%
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">{inv.type}</div>
                      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-${inv.color}-400 rounded-full`}
                          style={{ width: `${inv.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            THE <span className="text-indigo-400">CHALLENGE</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto">
            Every investigator and prosecutor faces one critical question throughout their work...
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="problem-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">The Question</h3>
              <p className="text-gray-400 text-center text-lg">
                &quot;Do I have enough evidence to proceed to court?&quot;
              </p>
            </div>

            <div className="problem-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">The Problem</h3>
              <p className="text-gray-400 text-center text-lg">
                Scattered evidence, missing documents, and unclear gaps in the case
              </p>
            </div>

            <div className="problem-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-indigo-500">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">The Solution</h3>
              <p className="text-gray-400 text-center text-lg">
                Systematic Blueprint Matrix that breaks down every legal element
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl shadow-indigo-500/50">
              <p className="text-3xl md:text-4xl font-black mb-4">
                &quot;Do I have enough evidence?&quot;
              </p>
              <p className="text-xl text-gray-300">
                E-Evidence provides the answer with data-driven insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Process Section */}
      <section className="relative py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            THE <span className="text-indigo-400">PROCESS</span>
          </h2>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="investigation-step grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-black text-indigo-400 mb-4">01</div>
                <h3 className="text-4xl font-bold mb-6">CREATE INVESTIGATION</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-4">
                  Investigators begin by creating a new investigation. Add comprehensive details including description, date, time, address, classification level, and priority level.
                </p>
                <ul className="space-y-2 text-lg text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>Case description and metadata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Classification and priority levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Date, time, and location details</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4">New Investigation</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Investigation ID</label>
                      <div className="bg-gray-800 rounded-lg px-3 py-2 text-sm font-mono">INV-2025-09-00386</div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Description</label>
                      <div className="bg-gray-800 rounded-lg px-3 py-2 text-sm">Financial fraud investigation</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Priority</label>
                        <div className="bg-red-500/20 border border-red-500 rounded-lg px-3 py-2 text-sm text-red-400">High</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Classification</label>
                        <div className="bg-orange-500/20 border border-orange-500 rounded-lg px-3 py-2 text-sm text-orange-400">Level 2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="investigation-step grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="text-6xl font-black text-purple-400 mb-4">02</div>
                <h3 className="text-4xl font-bold mb-6">ADD CRIMINAL ACT</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-4">
                  Define the criminal act (e.g., Theft, Fraud, Assault). When you create a criminal act, the system automatically generates a Blueprint Matrix based on the legal definition.
                </p>
                <div className="bg-purple-500/20 border-2 border-purple-500 rounded-2xl p-4">
                  <div className="text-sm text-purple-400 font-semibold mb-2">Example: Theft</div>
                  <div className="text-gray-300 space-y-1">
                    <div>→ A person</div>
                    <div>→ that steals</div>
                    <div>→ a valuable object</div>
                    <div>→ belonging to another</div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4">Select Criminal Act</h4>
                  <div className="space-y-2">
                    {[
                      { name: "Financial Fraud", code: "Article 249" },
                      { name: "Theft", code: "Article 235" },
                      { name: "Assault", code: "Article 130" },
                    ].map((act, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-gray-800 rounded-lg p-3 cursor-pointer transition-colors ${idx === 0 ? 'border-2 border-purple-500' : 'hover:bg-gray-700'}`}
                      >
                        <div className="font-semibold text-sm">{act.name}</div>
                        <div className="text-xs text-gray-400">{act.code}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Blueprint Matrix */}
            <div className="investigation-step grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-black text-pink-400 mb-4">03</div>
                <h3 className="text-4xl font-bold mb-6">BLUEPRINT MATRIX</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-4">
                  The Matrix breaks down the law into individual nouns (legal elements). For each element, investigators track three key aspects:
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-500/20 border-l-4 border-blue-500 rounded-lg p-3">
                    <div className="font-bold text-blue-400 mb-1">Relevant Evidence</div>
                    <div className="text-sm text-gray-400">What we have - existing evidence</div>
                  </div>
                  <div className="bg-green-500/20 border-l-4 border-green-500 rounded-lg p-3">
                    <div className="font-bold text-green-400 mb-1">Source of Evidence</div>
                    <div className="text-sm text-gray-400">Witnesses and documentation sources</div>
                  </div>
                  <div className="bg-orange-500/20 border-l-4 border-orange-500 rounded-lg p-3">
                    <div className="font-bold text-orange-400 mb-1">Investigative Tasks</div>
                    <div className="text-sm text-gray-400">What we lack - missing pieces</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4">Matrix View</h4>
                  <div className="text-xs text-gray-400 mb-3">Crime: Financial Fraud</div>
                  <div className="space-y-2 matrix-section">
                    {[
                      { element: "A person who", have: "Suspect ID", lack: "Background", score: 75 },
                      { element: "Obtained property", have: "Transaction logs", lack: "Receipts", score: 60 },
                      { element: "Through deception", have: "Statements", lack: "Proof", score: 40 },
                    ].map((row, idx) => (
                      <div key={idx} className="matrix-cell bg-gray-800 rounded-lg p-2">
                        <div className="font-semibold text-sm mb-2">{row.element}</div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-blue-500/20 rounded px-2 py-1 text-blue-400">{row.have}</div>
                          <div className="bg-orange-500/20 rounded px-2 py-1 text-orange-400">{row.lack}</div>
                          <div className="bg-purple-500/20 rounded px-2 py-1 text-purple-400 text-center">{row.score}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entity Management Section */}
      <section className="entities-section relative py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">
            ENTITY <span className="text-indigo-400">MANAGEMENT</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto">
            Add and manage all people involved in the investigation. Track suspects, victims, and witnesses with complete profiles and connections.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="entity-card bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 shadow-2xl shadow-red-500/50">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-3">SUSPECTS</h3>
              <p className="text-gray-200 mb-6">Primary and secondary suspects with full background information</p>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-4xl font-black mb-2">12</div>
                <div className="text-sm text-gray-300">Active Suspects</div>
              </div>
            </div>

            <div className="entity-card bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/50">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-3">VICTIMS</h3>
              <p className="text-gray-200 mb-6">Affected parties and their relationship to the case</p>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-4xl font-black mb-2">8</div>
                <div className="text-sm text-gray-300">Registered Victims</div>
              </div>
            </div>

            <div className="entity-card bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 shadow-2xl shadow-green-500/50">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-3">WITNESSES</h3>
              <p className="text-gray-200 mb-6">Key witnesses and their testimony status</p>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-4xl font-black mb-2">24</div>
                <div className="text-sm text-gray-300">Total Witnesses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring System Section */}
      <section className="scoring-section relative py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            EVIDENCE <span className="text-indigo-400">SCORING</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto">
            Each element in the Matrix can be scored. The system calculates overall case readiness, helping investigators identify exactly what&apos;s missing to solve the case.
          </p>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl shadow-indigo-500/50 max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Case Completion Status</h3>
              
              <div className="space-y-6">
                {[
                  { element: "Suspect Identification", score: 90, color: "green" },
                  { element: "Evidence Collection", score: 75, color: "blue" },
                  { element: "Witness Testimony", score: 60, color: "yellow" },
                  { element: "Documentation", score: 45, color: "orange" },
                  { element: "Legal Elements", score: 30, color: "red" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{item.element}</span>
                      <span className="text-2xl font-black">{item.score}%</span>
                    </div>
                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`progress-fill h-full bg-${item.color}-400 rounded-full origin-left`}
                        style={{ width: `${item.score}%`, transform: "scaleX(0)" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-indigo-500/20 border-2 border-indigo-500 rounded-2xl p-6 text-center">
                <div className="text-sm text-indigo-400 font-semibold mb-2">OVERALL CASE READINESS</div>
                <div className="text-6xl font-black mb-2">62%</div>
                <div className="text-gray-400">Approaching court-ready threshold (80%)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Usage Section */}
      <section className="testimonial-section relative py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            TRUSTED <span className="text-indigo-400">WORLDWIDE</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto">
            E-Evidence is used by law enforcement and judicial institutions across the globe. A modern case-solving application trusted by major organizations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { country: "Macedonia", org: "Ministry of Internal Affairs", flag: "🇲🇰" },
              { country: "USA", org: "Law Enforcement Agencies", flag: "🇺🇸" },
              { country: "Colombia", org: "Judicial Institutions", flag: "🇨🇴" },
            ].map((client, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-indigo-500 text-center">
                <div className="text-6xl mb-4">{client.flag}</div>
                <h3 className="text-2xl font-bold mb-2">{client.country}</h3>
                <p className="text-gray-400">{client.org}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl shadow-indigo-500/50 max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <svg className="w-16 h-16 text-indigo-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                &quot;E-Evidence has transformed how we approach investigations. The Blueprint Matrix provides clarity on what evidence we need, reducing case resolution time by 40%.&quot;
              </p>
              <div className="text-indigo-400 font-semibold">— Senior Investigator, Ministry of Internal Affairs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stat-number text-6xl font-black text-indigo-400 mb-2" data-target="1500">0</div>
              <div className="text-xl text-gray-400">Active Cases</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-6xl font-black text-purple-400 mb-2" data-target="250">0</div>
              <div className="text-xl text-gray-400">Investigators</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-6xl font-black text-pink-400 mb-2" data-target="40">0</div>
              <div className="text-xl text-gray-400">% Faster Resolution</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-6xl font-black text-blue-400 mb-2" data-target="3">0</div>
              <div className="text-xl text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">
            BUILT WITH <span className="text-indigo-400">MODERN TECH</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="tech-icon bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/50">
              <img src="/react.webp" alt="React" className="w-20 h-20 object-contain mb-4" />
              <div className="text-xl font-bold">React</div>
              <div className="text-sm text-gray-300">Frontend</div>
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
      <section className="relative py-32 px-4 bg-gradient-to-b from-gray-900 via-indigo-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase">
            SOLVE CASES <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">FASTER</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300">
            Systematic investigation management for modern law enforcement
          </p>
        </div>
      </section>
    </div>
  );
};

export default EvidencePage;
