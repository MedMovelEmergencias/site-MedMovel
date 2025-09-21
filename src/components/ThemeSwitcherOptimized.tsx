// Caminho: src/components/ThemeSwitcher.tsx
// Componente otimizado para alternância de tema com melhor acessibilidade e performance
// Implementa foco adequado, estados visuais e transições suaves
import { memo } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import type { ThemeSwitcherProps } from '../types';
import { cn } from '../utils';

// Ícones otimizados como componentes memo para evitar re-renderizações
const SunIcon = memo(() => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
));

const MoonIcon = memo(() => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
));

// Define nomes dos componentes para melhor debugging
SunIcon.displayName = 'SunIcon';
MoonIcon.displayName = 'MoonIcon';

const ThemeSwitcher = memo<ThemeSwitcherProps>(({ 
  className = '', 
  size = 'md' 
}) => {
  const { theme, toggleTheme } = useDarkMode();
  
  // Classes baseadas no tamanho
  const sizeClasses = {
    sm: 'p-1.5 h-8 w-8',
    md: 'p-2 h-10 w-10',
    lg: 'p-3 h-12 w-12'
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        // Classes base
        'group relative rounded-full transition-all duration-300 ease-in-out',
        'text-primary-blue dark:text-yellow-300',
        'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
        'border border-gray-200 dark:border-gray-700',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-red dark:focus:ring-offset-gray-900',
        'shadow-sm hover:shadow-md dark:shadow-gray-900/50',
        'active:scale-95 transform',
        // Classes de tamanho
        sizeClasses[size],
        // Classes customizadas
        className
      )}
      aria-label={`Alterar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      aria-pressed={theme === 'dark'}
      title={`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      type="button"
    >
      {/* Ícone com transição suave */}
      <span className="block transition-all duration-300">
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </span>
      
      {/* Indicador visual sutil para estado ativo */}
      <span 
        className={cn(
          'absolute inset-0 rounded-full transition-opacity duration-300',
          'bg-gradient-to-br from-yellow-400/20 to-orange-400/20',
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        )}
        aria-hidden="true"
      />
    </button>
  );
});

// Define nome do componente para melhor debugging
ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;