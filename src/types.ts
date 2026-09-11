export type SectorId = 'gastronomy' | 'services' | 'beauty' | 'retail';

export type PackageId = 'complete'| 'biznes' | 'dedykowany';

export interface SectorItem {
  id: SectorId;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  metrics: string;
  exampleName: string;
  iconName: string;
  accentColor: string;
}

export interface PricingPackage {
  id: PackageId;
  name: string;
  price: string;
  oldPrice?: string;
  popular?: boolean;
  timeframe: string;
  targetAudience: string;
  summary: string;
  features: {
    included: boolean;
    text: string;
    highlight?: boolean;
  }[];
  ctaText: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  days: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  sector: SectorId | 'other';
  packageChoice: PackageId;
  notes: string;
  urgency: 'standard' | 'express';
}
