// Caminho: src/App.tsx
// Componente principal da aplicação que estrutura o layout da página
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SobreNos from './components/SobreNos';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Cabeçalho fixo com navegação e logo */}
      <Header />
      
      {/* Conteúdo principal da página */}
      <main>
        {/* Seção hero com banner principal */}
        <Hero />
        
        {/* Seção sobre a empresa */}
        <SobreNos />
        
        {/* Seção de serviços oferecidos */}
        <Servicos />
        
        {/* Seção de contato e localização */}
        <Contato />
      </main>
      
      {/* Rodapé com informações da empresa */}
      <Footer />
    </>
  )
}

export default App;