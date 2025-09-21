// Caminho: src/hooks/useDarkMode.ts
// Hook otimizado para gerenciamento de tema com performance melhorada
// Implementa persistência, detecção de preferência do sistema e transições suaves
import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '../types';
import { LOCAL_STORAGE_KEYS } from '../constants';
import { prefersDarkMode } from '../utils';

interface UseDarkModeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  systemPreference: Theme;
}

export function useDarkMode(): UseDarkModeReturn {
  // Detecta preferência do sistema uma única vez
  const systemPreference: Theme = prefersDarkMode() ? 'dark' : 'light';
  
  // Inicializa tema com base no localStorage ou preferência do sistema
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return systemPreference;
    
    try {
      const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme) as Theme;
      return savedTheme || systemPreference;
    } catch {
      return systemPreference;
    }
  });

  // Função otimizada para aplicar tema no DOM
  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove classe anterior e adiciona nova com transição suave
    root.classList.remove('light', 'dark');
    
    // Pequeno delay para garantir transição suave
    setTimeout(() => {
      root.classList.add(newTheme);
      
      // Persiste tema no localStorage
      try {
        localStorage.setItem(LOCAL_STORAGE_KEYS.theme, newTheme);
      } catch (error) {
        console.warn('Não foi possível salvar tema no localStorage:', error);
      }
    }, 16); // 16ms ≈ 1 frame de animação a 60fps
  }, []);

  // Função para alternar tema
  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
  }, [theme]);

  // Função para definir tema específico
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  // Effect para aplicar tema quando mudança ocorre
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Effect para escutar mudanças na preferência do sistema
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Só atualiza se não há tema salvo no localStorage
      const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme);
      if (!savedTheme) {
        const newSystemPreference: Theme = e.matches ? 'dark' : 'light';
        setThemeState(newSystemPreference);
      }
    };

    // Adiciona listener para mudanças na preferência do sistema
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    theme,
    toggleTheme,
    setTheme,
    systemPreference,
  };
}