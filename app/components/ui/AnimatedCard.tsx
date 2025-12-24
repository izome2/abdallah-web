'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cardHover } from './animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  withHover?: boolean;
}

export default function AnimatedCard({ 
  children, 
  className = '',
  withHover = true 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      variants={withHover ? cardHover : undefined}
      initial={withHover ? "rest" : undefined}
      whileHover={withHover ? "hover" : undefined}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
