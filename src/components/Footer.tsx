
import React from 'react';

import { SCHOOL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
  src={logo} 
  alt="Escudo del colegio" 
  className="w-12 h-12 object-contain" 
/>

            <span className="text-white font-serif text-xl font-bold">Wonderful Stars</span>
          </div>
          
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Colegio Wonderful Stars. Todos los derechos reservados.</p>
            <p className="mt-1">Santa Anita, Lima, Perú</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
