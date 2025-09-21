// Constantes centralizadas - EDITAR AQUI para alterar valores globais
// Evita magic numbers e facilita manutenção

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  extraSlow: 1000,
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  overlay: 50,
  tooltip: 60,
} as const;

export const LOCAL_STORAGE_KEYS = {
  theme: 'med-movel-theme',
  userPreferences: 'med-movel-preferences',
} as const;

export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
} as const;

// INFORMAÇÕES DA EMPRESA - Atualizar aqui dados de contato e empresa
export const CONTACT_INFO = {
  phone: '(11) 91234-5678',
  email: 'contato@medmovel.com.br',
  address: 'São Paulo, SP',
  instagram: 'https://www.instagram.com/medmovelemergencias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
} as const;

export const COMPANY_INFO = {
  name: 'Med Móvel Emergências',
  founded: 2010,
  experience: new Date().getFullYear() - 2010, // Calcula automaticamente
  slogan: 'Cuidado e Agilidade que Salvam Vidas, 24 Horas por Dia',
} as const;

// MENSAGENS DO AVATAR - Editar aqui para alterar diálogos
export const AVATAR_MESSAGES = [
  {
    id: 1,
    texto: "Olá! Bem-vindo à Med Móvel! 👋",
    duracao: 4000
  },
  {
    id: 2,
    texto: `Somos especialistas em atendimento pré-hospitalar há mais de ${COMPANY_INFO.experience} anos! 🚑`,
    duracao: 5000
  },
  {
    id: 3,
    texto: "Nossa equipe está disponível 24h para emergências e transporte médico.",
    duracao: 5000
  },
  {
    id: 4,
    texto: "Precisa de ajuda? Fale conosco! Nossa prioridade é cuidar de você. ❤️",
    duracao: 0 // Última mensagem permanece visível
  }
] as const;

export const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home', ariaLabel: 'Ir para seção inicial' },
  { href: '#sobre', label: 'Sobre Nós', ariaLabel: 'Ir para seção sobre nós' },
  { href: '#servicos', label: 'Serviços', ariaLabel: 'Ir para seção de serviços' },
  { href: '#contato', label: 'Contato', ariaLabel: 'Ir para seção de contato' }
] as const;