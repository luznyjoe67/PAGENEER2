import { SectorItem, PricingPackage, ProcessStep, FaqItem } from '../types';

export const HERO_BENCHMARKS = [
  { label: 'Google PageSpeed', value: '100/100', sub: 'Wydajność mobilna i desktop' },
  { label: 'Czas ładowania', value: '0.35s', sub: 'Błyskawiczne First Contentful Paint' },
  { label: 'Czas realizacji', value: '5-7 dni', sub: 'Od briefu do gotowej witryny' },
  { label: 'Abonament za kod', value: '0 zł/msc', sub: '100% Twojej własności, na zawsze' },
];

export const SAMPLE_GASTRONOMY_PROJECT = {
  name: 'Trattoria & Bar Bella Tavola',
  category: 'Włoska Gastronomia • Poznań Stare Miasto',
  headline: 'Autentyczna włoska kuchnia na chrupiącym cieście i rzemieślnicze makarony',
  rating: '4.9 ★★★★★ (482 opinie Google)',
  features: [
    'Menu cyfrowe z kodem QR przy stolikach',
    'Rezerwacja stolika online w 3 kliknięcia',
    'Aktualne godziny otwarcia i status „Otwarte teraz”',
    'Bezpośrednia nawigacja jednym dotknięciem do Google Maps',
  ],
  stats: {
    speedScore: 100,
    fcp: '0.29s',
    lcp: '0.38s',
    weight: '24.2 kB',
  },
  menuPreview: [
    { title: 'Pizza Diavola Napoletana', desc: 'Pomidory San Marzano, spianata piccante, fior di latte', price: '44 zł' },
    { title: 'Tagliatelle al Tartufo', desc: 'Świeży makaron jajeczny, pasta truflowa, parmigiano reggiano 24m', price: '52 zł' },
    { title: 'Tiramisu Artigianale', desc: 'Biszkopty savoiardi, mascarpone z żółtkami, espresso arabica', price: '26 zł' },
  ],
};

export const SECTORS_DATA: SectorItem[] = [
  {
    id: 'gastronomy',
    title: 'Gastronomia & Kawiarnie',
    badge: 'Restauracje • Pizzerie • Bary',
    tagline: 'Zmień głodnych internautów w pełną salę gości',
    description:
      'Zaprojektowana pod smartfony strona, która natychmiast wyświetla kartę dań, pozwala zarezerwować stolik i ułatwia kontakt z restauracją.',
    keyFeatures: [
      'Błyskawiczne menu QR (aktualizowane w minutę)',
      'Formularz rezerwacji stolika bez prowizji pośredników',
      'Wskaźnik godzin „Otwarte teraz” zsynchronizowany z czasem',
      'Interaktywna mapa dojazdu i integracja z Google Maps',
      'Wysokiej rozdzielczości apetyczna galeria dań z lazy-loadingiem',
    ],
    metrics: '+42% więcej rezerwacji bezpośrednich',
    exampleName: 'Bistro & Kawiarnia',
    iconName: 'UtensilsCrossed',
    accentColor: '#3b82f6',
  },
  {
    id: 'services',
    title: 'Usługi & Fachowcy',
    badge: 'Hydraulicy • Elektrycy • Remonty • Auto-serwisy',
    tagline: 'Telefon dzwoni sam, gdy klient potrzebuje pomocy',
    description:
      'Strona skupiona na jednym celu: maksymalnej liczbie telefonów i zapytań ofertowych od lokalnych klientów z Twojego miasta.',
    keyFeatures: [
      'Pływający przycisk „Zadzwoń teraz” oraz czat WhatsApp',
      'Kalkulator szacunkowej wyceny online',
      'Suwak zdjęć „Przed i Po” wykonanej realizacji',
      'Sekcja autentycznych opinii i certyfikatów uprawnień',
      'Podpięte lokalne frazy SEO (np. „hydraulik Wrocław Krzyki”)',
    ],
    metrics: '3x więcej telefonów z wyszukiwarki',
    exampleName: 'Serwis Klimatyzacji & HVAC',
    iconName: 'Wrench',
    accentColor: '#2563eb',
  },
  {
    id: 'beauty',
    title: 'Uroda & Wellness',
    badge: 'Salony Beauty • Barberzy • Spa • Fizjoterapia',
    tagline: 'Elegancja i pełny kalendarz wizyt bez stresu',
    description:
      'Estetyczna, luksusowa prezentacja zabiegów, która buduje zaufanie, wyróżnia salon na tle konkurencji i kieruje do rezerwacji.',
    keyFeatures: [
      'Czytelny cennik zabiegów z czasem trwania i opisem',
      'Bezpośrednie przejście do rezerwacji Booksy lub własny formularz',
      'Zintegrowany feed z portfolio na Instagramie',
      'Sekcja ekspertów zespołu i kwalifikacji',
      'Automatyczne mikroznaczniki Google dla salonu urody',
    ],
    metrics: '0 wolnych okienek w grafiku',
    exampleName: 'Klinika Kosmetologii Estetycznej',
    iconName: 'Sparkles',
    accentColor: '#34d399',
  },
  {
    id: 'retail',
    title: 'Handel & Sklepy',
    badge: 'Butiki • Kwiaciarnie • Delikatesy • Salony mebli',
    tagline: 'Przyciągnij lokalnych klientów prosto do Twojego sklepu',
    description:
      'Wizytówka Twojego punktu handlowego pokazująca ofertę na miejscu, aktualne promocje tygodnia i wskazówki dojazdu.',
    keyFeatures: [
      'Elektroniczny katalog flagowych produktów i nowości',
      'Opcja „Zarezerwuj do odbioru na miejscu” (Click & Collect)',
      'Wyraźna informacja o parkingu i dogodnym dojeździe',
      'Baner z promocją tygodnia z licznikiem czasu',
      'Bezpośrednie powiązanie z profilem Google Firma',
    ],
    metrics: '+65% wizyt stacjonarnych z internetu',
    exampleName: 'Rzemieślnicza Piekarnia & Butik',
    iconName: 'ShoppingBag',
    accentColor: '#6ee7b7',
  },
];

