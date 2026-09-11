import React, { useState, useEffect } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import { SectorId, PackageId, QuoteFormData } from '../types';
import { PRICING_PACKAGES } from '../data/content';

interface ContactSectionProps {
  selectedPackage: PackageId;
  selectedSector: SectorId | 'other';
  onPackageChange: (pkg: PackageId) => void;
  onSectorChange: (sec: SectorId | 'other') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPackage,
  selectedSector,
  onPackageChange,
  onSectorChange,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    sector: selectedSector,
    packageChoice: selectedPackage,
    notes: '',
    urgency: 'standard',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      packageChoice: selectedPackage,
      sector: selectedSector,
    }));
  }, [selectedPackage, selectedSector]);

  const currentPackageData = PRICING_PACKAGES.find(
    (p) => p.id === formData.packageChoice
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="wycena" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#020617] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#3b82f6]/10 blur-[150px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 blur-[150px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3b82f6] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            Szybka wycena bez zobowiązań
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Zamów stronę dla Twojej firmy lub zapytaj o szczegóły
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Wypełnij krótki formularz. Skontaktujemy się z Tobą telefonicznie lub mailowo w ciągu maksymalnie 2 godzin w dni robocze.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181d22] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Dlaczego warto napisać teraz?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">
                      Odpowiedź w 2 godziny
                    </strong>
                    <span className="text-slate-400">
                      Szanujemy Twój czas — nie czekasz 3 dni na odpowiedź z agencji.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">
                      Gwarancja stałej ceny w ofercie
                    </strong>
                    <span className="text-slate-400">
                      Cena z wyceny jest kwotą ostateczną. Zero dopłat za „dodatkowe poprawki”.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">
                      Bezpłatny 15-minutowy brief
                    </strong>
                    <span className="text-slate-400">
                      Doradzimy, jakie funkcje w Twojej branży przyniosą najwięcej telefonów.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct channels */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                  Bezpośredni kontakt:
                </span>

                <a
                  href="tel:+48500123456"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0f172a] border border-white/5 hover:border-white/20 transition-colors text-slate-200 text-xs sm:text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-[#3b82f6] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono font-bold text-white group-hover:text-[#3b82f6] transition-colors">
                      +48 500 123 456
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Pn - Pt: 8:00 - 18:00
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@pageneer.pl"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0f172a] border border-white/5 hover:border-white/20 transition-colors text-slate-200 text-xs sm:text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-[#3b82f6] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono font-bold text-white group-hover:text-[#3b82f6] transition-colors">
                      kontakt@pageneer.pl
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Wyceny i pytania techniczne
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0f172a] border border-white/5 text-slate-400 text-xs">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Realizacje dla firm z całej Polski (zdalnie, bez zbędnych dojazdów)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181d22] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Dziękujemy! Otrzymaliśmy Twoje zapytanie.
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Nasz inżynier prowadzący przeanalizuje Twoją branżę i skontaktuje się z Tobą w ciągu maksymalnie 2 godzin.
                  </p>
                  <div className="p-4 rounded-xl bg-[#0f172a] border border-white/10 max-w-sm mx-auto text-left text-xs space-y-1.5 font-mono">
                    <div className="text-slate-400">Wybrany pakiet: <strong className="text-white">{currentPackageData?.name} ({currentPackageData?.price})</strong></div>
                    <div className="text-slate-400">Szacowany start: <strong className="text-blue-400">W tym tygodniu</strong></div>
                    <div className="text-slate-400">Czas wdrożenia: <strong className="text-[#3b82f6]">5-7 dni roboczych</strong></div>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        sector: 'gastronomy',
                        packageChoice: 'biznes',
                        notes: '',
                        urgency: 'standard',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                  >
                    Wyślij kolejne zapytanie
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white">
                      Konfigurator wyceny online
                    </h3>
                    <span className="text-[11px] font-mono text-[#3b82f6] bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      Krok 1 z 1 (Szybki brief)
                    </span>
                  </div>

                  {/* Sector Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      1. Wybierz Twoją branżę:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'gastronomy', label: 'Gastronomia' },
                        { id: 'services', label: 'Usługi / Fachowcy' },
                        { id: 'beauty', label: 'Uroda / Salon' },
                        { id: 'retail', label: 'Sklep / Handel' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            onSectorChange(item.id as SectorId);
                            setFormData((prev) => ({ ...prev, sector: item.id as SectorId }));
                          }}
                          className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.sector === item.id
                              ? 'bg-[#3b82f6]/20 border-[#3b82f6] text-white font-bold shadow-md shadow-[#3b82f6]/10'
                              : 'bg-[#0f172a] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Package Choice */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      2. Wybierz interesujący Cię pakiet:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {PRICING_PACKAGES.map((pkg) => (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => {
                            onPackageChange(pkg.id);
                            setFormData((prev) => ({ ...prev, packageChoice: pkg.id }));
                          }}
                          className={`p-3 rounded-xl text-xs border text-left transition-all ${
                            formData.packageChoice === pkg.id
                              ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[#3b82f6] text-white shadow-md'
                              : 'bg-[#0f172a] border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white">{pkg.name}</span>
                            {pkg.popular && (
                              <span className="text-[9px] bg-[#3b82f6] text-white px-1.5 py-0.2 rounded font-bold">
                                Hit
                              </span>
                            )}
                          </div>
                          <div className="text-sm font-extrabold font-mono text-[#3b82f6] mt-1">
                            {pkg.price}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            {pkg.timeframe}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Phone Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Twoje imię i nazwisko / Nazwa firmy *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="np. Michał Nowak (Pizzeria Roma)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#3b82f6] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Numer telefonu kontaktowego *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="np. 500 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#3b82f6] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Adres e-mail do oferty *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="twoj-email@firma.pl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#3b82f6] transition-colors"
                    />
                  </div>

                  {/* Notes / Website URL */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Adres obecnej strony lub dodatkowe uwagi (opcjonalnie)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="np. Chcę wymienić starą stronę na WordPressie na coś szybkiego z menu QR i rezerwacją stolików..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                    />
                  </div>

                  {/* Price Estimate Summary Card */}
                  <div className="p-3.5 rounded-xl bg-[#0f172a] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">
                        Podsumowanie konfiguracji:
                      </span>
                      <span className="font-bold text-white">
                        {currentPackageData?.name} — {currentPackageData?.price} netto
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-blue-400 font-mono font-bold block">
                        Realizacja: 5-7 dni roboczych
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Zero opłat abonamentowych
                      </span>
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] hover:brightness-110 shadow-xl shadow-[#3b82f6]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Przetwarzanie zapytania...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Wyślij zapytanie o bezpłatną wycenę</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-500">
                    Wysyłając formularz, wyrażasz zgodę na kontakt w celu przedstawienia oferty. 
                    Zero spamu, cenimy Twoją prywatność.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
