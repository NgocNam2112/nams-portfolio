import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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

export interface GlobalConfig {
  animationsEnabled: boolean;
  reducedMotion: boolean;
  autoThemeTransition: boolean;
  transitionDuration: number;
  prefersDarkMode: boolean;
}

export interface ThemeState {
  // Current theme
  currentTheme: Theme;
  themes: Theme[];

  // Global configuration
  config: GlobalConfig;

  // Theme management actions
  setTheme: (themeId: string) => void;
  getThemeById: (themeId: string) => Theme | undefined;
  addCustomTheme: (theme: Theme) => void;
  removeCustomTheme: (themeId: string) => void;

  // Configuration actions
  updateConfig: (config: Partial<GlobalConfig>) => void;
  toggleAnimations: () => void;
  setTransitionDuration: (duration: number) => void;
  resetConfig: () => void;

  // Utility actions
  getThemeClasses: () => string;
  initializeTheme: () => void;
}

export const defaultThemes: Theme[] = [
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

const defaultConfig: GlobalConfig = {
  animationsEnabled: true,
  reducedMotion: false,
  autoThemeTransition: true,
  transitionDuration: 300,
  prefersDarkMode: false,
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      currentTheme: defaultThemes[0],
      themes: defaultThemes,
      config: defaultConfig,

      setTheme: (themeId: string) => {
        const theme = get().getThemeById(themeId);
        if (theme) {
          set({ currentTheme: theme });

          // Apply theme to DOM
          if (typeof document !== 'undefined') {
            // Remove all theme classes
            get().themes.forEach(t => {
              document.body.classList.remove(`theme-${t.id}`);
            });
            // Add current theme class
            document.body.classList.add(`theme-${theme.id}`);

            // Update CSS custom properties for dynamic theming
            const root = document.documentElement;
            root.style.setProperty('--theme-primary', theme.colors.primary);
            root.style.setProperty('--theme-secondary', theme.colors.secondary);
            root.style.setProperty('--theme-accent', theme.colors.accent);
          }
        }
      },

      getThemeById: (themeId: string) => {
        return get().themes.find(theme => theme.id === themeId);
      },

      addCustomTheme: (theme: Theme) => {
        set(state => ({
          themes: [...state.themes, theme],
        }));
      },

      removeCustomTheme: (themeId: string) => {
        set(state => ({
          themes: state.themes.filter(theme => theme.id !== themeId),
        }));
      },

      updateConfig: (newConfig: Partial<GlobalConfig>) => {
        set(state => ({
          config: { ...state.config, ...newConfig },
        }));
      },

      toggleAnimations: () => {
        set(state => ({
          config: {
            ...state.config,
            animationsEnabled: !state.config.animationsEnabled,
          },
        }));
      },

      setTransitionDuration: (duration: number) => {
        set(state => ({
          config: { ...state.config, transitionDuration: duration },
        }));
      },

      resetConfig: () => {
        set({ config: defaultConfig });
      },

      getThemeClasses: () => {
        const { currentTheme, config } = get();
        const classes = [`theme-${currentTheme.id}`];

        if (!config.animationsEnabled) {
          classes.push('no-animations');
        }

        if (config.reducedMotion) {
          classes.push('reduce-motion');
        }

        return classes.join(' ');
      },

      initializeTheme: () => {
        const { currentTheme } = get();

        if (typeof window !== 'undefined') {
          // Check for system dark mode preference
          const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches;
          const systemPrefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches;

          // Update config based on system preferences
          set(state => ({
            config: {
              ...state.config,
              prefersDarkMode: systemPrefersDark,
              reducedMotion: systemPrefersReducedMotion,
              animationsEnabled: !systemPrefersReducedMotion,
            },
          }));

          // Auto-switch to dark theme if user prefers dark mode and no theme is set
          if (systemPrefersDark && currentTheme.id === 'purple') {
            get().setTheme('dark');
          }
        }
      },
    }),
    {
      name: 'portfolio-theme-store',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        currentTheme: state.currentTheme,
        config: state.config,
        // Don't persist themes - always use defaultThemes + custom themes
      }),
      onRehydrateStorage: () => state => {
        // Ensure themes are always available after rehydration
        if (state) {
          const customThemes =
            state.themes?.filter(
              theme => !defaultThemes.find(dt => dt.id === theme.id)
            ) || [];
          state.themes = [...defaultThemes, ...customThemes];
        }
      },
    }
  )
);

// Hook for easy access to theme store
export const useTheme = () => {
  const store = useThemeStore();

  // Initialize theme on first render
  if (typeof window !== 'undefined' && !store.currentTheme) {
    store.initializeTheme();
  }

  return store;
};

// Selector hooks for specific parts of the store
export const useCurrentTheme = () => useThemeStore(state => state.currentTheme);
export const useThemeConfig = () => useThemeStore(state => state.config);
export const useThemeActions = () =>
  useThemeStore(state => ({
    setTheme: state.setTheme,
    updateConfig: state.updateConfig,
    toggleAnimations: state.toggleAnimations,
  }));
