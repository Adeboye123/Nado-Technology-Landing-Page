
import React from 'react';
import { Phone, MapPin } from 'lucide-react';
// Corrected import to match constants.tsx exports
import { INFO } from '../constants';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-40 flex gap-3 md:hidden">
      <a 
        // Updated usage to INFO
        href={`tel:${INFO.phone.replace(/\s+/g, '')}`}
        className="flex-1 bg-blue-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl active:scale-95 transition-transform"
      >
        <Phone size={20} />
        Call Us
      </a>
      <a 
        href={INFO.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-slate-900 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl active:scale-95 transition-transform"
      >
        <MapPin size={20} />
        Directions
      </a>
    </div>
  );
};

export default FloatingCTA;
