import React from 'react';
import { Zap, Smartphone, MapPin, ShieldCheck, CheckCircle, Clock } from 'lucide-react';
import { WHY_US_ITEMS } from '../data/content';
import { motion } from 'motion/react';

export const WhyUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-pink-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-violet-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="dlaczego-my" className="py-24 relative overflow-hidden bg-[#0c0c14]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-violet-600/15 via-purple-600/10 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-violet-500/20 text-xs font-semibold text-violet-300 uppercase tracking-wider mb-3">
            Dlaczego Lokalne Firmy Wybierają Nas
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Przewagi, które przekładają się na realne zyski
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Nie budujemy stron dla sztuki. Projektujemy narzędzia, które natychmiast budzą zaufanie i zachęcają mieszkańców Twojego miasta do skorzystania z Twoich usług.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-[#13131e] border border-white/[0.08] hover:border-purple-500/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(168,85,247,0.3)] flex flex-col justify-between"
            >
              <div>
                {/* Icon with gradient rim */}
                <div className="w-14 h-14 rounded-2xl bg-[#1c1c2b] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300 shadow-md">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              {/* Bottom Stat pill */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xl font-extrabold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.statLabel}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center text-slate-400 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-colors">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
