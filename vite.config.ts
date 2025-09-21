// Arquivo de configuração do Vite otimizado para performance máxima em produção
// Implementa code splitting, tree shaking, compressão e otimizações avançadas
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Configuração principal do Vite com otimizações para performance
export default defineConfig({
  plugins: [
    react(), // Configuração padrão do React plugin
  ],
  
  // Configurações de resolução
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },

  // Otimizações de build
  build: {
    // Compressão máxima
    minify: 'terser',
    
    // Code splitting otimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendors principais
          'vendor-react': ['react', 'react-dom'],
          'vendor-lottie': ['lottie-react'],
          
          // Componentes por funcionalidade
          'components-ui': [
            './src/components/ThemeSwitcher.tsx',
            './src/components/Loading.tsx',
          ],
          'components-sections': [
            './src/components/SobreNos.tsx',
            './src/components/Servicos.tsx',
            './src/components/Contato.tsx',
          ],
        },
        // Nomes de arquivo com hash para cache busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    
    // Otimizações de tamanho
    cssCodeSplit: true,
    sourcemap: false, // Desabilita sourcemaps em produção
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    
    // Target para melhor compatibilidade
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },

  // Otimizações de desenvolvimento
  server: {
    hmr: {
      overlay: false, // Remove overlay de erros para melhor experiência
    },
  },

  // Pre-bundling de dependências
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lottie-react',
    ],
    exclude: ['@types/node'],
  },

  // Configurações de CSS
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      // Configurações adicionais se necessário
    },
  },

  // Meta informações para PWA (se implementado futuramente)
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
});
