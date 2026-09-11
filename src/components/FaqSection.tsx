import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  // Set first item open by default for immediate value
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3b82f6] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            Odpowiedzi na obiekcje
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Często zadawane pytania (FAQ)
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Żadnego drobnego druku i niedopowiedzeń. Oto proste odpowiedzi na pytania, które najczęściej zadają nam właściciele lokalnych firm.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#181d22] border-white/20 shadow-lg'
                    : 'bg-[#14181c] border-white/10 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#3b82f6] tracking-wider font-semibold">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-500/20 text-[#3b82f6] border-[#3b82f6]/30' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#181d22] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#3b82f6]" />
              <span>Masz inne nietypowe pytanie?</span>
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Napisz do nas lub zadzwoń — odpowiadamy rzeczowo i bez marketingowego żargonu.
            </p>
          </div>
          <a
            href="tel:+48500123456"
            className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
          >
            Zadzwoń: +48 500 123 456
          </a>
        </div>
      </div>
    </section>
  );
};
