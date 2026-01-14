'use client';

import { useState, useEffect } from 'react';
import StaggeredMenu from './ui/StaggeredMenu';

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay menu visibility until page content is loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Small delay to prevent menu flash

    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
    { label: 'Skills', ariaLabel: 'See my skills', link: '#skills' },
    { label: 'Experience', ariaLabel: 'Check my experience', link: '#experience' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/erkochez' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/eren-ahmed-b14934199' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-[9999] transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#0f172a"
        openMenuButtonColor="#0f172a"
        changeMenuColorOnOpen={false}
        accentColor="#0f172a"
        colors={['#0f172a', '#334155', '#475569']}
        logoUrl=""
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  );
}
