import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SocialLinks({ 
  variant = 'dark',
  size = 'md',
  className = '' 
}: SocialLinksProps) {
  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  };

  const colorClass = variant === 'light' 
    ? 'text-white hover:text-primary-gold' 
    : 'text-primary-dark hover:text-primary-gold';

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${colorClass} transition-colors duration-300`}
          aria-label={social.name}
        >
          <social.icon className={iconSizes[size]} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
