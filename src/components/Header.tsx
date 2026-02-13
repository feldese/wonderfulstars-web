
import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Admisión 2026', href: '#admision' },
    { name: 'Vida Escolar', href: '#vida-escolar' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="text-gold w-8 h-8 fill-gold" />
            <span className="text-white font-serif text-xl md:text-2xl font-bold tracking-tight">
              Wonderful Stars
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy absolute top-full left-0 w-full border-t border-blue-900 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-white hover:bg-blue-900 rounded-md text-base font-medium border-b border-blue-900 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
