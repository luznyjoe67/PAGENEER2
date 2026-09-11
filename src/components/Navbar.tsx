import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Phone, ShieldCheck, Zap } from 'lucide-react';

interface NavbarProps {
  onSelectPackage?: (packageId: 'start' | 'biznes' | 'dedykowany') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectPackage }) => {
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
    { label: 'Realizacja makiety', href: '#makieta' },
    { label: 'Dla kogo', href: '#sektory' },
    { label: 'Dlaczego my', href: '#przewagi' },
    { label: 'Proces', href: '#proces' },
    { label: 'Cennik', href: '#cennik' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#161a1e] border-b border-white/5 text-xs py-2 px-4 text-center text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-slate-200 font-medium">Harmonogram realizacji:</span>
            <span className="text-[#3b82f6] font-semibold">2 wolne sloty na ten tydzień</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <Zap className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span>Gotowa strona w 5-7 dni bez ukrytych opłat</span>
          </div>
          <span className="hidden md:inline text-slate-600">•</span>
          <a
            href="tel:+48500123456"
            className="hidden md:flex items-center gap-1.5 text-[#3b82f6] hover:text-[#34d399] font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Infolinia: +48 500 123 456</span>
          </a>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3'
            : 'bg-transparent py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b82f6] via-[#2563eb] to-[#047857] p-[1.5px] shadow-lg shadow-[#3b82f6]/20 group-hover:shadow-[#3b82f6]/35 transition-all duration-300">
              <div className="w-full h-full bg-[#0f172a] rounded-[10px] flex items-center justify-center font-mono font-bold text-lg text-white">
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#34d399] bg-clip-text text-transparent">P</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-slate-200 transition-colors">
                  Pageneer
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-[#3b82f6] font-semibold border border-[#3b82f6]/30">
                  Strony dla firm
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">Jasne zasady</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#181d22]/85 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#cennik"
              onClick={(e) => handleNavClick(e, '#cennik')}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
            >
              Od 1 190 zł
            </a>
            <a
              href="#wycena"
              onClick={(e) => handleNavClick(e, '#wycena')}
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] hover:brightness-110 shadow-lg shadow-[#3b82f6]/25 transition-all active:scale-95"
            >
              <span>Wyceń stronę w 15 min</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0f172a] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#wycena"
                onClick={(e) => handleNavClick(e, '#wycena')}
                className="w-full text-center py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] shadow-lg shadow-[#3b82f6]/20"
              >
                Wyceń stronę (bez zobowiązań)
              </a>
              <a
                href="tel:+48500123456"
                className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span>Zadzwoń: +48 500 123 456</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
