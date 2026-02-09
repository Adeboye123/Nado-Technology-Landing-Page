import React from 'react';
import { CheckCircle2, Microscope, Cpu, Smartphone, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { 
      icon: <Microscope className="text-blue-600" />, 
      title: "Chip-Level Diagnostics", 
      desc: "We diagnose specific component failures on the motherboard rather than replacing the whole board." 
    },
    { 
      icon: <Cpu className="text-blue-600" />, 
      title: "Micro-Soldering Station", 
      desc: "Equipped with specialized thermal imaging and precision soldering for intricate logic board work." 
    },
    { 
      icon: <Smartphone className="text-blue-600" />, 
      title: "iPhone Specialized Repair", 
      desc: "Expert repairs for iPhones, covering everything from face ID sensors to deep motherboard surgery." 
    },
    { 
      icon: <GraduationCap className="text-blue-600" />, 
      title: "3-Week Master Class", 
      desc: "Launch your career with our intensive technical training program covering modern hardware repair." 
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=1000" 
              alt="Soldering motherboard" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 text-white hidden md:block">
            <div className="text-5xl font-black text-blue-500 mb-1">90%</div>
            <div className="text-slate-300 font-bold uppercase tracking-widest text-xs">Technical Precision</div>
          </div>
        </div>

        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Expertise Matters</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Specializing in Laptops, iPhones, and Tech Training
          </h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            At Nado Technologies, we master the intricate details of modern electronics. From precision micro-soldering on laptop motherboards to advanced iPhone chip repairs, our technical depth is unmatched in Osogbo. 
            Beyond repairs, we are committed to building the next generation of tech experts through our intensive 3-week training program at New Orisunbare Shopping Complex.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-snug">{item.desc}</p>
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