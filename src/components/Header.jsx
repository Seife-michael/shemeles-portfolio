import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-navy">SHEMELES <span className="text-brand-gold">AYALEW</span></div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-brand-navy hover:text-brand-gold transition-colors font-medium">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-6 h-0.5 bg-brand-navy mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-brand-navy mb-1.5 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-brand-navy ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
    </nav>
  );
};

export default Header;