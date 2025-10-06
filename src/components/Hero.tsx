// Caminho: src/components/Hero.tsx
// Componente Hero otimizado com forwardRef para detecção de visibilidade
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import heroBackgroundImage from '../assets/images/hero-background.jpg';
import Avatar from './Avatar';

const Hero = forwardRef<HTMLElement>((_props, ref) => {
    return (
        <section
            ref={ref}
            id="home"
            // O container agora é apenas um container posicional
            className="relative h-[85vh] text-white flex items-center justify-center text-center overflow-hidden"
        >
            {/* 1. Usamos uma tag <img> para ter mais controle */}
            <img 
              src={heroBackgroundImage} 
              alt="Equipamentos médicos de emergência"
              // Estilos para fazer a imagem se comportar como um fundo
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* O overlay continua o mesmo, por cima da imagem */}
            <div className="absolute inset-0 bg-primary-blue bg-opacity-65"></div>

            {/* O conteúdo textual com animações */}
            <div className="relative z-10 p-4">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-4" 
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
                >
                    Cuidado e Agilidade que Salvam Vidas, 24 Horas por Dia
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
                >
                    Serviços de emergência e remoção com ambulâncias modernas e equipe especializada. Sua segurança é nossa prioridade.
                </motion.p>
                <motion.a 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    href="#contato" 
                    className="inline-block bg-accent-red text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1 hover:scale-105"
                >
                    Entre em Contato
                </motion.a>
            </div>

            {/* Avatar integrado à seção home */}
            <Avatar />
        </section>
    );
});

export default Hero;