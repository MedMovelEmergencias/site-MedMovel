// Caminho: src/components/Hero/Avatar.tsx
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import doctorAnimation from '../assets/animations/doctor-animation.json';

const mensagensAvatar = [
  { id: 1, texto: "Olá! Bem-vindo à Med Móvel! 👋", duracao: 5000 },
  { id: 2, texto: "Somos especialistas em atendimento pré-hospitalar há mais de 10 anos! 🚑", duracao: 6000 },
  { id: 3, texto: "Nossa equipe está disponível 24h para emergências e transporte médico.", duracao: 6500 },
  { id: 4, texto: "Precisa de ajuda? Fale conosco! Nossa prioridade é cuidar de você. ❤️", duracao: 7000 }
];

// Este componente agora não tem mais lógica de visibilidade.
// Ele apenas se exibe e gerencia suas mensagens.
const Avatar: React.FC = () => {
  const [mensagemAtual, setMensagemAtual] = useState(0);
  const [animandoSaida, setAnimandoSaida] = useState(false);

  // Lógica de sequência de mensagens que roda uma única vez
  useEffect(() => {
    if (mensagemAtual >= mensagensAvatar.length - 1) {
      return; // Para na última mensagem
    }

    const mensagem = mensagensAvatar[mensagemAtual];
    const timer = setTimeout(() => {
      setAnimandoSaida(true);
      setTimeout(() => {
        setMensagemAtual(prev => prev + 1);
        setAnimandoSaida(false);
      }, 400);
    }, mensagem.duracao);

    return () => clearTimeout(timer);
  }, [mensagemAtual]);

  return (
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex items-end -space-x-4 md:-space-x-8">
      <div className="w-40 h-40 md:w-64 md:h-64 transition-transform duration-300 hover:scale-105 cursor-pointer">
        <Lottie 
          animationData={doctorAnimation} 
          loop={true} 
          className="w-full h-full"
        />
      </div>
      <div className={`transition-all duration-500 ease-in-out mb-12 md:mb-20 ${animandoSaida ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
         <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-4 md:px-6 md:py-4 rounded-2xl shadow-xl max-w-[200px] md:max-w-xs border border-gray-200 dark:border-gray-600 relative">
          <p className="text-xs md:text-sm leading-relaxed font-medium text-center">
            {mensagensAvatar[mensagemAtual]?.texto}
          </p>
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[16px] border-r-white dark:border-r-gray-700 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;