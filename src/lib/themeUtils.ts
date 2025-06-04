export const getThemeIcon = (themeId: string) => {
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

export const getThemeGradient = (themeId: string) => {
  const themeGradients = {
    purple: 'from-purple-600 to-pink-600',
    blue: 'from-blue-600 to-cyan-600',
    emerald: 'from-emerald-600 to-teal-600',
    orange: 'from-orange-600 to-amber-600',
    rose: 'from-rose-600 to-pink-600',
    dark: 'from-gray-600 to-gray-800',
  };
  return (
    themeGradients[themeId as keyof typeof themeGradients] ||
    'from-purple-600 to-pink-600'
  );
};
