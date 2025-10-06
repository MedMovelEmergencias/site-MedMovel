/**
 * Hook para animações de scroll reveal usando Framer Motion
 * Facilita a criação de animações baseadas na visibilidade do elemento
 */
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export interface ScrollRevealOptions {
  threshold?: number;    // Porcentagem do elemento visível para disparar (0-1)
  triggerOnce?: boolean; // Se true, anima apenas uma vez
  margin?: string;       // Margem para expandir/reduzir área de detecção
}

/**
 * Hook principal para detecção de visibilidade
 * @param options - Configurações de detecção
 * @returns ref para anexar ao elemento e estado de visibilidade
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: options.threshold || 0.1,
    once: options.triggerOnce !== false
  });

  return { ref, isInView };
};

/**
 * Variantes de animação predefinidas para scroll reveal
 * Cada variante tem estados 'hidden' e 'visible' para transições suaves
 */
export const scrollRevealVariants = {
  // Fade in from bottom
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 60
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },
  
  // Fade in from left
  fadeInLeft: {
    hidden: { 
      opacity: 0, 
      x: -60
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },
  
  // Fade in from right
  fadeInRight: {
    hidden: { 
      opacity: 0, 
      x: 60
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },
  
  // Scale up
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },
  
  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  
  // Stagger child item
  staggerItem: {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }
};