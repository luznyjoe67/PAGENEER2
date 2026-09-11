import React from 'react';
import {
  Zap,
  KeyRound,
  MapPin,
  ShieldCheck,
  PenTool,
  Server,
  Check,
  X,
  Sparkles,
} from 'lucide-react';
import { WHY_US_ITEMS } from '../data/content';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#3b82f6]" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-[#2563eb]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#34d399]" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-[#6ee7b7]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#3b82f6]" />;
    }
  };

  const comparisonRows = [
    {
      feature: 'Czas oczekiwania na gotową stronę',
      pageneer: 'Ekspresowe 5-7 dni roboczych',
      traditional: '6-12 tygodni (niekończące się maile)',
      winner: true,
    },
    {
      feature: 'Własność kodu i platformy',
      pageneer: '100% Twojej własności, zero abonamentu',
      traditional: 'Vendor lock-in lub 200-400 zł/msc',
      winner: true,
    },
    {
      feature: 'Wynik Google PageSpeed',
      pageneer: 'Stałe 98-100/100 (Core Web Vitals)',
      traditional: 'Zwykle 35-60/100 na WordPressie',
      winner: true,
    },
    {
      feature: 'Pisanie tekstów i copywriting',
      pageneer: 'W cenie pakietu (wywiad 15 min)',
      traditional: 'Musisz napisać sam lub dopłacić 800 zł',
      winner: true,
    },
    {
      feature: 'Bezpieczeństwo i aktualizacje',
      pageneer: 'Brak podatności (statyczny HTML/Nowoczesna Strona)',
      traditional: 'Ciągłe infekcje i dziury w wtyczkach',
      winner: true,
    },
    {
      feature: 'Koszty hostingu serwera',
      pageneer: '0 zł / rok (nowoczesny CDN brzegowy)',
      traditional: '300-900 zł rocznie za hosting PHP/MySQL',
      winner: true,
    },
  ];

  return (
    <section id="przewagi" className="py-20 lg:py-28 relative bg-[#020617] border-y border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3b82f6] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            Dlaczego Pageneer?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Koniec z drogimi agencjami i ociężałym WordPressem
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Stworzyliśmy autorski model współpracy, który eliminuje tygodnie niepotrzebnych spotkań i ukryte opłaty. Otrzymujesz czysty, superszybki produkt w jasnej cenie.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#181d22] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-blue-400 font-medium">
                  ✓ {item.tag}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="mt-16 sm:mt-20 rounded-2xl bg-[#181d22] border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 bg-[#14181c] border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#3b82f6] font-semibold tracking-wider">
                Porównanie rynkowe
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Pageneer kontra Tradycyjna Agencja Webowa
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              Różnica, którą odczujesz w portfelu i konwersji
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#0f172a]/60 text-slate-400 font-mono text-xs">
                  <th className="py-3.5 px-6 font-medium">Kryterium</th>
                  <th className="py-3.5 px-6 font-bold text-[#3b82f6]">
                    Pageneer (nowoczesne wykonanie)
                  </th>
                  <th className="py-3.5 px-6 font-medium text-slate-400">
                    Tradycyjna Agencja (WordPress)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-slate-300 font-medium">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-white font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{row.pageneer}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
