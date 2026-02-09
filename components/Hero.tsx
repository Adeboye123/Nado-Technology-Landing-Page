import React from 'react';
import { Phone, MapPin, Cpu, Smartphone, GraduationCap } from 'lucide-react';
import { INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background with technical overlay */}
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
        alt="Motherboard close up" 
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/90 to-blue-900/10"></div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-semibold mb-6 animate-pulse">
            <Cpu size={16} />
            <span>Motherboard, iPhone & Training Specialist</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Motherboard Repair <br />
            <span className="text-blue-500">& iPhone Specialists</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Leading experts in precision micro-soldering for laptops and iPhones. Enroll in our 3-week intensive tech training to master the art of hardware repair.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-500/30"
            >
              <Phone size={20} />
              Consult a Technician
            </a>
            <a 
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              <GraduationCap size={20} />
              Join Our Training
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-fit">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5,000+</div>
              <div className="text-xs text-slate-400 uppercase font-semibold">Boards Fixed</div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3 Weeks</div>
              <div className="text-xs text-slate-400 uppercase font-semibold">Master Class</div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.8/5</div>
              <div className="text-xs text-slate-400 uppercase font-semibold text-yellow-500">Google Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[-10%] top-[10%] opacity-20 pointer-events-none rotate-12 hidden lg:block">
        <Smartphone size={500} strokeWidth={0.5} className="text-blue-500" />
      </div>
    </div>
  );
};

export default Hero;