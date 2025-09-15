// Caminho: src/assets/icons/MacaIcon.tsx
// Componente de ícone representando maca médica para transporte de pacientes
// Usado na seção de serviços para indicar equipamentos especializados
import React from 'react';

// Ícone com gradiente azul-teal e ilustração detalhada de maca hospitalar
const MacaIcon: React.FC = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-8 w-8 text-white"
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      {/* Superfície principal da maca onde o paciente é posicionado */}
      <rect x="4" y="10" width="16" height="3" rx="1" stroke="white" fill="none"/>
      {/* Pernas de sustentação da maca - lado esquerdo e direito */}
      <line x1="6" y1="13" x2="6" y2="18" stroke="white"/>
      <line x1="18" y1="13" x2="18" y2="18" stroke="white"/>
      {/* Rodas para mobilidade - permitem transporte suave do paciente */}
      <circle cx="6" cy="18" r="1" stroke="white" fill="white"/>
      <circle cx="18" cy="18" r="1" stroke="white" fill="white"/>
      {/* Alças laterais para manuseio e direcionamento da maca */}
      <line x1="4" y1="11" x2="2" y2="11" stroke="white"/>
      <line x1="20" y1="11" x2="22" y2="11" stroke="white"/>
    </svg>
  </div>
);

export default MacaIcon;