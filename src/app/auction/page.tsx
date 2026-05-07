'use client';
import { useState, useEffect } from 'react';
import { Kanit } from 'next/font/google';
import Link from 'next/link';

const kanit = Kanit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'], display: 'swap' });

function Countdown() {
  const [time, setTime] = useState(17);
  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t <= 1 ? 17 : t - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ color: time <= 5 ? '#ff6b6b' : '#D7E2EA', fontVariantNumeric: 'tabular-nums' }}>
      00:{String(time).padStart(2, '0')}
    </span>
  );
}

export default function AuctionPage() {
  return (
    <div className={kanit.className} style={{ backgroundColor: '#0C0C0C', color: '#D7E2EA', minHeight: '100vh' }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10"
        style={{ height: '64px', borderBottom: '1px solid rgba(215,226,234,0.08)', background: 'rgba(12,12,12,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <Link href="/" className="flex items-center gap-2 font-medium text-sm uppercase tracking-widest transition-opacity hover:opacity-60" style={{ color: '#D7E2EA' }}>
          ← Back
        </Link>
        <span className="font-black uppercase tracking-widest text-xs px-3 py-1 rounded-full" style={{ border: '1px solid rgba(215,226,234,0.2)', color: '#646973' }}>
          Personal Project
        </span>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-5 sm:px-10 pt-40 pb-24">
        <p className="font-medium uppercase tracking-[0.3em] text-xs mb-6" style={{ color: '#646973' }}>Real-Time Auction Platform</p>
        <h1
          className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 160px)' }}
        >
          BITEKLIF.
        </h1>
        <p className="font-light leading-relaxed max-w-xl mb-12" style={{ color: '#D7E2EA', opacity: 0.65, fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
          Turkey&apos;s premier live auction marketplace. Every second counts — the last bidder wins.
        </p>

        {/* Live dashboard mockup */}
        <div
          className="w-full max-w-3xl rounded-[24px] overflow-hidden"
          style={{ border: '1px solid rgba(215,226,234,0.12)', background: 'rgba(215,226,234,0.03)' }}
        >
          {/* bar */}
          <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid rgba(215,226,234,0.08)' }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#646973' }}>BiTeklif — Live Auctions</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: '#28c840' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              3 Live
            </span>
          </div>
          <div className="p-5 grid grid-cols-3 gap-4">
            {[
              { name: 'MacBook Pro M3', price: '₺14,250', pct: 68, bids: 47 },
              { name: 'iPhone 15 Pro', price: '₺8,900', pct: 42, bids: 31 },
              { name: 'PlayStation 5', price: '₺5,200', pct: 85, bids: 62 },
            ].map((item, i) => (
              <div key={i} className="rounded-[16px] p-4 flex flex-col gap-3" style={{ background: 'rgba(215,226,234,0.04)', border: '1px solid rgba(215,226,234,0.08)' }}>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D7E2EA', opacity: 0.7 }}>{item.name}</span>
                  {i === 0 && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,107,107,0.15)', color: '#ff6b6b' }}>HOT</span>
                  )}
                </div>
                <div className="font-black text-lg" style={{ color: '#D7E2EA' }}>{item.price}</div>
                <div className="w-full rounded-full overflow-hidden" style={{ height: '4px', background: 'rgba(215,226,234,0.1)' }}>
                  <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: 'linear-gradient(90deg, #7621B0, #B600A8)' }} />
                </div>
                <div className="flex justify-between text-xs" style={{ color: '#646973' }}>
                  <span>{item.bids} bids</span>
                  <span className="font-mono"><Countdown /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 sm:px-10 py-24 max-w-5xl mx-auto">
        <p className="font-medium uppercase tracking-[0.3em] text-xs mb-4" style={{ color: '#646973' }}>How it works</p>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-16" style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}>
          LAST BID WINS.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: '01', title: 'Register & Top Up', desc: 'Create an account and load bid credits. Each bid costs 1 credit — strategy matters.' },
            { n: '02', title: 'Place Your Bid', desc: 'Every bid resets a countdown timer. The auction extends as long as someone keeps bidding.' },
            { n: '03', title: 'Last Bidder Wins', desc: 'When the clock hits zero, the final bidder claims the product at a fraction of retail price.' },
          ].map((s) => (
            <div key={s.n} className="rounded-[20px] p-6 flex flex-col gap-4" style={{ border: '1px solid rgba(215,226,234,0.1)', background: 'rgba(215,226,234,0.03)' }}>
              <span className="font-black text-4xl" style={{ color: 'rgba(215,226,234,0.12)' }}>{s.n}</span>
              <h3 className="font-bold text-lg uppercase tracking-wide" style={{ color: '#D7E2EA' }}>{s.title}</h3>
              <p className="font-light leading-relaxed text-sm" style={{ color: '#D7E2EA', opacity: 0.55 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 sm:px-10 py-20" style={{ borderTop: '1px solid rgba(215,226,234,0.08)', borderBottom: '1px solid rgba(215,226,234,0.08)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '50K+', label: 'Active Users' },
            { value: '₺72M', label: 'Total Savings' },
            { value: '72%', label: 'Avg. Discount' },
          ].map((s) => (
            <div key={s.label}>
              <div className="hero-heading font-black" style={{ fontSize: 'clamp(2rem, 6vw, 60px)' }}>{s.value}</div>
              <div className="font-medium uppercase tracking-widest text-xs mt-2" style={{ color: '#646973' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="px-5 sm:px-10 py-24 max-w-5xl mx-auto">
        <p className="font-medium uppercase tracking-[0.3em] text-xs mb-4" style={{ color: '#646973' }}>Tech stack</p>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-12" style={{ fontSize: 'clamp(2rem, 6vw, 72px)' }}>
          BUILT FOR SCALE.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { name: 'Spring Boot', role: 'Backend / REST API' },
            { name: 'WebSocket', role: 'Real-Time Bidding' },
            { name: 'React', role: 'Frontend' },
            { name: 'Redis', role: 'Pub/Sub & Cache' },
            { name: 'PostgreSQL', role: 'Transactional DB' },
            { name: 'Iyzico', role: 'Payments' },
          ].map((t) => (
            <div key={t.name} className="rounded-[16px] p-5 flex flex-col gap-1" style={{ border: '1px solid rgba(215,226,234,0.1)', background: 'rgba(215,226,234,0.03)' }}>
              <span className="font-black uppercase tracking-wide" style={{ color: '#D7E2EA', fontSize: '1.05rem' }}>{t.name}</span>
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#646973' }}>{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-10 py-24 text-center" style={{ borderTop: '1px solid rgba(215,226,234,0.08)' }}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}>
          READY TO WIN?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://biteklif.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full font-medium uppercase tracking-widest px-10 py-4 text-white transition-opacity hover:opacity-80"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
              outline: '2px solid white',
              outlineOffset: '-3px',
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
            }}
          >
            Visit BiTeklif.tr ↗
          </a>
          <Link href="/" className="font-medium uppercase tracking-widest text-sm transition-opacity hover:opacity-60" style={{ color: '#646973' }}>
            ← Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Footer */}
      <div className="px-6 sm:px-10 py-6 flex justify-between items-center" style={{ borderTop: '1px solid rgba(215,226,234,0.08)' }}>
        <span className="font-medium uppercase tracking-widest text-xs" style={{ color: '#646973' }}>© 2025 Eren Ahmed</span>
        <span className="font-black uppercase tracking-widest text-xs" style={{ color: '#646973' }}>Full Stack Developer</span>
      </div>
    </div>
  );
}
