/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { Showcase } from './components/Showcase';
import { HowItWorks } from './components/HowItWorks';
import { WhyUs } from './components/WhyUs';
import { Pricing } from './components/Pricing';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('Pakiet Biznes Pro');
  const [selectedCategory, setSelectedCategory] = useState<string>('Gastronomia');

  const scrollToContact = () => {
    const contactElement = document.getElementById('kontakt');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToShowcase = () => {
    const showcaseElement = document.getElementById('realizacje');
    if (showcaseElement) {
      showcaseElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    scrollToContact();
  };

  const handleSelectCategory = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    scrollToContact();
  };

  const handleSelectProject = (projectTitle: string) => {
    setSelectedPlan(`Styl jak: ${projectTitle}`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 selection:bg-purple-500 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenQuote={scrollToContact} />

      {/* Hero Section */}
      <Hero
        onOrderQuote={scrollToContact}
        onViewShowcase={scrollToShowcase}
      />

      {/* Target Audience ("Dla kogo") */}
      <TargetAudience onSelectCategory={handleSelectCategory} />

      {/* Showcase ("Realizacje") */}
      <Showcase onSelectProject={handleSelectProject} />

      {/* Process ("Jak to działa") */}
      <HowItWorks />

      {/* Advantages ("Dlaczego my") */}
      <WhyUs />

      {/* Pricing ("Cennik") */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Contact & Quote Form ("Kontakt") */}
      <ContactSection
        initialPlan={selectedPlan}
        initialCategory={selectedCategory}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action for Mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center gap-2">
        <a
          href="tel:+48732123456"
          className="flex-1 py-3 px-4 rounded-xl bg-[#141422]/95 backdrop-blur-md border border-white/10 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-2xl"
        >
          <Phone className="w-4 h-4 text-pink-400" />
          <span>Zadzwoń teraz</span>
        </a>

        <button
          onClick={scrollToContact}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        >
          <Sparkles className="w-4 h-4" />
          <span>Szybka wycena</span>
        </button>
      </div>
    </div>
  );
}
