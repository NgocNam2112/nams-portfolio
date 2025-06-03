'use client';

import { useState, useEffect } from 'react';
import { useTheme, defaultThemes } from '@/stores/themeStore';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

  const getThemeGradient = (themeId: string) => {
    const theme = availableThemes.find(t => t.id === themeId);
    return theme?.colors.primary || 'from-purple-600 to-pink-600';
  };

  const handleThemeSelect = (themeId: string) => {
    setTheme(themeId);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-8 z-40">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="lg"
            className={`h-14 w-14 rounded-full bg-gradient-to-r ${currentTheme.colors.primary} hover:shadow-xl scale-hover-lg text-white border-0 shadow-lg`}
            aria-label="Change theme"
          >
            <div className="text-2xl icon-rotate">
              {getThemeIcon(currentTheme.id)}
            </div>
          </Button>
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
                <Button
                  key={theme.id}
                  onClick={() => handleThemeSelect(theme.id)}
                  variant={currentTheme.id === theme.id ? 'default' : 'outline'}
                  className={`h-auto p-4 flex-col gap-2 scale-hover-sm theme-transition-colors theme-transition-border ${
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
                </Button>
              ))}
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
