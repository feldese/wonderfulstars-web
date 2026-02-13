
import React from 'react';
import { CheckCircle, Shield, Heart, Award, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: 'Respeto', icon: Heart, description: 'Valoramos la dignidad de cada integrante de nuestra comunidad.' },
    { title: 'Responsabilidad', icon: Shield, description: 'Asumimos compromisos con nosotros mismos y nuestro entorno.' },
    { title: 'Honestidad', icon: CheckCircle, description: 'Actuamos con transparencia y rectitud en todo momento.' },
    { title: 'Excelencia', icon: Award, description: 'Buscamos superar expectativas en la formación integral.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Nuestra Esencia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
            Formación Integral para un Futuro Brillante
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            En el <strong>Colegio Wonderful Stars</strong>, nos dedicamos a cultivar no solo mentes brillantes, sino corazones íntegros. Nuestro enfoque pedagógico combina la excelencia académica con una sólida base de valores.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Entendemos que cada estudiante es una estrella con luz propia. Por ello, brindamos un ambiente seguro y estimulante donde pueden desarrollar sus talentos al máximo en los niveles de Inicial, Primaria y Secundaria.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-gold pl-4 py-2">
              <span className="block text-3xl font-serif text-navy font-bold">15+</span>
              <span className="text-slate-500 text-sm">Años de Trayectoria</span>
            </div>
            <div className="border-l-4 border-gold pl-4 py-2">
              <span className="block text-3xl font-serif text-navy font-bold">100%</span>
              <span className="text-slate-500 text-sm">Compromiso Educativo</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <v.icon className="text-gold w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-navy mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
