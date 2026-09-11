import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Oferta', href: '#dla-kogo' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'Jak to działa', href: '#jak-to-dziala' },
    { label: 'Dlaczego my', href: '#dlaczego-my' },
    { label: 'Cennik', href: '#cennik' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090f]/85 backdrop-blur-md border-b border-purple-900/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="navbar-logo-link"
          href="#"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-[1.5px] shadow-[0_0_15px_rgba(168,85,247,0.35)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0d0d15] rounded-[10px] flex items-center justify-center font-bold text-white text-base tracking-tighter">
              W<span className="text-pink-400">L</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            WebLokalnie
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 ml-1 inline-block animate-pulse"></span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Quick Phone */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="nav-quick-phone-btn"
            href="tel:+48732123456"
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-pink-400" />
            <span>732 123 456</span>
          </a>

          <button
            id="nav-cta-quote-btn"
            onClick={onOpenQuote}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300 cursor-pointer active:scale-95"
          >
            <span>Darmowa wycena</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0c0c14]/98 border-b border-purple-900/30 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-violet-400 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                id="mobile-phone-call-btn"
                href="tel:+48732123456"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-slate-200 font-medium text-sm border border-white/10"
              >
                <PhoneCall className="w-4 h-4 text-pink-400" />
                <span>Zadzwoń: +48 732 123 456</span>
              </a>

              <button
                id="mobile-nav-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              >
                <span>Darmowa wycena w 15 min</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
