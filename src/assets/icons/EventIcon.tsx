// Componente de ícone representando eventos médicos e agendamentos
// Usado na seção de serviços para indicar cobertura de eventos
import React from 'react';

// Ícone com gradiente verde e símbolo de calendário/agenda
const EventIcon: React.FC = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      {/* Formato de calendário com marcação indicando agendamento/evento */}
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  </div>
);

export default EventIcon;