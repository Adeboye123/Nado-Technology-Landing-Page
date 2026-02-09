
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Our Services</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Professional Solutions for Every Tech Challenge
        </h3>
        <p className="text-slate-600 text-lg">
          From hardware malfunctions to complex software installation, our expert team is equipped to handle all your technology needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <div className="transition-colors duration-300 group-hover:text-white">
                {service.icon}
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all"
            >
              Learn More <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
