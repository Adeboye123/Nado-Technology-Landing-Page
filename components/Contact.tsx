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
      const res = await fetch('https://formspree.io/f/xbdadewz', {
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
        setFormData({ name: '', email: '', phone: '', message: '', _subject: 'New Inquiry from Nado Tech Website' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.539301037307!2d4.550186175114138!3d7.515989211021437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037890989f89995%3A0x6b42b102157d6d3d!2sShopping%20Complex%2C%20New%20Orisunmibare%2C%20Osogbo!5e0!3m2!1sen!2sng!4v1709400000000!5m2!1sen!2sng";

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start">
        <div className="animate-fade-in-up">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">Visit Our Osogbo Workshop</h3>
          
          <div className="space-y-10 mb-12">
            {[
              { icon: <Phone size={24} />, title: 'Call Center', content: INFO.phone, link: `tel:${INFO.phone.replace(/\s+/g, '')}` },
              { icon: <MapPin size={24} />, title: 'Location', content: INFO.address, link: INFO.mapLink, isNav: true },
              { icon: <Clock size={24} />, title: 'Business Hours', content: INFO.hours, sub: 'Open Weekends' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} target={item.isNav ? "_blank" : "_self"} rel={item.isNav ? "noopener noreferrer" : ""} className="group">
                      <p className={`text-slate-600 group-hover:text-blue-600 transition-colors ${item.isNav ? 'text-sm font-medium' : 'text-xl font-bold'}`}>
                        {item.content}
                      </p>
                    </a>
                  ) : (
                    <>
                      <p className="text-slate-600">{item.content}</p>
                      <p className="text-green-600 text-xs font-bold mt-1 uppercase tracking-widest">{item.sub}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 animate-fade-in delay-500">
            <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-sm" title="Facebook"><Facebook size={20} /></a>
            <a href={INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:text-white transition-all transform hover:scale-110 shadow-sm" title="Instagram"><Instagram size={20} /></a>
            <a href={INFO.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-black hover:text-white transition-all transform hover:scale-110 shadow-sm" title="TikTok"><Music2 size={20} /></a>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl relative overflow-hidden animate-fade-in-up delay-200">
          {status === 'done' ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
              <p className="text-slate-600 max-w-sm mx-auto">Thank you for contacting Nado Tech. Our technicians will respond shortly.</p>
              <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold hover:underline">Send another inquiry</button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all focus:bg-white focus:border-blue-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all focus:bg-white focus:border-blue-300" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 0808 580 3282" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all focus:bg-white focus:border-blue-300" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Repair Details</label>
                <textarea required rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Describe the issue with your laptop or phone..." className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl resize-none focus:ring-4 focus:ring-blue-500/10 outline-none transition-all focus:bg-white focus:border-blue-300"></textarea>
              </div>
              
              <button disabled={status === 'submitting'} type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98]">
                {status === 'submitting' ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                  <AlertCircle size={20} />
                  <p className="text-sm font-bold">Submission failed. Please call us directly.</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>

      <div className="mt-20 group relative h-[450px] w-full bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 animate-fade-in delay-500">
        <div className="absolute top-4 left-4 z-10">
          <a href={INFO.mapLink} target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded-xl shadow-xl border border-slate-100 text-blue-600 font-bold flex items-center gap-2 hover:bg-blue-50 transition-all active:scale-95">
            <MapPin size={18} /> Get Direction
          </a>
        </div>
        <iframe src={mapSrc} width="100%" height="100%" style={{ border: 0 }} loading="lazy" className="grayscale hover:grayscale-0 transition-all duration-1000"></iframe>
      </div>
    </div>
  );
};

export default Contact;