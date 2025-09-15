// Caminho: src/components/Servicos.tsx
// Componente que exibe a seção de serviços oferecidos pela Med Móvel
// Apresenta cards com ícones, descrições e call-to-action para cada serviço
import React from 'react';

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
    description: 'Transferência segura de pacientes entre hospitais e clínicas, com suporte médico contínuo durante todo o trajeto.',
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
    // Seção com gradiente suave de fundo e espaçamento vertical generoso
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção com título e descrição centralizada */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue mb-4">
            Nossos Serviços
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Soluções completas em atendimento pré-hospitalar e transporte de pacientes, 
            adaptadas para cada necessidade com excelência e humanização.
          </p>
        </div>

        {/* Grid responsivo de cards de serviços - 1 coluna mobile, 2 colunas desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10">
          {listaDeServicos.map((servico, index) => (
            // Card individual com hover effects e animações
            <div 
              key={index} 
              className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Efeito de brilho que atravessa o card no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              <div className="relative z-10">
                {/* Container do ícone com efeito de escala no hover */}
                <div className="flex justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {servico.icon}
                </div>
                {/* Conteúdo textual do card */}
                <div className="text-center">
                  {/* Badge destacando a característica principal do serviço */}
                  <span className="inline-block px-3 py-1 bg-accent-red/10 text-accent-red text-xs font-semibold rounded-full mb-3">
                    {servico.highlight}
                  </span>
                  {/* Título do serviço com mudança de cor no hover */}
                  <h3 className="text-xl font-bold text-primary-blue mb-4 group-hover:text-accent-red transition-colors duration-300">
                    {servico.title}
                  </h3>
                  {/* Descrição detalhada do serviço */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {servico.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de call-to-action final com destaque para contato */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
              Precisa de ajuda? Estamos aqui para você!
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está disponível 24 horas para atender suas necessidades de emergência e transporte médico.
            </p>
            {/* Botão de contato com hover effects */}
            <a 
              href="#contato" 
              className="inline-block bg-accent-red text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;