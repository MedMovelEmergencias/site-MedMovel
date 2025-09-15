// Componente de ícone representando localização/endereço
// Usado na seção de contato para indicar endereço físico da empresa
import React from 'react';

// Ícone de pin de localização na cor vermelha para destacar endereço
const MapPinIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {/* Formato de pin/marcador de mapa com base arredondada */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    {/* Círculo central do pin indicando ponto exato da localização */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
export default MapPinIcon;