/**
 * Hook customizado para gerenciar estado e ações do formulário de contato
 * Responsável por: validação, envio WhatsApp/Email, controle de estado
 */
import { useState } from 'react';
import { CONTACT_INFO } from '../constants';

interface UseContactFormReturn {
  nome: string;
  mensagem: string;
  setNome: (value: string) => void;
  setMensagem: (value: string) => void;
  validarCampos: () => boolean;
  handleEnviarWhats: () => void;
  handleEnviarEmail: () => void;
  limparFormulario: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  /**
   * Valida se os campos obrigatórios estão preenchidos
   */
  const validarCampos = (): boolean => {
    const nomeValido = nome.trim().length > 0;
    const mensagemValida = mensagem.trim().length > 0;

    if (!nomeValido || !mensagemValida) {
      alert('Por favor, preencha seu nome e a mensagem');
      return false;
    }
    return true;
  };

  /**
   * Envia mensagem via WhatsApp
   */
  const handleEnviarWhats = (): void => {
    if (!validarCampos()) return;
    
    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const url = `https://wa.me/${CONTACT_INFO.phoneWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  /**
   * Envia mensagem via Email
   */
  const handleEnviarEmail = (): void => {
    if (!validarCampos()) return;
    
    const assunto = `Contato pelo Site - ${nome}`;
    const corpo = `Olá! Me chamo ${nome}.\n\n${mensagem}`;
    const url = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    window.location.href = url;
  };

  /**
   * Limpa todos os campos do formulário
   */
  const limparFormulario = (): void => {
    setNome('');
    setMensagem('');
  };

  return {
    nome,
    mensagem,
    setNome,
    setMensagem,
    validarCampos,
    handleEnviarWhats,
    handleEnviarEmail,
    limparFormulario,
  };
};