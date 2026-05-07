'use client';
import { SiSpring, SiReact, SiPostgresql, SiRedis } from 'react-icons/si';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const ABOUT_TEXT =
  "With over 3 years of professional experience, I build robust backends with Spring Boot and Java, modern frontends with React and Next.js, and cross-platform mobile apps with React Native. I love turning complex problems into clean, scalable solutions that actually make a difference. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Top-left: Spring Boot */}
      <FadeIn
        delay={0.1} x={-80} y={0} duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      >
        <SiSpring style={{ fontSize: 'clamp(70px, 10vw, 150px)', color: '#6DB33F', filter: 'drop-shadow(0 0 24px #6DB33F50)' }} />
      </FadeIn>

      {/* Bottom-left: React */}
      <FadeIn
        delay={0.25} x={-80} y={0} duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <SiReact style={{ fontSize: 'clamp(55px, 8vw, 120px)', color: '#61DAFB', filter: 'drop-shadow(0 0 20px #61DAFB50)' }} />
      </FadeIn>

      {/* Top-right: PostgreSQL */}
      <FadeIn
        delay={0.15} x={80} y={0} duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <SiPostgresql style={{ fontSize: 'clamp(70px, 10vw, 150px)', color: '#4169E1', filter: 'drop-shadow(0 0 24px #4169E150)' }} />
      </FadeIn>

      {/* Bottom-right: Redis */}
      <FadeIn
        delay={0.3} x={80} y={0} duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      >
        <SiRedis style={{ fontSize: 'clamp(55px, 8vw, 120px)', color: '#DC382D', filter: 'drop-shadow(0 0 20px #DC382D50)' }} />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium text-center leading-relaxed max-w-[560px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
