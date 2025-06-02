'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { currentTheme } = useTheme();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSecondaryButtonClasses = () => {
    const themeColors = {
      purple:
        'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white',
      blue: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white',
      emerald:
        'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white',
      orange:
        'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white',
      rose: 'border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white',
      dark: 'border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black',
    };
    return (
      themeColors[currentTheme.id as keyof typeof themeColors] ||
      themeColors.purple
    );
  };

  // Show initial animation when mounted, then use scroll animation for re-entry
  const shouldShowAnimation = mounted && (heroVisible || !mounted);

  return (
    <section
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden theme-transition-bg ${currentTheme.colors.hero}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float theme-transition-colors"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float theme-transition-colors"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float theme-transition-colors"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {!mounted ? (
          // Server-side and initial client render - static content
          <div className="opacity-0">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl ${currentTheme.colors.primary} p-1`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/avatar.svg"
                      alt="Nam Nguyen"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I&apos;m <span>Nam Nguyen</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8">
              <p>Full-Stack Developer</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-3 rounded-full">View My Work</button>
              <button className="px-8 py-3 rounded-full">Get In Touch</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Tailwind CSS',
                'Python',
              ].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : (
          // Client-side rendered content with animations
          <div
            className={`transition-all duration-1000 ${
              shouldShowAnimation
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Avatar */}
            <div
              className={`mb-8 flex justify-center transition-all duration-500 ${
                shouldShowAnimation ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <div
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl scale-hover-md theme-transition-border ${currentTheme.colors.primary} p-1`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/professional-avatar.svg"
                      alt="Nam Nguyen"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Floating animation ring */}
                <div
                  className={`absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 ${currentTheme.colors.secondary} border-opacity-50 animate-float theme-transition-border`}
                ></div>
              </div>
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold text-white mb-6 theme-transition-text transition-all duration-500 ${
                shouldShowAnimation
                  ? 'animate-fade-in-up animate-stagger-1'
                  : 'opacity-0'
              }`}
            >
              Hi, I&apos;m{' '}
              <span
                className={`bg-gradient-to-r ${currentTheme.colors.secondary} bg-clip-text text-transparent theme-transition-colors`}
              >
                Nam Nguyen
              </span>
            </h1>

            <div
              className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto theme-transition-text transition-all duration-500 ${
                shouldShowAnimation
                  ? 'animate-fade-in-up animate-stagger-2'
                  : 'opacity-0'
              }`}
            >
              <p>Full-Stack Developer</p>
              <p className="text-lg mt-2 text-gray-400 theme-transition-text">
                Crafting beautiful, functional web experiences with modern
                technologies
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-500 ${
                shouldShowAnimation
                  ? 'animate-fade-in-up animate-stagger-3'
                  : 'opacity-0'
              }`}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className={`bg-gradient-to-r ${currentTheme.colors.primary} hover:shadow-lg text-white px-8 py-3 rounded-full font-semibold button-hover shadow-lg theme-transition-colors`}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`border-2 ${getSecondaryButtonClasses()} px-8 py-3 rounded-full font-semibold button-hover theme-transition-colors theme-transition-border`}
              >
                Get In Touch
              </button>
            </div>

            {/* Skills preview */}
            <div
              className={`flex flex-wrap justify-center gap-4 text-sm transition-all duration-500 ${
                shouldShowAnimation
                  ? 'animate-fade-in-up animate-stagger-4'
                  : 'opacity-0'
              }`}
            >
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Tailwind CSS',
                'Python',
              ].map((skill, index) => (
                <span
                  key={skill}
                  className={`bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 scale-hover-md cursor-default theme-transition-colors theme-transition-border transition-all duration-300 ${
                    shouldShowAnimation
                      ? 'animate-scale-in'
                      : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-700 ${
            shouldShowAnimation
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '1.2s' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center theme-transition-border">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 theme-transition-colors"></div>
          </div>
        </div>
      )}
    </section>
  );
}
