import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { ClientOnly } from '@/components/ui/ClientOnly';
import SkillsLogos from '@/components/ui/SkillsLogos';
import CursorRibbons from '@/components/ui/CursorRibbons';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
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
