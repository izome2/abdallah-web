import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  date: string;
  className?: string;
}

export default function TestimonialCard({ 
  text, 
  name, 
  role, 
  date,
  className = '' 
}: TestimonialCardProps) {
  return (
    <div className={`bg-white rounded-xl p-7 shadow-card border-r-4 border-primary-gold relative ${className}`}>
      {/* علامة الاقتباس */}
      <Quote className="w-10 h-10 text-primary-gold opacity-20 absolute top-4 right-4" strokeWidth={3} />
      
      {/* نص الشهادة */}
      <p className="text-gray-700 text-base leading-relaxed mb-6 relative z-10 font-medium">
        "{text}"
      </p>
      
      {/* معلومات العميل */}
      <div className="border-t border-gray-100 pt-4">
        <h4 className="font-bold text-primary-dark text-lg mb-1">{name}</h4>
        <p className="text-gray-600 text-sm font-light mb-1">{role}</p>
        <p className="text-gray-400 text-xs">{date}</p>
      </div>
    </div>
  );
}
