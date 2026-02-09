import React, { useState } from 'react';
import { Menu, X, Laptop } from 'lucide-react';
import { INFO } from '../constants';

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const links = [
    { n: 'Home', h: '#home' },
    { n: 'About', h: '#about' },
    { n: 'Services', h: '#services' },
    { n: 'Reviews', h: '#reviews' },
    { n: 'Contact', h: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-sm py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-xl font-black">
          <Laptop className="text-blue-600" />
          <span className={isScrolled ? 'text-slate-900' : 'text-white'}>NADO <span className="text-blue-600">TECH</span></span>
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <a key={l.h} href={l.h} className={`text-sm font-bold hover:text-blue-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>
              {l.n}
            </a>
          ))}
          <a href={`tel:${INFO.phone}`} className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-sm">Call</a>
        </nav>

        <button className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t absolute w-full p-4 flex flex-col gap-4 shadow-xl">
          {links.map(l => (
            <a key={l.h} href={l.h} onClick={() => setOpen(false)} className="font-bold text-lg border-b pb-2">{l.n}</a>
          ))}
        </div>
      )}
    </header>
  );
}