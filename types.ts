
// Add React import to resolve the React namespace for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  hours: string;
  googleRating: number;
  reviewCount: number;
  instagram: string;
  facebook: string;
  tiktok: string;
  mapLink: string;
}
