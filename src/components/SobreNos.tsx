// Caminho: src/components/SobreNos.tsx
import React from 'react';
import ambulanceFrente from '../assets/images/ambulance-frente.jpg';
import ambulanceTras from '../assets/images/ambulance-tras.jpg';

const FrotaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM22 12h-4a1 1 0 00-1 1v3a1 1 0 001 1h4v-5z" /></svg>;
const EquipeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const RelogioIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const SobreNos: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-12 gap-y-16 items-center">
          <div className="md:col-span-3 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white">Sobre a Med Móvel</h2>
            <p className="text-accent-red font-semibold mb-6">Nossa Missão é Cuidar de Vidas</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fundada com o compromisso de oferecer atendimento pré-hospitalar de excelência, a Med Móvel se destaca pela agilidade, segurança e humanização no cuidado com cada paciente. Contamos com anos de experiência no transporte e atendimento de emergências, sempre priorizando o bem-estar e a vida.
            </p>
          </div>
          <div className="md:col-span-2 md:order-2">
            <img 
              src={ambulanceFrente} 
              alt="Ambulância da Med Móvel vista de frente"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-3 md:order-4">
            <h3 className="text-3xl font-bold text-primary-blue dark:text-white mb-8">Nossos Diferenciais</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1"><FrotaIcon /></div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-primary-blue dark:text-blue-300">Frota Moderna e Equipada</h4>
                  <p className="text-gray-600 dark:text-gray-400">Ambulâncias básicas e UTIs móveis de última geração, prontas para qualquer tipo de ocorrência.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1"><EquipeIcon /></div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-primary-blue dark:text-blue-300">Equipe Altamente Qualificada</h4>
                  <p className="text-gray-600 dark:text-gray-400">Profissionais da saúde experientes e dedicados, incluindo médicos, enfermeiros e socorristas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1"><RelogioIcon /></div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-primary-blue dark:text-blue-300">Disponibilidade 24/7</h4>
                  <p className="text-gray-600 dark:text-gray-400">Nossas equipes estão de prontidão 24 horas por dia, 7 dias por semana, para atender seu chamado.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 md:order-3">
            <img 
              src={ambulanceTras} 
              alt="Ambulância da Med Móvel vista de trás"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;