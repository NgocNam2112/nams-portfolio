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
