"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const BankPage = () => {
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
    <div ref={containerRef} className="bg-background min-h-screen selection:bg-teal-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] translate-y-[-20%] translate-x-[20%]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-y-[20%] translate-x-[-20%]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm font-medium text-teal-300 tracking-wider uppercase">Enterprise Document Workflow</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 font-recoleta text-foreground leading-[0.9] tracking-tight">
              E-Dossier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">System.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              A comprehensive document lifecycle management platform. Automate approvals, enforce retention policies, and digitalize paper trails.
            </motion.p>
          </motion.div>

          {/* Abstract Interface Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl mx-auto bg-card border border-border rounded-t-2xl shadow-2xl overflow-hidden aspect-[16/9] relative"
          >
            {/* Fake Tool bar */}
            <div className="h-10 bg-muted/40 border-b border-border flex items-center px-4 gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                <div className="w-3 h-3 rounded-full bg-green-400/20" />
              </div>
              <div className="flex-1 bg-background/50 h-6 rounded-md border border-border/50 text-xs flex items-center px-3 text-muted-foreground">
                Search documents...
              </div>
            </div>

            <div className="p-6 grid grid-cols-4 gap-6 h-full">
              {/* Sidebar */}
              <div className="col-span-1 space-y-4 border-r border-border pr-2">
                <div className="flex items-center gap-2 font-bold text-foreground bg-accent/20 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                  Inbox
                </div>
                <div className="flex items-center gap-2 text-muted-foreground hover:bg-muted p-2 rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Pending Approval
                </div>
                <div className="flex items-center gap-2 text-muted-foreground hover:bg-muted p-2 rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                  Archived
                </div>
              </div>

              {/* Content */}
              <div className="col-span-3">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="font-bold text-lg">Recent Activity</h3>
                  <span className="py-1 px-3 bg-teal-500/10 text-teal-400 text-xs rounded-full">3 New Tasks</span>
                </div>

                <div className="space-y-4">
                  {/* Task Item */}
                  <div className="p-4 bg-background border border-border rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center rounded-lg text-blue-400">PDF</div>
                      <div>
                        <div className="font-bold text-sm">Loan_Agreement_v2.pdf</div>
                        <div className="text-xs text-muted-foreground">Requested by: Finance Dept</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">✓</div>
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">✕</div>
                    </div>
                  </div>

                  <div className="p-4 bg-background border border-border rounded-xl flex items-center justify-between shadow-sm opacity-60">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-500/10 flex items-center justify-center rounded-lg text-orange-400">DOC</div>
                      <div>
                        <div className="font-bold text-sm">Employee_Contract_JSmith.docx</div>
                        <div className="text-xs text-muted-foreground">Requested by: HR Dept</div>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">SIGNED</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-muted/20 border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Dynamic Workflows", desc: "Design custom approval chains with drag-and-drop ease. Route documents based on metadata, value, or department." },
              { title: "OCR & Indexing", desc: "Automatic Character Recognition allows scanning physical archives into fully searchable digital assets." },
              { title: "Version Control", desc: "Track every edit, comment, and signature. Restore previous versions instantly and maintain a full audit log." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="w-12 h-1 bg-teal-500 mb-6 group-hover:w-24 transition-all" />
                <h3 className="text-2xl font-bold font-recoleta mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Documents", value: "2M+" },
              { label: "Workflows", value: "20" },
              { label: "Users", value: "850+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-teal-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 overflow-hidden bg-card border-t border-border">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl font-recoleta font-bold text-foreground mb-6">Built for Enterprise Scale</h2>
        </div>

        <div className="flex gap-8 justify-center flex-wrap container mx-auto px-6">
          {[
            { name: "Java Spring", desc: "Robust Backend" },
            { name: "React", desc: "Dynamic UI" },
            { name: "PostgreSQL", desc: "Reliable Data" },
            { name: "Docker", desc: "Containerized" },
          ].map((tech, i) => (
            <div
              key={i}
              className="w-40 h-40 bg-background border border-border rounded-2xl flex flex-col items-center justify-center p-4 hover:border-teal-500/50 transition-colors"
            >
              <div className="text-2xl font-bold text-foreground text-center mb-2">{tech.name}</div>
              <span className="text-xs text-muted-foreground text-center">{tech.desc}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default BankPage;
