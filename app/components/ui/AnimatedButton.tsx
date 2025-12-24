'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { buttonHover } from './animations';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function AnimatedButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}: AnimatedButtonProps) {
  const baseClasses = 'font-semibold rounded-xl transition-colors duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-[#edbf8c] text-[#10302b] hover:bg-[#d9a870] shadow-[0_4px_12px_rgba(237,191,140,0.3)] hover:shadow-[0_6px_20px_rgba(237,191,140,0.4)]',
    secondary: 'bg-transparent text-[#10302b] border-2 border-[#10302b] hover:bg-[#10302b] hover:text-white',
    ghost: 'bg-transparent text-[#10302b] hover:bg-[#f8f5f0]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <motion.button
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
