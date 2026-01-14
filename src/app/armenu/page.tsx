"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const ArMenuPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-background min-h-screen selection:bg-orange-500/30 font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Ambient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-orange-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-yellow-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest bg-orange-500/10">
                  Next-Gen Dining
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 font-recoleta leading-[1.1]">
                Taste in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Augmented Reality.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-lg px-4 sm:px-0">
                Transform your paper menu into an immersive 3D experience. Let guests visualize dishes on their table before they order.
              </motion.p>

              <div className="flex gap-4">
                <a
                  href="https://coresense.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-xl shadow-orange-600/20 inline-block text-center"
                >
                  View Demo
                </a>
                <a
                  href="https://coresense.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-card border border-border hover:bg-muted text-foreground font-bold rounded-full transition-all inline-block text-center"
                >
                  For Restaurants
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-[240px] sm:w-[280px] md:w-[320px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-[2rem] sm:rounded-[2.5rem] blur-2xl -z-10" />
                <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] border-4 sm:border-8 border-gray-800 shadow-2xl overflow-hidden aspect-[9/19] flex flex-col">

                  {/* App Header */}
                  <div className="bg-blue-600 p-6 pt-10 text-white shrink-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="space-y-1">
                        <div className="w-6 h-0.5 bg-white/80 rounded block"></div>
                        <div className="w-4 h-0.5 bg-white/80 rounded block"></div>
                        <div className="w-6 h-0.5 bg-white/80 rounded block"></div>
                      </div>
                      <h3 className="font-recoleta font-bold text-lg sm:text-xl md:text-2xl tracking-wide">Carmine&apos;s</h3>
                    </div>

                    <div className="relative">
                      <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-blue-500/50 placeholder:text-blue-200 text-sm rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white/20"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 overflow-y-auto bg-gray-50 p-5 space-y-6">

                    {/* Categories */}
                    <div className="flex gap-3">
                      <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-500/30">All</span>
                      <span className="px-4 h-10 rounded-full border border-blue-200 text-blue-600 flex items-center justify-center text-xs font-bold">Pizza</span>
                      <span className="px-4 h-10 rounded-full border border-blue-200 text-blue-600 flex items-center justify-center text-xs font-bold">Pasta</span>
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-4">
                        <h4 className="font-recoleta font-bold text-lg text-gray-900">Special Foods</h4>
                        <span className="text-xs font-bold text-blue-600">See All</span>
                      </div>

                      <div className="space-y-5">
                        {/* Card 1 - Alfredo */}
                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 group">
                          <div className="h-32 rounded-xl bg-gray-100 mb-3 relative overflow-hidden">
                            <img src="/optimized/alfredo.webp" alt="Alfredo" className="w-full h-full object-cover" />
                            <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">SPECIAL</div>
                            <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">$12</div>
                          </div>
                          <h5 className="font-bold text-gray-900 mb-1">Grilled Chicken Alfredo</h5>
                          <p className="text-xs text-gray-500">Tender grilled chicken breast...</p>
                        </div>

                        {/* Card 2 - Wings */}
                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 group">
                          <div className="h-32 rounded-xl bg-gray-100 mb-3 relative overflow-hidden">
                            <img src="/optimized/chickenwings.webp" alt="Wings" className="w-full h-full object-cover" />
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">HOT</div>
                            <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">$8</div>
                          </div>
                          <h5 className="font-bold text-gray-900 mb-1">Spicy Wings</h5>
                          <p className="text-xs text-gray-500">Crispy wings with buffalo...</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Navigation Bar */}
                  <div className="h-16 bg-white border-t border-gray-100 flex items-center justify-around px-2 text-gray-300">
                    <div className="flex flex-col items-center gap-1 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section - 3 Steps */}
      <section className="py-32 bg-card/20 border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold font-recoleta mb-4">The New Standard</h2>
            <p className="text-muted-foreground w-full max-w-2xl mx-auto">No apps to download. Just scan a QR code and instant immersion.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Scan QR", desc: "Guests scan the code on the table using their default camera app." },
              { title: "Visualize", desc: "High-fidelity 3D models appear directly on the table in true-to-life scale." },
              { title: "Order", desc: "Seamless integration with POS systems for instant contactless ordering." },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group p-8 rounded-3xl bg-card border border-border hover:border-orange-500/50 transition-all"
              >
                <div className="text-6xl font-black text-muted-foreground/10 group-hover:text-orange-500/10 absolute top-4 right-6 transition-colors">
                  0{i + 1}
                </div>
                <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-6 border border-border group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <span className="text-xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-recoleta">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Section - Dashboard */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-recoleta font-bold mb-8">
                Restaurant <br /> <span className="text-orange-500">Command Center</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Update your menu in real-time. Sold out of the special? Hide it instantly. Want to change pricing? Done in seconds across all tables.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-foreground font-medium">Real-time inventory sync</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <span className="text-foreground font-medium">Dynamic pricing engine</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <span className="text-foreground font-medium">Sales analytics & heatmaps</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 shadow-2xl"
            >
              {/* Mock Dashboard UI */}
              <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
                <span className="font-bold text-lg">Menu Manager</span>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { item: "Truffle Pasta", price: "$24.00", views: 142, sales: 45 },
                  { item: "Wagyu Burger", price: "$28.00", views: 230, sales: 89 },
                  { item: "Caesar Salad", price: "$16.00", views: 85, sales: 12 },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-background rounded-lg hover:bg-muted/50 transition-colors">
                    <div>
                      <div className="font-bold text-sm block">{row.item}</div>
                      <span className="text-xs text-muted-foreground">{row.price}</span>
                    </div>
                    <div className="flex gap-4 text-xs">
                      <div className="text-center">
                        <div className="font-bold">{row.views}</div>
                        <div className="text-muted-foreground">Views</div>
                      </div>
                      <div className="text-center text-green-500">
                        <div className="font-bold">{row.sales}</div>
                        <div className="text-green-500/70">Orders</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-muted-foreground">Total Revenue (Today)</span>
                  <span className="text-2xl font-black text-foreground">$4,290.50</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-lg uppercase tracking-widest text-muted-foreground mb-12">Built With</h2>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-60">
            <span className="text-xl font-bold font-mono">React Three Fiber</span>
            <span className="text-xl font-bold font-mono">WebXR</span>
            <span className="text-xl font-bold font-mono">Node.js</span>
            <span className="text-xl font-bold font-mono">TensorFlow.js</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold font-recoleta mb-8 max-w-4xl">
          Ready to upgrade your menu?
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Join 500+ restaurants using AR to boost sales by 30%
        </p>
        <a
          href="https://coresense.org"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-5 bg-foreground text-background font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-2xl inline-block"
        >
          Get Started Free
        </a>
      </section>

    </div>
  );
};

export default ArMenuPage;
