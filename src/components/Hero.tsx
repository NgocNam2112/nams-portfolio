'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/stores/themeStore';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BaseButton from './helper/BaseButton';
import { EXPERTISE_AREAS, HERO_SKILLS } from '@/constants';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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

      <div className="container mx-auto px-6 text-center relative z-10 pb-32 md:pb-20 2xl:pb-0">
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
                      src="/avatar.jpg"
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
              <p>Web Developer</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-3 rounded-full">View My Work</button>
              <button className="px-8 py-3 rounded-full">Get In Touch</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {HERO_SKILLS.map(skill => (
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
            {/* Avatar with Dialog Trigger */}
            <div
              className={`mb-8 flex justify-center mt-20 md:mt-10 xl:mt-0 transition-all duration-500 ${
                shouldShowAnimation ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                  <DialogTrigger asChild>
                    <BaseButton
                      variant="ghost"
                      className="p-0 h-auto w-auto rounded-full hover:bg-transparent group hover:shadow-lg text-white font-semibold button-hover theme-transition-colors"
                    >
                      <div
                        className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl theme-transition-border group-hover:border-white/40 group-hover:shadow-3xl transition-all duration-200 ease-out group-hover:scale-105 ${currentTheme.colors.primary} p-1`}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <Image
                            src="/avatar.jpg"
                            alt="Nam Nguyen - Click to learn more"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>
                      </div>
                      {/* Floating animation ring */}
                      <div
                        className={`absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 ${currentTheme.colors.secondary} border-opacity-30 animate-float theme-transition-border transition-opacity duration-200 ease-out group-hover:border-opacity-60`}
                      ></div>
                    </BaseButton>
                  </DialogTrigger>
                  <DialogContent
                    className={`sm:max-w-[600px] max-h-[80vh] p-0 flex flex-col theme-transition-colors theme-transition-border ${currentTheme.colors.projects} ${
                      currentTheme.id === 'dark'
                        ? 'border-gray-700'
                        : 'border-gray-200'
                    }`}
                  >
                    {/* Sticky Header */}
                    <div
                      className={`sticky top-0 z-10 px-6 py-4 border-b theme-transition-colors theme-transition-border ${
                        currentTheme.id === 'dark'
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <DialogHeader>
                        <DialogTitle
                          className={`text-2xl font-bold theme-transition-text ${currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                          About Nam Nguyen
                        </DialogTitle>
                        <DialogDescription
                          className={`text-base theme-transition-text ${currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          Passionate Full-Stack Developer crafting digital
                          experiences
                        </DialogDescription>
                      </DialogHeader>
                    </div>

                    {/* Scrollable Content */}
                    <div className="px-6 py-4 pb-8 flex-1 overflow-y-auto">
                      <div className="space-y-6 pb-4">
                        {/* Profile Section */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                          <div className="flex-shrink-0">
                            <BaseButton
                              variant="ghost"
                              className="p-0 h-auto w-auto rounded-full hover:bg-transparent"
                              onClick={() => scrollToSection('hero')}
                            >
                              <div
                                className={`w-20 h-20 rounded-full overflow-hidden border-2 scale-hover-sm theme-transition-border ${currentTheme.id === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}
                              >
                                <Image
                                  src="/avatar.jpg"
                                  alt="Nam Nguyen"
                                  width={80}
                                  height={80}
                                  className="w-full h-full object-cover"
                                  priority
                                />
                              </div>
                            </BaseButton>
                          </div>
                          <div className="text-center sm:text-left">
                            <h3
                              className={`text-lg font-semibold theme-transition-text ${currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'}`}
                            >
                              Nam Nguyen
                            </h3>
                            <p
                              className={`bg-gradient-to-r ${currentTheme.colors.secondary} bg-clip-text text-transparent font-medium theme-transition-colors`}
                            >
                              Web Developer
                            </p>
                            <p
                              className={`text-sm mt-1 theme-transition-text ${currentTheme.id === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                            >
                              Building responsive, high-performance web
                              applications with cutting-edge technologies.
                            </p>
                          </div>
                        </div>

                        {/* About Text */}
                        <div className="space-y-3">
                          <p
                            className={`text-sm leading-relaxed theme-transition-text ${currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                          >
                            I&apos;m a passionate web developer with expertise
                            in modern frontend and backend technologies. I love
                            creating intuitive user experiences and building
                            scalable applications that solve real-world
                            problems.
                          </p>
                          <p
                            className={`text-sm leading-relaxed theme-transition-text ${currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                          >
                            When I&apos;m not coding, you&apos;ll find me
                            exploring new technologies, contributing to
                            open-source projects, or sharing knowledge with the
                            developer community.
                          </p>
                        </div>

                        {/* Expertise Areas */}
                        <div className="space-y-4">
                          <h4
                            className={`font-semibold text-base theme-transition-text ${currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'}`}
                          >
                            Areas of Expertise
                          </h4>
                          {EXPERTISE_AREAS.map((area, index) => (
                            <Card
                              key={index}
                              className={`p-4 scale-hover-sm theme-transition-colors theme-transition-border ${currentTheme.id === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200 shadow-sm'}`}
                            >
                              <CardHeader className="p-0 pb-3">
                                <CardTitle
                                  className={`text-sm font-medium theme-transition-text ${currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'}`}
                                >
                                  {area.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                <div className="flex flex-wrap gap-2">
                                  {area.skills.map(skill => (
                                    <Badge
                                      key={skill}
                                      className={`text-xs scale-hover-sm theme-transition-colors bg-gradient-to-r ${currentTheme.colors.primary} text-white border-0 hover:shadow-md`}
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <BaseButton
                            onClick={() => {
                              scrollToSection('projects');
                              setModalOpen(false);
                            }}
                            variant="primary"
                            fullWidth
                          >
                            View My Projects
                          </BaseButton>
                          <BaseButton
                            variant="outline"
                            onClick={() => {
                              scrollToSection('contact');
                              setModalOpen(false);
                            }}
                            fullWidth
                          >
                            Get In Touch
                          </BaseButton>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
              <p>Web Developer</p>
              <p className="text-lg mt-2 text-gray-400 theme-transition-text">
                Building responsive, high-performance web applications with
                cutting-edge technologies.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-500 ${
                shouldShowAnimation
                  ? 'animate-fade-in-up animate-stagger-3'
                  : 'opacity-0'
              }`}
            >
              <BaseButton
                onClick={() => scrollToSection('projects')}
                variant="primary"
                size="lg"
                className="px-12 py-6 rounded-full"
              >
                View My Work
              </BaseButton>
              <BaseButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-12 py-6 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                Get In Touch
              </BaseButton>
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger asChild>
                  <BaseButton
                    variant="outline"
                    size="lg"
                    className="px-12 py-6 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10"
                  >
                    About Me
                  </BaseButton>
                </DialogTrigger>
              </Dialog>
            </div>

            {/* Skills preview */}
            <div
              className={`flex flex-wrap justify-center gap-4 text-sm transition-all duration-500 ${
                shouldShowAnimation
                  ? 'animate-fade-in-up animate-stagger-4'
                  : 'opacity-0'
              }`}
            >
              {HERO_SKILLS.map((skill, index) => (
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
