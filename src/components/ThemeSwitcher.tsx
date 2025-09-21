import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const SunIcon = () => (
  <svg xmlns="http://www.w.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
);

const ThemeSwitcher: React.FC = () => {
  // Obtém o tema atual e a função para trocá-lo do nosso hook.
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme} // Ação de clique que chama a função do hook.
      className="p-2 rounded-full text-primary-blue dark:text-yellow-300 bg-gray-200 dark:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-red"
      aria-label="Alternar modo claro/escuro"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeSwitcher;