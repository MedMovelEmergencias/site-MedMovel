// Hook para detectar visibilidade de elementos na tela
// USA: Intersection Observer API para performance otimizada
import { useState, useEffect, type RefObject, useCallback, useRef } from 'react';
import type { UseInViewOptions } from '../types';

export function useInView(
  ref: RefObject<HTMLElement | null>, 
  options: UseInViewOptions = {}
) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  
  // Configurações padrão (threshold 0.1 = 10% visível)
  const { 
    threshold = 0.1,
    rootMargin = '0px',
    once = false 
  } = options;

  // Ref para armazenar o observer e evitar recriações desnecessárias
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Callback otimizado para mudanças de intersecção
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const isVisible = entry.isIntersecting;
    
    setIntersecting(isVisible);
    
    // Se configurado para executar apenas uma vez e já foi visível
    if (once && isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [once, hasBeenVisible]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Se configurado para executar apenas uma vez e já foi visível, não observa mais
    if (once && hasBeenVisible) {
      setIntersecting(true);
      return;
    }

    // Cria observer apenas se não existir
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        handleIntersection,
        {
          threshold,
          rootMargin,
          root: null // Usa viewport como root
        }
      );
    }

    const observer = observerRef.current;
    observer.observe(element);

    // Cleanup function otimizada
    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin, once, hasBeenVisible, handleIntersection]);

  // Cleanup final quando o componente é desmontado
  useEffect(() => {
    const observer = observerRef.current;
    
    return () => {
      if (observer) {
        observer.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return {
    isIntersecting: once && hasBeenVisible ? true : isIntersecting,
    hasBeenVisible
  };
}