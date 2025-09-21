// Funções utilitárias reutilizáveis - ADICIONAR NOVAS FUNÇÕES AQUI
// Evita duplicação de código e melhora manutenibilidade

import { ANIMATION_DURATIONS } from '../constants';

// Combina classes CSS (usado com Tailwind)
export const cn = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Debounce para otimizar eventos frequentes (ex: scroll, resize)
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number = ANIMATION_DURATIONS.normal
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function para limitar execução de funções
 * @param func - Função para executar
 * @param limit - Limite de tempo em millisegundos
 * @returns Função throttled
 */
export const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  limit: number = ANIMATION_DURATIONS.normal
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Função para validação de email
 * @param email - Email para validar
 * @returns boolean indicando se o email é válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Função para validação de telefone brasileiro
 * @param phone - Telefone para validar
 * @returns boolean indicando se o telefone é válido
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(?:\+55\s?)?\(?[1-9]{2}\)?\s?[0-9]{4,5}-?[0-9]{4}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

/**
 * Formata telefone brasileiro
 * @param phone - Telefone para formatar
 * @returns Telefone formatado
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return phone;
};

/**
 * Gera ID único para elementos
 * @param prefix - Prefixo opcional para o ID
 * @returns ID único
 */
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Hook personalizado para detecção de dispositivo móvel
 * @returns boolean indicando se é dispositivo móvel
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Função para scroll suave para elemento
 * @param elementId - ID do elemento para fazer scroll
 * @param offset - Offset opcional em pixels
 */
export const smoothScrollTo = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId.replace('#', ''));
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Função para lazy loading de imagens
 * @param src - URL da imagem
 * @returns Promise que resolve quando a imagem carrega
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Hook para detectar se o usuário prefere modo escuro
 * @returns boolean indicando preferência por modo escuro
 */
export const prefersDarkMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};