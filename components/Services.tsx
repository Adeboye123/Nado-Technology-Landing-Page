import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Our Core Services</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Advanced Solutions for Every Technical Challenge
        </h3>
        <p className="text-slate-600 text-lg">
          From hardware malfunctions to vocational training, we provide the technical depth required for modern electronics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {SERVICES.map((service, idx) => (
          <div 
            key={service.id} 
            className="group p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${100 + (idx * 100)}ms` }}
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-300">
              <div className="group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-blue-600 font-bold text-sm tracking-wide group-hover:gap-3 transition-all"
            >
              Get Professional Help <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;