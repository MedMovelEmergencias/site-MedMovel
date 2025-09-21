// Caminho: src/components/Loading.tsx
// Componente de loading otimizado com diferentes variações e acessibilidade
// Implementa skeleton screens e feedback visual adequado
import { memo } from 'react';
import { cn } from '../utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'skeleton' | 'pulse' | 'dots';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

// Componente Spinner
const Spinner = memo<{ size: string }>(({ size }) => (
  <div 
    className={cn(
      'animate-spin rounded-full border-b-2 border-primary-blue dark:border-white',
      size
    )}
    role="status"
    aria-label="Carregando"
  />
));
Spinner.displayName = 'Spinner';

// Componente Skeleton
const Skeleton = memo<{ className?: string }>(({ className }) => (
  <div 
    className={cn(
      'animate-pulse bg-gray-200 dark:bg-gray-700 rounded',
      className
    )}
    role="status"
    aria-label="Carregando conteúdo"
  />
));
Skeleton.displayName = 'Skeleton';

// Componente Pulse
const Pulse = memo<{ size: string }>(({ size }) => (
  <div 
    className={cn(
      'animate-pulse bg-primary-blue dark:bg-white rounded-full',
      size
    )}
    role="status"
    aria-label="Carregando"
  />
));
Pulse.displayName = 'Pulse';

// Componente Dots
const Dots = memo(() => (
  <div className="flex space-x-2" role="status" aria-label="Carregando">
    {[0, 1, 2].map((index) => (
      <div
        key={index}
        className="w-2 h-2 bg-primary-blue dark:bg-white rounded-full animate-bounce"
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    ))}
  </div>
));
Dots.displayName = 'Dots';

const Loading = memo<LoadingProps>(({
  size = 'md',
  variant = 'spinner',
  className = '',
  text,
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const containerClasses = cn(
    'flex items-center justify-center',
    fullScreen && 'fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50',
    !fullScreen && 'py-8',
    className
  );

  const renderLoadingVariant = () => {
    switch (variant) {
      case 'skeleton':
        return <Skeleton className={sizeClasses[size]} />;
      case 'pulse':
        return <Pulse size={sizeClasses[size]} />;
      case 'dots':
        return <Dots />;
      default:
        return <Spinner size={sizeClasses[size]} />;
    }
  };

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center space-y-4">
        {renderLoadingVariant()}
        {text && (
          <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
});

Loading.displayName = 'Loading';

// Componente especializado para skeleton de card
export const CardSkeleton = memo(() => (
  <div className="animate-pulse">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-48 mb-4"></div>
    <div className="space-y-3">
      <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4"></div>
      <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-1/2"></div>
      <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-2/3"></div>
    </div>
  </div>
));
CardSkeleton.displayName = 'CardSkeleton';

// Componente especializado para skeleton de texto
export const TextSkeleton = memo<{ lines?: number }>(({ lines = 3 }) => (
  <div className="animate-pulse space-y-2">
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={cn(
          'bg-gray-200 dark:bg-gray-700 h-4 rounded',
          index === lines - 1 ? 'w-2/3' : 'w-full'
        )}
      />
    ))}
  </div>
));
TextSkeleton.displayName = 'TextSkeleton';

export default Loading;