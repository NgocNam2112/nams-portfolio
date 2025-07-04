'use client';

import { useState } from 'react';
import { useTheme } from '@/stores/themeStore';
import ViewDetailModal from './modal/ViewDetailModal';
import ThemeBackground from './ThemeBackground';
import ScrollIndicator from '@/app/(home)/components/ScrollIndicator';
import { HERO_SKILLS } from '@/constants';

const HomeComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { currentTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center relative overflow-hidden theme-transition-bg ${currentTheme.colors.hero}`}
    >
      <ThemeBackground />
      <div className="container mx-auto px-6 text-center z-10 pb-32 md:pb-20 2xl:pb-0">
        <ViewDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-6 theme-transition-text transition-all duration-500`}
        >
          Hi, I&apos;m{' '}
          <span
            className={`bg-gradient-to-r ${currentTheme.colors.secondary} bg-clip-text text-transparent theme-transition-colors`}
          >
            Nam Nguyen
          </span>
        </h1>

        <div
          className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto theme-transition-text transition-all duration-500`}
        >
          <p>Web Developer</p>
          <p className="text-lg mt-2 text-gray-400 theme-transition-text">
            Building responsive, high-performance web applications with
            cutting-edge technologies.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 text-sm transition-all duration-500`}
        >
          {HERO_SKILLS.map(skill => (
            <span
              key={skill}
              className={`bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 scale-hover-md cursor-default theme-transition-colors theme-transition-border transition-all duration-300`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
};

export default HomeComponent;
