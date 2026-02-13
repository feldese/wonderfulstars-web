
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={SCHOOL_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform group animate-bounce-slow"
    >
      <span className="font-bold text-sm hidden sm:block">Solicitar Vacante</span>
      <MessageCircle className="w-6 h-6 fill-white" />
      
      {/* Tooltip for desktop */}
      <div className="absolute bottom-full right-0 mb-4 bg-navy text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Hablemos por WhatsApp!
        <div className="absolute top-full right-4 w-2 h-2 bg-navy rotate-45 -translate-y-1"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
