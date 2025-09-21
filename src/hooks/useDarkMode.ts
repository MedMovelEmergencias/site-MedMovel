// Caminho: src/hooks/useDarkMode.ts
import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Inicializa o estado lendo o localStorage, com 'light' como padrão.
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Função para alternar o tema.
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Efeito que aplica/remove a classe .dark e salva a preferência.
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Lógica corrigida: Adiciona a classe .dark se o tema for dark,
    // e garante que ela seja removida se o tema for light.
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
}