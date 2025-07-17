export const SKILLS = [
  {
    name: 'Next.js',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'TailwindCSS',
  },
  {
    name: 'ShadCN/UI',
  },
  {
    name: 'Framer Motion',
  },
  {
    name: 'Node.js',
  },
  {
    name: 'Express.js',
  },
  {
    name: 'tRPC',
  },
  {
    name: 'Prisma',
  },
  {
    name: 'PostgreSQL',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Design is a bridge that connects everyone and everything',
    author: {
      name: 'Sarah Johnson',
      position: 'UX Designer',
      company: 'TechCorp',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      fallback: 'SJ',
    },
    className: 'ml-10',
    rotationDegree: 2,
    zIndex: 10,
  },
  {
    quote: 'Design is a bridge that connects everyone and everything',
    author: {
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'InnovateLab',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      fallback: 'MC',
    },
    className: 'mr-10 mt-20',
    rotationDegree: -2.4,
    zIndex: 10,
  },
  {
    quote: 'Design is a bridge that connects everyone and everything',
    author: {
      name: 'Emily Rodriguez',
      position: 'Creative Director',
      company: 'DesignStudio',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      fallback: 'ER',
    },
    className: 'ml-10 -mt-10',
    rotationDegree: 2,
    zIndex: 20,
  },
  {
    quote: 'Design is a bridge that connects everyone and everything',
    author: {
      name: 'David Kim',
      position: 'Frontend Developer',
      company: 'WebSolutions',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      fallback: 'DK',
    },
    className: 'mr-10 mt-20',
    rotationDegree: -2,
    zIndex: 10,
  },
];

export const HOME_PAGE_ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  },
  floating: {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  },
  button: {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  },
  avatar: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  },
};
