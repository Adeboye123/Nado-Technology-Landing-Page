import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Active Section Tracking
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ['home', 'about', 'services', 'reviews', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header isScrolled={scrolled} activeSection={activeSection} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 md:py-32 scroll-mt-20">
          <About />
        </section>
        
        <section id="services" className="py-24 md:py-32 bg-slate-50/50 scroll-mt-20">
          <Services />
        </section>
        
        <section id="reviews" className="py-24 md:py-32 scroll-mt-20">
          <Testimonials />
        </section>
        
        <section id="contact" className="py-24 md:py-32 bg-slate-50/50 scroll-mt-20">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
      <ChatWidget />
    </div>
  );
};

export default App;