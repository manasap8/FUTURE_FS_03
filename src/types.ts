export interface GymInfo {
  name: string;
  tagline: string;
  address: string;
  cityStateZip: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  hoursWeekday: string;
  hoursWeekend: string;
  instagram: string;
  instagramUrl: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails: string;
  intensity: 'High' | 'Very High' | 'Moderate' | 'Custom';
  duration: string;
  icon: string;
  image: string;
  benefits: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  bio: string;
  image: string;
  instagram: string;
  specialties: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: { text: string; included: boolean }[];
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Equipment' | 'Classes' | 'Interior' | 'Recovery';
  image: string;
  alt: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  membershipDuration: string;
  avatar: string;
  rating: number;
  quote: string;
  achievement: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  plan: string;
  message: string;
}
