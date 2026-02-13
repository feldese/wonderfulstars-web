
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/20/1920/1080?grayscale" 
          alt="School Environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy opacity-70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6 inline-block animate-bounce">
          <div className="bg-gold text-navy font-bold px-4 py-1 rounded-full text-sm uppercase tracking-widest">
            Admisiones Abiertas
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          {SCHOOL_INFO.name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light tracking-wide">
          {SCHOOL_INFO.tagline} <br className="hidden md:block" />
          <span className="text-gold font-medium">— {SCHOOL_INFO.location} —</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SCHOOL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover-gold transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Vacante 2026 por WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs uppercase tracking-widest">Descubrir</span>
        <div className="w-px h-12 bg-gold"></div>
      </div>
    </div>
  );
};

export default Hero;
