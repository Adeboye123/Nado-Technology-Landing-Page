import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS, INFO } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 animate-fade-in-up">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by 5,000+ Happy Clients</h3>
          <p className="text-slate-600 text-lg">Osogbo's highest rated hardware repair center with a verified reputation.</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-8">
          <div className="text-center pr-8 border-r border-slate-100">
            <div className="text-4xl font-bold text-slate-900 leading-none mb-1">{INFO.googleRating}</div>
            <div className="flex text-yellow-500 scale-75 origin-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="fill-current" />
              ))}
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">{INFO.reviewCount}+</div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Google Reviews</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {REVIEWS.map((testimonial, idx) => (
          <div 
            key={testimonial.id} 
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative animate-fade-in-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-50/50" />
            <div className="relative z-10">
              <div className="flex text-yellow-500 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center font-bold text-blue-600">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-xs text-slate-400">{testimonial.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;