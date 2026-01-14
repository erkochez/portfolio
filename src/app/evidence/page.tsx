"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const EvidencePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Unused variable removed


  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/30 font-sans">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-block mb-6">
              <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-wider uppercase">
                SOLVE CASES FASTER
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 font-recoleta leading-tight text-white">
              E-EVIDENCE
            </motion.h1>

            <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
              Empowering investigators with intelligent case management and systematic evidence tracking.
            </motion.p>

            {/* Active Investigations Preview */}
            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { id: "INV-2025-386", type: "Financial Fraud", progress: 75, status: "Live" },
                { id: "INV-2025-387", type: "Theft", progress: 45, status: "Review" },
                { id: "INV-2025-388", type: "Assault", progress: 90, status: "Court Ready" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-left hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${item.status === 'Live' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {item.status}
                    </span>
                    <span className="font-mono text-xs text-slate-500">{item.id}</span>
                  </div>
                  <div className="font-bold text-white mb-2">{item.type}</div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investigation Management Info */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-recoleta font-bold mb-4 md:mb-6">Investigation Management</h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              E-Evidence is a powerful tool designed for investigators to efficiently manage investigations. From creating cases to tracking evidence, every step is systematic and measurable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              "Systematic case creation with detailed metadata",
              "Blueprint Matrix for legal element breakdown",
              "Evidence scoring to identify gaps in investigation"
            ].map((text, i) => (
              <div key={i} className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400 font-bold">
                  {i + 1}
                </div>
                <p className="text-slate-300 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-2 block">The Challenge</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-recoleta font-bold mb-4 md:mb-6">&quot;Do I have enough evidence to proceed to court?&quot;</h3>
                <p className="text-slate-400 mb-8">
                  Every investigator and prosecutor faces this critical question. Scattered evidence, missing documents, and unclear gaps in the case make it hard to answer.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span>The Problem: Scattered evidence & missing docs</span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-bold">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>The Solution: Systematic Blueprint Matrix</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-8 text-center relative">
                <div className="text-6xl font-bold text-white mb-2 font-recoleta">YES</div>
                <div className="text-blue-400 font-mono text-sm uppercase tracking-wider">Data-Driven Insights</div>
                <div className="mt-6 text-sm text-slate-500 italic">&quot;E-Evidence provides the answer.&quot;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-mono text-sm uppercase tracking-widest">Workflow</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-recoleta mt-2">The Process</h2>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="text-6xl sm:text-7xl md:text-8xl font-recoleta text-slate-800 font-bold leading-none mb-4">01</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Create Investigation</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Investigators begin by creating a new investigation. Add comprehensive details including description, date, time, address, classification level, and priority level.
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" /> Case description and metadata</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" /> Classification and priority levels</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" /> Date, time, and location details</li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-sm">
                <div className="mb-4 text-slate-500 border-b border-slate-800 pb-2">New Investigation</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Investigation ID</div>
                    <div className="text-blue-400">INV-2025-09-00386</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Description</div>
                    <div className="text-white">Financial fraud investigation</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Priority</div>
                      <div className="text-red-400">High</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Classification</div>
                      <div className="text-white">Level 2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <div className="space-y-3">
                  <div className="p-3 bg-blue-600/20 border border-blue-500/30 rounded text-blue-200 flex justify-between items-center">
                    <span>Financial Fraud</span>
                    <span className="text-xs opacity-70">Article 249</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded text-slate-400 flex justify-between items-center opacity-50">
                    <span>Theft</span>
                    <span className="text-xs opacity-70">Article 235</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded text-slate-400 flex justify-between items-center opacity-50">
                    <span>Assault</span>
                    <span className="text-xs opacity-70">Article 130</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
                  <div className="mb-2">Matrix Generation Preview:</div>
                  <div className="flex justify-center gap-2 text-xs">
                    <span className="bg-slate-900 px-2 py-1 rounded">A person</span>
                    <span className="text-slate-700">→</span>
                    <span className="bg-slate-900 px-2 py-1 rounded">that steals</span>
                    <span className="text-slate-700">→</span>
                    <span className="bg-slate-900 px-2 py-1 rounded">object</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-6xl sm:text-7xl md:text-8xl font-recoleta text-slate-800 font-bold leading-none mb-4">02</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Add Criminal Act</h3>
                <p className="text-slate-400 leading-relaxed">
                  Define the criminal act (e.g., Theft, Fraud, Assault). When you create a criminal act, the system automatically generates a Blueprint Matrix based on the legal definition.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl sm:text-7xl md:text-8xl font-recoleta text-slate-800 font-bold leading-none mb-4">03</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Blueprint Matrix</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  The Matrix breaks down the law into individual nouns (legal elements). For each element, investigators track three key aspects:
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-3 rounded bg-slate-900 border-l-2 border-blue-500">
                    <div className="text-white font-bold text-sm">Relevant Evidence</div>
                    <div className="text-slate-500 text-xs">What we have - existing evidence</div>
                  </div>
                  <div className="p-3 rounded bg-slate-900 border-l-2 border-purple-500">
                    <div className="text-white font-bold text-sm">Source of Evidence</div>
                    <div className="text-slate-500 text-xs">Witnesses and documentation sources</div>
                  </div>
                  <div className="p-3 rounded bg-slate-900 border-l-2 border-orange-500">
                    <div className="text-white font-bold text-sm">Investigative Tasks</div>
                    <div className="text-slate-500 text-xs">What we lack - missing pieces</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Matrix View: Financial Fraud
                </div>
                <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <div className="w-full sm:w-1/3 text-xs sm:text-sm text-slate-300 font-semibold">A person who</div>
                    <div className="flex-1 bg-slate-900 rounded h-auto sm:h-10 flex flex-wrap items-center px-2 sm:px-3 py-2 sm:py-0 border border-slate-800 gap-1">
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Suspect ID</span>
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Background</span>
                    </div>
                    <div className="w-full sm:w-12 text-left sm:text-right font-bold text-green-400 text-sm sm:text-base">75%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-1/3 text-sm text-slate-300">Obtained property</div>
                    <div className="flex-1 bg-slate-900 rounded h-10 flex items-center px-3 border border-slate-800">
                      <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Logs</span>
                      <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded ml-2">Receipts</span>
                    </div>
                    <div className="w-12 text-right font-bold text-yellow-400">60%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-1/3 text-sm text-slate-300">Through deception</div>
                    <div className="flex-1 bg-slate-900 rounded h-10 flex items-center px-3 border border-slate-800">
                      <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">Statements</span>
                    </div>
                    <div className="w-12 text-right font-bold text-red-400">40%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entity Management & Scoring */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Entity Management */}
            <div>
              <h3 className="text-2xl font-recoleta font-bold mb-6 text-white">Entity Management</h3>
              <p className="text-slate-400 mb-8">
                Add and manage all people involved in the investigation. Track suspects, victims, and witnesses with complete profiles and connections.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-3xl font-bold text-white mb-1">12</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Suspects</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-3xl font-bold text-white mb-1">8</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Victims</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-3xl font-bold text-white mb-1">24</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Witnesses</div>
                </div>
              </div>
            </div>

            {/* Evidence Scoring */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Case Completion Status</h3>
                <span className="text-2xl font-bold text-blue-400">62%</span>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Suspect Identification</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Evidence Collection</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Review Status</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800 text-center text-sm text-slate-400 italic">
                Approaching court-ready threshold (80%)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Worldwide */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-recoleta font-bold mb-16">Trusted Worldwide</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6">
              <div className="text-4xl mb-4">🇲🇰</div>
              <div className="font-bold text-white mb-1">Macedonia</div>
              <div className="text-sm text-slate-500">Ministry of Internal Affairs</div>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🇺🇸</div>
              <div className="font-bold text-white mb-1">USA</div>
              <div className="text-sm text-slate-500">Law Enforcement Agencies</div>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🇨🇴</div>
              <div className="font-bold text-white mb-1">Colombia</div>
              <div className="text-sm text-slate-500">Judicial Institutions</div>
            </div>
          </div>

          <blockquote className="max-w-3xl mx-auto mb-16">
            <p className="text-2xl text-slate-300 font-recoleta italic leading-relaxed mb-6">
              &quot;E-Evidence has transformed how we approach investigations. The Blueprint Matrix provides clarity on what evidence we need, reducing case resolution time by <span className="font-sans">40%</span>.&quot;
            </p>
            <footer className="text-sm text-slate-500 uppercase tracking-widest font-bold">
              — Senior Investigator, Ministry of Internal Affairs
            </footer>
          </blockquote>

          <div className="flex flex-wrap justify-center gap-12 border-t border-slate-800 pt-16">
            <div>
              <div className="text-4xl font-bold text-white mb-1">1500+</div>
              <div className="text-xs text-slate-500 uppercase">Active Cases</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">250+</div>
              <div className="text-xs text-slate-500 uppercase">Investigators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">40%</div>
              <div className="text-xs text-slate-500 uppercase">Faster Resolution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Footer */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-slate-500 uppercase tracking-widest text-sm mb-12">Built With Modern Tech</h3>
          <div className="flex justify-center gap-12 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple text or icons for tech stack */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-cyan-400 font-bold text-xl">Re</div>
              <span className="text-xs text-slate-500">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-green-500 font-bold text-xl">Sp</div>
              <span className="text-xs text-slate-500">Spring Boot</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 font-bold text-xl">Pg</div>
              <span className="text-xs text-slate-500">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 flex items-center justify-center bg-blue-600">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-recoleta font-bold mb-8 text-white">SOLVE CASES FASTER.</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">Systematic investigation management for modern law enforcement.</p>
        </div>
      </section>

    </div>
  );
};

export default EvidencePage;
