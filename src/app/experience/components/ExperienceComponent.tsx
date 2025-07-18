'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SvgHeart,
  SvgPrototype,
  SvgSmileBranding,
  SvgUserSearch,
  SvgWireframe,
} from '@/components/icons';
import HighlightedText from '@/components/common/HighlightedText';
import { EXPERIENCE_VARIANTS_ANIMATION } from '../constant';

const SKILLS = {
  api_architecture: {
    title: 'API Architecture',
    description: (
      <p className="text-xl">
        Designing robust, scalable <HighlightedText>REST</HighlightedText> &{' '}
        <HighlightedText>GraphQL</HighlightedText> APIs that power fast and secure web applications.
      </p>
    ),
    icon: <SvgUserSearch className="flex-shrink-0" />,
  },
  backend_development: {
    title: 'Backend Development',
    description: (
      <p className="text-xl">
        <HighlightedText>Node.js</HighlightedText> + <HighlightedText>Express</HighlightedText> or{' '}
        <HighlightedText>Next.js</HighlightedText> API Routes with solid database integration (
        <HighlightedText>MongoDB</HighlightedText>, <HighlightedText>PostgreSQL</HighlightedText>,{' '}
        <HighlightedText>Prisma</HighlightedText>, <HighlightedText>Mongoose</HighlightedText>).
      </p>
    ),
    icon: <SvgHeart className="flex-shrink-0" />,
  },
  ui_development: {
    title: 'UI Development',
    description: (
      <p className="text-xl">
        Building responsive, accessible, and pixel-perfect interfaces using{' '}
        <HighlightedText>React.js</HighlightedText>, <HighlightedText>Next.js</HighlightedText>, and{' '}
        <HighlightedText>Shadcn</HighlightedText>, <HighlightedText>Tailwind CSS</HighlightedText>,
        and <HighlightedText>Framer Motion</HighlightedText>.
      </p>
    ),
    icon: <SvgWireframe className="flex-shrink-0" />,
  },
  prototyping_and_mvp: {
    title: 'Prototyping & MVPs',
    description: (
      <p className="text-xl">
        Rapid development of <HighlightedText>MVPs</HighlightedText> and interactive prototypes to
        validate ideas and go-to-market faster.
      </p>
    ),
    icon: <SvgPrototype className="flex-shrink-0" />,
  },
};

const ExperienceComponent = () => {
  const renderSkill = ({
    title,
    description,
    icon,
  }: {
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
  }) => {
    return (
      <motion.div
        className="flex flex-col gap-4 p-4 border-b-2 h-1/2 cursor-pointer group"
        variants={EXPERIENCE_VARIANTS_ANIMATION.item}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          {icon}
        </motion.div>
        <motion.h2
          className="text-2xl font-medium"
          whileHover={{
            x: 5,
            transition: { duration: 0.2 },
          }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={EXPERIENCE_VARIANTS_ANIMATION.container}
      className="flex-1 flex flex-col"
    >
      <motion.div className="flex flex-col flex-shrink-0">
        <motion.div className="relativ px-28" variants={EXPERIENCE_VARIANTS_ANIMATION.header}>
          <motion.div
            className="w-1/2 flex my-10"
            whileHover={{
              x: 10,
              transition: { duration: 0.3 },
            }}
          >
            <p className="text-4xl font-medium">Services I provide that deliver results</p>
            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.6 },
              }}
            >
              <SvgSmileBranding className="flex-shrink-0" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="px-28 flex pb-10 flex-1"
        variants={EXPERIENCE_VARIANTS_ANIMATION.container}
      >
        <motion.div
          className="flex flex-col border-b-2"
          variants={EXPERIENCE_VARIANTS_ANIMATION.stats}
        >
          <motion.div
            className="border-t-2 border-b-2 py-10 pl-5 pr-10"
            whileHover={{
              backgroundColor: 'rgba(0,0,0,0.02)',
              transition: { duration: 0.2 },
            }}
          >
            <motion.h2
              className="text-4xl font-medium"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              20+
            </motion.h2>
            <p className="text-2xl">Projects Delivered</p>
          </motion.div>
          <motion.div
            className="py-10 pl-5 pr-10"
            whileHover={{
              backgroundColor: 'rgba(0,0,0,0.02)',
              transition: { duration: 0.2 },
            }}
          >
            <motion.h2
              className="text-4xl font-medium"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              5+ yrs
            </motion.h2>
            <p className="text-2xl">Experience in Web Ecosystem</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col border-t-2 border-l-2"
          variants={EXPERIENCE_VARIANTS_ANIMATION.container}
        >
          {renderSkill(SKILLS.api_architecture)}
          {renderSkill(SKILLS.backend_development)}
        </motion.div>

        <motion.div
          className="border-t-2 border-l-2"
          variants={EXPERIENCE_VARIANTS_ANIMATION.container}
        >
          {renderSkill(SKILLS.ui_development)}
          {renderSkill(SKILLS.prototyping_and_mvp)}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceComponent;
