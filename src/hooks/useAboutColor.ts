import { Theme } from '@/stores/themeStore';
import { useMemo } from 'react';

export const useAboutColor = (currentTheme: Theme) => {
  const textColor = useMemo(() => {
    return currentTheme.id === 'dark' ? 'text-white' : 'text-gray-800';
  }, [currentTheme.id]);

  const secondaryTextColor = useMemo(() => {
    return currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-600';
  }, [currentTheme.id]);

  const cardBackground = useMemo(() => {
    return currentTheme.id === 'dark' ? 'bg-gray-800' : 'bg-white';
  }, [currentTheme.id]);

  const skillTagColors = useMemo(() => {
    return currentTheme.id === 'dark'
      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  }, [currentTheme.id]);

  const personalityTraits = [
    { emoji: '🎯', trait: 'Detail-oriented' },
    { emoji: '🚀', trait: 'Innovation-driven' },
    { emoji: '🤝', trait: 'Team player' },
    { emoji: '📚', trait: 'Continuous learner' },
  ];

  return {
    textColor,
    secondaryTextColor,
    cardBackground,
    skillTagColors,
    personalityTraits,
  };
};
