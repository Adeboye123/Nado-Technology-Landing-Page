import React, { useState } from 'react';
import { Menu, X, Laptop } from 'lucide-react';
import { INFO } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

export default function Header({ isScrolled, activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const links = [
    { n: 'Home', h: 'home' },
    { n: 'About', h: 'about' },
    { n: 'Services', h: 'services' },
    { n: 'Reviews', h: 'reviews' },
    { n: 'Contact', h: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 animate-slide-down ${isScrolled ? 'bg-white shadow-md py-3' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-xl font-black group">
          <Laptop className="text-blue-600 group-hover:rotate-12 transition-transform duration-300" size={26} />
          <span className={`${isScrolled ? 'text-slate-900' : 'text-white'} transition-colors duration-300`}>
            NADO<span className="text-blue-600">TECH</span>
          </span>
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {links.map((l) => {
            const isActive = activeSection === l.h;
            return (
              <a 
                key={l.h} 
                href={`#${l.h}`} 
                className={`text-sm font-bold transition-all duration-300 relative group overflow-hidden py-1 ${
                  isActive 
                    ? 'text-blue-600' 
                    : (isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-200 hover:text-white')
                }`}
              >
                {l.n}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            );
          })}
          <a 
            href={`tel:${INFO.phone}`} 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
          >
            Call Now
          </a>
        </nav>

        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`} 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t absolute top-full left-0 w-full p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-up">
          {links.map(l => (
            <a 
              key={l.h} 
              href={`#${l.h}`} 
              onClick={() => setOpen(false)} 
              className={`font-bold text-lg pb-3 border-b border-slate-50 transition-colors flex justify-between items-center ${activeSection === l.h ? 'text-blue-600' : 'text-slate-900'}`}
            >
              {l.n}
              {activeSection === l.h && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
            </a>
          ))}
          <a 
            href={`tel:${INFO.phone}`} 
            className="bg-blue-600 text-white p-4 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-transform"
          >
            Contact Technician
          </a>
        </div>
      )}
    </header>
  );
}