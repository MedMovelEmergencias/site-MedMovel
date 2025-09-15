// Arquivo de configuração do Tailwind CSS para o projeto Med Móvel
// Define classes utilitárias, cores personalizadas e configurações de build
/** @type {import('tailwindcss').Config} */
export default {
  // Define quais arquivos o Tailwind deve escanejar para gerar CSS otimizado
  content: [
    "./index.html", // Arquivo HTML principal
    "./src/**/*.{js,ts,jsx,tsx}", // Todos os componentes React em TypeScript/JavaScript
  ],
  theme: {
    extend: {
      // Paleta de cores personalizada da Med Móvel seguindo a identidade visual
      colors: {
        'primary-blue': '#0A2B63',   // Azul principal para headers, títulos e elementos de destaque
        'accent-red': '#D92525',     // Vermelho de emergência para CTAs e elementos críticos
        'accent-yellow': '#F2C94C',  // Amarelo complementar para ícones e destaques visuais
      },
    },
  },
  plugins: [], // Array para plugins adicionais do Tailwind (vazío no momento)
}