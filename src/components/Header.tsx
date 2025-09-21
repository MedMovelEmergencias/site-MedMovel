// Caminho: src/components/Header/Header.tsx
import React, { useState } from 'react';
import logo from '../assets/images/AF_logo_med_emergencias.png'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        <a href="#home" className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Med Móvel Emergências" 
            className="h-16 w-auto transition-transform duration-300 hover:scale-105" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-5 py-3 font-medium text-primary-blue text-sm uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-110 hover:shadow-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <a href="#contato" className="hidden lg:block bg-accent-red text-white px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:scale-105 active:scale-95 ml-6">
            Emergência
          </a>
          
          {/* --- Botão do Menu Mobile (Área Corrigida) --- */}
          <div className="lg:hidden ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary-blue"
              aria-label="Toggle menu"
            >
              {/* Lógica para alternar entre ícone de hambúrguer e 'X' */}
              {isMenuOpen ? (
                // Ícone 'X' para fechar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Ícone de hambúrguer para abrir
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="py-4 border-t border-gray-200 flex flex-col items-center">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-primary-blue font-medium w-full text-center hover:bg-gray-100 rounded-md">
              {item.label}
            </a>
          ))}
           <a href="#contato" onClick={() => setIsMenuOpen(false)} className="mt-2 block w-11/12 text-center bg-accent-red text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide">
              Emergência
            </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;