import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, Clock, CheckCircle2, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { ContactFormData } from '../types';
import { motion } from 'motion/react';

interface ContactSectionProps {
  initialPlan?: string;
  initialCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialPlan = '',
  initialCategory = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessType: initialCategory || 'Gastronomia',
    selectedPlan: initialPlan || 'Pakiet Biznes Pro',
    projectDescription: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<ContactFormData | null>(null);

  // Sync props if user clicked on specific package or category
  useEffect(() => {
    if (initialPlan) {
      setFormData(prev => ({ ...prev, selectedPlan: initialPlan }));
    }
  }, [initialPlan]);

  useEffect(() => {
    if (initialCategory) {
      setFormData(prev => ({ ...prev, businessType: initialCategory }));
    }
  }, [initialCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setLastSubmission({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessType: 'Gastronomia',
      selectedPlan: 'Pakiet Biznes Pro',
      projectDescription: '',
    });
  };

  return (
    <section id="kontakt" className="py-24 relative overflow-hidden bg-[#0c0c14]">
      {/* Glow blobs in background */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Copy & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
                Bezpłatna Konsultacja
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Zbudujmy Twoją stronę już w ten tydzień
              </h2>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Opowiedz nam w 2 zdaniach o swoim biznesie. Przygotujemy niezobowiązującą wycenę, podpowiemy najlepsze rozwiązania i wyślemy wstępną propozycję w mniej niż 2 godziny.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+48732123456"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#141422] border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Zadzwoń bezpośrednio</div>
                  <div className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                    +48 732 123 456
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Dostępni pn-pt: 8:00 – 19:00</span>
                  </div>
                </div>
              </a>

              <a
                href="mailto:kontakt@weblokalnie.pl"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#141422] border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Napisz na skrzynkę e-mail</div>
                  <div className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    kontakt@weblokalnie.pl
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Odpowiedź zazwyczaj w 15–60 minut
                  </div>
                </div>
              </a>
            </div>

            {/* Micro guarantees */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bez zobowiązań — wycena i konsultacja są w 100% darmowe</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Błyskawiczny start prac — bez kolejki i zbędnego czekania</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#12121d] border border-purple-500/30 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Form header glow */}
              <div className="absolute top-0 right-10 w-40 h-40 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Formularz szybkiej wyceny
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Wypełnij pola poniżej — skontaktujemy się z gotową propozycją
                      </p>
                    </div>
                    <Sparkles className="w-5 h-5 text-pink-400" />
                  </div>

                  {/* Name and Email in grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Imię i nazwisko / Nazwa firmy <span className="text-pink-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="np. Jan Kowalski (Pizzeria Bella)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-slate-500 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Adres e-mail <span className="text-pink-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="kontakt@twojabiznes.pl"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-slate-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Business Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Numer telefonu <span className="text-slate-500 text-[10px]">(ułatwi szybki kontakt)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+48 123 456 789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-slate-500 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-business-type" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Branża / Rodzaj działalności
                      </label>
                      <select
                        id="contact-business-type"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white transition-all outline-none cursor-pointer"
                      >
                        <option value="Gastronomia">Gastronomia & Kawiarnie</option>
                        <option value="Usługi & Fachowcy">Usługi & Fachowcy (warsztat, serwis)</option>
                        <option value="Uroda & Kosmetologia">Uroda, Fryzjerstwo & SPA</option>
                        <option value="Handel & Sklepy">Handel & Sklepy lokalne</option>
                        <option value="Inna branża">Inna branża lokalna</option>
                      </select>
                    </div>
                  </div>

                  {/* Selected Plan */}
                  <div>
                    <label htmlFor="contact-plan" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Interesujący Cię pakiet
                    </label>
                    <select
                      id="contact-plan"
                      value={formData.selectedPlan}
                      onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white transition-all outline-none cursor-pointer"
                    >
                      <option value="Pakiet Start">Pakiet Start (1 190 zł) — Wizytówka One-Page</option>
                      <option value="Pakiet Biznes Pro">Pakiet Biznes Pro (1 990 zł) — Najpopularniejszy</option>
                      <option value="Pakiet Dedykowany">Pakiet Dedykowany (3 290 zł) — Zaawansowany / Sklep</option>
                      <option value="Nie wiem, proszę o doradzenie">Nie wiem jeszcze — proszę o doradzenie</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="contact-description" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Opis projektu / Twoje oczekiwania <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      id="contact-description"
                      rows={3}
                      required
                      placeholder="Czym zajmuje się Twoja firma? Jakich funkcji potrzebujesz (np. menu z kodem QR, rezerwacja wizyt, lokalizacja w Google Maps)?"
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-slate-500 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Wysyłanie zapytania...</span>
                      </>
                    ) : (
                      <>
                        <span>Wyślij zapytanie o darmową wycenę</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Twoje dane są w 100% bezpieczne. Nie wysyłamy spamu ani reklam.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white">
                      Dziękujemy za kontakt, {lastSubmission?.name}!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się pod adresem <strong className="text-white">{lastSubmission?.email}</strong> w ciągu 2 godzin z indywidualną propozycją dla Twojego biznesu.
                    </p>
                  </div>

                  {lastSubmission && (
                    <div className="p-4 rounded-xl bg-[#090910] border border-white/10 text-left max-w-md mx-auto text-xs space-y-1.5">
                      <div className="text-slate-400">Wybrany pakiet: <strong className="text-purple-300">{lastSubmission.selectedPlan}</strong></div>
                      <div className="text-slate-400">Branża: <strong className="text-slate-200">{lastSubmission.businessType}</strong></div>
                    </div>
                  )}

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Wyślij kolejne zapytanie</span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
