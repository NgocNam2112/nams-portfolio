'use client';

import { useEffect, ReactNode } from 'react';
import { useTheme } from '@/stores/themeStore';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { initializeTheme, config, getThemeClasses } = useTheme();

  useEffect(() => {
    // Initialize theme and system preferences
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    // Apply global configuration to document
    if (typeof document !== 'undefined') {
      const root = document.documentElement;

      // Apply theme classes
      const themeClasses = getThemeClasses();
      document.body.className = themeClasses;

      // Set CSS custom properties for global config
      root.style.setProperty(
        '--transition-duration',
        `${config.transitionDuration}ms`
      );

      // Handle animations preference
      if (!config.animationsEnabled) {
        root.style.setProperty('--animation-duration', '0ms');
        root.style.setProperty('--transition-duration', '0ms');
      } else {
        root.style.setProperty('--animation-duration', '1000ms');
      }

      // Handle reduced motion
      if (config.reducedMotion) {
        root.style.setProperty('--animation-duration', '0.01ms');
        root.style.setProperty('--transition-duration', '0.01ms');
      }
    }
  }, [config, getThemeClasses]);

  return <>{children}</>;
}

// Global configuration hook for components
export function useGlobalConfig() {
  return useTheme();
}
