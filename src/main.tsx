// Caminho: src/main.tsx
// Ponto de entrada da aplicação React que inicializa e renderiza o componente principal
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Cria a raiz da aplicação React e renderiza o componente App
// StrictMode ajuda a identificar problemas potenciais durante o desenvolvimento
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
