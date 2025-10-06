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

#### **Scroll Reveal Animations**
- **Hook principal**: `src/hooks/useScrollReveal.ts`
- **Wrapper reutilizável**: `src/components/ScrollRevealWrapper.tsx`
- **Biblioteca**: Framer Motion v12.23.22
- **Variantes disponíveis**: fadeInUp, fadeInLeft, fadeInRight, fadeInDown, scaleIn, bounceIn

### 📁 Estrutura de Arquivos Importantes

```
src/
├── App.tsx                 # Arquivo principal - controla Avatar e lazy loading
├── constants/index.ts      # DADOS DA EMPRESA E CONFIGURAÇÕES
├── types/index.ts         # Tipos TypeScript centralizados
├── utils/index.ts         # Funções reutilizáveis
├── hooks/
│   ├── useInView.ts       # Detecção de visibilidade (Intersection Observer)
│   ├── useScrollReveal.ts # Hook para animações de scroll
│   └── useContactForm.ts  # Lógica do formulário de contato
└── components/
    ├── Avatar.tsx         # Assistente virtual com mensagens
    ├── Header.tsx         # Navegação responsiva com detecção de seção ativa
    ├── Hero.tsx           # Seção principal (topo)
    ├── SobreNos.tsx      # Seção sobre a empresa
    ├── Servicos.tsx      # Seções de serviços
    ├── Contato.tsx       # Formulário e informações (refatorado)
    ├── ContactButton.tsx # Botão reutilizável para formulário
    ├── Footer.tsx        # Rodapé
    └── ScrollRevealWrapper.tsx # Wrapper para animações
```

### ⚙️ Configurações Principais

#### **Informações da Empresa** (`src/constants/index.ts`)
```typescript
export const CONTACT_INFO = {
  phone: '(11) 93279-1974',                    // ← ATUALIZAR TELEFONE
  phoneWhatsApp: '5511932791974',              // ← Formato WhatsApp
  email: 'contato@medmovelemergencias.com.br', // ← ATUALIZAR EMAIL
  address: {                                   // ← ATUALIZAR ENDEREÇO
    street: 'Rua Domingos De Morais, 2132',
    district: 'Vila Mariana, São Paulo - SP',
    full: 'Rua Domingos De Morais, 2132, Vila Mariana, São Paulo - SP'
  },
  instagram: 'https://...',                    // ← ATUALIZAR INSTAGRAM
};

export const COMPANY_INFO = {
  name: 'Med Móvel Emergências',
  founded: 2010,                               // ← ATUALIZAR ANO FUNDAÇÃO
  experience: new Date().getFullYear() - 2010, // ← Calcula automaticamente
  slogan: 'Cuidado e Agilidade...',            // ← ATUALIZAR SLOGAN
};
```

#### **Navegação** (`src/constants/index.ts`)
```typescript
export const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home', ariaLabel: 'Ir para seção inicial' },
  { href: '#sobre', label: 'Sobre Nós', ariaLabel: 'Ir para seção sobre nós' },
  { href: '#servicos', label: 'Serviços', ariaLabel: 'Ir para seção de serviços' },
  { href: '#contato', label: 'Contato', ariaLabel: 'Ir para seção de contato' }
  // ← Adicionar/remover seções aqui
];
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

### � Clean Code e Refatorações Implementadas

#### **Hooks Customizados**
- **`useContactForm.ts`**: Gerencia lógica do formulário de contato
  - Validação centralizada
  - Funções de envio (WhatsApp/Email)
  - Estado isolado e reutilizável

#### **Componentes Reutilizáveis**
- **`ContactButton.tsx`**: Botão padronizado para formulários
  - Props tipadas com TypeScript
  - Variantes de estilo (whatsapp/email)
  - Classes CSS consistentes

#### **Constantes Centralizadas**
- **Dados de contato**: Removido hardcoding, centralizados em `constants/index.ts`
- **Navegação**: Links extraídos para `NAVIGATION_ITEMS`
- **Informações da empresa**: Endereço estruturado e WhatsApp formatado

#### **Melhores Práticas Aplicadas**
- **Single Responsibility**: Cada componente tem uma responsabilidade clara
- **DRY (Don't Repeat Yourself)**: Código duplicado extraído para funções/hooks
- **Comentários JSDoc**: Documentação clara em funções importantes
- **TypeScript**: Tipagem forte para maior segurança
- **Separation of Concerns**: Lógica separada da apresentação

### �🎨 Personalização Visual

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