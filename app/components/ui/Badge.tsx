import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'popular' | 'new' | 'vip' | 'online' | 'inPerson' | 'youtube';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'new',
  className = '' 
}: BadgeProps) {
  const variants = {
    popular: 'bg-purple-500 text-white',
    new: 'bg-green-500 text-white',
    vip: 'bg-primary-gold text-primary-dark',
    online: 'bg-blue-500 text-white',
    inPerson: 'bg-primary-dark text-white',
    youtube: 'bg-red-500 text-white'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
