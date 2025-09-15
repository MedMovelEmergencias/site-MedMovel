// Arquivo de configuração do ESLint para o projeto Med Móvel
// Define regras de qualidade de código, padrões e verificações automáticas
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

// Configuração principal do ESLint com suporte para TypeScript e React
export default tseslint.config([
  globalIgnores(['dist']), // Ignora pasta de build na verificação
  {
    files: ['**/*.{ts,tsx}'], // Aplica regras para arquivos TypeScript/React
    extends: [
      js.configs.recommended,              // Regras básicas JavaScript
      tseslint.configs.recommended,        // Regras TypeScript
      reactHooks.configs['recommended-latest'], // Regras React Hooks
      reactRefresh.configs.vite,           // Regras para React Refresh no Vite
    ],
    languageOptions: {
      ecmaVersion: 2020,        // Suporte para ES2020
      globals: globals.browser, // Variáveis globais do navegador
    },
  },
])
