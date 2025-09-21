'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { ClientOnly } from '@/components/ui/ClientOnly';
import SkillsLogos from '@/components/ui/SkillsLogos';
import CursorRibbons from '@/components/ui/CursorRibbons';

export default function Home() {
  useEffect(() => {
    // Scroll to top on page refresh/load
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <SkillsLogos />
  
      <Contact />
      
      {/* Cursor Ribbons Effect */}
      <ClientOnly fallback={null}>
        <CursorRibbons />
      </ClientOnly>
    </main>
  );
}
