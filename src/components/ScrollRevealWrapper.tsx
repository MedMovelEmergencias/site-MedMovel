import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ScrollRevealOptions } from '../hooks/useScrollReveal';

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  variant?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  className?: string;
  options?: ScrollRevealOptions;
  delay?: number;
}

export const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({
  children,
  variant = 'fadeInUp',
  className = '',
  options = {},
  delay = 0
}) => {
  const { ref, isInView } = useScrollReveal(options);

  const getVariants = () => {
    switch (variant) {
      case 'fadeInLeft':
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 }
        };
      case 'fadeInRight':
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scaleIn':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      default: // fadeInUp
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealWrapper;