// Caminho: src/App.tsx
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreNos from './components/SobreNos';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Avatar from './components/Avatar';

import { useInView } from './hooks/useInView';

function App() {
  // A referência que vamos observar é a própria seção Hero
  const heroRef = useRef<HTMLElement>(null);
  // O hook nos dirá se a seção Hero está visível
  const isHeroVisible = useInView(heroRef);

  return (
    <>
      <Header />
      <main>
        {/* Passamos a referência diretamente para o componente Hero */}
        <Hero ref={heroRef} />
        <SobreNos />
        <Servicos />
        <Contato />
      </main>
      <Footer />
      {/* O Avatar só será renderizado se a seção Hero estiver visível */}
      {isHeroVisible && <Avatar />}
    </>
  );
}

export default App;