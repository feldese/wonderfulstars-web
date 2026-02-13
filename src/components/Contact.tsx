
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Contáctanos</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Estamos listos para resolver todas tus dudas sobre nuestro proceso de admisión y propuesta educativa. ¡Visítanos o escríbenos!
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="bg-gold/10 p-4 rounded-full h-fit border border-gold/20">
                <MapPin className="text-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-1">Dirección</h4>
                <p className="text-white text-lg">{SCHOOL_INFO.address}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-gold/10 p-4 rounded-full h-fit border border-gold/20">
                <Phone className="text-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-1">WhatsApp</h4>
                <p className="text-white text-lg">{SCHOOL_INFO.whatsapp1} / {SCHOOL_INFO.whatsapp2}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-gold/10 p-4 rounded-full h-fit border border-gold/20">
                <Mail className="text-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-1">Correo Electrónico</h4>
                <p className="text-white text-lg">{SCHOOL_INFO.email}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-gold/10 p-4 rounded-full h-fit border border-gold/20">
                <Clock className="text-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-1">Horario de Atención</h4>
                <p className="text-white text-base">{SCHOOL_INFO.hours.week}</p>
                <p className="text-white text-base">{SCHOOL_INFO.hours.sat}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 h-full">
          <div className="h-[400px] w-full bg-navy/50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
            {/* Placeholder for actual Google Maps embed or custom map */}
            <div className="text-center p-8 bg-blue-900/30 w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gold/30">
                <MapPin className="text-gold w-12 h-12 mb-4 animate-pulse" />
                <p className="text-white font-medium mb-2">Santa Anita, Lima</p>
                <p className="text-slate-400 text-sm">{SCHOOL_INFO.address}</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener"
                  className="mt-6 text-gold underline text-sm hover:text-white transition-colors"
                >
                  Ver en Google Maps
                </a>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
             <h4 className="text-white font-bold">Síguenos en redes</h4>
             <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-colors">
                  <Facebook className="text-white w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-colors">
                  <Instagram className="text-white w-5 h-5" />
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
