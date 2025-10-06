// Componente de contato - formulário e informações da empresa
// Responsável por: renderização do layout, integração com useContactForm
import React from 'react';
import { ScrollRevealWrapper } from './ScrollRevealWrapper';
import ContactButton from './ContactButton';
import { CONTACT_INFO } from '../constants';
import { useContactForm } from '../hooks/useContactForm';

const Contato: React.FC = () => {
  const {
    nome,
    mensagem,
    setNome,
    setMensagem,
    handleEnviarWhats,
    handleEnviarEmail,
  } = useContactForm();

  return (
    <section id="contato" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <ScrollRevealWrapper variant="fadeInUp" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue dark:text-white">
            Fale Conosco
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mt-4">
            Estamos prontos para atender. Preencha o formulário abaixo e escolha seu canal de preferência.
          </p>
        </ScrollRevealWrapper>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <ScrollRevealWrapper variant="fadeInLeft" delay={0.2}>
            <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 h-auto lg:h-[620px] flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-primary-blue dark:text-white mb-6">
                Sua Mensagem
              </h3>

              <form className="space-y-6 flex-grow flex flex-col">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-primary-blue dark:text-blue-200 mb-1">
                    Nome
                  </label>
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
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-primary-blue dark:text-blue-200 mb-1">
                    Mensagem
                  </label>
                  <textarea 
                    id="mensagem" 
                    name="mensagem" 
                    required 
                    rows={5}
                    className="w-full min-h-[120px] lg:min-h-[240px] px-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-accent-red focus:ring-2 focus:ring-accent-red/30 outline-none transition-all resize-none" 
                    placeholder="Como podemos ajudar?" 
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </div>

                <div className="mt-auto pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ContactButton 
                      type="whatsapp" 
                      onClick={handleEnviarWhats}
                    >
                      Enviar WhatsApp
                    </ContactButton>
                    
                    <ContactButton 
                      type="email" 
                      onClick={handleEnviarEmail}
                    >
                      Enviar E-mail
                    </ContactButton>
                  </div>
                </div>
              </form>
            </div>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper variant="fadeInRight" delay={0.4}>
            <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 h-auto lg:h-[620px] flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-primary-blue dark:text-white mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-semibold text-lg text-primary-blue dark:text-blue-200">
                    Telefone
                  </h4>
                  <a 
                    href={`tel:+${CONTACT_INFO.phoneWhatsApp}`} 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-red transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-primary-blue dark:text-blue-200">
                    E-mail
                  </h4>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-red transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-primary-blue dark:text-blue-200">
                    Endereço
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {CONTACT_INFO.address.street}<br />
                    {CONTACT_INFO.address.district}
                  </p>
                </div>
                
                <div className="mt-8 flex-grow">
                  <h4 className="font-semibold text-lg text-primary-blue dark:text-blue-200 mb-3">
                    Localização
                  </h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.958595293465!2d-46.638513885542!3d-23.56999056758414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a451d64387%3A0x284f7f1a32a6813b!2sR.%20Domingos%20de%20Morais%2C%202132%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004036-000!5e0!3m2!1spt-BR!2sbr!4v1668888888888!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="200"
                    className="lg:h-[180px] w-full rounded-lg shadow-md"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Med Móvel"
                  ></iframe>
                </div>
              </div>
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contato;

