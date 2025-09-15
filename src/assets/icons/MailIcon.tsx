// Componente de ícone representando email para contato
// Usado na seção de contato para indicar comunicação via email
import React from 'react';

// Ícone de envelope/carta na cor vermelha para destacar contato por email
const MailIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {/* Formato de envelope com linha indicando abertura/envio */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
export default MailIcon;