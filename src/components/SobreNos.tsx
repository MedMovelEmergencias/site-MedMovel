// Caminho: src/components/SobreNos.tsx
// Componente que apresenta a seção "Sobre a Empresa" no site da Med Móvel
// Exibe informações institucionais, missão e principais diferenciais da empresa
import React from 'react';

// Ícones personalizados SVG para representar os principais diferenciais da empresa
// Ícone representando frota de ambulâncias - usado para destacar a modernidade dos veículos
const FrotaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM22 12h-4a1 1 0 00-1 1v3a1 1 0 001 1h4v-5z" /></svg>;
// Ícone representando equipe médica - usado para destacar a qualificação dos profissionais
const EquipeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
// Ícone representando relógio - usado para destacar a disponibilidade 24 horas
const RelogioIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// Componente principal que renderiza a seção "Sobre Nós" da empresa
// Apresenta imagem, descrição da missão e principais diferenciais em formato de cards
const SobreNos: React.FC = () => {
  return (
    // Seção com fundo branco e espaçamento vertical generoso
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Layout em grid responsivo - 1 coluna em mobile, 2 colunas em desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Imagem - exibe foto representativa da equipe médica */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
              alt="Equipe médica da Med Móvel"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>

          {/* Coluna de Texto - contém título, descrição e lista de diferenciais */}
          <div>
            {/* Título principal da seção */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Sobre a Med Móvel</h2>
            {/* Subtítulo destacando a missão */}
            <p className="text-accent-red font-semibold mb-6">Nossa Missão é Cuidar de Vidas</p>
            {/* Parágrafo descritivo sobre a empresa e seus valores */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundada com o compromisso de oferecer atendimento pré-hospitalar de excelência, a Med Móvel se destaca pela agilidade, segurança e humanização no cuidado com cada paciente. Contamos com anos de experiência no transporte e atendimento de emergências, sempre priorizando o bem-estar e a vida.
            </p>
            
            {/* Lista de Diferenciais com Ícones - cada item destaca um ponto forte da empresa */}
            <div className="space-y-6">
              {/* Diferencial 1: Frota Moderna */}
              <div className="flex items-start">
                <div className="flex-shrink-0"><FrotaIcon /></div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-primary-blue">Frota Moderna e Equipada</h4>
                  <p className="text-gray-600">Ambulâncias básicas e UTIs móveis de última geração, prontas para qualquer tipo de ocorrência.</p>
                </div>
              </div>
              {/* Diferencial 2: Equipe Qualificada */}
              <div className="flex items-start">
                <div className="flex-shrink-0"><EquipeIcon /></div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-primary-blue">Equipe Altamente Qualificada</h4>
                  <p className="text-gray-600">Profissionais da saúde experientes e dedicados, incluindo médicos, enfermeiros e socorristas.</p>
                </div>
              </div>
              {/* Diferencial 3: Disponibilidade 24/7 */}
               <div className="flex items-start">
                <div className="flex-shrink-0"><RelogioIcon /></div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-primary-blue">Disponibilidade 24/7</h4>
                  <p className="text-gray-600">Nossas equipes estão de prontidão 24 horas por dia, 7 dias por semana, para atender seu chamado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;