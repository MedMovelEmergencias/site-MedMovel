// Componente de ícone representando hospital/atendimento médico especializado
// Usado na seção de serviços para indicar parceria com hospitais
import React from 'react';

// Ícone com gradiente azul e símbolo hospitalar com cruz médica
const HospitalIcon: React.FC = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-primary-blue rounded-full flex items-center justify-center shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      {/* Formato estrelado representando excelência no atendimento */}
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      {/* Cruz médica sobreposta indicando serviços hospitalares */}
      <path d="M9 9h2v2h2V9h2v2h-2v2h-2v-2H9V9z" fill="white"/>
    </svg>
  </div>
);

export default HospitalIcon;