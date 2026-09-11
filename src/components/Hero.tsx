import React, { useState } from 'react';
import {
  Zap,
  Gauge,
  Clock,
  Shield,
  ArrowRight,
  Sparkles,
  Smartphone,
  Monitor,
  QrCode,
  CalendarCheck,
  MapPin,
  CheckCircle2,
  Code2,
  ExternalLink,
  ChevronRight,
  Flame,
  Star,
} from 'lucide-react';
import { HERO_BENCHMARKS, SAMPLE_GASTRONOMY_PROJECT } from '../data/content';

export const Hero: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeMockTab, setActiveMockTab] = useState<'home' | 'menu' | 'code'>('home');
  const [reservedSuccess, setReservedSuccess] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Glow gradient ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#3b82f6]/15 via-[#2563eb]/10 to-emerald-950/20 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#3b82f6]/10 blur-[140px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Micro Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181d22] border border-blue-500/30 text-xs text-slate-300 shadow-md shadow-[#3b82f6]/10 hover:border-[#3b82f6]/40 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="font-semibold text-white">Gotowe rozwiązania dla biznesu</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Bez abonamentu, stała cena</span>
          </div>

          {/* Hard Product Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Nowoczesne strony w <span className="text-[#3b82f6]">Strony dla firm</span>.
            <br />
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#34d399] to-blue-400 bg-clip-text text-transparent">
              Szybko, bez kompromisów.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Tworzymy superszybkie, gotowe witryny dla lokalnych firm i małych biznesów. 
            Stała wycena od <strong className="text-white font-semibold">1 190 zł</strong>, 
            ekspresowa realizacja w <strong className="text-[#3b82f6] font-semibold">5-7 dni</strong> i 100% Twojej własności kodu źródłowego bez miesięcznych haraczy.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('#cennik')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] hover:brightness-110 shadow-xl shadow-[#3b82f6]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
            >
              <span>Wybierz pakiet</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('#makieta')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-[#181d22] hover:bg-[#20262d] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2.5 shadow-md"
            >
              <Monitor className="w-4 h-4 text-[#3b82f6]" />
              <span>Zobacz realizacje</span>
            </button>
          </div>

          {/* Micro trust guarantee */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Gwarancja stałej ceny</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#3b82f6]" />
              <span>Wdrożenie w 5-7 dni</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>0 zł za hosting na zawsze</span>
            </div>
          </div>
        </div>

        {/* Live-benchmark statistics row */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {HERO_BENCHMARKS.map((item, idx) => (
            <div
              key={idx}
              className="relative group p-4 sm:p-5 rounded-2xl bg-[#181d22]/85 border border-white/10 hover:border-blue-500/40 transition-all backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  {item.label}
                </span>
                {idx === 0 ? (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    PERF 100
                  </span>
                ) : idx === 1 ? (
                  <Zap className="w-3.5 h-3.5 text-[#3b82f6]" />
                ) : idx === 2 ? (
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                ) : (
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                )}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                {idx === 0 ? (
                  <span className="text-blue-400">{item.value}</span>
                ) : idx === 1 ? (
                  <span className="text-[#3b82f6]">{item.value}</span>
                ) : (
                  item.value
                )}
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Sample Project Mockup Section */}
        <div id="makieta" className="mt-16 sm:mt-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3b82f6] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
              Interaktywna makieta wdrożenia
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Przykładowa realizacja: Sektor Gastronomiczny
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Zobacz, jak lekki i nowoczesny, dedykowany kod przekłada się na natychmiastowe zamówienia, menu QR i zero opóźnień.
            </p>
          </div>

          {/* Browser Chrome Container */}
          <div className="max-w-5xl mx-auto rounded-2xl bg-[#181d22] border border-white/15 shadow-2xl shadow-black/80 overflow-hidden">
            {/* Browser Top Navigation Bar */}
            <div className="px-4 py-3 bg-[#0f172a] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              {/* Window dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-blue-500/80 inline-block" />
                <span className="text-xs text-slate-500 font-mono ml-2 hidden sm:inline">pageneer-runtime: 0.35s</span>
              </div>

              {/* URL address pill */}
              <div className="flex-1 max-w-md mx-auto hidden md:flex items-center justify-center px-4 py-1 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-slate-300">
                <span className="text-blue-400 mr-2">🔒 https://</span>
                <span className="text-white font-medium">bella-tavola-poznan.pl</span>
                <span className="text-slate-500 ml-1">/menu-qr</span>
              </div>

              {/* View Switchers & Speed badge */}
              <div className="flex items-center gap-2">
                <div className="flex items-center p-0.5 rounded-lg bg-black/50 border border-white/10 text-xs">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors ${
                      deviceMode === 'desktop'
                        ? 'bg-[#3b82f6] text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors ${
                      deviceMode === 'mobile'
                        ? 'bg-[#3b82f6] text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Mobile</span>
                  </button>
                </div>

                {/* Benchmark score pill */}
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>100/100 PageSpeed</span>
                </div>
              </div>
            </div>

            {/* Mockup Sub-navigation Tabs */}
            <div className="flex border-b border-white/10 bg-[#14181c] px-4 py-2 text-xs font-medium gap-2">
              <button
                onClick={() => setActiveMockTab('home')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeMockTab === 'home'
                    ? 'bg-white/10 text-white font-semibold border border-white/15'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Monitor className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span>Widok Główny</span>
              </button>
              <button
                onClick={() => setActiveMockTab('menu')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeMockTab === 'menu'
                    ? 'bg-white/10 text-white font-semibold border border-white/15'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <QrCode className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span>Cyfrowe Menu QR</span>
              </button>
              <button
                onClick={() => setActiveMockTab('code')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeMockTab === 'code'
                    ? 'bg-white/10 text-white font-semibold border border-white/15'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Czysty Kod Nowoczesna Strona</span>
              </button>
            </div>

            {/* Mockup Canvas Area */}
            <div className="p-4 sm:p-6 bg-[#020617] flex justify-center min-h-[460px]">
              <div
                className={`transition-all duration-300 w-full ${
                  deviceMode === 'mobile' ? 'max-w-sm border-x border-white/10 shadow-2xl' : 'max-w-4xl'
                }`}
              >
                {/* TAB 1: HOME PAGE PREVIEW */}
                {activeMockTab === 'home' && (
                  <div className="bg-[#181d22] rounded-xl border border-white/10 p-5 sm:p-7 space-y-6">
                    {/* Mock Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg sm:text-xl font-black tracking-tight text-white">
                            {SAMPLE_GASTRONOMY_PROJECT.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            Otwarte teraz do 23:00
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#3b82f6]" />
                          <span>Poznań, Stary Rynek 14 • 4.9 ★★★★★ (482 opinie Google)</span>
                        </p>
                      </div>
                      <div className="hidden sm:block">
                        <button
                          onClick={() => setReservedSuccess(true)}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white text-xs font-bold shadow-md hover:brightness-110 transition-all"
                        >
                          Zarezerwuj stolik
                        </button>
                      </div>
                    </div>

                    {/* Mock Hero Banner */}
                    <div className="relative rounded-xl p-5 sm:p-7 overflow-hidden bg-gradient-to-br from-[#13261e] via-[#161d1a] to-[#121619] border border-blue-500/25">
                      <div className="max-w-md space-y-3">
                        <span className="text-[11px] font-mono text-[#3b82f6] uppercase tracking-wider font-semibold">
                          Oryginalna receptura z Neapolu
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                          {SAMPLE_GASTRONOMY_PROJECT.headline}
                        </h3>
                        <p className="text-xs text-slate-300">
                          Mąka Caputo Tipo 00, dojrzewanie ciasta 48h, piec opalany dębem. 
                          Zamów z dostawą lub zjedz przy klimatycznym patio.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <button
                            onClick={() => setActiveMockTab('menu')}
                            className="px-3.5 py-2 rounded-lg bg-[#3b82f6] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#34d399] transition-colors"
                          >
                            <QrCode className="w-3.5 h-3.5" />
                            <span>Zobacz Menu i Ceny</span>
                          </button>
                          <button
                            onClick={() => setReservedSuccess(true)}
                            className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/10"
                          >
                            Rezerwacja online
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Live interactive features pill row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SAMPLE_GASTRONOMY_PROJECT.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0f172a] border border-white/5 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Reservation Toast Alert simulation */}
                    {reservedSuccess && (
                      <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-blue-500/40 text-emerald-200 text-xs flex items-center justify-between animate-in fade-in">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span>
                            <strong>Demo formularza:</strong> Rezerwacja stolika działa natychmiastowo i wysyła SMS/e-mail do managera!
                          </span>
                        </div>
                        <button
                          onClick={() => setReservedSuccess(false)}
                          className="text-blue-400 hover:text-white font-bold ml-2 underline text-[11px]"
                        >
                          Zamknij
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 2: QR MENU PREVIEW */}
                {activeMockTab === 'menu' && (
                  <div className="bg-[#181d22] rounded-xl border border-white/10 p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <QrCode className="w-4 h-4 text-[#3b82f6]" />
                          <span>Karta dań na żywo (Menu QR)</span>
                        </h4>
                        <p className="text-xs text-slate-400">
                          Skanujesz kod smartfonem – strona otwiera się w 0.28s bez pobierania ciężkich PDF-ów
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-blue-500/20 text-[#3b82f6] border border-blue-500/30 text-xs font-mono">
                        Waga: 18 kB
                      </span>
                    </div>

                    <div className="space-y-3">
                      {SAMPLE_GASTRONOMY_PROJECT.menuPreview.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-[#0f172a] border border-white/5 hover:border-blue-500/40 transition-colors flex items-start justify-between gap-3"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="text-sm font-bold text-white">{item.title}</h5>
                              {idx === 0 && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                  Bestseller
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-sm font-extrabold text-[#3b82f6] font-mono">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                      <span>🍽️ Chcesz aktualizować ceny lub dodać danie dnia?</span>
                      <span className="text-[#3b82f6] font-medium">Zrobisz to w 60 sekund</span>
                    </div>
                  </div>
                )}

                {/* TAB 3: CLEAN Nowoczesna Strona CODE INSPECT */}
                {activeMockTab === 'code' && (
                  <div className="bg-[#020617] rounded-xl border border-white/10 p-4 font-mono text-xs text-slate-300 overflow-x-auto space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-500">
                      <span>index.html (nowoczesny, dedykowany kod, 0 wtyczek)</span>
                      <span className="text-blue-400">Zero podatności • 100/100 Lighthouse</span>
                    </div>
                    <pre className="text-slate-300 text-[11px] leading-relaxed">
{`<section class="bg-[#0f172a] text-white py-16 px-4">
  <div class="max-w-4xl mx-auto flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-extrabold tracking-tight">
        Trattoria & Bar Bella Tavola
      </h1>
      <p class="text-slate-400 text-sm mt-1">
        Poznań Stare Miasto • Czas ładowania: 0.35s
      </p>
    </div>
    <!-- Bezpośrednia rezerwacja bez pośredników i 15% prowizji -->
    <a href="tel:+48618000000" class="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] 
       px-5 py-2.5 rounded-xl font-bold text-white shadow-lg shadow-[#3b82f6]/20">
      Zadzwoń i zarezerwuj
    </a>
  </div>
</section>`}
                    </pre>
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-slate-400 text-[11px]">
                      <span>✓ Brak bazy MySQL • Brak wtyczek WordPressa</span>
                      <span className="text-[#3b82f6]">Kompilacja natywna</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom summary bar */}
            <div className="px-5 py-3 bg-[#0f172a] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Przykładowe wdrożenie z Pakietu Biznes Pro (1 990 zł)</span>
              </div>
              <button
                onClick={() => scrollToSection('#cennik')}
                className="text-[#3b82f6] hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <span>Zobacz co wchodzi w skład pakietu</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
