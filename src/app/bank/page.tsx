'use client';
import { Kanit } from 'next/font/google';
import Link from 'next/link';

const kanit = Kanit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'], display: 'swap' });

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const BARS = [42, 58, 35, 70, 55, 80, 63, 45, 90, 72, 68, 85];

export default function BankPage() {
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
          Enterprise Project
        </span>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-5 sm:px-10 pt-40 pb-24">
        <p className="font-medium uppercase tracking-[0.3em] text-xs mb-6" style={{ color: '#646973' }}>Banking Microservices Platform</p>
        <h1
          className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(3rem, 11vw, 140px)' }}
        >
          E-DOSSIER.
        </h1>
        <p className="font-light leading-relaxed max-w-xl mb-12" style={{ color: '#D7E2EA', opacity: 0.65, fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
          Enterprise document lifecycle management for a major Turkish bank. Microservices-driven, secure, and built for 850+ daily users.
        </p>

        {/* Dashboard mockup */}
        <div
          className="w-full max-w-3xl rounded-[24px] overflow-hidden"
          style={{ border: '1px solid rgba(215,226,234,0.12)', background: 'rgba(215,226,234,0.03)' }}
        >
          {/* bar */}
          <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid rgba(215,226,234,0.08)' }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#646973' }}>E-Dossier — Dashboard</span>
            <span className="ml-auto text-xs font-medium" style={{ color: '#28c840' }}>● Online</span>
          </div>

          <div className="p-5 grid grid-cols-3 gap-4">
            {/* Stats */}
            {[
              { label: 'Documents', value: '2.1M', delta: '+12%' },
              { label: 'Pending', value: '847', delta: '-3%' },
              { label: 'Workflows', value: '20', delta: '' },
            ].map((s) => (
              <div key={s.label} className="rounded-[14px] p-4 flex flex-col gap-2" style={{ background: 'rgba(215,226,234,0.04)', border: '1px solid rgba(215,226,234,0.08)' }}>
                <span className="text-xs uppercase tracking-widest" style={{ color: '#646973' }}>{s.label}</span>
                <span className="font-black text-2xl" style={{ color: '#D7E2EA' }}>{s.value}</span>
                {s.delta && (
                  <span className="text-xs font-semibold" style={{ color: s.delta.startsWith('+') ? '#4ade80' : '#ff6b6b' }}>{s.delta} this month</span>
                )}
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="px-5 pb-5">
            <div className="rounded-[14px] p-4" style={{ background: 'rgba(215,226,234,0.04)', border: '1px solid rgba(215,226,234,0.08)' }}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D7E2EA', opacity: 0.7 }}>Monthly Document Volume</span>
                <span className="text-xs" style={{ color: '#646973' }}>2024</span>
              </div>
              <div className="flex items-end gap-1.5" style={{ height: '60px' }}>
                {BARS.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-sm"
                      style={{ height: `${h}%`, background: i === 11 ? 'linear-gradient(180deg, #B600A8, #7621B0)' : 'rgba(215,226,234,0.18)' }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex mt-1" style={{ gap: '6px' }}>
                {MONTHS.map((m) => (
                  <div key={m} className="flex-1 text-center" style={{ fontSize: '8px', color: '#646973' }}>{m[0]}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 sm:px-10 py-24 max-w-5xl mx-auto">
        <p className="font-medium uppercase tracking-[0.3em] text-xs mb-4" style={{ color: '#646973' }}>Core Features</p>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-16" style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}>
          ENTERPRISE GRADE.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: '01', title: 'Dynamic Workflows', desc: 'Custom multi-step approval chains with role-based routing. Documents move automatically based on department, type, and value.' },
            { n: '02', title: 'OCR & Indexing', desc: 'Physical archives are scanned and indexed via OCR. Every document becomes instantly searchable and auditable.' },
            { n: '03', title: 'Version Control', desc: 'Every edit, comment, and signature is tracked. Full audit logs with instant rollback to any previous version.' },
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
        <div className="max-w-4xl mx-auto grid grid-cols-4 gap-8 text-center">
          {[
            { value: '2M+', label: 'Documents' },
            { value: '850+', label: 'Daily Users' },
            { value: '20', label: 'Workflows' },
            { value: '99.9%', label: 'Uptime' },
          ].map((s) => (
            <div key={s.label}>
              <div className="hero-heading font-black" style={{ fontSize: 'clamp(1.8rem, 5vw, 54px)' }}>{s.value}</div>
              <div className="font-medium uppercase tracking-widest text-xs mt-2" style={{ color: '#646973' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="px-5 sm:px-10 py-24 max-w-5xl mx-auto">
        <p className="font-medium uppercase tracking-[0.3em] text-xs mb-4" style={{ color: '#646973' }}>Tech stack</p>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-12" style={{ fontSize: 'clamp(2rem, 6vw, 72px)' }}>
          MICROSERVICES.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'Spring Boot', role: 'Backend / API' },
            { name: 'Java', role: 'Core Language' },
            { name: 'Spring Security', role: 'Auth & RBAC' },
            { name: 'PostgreSQL', role: 'Relational DB' },
            { name: 'Docker', role: 'Containerization' },
            { name: 'React', role: 'Frontend UI' },
            { name: 'Redis', role: 'Session Cache' },
            { name: 'REST APIs', role: 'Service Layer' },
          ].map((t) => (
            <div key={t.name} className="rounded-[16px] p-5 flex flex-col gap-1" style={{ border: '1px solid rgba(215,226,234,0.1)', background: 'rgba(215,226,234,0.03)' }}>
              <span className="font-black uppercase tracking-wide" style={{ color: '#D7E2EA', fontSize: '1rem' }}>{t.name}</span>
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#646973' }}>{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-10 py-24 text-center" style={{ borderTop: '1px solid rgba(215,226,234,0.08)' }}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}>
          LET&apos;S TALK.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
            className="rounded-full font-medium uppercase tracking-widest px-10 py-4 text-white transition-opacity hover:opacity-80"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
              outline: '2px solid white',
              outlineOffset: '-3px',
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
            }}
          >
            Get in Touch
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
