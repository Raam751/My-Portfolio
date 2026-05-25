import { useState, useEffect } from 'react';
import { navLinks } from '../data';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for shadow + active section via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver to track active section
    const sectionIds = ['home', 'work', 'journal', 'explorations', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/10' : ''
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="w-9 h-9 rounded-full relative group flex items-center justify-center shrink-0"
        >
          {/* Outer gradient ring */}
          <span className="absolute inset-0 rounded-full accent-gradient" />
          {/* Inner circle */}
          <span className="absolute inset-[2px] rounded-full bg-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <span className="font-display italic text-[13px] text-text-primary">
              RT
            </span>
          </span>
        </a>

        {/* Divider */}
        <span className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Nav Links */}
        <div className="hidden sm:flex items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            if (link.id === 'resume') {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
                    isActive
                      ? 'text-text-primary bg-stroke/50'
                      : 'text-muted hover:text-text-primary hover:bg-stroke/30'
                  }`}
                >
                  {link.title}
                </a>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary bg-stroke/50'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/30'
                }`}
              >
                {link.title}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <span className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Say hi button */}
        <a
          href="#contact"
          className="relative group rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary transition-all duration-300"
        >
          {/* Gradient border on hover */}
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Inner content */}
          <span className="relative bg-surface rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1 backdrop-blur-md">
            Say hi <span>↗</span>
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden ml-1 p-2 text-muted hover:text-text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 sm:hidden bg-surface/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            if (link.id === 'resume') {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm rounded-full px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? 'text-text-primary bg-stroke/50'
                      : 'text-muted hover:text-text-primary hover:bg-stroke/30'
                  }`}
                >
                  {link.title}
                </a>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm rounded-full px-4 py-2 transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary bg-stroke/50'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/30'
                }`}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
