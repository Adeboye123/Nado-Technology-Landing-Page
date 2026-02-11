import React from 'react';
import { Phone, Cpu, Smartphone, GraduationCap } from 'lucide-react';
import { INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-slate-950">
      {/* Background with technical overlay */}
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
        alt="Technical background" 
        className="absolute inset-0 w-full h-full object-cover opacity-15 animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/90 to-blue-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-4 py-2 rounded-full text-blue-400 text-sm font-bold mb-8 animate-fade-in">
            <Cpu size={16} />
            <span>Motherboard & iPhone Specialist center</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-fade-in-up delay-100">
            Motherboard Repair <br />
            <span className="text-blue-500">& iPhone Specialists</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Precision micro-soldering and logic board diagnostics. Master the art of modern hardware repair with our intensive 3-week technician training program in Osogbo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">
            <a 
              href={`tel:${INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-500/20"
            >
              <Phone size={20} />
              Talk to a Technician
            </a>
            <a 
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              <GraduationCap size={20} />
              View Training Courses
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-fit animate-fade-in-up delay-500">
            <div className="flex items-center gap-4 px-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5,000+</div>
                <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Devices Fixed</div>
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/20"></div>
            <div className="flex items-center gap-4 px-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3 Weeks</div>
                <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Master Class</div>
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/20"></div>
            <div className="flex items-center gap-4 px-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{INFO.googleRating}/5</div>
                <div className="text-[10px] text-yellow-500 uppercase font-black tracking-widest">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[-5%] top-[15%] opacity-10 pointer-events-none rotate-12 hidden lg:block animate-fade-in delay-700">
        <Smartphone size={500} strokeWidth={0.5} className="text-blue-500" />
      </div>
    </div>
  );
};

export default Hero;