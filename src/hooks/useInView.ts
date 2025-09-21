// Caminho: src/hooks/useInView.ts
import { useState, useEffect, type RefObject } from 'react';

export function useInView(ref: RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      // Threshold exigente: considera "não visível" assim que o primeiro pixel sai da tela
      { threshold: 1.0 } 
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
}