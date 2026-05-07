'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';

/* ─── Shared panel wrapper ─── */
function Panel({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        background: 'rgba(215,226,234,0.04)',
        border: '1px solid rgba(215,226,234,0.1)',
        borderRadius: 'clamp(16px,3vw,32px)',
        padding: 'clamp(12px,2vw,20px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const dim: React.CSSProperties = { color: '#D7E2EA', opacity: 0.4 };
const bright: React.CSSProperties = { color: '#D7E2EA' };
const label: React.CSSProperties = { ...dim, fontSize: 'clamp(0.55rem,1vw,0.7rem)', textTransform: 'uppercase', letterSpacing: '0.08em' };
const value: React.CSSProperties = { ...bright, fontWeight: 900, fontSize: 'clamp(0.8rem,1.6vw,1.1rem)' };

/* ─── AUCTION UI ─── */
function AuctionLeftTop() {
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="flex justify-between items-start">
        <span style={{ ...label }}>Live Auction</span>
        <span className="flex items-center gap-1">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
          <span style={{ ...label, color: '#ef4444', opacity: 1 }}>LIVE</span>
        </span>
      </div>
      <div>
        <p style={{ ...dim, fontSize: 'clamp(0.6rem,1vw,0.72rem)', marginBottom: 2 }}>Vintage Rolex Submariner</p>
        <p style={{ color: '#D7E2EA', fontWeight: 900, fontSize: 'clamp(1.1rem,2.5vw,1.8rem)', lineHeight: 1 }}>$2,450.00</p>
        <p style={{ ...dim, fontSize: 'clamp(0.55rem,0.9vw,0.68rem)', marginTop: 2 }}>24 bids · Reserve met</p>
      </div>
      <div>
        <div style={{ height: 4, background: 'rgba(215,226,234,0.1)', borderRadius: 99, overflow: 'hidden', marginBottom: 6 }}>
          <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg,#B600A8,#7621B0)', borderRadius: 99 }} />
        </div>
        <div className="flex justify-between">
          <span style={{ ...label }}>⏱ 01h 23m 45s</span>
          <span style={{ ...label, color: '#D7E2EA', opacity: 0.7 }}>72% filled</span>
        </div>
      </div>
      <button style={{ background: 'rgba(182,0,168,0.15)', border: '1px solid rgba(182,0,168,0.4)', borderRadius: 99, padding: '6px 14px', ...bright, fontSize: 'clamp(0.6rem,1vw,0.72rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'default', width: '100%' }}>
        Place Bid →
      </button>
    </Panel>
  );
}
function AuctionLeftBottom() {
  const bids = [
    { user: 'User#4832', amount: '+$150', time: '2m ago' },
    { user: 'User#2211', amount: '+$200', time: '5m ago' },
    { user: 'User#9901', amount: '+$100', time: '12m ago' },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ ...label, marginBottom: 4 }}>Recent Bids</p>
      {bids.map((b, i) => (
        <div key={i} className="flex justify-between items-center" style={{ padding: '6px 8px', background: 'rgba(215,226,234,0.04)', borderRadius: 10 }}>
          <span style={{ ...bright, fontSize: 'clamp(0.6rem,1vw,0.72rem)', fontWeight: 600 }}>{b.user}</span>
          <span style={{ color: '#4ade80', fontSize: 'clamp(0.6rem,1vw,0.72rem)', fontWeight: 700 }}>{b.amount}</span>
          <span style={{ ...dim, fontSize: 'clamp(0.55rem,0.9vw,0.65rem)' }}>{b.time}</span>
        </div>
      ))}
    </Panel>
  );
}
function AuctionRight() {
  const items = [
    { name: 'Vintage Rolex', bid: '$2,450', count: 24, pct: 72 },
    { name: 'MacBook Pro M3', bid: '$1,890', count: 18, pct: 55 },
    { name: 'Signed Jersey', bid: '$445', count: 31, pct: 38 },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="flex justify-between items-center">
        <p style={{ ...bright, fontWeight: 900, fontSize: 'clamp(0.75rem,1.3vw,0.95rem)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Auction Dashboard</p>
        <span style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 99, padding: '2px 8px', color: '#4ade80', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Online</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[['12', 'Active'], ['347', 'Bids'], ['$18.2K', 'Volume']].map(([v, l]) => (
          <div key={l} style={{ background: 'rgba(215,226,234,0.05)', borderRadius: 10, padding: '8px 10px' }}>
            <p style={{ ...bright, fontWeight: 900, fontSize: 'clamp(0.85rem,1.6vw,1.1rem)' }}>{v}</p>
            <p style={{ ...label }}>{l}</p>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(215,226,234,0.08)', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <div key={i}>
            <div className="flex justify-between items-center" style={{ marginBottom: 4 }}>
              <span style={{ ...bright, fontSize: 'clamp(0.6rem,1vw,0.73rem)', fontWeight: 600 }}>{it.name}</span>
              <span style={{ ...bright, fontSize: 'clamp(0.6rem,1vw,0.73rem)', fontWeight: 900 }}>{it.bid}</span>
            </div>
            <div style={{ height: 3, background: 'rgba(215,226,234,0.08)', borderRadius: 99 }}>
              <div style={{ width: `${it.pct}%`, height: '100%', background: 'linear-gradient(90deg,#B600A8,#7621B0)', borderRadius: 99 }} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* ─── AR MENU UI ─── */
function ARMenuLeftTop() {
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="flex justify-between items-start">
        <span style={{ ...label }}>Special Foods</span>
        <span style={{ color: '#f97316', fontSize: '0.65rem', fontWeight: 700, opacity: 0.9 }}>AR ◉</span>
      </div>
      <div>
        <p style={{ ...bright, fontWeight: 900, fontSize: 'clamp(0.75rem,1.4vw,0.95rem)', lineHeight: 1.2 }}>Grilled Chicken Alfredo</p>
        <p style={{ ...dim, fontSize: 'clamp(0.55rem,0.9vw,0.68rem)', marginTop: 3 }}>Tender grilled chicken breast with creamy sauce</p>
      </div>
      <div className="flex items-center gap-1">
        {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#f97316', fontSize: '0.7rem' }}>★</span>)}
        <span style={{ ...dim, fontSize: '0.6rem', marginLeft: 3 }}>127 reviews</span>
      </div>
      <div className="flex justify-between items-center">
        <span style={{ color: '#f97316', fontWeight: 900, fontSize: 'clamp(0.9rem,1.8vw,1.2rem)' }}>$12.00</span>
        <button style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: 99, padding: '5px 12px', color: '#f97316', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', cursor: 'default' }}>+ Add</button>
      </div>
    </Panel>
  );
}
function ARMenuLeftBottom() {
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="flex justify-between items-center">
        <span style={{ ...label }}>AR Mode</span>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
      </div>
      <div style={{ flex: 1, margin: '8px 0', background: 'rgba(215,226,234,0.03)', borderRadius: 12, border: '1px dashed rgba(215,226,234,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        <span style={{ ...dim, fontSize: '1.2rem' }}>⬡</span>
        <span style={{ ...dim, fontSize: 'clamp(0.55rem,0.9vw,0.66rem)', textAlign: 'center' }}>Point camera at table</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ ...label, color: '#4ade80', opacity: 1 }}>● Active</span>
        <span style={{ ...label }}>WebXR</span>
      </div>
    </Panel>
  );
}
function ARMenuRight() {
  const popular = [
    { name: 'Chicken Alfredo', pct: 68 },
    { name: 'Spicy Wings', pct: 52 },
    { name: 'Margherita Pizza', pct: 41 },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="flex justify-between items-center">
        <p style={{ ...bright, fontWeight: 900, fontSize: 'clamp(0.75rem,1.3vw,0.95rem)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Carmine&apos;s</p>
        <span style={{ ...label, color: '#f97316', opacity: 1 }}>18 tables active</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[['42', 'Items'], ['23/hr', 'Orders'], ['4.9★', 'Rating']].map(([v, l]) => (
          <div key={l} style={{ background: 'rgba(215,226,234,0.05)', borderRadius: 10, padding: '8px 10px' }}>
            <p style={{ color: '#f97316', fontWeight: 900, fontSize: 'clamp(0.85rem,1.6vw,1.05rem)' }}>{v}</p>
            <p style={{ ...label }}>{l}</p>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(215,226,234,0.08)', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p style={{ ...label, marginBottom: 2 }}>Popular Items</p>
        {popular.map((it, i) => (
          <div key={i}>
            <div className="flex justify-between items-center" style={{ marginBottom: 3 }}>
              <span style={{ ...bright, fontSize: 'clamp(0.6rem,1vw,0.73rem)', fontWeight: 600 }}>{it.name}</span>
              <span style={{ ...dim, fontSize: 'clamp(0.55rem,0.9vw,0.65rem)' }}>{it.pct}%</span>
            </div>
            <div style={{ height: 3, background: 'rgba(215,226,234,0.08)', borderRadius: 99 }}>
              <div style={{ width: `${it.pct}%`, height: '100%', background: 'linear-gradient(90deg,#f97316,#ef4444)', borderRadius: 99 }} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* ─── BANK UI ─── */
function BankLeftTop() {
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="flex justify-between items-start">
        <span style={{ ...label }}>Savings Account</span>
        <span style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 99, padding: '2px 7px', color: '#60a5fa', fontSize: '0.58rem', fontWeight: 700 }}>SECURED</span>
      </div>
      <div>
        <p style={{ ...dim, fontSize: 'clamp(0.55rem,0.9vw,0.68rem)', marginBottom: 2 }}>Available Balance</p>
        <p style={{ color: '#D7E2EA', fontWeight: 900, fontSize: 'clamp(1.1rem,2.5vw,1.8rem)', lineHeight: 1 }}>$24,831.50</p>
        <p style={{ color: '#4ade80', fontSize: 'clamp(0.55rem,0.9vw,0.68rem)', marginTop: 4, fontWeight: 600 }}>↑ +2.4% this month</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {['Transfer', 'Withdraw'].map(b => (
          <button key={b} style={{ background: 'rgba(215,226,234,0.06)', border: '1px solid rgba(215,226,234,0.12)', borderRadius: 10, padding: '6px 0', ...bright, fontSize: 'clamp(0.55rem,0.9vw,0.68rem)', fontWeight: 700, cursor: 'default' }}>{b}</button>
        ))}
      </div>
    </Panel>
  );
}
function BankLeftBottom() {
  const txs = [
    { label: 'Salary', amount: '+$3,200', time: 'Today', green: true },
    { label: 'Rent', amount: '-$850', time: 'Yesterday', green: false },
    { label: 'Coffee', amount: '-$4.50', time: '2d ago', green: false },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <p style={{ ...label, marginBottom: 4 }}>Transactions</p>
      {txs.map((t, i) => (
        <div key={i} className="flex justify-between items-center" style={{ padding: '5px 8px', background: 'rgba(215,226,234,0.04)', borderRadius: 8 }}>
          <span style={{ ...bright, fontSize: 'clamp(0.6rem,1vw,0.72rem)', fontWeight: 600 }}>{t.label}</span>
          <span style={{ color: t.green ? '#4ade80' : '#D7E2EA', fontSize: 'clamp(0.6rem,1vw,0.72rem)', fontWeight: 700 }}>{t.amount}</span>
          <span style={{ ...dim, fontSize: 'clamp(0.55rem,0.9vw,0.64rem)' }}>{t.time}</span>
        </div>
      ))}
    </Panel>
  );
}
function BankRight() {
  const months = [35, 55, 42, 70, 58, 85, 62, 90, 75, 88, 65, 95];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="flex justify-between items-center">
        <p style={{ ...bright, fontWeight: 900, fontSize: 'clamp(0.75rem,1.3vw,0.95rem)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Banking Dashboard</p>
        <span style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 99, padding: '2px 8px', color: '#4ade80', fontSize: '0.58rem', fontWeight: 700 }}>● Secure</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[['$48.3K', 'Assets'], ['+$4.3K', 'Monthly In'], ['-$2.2K', 'Monthly Out']].map(([v, l], i) => (
          <div key={l} style={{ background: 'rgba(215,226,234,0.05)', borderRadius: 10, padding: '8px 10px' }}>
            <p style={{ color: i === 2 ? '#f87171' : '#4ade80', fontWeight: 900, fontSize: 'clamp(0.75rem,1.4vw,0.95rem)' }}>{v}</p>
            <p style={{ ...label }}>{l}</p>
          </div>
        ))}
      </div>
      {/* Mini bar chart */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 3, borderTop: '1px solid rgba(215,226,234,0.08)', paddingTop: 10 }}>
        {months.map((h, i) => (
          <div key={i} style={{ flex: 1, background: i === months.length - 1 ? 'linear-gradient(180deg,#60a5fa,#3b82f6)' : 'rgba(59,130,246,0.25)', borderRadius: '4px 4px 0 0', height: `${h}%`, minHeight: 4 }} />
        ))}
      </div>
      <p style={{ ...label, textAlign: 'center' }}>12-month balance trend</p>
    </Panel>
  );
}

/* ─── Project card data ─── */
const PROJECTS = [
  { number: '01', name: 'Auction Platform', category: 'Client', link: '/auction', LeftTop: AuctionLeftTop, LeftBottom: AuctionLeftBottom, Right: AuctionRight },
  { number: '02', name: 'AR Menu App', category: 'Personal', link: '/armenu', LeftTop: ARMenuLeftTop, LeftBottom: ARMenuLeftBottom, Right: ARMenuRight },
  { number: '03', name: 'Bank System', category: 'Client', link: '/bank', LeftTop: BankLeftTop, LeftBottom: BankLeftBottom, Right: BankRight },
];

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project, index, total, progress }: { project: Project; index: number; total: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, (index + 1) / total], [1, targetScale]);
  const { LeftTop, LeftBottom, Right } = project;

  return (
    <div style={{ height: '85vh', position: 'relative' }}>
      <motion.div
        style={{
          scale,
          position: 'sticky',
          top: `${96 + index * 28}px`,
          transformOrigin: 'top center',
          backgroundColor: '#0C0C0C',
          borderRadius: 'clamp(32px,5vw,60px)',
          border: '2px solid rgba(215,226,234,0.2)',
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="p-4 sm:p-6 md:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 gap-4 flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-black leading-none flex-shrink-0" style={{ color: '#D7E2EA', fontSize: 'clamp(2.5rem,6vw,100px)' }}>
              {project.number}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.55rem,0.9vw,0.75rem)' }}>
                {project.category}
              </span>
              <span className="font-black uppercase truncate" style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem,2vw,1.8rem)' }}>
                {project.name}
              </span>
            </div>
          </div>
          <a
            href={project.link}
            className="flex-shrink-0 rounded-full font-medium uppercase tracking-widest text-center"
            style={{ border: '2px solid rgba(215,226,234,0.4)', color: '#D7E2EA', background: 'transparent', padding: 'clamp(8px,1vw,12px) clamp(16px,2vw,28px)', fontSize: 'clamp(0.65rem,1vw,0.82rem)', transition: 'background 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(215,226,234,0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            View Project
          </a>
        </div>

        {/* UI Grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="flex flex-col gap-3 sm:gap-4 min-h-0" style={{ width: '40%' }}>
            <div style={{ flex: '1 1 0', minHeight: 0 }}><LeftTop /></div>
            <div style={{ flex: '1.4 1 0', minHeight: 0 }}><LeftBottom /></div>
          </div>
          <div style={{ width: '60%', minHeight: 0 }}><Right /></div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section id="projects" className="-mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20" style={{ backgroundColor: '#0C0C0C' }}>
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16" style={{ fontSize: 'clamp(3rem,12vw,160px)' }}>
          Projects
        </h2>
      </FadeIn>
      <div ref={containerRef}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
