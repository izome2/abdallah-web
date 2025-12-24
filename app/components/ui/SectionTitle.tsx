import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  icon?: ReactNode;
}

export default function SectionTitle({ 
  title, 
  subtitle,
  centered = true,
  className = '',
  icon
}: SectionTitleProps) {
  const alignClass = centered ? 'text-center' : 'text-right';

  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      {icon && (
        <div className="flex justify-center mb-4">
          {icon}
        </div>
      )}
      <h2 className="text-4xl md:text-section font-bold text-primary-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
