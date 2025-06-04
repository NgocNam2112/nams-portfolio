import { ButtonHTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/stores/themeStore';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const BaseButton = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  ...props
}: BaseButtonProps) => {
  const { currentTheme } = useTheme();

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return `bg-gradient-to-r ${currentTheme.colors.primary} hover:shadow-xl text-white`;
      case 'secondary':
        return `bg-gradient-to-r ${currentTheme.colors.secondary} hover:shadow-xl text-white`;
      case 'outline':
        return 'bg-transparent border border-white/20 hover:bg-white/10 text-white';
      case 'ghost':
        return 'bg-transparent hover:bg-white/10 text-white';
      default:
        return `bg-gradient-to-r ${currentTheme.colors.primary} hover:shadow-xl text-white`;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-2 px-4 text-sm';
      case 'md':
        return 'py-3 px-6 text-base';
      case 'lg':
        return 'py-4 px-8 text-lg';
      default:
        return 'py-3 px-6 text-base';
    }
  };

  return (
    <Button
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${fullWidth ? 'w-full' : ''}
        rounded-lg font-semibold
        button-hover shadow-lg
        theme-transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default BaseButton;
