import { cn } from '@/lib/utils';
import styles from './HighlighText.module.css';
import React from 'react';

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  gradientPosition?: string;
  isActive?: boolean;
}

const HighlightText = ({
  children,
  className,
  gradientColor = '#ffe567',
  gradientPosition = '60%',
  isActive = false,
}: HighlightedTextProps) => {
  const gradientStyle = `linear-gradient(180deg,transparent ${gradientPosition},${gradientColor} ${gradientPosition})`;

  return (
    <span
      className={cn(className, styles['highlight-text'])}
      style={{
        background: isActive ? gradientStyle : '',
      }}
    >
      {children}
    </span>
  );
};

export default HighlightText;
