import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from './Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Monitor scroll state for styling and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = ['home', 'services', 'why-us', 'work', 'process', 'pricing', 'about', 'contact'];
        const scrollPosition = window.scrollY + 120;

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
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle smooth scroll or routing back to home section
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'work' },
    { name: 'Process', id: 'process' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            to="/"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 focus-visible:outline-brand-600 rounded-lg"
            aria-label={`${siteConfig.brandName} Home`}
          >
            <div className="w-9 h-9 rounded-xl bg-navy-900 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-brand-600 transition-colors">
              <span className="font-extrabold tracking-tighter">S</span>
              <span className="w-1 h-1 rounded-full bg-brand-400 ml-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-none">
                {siteConfig.brandName}
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                Web Development Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-600 bg-brand-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick('contact')}
              variant="primary"
              size="sm"
              rightIcon={ArrowRight}
            >
              Get a Website
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-brand-600 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl px-5 py-6 transition-all duration-200 ease-out animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-brand-600 bg-brand-50 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100">
              <Button
                onClick={() => handleNavClick('contact')}
                variant="accent"
                size="md"
                className="w-full justify-center"
                rightIcon={ArrowRight}
              >
                Get a Website
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
