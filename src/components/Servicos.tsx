// Caminho: src/components/Servicos.tsx
// Componente que exibe a seção de serviços oferecidos pela Med Móvel
// Apresenta cards com ícones, descrições e call-to-action para cada serviço
import React from 'react';
import { ScrollRevealWrapper } from './ScrollRevealWrapper';

// Importa ícones personalizados para representar visualmente cada serviço médico
import HospitalIcon from '../assets/icons/HospitalIcon';
import EventIcon from '../assets/icons/EventIcon';
import AmbulanceIcon from '../assets/icons/AmbulanceIcon';
import MacaIcon from '../assets/icons/MacaIcon';

// Array de dados contendo informações de cada serviço oferecido pela empresa
// Cada objeto possui ícone, título, descrição e destaque específico
const listaDeServicos = [
  {
    icon: <MacaIcon />,
    title: 'Atendimento de Urgência e Emergência',
    description: 'Atendimento rápido e eficaz para emergências médicas, com equipes prontas para agir 24 horas por dia.',
    highlight: 'Resposta Rápida'
  },
  {
    icon: <HospitalIcon />,
    title: 'Remoção Inter-Hospitalar',
    description: 'Transferência segura de pacientes entre hospitais e clínicas, com suporte médico contínuo.',
    highlight: 'Transporte Seguro'
  },
  {
    icon: <EventIcon />,
    title: 'Cobertura de Eventos',
    description: 'Garantimos a segurança médica do seu evento, com postos médicos, ambulâncias e equipe especializada.',
    highlight: 'Equipe Especializada'
  },
  {
    icon: <AmbulanceIcon />, // Ícone de ambulância representando transporte especializado
    title: 'Transporte de Pacientes',
    description: 'Transporte simples para consultas, exames e altas hospitalares, com conforto e segurança para o paciente.',
    highlight: 'Máximo Conforto'
  },
];

// Componente principal que renderiza a seção completa de serviços
const Servicos: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <ScrollRevealWrapper variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue dark:text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Soluções completas em atendimento pré-hospitalar e transporte de pacientes, 
            adaptadas para cada necessidade com excelência e humanização.
          </p>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {listaDeServicos.map((servico, index) => (
            <ScrollRevealWrapper 
              key={index}
              variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index * 0.1}
            >
              <div 
                className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-6 md:p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    {servico.icon}
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-accent-red/10 text-accent-red text-xs font-semibold rounded-full mb-3">
                      {servico.highlight}
                    </span>
                    <h3 className="text-xl font-bold text-primary-blue dark:text-blue-300 mb-4 group-hover:text-accent-red transition-colors duration-300">
                      {servico.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {servico.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollRevealWrapper>
          ))}
        </div>

        <ScrollRevealWrapper variant="scaleIn" delay={0.5} className="mt-20">
          <div className="container mx-auto">
            <div className="relative rounded-2xl bg-gradient-to-r from-primary-blue via-blue-800 to-cyan-600 p-10 md:p-12 text-center text-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-white/10 skew-x-[-30deg] -translate-x-full animate-[shimmer_4s_infinite]"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Precisa de Ajuda? Estamos Aqui Para Você!
                </h3>
                <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100">
                  Nossa equipe está disponível 24 horas para atender suas necessidades de emergência e transporte médico. Não hesite em nos contatar.
                </p>
                <a 
                  href="#contato" 
                  className="inline-block bg-accent-red text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider transition-all duration-300 transform hover:bg-red-600 hover:scale-110 hover:shadow-2xl active:scale-100"
                >
                  Entre em Contato
                </a>
              </div>
            </div>
          </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
};

export default Servicos;