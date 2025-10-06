/**
 * Componente de botão para formulário de contato
 * Responsável por: renderização consistente dos botões de ação
 */
import React from 'react';

interface ContactButtonProps {
  onClick: () => void;
  type: 'whatsapp' | 'email';
  children: React.ReactNode;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  type,
  children,
  className = '',
}) => {
  const baseClasses = 'py-3 font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl';
  
  const typeClasses = {
    whatsapp: 'bg-green-500 text-white hover:bg-green-600',
    email: 'bg-primary-blue text-white hover:bg-blue-800',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ContactButton;