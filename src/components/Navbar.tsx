import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link highlight tracking
      const sections = ['hero', 'engine', 'allocator', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 180; // Offset for sticky navbar height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    const nextState = !menuOpen;
    setMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }} className="nav-logo">
          SHU<span>WANG</span>
        </a>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <button 
              onClick={() => handleNavClick('hero')} 
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>

          <li>
            <button 
              onClick={() => handleNavClick('engine')} 
              className={`nav-link ${activeSection === 'engine' ? 'active' : ''}`}
            >
              Growth Engine
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('allocator')} 
              className={`nav-link ${activeSection === 'allocator' ? 'active' : ''}`}
            >
              Allocator
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('experience')} 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('skills')} 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
