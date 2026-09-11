import React from 'react';
import { MessageSquare, Palette, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-purple-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-violet-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="jak-to-dziala" className="py-24 relative overflow-hidden bg-[#09090f]">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
            Jasny i Prosty Proces
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Jak wygląda współpraca krok po kroku?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Nie musisz znać się na programowaniu ani pisać trudnych dokumentów. Prowadzimy Cię za rękę od pierwszego kontaktu po publikację w sieci.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative rounded-2xl bg-[#12121c] border border-white/[0.08] hover:border-purple-500/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(168,85,247,0.3)] flex flex-col justify-between"
            >
              <div>
                {/* Top Step Number Badge & Timeline Connector */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-violet-400 to-pink-500 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                {/* Step Title & Duration */}
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-pink-300/90 bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-500/20">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Sub-steps */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-pink-400" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner below timeline */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-violet-900/30 via-purple-900/20 to-pink-900/30 border border-purple-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Gwarancja 100% zadowolenia przed wdrożeniem
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Pracujemy nad projektem graficznym dopóki nie będziesz w 100% zachwycony. Wprowadzamy poprawki bez dodatkowych opłat.
            </p>
          </div>
          <a
            href="#kontakt"
            className="flex-shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
          >
            Rozpocznij projekt
          </a>
        </div>
      </div>
    </section>
  );
};
