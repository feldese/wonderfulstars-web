
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://picsum.photos/id/367/600/600', title: 'Talleres de Arte' },
    { url: 'https://picsum.photos/id/119/600/400', title: 'Infraestructura' },
    { url: 'https://picsum.photos/id/160/600/800', title: 'Deportes' },
    { url: 'https://picsum.photos/id/2/600/600', title: 'Computación' },
    { url: 'https://picsum.photos/id/111/600/400', title: 'Biblioteca' },
    { url: 'https://picsum.photos/id/105/600/600', title: 'Inicial' },
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
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
