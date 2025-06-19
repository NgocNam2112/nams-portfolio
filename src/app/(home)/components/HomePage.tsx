'use client';

import { useState } from 'react';
import { useTheme } from '@/stores/themeStore';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ProfileModal from './modals/ProfileModal';
import { Button } from '@/components/ui/button';
import ScrollIndicator from '@/components/helper/ScrollIndicator';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const { currentTheme } = useTheme();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden theme-transition-bg ${currentTheme.colors.hero}`}
    >
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

      <div className="container mx-auto px-6 text-center relative z-10 pb-32 md:pb-20 2xl:pb-0">
        <div
          className={`transition-all duration-1000 ${
            heroVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <ProfileModal />

          <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-6 theme-transition-text transition-all duration-500 ${
              heroVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'
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
              heroVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'
            }`}
          >
            <p>Web Developer</p>
            <p className="text-lg mt-2 text-gray-400 theme-transition-text">
              Building responsive, high-performance web applications with
              cutting-edge technologies.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-500 ${
              heroVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'
            }`}
          >
            <Button variant="primary" size="lg" className="rounded-full">
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm"
            >
              Get In Touch
            </Button>
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10"
                >
                  About Me
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </div>

      <ScrollIndicator heroVisible={heroVisible} />
    </section>
  );
}
