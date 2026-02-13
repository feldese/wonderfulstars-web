
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="nosotros" className="py-20 bg-white">
          <About />
        </section>
        <section id="admision" className="py-20 bg-slate-50">
          <Admissions />
        </section>
        <section id="vida-escolar" className="py-20 bg-white">
          <Gallery />
        </section>
        <section id="contacto" className="py-20 bg-navy text-white">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
