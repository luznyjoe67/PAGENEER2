import { AudienceCard, ShowcaseProject, ProcessStep, WhyUsItem, PricingPlan } from '../types';

export const AUDIENCE_DATA: AudienceCard[] = [
  {
    id: 'gastronomia',
    title: 'Gastronomia & Kawiarnie',
    subtitle: 'Restauracje, pizzerie, puby, food trucki',
    description: 'Zamień przypadkowych przechodniów w stałych gości dzięki czytelnemu menu online, rezerwacji stolików i błyskawicznemu dojazdowi.',
    iconName: 'Utensils',
    badge: 'Kulinaria',
    highlights: ['Interaktywne menu na smartfonie z kodem QR', 'Prosta rezerwacja stolika bez prowizji', 'Nawigacja Google Maps w 1 kliknięcie']
  },
  {
    id: 'uslugi',
    title: 'Usługi & Fachowcy',
    subtitle: 'Warsztaty, hydraulicy, serwisy, budowlanka',
    description: 'Klienci szukający pomocy w awarii dzwonią do pierwszego zaufanego fachowca. Zbuduj autorytet i odbieraj telefony bez pośredników.',
    iconName: 'Wrench',
    badge: 'Usługi lokalne',
    highlights: ['Pływający przycisk „Zadzwoń teraz”', 'Przejrzysty cennik i wycena online', 'Certyfikaty, opinie i zdjęcia z realizacji']
  },
  {
    id: 'uroda',
    title: 'Uroda, Zdrowie & SPA',
    subtitle: 'Salony fryzjerskie, kosmetologia, masaże, gabinety',
    description: 'Estetyczna witryna podkreślająca Twoją wiedzę i jakość. Prezentuj metamorfozy i ułatw klientkom umówienie dogodnego terminu.',
    iconName: 'Sparkles',
    badge: 'Beauty & Wellness',
    highlights: ['Elegancka galeria zdjęć efektów „przed / po”', 'Integracja z Booksy lub formularz zapisów', 'Cennik zabiegów i opisy kosmetyków']
  },
  {
    id: 'handel',
    title: 'Handel & Sklepy Lokalne',
    subtitle: 'Kwiaciarnie, butiki, delikatesy, rzemiosło',
    description: 'Pokaż mieszkańcom swojej dzielnicy, co masz na półkach. Zwiększ ruch w punkcie stacjonarnym i poinformuj o nowościach.',
    iconName: 'ShoppingBag',
    badge: 'Retail & Handel',
    highlights: ['Katalog bestsellerów i sezonowych hitów', 'Aktualne godziny otwarcia i status lokalu', 'Spójny wizerunek lokalnej marki']
  }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'pizzeria',
    title: 'Trattoria & Pizzeria Bella',
    category: 'Gastronomia',
    description: 'Strona o profilu kulinarnym z dynamicznym menu, przyciskiem zamówień telefonicznych oraz integracją z opiniami Google.',
    features: ['Cyfrowe menu online', 'Rezerwacja stolika', 'Ocena Google 4.9 gwiazdki'],
    metrics: [
      { label: 'Czas ładowania', value: '0.4s' },
      { label: 'Wzrost rezerwacji', value: '+68%' },
      { label: 'Google PageSpeed', value: '100/100' }
    ],
    mockupType: 'restaurant',
    accentColor: 'from-amber-500 to-rose-500'
  },
  {
    id: 'autoserwis',
    title: 'ProMechanika AutoSerwis',
    category: 'Usługi motoryzacyjne',
    description: 'Mocna, techniczna witryna skupiona na konwersji telefonicznej. Klient z awarią na drodze łączy się z warsztatem w 2 sekundy.',
    features: ['Szybkie połączenie z warsztatem', 'Kalkulator przeglądu', 'Lokalizacja GPS i dojazd'],
    metrics: [
      { label: 'Połączeń miesięcznie', value: '180+' },
      { label: 'Pozycja w mieście', value: 'Top 3' },
      { label: 'PageSpeed Mobile', value: '99/100' }
    ],
    mockupType: 'automotive',
    accentColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'beauty',
    title: 'Aura Studio Kosmetyczne',
    category: 'Branża Uroda',
    description: 'Subtelny, luksusowy design prezentujący zabiegi pielęgnacyjne, cennik i certyfikaty z bezpośrednim linkiem do rezerwacji.',
    features: ['Katalog zabiegów z cenami', 'Galeria metamorfoz', 'System powiadomień SMS'],
    metrics: [
      { label: 'Nowych klientek/mc', value: '+45' },
      { label: 'Spadek pustych wizyt', value: '-80%' },
      { label: 'Zadowolenie', value: '100%' }
    ],
    mockupType: 'beauty',
    accentColor: 'from-pink-500 to-purple-500'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Krótka rozmowa i brief',
    duration: '15-20 min',
    description: 'Poznajemy specyfikę Twojego lokalnego biznesu, ofertę i konkurencję w Twoim mieście. Bez nudnych formularzy — rozmawiamy po ludzku.',
    details: ['Określenie celów strony', 'Wybór kolorystyki i stylu', 'Ustalenie niezbędnych funkcji'],
    icon: 'MessageSquare'
  },
  {
    step: '02',
    title: 'Projekt & profesjonalne teksty',
    duration: '2-3 dni',
    description: 'Przygotowujemy nowoczesny projekt graficzny dopasowany do Twojej branży. Piszemy też chwytliwe, bezbłędne teksty, które sprzedają.',
    details: ['Unikalna makieta graficzna', 'Gotowe teksty sprzedażowe', 'Optymalizacja pod psychologię klienta'],
    icon: 'Palette'
  },
  {
    step: '03',
    title: 'Wdrożenie i superszybki kod',
    duration: '2-3 dni',
    description: 'Kodujemy stronę od podstaw, dbając o błyskawiczne ładowanie na telefonach i komputerach. Testujemy działanie na kilkunastu modelach smartfonów.',
    details: ['100% responsywny kod', 'PageSpeed 95-100/100', 'Zabezpieczenie SSL i RODO'],
    icon: 'Code'
  },
  {
    step: '04',
    title: 'Publikacja i lokalne SEO',
    duration: 'Dzień 5-7',
    description: 'Podpinamy Twoją domenę, konfigurujemy skrzynki e-mail i zgłaszamy stronę do Google. Otrzymujesz gotowe narzędzie generujące zlecenia.',
    details: ['Konfiguracja domeny i hostingu', 'Weryfikacja w Google Search Console', 'Instrukcja obsługi wideo'],
    icon: 'Rocket'
  }
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: 'speed',
    title: 'Gotowa strona w 5–7 dni',
    shortDesc: 'Nie czekasz miesiącami. Działamy w sprawdzonym procesie, dzięki czemu Twoja strona zaczyna zarabiać już w kolejnym tygodniu.',
    icon: 'Zap',
    stat: '5-7 dni',
    statLabel: 'Średni czas realizacji'
  },
  {
    id: 'mobile',
    title: '100% Mobile-First',
    shortDesc: 'Ponad 80% lokalnych klientów przegląda oferty z poziomu telefonu. Projektujemy przede wszystkim z myślą o małych ekranach.',
    icon: 'Smartphone',
    stat: '85%+',
    statLabel: 'Ruch z urządzeń mobilnych'
  },
  {
    id: 'seo',
    title: 'Lokalne SEO & Google Maps',
    shortDesc: 'Optymalizujemy strukturę pod frazy z Twojego miasta („mechanik Poznań”, „pizzeria Mokotów”). Klienci znajdą Cię pierwsi.',
    icon: 'MapPin',
    stat: '#1-#3',
    statLabel: 'Docelowe pozycje lokalne'
  },
  {
    id: 'no-subscription',
    title: 'Zero abonamentów i ukrytych opłat',
    shortDesc: 'Płacisz raz za wykonanie. Nie wiążemy Cię długoletnimi umowami ani sztucznym abonamentem — strona jest w 100% Twoją własnością.',
    icon: 'ShieldCheck',
    stat: '100%',
    statLabel: 'Własność praw autorskich'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'start',
    name: 'Pakiet Start',
    price: '1 190 zł',
    period: 'jednorazowo',
    description: 'Idealny wybór na szybki start dla nowo otwartej firmy lub jako profesjonalna wizytówka online.',
    turnaroundTime: 'Gotowa w 4-5 dni',
    features: [
      'Nowoczesny One-Page (do 5 sekcji tematycznych)',
      '100% responsywność na telefony i tablety',
      'Formularz kontaktowy + bezpośredni telefon',
      'Integracja z Google Maps i nawigacją',
      'Certyfikat bezpieczeństwa SSL',
      'Podstawowa optymalizacja SEO',
      'Gwarancja techniczna na 12 miesięcy'
    ],
    notIncluded: [
      'Podstrony wielopoziomowe',
      'Zaawansowany system rezerwacji'
    ],
    ctaText: 'Wybierz Pakiet Start'
  },
  {
    id: 'biznes-pro',
    name: 'Pakiet Biznes Pro',
    price: '1 990 zł',
    period: 'jednorazowo',
    popular: true,
    description: 'Kompletne rozwiązanie dla działających firm, które chcą zdominować lokalny rynek i pozyskiwać stałych klientów.',
    turnaroundTime: 'Gotowa w 5-7 dni',
    features: [
      'Wszystko z Pakietu Start +',
      'Do 5 dedykowanych podstron (np. Usługi, O nas, Cennik, Galeria, Kontakt)',
      'Pełny audyt i lokalne SEO pod Twoje miasto',
      'Interaktywny kalkulator / cennik usług',
      'Integracja z wizytówką Google Moja Firma i opiniami',
      'System łatwej edycji tekstów i zdjęć (CMS)',
      'Pomoc w zakupie domeny i hostingu',
      'Dedykowane wsparcie techniczne priorytetowe'
    ],
    ctaText: 'Wybierz Najpopularniejszy'
  },
  {
    id: 'custom',
    name: 'Pakiet Dedykowany',
    price: '3 290 zł',
    period: 'jednorazowo',
    description: 'Dla wymagających przedsiębiorstw: systemy rezerwacji terminów, minisklep lub wielojęzyczność.',
    turnaroundTime: 'Gotowa w 8-12 dni',
    features: [
      'Wszystko z Pakietu Biznes Pro +',
      'System rezerwacji online lub katalog produktów',
      'Możliwość płatności online (Blik, szybkie przelewy)',
      'Wielojęzyczność (np. PL + EN lub DE)',
      'Zaawansowane animacje i unikalne ilustracje',
      'Integracja z social media i pixelami reklamowymi',
      'Prywatne szkolenie wideo z obsługi strony'
    ],
    ctaText: 'Zamów Pakiet Dedykowany'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Czy muszę mieć już kupioną domenę i serwer?',
    answer: 'Nie! Jeśli ich nie masz, pomożemy Ci dobrać i zarejestrować najlepszą domenę z nazwą Twojej firmy (np. .pl) oraz skonfigurujemy bezpieczny, tani i szybki serwer.'
  },
  {
    question: 'Kto napisze teksty i dobierze ikony/grafiki?',
    answer: 'My zajmujemy się wszystkim! Na podstawie krótkiej rozmowy przygotowujemy angażujące teksty sprzedażowe, dobieramy nowoczesne ikony oraz tworzymy estetyczną oprawę graficzną.'
  },
  {
    question: 'Czy po wdrożeniu ponoszę jakieś miesięczne opłaty dla Was?',
    answer: 'Nie pobieramy żadnego abonamentu. Strona jest w 100% Twoja. Jedyne standardowe opłaty w internecie to coroczne odnowienie domeny i serwera (zazwyczaj ok. 100-200 zł rocznie u niezależnego rejestratora).'
  },
  {
    question: 'Jak szybko strona może pojawić się w Google?',
    answer: 'Po uruchomieniu natychmiast zgłaszamy witrynę i mapę strony do indeksu Google Search Console. Zazwyczaj strona pojawia się w wynikach wyszukiwania w ciągu kilku do kilkunastu dni.'
  }
];
