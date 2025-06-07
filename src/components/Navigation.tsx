'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/stores/themeStore';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from '@/components/ui/drawer';
import BaseButton from './helper/BaseButton';
import { NAV_ITEMS } from '@/constants';

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  };

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

  useEffect(() => {
    console.log('isScrolled', isScrolled);
  }, [isScrolled]);

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
                  src="/avatar.jpg"
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
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                className={`scale-hover-md theme-transition-text ${getTextColor()} ${getHoverTextColor()}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu using Drawer from Top */}
          <Drawer
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
            direction="top"
          >
            <DrawerTrigger asChild>
              <button
                className={`md:hidden scale-hover-md theme-transition-text ${getTextColor()} p-2 rounded-lg relative z-50`}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 relative">
                  {/* Top line */}
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen
                        ? 'rotate-45 translate-y-2.5'
                        : 'translate-y-0'
                    }`}
                  />
                  {/* Middle line */}
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out translate-y-2 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Bottom line */}
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen
                        ? '-rotate-45 translate-y-2.5'
                        : 'translate-y-4'
                    }`}
                  />
                </div>
              </button>
            </DrawerTrigger>

            <DrawerContent
              className={`theme-transition-colors theme-transition-border ${currentTheme.colors.projects} ${
                currentTheme.id === 'dark'
                  ? 'border-gray-700'
                  : 'border-gray-200'
              } md:hidden rounded-b-2xl shadow-2xl`}
            >
              {/* Add DrawerTitle for accessibility */}
              <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>

              {/* Welcome Header */}
              <div
                className={`px-6 py-4 border-b theme-transition-border ${
                  currentTheme.id === 'dark'
                    ? 'border-gray-700'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden border-2 theme-transition-border ${
                        currentTheme.id === 'dark'
                          ? 'border-gray-600'
                          : 'border-gray-300'
                      }`}
                    >
                      <Image
                        src="/avatar.jpg"
                        alt="Nam Nguyen"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r ${currentTheme.colors.primary} border-2 ${
                        currentTheme.id === 'dark'
                          ? 'border-gray-800'
                          : 'border-white'
                      }`}
                    ></div>
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-lg ${
                        currentTheme.id === 'dark'
                          ? 'text-white'
                          : 'text-gray-900'
                      }`}
                    >
                      Hey there!
                    </h3>
                    <p
                      className={`text-sm ${
                        currentTheme.id === 'dark'
                          ? 'text-gray-400'
                          : 'text-gray-600'
                      }`}
                    >
                      Where would you like to go?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {NAV_ITEMS.map(item => {
                  return (
                    <BaseButton
                      key={item.id}
                      variant="ghost"
                      className={`w-full justify-start text-left h-auto p-4 font-medium scale-hover-sm theme-transition-colors rounded-xl group ${
                        currentTheme.id === 'dark'
                          ? 'text-white hover:bg-gray-800/60 hover:text-white'
                          : 'text-gray-900 hover:bg-gray-100/60 hover:text-gray-900'
                      } border border-transparent hover:border-current/10`}
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group-hover:scale-110 transition-transform duration-200">
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentTheme.colors.primary} theme-transition-colors`}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-base font-medium">
                            {item.name}
                          </div>
                          <div
                            className={`text-xs ${
                              currentTheme.id === 'dark'
                                ? 'text-gray-500'
                                : 'text-gray-500'
                            }`}
                          >
                            {item.label}
                          </div>
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTheme.colors.primary} theme-transition-colors opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-200`}
                        ></div>
                      </div>
                    </BaseButton>
                  );
                })}

                {/* Enhanced Close button */}
                <div className="pt-6 mt-6 border-t theme-transition-border border-gray-200 dark:border-gray-700">
                  <BaseButton
                    onClick={closeMobileMenu}
                    variant="outline"
                    className={`w-full font-medium theme-transition-colors theme-transition-border rounded-xl h-12 ${
                      currentTheme.id === 'dark'
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-gray-500'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 hover:border-gray-400'
                    } scale-hover-sm`}
                  >
                    Close Menu
                  </BaseButton>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
