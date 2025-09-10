'use client';

import { useState, useEffect } from 'react';
import StaggeredMenu from './ui/StaggeredMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { label: 'GitHub', link: 'https://github.com/erenahmed' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/erenahmed' },
    { label: 'Twitter', link: 'https://twitter.com/erenahmed' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={false}
        colors={['#0ea5e9', '#3b82f6']}
        logoUrl=""
        accentColor="#0ea5e9"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  );
}
