'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Projects() {
  const { currentTheme } = useTheme();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const sliderRef = useRef<Slider>(null);

  const getButtonHoverClasses = (variant: 'primary' | 'secondary') => {
    const themeMap = {
      purple: {
        primary:
          'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-purple-500/25',
        secondary:
          'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white hover:shadow-purple-400/25',
      },
      blue: {
        primary:
          'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/25',
        secondary:
          'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-blue-400/25',
      },
      emerald: {
        primary:
          'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-emerald-500/25',
        secondary:
          'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white hover:shadow-emerald-400/25',
      },
      orange: {
        primary:
          'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-orange-500/25',
        secondary:
          'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white hover:shadow-orange-400/25',
      },
      rose: {
        primary:
          'bg-rose-600 hover:bg-rose-700 text-white hover:shadow-rose-500/25',
        secondary:
          'border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white hover:shadow-rose-400/25',
      },
      dark: {
        primary:
          'bg-gray-600 hover:bg-gray-700 text-white hover:shadow-gray-500/25',
        secondary:
          'border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black hover:shadow-gray-400/25',
      },
    };

    const themeKey = currentTheme.id as keyof typeof themeMap;
    return themeMap[themeKey]?.[variant] || themeMap.purple[variant];
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

  const getTextColor = () => {
    return currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900';
  };

  const getSecondaryTextColor = () => {
    return currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-600';
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

  // Custom Arrow Components
  const CustomPrevArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full ${getCardBackground()} shadow-lg hover:shadow-xl scale-hover-md theme-transition-colors transition-all duration-300 group ${
          currentTheme.id === 'dark'
            ? 'border border-gray-700'
            : 'border border-gray-200'
        }`}
      >
        <svg
          className={`w-6 h-6 ${getTextColor()} theme-transition-text group-hover:scale-110 transition-transform duration-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  const CustomNextArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full ${getCardBackground()} shadow-lg hover:shadow-xl scale-hover-md theme-transition-colors transition-all duration-300 group ${
          currentTheme.id === 'dark'
            ? 'border border-gray-700'
            : 'border border-gray-200'
        }`}
      >
        <svg
          className={`w-6 h-6 ${getTextColor()} theme-transition-text group-hover:scale-110 transition-transform duration-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: () => (
      <button
        className={`w-4 h-4 rounded-full transition-all duration-300 ${`bg-gradient-to-r ${currentTheme.colors.primary} shadow-lg`} theme-transition-colors hover:scale-110`}
      />
    ),
    dotsClass: 'slick-dots custom-dots',
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
        <div ref={projectsRef} className="max-w-6xl mx-auto relative">
          <style jsx global>{`
            .slick-dots {
              bottom: -60px !important;
            }
            .slick-dots li {
              margin: 0 6px !important;
            }
            .slick-dots li button:before {
              display: none !important;
            }
            .slick-dots li.slick-active button {
              transform: scale(1.25) !important;
            }
            .custom-dots li button {
              width: 16px !important;
              height: 16px !important;
              border-radius: 50% !important;
              transition: all 0.3s ease !important;
            }
            .custom-dots li:not(.slick-active) button {
              background: ${currentTheme.id === 'dark'
                ? '#4B5563'
                : '#D1D5DB'} !important;
              transform: scale(1) !important;
            }
            .slick-slide > div {
              padding: 0 12px;
            }
          `}</style>

          <Slider ref={sliderRef} {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={project.title}>
                <div
                  className={`${getCardBackground()} rounded-2xl shadow-2xl overflow-hidden border theme-transition-colors theme-transition-border ${
                    currentTheme.id === 'dark'
                      ? 'border-gray-700'
                      : 'border-gray-100'
                  } ${projectsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
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
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 px-6 py-3 rounded-xl text-sm font-semibold text-center button-hover hover:shadow-lg ${getButtonHoverClasses('primary')} theme-transition-colors`}
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 px-6 py-3 rounded-xl text-sm font-semibold text-center border-2 button-hover hover:shadow-lg ${getButtonHoverClasses('secondary')} theme-transition-colors theme-transition-border`}
                          >
                            View Code
                          </a>
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
              </div>
            ))}
          </Slider>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-16 gap-4">
            <button
              onClick={() => sliderRef.current?.slickPlay()}
              className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${currentTheme.colors.primary} text-white scale-hover-md theme-transition-colors hover:shadow-lg transition-all duration-300`}
            >
              ▶️ Play
            </button>
            <button
              onClick={() => sliderRef.current?.slickPause()}
              className={`px-4 py-2 rounded-full text-sm font-medium ${getCardBackground()} ${getTextColor()} border ${
                currentTheme.id === 'dark'
                  ? 'border-gray-700'
                  : 'border-gray-200'
              } scale-hover-md theme-transition-colors theme-transition-border hover:shadow-lg transition-all duration-300`}
            >
              ⏸️ Pause
            </button>
          </div>

          {/* Navigation Hint */}
          <div className="text-center mt-4">
            <p
              className={`text-sm ${getSecondaryTextColor()} theme-transition-text`}
            >
              Use arrow buttons or swipe to navigate • Auto-plays every 5
              seconds
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-700 ${
            ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div
            className={`${getCardBackground()} rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border theme-transition-colors theme-transition-border theme-transition-shadow ${currentTheme.id === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}
          >
            <h3
              className={`text-2xl font-bold ${getTextColor()} mb-4 theme-transition-text transition-all duration-500 ${
                ctaVisible
                  ? 'animate-fade-in-up animate-stagger-1'
                  : 'opacity-0'
              }`}
            >
              Interested in My Work?
            </h3>
            <p
              className={`${getSecondaryTextColor()} mb-6 theme-transition-text transition-all duration-500 ${
                ctaVisible
                  ? 'animate-fade-in-up animate-stagger-2'
                  : 'opacity-0'
              }`}
            >
              Check out my complete portfolio on GitHub or get in touch to
              discuss potential collaborations.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 ${
                ctaVisible
                  ? 'animate-fade-in-up animate-stagger-3'
                  : 'opacity-0'
              }`}
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 rounded-xl font-semibold button-hover hover:shadow-lg ${getButtonHoverClasses('primary')} theme-transition-colors`}
              >
                View All Projects
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`px-8 py-3 rounded-xl font-semibold border-2 button-hover hover:shadow-lg ${getButtonHoverClasses('secondary')} theme-transition-colors theme-transition-border`}
              >
                Let&apos;s Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
