// Componente de ícone representando ambulância/UTI móvel para serviços médicos
// Usado na seção de serviços para indicar transporte especializado
import React from 'react';

// Ícone com gradiente roxo e símbolo de ambulância com cruz médica
const UTIIcon: React.FC = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      {/* Forma da ambulância com rodas e carroceria */}
      <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v11c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-1h8v1c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V8l-2.08-5.99zM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      {/* Cruz médica característica das ambulâncias */}
      <path d="M10 8h4v1h-4V8zm2-2h-1v4h1V6z" fill="white"/>
    </svg>
  </div>
);

export default UTIIcon;