import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react';

interface AvatarWrapperProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

const AvatarWrapper = ({ src, alt, fallback, className }: AvatarWrapperProps) => {
  return (
    <Avatar className={cn('flex-shrink-0 flex items-center justify-center', className)}>
      <AvatarImage src={src} alt={alt} className={cn('object-cover w-full rounded-full')} />
      <AvatarFallback className="text-3xl font-medium">{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarWrapper;
