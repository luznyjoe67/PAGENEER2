export interface AudienceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Utensils' | 'Wrench' | 'Sparkles' | 'ShoppingBag';
  highlights: string[];
  badge: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  mockupType: 'restaurant' | 'automotive' | 'beauty';
  accentColor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
  icon: 'MessageSquare' | 'Palette' | 'Code' | 'Rocket';
}

export interface WhyUsItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: 'Zap' | 'Smartphone' | 'MapPin' | 'ShieldCheck';
  stat: string;
  statLabel: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  turnaroundTime: string;
  ctaText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  selectedPlan: string;
  projectDescription: string;
}
