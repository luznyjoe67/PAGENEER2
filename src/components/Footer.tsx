import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#07070b] border-t border-purple-900/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-[1.5px] shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                <div className="w-full h-full bg-[#0d0d15] rounded-[9px] flex items-center justify-center font-bold text-white text-sm tracking-tighter">
                  W<span className="text-pink-400">L</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                WebLokalnie
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 ml-1 inline-block"></span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Tworzymy nowoczesne, szybkie i skuteczne strony internetowe dla małych, lokalnych biznesów w całej Polsce. Pomagamy lokalnym firmom pozyskiwać stałych klientów z Google i mediów społecznościowych.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Nawigacja */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Nawigacja
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#hero-section" className="hover:text-purple-300 transition-colors">
                  Strona główna
                </a>
              </li>
              <li>
                <a href="#dla-kogo" className="hover:text-purple-300 transition-colors">
                  Dla kogo tworzymy
                </a>
              </li>
              <li>
                <a href="#realizacje" className="hover:text-purple-300 transition-colors">
                  Przykładowe realizacje
                </a>
              </li>
              <li>
                <a href="#jak-to-dziala" className="hover:text-purple-300 transition-colors">
                  Jak to działa (4 kroki)
                </a>
              </li>
              <li>
                <a href="#dlaczego-my" className="hover:text-purple-300 transition-colors">
                  Dlaczego warto z nami
                </a>
              </li>
              <li>
                <a href="#cennik" className="hover:text-purple-300 transition-colors">
                  Cennik i pakiety
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Branże */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Dla jakich branż
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#dla-kogo" className="hover:text-purple-300 transition-colors">
                  Pizzerie & Restauracje
                </a>
              </li>
              <li>
                <a href="#dla-kogo" className="hover:text-purple-300 transition-colors">
                  Warsztaty samochodowe
                </a>
              </li>
              <li>
                <a href="#dla-kogo" className="hover:text-purple-300 transition-colors">
                  Gabinety i salony kosmetyczne
                </a>
              </li>
              <li>
                <a href="#dla-kogo" className="hover:text-purple-300 transition-colors">
                  Hydraulicy & Fachowcy budowlani
                </a>
              </li>
              <li>
                <a href="#dla-kogo" className="hover:text-purple-300 transition-colors">
                  Kwiaciarnie & Sklepy stacjonarne
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a href="tel:+48732123456" className="hover:text-white transition-colors">
                  +48 732 123 456
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="mailto:kontakt@weblokalnie.pl" className="hover:text-white transition-colors">
                  kontakt@weblokalnie.pl
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                <span>Współpraca zdalna w całej Polsce (obsługa 100% online)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WebLokalnie. Wszelkie prawa zastrzeżone.</p>

          <div className="flex items-center gap-1">
            <span>Zaprojektowano z</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline-block mx-0.5" />
            <span>dla lokalnych przedsiębiorców</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Do góry</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
