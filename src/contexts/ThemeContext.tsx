'use client';

import { getItem, setItem } from '@/lib/storage';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    hero: string;
    about: string;
    projects: string;
    contact: string;
    gradient: {
      from: string;
      via?: string;
      to: string;
    };
  };
}

export const themes: Theme[] = [
  {
    id: 'purple',
    name: 'Purple Galaxy',
    colors: {
      primary: 'from-purple-600 to-pink-600',
      secondary: 'from-purple-400 to-pink-400',
      accent: 'from-purple-500 to-pink-500',
      background: 'bg-white',
      hero: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      about: 'bg-white',
      projects: 'bg-gray-50',
      contact: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      gradient: {
        from: 'slate-900',
        via: 'purple-900',
        to: 'slate-900',
      },
    },
  },
  {
    id: 'blue',
    name: 'Ocean Blue',
    colors: {
      primary: 'from-blue-600 to-cyan-600',
      secondary: 'from-blue-400 to-cyan-400',
      accent: 'from-blue-500 to-cyan-500',
      background: 'bg-white',
      hero: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      about: 'bg-white',
      projects: 'bg-blue-50',
      contact: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      gradient: {
        from: 'slate-900',
        via: 'blue-900',
        to: 'slate-900',
      },
    },
  },
  {
    id: 'emerald',
    name: 'Forest Green',
    colors: {
      primary: 'from-emerald-600 to-teal-600',
      secondary: 'from-emerald-400 to-teal-400',
      accent: 'from-emerald-500 to-teal-500',
      background: 'bg-white',
      hero: 'bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900',
      about: 'bg-white',
      projects: 'bg-emerald-50',
      contact: 'bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900',
      gradient: {
        from: 'slate-900',
        via: 'emerald-900',
        to: 'slate-900',
      },
    },
  },
  {
    id: 'orange',
    name: 'Sunset Orange',
    colors: {
      primary: 'from-orange-600 to-red-600',
      secondary: 'from-orange-400 to-red-400',
      accent: 'from-orange-500 to-red-500',
      background: 'bg-white',
      hero: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      about: 'bg-white',
      projects: 'bg-orange-50',
      contact: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      gradient: {
        from: 'slate-900',
        via: 'orange-900',
        to: 'slate-900',
      },
    },
  },
  {
    id: 'rose',
    name: 'Rose Gold',
    colors: {
      primary: 'from-rose-600 to-pink-600',
      secondary: 'from-rose-400 to-pink-400',
      accent: 'from-rose-500 to-pink-500',
      background: 'bg-white',
      hero: 'bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900',
      about: 'bg-white',
      projects: 'bg-rose-50',
      contact: 'bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900',
      gradient: {
        from: 'slate-900',
        via: 'rose-900',
        to: 'slate-900',
      },
    },
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    colors: {
      primary: 'from-gray-600 to-gray-800',
      secondary: 'from-gray-400 to-gray-600',
      accent: 'from-gray-500 to-gray-700',
      background: 'bg-gray-900',
      hero: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      about: 'bg-gray-800',
      projects: 'bg-gray-700',
      contact: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      gradient: {
        from: 'gray-900',
        via: 'gray-800',
        to: 'gray-900',
      },
    },
  },
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentThemeId, setCurrentThemeId] = useState('purple');

  const currentTheme =
    themes.find(theme => theme.id === currentThemeId) || themes[0];

  useEffect(() => {
    const savedTheme = getItem('portfolio-theme');
    if (savedTheme && themes.find(theme => theme.id === savedTheme)) {
      setCurrentThemeId(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      themes.forEach(theme => {
        document.body.classList.remove(`theme-${theme.id}`);
      });
      document.body.classList.add(`theme-${currentTheme.id}`);
    }
  }, [currentTheme.id]);

  const setTheme = (themeId: string) => {
    setCurrentThemeId(themeId);
    setItem('portfolio-theme', themeId);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
