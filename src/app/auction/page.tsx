"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const AuctionPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
    <div ref={containerRef} className="bg-background min-h-screen selection:bg-purple-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm font-medium text-purple-300 tracking-wider uppercase">Live in Turkey 🇹🇷</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 font-recoleta text-foreground leading-[0.9] tracking-tight">
              Bi<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Teklif</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Turkey&apos;s premier auction platform where premium tech meets unbeatable prices.
              Secure, fast-paced, and thrilling.
            </motion.p>


          </motion.div>
        </div>

        {/* Hero Abstract Visual */}
        <motion.div
          style={{ y }}
          className="absolute bottom-0 left-0 right-0 h-[200px] w-full bg-gradient-to-t from-background to-transparent z-10"
        />
      </section>

      {/* Live Ticker */}
      <div className="border-y border-border/40 bg-card/10 backdrop-blur-md overflow-hidden py-4">
        <div className="flex gap-12 animate-marquee whitespace-nowrap opacity-70">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2">
                <span className="text-sm text-purple-400">iPhone 15 Pro</span>
                <span className="font-bold text-foreground">Sold: ₺12,450</span>
                <span className="text-xs text-green-400">(-65%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-indigo-400">PlayStation 5</span>
                <span className="font-bold text-foreground">Sold: ₺5,200</span>
                <span className="text-xs text-green-400">(-72%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-blue-400">Dyson Airwrap</span>
                <span className="font-bold text-foreground">Sold: ₺3,400</span>
                <span className="text-xs text-green-400">(-58%)</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Product Showcase */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[2rem] opacity-20 blur-xl" />
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                {/* Product Image */}
                <div className="h-72 bg-white flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-50" />
                  <img src="/optimized/macbookpro.webp" alt="MacBook Pro" className="h-full w-auto object-contain relative z-10 mix-blend-multiply transition-transform hover:scale-105 duration-500" />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg shadow-red-500/30">
                    CLOSING SOON
                  </div>
                </div>
                {/* Auction State */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">MacBook Pro M3</h3>
                      <p className="text-muted-foreground text-sm">14-inch • 1TB SSD • Space Gray</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Current Price</div>
                      <div className="text-3xl font-mono font-bold text-purple-400">₺14,250</div>
                    </div>
                  </div>

                  {/* Live Bids List */}
                  <div className="space-y-3 mb-8 bg-muted/30 p-4 rounded-xl">
                    {[
                      { user: "ahmet_yilmaz", type: "Single Bid", time: "Just now", active: true },
                      { user: "elin_92", type: "Auto Bid", time: "2s ago", active: false },
                      { user: "gamer_tr", type: "Single Bid", time: "4s ago", active: false },
                    ].map((bid, i) => (
                      <div key={i} className={`flex justify-between items-center ${bid.active ? 'text-purple-300 font-medium' : 'text-muted-foreground'}`}>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono opacity-50">{bid.time}</span>
                          <span className="text-sm">{bid.user}</span>
                        </div>
                        <span className="text-xs uppercase tracking-wider opacity-70 border border-current px-2 py-0.5 rounded">{bid.type}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20 active:scale-95">
                    Place Bid
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-recoleta font-bold mb-6 text-foreground">
                The Science of <br /> <span className="text-purple-500">Smart Bidding</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Biteklif is a strategic marketplace where timing is everything. Our real-time engine ensures every millisecond counts.
              </motion.p>

              <div className="space-y-8">
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">X-Second Countdown</h4>
                    <p className="text-muted-foreground">Every bid resets the timer. The last person standing when the clock hits zero wins the auction.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Guaranteed Delivery</h4>
                    <p className="text-muted-foreground">All products are 100% authentic, brand new, and shipped directly from official Turkish distributors.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section - Grid */}
      <section className="py-24 bg-card/30 border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { label: "Active Users", value: "50K+" },
              { label: "Auctions Won", value: "842" },
              { label: "Avg. Discount", value: "72%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-purple-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-recoleta font-bold text-foreground mb-6">Built for Speed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handling thousands of concurrent bids requires a robust architecture.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

          <div className="flex gap-8 justify-center flex-wrap container mx-auto px-6 z-0 relative">
            {[
              { name: "Node.js", desc: "Backend Runtime", icon: "devicon-nodejs-plain" },
              { name: "Socket.io", desc: "Real-time Sync", icon: "devicon-socketio-original" },
              { name: "Redis", desc: "Pub/Sub Messaging", icon: "devicon-redis-plain" },
              { name: "PostgreSQL", desc: "Transactional Data", icon: "devicon-postgresql-plain" },
              { name: "Next.js", desc: "Frontend Framework", icon: "devicon-nextjs-original" },
              { name: "Iyzico", desc: "Payments", icon: "credit-card" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="w-40 h-40 bg-card border border-border rounded-2xl flex flex-col items-center justify-center p-4 hover:border-purple-500/50 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 mb-3 rounded-full bg-background flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <span className="font-mono font-bold text-purple-400">{tech.name.substring(0, 2)}</span>
                </div>
                <span className="font-bold text-foreground text-sm">{tech.name}</span>
                <span className="text-xs text-muted-foreground text-center mt-1">{tech.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-purple-900/5" />
        <div className="container mx-auto px-6 relative text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mb-8">
            <div className="bg-background rounded-full px-6 py-2">
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">DON&apos;T MISS THE NEXT DROP</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-recoleta font-bold text-foreground mb-8">Ready to win?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Join thousands of winners saving big on BiTeklif today.
          </p>
          <a href="https://biteklif.tr" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-foreground text-background text-lg font-bold rounded-full hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/20 inline-block">
            Go to BiTeklif.tr
          </a>
        </div>
      </section>
    </div>
  );
};

export default AuctionPage;
