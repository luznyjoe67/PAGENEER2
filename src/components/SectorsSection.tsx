import React from 'react';
import {
  UtensilsCrossed,
  Wrench,
  Sparkles,
  ShoppingBag,
  Check,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { SECTORS_DATA } from '../data/content';
import { SectorId } from '../types';

interface SectorsSectionProps {
  onSelectSector: (sectorId: SectorId) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onSelectSector }) => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#3b82f6]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#2563eb]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#34d399]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#6ee7b7]" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleChoose = (id: SectorId) => {
    onSelectSector(id);
    const el = document.querySelector('#wycena');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sektory" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#0f172a]">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#3b82f6]/10 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3b82f6] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            Dla kogo projektujemy?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Dedykowane rozwiązania dla 4 kluczowych sektorów
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Nie używamy uniwersalnych, nijakich szablonów. Każda strona powstaje w oparciu o specyfikę Twojej branży, psychologię klienta lokalnego i konkretne narzędzia generujące konwersję.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SECTORS_DATA.map((sector) => (
            <div
              key={sector.id}
              className="group relative rounded-2xl bg-[#181d22] border border-white/10 hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              style={{
                boxShadow: `0 10px 30px -15px ${sector.accentColor}15`,
              }}
            >
              {/* Card Top Pill & Icon */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${sector.accentColor}15`,
                        borderColor: `${sector.accentColor}30`,
                      }}
                    >
                      {getSectorIcon(sector.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {sector.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {sector.badge}
                      </p>
                    </div>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                    <span>{sector.metrics}</span>
                  </div>
                </div>

                {/* Catchy tagline */}
                <div className="mb-4">
                  <span
                    className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: `${sector.accentColor}15`,
                      color: sector.accentColor,
                    }}
                  >
                    {sector.tagline}
                  </span>
                  <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                {/* Key Specific Features with checkmarks */}
                <div className="space-y-2.5 my-6 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                    Kluczowe funkcjonalności wdrożenia:
                  </span>
                  {sector.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div
                        className="w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          backgroundColor: `${sector.accentColor}25`,
                          color: sector.accentColor,
                        }}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Przykład: <strong className="text-slate-200">{sector.exampleName}</strong>
                </span>
                <button
                  onClick={() => handleChoose(sector.id)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center gap-1.5 group-hover:border-white/30"
                >
                  <span>Wyceń dla tej branży</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3b82f6] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
