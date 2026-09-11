import React from 'react';
import {
  MessageSquare,
  FileText,
  Code2,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-[#3b82f6]" />;
      case 1:
        return <FileText className="w-5 h-5 text-[#2563eb]" />;
      case 2:
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 3:
        return <Globe2 className="w-5 h-5 text-[#34d399]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="proces" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3b82f6] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            Harmonogram realizacji
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Od pierwszego kontaktu do działającej witryny w 4 krokach
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Zero biurokracji i przeciągających się tygodniami spotkań. Transparentny, zoptymalizowany proces, w którym wiesz dokładnie, co dzieje się każdego dnia.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative rounded-2xl bg-[#181d22] border border-white/10 hover:border-blue-500/30 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Top Step Number & Timing */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0f172a] border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-[#3b82f6] border border-blue-500/20">
                      {step.days}
                    </span>
                    <span className="text-2xl font-black text-white/20 font-mono">
                      {step.stepNumber}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                    Rezultat tego etapu:
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom micro timeline link */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>Krok {step.stepNumber} z 04</span>
                </span>
                {idx < 3 && (
                  <span className="hidden lg:inline text-slate-400 group-hover:text-white transition-colors">
                    Następny etap →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Express delivery note callout */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#181d22] to-emerald-950/20 border border-blue-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#3b82f6]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Potrzebujesz strony jeszcze szybciej?
              </h4>
              <p className="text-xs text-slate-300">
                Wybierz tryb ekspresowy (3-4 dni robocze) w formularzu wyceny z gwarancją pierwszeństwa w kolejce.
              </p>
            </div>
          </div>
          <a
            href="#wycena"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:brightness-110 shadow-md transition-all"
          >
            Sprawdź dostępność
          </a>
        </div>
      </div>
    </section>
  );
};
