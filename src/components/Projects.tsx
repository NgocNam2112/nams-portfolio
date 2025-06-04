'use client';

import { useTheme } from '@/stores/themeStore';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import BaseButton from './helper/BaseButton';

export default function Projects() {
  const { currentTheme } = useTheme();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const getTextColor = () => {
    return currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900';
  };

  const getSecondaryTextColor = () => {
    return currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-600';
  };

  const getTechTagClasses = () => {
    const themeMap = {
      purple:
        'bg-purple-100 text-purple-800 hover:bg-purple-200 border border-purple-200',
      blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-200',
      emerald:
        'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-200',
      orange:
        'bg-orange-100 text-orange-800 hover:bg-orange-200 border border-orange-200',
      rose: 'bg-rose-100 text-rose-800 hover:bg-rose-200 border border-rose-200',
      dark: 'bg-gray-700 text-gray-200 hover:bg-gray-600 border border-gray-600',
    };

    const themeKey = currentTheme.id as keyof typeof themeMap;
    return themeMap[themeKey] || themeMap.purple;
  };

  const getCardBackground = () => {
    return currentTheme.id === 'dark' ? 'bg-gray-800/90' : 'bg-white';
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application with user authentication, payment processing, and inventory management. Features include shopping cart, order tracking, admin dashboard, and responsive design.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Stripe',
        'PostgreSQL',
        'Tailwind CSS',
      ],
      demo: 'https://example.com',
      github: 'https://github.com/example',
      status: 'Live',
      icon: '🛒',
      category: 'Full-Stack',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces. Includes project tracking, deadline management, and team collaboration tools.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      demo: 'https://example.com',
      github: 'https://github.com/example',
      status: 'In Development',
      icon: '📋',
      category: 'Web App',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather application with location-based forecasts, interactive maps, and personalized alerts. Features 7-day forecasts, weather patterns, and location search functionality.',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'OpenWeatherMap API'],
      demo: 'https://example.com',
      github: 'https://github.com/example',
      status: 'Live',
      icon: '🌤️',
      category: 'API Integration',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media management platform with analytics, scheduling, and multi-platform integration. Features content calendar, engagement metrics, and automated posting.',
      technologies: ['React', 'Node.js', 'GraphQL', 'Redis', 'Chart.js'],
      demo: 'https://example.com',
      github: 'https://github.com/example',
      status: 'Live',
      icon: '📱',
      category: 'Dashboard',
    },
    {
      title: 'AI Chat Assistant',
      description:
        'An intelligent chat assistant powered by machine learning with natural language processing, context awareness, and multi-language support. Integrates with various APIs and databases.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Docker'],
      demo: 'https://example.com',
      github: 'https://github.com/example',
      status: 'In Development',
      icon: '🤖',
      category: 'AI/ML',
    },
  ];

  const getStatusBadgeClasses = (status: string) => {
    if (status === 'Live') {
      return 'bg-green-100 text-green-800 border border-green-200';
    }
    return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
  };

  const getCategoryColor = () => {
    const themeMap = {
      purple: 'text-purple-600',
      blue: 'text-blue-600',
      emerald: 'text-emerald-600',
      orange: 'text-orange-600',
      rose: 'text-rose-600',
      dark: 'text-gray-400',
    };

    const themeKey = currentTheme.id as keyof typeof themeMap;
    return themeMap[themeKey] || themeMap.purple;
  };

  return (
    <section
      id="projects"
      className={`py-20 transition-all duration-700 theme-transition-bg ${currentTheme.colors.projects}`}
    >
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${getTextColor()} mb-6 theme-transition-text`}
          >
            Featured Projects
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r ${currentTheme.colors.primary} mx-auto mb-6 rounded-full theme-transition-colors`}
          ></div>
          <p
            className={`text-xl ${getSecondaryTextColor()} max-w-3xl mx-auto leading-relaxed theme-transition-text`}
          >
            Discover my latest work showcasing modern web development,
            innovative solutions, and creative problem-solving across various
            technologies and platforms.
          </p>
        </div>

        {/* Projects Carousel */}
        <div ref={projectsRef} className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.title}>
                  <div
                    className={`${getCardBackground()} rounded-2xl shadow-2xl overflow-hidden border theme-transition-colors theme-transition-border ${
                      currentTheme.id === 'dark'
                        ? 'border-gray-700'
                        : 'border-gray-100'
                    } ${projectsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'} m-2`}
                  >
                    {/* Card Header */}
                    <div
                      className={`bg-gradient-to-br ${currentTheme.colors.primary} p-8 relative overflow-hidden theme-transition-bg`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 theme-transition-colors"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full transform -translate-x-10 translate-y-10 theme-transition-colors"></div>

                      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-6xl">{project.icon}</span>
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusBadgeClasses(project.status)} theme-transition-colors theme-transition-border`}
                            >
                              {project.status}
                            </span>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 theme-transition-text">
                            {project.title}
                          </h3>

                          <span
                            className={`text-sm font-medium ${getCategoryColor()} bg-white/20 px-4 py-2 rounded-full theme-transition-colors theme-transition-text`}
                          >
                            {project.category}
                          </span>
                        </div>

                        <div className="text-right hidden md:block">
                          <div className="text-white/80 text-sm mb-2">
                            Project {index + 1} of {projects.length}
                          </div>
                          <div className="flex justify-end space-x-2">
                            {projects.map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i === index ? 'bg-white' : 'bg-white/30'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <p
                            className={`${getSecondaryTextColor()} text-lg leading-relaxed mb-6 theme-transition-text`}
                          >
                            {project.description}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <BaseButton variant="primary" fullWidth>
                                Live Demo
                              </BaseButton>
                            </Link>
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <BaseButton variant="outline" fullWidth>
                                View Code
                              </BaseButton>
                            </Link>
                          </div>
                        </div>

                        <div>
                          {/* Technologies */}
                          <h4
                            className={`text-lg font-semibold ${getTextColor()} mb-4 theme-transition-text`}
                          >
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map(tech => (
                              <span
                                key={tech}
                                className={`px-4 py-2 rounded-lg text-sm font-medium ${getTechTagClasses()} scale-hover-md hover:shadow-sm theme-transition-colors theme-transition-border transition-all duration-300`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <CarouselPrevious
              className={`${getCardBackground()} ${getTextColor()} border theme-transition-colors theme-transition-border hover:shadow-lg ${
                currentTheme.id === 'dark'
                  ? 'border-gray-700 hover:bg-gray-700'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            />
            <CarouselNext
              className={`${getCardBackground()} ${getTextColor()} border theme-transition-colors theme-transition-border hover:shadow-lg ${
                currentTheme.id === 'dark'
                  ? 'border-gray-700 hover:bg-gray-700'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            />
          </Carousel>

          {/* Carousel Indicator */}
          <div className="flex justify-center items-center mt-8 gap-2">
            <div
              className={`text-sm ${getSecondaryTextColor()} theme-transition-text`}
            >
              {current} of {count}
            </div>
            <div className="flex gap-2 ml-4">
              {Array.from({ length: count }).map((_, index) => (
                <BaseButton
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  variant="ghost"
                  size="sm"
                  className={`w-3 h-3 min-w-0 min-h-0 p-0 rounded-full transition-all duration-300
                    ${
                      index === current - 1
                        ? `bg-gradient-to-r ${currentTheme.colors.primary || 'from-blue-500 to-purple-500'} shadow-lg scale-110 border border-blue-400`
                        : currentTheme.id === 'dark'
                          ? 'bg-gray-600 hover:bg-gray-500 border border-gray-500'
                          : 'bg-gray-300 hover:bg-gray-400 border border-gray-300'
                    } theme-transition-colors`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="text-center mt-4">
            <p
              className={`text-sm ${getSecondaryTextColor()} theme-transition-text`}
            >
              Use arrow buttons or drag to navigate • Click indicators to jump
              to slides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
