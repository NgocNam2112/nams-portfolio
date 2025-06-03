'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/stores/themeStore';

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { currentTheme } = useTheme();

  const getTextColor = () => {
    return currentTheme.id === 'dark' ? 'text-white' : 'text-gray-800';
  };

  const getSecondaryTextColor = () => {
    return currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-600';
  };

  const getCardBackground = () => {
    return currentTheme.id === 'dark' ? 'bg-gray-800' : 'bg-white';
  };

  const getSkillTagColors = () => {
    return currentTheme.id === 'dark'
      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  };

  const skills = [
    {
      category: 'Frontend',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Python',
        'Express.js',
        'FastAPI',
        'PostgreSQL',
        'MongoDB',
      ],
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
    },
  ];

  const personalityTraits = [
    { emoji: '🎯', trait: 'Detail-oriented' },
    { emoji: '🚀', trait: 'Innovation-driven' },
    { emoji: '🤝', trait: 'Team player' },
    { emoji: '📚', trait: 'Continuous learner' },
  ];

  return (
    <section
      id="about"
      className={`py-20 theme-transition-bg ${currentTheme.colors.about}`}
    >
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${getTextColor()} mb-4 theme-transition-text`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r ${currentTheme.colors.primary} mx-auto mb-6 theme-transition-colors`}
          ></div>
          <p
            className={`${getSecondaryTextColor()} max-w-2xl mx-auto theme-transition-text`}
          >
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div
          ref={contentRef}
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Personal Info */}
          <div
            className={`${getCardBackground()} rounded-2xl p-8 shadow-lg scale-hover-md hover:shadow-2xl theme-transition-colors transition-all duration-700 ${
              contentVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3
              className={`text-2xl font-semibold ${getTextColor()} mb-6 theme-transition-text`}
            >
              Who I Am
            </h3>
            <div className="space-y-4">
              <p
                className={`${getSecondaryTextColor()} leading-relaxed theme-transition-text transition-all duration-500 ${
                  contentVisible
                    ? 'animate-fade-in-up animate-stagger-1'
                    : 'opacity-0'
                }`}
              >
                I&apos;m a passionate full-stack developer with{' '}
                <span
                  className={`font-semibold bg-gradient-to-r ${currentTheme.colors.secondary} bg-clip-text text-transparent theme-transition-colors`}
                >
                  3+ years of experience
                </span>{' '}
                creating modern web applications. I love turning complex
                problems into simple, beautiful, and intuitive solutions.
              </p>
              <p
                className={`${getSecondaryTextColor()} leading-relaxed theme-transition-text transition-all duration-500 ${
                  contentVisible
                    ? 'animate-fade-in-up animate-stagger-2'
                    : 'opacity-0'
                }`}
              >
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or enjoying
                a good cup of coffee while reading tech blogs.
              </p>
            </div>

            {/* Personality Traits */}
            <div className="mt-8">
              <h4
                className={`text-lg font-semibold ${getTextColor()} mb-4 theme-transition-text transition-all duration-500 ${
                  contentVisible
                    ? 'animate-fade-in-up animate-stagger-3'
                    : 'opacity-0'
                }`}
              >
                What Drives Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {personalityTraits.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 ${getCardBackground()} rounded-lg border scale-hover-md theme-transition-colors theme-transition-border transition-all duration-500 ${
                      currentTheme.id === 'dark'
                        ? 'border-gray-700'
                        : 'border-gray-200'
                    } ${
                      contentVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                    }`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <span
                      className={`text-sm font-medium ${getTextColor()} theme-transition-text`}
                    >
                      {item.trait}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div
            ref={skillsRef}
            className={`${getCardBackground()} rounded-2xl p-8 shadow-lg scale-hover-md hover:shadow-2xl theme-transition-colors transition-all duration-700 ${
              skillsVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <h3
              className={`text-2xl font-semibold ${getTextColor()} mb-6 theme-transition-text`}
            >
              Technical Skills
            </h3>

            <div className="space-y-6">
              <div
                className={`transition-all duration-500 ${
                  skillsVisible
                    ? 'animate-fade-in-up animate-stagger-1'
                    : 'opacity-0'
                }`}
              >
                <h4
                  className={`text-lg font-medium ${getTextColor()} mb-3 theme-transition-text`}
                >
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills[0].items.map((skill, index) => (
                    <span
                      key={skill}
                      className={`${getSkillTagColors()} px-3 py-1 rounded-full text-sm scale-hover-md theme-transition-colors transition-all duration-300 ${
                        skillsVisible
                          ? 'animate-scale-in'
                          : 'opacity-0 scale-95'
                      }`}
                      style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`transition-all duration-500 ${
                  skillsVisible
                    ? 'animate-fade-in-up animate-stagger-2'
                    : 'opacity-0'
                }`}
              >
                <h4
                  className={`text-lg font-medium ${getTextColor()} mb-3 theme-transition-text`}
                >
                  Backend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills[1].items.map((skill, index) => (
                    <span
                      key={skill}
                      className={`${getSkillTagColors()} px-3 py-1 rounded-full text-sm scale-hover-md theme-transition-colors transition-all duration-300 ${
                        skillsVisible
                          ? 'animate-scale-in'
                          : 'opacity-0 scale-95'
                      }`}
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`transition-all duration-500 ${
                  skillsVisible
                    ? 'animate-fade-in-up animate-stagger-3'
                    : 'opacity-0'
                }`}
              >
                <h4
                  className={`text-lg font-medium ${getTextColor()} mb-3 theme-transition-text`}
                >
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills[2].items.map((skill, index) => (
                    <span
                      key={skill}
                      className={`${getSkillTagColors()} px-3 py-1 rounded-full text-sm scale-hover-md theme-transition-colors transition-all duration-300 ${
                        skillsVisible
                          ? 'animate-scale-in'
                          : 'opacity-0 scale-95'
                      }`}
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`w-full bg-gradient-to-r ${currentTheme.colors.primary} hover:shadow-xl text-white py-3 px-6 rounded-lg font-semibold button-hover shadow-lg theme-transition-colors transition-all duration-500 ${
                  skillsVisible
                    ? 'animate-fade-in-up animate-stagger-4'
                    : 'opacity-0'
                }`}
              >
                Let&apos;s Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
