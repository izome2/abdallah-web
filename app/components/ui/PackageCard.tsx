import { ReactNode } from 'react';
import { CheckCircle, LucideIcon } from 'lucide-react';
import Button from './Button';

interface PackageCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  price: string;
  buttonText: string;
  gradient?: 'gold-to-dark' | 'dark-to-gold';
  onButtonClick?: () => void;
  className?: string;
}

export default function PackageCard({
  icon: Icon,
  title,
  features,
  price,
  buttonText,
  gradient = 'gold-to-dark',
  onButtonClick,
  className = ''
}: PackageCardProps) {
  const gradientClasses = {
    'gold-to-dark': 'bg-gradient-to-br from-primary-gold via-[#c9a676] to-primary-dark',
    'dark-to-gold': 'bg-gradient-to-br from-primary-dark via-[#1d4841] to-primary-gold'
  };

  return (
    <div className={`${gradientClasses[gradient]} rounded-card-2xl p-8 md:p-10 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${className}`}>
      {/* الأيقونة */}
      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Icon className="w-10 h-10" strokeWidth={1.5} />
        </div>
      </div>

      {/* العنوان */}
      <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
        {title}
      </h3>

      {/* قائمة المميزات */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 shrink-0 mt-0.5" strokeWidth={2} />
            <span className="text-white/90 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* السعر */}
      <div className="mb-6 pb-6 border-t border-white/20 pt-6">
        <p className="text-3xl font-bold">{price}</p>
      </div>

      {/* الزر */}
      <Button
        variant="secondary"
        size="lg"
        fullWidth
        onClick={onButtonClick}
        className="bg-white! text-primary-dark! hover:bg-white/90! border-0!"
      >
        {buttonText}
      </Button>
    </div>
  );
}
