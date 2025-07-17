import React from 'react';

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  gradientPosition?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  children,
  className = '',
  gradientColor = '#ffe567',
  gradientPosition = '60%',
}) => {
  const gradientStyle = `linear-gradient(180deg,transparent ${gradientPosition},${gradientColor} ${gradientPosition})`;

  return (
    <span className={`bg-[${gradientStyle}] ${className}`} style={{ background: gradientStyle }}>
      {children}
    </span>
  );
};

export default HighlightedText;
