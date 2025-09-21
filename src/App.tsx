// Componente principal - Estrutura da aplicação com lazy loading
// IMPORTANTE: Avatar é controlado por scroll (desaparece após 100px)
import { useRef, lazy, Suspense, useState, useEffect } from 'react';

// Carregamento imediato para componentes críticos
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy loading para componentes não-críticos (melhor performance)
const SobreNos = lazy(() => import('./components/SobreNos'));
const Servicos = lazy(() => import('./components/Servicos'));
const Contato = lazy(() => import('./components/Contato'));
const Footer = lazy(() => import('./components/Footer'));
const Avatar = lazy(() => import('./components/Avatar'));

// Loading spinner padrão para Suspense
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue dark:border-white"></div>
  </div>
);

function App() {
  const heroRef = useRef<HTMLElement>(null);
  
  // Controla visibilidade do Avatar baseado no scroll
  const [showAvatar, setShowAvatar] = useState(true);

  // LÓGICA DO AVATAR: Esconde após 100px de scroll, reaparece no topo
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 100) {
        setShowAvatar(false);
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setShowAvatar(true);
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <title>Med Móvel Emergências - Atendimento Pré-Hospitalar 24h</title>
      
      <Header />
      
      <main role="main">
        {/* Hero carregado imediatamente */}
        <Hero ref={heroRef} />
        
        {/* Demais seções com lazy loading */}
        <Suspense fallback={<LoadingFallback />}>
          <SobreNos />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Servicos />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contato />
        </Suspense>
      </main>
      
      {/* Footer com lazy loading */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      
      {/* Avatar: visível apenas no topo (esconde após 100px de scroll) */}
      {showAvatar && (
        <Suspense fallback={null}>
          <Avatar />
        </Suspense>
      )}
    </>
  );
}

export default App;