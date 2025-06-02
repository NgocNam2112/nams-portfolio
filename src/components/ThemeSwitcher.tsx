'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  // Define icons for each theme
  const getThemeIcon = (themeId: string) => {
    const themeIcons = {
      purple: '🌌', // Galaxy/space theme
      blue: '🌊', // Ocean theme
      emerald: '🌲', // Forest theme
      orange: '🌅', // Sunset theme
      rose: '🌹', // Rose theme
      dark: '🌙', // Dark/night theme
    };
    return themeIcons[themeId as keyof typeof themeIcons] || '🎨';
  };

  const getIconColorClass = (themeId: string) => {
    const colorClasses = {
      purple: 'text-purple-500',
      blue: 'text-blue-500',
      emerald: 'text-emerald-500',
      orange: 'text-orange-500',
      rose: 'text-rose-500',
      dark: 'text-gray-500',
    };
    return (
      colorClasses[themeId as keyof typeof colorClasses] || 'text-purple-500'
    );
  };

  const getIconBackgroundClass = (themeId: string) => {
    const backgroundClasses = {
      purple: 'bg-purple-50 border-purple-200',
      blue: 'bg-blue-50 border-blue-200',
      emerald: 'bg-emerald-50 border-emerald-200',
      orange: 'bg-orange-50 border-orange-200',
      rose: 'bg-rose-50 border-rose-200',
      dark: 'bg-gray-100 border-gray-300',
    };
    return (
      backgroundClasses[themeId as keyof typeof backgroundClasses] ||
      'bg-purple-50 border-purple-200'
    );
  };

  const getActiveBackgroundClass = (themeId: string) => {
    const activeClasses = {
      purple: 'bg-purple-100 border-purple-400',
      blue: 'bg-blue-100 border-blue-400',
      emerald: 'bg-emerald-100 border-emerald-400',
      orange: 'bg-orange-100 border-orange-400',
      rose: 'bg-rose-100 border-rose-400',
      dark: 'bg-gray-200 border-gray-500',
    };
    return (
      activeClasses[themeId as keyof typeof activeClasses] ||
      'bg-purple-100 border-purple-400'
    );
  };

  return (
    <div className="fixed bottom-6 right-8 z-50 w-96 h-[425px]">
      {/* Theme Palette - Conditional rendering with animation */}
      {isOpen && (
        <div className="mb-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-gray-200 theme-transition-colors theme-transition-border scale-hover-sm animate-slide-in-right absolute w-full">
          <div className="text-sm font-semibold text-gray-700 mb-3 theme-transition-text">
            Choose Theme
          </div>
          <div className="grid grid-cols-2 gap-3">
            {themes.map((theme, index) => (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id);
                  setIsOpen(false);
                }}
                className={`p-3 rounded-xl border-2 scale-hover-md theme-transition-colors theme-transition-border animate-fade-in-up ${
                  currentTheme.id === theme.id
                    ? `${getActiveBackgroundClass(theme.id)} shadow-lg`
                    : `${getIconBackgroundClass(theme.id)} hover:shadow-md`
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`text-3xl ${getIconColorClass(theme.id)} theme-transition-colors`}
                  >
                    {getThemeIcon(theme.id)}
                  </div>
                  <span className="text-xs font-medium text-gray-700 theme-transition-text">
                    {theme.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute right-0 bottom-0 w-14 h-14 rounded-full bg-gradient-to-r ${currentTheme.colors.primary} shadow-lg hover:shadow-xl scale-hover-lg flex items-center justify-center group theme-transition-colors`}
        aria-label="Change theme"
      >
        <div key={currentTheme.id} className="text-2xl icon-rotate">
          {getThemeIcon(currentTheme.id)}
        </div>
      </button>
    </div>
  );
}
