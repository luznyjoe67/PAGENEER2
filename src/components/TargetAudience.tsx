import React from 'react';
import { Utensils, Wrench, Sparkles, ShoppingBag, Check, ArrowUpRight } from 'lucide-react';
import { AUDIENCE_DATA } from '../data/content';
import { motion } from 'motion/react';

interface TargetAudienceProps {
  onSelectCategory: (categoryName: string) => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-pink-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-violet-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <section id="dla-kogo" className="py-24 relative overflow-hidden bg-[#0a0a11]">
      {/* Soft background blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
            Dedykowane Rozwiązania
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dla kogo projektujemy strony?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Każda branża ma inne wyzwania. Wiemy, jak skłonić gości do rezerwacji stolika, klientów do zadzwonienia po mechanika, a kobiety do umówienia wizyty w salonie urody.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCE_DATA.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-[#12121c] border border-white/[0.08] hover:border-purple-500/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_35px_-10px_rgba(168,85,247,0.3)] flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center p-3 group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300 shadow-inner">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-purple-400/90 font-medium mt-1 mb-3">
                  {card.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5 mb-6">
                  {card.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <button
                onClick={() => onSelectCategory(card.title)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-gradient-to-r hover:from-violet-600/80 hover:to-pink-600/80 border border-white/[0.08] hover:border-purple-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-all duration-300 cursor-pointer group/btn"
              >
                <span>Wyceń dla tej branży</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-purple-400 group-hover/btn:text-white" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