export const WHY_US_ITEMS = [
  {
    title: 'Ekspresowa realizacja w 5-7 dni',
    description:
      'W tradycyjnej agencji czekasz 6-12 tygodni na kolejne spotkania. W Pageneer działamy błyskawicznie i na jasnych zasadach: mamy zoptymalizowany proces, więc Twoja strona działa w tydzień.',
    tag: 'Gwarancja terminu',
    icon: 'Zap',
    highlight: '7 dni vs 2 miesiące',
  },
  {
    title: '100% własności kodu i brak abonamentu',
    description:
      'Nie płacisz 250 zł miesięcznie za dostęp do platformy ani za „opiekę nad wtyczkami”. Cały kod źródłowy w nowoczesnej technologii oraz domena należą wyłącznie do Ciebie.',
    tag: 'Prawdziwa niezależność',
    icon: 'KeyRound',
    highlight: 'Zero ukrytych opłat',
  },
  {
    title: 'Lokalne SEO i Google Maps w standardzie',
    description:
      'Wdrażamy znaczniki mikrodanych Schema.org (LocalBusiness, GeoCoordinates, OpeningHours) i optymalizujemy metatagi pod Twoją miejscowość i usługi. Jesteś widoczny tam, gdzie szukają klienci.',
    tag: 'Więcej klientów',
    icon: 'MapPin',
    highlight: 'Google Local Ready',
  },
  {
    title: 'nowoczesny, dedykowany kod zamiast ociężałego WordPressa',
    description:
      'Zero 40 niezaktualizowanych wtyczek, zero dziurawych baz danych MySQL i zero powolnych szablonów. Strona dla Twojej firmy to lekki, bezpieczny HTML, który wczytuje się w ułamku sekundy.',
    tag: '100/100 PageSpeed',
    icon: 'ShieldCheck',
    highlight: 'Brak podatności',
  },
  {
    title: 'Profesjonalne teksty pisane przez copywritera',
    description:
      'Nie wiesz co napisać? Nie musisz! Na podstawie krótkiego 15-minutowego wywiadu nasz copywriter przygotuje chwytliwe nagłówki i treści sprzedażowe dostosowane do Twoich klientów.',
    tag: 'Teksty w cenie',
    icon: 'PenTool',
    highlight: 'Bez lania wody',
  },
  {
    title: 'Hosting za 0 zł z globalnym CDN',
    description:
      'Ponieważ strona jest statyczna i ultralekka, wdrażamy ją na nowoczesnej infrastrukturze brzegowej (Cloudflare / Vercel), gdzie hosting jest całkowicie bezpłatny i odporny na awarie.',
    tag: 'Oszczędność 400-800 zł/rok',
    icon: 'Server',
    highlight: 'Nigdy nie padnie',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Krótka rozmowa i brief',
    days: 'Dzień 1',
    description:
      '15-minutowa rozmowa telefoniczna lub prosty formularz online. Ustalamy Twój cel, ofertę, kolorystykę i kluczowe dane kontaktowe. Żadnych skomplikowanych umów i żargonu.',
    deliverables: [
      'Określenie grupy docelowej i unikalnych atutów firmy',
      'Wybór preferowanej stylistyki i kolorów',
      'Ustalenie danych teleadresowych i godzin otwarcia',
    ],
  },
  {
    stepNumber: '02',
    title: 'Projekt i profesjonalne teksty',
    days: 'Dni 2-3',
    description:
      'Nasz copywriter tworzy angażujące nagłówki i opisy, a my projektujemy nowoczesny układ graficzny dopasowany do urządzeń mobilnych.',
    deliverables: [
      'Komplet tekstów sprzedażowych zoptymalizowanych pod lokalne SEO',
      'Wyselekcjonowane zdjęcia wysokiej jakości z licencją komercyjną',
      'Interaktywny podgląd projektu do Twojej akceptacji',
    ],
  },
  {
    stepNumber: '03',
    title: 'Wdrożenie i nowoczesny, bezpieczny kod',
    days: 'Dni 4-5',
    description:
      'Kodujemy stronę od zera w nowoczesnej technologii. Testujemy czas ładowania na urządzeniach mobilnych, poprawność formularzy i wskaźniki Google Core Web Vitals.',
    deliverables: [
      'Ekspresowy czas ładowania poniżej 0.4 sekundy',
      'Pełna responsywność (smartfony, tablety, laptopy)',
      'Wdrożenie zabezpieczeń antyspamowych i formularza z powiadomieniem SMS/email',
    ],
  },
  {
    stepNumber: '04',
    title: 'Publikacja i podpięcie domeny',
    days: 'Dni 6-7',
    description:
      'Podpinamy Twoją domenę, konfigurujemy darmowy certyfikat SSL, zgłaszamy stronę do indeksacji w Google Search Console i przekazujemy Ci 100% dostępu do plików.',
    deliverables: [
      'Darmowy certyfikat SSL (zielona kłódka HTTPS)',
      'Zgłoszenie mapy witryny sitemap.xml do Google',
      'Pakiet plików i pełne prawa autorskie do kodu',
    ],
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
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
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Własność i koszty',
    question: 'Czy po wdrożeniu jestem jedynym właścicielem strony i domeny?',
    answer:
      'Tak, w 100%! Po zakończeniu prac przekazujemy Ci kompletne repozytorium kodu źródłowego, a domena jest zarejestrowana na Twoje dane firmowe. W przeciwieństwie do agencji na abonament, u nas nie ma żadnego "vendor lock-in". Jeśli za rok zechcesz zmienić wykonawcę, masz pełną swobodę.',
  },
  {
    category: 'Własność i koszty',
    question: 'Czy po wdrożeniu muszę płacić jakieś ukryte abonamenty?',
    answer:
      'Absolutnie nie. Cena pakietu jest jednorazowa i ostateczna. Ponieważ nasze strony są zbudowane w czystym, statycznym kodzie Strony dla firm, umieszczamy je na darmowych, ultraszybkich serwerach brzegowych (np. Cloudflare Pages / Vercel). Oznacza to, że za hosting płacisz okrągłe 0 zł. Jedynym Twoim rocznym kosztem jest standardowe przedłużenie domeny (zazwyczaj ok. 50-90 zł rocznie u dowolnego rejestratora).',
  },
  {
    category: 'Treści i proces',
    question: 'Kto pisze teksty i skąd weźmiemy zdjęcia?',
    answer:
      'Zajmujemy się tym kompleksowo! Nie musisz być pisarzem ani spędzać weekendu nad Wordem. Podczas 15-minutowej rozmowy zadajemy kilka kluczowych pytań o Twoją ofertę i wyróżniki. Nasz copywriter redaguje profesjonalne, przekonujące teksty dopasowane do Twoich klientów i lokalnego SEO. Zdjęcia możesz przesłać ze smartfona lub dobierzemy legalne fotografie komercyjne wysokiej jakości.',
  },
  {
    category: 'SEO i Google',
    question: 'Jak szybko moja nowa strona pojawi się w Google?',
    answer:
      'Od razu w dniu premiery zgłaszamy sitemap.xml do Google Search Console. Dzięki perfekcyjnemu wynikowi 100/100 Core Web Vitals i poprawnym mikrodanym Schema.org roboty Google indeksują stronę błyskawicznie — zazwyczaj w ciągu 24 do 72 godzin. Optymalizujemy strukturę pod frazy z Twojego miasta, dzięki czemu strona szybko zaczyna rywalizować o czołowe pozycje lokalne.',
  },
  {
    category: 'Edycja i aktualizacje',
    question: 'Co jeśli w przyszłości zechcę zmienić numer telefonu, ceny lub godziny otwarcia?',
    answer:
      'Dbamy o to, by zmiana danych nie była problemem. W ramach pakietu otrzymujesz od nas czytelną instrukcję, a w okresie wsparcia po wdrożeniu (30 lub 90 dni zależnie od pakietu) wprowadzamy wszelkie drobne aktualizacje całkowicie bezpłatnie. Po tym okresie możesz zlecić nam pojedyncze zmiany od 50 zł lub samodzielnie edytować prosty plik konfiguracyjny.',
  },
  {
    category: 'Technologia',
    question: 'Dlaczego nowoczesne wykonanie zamiast WordPressa?',
    answer:
      'WordPress z motywami i 30 wtyczkami waży często ponad 5-8 megabajtów, ładuje się 4 sekundy na telefonie i co kilka miesięcy wymaga płatnych napraw przez dziury w zabezpieczeniach. Nasz nowoczesny, bezpieczny kod waży zaledwie kilkadziesiąt kilobajtów, otwiera się w mgnieniu oka (0.35s), jest w 100% odporny na ataki hakerskie na bazy danych i nie wymaga ciągłych, stresujących aktualizacji wtyczek.',
  },
];
