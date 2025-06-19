import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';
import { useTheme } from '@/stores/themeStore';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { asChild?: boolean }
>(
  (
    { className, variant, size, fullWidth = false, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

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
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(
          getVariantClasses(),
          getSizeClasses(),
          fullWidth ? 'w-full' : '',
          'rounded-lg font-semibold',
          'button-hover shadow-lg',
          'theme-transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
