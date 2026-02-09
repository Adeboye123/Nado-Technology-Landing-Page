import React from 'react';
import { Monitor, Cpu, ShieldCheck, Zap, Laptop, Microscope, Smartphone, GraduationCap } from 'lucide-react';
import { Service, Testimonial, BusinessInfo } from './types';

export const INFO: BusinessInfo = {
  name: "Nado Technologies",
  address: "C156 New Orisunmibare Shopping Complex, MDS Road, Osogbo, Osun State, Nigeria",
  phone: "0808 580 3282",
  hours: "Open Daily: 9:00 AM - 6:00 PM",
  googleRating: 4.8,
  reviewCount: 42,
  instagram: "https://www.instagram.com/cidotech/",
  facebook: "https://www.facebook.com/cidotech.biz/",
  tiktok: "https://www.tiktok.com/@decalybee001",
  mapLink: "https://maps.app.goo.gl/apNXDzbNNk5jAwxj9",
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Motherboard Micro-Soldering',
    description: 'Precision repairs for "dead" logic boards. We fix power rail failures, short circuits, and damaged traces using industrial-grade soldering stations.',
    icon: <Zap className="w-8 h-8 text-blue-600" />,
  },
  {
    id: '2',
    title: 'Logic Board Diagnostics',
    description: 'Advanced troubleshooting using thermal imaging and multi-meters to locate fault components at the chip level.',
    icon: <Microscope className="w-8 h-8 text-blue-600" />,
  },
  {
    id: '3',
    title: 'iPhone Hardware Repair',
    description: 'Specialized chip-level repairs for iPhones, including FaceID restoration, NAND upgrades, and motherboard sandwich separation.',
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
  },
  {
    id: '4',
    title: '3-Week Tech Training',
    description: 'Intensive 3-week hands-on training for aspiring technicians. Master micro-soldering, diagnostics, and hardware repair basics.',
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
  },
  {
    id: '5',
    title: 'Chipset Reballing',
    description: 'Professional GPU and CPU reballing to restore connectivity and fix display artifacts or boot loops.',
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
  },
  {
    id: '6',
    title: 'Verified Genuine Parts',
    description: 'All components used in our repairs are sourced from certified original equipment manufacturers to ensure peak performance.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
];

export const REVIEWS: Testimonial[] = [
  {
    id: 't1',
    author: "Gbenga Adeniyi",
    rating: 5,
    content: "My laptop wouldn't turn on and three other shops said the motherboard was dead. Nado Tech soldered a tiny chip and it's like new!",
    date: "2 months ago"
  },
  {
    id: 't2',
    author: "Fatima O.",
    rating: 5,
    content: "Excellent iPhone repair service. They fixed my iPhone motherboard issue that other shops couldn't touch. Highly recommended.",
    date: "1 month ago"
  },
  {
    id: 't3',
    author: "Samuel Adeleke",
    rating: 5,
    content: "The 3-week training was a game changer for me. I can now handle basic micro-soldering and diagnostics with confidence.",
    date: "3 weeks ago"
  }
];
