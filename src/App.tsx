/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectorsSection } from './components/SectorsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectorId, PackageId } from './types';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageId>('biznes');
  const [selectedSector, setSelectedSector] = useState<SectorId | 'other'>('gastronomy');

  const handleSelectPackage = (pkgId: PackageId) => {
    setSelectedPackage(pkgId);
  };

  const handleSelectSector = (secId: SectorId | 'other') => {
    setSelectedSector(secId);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] flex flex-col selection:bg-[#3b82f6]/30 selection:text-[#3b82f6]">
      {/* Navigation */}
      <Navbar onSelectPackage={handleSelectPackage} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with live benchmark stats and gastronomy mockup preview */}
        <Hero />

        {/* Sectors: Dla kogo (4 cards: Gastronomia, Usługi, Uroda, Handel) */}
        <SectorsSection onSelectSector={handleSelectSector} />

        {/* Advantages: Dlaczego Pageneer & comparison with WordPress */}
        <WhyUsSection />

        {/* Process: 4-step roadmap timeline */}
        <ProcessSection />

        {/* Pricing: 3 transparent packages */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* FAQ: Objections dismantled */}
        <FaqSection />

        {/* Quick Quote & Contact Form */}
        <ContactSection
          selectedPackage={selectedPackage}
          selectedSector={selectedSector}
          onPackageChange={handleSelectPackage}
          onSectorChange={handleSelectSector}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating fast contact button on bottom right */}
      <aside aria-label="Szybki kontakt" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href="https://wa.me/48500123456"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform hover:scale-110"
          title="Napisz na WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+48500123456"
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] text-white font-bold flex items-center justify-center shadow-lg shadow-[#3b82f6]/25 transition-transform hover:scale-110"
          title="Zadzwoń teraz: +48 500 123 456"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>
    </div>
  );
}
