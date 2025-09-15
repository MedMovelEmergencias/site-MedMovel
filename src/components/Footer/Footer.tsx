// Caminho: src/components/Footer/Footer.tsx
// Componente que renderiza o rodapé do site da Med Móvel
// Contém informações da empresa, navegação rápida, redes sociais e copyright

import React from 'react';

// Componente reutilizável para ícones de redes sociais com hover effects
// Aceita href para o link e children para o conteúdo SVG do ícone
const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

// Componente principal do rodapé com layout em 3 colunas e linha de copyright
const Footer: React.FC = () => {
  // Obtém o ano atual para exibir no copyright automaticamente
  const currentYear = new Date().getFullYear();

  return (
    // Rodapé com fundo azul primário e borda vermelha superior característica
    <footer className="bg-primary-blue text-white border-t-4 border-accent-red">
      <div className="container mx-auto p-8">
        {/* Grid responsivo com 3 colunas em desktop, empilhadas em mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Coluna 1: Informações da Empresa - endereço e CNPJ */}
          <div>
            <h3 className="font-bold text-lg mb-2">Med Móvel Emergências</h3>
            <p className="text-sm text-gray-300">Rua Domingos De Morais 2132 - Vila Mariana - SP</p>
            <p className="text-sm text-gray-300">CNPJ: 48.688.090/0001-81</p>
          </div>
          
          {/* Coluna 2: Navegação Rápida - links para seções principais do site */}
          <div>
            <h3 className="font-bold text-lg mb-2">Navegação</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a>
              <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
            </nav>
          </div>
          
          {/* Coluna 3: Redes Sociais - ícones para Facebook e Instagram */}
          <div>
            <h3 className="font-bold text-lg mb-2">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Ícone do Facebook */}
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10-4.5-10-10-10zm2.25 10h-2v6h-3v-6h-1.5v-2.25h1.5v-1.62c0-1.29.67-2.38 2.38-2.38h1.87v2.25h-1.12c-.41 0-.5.2-.5.5v1.25h1.63l-.25 2.25z"/></svg>
              </SocialIcon>
              {/* Ícone do Instagram */}
              <SocialIcon href="https://www.instagram.com/medmovelemergencias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-2.7 0-3 .01-4.06.06-1.06.05-1.79.22-2.42.47-.65.25-1.23.59-1.77 1.14-.54.54-.89 1.12-1.14 1.77-.25.63-.42 1.36-.47 2.42-.05 1.06-.06 1.36-.06 4.06s.01 3 .06 4.06c.05 1.06.22 1.79.47 2.42.25.65.59 1.23 1.14 1.77.54.54 1.12.89 1.77 1.14.63.25 1.36.42 2.42.47 1.06.05 1.36.06 4.06.06s3-.01 4.06-.06c1.06-.05 1.79-.22 2.42-.47.65-.25 1.23-.59 1.77-1.14.54-.54.89-1.12 1.14-1.77.25-.63.42-1.36.47-2.42.05-1.06.06-1.36.06-4.06s-.01-3-.06-4.06c-.05-1.06-.22-1.79-.47-2.42-.25-.65-.59-1.23-1.14-1.77-.54-.54-1.12-.89-1.77-1.14-.63-.25-1.36-.42-2.42-.47-1.06-.05-1.36-.06-4.06-.06zm0 2.16c2.7 0 2.98.01 4.03.06 1.03.05 1.5.2 1.8.33.39.15.68.39.98.68.29.29.53.59.68.98.13.3.28.77.33 1.8.05 1.05.06 1.33.06 4.03s-.01 2.98-.06 4.03c-.05 1.03-.2 1.5-.33 1.8-.15.39-.39.68-.68.98-.29.29-.59.53-.98.68-.3.13-.77.28-1.8.33-1.05.05-1.33.06-4.03.06s-2.98-.01-4.03-.06c-1.03-.05-1.5-.2-1.8-.33-.39-.15-.68-.39-.98-.68-.29-.29-.53-.59-.68-.98-.13-.3-.28-.77-.33-1.8-.05-1.05-.06-1.33-.06-4.03s.01-2.98.06-4.03c.05-1.03.2-1.5.33-1.8.15-.39.39-.68.68-.98.29-.29.59-.53.98-.68.3-.13.77-.28 1.8-.33 1.05-.05 1.33-.06 4.03-.06zm0 4.8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm4.88-6.88c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        
        {/* Linha de Copyright final - separada por borda superior */}
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-4 mt-8">
          <p>&copy; {currentYear} Med Móvel Emergências. Todos os direitos reservados. Desenvolvido por Med Móvel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;