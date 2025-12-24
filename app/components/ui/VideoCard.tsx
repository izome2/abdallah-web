import Image from 'next/image';
import { Play, Eye } from 'lucide-react';
import Badge from './Badge';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  views: string;
  videoUrl?: string;
  className?: string;
}

export default function VideoCard({
  thumbnail,
  title,
  duration,
  views,
  videoUrl = '#',
  className = ''
}: VideoCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-card overflow-hidden group hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ${className}`}>
      {/* صورة الفيديو المصغرة */}
      <div className="relative h-48 overflow-hidden cursor-pointer">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
        
        {/* زر التشغيل */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-primary-dark fill-primary-dark -mr-0.75" />
          </div>
        </div>

        {/* Badge YouTube */}
        <div className="absolute top-3 left-3">
          <Badge variant="youtube">YouTube</Badge>
        </div>

        {/* المدة */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>

      {/* المحتوى */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary-dark mb-3 line-clamp-2 leading-snug">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Eye className="w-4 h-4" strokeWidth={2} />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
}
