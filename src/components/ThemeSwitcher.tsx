'use client';

import { useState, useEffect } from 'react';
import { useTheme, defaultThemes } from '@/stores/themeStore';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BaseButton from './helper/BaseButton';
import { getThemeIcon, getThemeGradient } from '@/lib/themeUtils';

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  // Use defaultThemes as fallback if themes array is empty
  const availableThemes = themes && themes.length > 0 ? themes : defaultThemes;

  useEffect(() => {
    console.log('ThemeSwitcher Debug:');
    console.log('- Available themes:', availableThemes);
    console.log('- Current theme:', currentTheme);
    console.log('- Themes from store:', themes);
  }, [availableThemes, currentTheme, themes]);

  const handleThemeSelect = (themeId: string) => {
    setTheme(themeId);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-8 z-40">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <BaseButton size="lg" className="h-14 w-14 rounded-full">
            <div className="text-2xl icon-rotate">
              {getThemeIcon(currentTheme.id)}
            </div>
          </BaseButton>
        </PopoverTrigger>

        <PopoverContent
          className={`w-80 p-0 theme-transition-colors theme-transition-border ${currentTheme.colors.projects} ${
            currentTheme.id === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}
          side="left"
          align="end"
        >
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="pb-3">
              <CardTitle
                className={`text-lg font-semibold theme-transition-text ${
                  currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Choose Theme
              </CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-2 gap-3">
              {availableThemes.map((theme, index) => (
                <BaseButton
                  key={theme.id}
                  onClick={() => handleThemeSelect(theme.id)}
                  variant={currentTheme.id === theme.id ? 'primary' : 'outline'}
                  className={`h-auto p-4 flex-col gap-2 scale-hover-sm ${
                    currentTheme.id === theme.id
                      ? `bg-gradient-to-r ${getThemeGradient(theme.id)} text-white border-0 shadow-md`
                      : `${currentTheme.id === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="text-2xl">{getThemeIcon(theme.id)}</div>
                  <div className="text-xs font-medium text-center">
                    {theme.name}
                  </div>
                  {currentTheme.id === theme.id && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/20 text-white border-0 mt-1"
                    >
                      Active
                    </Badge>
                  )}
                </BaseButton>
              ))}
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
