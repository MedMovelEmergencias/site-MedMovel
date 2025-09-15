// Arquivo de configuração do Vite para o projeto Med Móvel
// Define configurações de build, desenvolvimento e plugins utilizados
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração principal do Vite com plugin React para suporte completo a JSX/TSX
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Plugin oficial do React para transformação de JSX e HMR
})
