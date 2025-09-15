// Caminho: src/components/Hero/Hero.tsx
// Componente de seção hero principal com banner de destaque e call-to-action
import React from 'react';

// URL da imagem de fundo do banner principal
// Utiliza uma imagem genérica do Unsplash para demonstração
const heroBackgroundImage = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop';

const Hero: React.FC = () => {
    return (
        // Seção principal com imagem de fundo em tela cheia
        <section
            id="home"
            className="relative h-[85vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        >
            {/* Overlay escuro para melhorar o contraste do texto sobre a imagem */}
            <div className="absolute inset-0 bg-primary-blue bg-opacity-60"></div>

            {/* Conteúdo principal do hero posicionado acima do overlay */}
            <div className="relative z-10 p-4 animate-fade-in-up">
                {/* Título principal com destaque e sombra para legibilidade */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    Cuidado e Agilidade que Salvam Vidas, 24 Horas por Dia
                </h1>
                
                {/* Subtítulo explicativo dos serviços */}
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Serviços de emergência e remoção com ambulâncias modernas e equipe especializada. Sua segurança é nossa prioridade.
                </p>
                
                {/* Botão de call-to-action para direcionamento ao contato */}
                <a
                    href="#contato"
                    className="inline-block bg-accent-red text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1 hover:scale-105"
                >
                    Entre em Contato
                </a>
            </div>
        </section>
    );
};

export default Hero;