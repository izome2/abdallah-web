import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  icon = false,
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-gold text-primary-dark hover:bg-gold-hover shadow-gold hover:shadow-gold-hover hover:-translate-y-0.5',
    secondary: 'bg-transparent text-primary-dark border-2 border-primary-dark hover:bg-primary-dark hover:text-white',
    ghost: 'bg-transparent text-primary-dark hover:bg-background-light'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5" strokeWidth={2} />}
    </button>
  );
}
