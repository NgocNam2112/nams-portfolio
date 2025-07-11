import React from 'react';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-700 ${className}`}
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center theme-transition-border">
        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 theme-transition-colors"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
