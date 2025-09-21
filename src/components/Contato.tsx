// Caminho: src/components/Contato.tsx
// Componente responsável pela seção de contato da página, com suporte para Dark Mode
import React, { useState } from 'react';
import MapPinIcon from '../assets/icons/MapPinIcon';
import PhoneIcon from '../assets/icons/PhoneIcon';
import MailIcon from '../assets/icons/MailIcon';

const Contato: React.FC = () => {
  // Controla o estado dos campos do formulário de contato
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Define as informações de contato da empresa
  const whatsappNumber = '5511932791974'; // Número do WhatsApp apenas com dígitos
  const emailDestino = 'contato@medmovelemergencias.com.br';

  // Valida se os campos obrigatórios foram preenchidos antes do envio
  const validarCampos = () => {
    if (!nome.trim() || !mensagem.trim()) {
      alert('Por favor, preencha seu nome e a mensagem 🙂');
      return false;
    }
    return true;
  };

  // Abre o WhatsApp com a mensagem pré-formatada em nova aba
  const handleEnviarWhats = () => {
    if (!validarCampos()) return;
    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  // Abre o cliente de email padrão com assunto e corpo pré-preenchidos
  const handleEnviarEmail = () => {
    if (!validarCampos()) return;
    const assunto = `Contato pelo Site - ${nome}`;
    const corpo = `Olá! Me chamo ${nome}.\n\n${mensagem}`;
    const url = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    window.location.href = url;
  };

  return (
// Adicionadas classes dark:* para o fundo da seção
    <section id="contato" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção com título e descrição */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue dark:text-white">Fale Conosco</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mt-4">Estamos prontos para atender. Preencha o formulário abaixo e escolha seu canal de preferência para enviar sua mensagem.</p>
        </div>

        {/* Layout principal em duas colunas: formulário e informações */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Coluna esquerda: Formulário de contato */}
{/* Adicionadas classes dark:* para o fundo do card e bordas */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col">
            <h3 className="text-2xl font-bold text-primary-blue dark:text-white mb-6">Sua Mensagem</h3>

            {/* Formulário flexível que se adapta à altura do container */}
            <form className="space-y-6 flex flex-col flex-grow">
              
              {/* Área dos campos de entrada que cresce para preencher o espaço */}
              <div className="flex-grow flex flex-col space-y-6">
                {/* Campo de nome obrigatório */}
                <div>
{/* Adicionadas classes dark:* para a label */}
                  <label htmlFor="nome" className="block text-sm font-semibold text-primary-blue dark:text-blue-200 mb-1">Nome</label>
{/* Adicionadas classes dark:* para o campo de input */}
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-accent-red focus:ring-2 focus:ring-accent-red/30 outline-none transition-all" 
                    placeholder="Seu nome completo" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                
                {/* Campo de mensagem que se expande para ocupar a altura restante */}
                <div className="flex flex-col flex-grow">
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-primary-blue dark:text-blue-200 mb-1">Mensagem</label>
{/* Adicionadas classes dark:* para o campo de textarea */}
                  <textarea 
                    id="mensagem" 
                    name="mensagem" 
                    required 
                    className="w-full flex-grow min-h-[120px] px-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-accent-red focus:ring-2 focus:ring-accent-red/30 outline-none transition-all resize-none" 
                    placeholder="Como podemos ajudar?" 
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </div>
              </div>

              {/* Botões de ação posicionados na parte inferior */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Botão para envio via WhatsApp */}
                <button
                  type="button"
                  onClick={handleEnviarWhats}
                  className="flex-1 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.75 13.96c.25.13.42.2.46.28a.47.47 0 0 1 .04.28c-.03.11-.06.2-.14.32a2.23 2.23 0 0 1-.4.43c-.22.21-.46.38-.72.5a1 1 0 0 1-.46.12c-.22.01-.46-.03-.7-.14a6.22 6.22 0 0 1-2.9-1.7c-.55-.48-1-1.03-1.36-1.62a10.05 10.05 0 0 1-.9-2.1c-.08-.26-.06-.51.05-.73a.88.88 0 0 1 .39-.39c.1-.08.2-.12.28-.14a.43.43 0 0 1 .23-.02c.1.01.2.02.28.02c.12 0 .23.04.33.08c.18.09.3.2.39.3a.58.58 0 0 1 .15.34c.02.13.02.28.02.43c-.02.21-.06.43-.12.65c-.06.23-.13.45-.2.65l-.28.45c-.08.14-.12.26-.12.36c0 .1.03.2.1.28c.09.1.2.18.32.26c.28.2.6.43.95.68c.45.32.81.56 1.08.73c.09.06.18.1.26.13c.09.03.18.03.25,0a.5.5 0 0 0 .28-.24c.08-.12.15-.28.2-.48c.05-.2.08-.4.08-.58c0-.12-.02-.23-.06-.34a.9.9 0 0 0-.2-.3c-.09-.08-.2-.14-.3-.19c-.1-.05-.18-.08-.26-.1c-.08-.02-.17-.02-.25-.02c-.1 0-.2.01-.28.04c-.09.03-.18.08-.26.14l-.1.08c-.06.05-.1.1-.14.15c-.04.05-.06.1-.08.14c-.02.04-.02.08-.02.12c.01.07.03.14.06.2c.03.06.07.12.13.17c.06.05.12.1.19.14c.07.04.14.08.2.12zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /></svg>
                  Enviar WhatsApp
                </button>
                
                {/* Botão para envio via Email */}
                <button
                  type="button"
                  onClick={handleEnviarEmail}
                  className="flex-1 py-3 bg-primary-blue text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-800 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Enviar E-mail
                </button>
              </div>
            </form>
            
            {/* Nota sobre tempo de resposta */}
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">Retornamos rapidamente! Atendimento 24h.</div>
          </div>
          
          {/* Coluna direita: Informações de contato e mapa */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col justify-between h-full">
            
            {/* Seção de informações de contato */}
            <div className="space-y-6">
              {/* Endereço físico da empresa */}
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1"><MapPinIcon /></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-primary-blue dark:text-blue-200">Endereço</h4>
                  <p className="text-gray-600 dark:text-gray-300">Rua Domingos De Morais, 2132<br />Vila Mariana, São Paulo - SP</p>
                </div>
              </div>
              
              {/* Número de telefone com link para discagem direta */}
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1"><PhoneIcon /></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-primary-blue dark:text-blue-200">Telefone</h4>
                  <a href="tel:+5511932791974" className="text-gray-600 dark:text-gray-300 hover:text-accent-red transition-colors">(11) 93279-1974</a>
                </div>
              </div>
              
              {/* Email com link para abertura do cliente de email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1"><MailIcon /></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-primary-blue dark:text-blue-200">E-mail</h4>
                  <a href="mailto:contato@medmovelemergencias.com.br" className="text-gray-600 dark:text-gray-300 hover:text-accent-red transition-colors">contato@medmovelemergencias.com.br</a>
                </div>
              </div>
            </div>
            
            {/* Mapa interativo do Google Maps incorporado */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.958595293465!2d-46.638513885542!3d-23.56999056758414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a451d64387%3A0x284f7f1a32a6813b!2sR.%20Domingos%20de%20Morais%2C%202132%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004036-000!5e0!3m2!1spt-BR!2sbr!4v1668888888888!5m2!1spt-BR!2sbr"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Med Móvel"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;