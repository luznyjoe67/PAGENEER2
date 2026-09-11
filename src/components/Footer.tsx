import React from 'react';
import { Sparkles, Phone, Mail, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] border-t border-white/10 text-slate-400 text-xs py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#2563eb] p-[1.5px]">
                <div className="w-full h-full bg-[#0f172a] rounded-[9px] flex items-center justify-center font-mono font-bold text-base text-white">
                  P
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Pageneer
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#3b82f6] font-semibold border border-[#3b82f6]/30">
                Strony dla firm
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm max-w-sm">
              Nowoczesna agencja typu <strong>Jasne zasady</strong>. Budujemy superszybkie, gotowe strony internetowe w oparciu o nowoczesny, dedykowany kod dla firm lokalnych i małych biznesów. Stałe ceny, realizacja 5-7 dni, zero abonamentu.
            </p>

            <div className="flex items-center gap-4 text-slate-400 text-xs">
              <span className="flex items-center gap-1.5 text-blue-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>PageSpeed: 100/100</span>
              </span>
              <span>•</span>
              <span>Wdrożenie w 5-7 dni</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4">
              Nawigacja
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#makieta" className="hover:text-white transition-colors">
                  Makieta projektu
                </a>
              </li>
              <li>
                <a href="#sektory" className="hover:text-white transition-colors">
                  Dla kogo (Sektory)
                </a>
              </li>
              <li>
                <a href="#przewagi" className="hover:text-white transition-colors">
                  Dlaczego Pageneer
                </a>
              </li>
              <li>
                <a href="#proces" className="hover:text-white transition-colors">
                  Harmonogram 4 kroków
                </a>
              </li>
              <li>
                <a href="#cennik" className="hover:text-white transition-colors">
                  Przejrzysty cennik
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Pytania i obiekcje (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4">
              Dedykowane sektory
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sektory" className="hover:text-white transition-colors">
                  Gastronomia & Kawiarnie
                </a>
              </li>
              <li>
                <a href="#sektory" className="hover:text-white transition-colors">
                  Usługi & Fachowcy
                </a>
              </li>
              <li>
                <a href="#sektory" className="hover:text-white transition-colors">
                  Uroda & Wellness
                </a>
              </li>
              <li>
                <a href="#sektory" className="hover:text-white transition-colors">
                  Handel & Sklepy
                </a>
              </li>
              <li>
                <a href="#wycena" className="text-[#3b82f6] hover:underline">
                  Inna branża (wycena)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4">
              Kontakt i biuro
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+48500123456"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span>+48 500 123 456</span>
              </a>
              <a
                href="mailto:kontakt@pageneer.pl"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>kontakt@pageneer.pl</span>
              </a>
              <p className="text-[11px] text-slate-500">
                Poniedziałek – Piątek: 8:00 – 18:00
              </p>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-slate-400">
                  NIP: 123-456-78-90 • REGON: 987654321
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Pageneer. Wszelkie prawa zastrzeżone. Kod źródłowy w 100% własnością klienta.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Zbudowano w nowoczesnej technologii</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Wróć na górę"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Góra strony</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
