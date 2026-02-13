
import React from 'react';
import { Cpu, Languages, Palette, GraduationCap, MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Admissions: React.FC = () => {
  const benefits = [
    { name: 'Docentes Calificados', icon: GraduationCap, desc: 'Profesionales con vocación y actualización constante.' },
    { name: 'Robótica y Computación', icon: Cpu, desc: 'Tecnología aplicada al aprendizaje desde los primeros años.' },
    { name: 'Inglés Intensivo', icon: Languages, desc: 'Programa bilingüe para un mundo globalizado.' },
    { name: 'Talleres Artísticos y Deportivos', icon: Palette, desc: 'Desarrollo de la creatividad y la salud física.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-navy rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
          <span className="bg-gold text-navy font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6 w-fit">
            Admisión 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Matrícula Abierta 2026
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            ¡Asegura el futuro de tus hijos en una institución de prestigio! Brindamos una propuesta educativa innovadora en Santa Anita.
          </p>

          <div className="space-y-6 mb-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="bg-blue-900/50 p-3 rounded-xl">
                  <b.icon className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{b.name}</h4>
                  <p className="text-slate-400 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={SCHOOL_INFO.whatsappLink}
            className="bg-gold text-navy px-10 py-4 rounded-full font-bold text-center inline-flex items-center justify-center gap-2 hover-gold transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Hablar con Admisión
          </a>
        </div>

        <div className="lg:w-1/2 relative min-h-[400px]">
          <img 
            src="https://picsum.photos/id/180/800/1000" 
            alt="Student Learning" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent lg:bg-gradient-to-l"></div>
          
          <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
            <p className="text-white italic font-light text-center">
              "Mi hijo ha crecido no solo académicamente, sino en confianza y valores desde que entró a Wonderful Stars."
              <span className="block mt-2 font-bold not-italic">— Padre de familia</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
