import React from 'react';
import { Laptop, Facebook, Instagram, Phone, MapPin, Music2 } from 'lucide-react';
// Corrected import to match constants.tsx exports
import { INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Laptop size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                NADO <span className="text-blue-500">TECH</span>
              </span>
            </a>
            <p className="leading-relaxed">
              Osogbo's most trusted computer repair and IT support center. Specialized in motherboard micro-soldering and technician training.
            </p>
            <div className="flex gap-4">
              {/* Updated usages to INFO */}
              <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Facebook"><Facebook size={20} /></a>
              <a href={INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Instagram"><Instagram size={20} /></a>
              <a href={INFO.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="TikTok"><Music2 size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Board Soldering</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">iPhone Repair</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Tech Training</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Logic Diagnostics</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Chip Reballing</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <div className="flex gap-4">
              <Phone size={20} className="text-blue-500 flex-shrink-0" />
              {/* Updated usage to INFO */}
              <span>{INFO.phone}</span>
            </div>
            <div className="flex gap-4">
              <MapPin size={20} className="text-blue-500 flex-shrink-0" />
              {/* Updated usage to INFO */}
              <span>{INFO.address}</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Business Hours</div>
              <p className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Nado Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
