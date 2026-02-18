import React from 'react';
import danzas from '../assets/danzas.jpg';
import deportes from '../assets/deportes.jpeg';
import laboratorio from '../assets/laboratorio.jpg';
import robotica from '../assets/robotica.jpg';
import visitas from '../assets/visitas.jpg';
import arte from '../assets/arte.png';

const Gallery: React.FC = () => {
  const images = [
    { url: arte, title: 'Talleres de Arte' },
    { url: laboratorio, title: 'Laboratorios' },
    { url: deportes, title: 'Deportes' },
    { url: robotica, title: 'Robótica' },
    { url: visitas, title: 'Visitas de estudio' },
    { url: danzas, title: 'Talleres de danzas' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Vida Escolar</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Conoce el ambiente donde nuestras estrellas brillan cada día. Un entorno seguro, moderno y diseñado para el aprendizaje activo.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div 
            key={i} 
            className={`relative overflow-hidden rounded-2xl group ${
              i === 0 ? 'md:row-span-2' : ''
            } ${i === 2 ? 'md:col-span-2' : ''}`}
          >
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-bold text-lg">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;