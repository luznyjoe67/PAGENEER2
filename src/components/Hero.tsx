import React, { useState } from 'react';
import { ArrowRight, Eye, CheckCircle2, Star, Sparkles, MapPin, Phone, ShieldCheck, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOrderQuote: () => void;
  onViewShowcase: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderQuote, onViewShowcase }) => {
  const [activeTab, setActiveTab] = useState<'restaurant' | 'mechanic' | 'beauty'>('restaurant');

  const previewTabs = [
    { id: 'restaurant', label: 'Pizzeria & Bistro', phone: '+48 501 222 333', place: 'Kraków, Rynek', rating: '4.9 ★ (280 opinii)' },
    { id: 'mechanic', label: 'Auto Serwis 24h', phone: '+48 600 444 888', place: 'Poznań, Dębiec', rating: '5.0 ★ (140 opinii)' },
    { id: 'beauty', label: 'Studio Kosmetologii', phone: '+48 789 111 222', place: 'Gdańsk, Wrzeszcz', rating: '4.9 ★ (310 opinii)' },
  ];

  const currentTab = previewTabs.find(t => t.id === activeTab) || previewTabs[0];

  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Soft Blobs & Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] bg-gradient-to-tr from-violet-600/20 via-purple-600/15 to-pink-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] bg-violet-700/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-48 w-[400px] h-[400px] bg-pink-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Background Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] mb-6 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-ping" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Dedykowane strony dla firm lokalnych • Realizacja w <strong className="text-pink-300 font-semibold">5–7 dni</strong>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]"
          >
            Zbudujemy Ci taką stronę,{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                jak ta
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C60 3 190 3 247 9" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear" x1="3" y1="6" x2="247" y2="6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="0.5" stopColor="#C084FC" />
                    <stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            id="hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Tworzymy szybkie, nowoczesne strony internetowe dla małych, lokalnych firm — szybko, bez zbędnego żargonu i w przystępnej cenie. Pozyskuj stałych klientów z Twojej okolicy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            id="hero-cta-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <button
              id="hero-primary-cta"
              onClick={onOrderQuote}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Zamów wycenę</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onViewShowcase}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-[#12121c]/90 hover:bg-[#181826] border border-purple-500/30 hover:border-purple-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            >
              <Eye className="w-4 h-4 text-purple-400" />
              <span>Zobacz realizacje</span>
            </button>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Własność (Zero abonamentu)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Google PageSpeed 98-100/100
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Lokalne SEO i Google Maps
            </span>
          </motion.div>
        </div>

        {/* Interactive Hero Visual Showcase: Interactive Browser Mockup */}
        <motion.div
          id="hero-interactive-mockup"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 sm:mt-16 max-w-5xl mx-auto relative"
        >
          {/* Ambient Glow underneath mockup */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 -z-10" />

          {/* Browser Container */}
          <div className="rounded-2xl bg-[#0f0f18] border border-purple-500/30 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {/* Browser Top Bar */}
            <div className="px-4 py-3 bg-[#141422] border-b border-white/[0.07] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                  https://twoja-firma-lokalna.pl
                </span>
              </div>

              {/* Mockup tabs */}
              <div className="flex items-center gap-1 bg-[#090910] p-1 rounded-xl border border-white/5 text-xs font-medium">
                {previewTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Speed Badge */}
              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Gauge className="w-3.5 h-3.5" />
                <span>PageSpeed: 100/100</span>
              </div>
            </div>

            {/* Browser Body Mockup Content */}
            <div className="p-6 sm:p-8 bg-gradient-to-b from-[#11111d] to-[#0c0c14] relative">
              {/* Inner preview card banner */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                    <span>Widok przykładowej strony dla Twojego biznesu</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeTab === 'restaurant' && 'Najlepsza Pizza w Piecu Opałowym'}
                    {activeTab === 'mechanic' && 'Profesjonalny Warsztat & Pomoc 24/7'}
                    {activeTab === 'beauty' && 'Zadbaj o Swoje Piękno & Zdrowie'}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeTab === 'restaurant' && 'Świeże ciasto, włoskie składniki i przytulna atmosfera w sercu miasta. Zamów online lub zarezerwuj stolik na wieczór.'}
                    {activeTab === 'mechanic' && 'Komputerowa diagnostyka, naprawa zawieszenia, klimatyzacja i geometria. Uczciwa wycena przed rozpoczęciem prac.'}
                    {activeTab === 'beauty' && 'Nowoczesne zabiegi na twarz i ciało, stylizacja paznokci i masaże relaksacyjne wykonywane przez certyfikowane ekspertki.'}
                  </p>

                  {/* Micro features on preview */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Phone className="w-3.5 h-3.5 text-pink-400" />
                      <span>{currentTab.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-violet-400" />
                      <span>{currentTab.place}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{currentTab.rating}</span>
                    </div>
                  </div>

                  {/* Mock Action Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)] inline-flex items-center gap-1.5">
                      {activeTab === 'restaurant' && 'Zarezerwuj stolik online'}
                      {activeTab === 'mechanic' && 'Zadzwoń po pomoc natychmiast'}
                      {activeTab === 'beauty' && 'Umów wizytę w kalendarzu'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="px-4 py-2.5 rounded-xl bg-white/5 text-slate-300 border border-white/10 text-xs font-medium inline-flex items-center gap-1.5">
                      {activeTab === 'restaurant' && 'Zobacz Menu & Cennik'}
                      {activeTab === 'mechanic' && 'Cennik Usług Serwisu'}
                      {activeTab === 'beauty' && 'Katalog Zabiegów'}
                    </span>
                  </div>
                </div>

                {/* Visual Widget Card on right */}
                <div className="md:col-span-5 bg-[#090912] p-5 rounded-xl border border-white/10 space-y-3.5 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-semibold text-slate-300">Statystyki strony na żywo</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Aktywna
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Czas reakcji na kliknięcie</span>
                      <span className="font-mono text-emerald-400 font-bold">0.32 sekundy</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[96%]" />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-400">Dostosowanie do smartfonów</span>
                      <span className="font-mono text-pink-400 font-bold">100% Mobile</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-500 to-pink-500 w-[100%]" />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-400">Pozycja w lokalnym Google</span>
                      <span className="font-mono text-purple-300 font-bold">Top 3 w okolicy</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 w-[92%]" />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400 border-t border-white/5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Strona z certyfikatem SSL, zgodna z RODO i dyrektywą Omnibus.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
