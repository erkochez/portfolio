'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/erkochez' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/erenahmed' },
  { label: 'Email', href: 'mailto:eren.ahmed@intecsystem.com' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(215,226,234,0.05)',
    border: '1px solid rgba(215,226,234,0.2)',
    borderRadius: '16px',
    padding: '18px 22px',
    color: '#D7E2EA',
    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
    fontFamily: 'inherit',
    fontWeight: 400,
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="contact"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16"
      style={{ backgroundColor: '#111115' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
        {/* Left — info */}
        <FadeIn delay={0.1} x={-30} y={0}>
          <div className="flex flex-col gap-8">
            <p
              className="font-light leading-relaxed"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', opacity: 0.75 }}
            >
              Have a project in mind? Looking to collaborate or hire? Drop me a message and let&apos;s build something incredible.
            </p>

            <div className="flex flex-col gap-3">
              <span className="font-medium uppercase tracking-widest text-xs" style={{ color: '#646973' }}>
                Find me at
              </span>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-60 w-fit"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.2} x={30} y={0}>
          {status === 'sent' ? (
            <div
              className="flex flex-col items-center justify-center h-full gap-4 rounded-[32px] p-12 text-center"
              style={{ border: '1px solid rgba(215,226,234,0.15)', background: 'rgba(215,226,234,0.03)' }}
            >
              <span style={{ fontSize: '3rem' }}>✦</span>
              <p className="font-black uppercase" style={{ color: '#D7E2EA', fontSize: '1.5rem' }}>Message sent!</p>
              <p style={{ color: '#D7E2EA', opacity: 0.5 }}>I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.2)')}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.2)')}
                />
              </div>
              <input
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.2)')}
              />
              <textarea
                name="message"
                placeholder="Your message..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.2)')}
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-full font-medium uppercase tracking-widest text-white py-4 transition-opacity disabled:opacity-50"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-center text-sm" style={{ color: '#ff6b6b' }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </FadeIn>
      </div>

      {/* Footer */}
      <div
        className="flex justify-between items-center pt-8"
        style={{ borderTop: '1px solid rgba(215,226,234,0.1)' }}
      >
        <span className="font-medium uppercase tracking-widest text-xs" style={{ color: '#646973' }}>
          © 2025 Eren Ahmed
        </span>
        <span className="font-black uppercase tracking-widest text-xs" style={{ color: '#646973' }}>
          Full Stack Developer
        </span>
      </div>
    </section>
  );
}
