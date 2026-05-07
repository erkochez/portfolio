import { Kanit } from 'next/font/google';
import HeroSection from './jack/components/HeroSection';
import MarqueeSection from './jack/components/MarqueeSection';
import AboutSection from './jack/components/AboutSection';
import ServicesSection from './jack/components/ServicesSection';
import ProjectsSection from './jack/components/ProjectsSection';
import ContactSection from './jack/components/ContactSection';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Home() {
  return (
    <div
      className={kanit.className}
      style={{ backgroundColor: '#0C0C0C', overflowX: 'clip', minHeight: '100vh' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
