import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  border?: boolean;
}

export default function Card({ 
  children,
  className = '',
  padding = 'md',
  hover = true,
  border = false
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-10'
  };

  const hoverClass = hover ? 'hover:-translate-y-2 hover:shadow-lg transition-all duration-300' : '';
  const borderClass = border ? 'border border-primary-light' : '';

  return (
    <div className={`bg-white rounded-card shadow-card ${paddingClasses[padding]} ${hoverClass} ${borderClass} ${className}`}>
      {children}
    </div>
  );
}
