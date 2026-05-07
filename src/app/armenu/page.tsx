'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Kanit } from 'next/font/google';
import Link from 'next/link';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const STEPS = [
  { title: 'Scan QR', desc: 'Guests scan the code on the table using their default camera app. No app download needed.' },
  { title: 'Visualize', desc: 'High-fidelity 3D models appear directly on the table in true-to-life scale via WebXR.' },
  { title: 'Order', desc: 'Seamless POS integration for instant contactless ordering from any table.' },
];

const DASHBOARD_ROWS = [
  { item: 'Truffle Pasta', price: '$24.00', views: 142, sales: 45 },
  { item: 'Wagyu Burger', price: '$28.00', views: 230, sales: 89 },
  { item: 'Caesar Salad', price: '$16.00', views: 85, sales: 12 },
];

const FEATURES = [
  { icon: '✦', text: 'Real-time inventory sync across all tables' },
  { icon: '✦', text: 'Dynamic pricing engine — update in seconds' },
  { icon: '✦', text: 'Sales analytics & heatmaps dashboard' },
];

export default function ArMenuPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const br = 'clamp(20px,3vw,40px)';

  return (
    <div
      ref={containerRef}
      className={kanit.className}
      style={{ backgroundColor: '#0C0C0C', minHeight: '100vh', overflowX: 'clip', color: '#D7E2EA' }}
    >
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 pt-6 flex justify-between items-center">
        <Link
          href="/"
          className="font-medium uppercase tracking-widest text-sm transition-opacity hover:opacity-60"
          style={{ color: '#D7E2EA' }}
        >
          ← Back
        </Link>
        <span
          className="font-black uppercase tracking-widest text-xs px-4 py-2 rounded-full"
          style={{ border: '1px solid rgba(215,226,234,0.2)', color: '#646973' }}
        >
          Personal Project
        </span>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Ambient glows */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px]"
            style={{ background: 'rgba(255,100,0,0.06)' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px]"
            style={{ background: 'rgba(180,0,168,0.06)' }} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left copy */}
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeIn} className="mb-6">
                <span
                  className="px-4 py-1.5 rounded-full font-medium uppercase tracking-widest text-xs"
                  style={{ border: '1px solid rgba(215,226,234,0.2)', color: '#D7E2EA', opacity: 0.6 }}
                >
                  AR · Next-Gen Dining
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="font-black uppercase leading-none tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
              >
                Taste in{' '}
                <span className="hero-heading">Augmented Reality.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="font-light leading-relaxed mb-10"
                style={{ color: '#D7E2EA', opacity: 0.65, fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', maxWidth: '480px' }}
              >
                Transform your paper menu into an immersive 3D experience. Let guests visualize dishes on their table before they order.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a
                  href="https://coresense.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full font-medium uppercase tracking-widest text-white px-8 py-3.5"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                    fontSize: '0.85rem',
                  }}
                >
                  View Demo ↗
                </a>
                <a
                  href="https://coresense.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full font-medium uppercase tracking-widest px-8 py-3.5 transition-colors"
                  style={{
                    border: '2px solid rgba(215,226,234,0.3)',
                    color: '#D7E2EA',
                    fontSize: '0.85rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(215,226,234,0.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  For Restaurants
                </a>
              </motion.div>
            </div>

            {/* Right — phone mockup */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative"
                style={{ width: 'clamp(220px,28vw,300px)' }}
              >
                {/* Glow behind phone */}
                <div className="absolute inset-0 rounded-[2.5rem] blur-3xl -z-10"
                  style={{ background: 'radial-gradient(circle, rgba(182,0,168,0.2) 0%, transparent 70%)' }} />

                {/* Phone shell */}
                <div
                  className="relative shadow-2xl overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '2.5rem',
                    border: '6px solid #1a1a1a',
                    aspectRatio: '9/19',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
                  }}
                >
                  {/* App header */}
                  <div className="shrink-0 p-5 pt-9" style={{ background: '#1e40af' }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="space-y-1">
                        {[6, 4, 6].map((w, i) => (
                          <div key={i} style={{ width: `${w * 4}px`, height: '2px', background: 'rgba(255,255,255,0.8)', borderRadius: '99px' }} />
                        ))}
                      </div>
                      <h3 className="font-black text-white text-lg tracking-wide">Carmine&apos;s</h3>
                    </div>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" fill="none" stroke="rgba(147,197,253,1)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      <input readOnly placeholder="Search..." className="w-full text-xs rounded-xl py-2.5 pl-9 pr-3 focus:outline-none placeholder:text-blue-300" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(219,234,254,1)' }} />
                    </div>
                  </div>

                  {/* App content */}
                  <div className="flex-1 overflow-hidden bg-gray-50 p-4 space-y-4">
                    <div className="flex gap-2">
                      {['All', 'Pizza', 'Pasta'].map((c, i) => (
                        <span key={c} className={`flex items-center justify-center text-xs font-bold rounded-full ${i === 0 ? 'w-9 h-9 text-white shadow-md' : 'px-3 h-9 border'}`}
                          style={i === 0 ? { background: '#1e40af', boxShadow: '0 4px 12px rgba(30,64,175,0.4)' } : { borderColor: '#bfdbfe', color: '#1e40af' }}>
                          {c}
                        </span>
                      ))}
                    </div>
                    <p className="font-black text-gray-900 text-sm">Special Foods</p>
                    {[
                      { src: '/alfredo.webp', label: 'Grilled Chicken Alfredo', tag: 'SPECIAL', tagColor: '#1e40af', price: '$12' },
                      { src: '/chickenwings.webp', label: 'Spicy Wings', tag: 'HOT', tagColor: '#ef4444', price: '$8' },
                    ].map((item) => (
                      <div key={item.label} className="bg-white rounded-2xl p-2.5 shadow-sm border border-gray-100">
                        <div className="h-24 rounded-xl bg-gray-100 mb-2 relative overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                          <span className="absolute top-1.5 left-1.5 text-white text-[9px] font-black px-2 py-0.5 rounded" style={{ background: item.tagColor }}>{item.tag}</span>
                          <span className="absolute bottom-1.5 right-1.5 text-white text-[10px] font-black px-2 py-0.5 rounded-lg" style={{ background: '#1e40af' }}>{item.price}</span>
                        </div>
                        <p className="font-bold text-gray-900 text-xs">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="h-14 bg-white border-t border-gray-100 flex items-center justify-around px-2 shrink-0">
                    {['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
                      'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                      'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
                      'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
                    ].map((d, i) => (
                      <svg key={i} className="w-5 h-5" fill="none" stroke={i === 0 ? '#1e40af' : '#d1d5db'} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)', color: '#D7E2EA' }}
            >
              How it works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-8 flex flex-col gap-6"
                style={{
                  border: '1px solid rgba(215,226,234,0.15)',
                  borderRadius: br,
                  background: 'rgba(215,226,234,0.03)',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(215,226,234,0.35)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(215,226,234,0.15)')}
              >
                <span
                  className="absolute top-5 right-6 font-black"
                  style={{ color: 'rgba(215,226,234,0.06)', fontSize: 'clamp(4rem,8vw,6rem)', lineHeight: 1 }}
                >
                  0{i + 1}
                </span>
                <div
                  className="w-12 h-12 flex items-center justify-center font-black rounded-2xl"
                  style={{ border: '1px solid rgba(215,226,234,0.2)', color: '#D7E2EA', fontSize: '1.2rem' }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tight mb-2" style={{ color: '#D7E2EA', fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>
                    {step.title}
                  </h3>
                  <p className="font-light leading-relaxed" style={{ color: '#D7E2EA', opacity: 0.55, fontSize: 'clamp(0.85rem,1.4vw,1rem)' }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESTAURANT COMMAND CENTER ── */}
      <section
        className="py-28 px-6 rounded-t-[40px] sm:rounded-t-[60px]"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-black uppercase leading-none tracking-tight mb-8"
              style={{ color: '#0C0C0C', fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              Restaurant<br />
              <span style={{
                background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Command Center
              </span>
            </h2>
            <p className="font-light leading-relaxed mb-10" style={{ color: '#0C0C0C', opacity: 0.6, fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', maxWidth: '440px' }}>
              Update your menu in real-time. Sold out of the special? Hide it instantly. Change pricing? Done in seconds across all tables.
            </p>
            <div className="flex flex-col gap-5">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span style={{ color: '#646973', fontSize: '1.2rem' }}>✦</span>
                  <span className="font-medium" style={{ color: '#0C0C0C', fontSize: 'clamp(0.9rem,1.5vw,1.05rem)' }}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] p-6 shadow-2xl"
            style={{ border: '1px solid rgba(12,12,12,0.1)', backgroundColor: '#f8f9fa' }}
          >
            <div className="flex justify-between items-center mb-8 pb-4" style={{ borderBottom: '1px solid rgba(12,12,12,0.08)' }}>
              <span className="font-black text-lg" style={{ color: '#0C0C0C' }}>Menu Manager</span>
              <div className="flex gap-2">
                {['#ef4444', '#f59e0b', '#10b981'].map((c) => (
                  <span key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {DASHBOARD_ROWS.map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 rounded-2xl transition-colors"
                  style={{ backgroundColor: 'white' }}
                >
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#0C0C0C' }}>{row.item}</p>
                    <p className="text-xs" style={{ color: '#0C0C0C', opacity: 0.45 }}>{row.price}</p>
                  </div>
                  <div className="flex gap-5 text-xs">
                    <div className="text-center">
                      <p className="font-black" style={{ color: '#0C0C0C' }}>{row.views}</p>
                      <p style={{ color: '#0C0C0C', opacity: 0.4 }}>Views</p>
                    </div>
                    <div className="text-center">
                      <p className="font-black" style={{ color: '#10b981' }}>{row.sales}</p>
                      <p style={{ color: '#10b981', opacity: 0.7 }}>Orders</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 flex justify-between items-center" style={{ borderTop: '1px solid rgba(12,12,12,0.08)' }}>
              <span className="text-sm font-medium" style={{ color: '#0C0C0C', opacity: 0.45 }}>Revenue Today</span>
              <span className="font-black text-2xl" style={{ color: '#0C0C0C' }}>$4,290.50</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 px-6" style={{ backgroundColor: '#0C0C0C' }}>
        <div className="container mx-auto text-center">
          <p
            className="font-medium uppercase tracking-widest mb-10"
            style={{ color: '#646973', fontSize: '0.75rem' }}
          >
            Built with
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['React Three Fiber', 'WebXR', 'Node.js', 'TensorFlow.js'].map((t) => (
              <span key={t} className="font-black uppercase tracking-wider" style={{ color: '#D7E2EA', opacity: 0.3, fontSize: 'clamp(0.9rem,2vw,1.3rem)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-28 px-6 rounded-t-[40px] sm:rounded-t-[60px] text-center"
        style={{ backgroundColor: '#111115' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black uppercase leading-none tracking-tight mb-6"
          style={{ color: '#D7E2EA', fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          Ready to upgrade<br />your menu?
        </motion.h2>
        <p className="font-light mb-12" style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(1rem,1.8vw,1.25rem)' }}>
          Join 500+ restaurants using AR to boost sales by 30%
        </p>
        <a
          href="https://coresense.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full font-medium uppercase tracking-widest text-white px-12 py-5"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
            outline: '2px solid white',
            outlineOffset: '-3px',
            fontSize: 'clamp(0.8rem,1.2vw,0.95rem)',
          }}
        >
          Get Started Free ↗
        </a>

        {/* Footer */}
        <div className="mt-20 pt-8 flex justify-between items-center" style={{ borderTop: '1px solid rgba(215,226,234,0.1)' }}>
          <Link href="/" className="font-medium uppercase tracking-widest text-xs transition-opacity hover:opacity-60" style={{ color: '#646973' }}>
            ← Portfolio
          </Link>
          <span className="font-black uppercase tracking-widest text-xs" style={{ color: '#646973' }}>
            © 2025 Eren Ahmed
          </span>
        </div>
      </section>
    </div>
  );
}
