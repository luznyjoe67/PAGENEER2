const fs = require('fs');

const contentTsPath = './src/data/content.ts';
let content = fs.readFileSync(contentTsPath, 'utf8');

// Replace everything between export const PRICING_PACKAGES and the next export
const packagesRegex = /export const PRICING_PACKAGES: PricingPackage\[\] = \[([\s\S]*?)\];/;

const newPackages = `export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'complete',
    name: 'Strona Gotowa pod Klucz',
    badge: 'Prosta, przejrzysta oferta',
    price: '1 199 zł + 99 zł/mc',
    period: '1 199 zł jednorazowo wdrożenie + 99 zł/mies. abonament',
    timeframe: 'Realizacja w 5-7 dni',
    popular: true,
    ctaText: 'Zamawiam stronę dla mojej firmy',
    summary: 'Kompletna, błyskawiczna strona typu One-Page, która profesjonalnie prezentuje Twoją firmę i zachęca do kontaktu.',
    targetAudience: 'Dla lokalnych fachowców i firm usługowych.',
    features: [
      { included: true, text: 'Kompletna, nowoczesna strona www dopasowana do Twojej branży', highlight: true },
      { included: true, text: 'Ekspresowe wdrożenie w 5-7 dni roboczych bez przeciągania', highlight: true },
      { included: true, text: 'W abonamencie 99 zł/mies.: superszybki serwer, domena i certyfikat SSL', highlight: true },
      { included: true, text: 'Wsparcie techniczne oraz bieżące aktualizacje treści i cennika w cenie', highlight: true },
      { included: true, text: 'Maksymalny wynik 100/100 w Google PageSpeed na telefonach' },
      { included: true, text: 'Bezpośredni formularz kontaktowy z powiadomieniami na e-mail' },
      { included: true, text: 'Przycisk szybkiego połączenia telefonicznego (Click-to-Call)' },
      { included: true, text: 'Interaktywna mapa dojazdu Google i estetyczna prezentacja usług' },
      { included: true, text: 'Optymalizacja pod wyszukiwarkę Google (Lokalne SEO)' },
      { included: true, text: 'Kopie zapasowe i ochrona antywirusowa 24/7' },
      { included: true, text: 'Jasne zasady bez ukrytych opłat i bez technicznego żargonu' },
    ],
  },
];`;

content = content.replace(packagesRegex, newPackages);
content = content.replace(/1 190 zł/g, '1 199 zł + 99 zł/mc');
fs.writeFileSync(contentTsPath, content);
