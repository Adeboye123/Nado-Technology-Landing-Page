
import React from 'react';
import { Star, Quote } from 'lucide-react';
// Corrected imports to match constants.tsx exports
import { REVIEWS, INFO } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="text-center md:text-left">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Clients Say</h3>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-6">
          <div className="text-center pr-6 border-r border-slate-100">
            {/* Updated usage to INFO */}
            <div className="text-4xl font-black text-slate-900">{INFO.googleRating}</div>
            <div className="flex text-yellow-500 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className={`fill-current ${i > 4 ? 'text-slate-200' : ''}`} />
              ))}
            </div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Google Rating</div>
          </div>
          <div>
            {/* Updated usage to INFO */}
            <div className="text-xl font-bold text-slate-900">{INFO.reviewCount} Reviews</div>
            <p className="text-sm text-slate-500">Verified Customer Feedback</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Updated usage to REVIEWS */}
        {REVIEWS.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-blue-50/50" />
            <div className="relative z-10">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-current" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-xs text-slate-500">{testimonial.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://www.google.com/search?q=Nado+Technologies+Osogbo#lrd=0x0:0x0,1" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
        >
          View More Reviews on Google
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
