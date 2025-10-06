// Header fixo no topo com navegação responsiva e theme switcher
// Menu mobile: hambúrguer que abre/fecha menu vertical
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/AF_logo_med_emergencias.png'; 
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Links de navegação (atualizar aqui para adicionar/remover seções)
  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#sobre', label: 'Sobre Nós', id: 'sobre' },
    { href: '#servicos', label: 'Serviços', id: 'servicos' },
    { href: '#contato', label: 'Contato', id: 'contato' }
  ];

  // Detecta seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100; // Offset para melhor detecção

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa uma vez para definir estado inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Removida dependência para evitar re-renders desnecessários

  // Função para verificar se o item está ativo
  const isActive = (itemId: string) => activeSection === itemId;

  return (
    <header className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto h-20 px-4">
        <div className="relative flex items-center justify-between h-full">
          {/* Logo à esquerda */}
          <a href="#home" className="flex-shrink-0 z-10" onClick={() => setIsMenuOpen(false)}>
            <img 
              src={logo} 
              alt="Med Móvel Emergências" 
              className="h-16 w-auto transition-transform duration-300 hover:scale-105" 
            />
          </a>

          {/* Navigation centralizada - posicionamento absoluto para centralização perfeita */}
          <nav className="hidden lg:flex items-center space-x-1 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 font-medium text-sm uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-accent-red hover:text-white dark:hover:text-white hover:scale-110 hover:shadow-lg whitespace-nowrap ${
                  isActive(item.id) 
                    ? 'bg-accent-red text-white shadow-lg' 
                    : 'text-primary-blue dark:text-gray-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions à direita */}
          <div className="flex items-center space-x-3 z-10">
            <a href="#contato" className="hidden lg:block bg-accent-red text-white px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap">
              Emergência
            </a>
            <ThemeSwitcher />
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-primary-blue dark:text-white"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`lg:hidden bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col items-center space-y-2">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-6 py-4 font-medium w-11/12 text-center rounded-lg transition-all duration-300 ${
                isActive(item.id)
                  ? 'bg-accent-red text-white shadow-lg'
                  : 'text-primary-blue dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </a>
          ))}
           <a 
             href="#contato" 
             onClick={() => setIsMenuOpen(false)} 
             className="mt-4 block w-11/12 text-center bg-primary-blue text-white px-6 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-blue-800 shadow-lg"
           >
              Emergência
            </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;