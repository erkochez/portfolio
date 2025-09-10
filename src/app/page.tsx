import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { AnimatedTestimonialsDemo } from '@/components/ui/AnimatedTestimonialsDemo';
import { ClientOnly } from '@/components/ui/ClientOnly';
import SkillsLogos from '@/components/ui/SkillsLogos';
import CursorRibbons from '@/components/ui/CursorRibbons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <SkillsLogos />
      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              What People Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Testimonials from clients, colleagues, and collaborators who have experienced my work firsthand.
            </p>
          </div>
          <ClientOnly fallback={<div className="h-96 flex items-center justify-center text-slate-600">Loading testimonials...</div>}>
            <AnimatedTestimonialsDemo />
          </ClientOnly>
        </div>
      </section>
      <Contact />
      
      {/* Cursor Ribbons Effect */}
      <ClientOnly fallback={null}>
        <CursorRibbons />
      </ClientOnly>
    </main>
  );
}
