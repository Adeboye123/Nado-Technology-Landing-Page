import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, Loader2, CheckCircle2, Facebook, Instagram, AlertCircle, Music2 } from 'lucide-react';
import { INFO } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '',
    _subject: 'New Inquiry from Nado Tech Website'
  });
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // For direct email submission, Formspree uses the format: https://formspree.io/EMAIL
      // The previous '/f/' prefix is only for Form IDs.
      const res = await fetch('https://formspree.io/f/mnjbnwvj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: formData._subject
        })
      });
      
      if (res.ok) {
        setStatus('done');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '',
          _subject: 'New Inquiry from Nado Tech Website'
        });
      } else {
        // Formspree might return a 401 if the email hasn't been confirmed yet
        // or a 429 if rate limited.
        const errorData = await res.json();
        console.error('Formspree Response Error:', errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network or Submission Error:', err);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.539301037307!2d4.550186175114138!3d7.515989211021437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037890989f89995%3A0x6b42b102157d6d3d!2sShopping%20Complex%2C%20New%20Orisunmibare%2C%20Osogbo!5e0!3m2!1sen!2sng!4v1709400000000!5m2!1sen!2sng";

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Get Your Hardware Fixed</h3>
          
          <div className="space-y-8 mb-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Number</h4>
                <a href={`tel:${INFO.phone.replace(/\s+/g, '')}`} className="text-xl text-blue-600 font-semibold hover:underline">
                  {INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Location</h4>
                <p className="text-slate-600 leading-relaxed max-w-sm">
                  {INFO.address}
                </p>
                <a href={INFO.mapLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600 font-bold hover:underline">
                  Navigate Here on Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h4>
                <p className="text-slate-600">{INFO.hours}</p>
                <p className="text-green-600 text-sm font-bold mt-1">Open Now - Visit us today!</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="Facebook">
              <Facebook size={20} />
            </a>
            <a href={INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:text-white transition-all shadow-sm" title="Instagram">
              <Instagram size={20} />
            </a>
            <a href={INFO.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all shadow-sm" title="TikTok">
              <Music2 size={20} />
            </a>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-2xl relative overflow-hidden">
          {status === 'done' ? (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
              <p className="text-slate-600 max-w-xs mx-auto">
                Thank you. We've received your inquiry at our Osogbo office and will contact you shortly.
              </p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-blue-600 font-bold hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 0808 580 3282" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea required rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Describe your motherboard or tech training inquiry..." className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"></textarea>
              </div>
              
              <button disabled={status === 'submitting'} type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-70 group shadow-lg shadow-blue-500/20">
                {status === 'submitting' ? <Loader2 className="animate-spin" /> : <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
                {status === 'submitting' ? 'Sending Inquiry...' : 'Send Message'}
              </button>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium leading-tight">Submission failed. Please ensure your email is correct or call {INFO.phone}.</p>
                </div>
              )}
              
              <p className="text-[10px] text-slate-400 text-center">
                *First time users may need to check their email to confirm the submission.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="mt-20 group relative h-[450px] w-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        <div className="absolute top-4 left-4 z-10">
          <a href={INFO.mapLink} target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded-xl shadow-xl border border-slate-100 text-blue-600 font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors">
            <MapPin size={18} /> Get Directions
          </a>
        </div>
        <iframe src={mapSrc} width="100%" height="100%" style={{ border: 0 }} loading="lazy" className="grayscale hover:grayscale-0 transition-all duration-700"></iframe>
      </div>
    </div>
  );
};

export default Contact;