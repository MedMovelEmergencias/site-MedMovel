// Caminho: src/components/Header/Header.tsx
// Componente de cabeçalho fixo com navegação responsiva e menu mobile
import React, { useState } from 'react';
import logo from '../../assets/images/AF_logo_med_emergencias.png'; 

const Header: React.FC = () => {
  // Controla o estado de abertura/fechamento do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define os itens de navegação do menu
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        {/* Logo da empresa com link para o topo da página */}
        <a href="#home" className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Med Móvel Emergências" 
            className="h-16 w-auto transition-transform duration-300 hover:scale-105" 
          />
        </a>

        {/* Navegação desktop visível apenas em telas grandes */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-5 py-3 font-medium text-primary-blue text-sm uppercase tracking-wide rounded-lg transition-all duration-300
                         hover:bg-accent-red hover:text-white hover:scale-110 hover:shadow-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão de call-to-action e controles do menu mobile */}
        <div className="flex items-center">
            {/* Botão de emergência visível apenas no desktop */}
            <a href="#contato" className="hidden lg:block bg-accent-red text-white px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:scale-105 active:scale-95 ml-6">
                Emergência
            </a>
            
            {/* Botão hamburger para menu mobile */}
            <div className="lg:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-primary-blue"
                aria-label="Toggle menu"
              >
                 <div className="w-6 h-6 flex flex-col justify-around">
                    <span className={`block h-0.5 w-full bg-primary-blue transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-primary-blue transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-primary-blue transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                </div>
              </button>
            </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="py-4 border-t border-gray-200 flex flex-col items-center space-y-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-primary-blue font-medium w-full text-center hover:bg-gray-100 rounded-md">
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