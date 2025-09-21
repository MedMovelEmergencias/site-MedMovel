// Tipos TypeScript centralizados - ADICIONAR NOVOS TIPOS AQUI
// Facilita manutenção e garante type safety

export interface NavItem {
  href: string;
  label: string;
  ariaLabel?: string;
}

export interface Message {
  id: number;
  texto: string;
  duracao: number;
}

export interface ServiceItem {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType;
}

export type Theme = 'light' | 'dark';

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

// Props interfaces para melhor tipagem de componentes
export interface AvatarProps {
  messages?: Message[];
  className?: string;
}

export interface ThemeSwitcherProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface HeaderProps {
  className?: string;
  navItems?: NavItem[];
}