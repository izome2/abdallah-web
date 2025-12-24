import Image from 'next/image';
import { Star, Clock, Calendar } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';

interface ServiceCardProps {
  image: string;
  badge?: string;
  badgeVariant?: 'popular' | 'new' | 'vip' | 'online' | 'inPerson';
  rating: number;
  reviewCount: number;
  title: string;
  description: string;
  duration: string;
  availability: string;
  price: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function ServiceCard({
  image,
  badge,
  badgeVariant = 'new',
  rating,
  reviewCount,
  title,
  description,
  duration,
  availability,
  price,
  buttonText,
  onButtonClick,
  className = ''
}: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-card-lg shadow-card overflow-hidden group hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ${className}`}>
      {/* الصورة */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}
      </div>

      {/* المحتوى */}
      <div className="p-6">
        {/* التقييم */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-primary-gold fill-primary-gold' : 'text-gray-300'}`}
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {rating} ({reviewCount}+ عميل)
          </span>
        </div>

        {/* العنوان */}
        <h3 className="text-xl font-bold text-primary-dark mb-3 line-clamp-2">
          {title}
        </h3>

        {/* الوصف */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* المدة والتاريخ */}
        <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-primary-gold" strokeWidth={2} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-primary-gold" strokeWidth={2} />
            <span>{availability}</span>
          </div>
        </div>

        {/* السعر والزر */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-2xl font-bold text-primary-dark">{price}</span>
          </div>
          <Button 
            variant="primary" 
            size="sm"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
