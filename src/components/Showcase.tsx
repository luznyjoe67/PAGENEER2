import React, { useState } from 'react';
import { ExternalLink, Check, Sparkles, Smartphone, Gauge, Award } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '../data/content';
import { motion } from 'motion/react';

interface ShowcaseProps {
  onSelectProject: (title: string) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onSelectProject }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(SHOWCASE_PROJECTS[0].id);

  const activeProject = SHOWCASE_PROJECTS.find(p => p.id === selectedProjectId) || SHOWCASE_PROJECTS[0];

  return (
    <section id="realizacje" className="py-24 relative overflow-hidden bg-[#0c0c14]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-pink-500/20 text-xs font-semibold text-pink-300 uppercase tracking-wider mb-3">
              Portfolio & Efekty
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Nasze przykładowe realizacje
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Bez szablonowych kompromisów. Każda strona jest zoptymalizowana pod natychmiastowe ładowanie, łatwe zamawianie i maksymalną liczbę telefonów od klientów.
            </p>
          </div>

          {/* Project Switcher Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#141420] border border-white/10">
            {SHOWCASE_PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  selectedProjectId === proj.id
                    ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {proj.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase Container */}
        <div className="rounded-3xl bg-[#11111a] border border-purple-500/20 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Project Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
                  {activeProject.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  <Gauge className="w-3.5 h-3.5" />
                  Speed 100/100
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeProject.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeProject.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Zaimplementowane moduły:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {activeProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-pink-400" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {activeProject.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="bg-white/[0.03] p-3 rounded-xl border border-white/5 text-center">
                    <div className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectProject(activeProject.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
                >
                  <span>Chcę podobną stronę dla mojej firmy</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Vector Mockup Preview (Zero Stock Photos - Pure Geometric Craft) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl bg-[#0a0a10] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden">
                {/* Browser top indicator */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <div className="ml-3 px-3 py-1 rounded-md bg-white/5 text-[10px] font-mono text-slate-400">
                      https://{activeProject.id}.lokalnybiznes.pl
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-purple-300">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Podgląd interfejsu</span>
                  </div>
                </div>

                {/* Simulated UI layout with rich vector cards based on mock type */}
                <div className="space-y-4">
                  {/* Mock Site Hero Banner with abstract gradient geometric background */}
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${activeProject.accentColor} relative overflow-hidden shadow-lg`}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                    <div className="relative z-10 space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                        {activeProject.category}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {activeProject.title}
                      </h4>
                      <p className="text-xs text-white/90 max-w-md">
                        Szybkie zamówienia telefoniczne, aktualna oferta i natychmiastowy dojazd z nawigacją.
                      </p>
                      <div className="pt-2 flex gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-bold shadow">
                          Zadzwoń teraz
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-white/20 text-white text-xs font-semibold backdrop-blur-md">
                          Menu / Cennik
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mock Mini Grid with Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-[#141422] border border-white/10">
                      <div className="w-7 h-7 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center mb-2 font-bold text-xs">
                        01
                      </div>
                      <div className="text-xs font-bold text-white">Szybki Kontakt</div>
                      <div className="text-[10px] text-slate-400 mt-1">Połączenie jednym dotknięciem na telefonie</div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141422] border border-white/10">
                      <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center mb-2 font-bold text-xs">
                        02
                      </div>
                      <div className="text-xs font-bold text-white">Google Maps</div>
                      <div className="text-[10px] text-slate-400 mt-1">Nawigacja prosto do Twojego lokalu</div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141422] border border-white/10 col-span-2 sm:col-span-1">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 font-bold text-xs">
                        03
                      </div>
                      <div className="text-xs font-bold text-white">Opinie 4.9★</div>
                      <div className="text-[10px] text-slate-400 mt-1">Automatyczna integracja ocen z wizytówki</div>
                    </div>
                  </div>

                  {/* Audit Proof Bar */}
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-emerald-300">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>Audyt Lighthouse: <strong>Wydajność 100 | Dostępność 100 | SEO 100</strong></span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">0.4s LCP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
