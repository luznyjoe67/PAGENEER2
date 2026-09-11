
import React from 'react';
import { PRICING_PACKAGES } from '../data/content';
import { Check, Clock, ArrowRight, ShieldCheck, Zap, Server } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (pkgId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const handleSelect = () => {
    onSelectPackage('complete');
    const element = document.getElementById('wycena');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const singleOffer = PRICING_PACKAGES[0];

  return (
    <section id="cennik" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#3b82f6]/10 blur-[160px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3b82f6] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            Jedna prosta i przejrzysta oferta
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Wszystko, czego potrzebuje Twoja firma w internecie
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Brak skomplikowanych pakietów i ukrytych gwiazdek. Płacisz stałą kwotę za wykonanie strony oraz niski abonament za pełną opiekę i serwer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-[#1e293b] border-2 border-[#3b82f6] shadow-2xl shadow-[#3b82f6]/15 overflow-hidden">
          <div className="bg-[#0f172a] border-b border-blue-500/20 px-6 sm:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] font-bold text-xs uppercase tracking-wider border border-[#3b82f6]/30">
                  Oferta All-Inclusive
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#3b82f6]" />
                  <span>Realizacja w 5-7 dni</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Strona Gotowa pod Klucz
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Kompletna strona internetowa dopasowana do specyfiki Twojej branży i lokalnych klientów.
              </p>
            </div>

            <div className="bg-[#1e293b] border border-blue-500/30 p-5 rounded-2xl text-center sm:text-right shrink-0">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Jednorazowe wdrożenie
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-0.5">
                1 199 zł
              </div>
              <div className="mt-2 pt-2 border-t border-blue-500/20 text-xs font-bold text-[#3b82f6] flex items-center justify-center sm:justify-end gap-1">
                <Server className="w-3.5 h-3.5" />
                <span>+ 99 zł / mies. abonament</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                (hosting, domena, SSL i opieka w cenie)
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Co otrzymujesz w ramach oferty:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {singleOffer.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#1e293b] border border-white/5 hover:border-blue-500/30 transition-colors">
                    <div className="w-5 h-5 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className={`text-xs sm:text-sm leading-snug ${feat.highlight ? 'text-white font-semibold' : 'text-slate-300'}`}>
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#3b82f6]" />
                  <span>Gwarancja zadowolenia & Pełna faktura VAT</span>
                </div>
                <p className="text-xs text-slate-400">
                  Nie podpisujesz długoterminowych cyrografów. Z abonamentu możesz zrezygnować w dowolnym momencie.
                </p>
              </div>

              <button onClick={handleSelect} className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] hover:brightness-110 shadow-xl shadow-[#3b82f6]/25 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0">
                <span>Zamów stronę (1 199 zł + 99 zł/mc)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
