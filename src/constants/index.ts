export const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
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

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: '/github.png',
    url: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    name: 'LinkedIn',
    icon: '/linkedin.png',
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  {
    name: 'YouTube',
    icon: '/youtube.png',
    url: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  },
  {
    name: 'Email',
    icon: '/email.png',
    url: process.env.NEXT_PUBLIC_EMAIL_URL,
  },
];

export const EXPERTISE_AREAS = [
  {
    title: 'Frontend Development',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Redux',
      'React Query',
      'Zustand',
      'Jest',
      'React Testing Library',
      'Puppeteer',
      'Storybook',
      'Webpack',
      'Vite',
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      'Node.js',
      'Express',
      'Nest.js',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'CI/CD',
      'Testing',
      'Jest',
      'React Testing Library',
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Notion', 'Backlog', 'Vercel', 'Figma'],
  },
];

export const HERO_SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Python',
];

export const THEME_FORCUS_RING_COLOR = {
  purple: 'focus-visible:ring-purple-500',
  blue: 'focus-visible:ring-blue-500',
  emerald: 'focus-visible:ring-emerald-500',
  orange: 'focus-visible:ring-orange-500',
  rose: 'focus-visible:ring-rose-500',
  dark: 'focus-visible:ring-gray-500',
};

export const NAV_ITEMS = [
  { name: 'Home', id: 'home', label: 'Back to top' },
  {
    name: 'About',
    id: 'about',
    label: 'Learn about me',
  },
  {
    name: 'Projects',
    id: 'projects',
    label: 'View my work',
  },
  {
    name: 'Contact',
    id: 'contact',
    label: 'Get in touch',
  },
];
