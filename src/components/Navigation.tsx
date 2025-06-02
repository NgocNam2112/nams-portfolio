'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home', action: scrollToTop },
    { name: 'About', id: 'about', action: () => scrollToSection('about') },
    {
      name: 'Projects',
      id: 'projects',
      action: () => scrollToSection('projects'),
    },
    {
      name: 'Contact',
      id: 'contact',
      action: () => scrollToSection('contact'),
    },
  ];

  const getNavBackground = () => {
    if (isScrolled) {
      return currentTheme.id === 'dark'
        ? 'bg-gray-900/95 backdrop-blur-sm border-gray-700'
        : 'bg-white/95 backdrop-blur-sm border-gray-200';
    }
    return 'bg-transparent border-transparent';
  };

  const getTextColor = () => {
    if (isScrolled) {
      return currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900';
    }
    return 'text-white';
  };

  const getHoverTextColor = () => {
    const themeColors = {
      purple: 'hover:text-purple-400',
      blue: 'hover:text-blue-400',
      emerald: 'hover:text-emerald-400',
      orange: 'hover:text-orange-400',
      rose: 'hover:text-rose-400',
      dark: 'hover:text-gray-400',
    };

    return (
      themeColors[currentTheme.id as keyof typeof themeColors] ||
      themeColors.purple
    );
  };

  const getAccentColor = () => {
    const themeColors = {
      purple: 'text-purple-600',
      blue: 'text-blue-600',
      emerald: 'text-emerald-600',
      orange: 'text-orange-600',
      rose: 'text-rose-600',
      dark: 'text-gray-400',
    };
    return (
      themeColors[currentTheme.id as keyof typeof themeColors] ||
      themeColors.purple
    );
  };

  const getAvatarBorderColor = () => {
    if (isScrolled) {
      return currentTheme.id === 'dark' ? 'border-gray-600' : 'border-gray-300';
    }
    return 'border-white/30';
  };

  const getAvatarRingColor = () => {
    if (isScrolled) {
      const themeColors = {
        purple: 'border-purple-400',
        blue: 'border-blue-400',
        emerald: 'border-emerald-400',
        orange: 'border-orange-400',
        rose: 'border-rose-400',
        dark: 'border-gray-400',
      };
      return (
        themeColors[currentTheme.id as keyof typeof themeColors] ||
        themeColors.purple
      );
    }
    return 'border-white/20';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b theme-transition-colors theme-transition-border ${getNavBackground()}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Avatar */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-full overflow-hidden border-2 scale-hover-md shadow-lg theme-transition-border ${getAvatarBorderColor()}`}
              >
                <Image
                  src="/avatar.svg"
                  alt="Nam Nguyen"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Small floating ring indicator */}
              <div
                className={`absolute -inset-0.5 rounded-full border opacity-50 animate-float theme-transition-border ${getAvatarRingColor()}`}
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-xl font-bold scale-hover-md theme-transition-text ${getTextColor()} ${getHoverTextColor()}`}
            >
              Nam<span className={getAccentColor()}>.</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={item.action}
                className={`scale-hover-md theme-transition-text ${getTextColor()} ${getHoverTextColor()}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden scale-hover-md theme-transition-text ${getTextColor()}`}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t transition-all duration-300 theme-transition-border theme-transition-colors ${
              currentTheme.id === 'dark'
                ? 'border-gray-700 bg-gray-900/95'
                : 'border-gray-200 bg-white/95'
            } backdrop-blur-sm`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`block w-full text-left px-3 py-2 rounded-md scale-hover-md theme-transition-text theme-transition-colors ${getTextColor()} ${getHoverTextColor()} hover:bg-gray-100/10`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
