# Guia de Manutenção - Med Móvel Site

## 📋 Informações Cruciais para Manutenção

### 🚨 Pontos Críticos do Sistema

#### **Avatar (Assistente Virtual)**
- **Localização**: `src/components/Avatar.tsx`
- **Comportamento**: Aparece apenas no topo da página, desaparece após 100px de scroll
- **Configuração**: Mensagens definidas em `src/constants/index.ts` → `AVATAR_MESSAGES`
- **Controle**: Visibilidade gerenciada em `src/App.tsx` via `handleScroll`

#### **Lazy Loading**
- **Arquivo principal**: `src/App.tsx`
- **Componentes lazy**: SobreNos, Servicos, Contato, Footer, Avatar
- **Crítico**: Header e Hero carregam imediatamente (performance)

### 📁 Estrutura de Arquivos Importantes

```
src/
├── App.tsx                 # Arquivo principal - controla Avatar e lazy loading
├── constants/index.ts      # DADOS DA EMPRESA E CONFIGURAÇÕES
├── types/index.ts         # Tipos TypeScript centralizados
├── utils/index.ts         # Funções reutilizáveis
├── hooks/
│   └── useInView.ts       # Detecção de visibilidade (Intersection Observer)
└── components/
    ├── Avatar.tsx         # Assistente virtual com mensagens
    ├── Header.tsx         # Navegação responsiva
    ├── Hero.tsx           # Seção principal (topo)
    ├── SobreNos.tsx      # Seção sobre a empresa
    ├── Servicos.tsx      # Seções de serviços
    ├── Contato.tsx       # Formulário e informações
    └── Footer.tsx        # Rodapé
```

### ⚙️ Configurações Principais

#### **Informações da Empresa** (`src/constants/index.ts`)
```typescript
export const CONTACT_INFO = {
  phone: '(11) 91234-5678',          // ← ATUALIZAR TELEFONE
  email: 'contato@medmovel.com.br',  // ← ATUALIZAR EMAIL
  address: 'São Paulo, SP',          // ← ATUALIZAR ENDEREÇO
  instagram: 'https://...',          // ← ATUALIZAR INSTAGRAM
};

export const COMPANY_INFO = {
  name: 'Med Móvel Emergências',
  founded: 2010,                     // ← ATUALIZAR ANO FUNDAÇÃO
  slogan: 'Cuidado e Agilidade...',  // ← ATUALIZAR SLOGAN
};
```

#### **Mensagens do Avatar** (`src/constants/index.ts`)
```typescript
export const AVATAR_MESSAGES = [
  {
    id: 1,
    texto: "Olá! Bem-vindo à Med Móvel! 👋",
    duracao: 4000  // ← Tempo em millisegundos
  },
  // Adicionar/editar mensagens aqui
];
```

#### **Links de Navegação** (`src/components/Header.tsx`)
```typescript
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' }
  // ← Adicionar/remover seções aqui
];
```

### 🔧 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### 🎨 Personalização Visual

#### **Cores** (Tailwind CSS)
- **Azul primário**: `text-primary-blue` / `bg-primary-blue`
- **Vermelho destaque**: `text-accent-red` / `bg-accent-red`
- **Modo escuro**: Automático via `dark:` classes

#### **Animações**
- **Durações**: Definidas em `src/constants/index.ts` → `ANIMATION_DURATIONS`
- **CSS**: `src/index.css` contém animações customizadas

### 🚀 Deploy e Performance

#### **Otimizações Implementadas**
- Code splitting com lazy loading
- Imagens otimizadas (WebP quando possível)
- CSS minificado com Tailwind
- Tree shaking automático

#### **Arquivos de Build**
- **Gerados em**: `dist/` após `npm run build`
- **Upload**: Todo conteúdo da pasta `dist/` para servidor

### ⚠️ Cuidados Especiais

1. **Não remover** `{ passive: true }` do event listener de scroll
2. **Sempre testar** avatar em diferentes tamanhos de tela
3. **Verificar** responsividade em mobile antes de deploy
4. **Manter** estrutura de lazy loading para performance
5. **Backup** antes de alterar `src/constants/index.ts`

### 🆘 Problemas Comuns

#### **Avatar não desaparece ao rolar**
- Verificar `handleScroll` em `src/App.tsx`
- Confirmar valor `scrollY > 100` (ajustar se necessário)

#### **Imagens não carregam**
- Verificar caminhos em `src/assets/images/`
- Confirmar imports nos componentes

#### **Build falha**
- Executar `npm install` primeiro
- Verificar erros TypeScript com `npm run build`

#### **Lazy loading não funciona**
- Verificar imports `lazy()` em `src/App.tsx`
- Confirmar `<Suspense>` wrappers

### 📞 Contato para Dúvidas

Para dúvidas técnicas sobre este código, consulte a documentação do React, Vite e Tailwind CSS ou entre em contato com o desenvolvedor.

---
**Última atualização**: Setembro 2025