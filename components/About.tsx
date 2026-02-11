import React from 'react';
import { Microscope, Cpu, Smartphone, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { 
      icon: <Microscope className="text-blue-600" />, 
      title: "Micro-Soldering", 
      desc: "Precise component-level repairs for laptops and iPhones." 
    },
    { 
      icon: <Cpu className="text-blue-600" />, 
      title: "Board Diagnostics", 
      desc: "Finding chip-level faults that other shops miss." 
    },
    { 
      icon: <Smartphone className="text-blue-600" />, 
      title: "iPhone Chip Repair", 
      desc: "Specialized logic board surgery for all iPhone models." 
    },
    { 
      icon: <GraduationCap className="text-blue-600" />, 
      title: "Technical Training", 
      desc: "Intensive 3-week program to jumpstart your career." 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative animate-slide-right">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=1000" 
              alt="Soldering tech" 
              className="w-full h-[450px] md:h-[550px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 text-white hidden md:block animate-fade-in delay-500">
            <div className="text-5xl font-bold text-blue-500 mb-1">10+</div>
            <div className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">Years Excellence</div>
          </div>
        </div>

        <div className="animate-fade-in-up delay-200">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Precision Engineering</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            The Repair Center That Fixes What Others Can't
          </h3>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Nado Technologies is Osogbo's most advanced motherboard repair specialist. We don't just replace parts; we diagnose and fix them at the microscopic level. Our technicians excel in surgical precision micro-soldering and logic board restoration.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex gap-5 group animate-fade-in-up" style={{ animationDelay: `${300 + (idx * 100)}ms` }}>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;