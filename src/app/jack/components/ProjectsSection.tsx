'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';

/* ─── Panel ─── */
function Panel({ children, className = '', style = {}, accent = 'rgba(215,226,234,0.06)' }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties; accent?: string;
}) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        background: accent,
        border: '1px solid rgba(215,226,234,0.09)',
        borderRadius: 'clamp(14px,2.5vw,28px)',
        padding: 'clamp(10px,1.8vw,18px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const dim: React.CSSProperties = { color: '#D7E2EA', opacity: 0.38 };
const bright: React.CSSProperties = { color: '#D7E2EA' };
const lbl = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  color: '#D7E2EA', opacity: 0.38, fontSize: 'clamp(0.52rem,0.9vw,0.67rem)', textTransform: 'uppercase', letterSpacing: '0.08em', ...extra,
});

/* ══════════════════════════════════════════
   CARD 01 — AUCTION (purple / magenta)
   Layout: left 40% [top + bottom] | right 60%
══════════════════════════════════════════ */
function AuctionLeftTop() {
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} accent="rgba(182,0,168,0.08)">
      <div className="flex justify-between items-start">
        <span style={lbl()}>Live Auction</span>
        <span className="flex items-center gap-1">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
          <span style={lbl({ color: '#ef4444', opacity: 1 })}>LIVE</span>
        </span>
      </div>
      <div>
        <p style={{ ...dim, fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', marginBottom: 2 }}>Vintage Rolex Submariner</p>
        <p style={{ color: '#D7E2EA', fontWeight: 900, fontSize: 'clamp(1.1rem,2.4vw,1.75rem)', lineHeight: 1 }}>$2,450.00</p>
        <p style={{ ...dim, fontSize: 'clamp(0.52rem,0.85vw,0.66rem)', marginTop: 3 }}>24 bids · Reserve met</p>
      </div>
      <div>
        <div style={{ height: 4, background: 'rgba(215,226,234,0.08)', borderRadius: 99, overflow: 'hidden', marginBottom: 6 }}>
          <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg,#B600A8,#7621B0)', borderRadius: 99 }} />
        </div>
        <div className="flex justify-between">
          <span style={lbl()}>⏱ 01h 23m 45s</span>
          <span style={lbl({ opacity: 0.6 })}>72% filled</span>
        </div>
      </div>
      <button style={{ background: 'rgba(182,0,168,0.18)', border: '1px solid rgba(182,0,168,0.5)', borderRadius: 99, padding: '6px 0', ...bright, fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'default', width: '100%' }}>
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
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p style={lbl({ marginBottom: 2 })}>Recent Bids</p>
      {bids.map((b, i) => (
        <div key={i} className="flex justify-between items-center" style={{ padding: '6px 8px', background: 'rgba(182,0,168,0.07)', border: '1px solid rgba(182,0,168,0.15)', borderRadius: 10 }}>
          <span style={{ ...bright, fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: 600 }}>{b.user}</span>
          <span style={{ color: '#c084fc', fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: 700 }}>{b.amount}</span>
          <span style={{ ...dim, fontSize: 'clamp(0.52rem,0.85vw,0.64rem)' }}>{b.time}</span>
        </div>
      ))}
    </Panel>
  );
}
function AuctionRight() {
  const items = [
    { name: 'Vintage Rolex', bid: '$2,450', pct: 72 },
    { name: 'MacBook Pro M3', bid: '$1,890', pct: 55 },
    { name: 'Signed Jersey', bid: '$445', pct: 38 },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div className="flex justify-between items-center">
        <p style={{ ...bright, fontWeight: 900, fontSize: 'clamp(0.72rem,1.25vw,0.9rem)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Auction Dashboard</p>
        <span style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 99, padding: '2px 8px', color: '#4ade80', fontSize: '0.58rem', fontWeight: 700, textTransform: 'uppercase' }}>● Online</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[['12', 'Active'], ['347', 'Bids'], ['$18.2K', 'Volume']].map(([v, l]) => (
          <div key={l} style={{ background: 'rgba(182,0,168,0.1)', border: '1px solid rgba(182,0,168,0.2)', borderRadius: 10, padding: '8px 10px' }}>
            <p style={{ color: '#e879f9', fontWeight: 900, fontSize: 'clamp(0.82rem,1.55vw,1.05rem)' }}>{v}</p>
            <p style={lbl()}>{l}</p>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, borderTop: '1px solid rgba(215,226,234,0.07)', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <div key={i}>
            <div className="flex justify-between items-center" style={{ marginBottom: 4 }}>
              <span style={{ ...bright, fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: 600 }}>{it.name}</span>
              <span style={{ color: '#e879f9', fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: 900 }}>{it.bid}</span>
            </div>
            <div style={{ height: 3, background: 'rgba(215,226,234,0.07)', borderRadius: 99 }}>
              <div style={{ width: `${it.pct}%`, height: '100%', background: 'linear-gradient(90deg,#B600A8,#7621B0)', borderRadius: 99 }} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* ══════════════════════════════════════════
   CARD 02 — AR MENU (orange / warm)
   Layout: full-width top bar | bottom-left 50% | bottom-right 50%
══════════════════════════════════════════ */
function ARMenuTop() {
  return (
    <Panel style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }} accent="rgba(249,115,22,0.08)">
      <div className="flex items-center gap-3">
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>🍽</div>
        <div>
          <p style={{ ...bright, fontWeight: 900, fontSize: 'clamp(0.72rem,1.3vw,0.9rem)' }}>Carmine&apos;s Restaurant</p>
          <p style={lbl({ opacity: 0.5 })}>AR-Powered Menu System</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {[['42', 'Items'], ['23/hr', 'Orders'], ['4.9★', 'Rating']].map(([v, l]) => (
          <div key={l} className="text-center" style={{ display: 'none' }} />
        ))}
        {[['42', 'Items'], ['23/hr', 'Orders'], ['4.9★', 'Rating']].map(([v, l]) => (
          <div key={l} className="text-center">
            <p style={{ color: '#f97316', fontWeight: 900, fontSize: 'clamp(0.78rem,1.4vw,0.95rem)' }}>{v}</p>
            <p style={lbl()}>{l}</p>
          </div>
        ))}
        <span style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 99, padding: '3px 10px', color: '#fb923c', fontSize: '0.58rem', fontWeight: 700, textTransform: 'uppercase' }}>18 Tables Active</span>
      </div>
    </Panel>
  );
}
function ARMenuBottomLeft() {
  /* AR camera viewfinder — scan a QR code on the table to load 3D models */
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }} accent="rgba(249,115,22,0.06)">
      <div className="flex justify-between items-center">
        <span style={lbl()}>AR Camera</span>
        <span style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 99, padding: '2px 7px', color: '#4ade80', fontSize: '0.55rem', fontWeight: 700 }}>● WebXR Active</span>
      </div>
      {/* Viewfinder */}
      <div style={{ flex: 1, background: 'rgba(215,226,234,0.03)', border: '1px dashed rgba(249,115,22,0.25)', borderRadius: 12, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 6 }}>
        {/* Corner brackets */}
        {[['0','0','borderTop','borderLeft'],['0','auto','borderTop','borderRight'],['auto','0','borderBottom','borderLeft'],['auto','auto','borderBottom','borderRight']].map(([t,r,b1,b2],i) => (
          <div key={i} style={{ position: 'absolute', top: t === 'auto' ? 'auto' : 8, right: r === 'auto' ? 'auto' : (r === '0' ? 8 : 'auto'), bottom: t === 'auto' ? 8 : 'auto', left: r === '0' && t !== 'auto' ? 8 : (r === 'auto' && t !== 'auto' ? 'auto' : (t === 'auto' && r === '0' ? 8 : 'auto')), width: 12, height: 12, [b1]: '2px solid rgba(249,115,22,0.7)', [b2]: '2px solid rgba(249,115,22,0.7)' }} />
        ))}
        <span style={{ fontSize: '1.6rem', opacity: 0.4 }}>⬡</span>
        <span style={lbl({ opacity: 0.45, textAlign: 'center' })}>Point at menu QR</span>
        <span style={lbl({ opacity: 0.3, textAlign: 'center', fontSize: '0.5rem' })}>3D model loads instantly</span>
      </div>
      <div className="flex justify-between items-center">
        <span style={lbl()}>Table #7</span>
        <span style={{ color: '#f97316', fontSize: '0.6rem', fontWeight: 700 }}>3D Preview Ready</span>
      </div>
    </Panel>
  );
}
function ARMenuBottomRight() {
  /* Menu items — each has a "View in AR" badge once the model is loaded */
  const items = [
    { name: 'Margherita Pizza', price: '$14', ar: true },
    { name: 'Truffle Pasta', price: '$18', ar: true },
    { name: 'Grilled Salmon', price: '$22', ar: false },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div className="flex justify-between items-center">
        <p style={lbl()}>Menu Items</p>
        <span style={lbl({ color: '#f97316', opacity: 1 })}>24 AR models</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
        {items.map((it, i) => (
          <div key={i} className="flex justify-between items-center" style={{ padding: '7px 10px', background: i === 0 ? 'rgba(249,115,22,0.08)' : 'rgba(215,226,234,0.03)', border: `1px solid ${i === 0 ? 'rgba(249,115,22,0.25)' : 'rgba(215,226,234,0.07)'}`, borderRadius: 10 }}>
            <span style={{ ...bright, fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: 600 }}>{it.name}</span>
            <div className="flex items-center gap-2">
              <span style={{ color: '#f97316', fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: 700 }}>{it.price}</span>
              {it.ar && <span style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.35)', borderRadius: 6, padding: '1px 5px', color: '#fb923c', fontSize: '0.5rem', fontWeight: 700 }}>AR</span>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(215,226,234,0.07)', paddingTop: 8 }}>
        <div className="flex justify-between items-center">
          <span style={lbl()}>Scan to order</span>
          <span style={{ color: '#f97316', fontSize: '0.62rem', fontWeight: 700 }}>◉ Live</span>
        </div>
      </div>
    </Panel>
  );
}

/* ══════════════════════════════════════════
   CARD 03 — E-DOSSIER (blue)
   Software that lets banks create products (mortgage, loan…)
   and define the approval workflow for each one.
   Layout: left 60% (workflow pipeline) | right 40% [products + active]
══════════════════════════════════════════ */
function DossierLeft() {
  /* Workflow builder for a Mortgage product */
  const steps = [
    { label: 'Application', status: 'done' },
    { label: 'Credit Check', status: 'done' },
    { label: 'Document Review', status: 'active' },
    { label: 'Risk Assessment', status: 'pending' },
    { label: 'Final Approval', status: 'pending' },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }} accent="rgba(96,165,250,0.07)">
      <div className="flex justify-between items-center">
        <p style={{ ...bright, fontWeight: 900, fontSize: 'clamp(0.72rem,1.25vw,0.9rem)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Workflow Builder</p>
        <span style={{ background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: 99, padding: '2px 8px', color: '#93c5fd', fontSize: '0.55rem', fontWeight: 700 }}>Mortgage · Draft</span>
      </div>
      {/* Steps */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* connector line above (except first) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: s.status === 'done' ? 'rgba(74,222,128,0.2)' : s.status === 'active' ? 'rgba(96,165,250,0.2)' : 'rgba(215,226,234,0.06)',
                border: `1.5px solid ${s.status === 'done' ? '#4ade80' : s.status === 'active' ? '#60a5fa' : 'rgba(215,226,234,0.15)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.6rem',
              }}>
                {s.status === 'done' ? <span style={{ color: '#4ade80' }}>✓</span> : s.status === 'active' ? <span style={{ color: '#60a5fa', fontWeight: 900 }}>{i + 1}</span> : <span style={{ color: 'rgba(215,226,234,0.25)' }}>{i + 1}</span>}
              </div>
            </div>
            <div style={{ flex: 1, padding: '6px 10px', background: s.status === 'active' ? 'rgba(96,165,250,0.1)' : 'rgba(215,226,234,0.03)', border: `1px solid ${s.status === 'active' ? 'rgba(96,165,250,0.3)' : 'rgba(215,226,234,0.07)'}`, borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ ...bright, fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: s.status === 'active' ? 700 : 500, opacity: s.status === 'pending' ? 0.38 : 1 }}>{s.label}</span>
              <span style={lbl({ fontSize: '0.52rem', opacity: s.status === 'pending' ? 0.2 : 0.6, color: s.status === 'active' ? '#93c5fd' : '#D7E2EA' })}>
                {s.status === 'done' ? 'Complete' : s.status === 'active' ? 'In Review' : 'Waiting'}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center" style={{ borderTop: '1px solid rgba(215,226,234,0.07)', paddingTop: 8 }}>
        <span style={lbl()}>Step 3 of 5</span>
        <button style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: 99, padding: '4px 12px', color: '#93c5fd', fontSize: '0.58rem', fontWeight: 700, cursor: 'default' }}>+ Add Step</button>
      </div>
    </Panel>
  );
}
function DossierRightTop() {
  /* Product catalog — bank creates products like mortgages, loans */
  const products = [
    { name: 'Mortgage', icon: '🏠', active: 12, color: '#60a5fa' },
    { name: 'Personal Loan', icon: '💳', active: 34, color: '#a78bfa' },
    { name: 'Auto Loan', icon: '🚗', active: 8, color: '#34d399' },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div className="flex justify-between items-center">
        <span style={lbl()}>Products</span>
        <span style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 99, padding: '2px 7px', color: '#4ade80', fontSize: '0.52rem', fontWeight: 700 }}>● Live</span>
      </div>
      {products.map((p, i) => (
        <div key={i} className="flex items-center justify-between" style={{ padding: '6px 8px', background: 'rgba(96,165,250,0.05)', border: '1px solid rgba(96,165,250,0.12)', borderRadius: 9 }}>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '0.8rem' }}>{p.icon}</span>
            <span style={{ ...bright, fontSize: 'clamp(0.58rem,0.95vw,0.72rem)', fontWeight: 600 }}>{p.name}</span>
          </div>
          <span style={{ color: p.color, fontSize: '0.6rem', fontWeight: 700 }}>{p.active} active</span>
        </div>
      ))}
    </Panel>
  );
}
function DossierRightBottom() {
  /* Recent workflow submissions */
  const items = [
    { ref: 'MTG-2841', type: 'Mortgage', stage: 'Doc Review', c: '#60a5fa' },
    { ref: 'PLN-0392', type: 'Personal Loan', stage: 'Approved', c: '#4ade80' },
    { ref: 'ATL-1107', type: 'Auto Loan', stage: 'Pending', c: '#fbbf24' },
  ];
  return (
    <Panel style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p style={lbl({ marginBottom: 2 })}>Recent Submissions</p>
      {items.map((t, i) => (
        <div key={i} className="flex justify-between items-center" style={{ padding: '5px 8px', background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.1)', borderRadius: 8 }}>
          <span style={{ ...dim, fontSize: 'clamp(0.5rem,0.82vw,0.62rem)', fontFamily: 'monospace' }}>{t.ref}</span>
          <span style={{ ...bright, fontSize: 'clamp(0.55rem,0.9vw,0.68rem)', fontWeight: 600 }}>{t.type}</span>
          <span style={{ color: t.c, fontSize: '0.55rem', fontWeight: 700 }}>{t.stage}</span>
        </div>
      ))}
    </Panel>
  );
}

/* ─── Project config ─── */
const PROJECTS = [
  {
    number: '01', name: 'Auction Platform', category: 'Client', link: '/auction',
    cardBg: '#0D0812',
    borderColor: 'rgba(182,0,168,0.3)',
    numberColor: undefined as string | undefined, // uses .hero-heading gradient
    layout: 'standard' as const,
  },
  {
    number: '02', name: 'AR Menu App', category: 'Personal', link: '/armenu',
    cardBg: '#120D08',
    borderColor: 'rgba(249,115,22,0.3)',
    numberColor: '#f97316',
    layout: 'ar' as const,
  },
  {
    number: '03', name: 'E-Dossier', category: 'Client', link: '/bank',
    cardBg: '#080E16',
    borderColor: 'rgba(96,165,250,0.3)',
    numberColor: '#60a5fa',
    layout: 'bank' as const,
  },
];

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project, index, total, progress }: { project: Project; index: number; total: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, (index + 1) / total], [1, targetScale]);

  const numStyle: React.CSSProperties = project.numberColor
    ? { color: project.numberColor, fontWeight: 900, fontSize: 'clamp(2.5rem,6vw,100px)', lineHeight: 1, flexShrink: 0 }
    : { fontWeight: 900, fontSize: 'clamp(2.5rem,6vw,100px)', lineHeight: 1, flexShrink: 0 };

  return (
    <div style={{ height: '85vh', position: 'relative' }}>
      <motion.div
        style={{
          scale,
          position: 'sticky',
          top: `${96 + index * 28}px`,
          transformOrigin: 'top center',
          backgroundColor: project.cardBg,
          borderRadius: 'clamp(32px,5vw,60px)',
          border: `2px solid ${project.borderColor}`,
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="p-4 sm:p-6 md:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3 gap-4 flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            {project.numberColor ? (
              <span style={numStyle}>{project.number}</span>
            ) : (
              <span className="hero-heading" style={numStyle}>{project.number}</span>
            )}
            <div className="flex flex-col min-w-0">
              <span className="uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.35, fontSize: 'clamp(0.52rem,0.85vw,0.72rem)' }}>
                {project.category}
              </span>
              <span className="font-black uppercase truncate" style={{ color: '#D7E2EA', fontSize: 'clamp(0.88rem,1.9vw,1.75rem)' }}>
                {project.name}
              </span>
            </div>
          </div>
          <a
            href={project.link}
            className="flex-shrink-0 rounded-full font-medium uppercase tracking-widest text-center"
            style={{ border: `2px solid ${project.borderColor}`, color: '#D7E2EA', background: 'transparent', padding: 'clamp(7px,0.9vw,11px) clamp(14px,1.8vw,26px)', fontSize: 'clamp(0.62rem,0.95vw,0.8rem)', transition: 'background 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(215,226,234,0.07)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            View Project
          </a>
        </div>

        {/* Layout variants */}
        {project.layout === 'standard' && (
          <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
            <div className="flex flex-col gap-3 sm:gap-4 min-h-0" style={{ width: '40%' }}>
              <div style={{ flex: '1 1 0', minHeight: 0 }}><AuctionLeftTop /></div>
              <div style={{ flex: '1.4 1 0', minHeight: 0 }}><AuctionLeftBottom /></div>
            </div>
            <div style={{ width: '60%', minHeight: 0 }}><AuctionRight /></div>
          </div>
        )}

        {project.layout === 'ar' && (
          <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-h-0">
            <ARMenuTop />
            <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
              <div style={{ width: '45%', minHeight: 0 }}><ARMenuBottomLeft /></div>
              <div style={{ width: '55%', minHeight: 0 }}><ARMenuBottomRight /></div>
            </div>
          </div>
        )}

        {project.layout === 'bank' && (
          <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
            <div style={{ width: '60%', minHeight: 0 }}><DossierLeft /></div>
            <div className="flex flex-col gap-3 sm:gap-4 min-h-0" style={{ width: '40%' }}>
              <div style={{ flex: '1 1 0', minHeight: 0 }}><DossierRightTop /></div>
              <div style={{ flex: '1.3 1 0', minHeight: 0 }}><DossierRightBottom /></div>
            </div>
          </div>
        )}
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
