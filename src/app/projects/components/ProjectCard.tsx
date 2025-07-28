'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectDetailModal from './ProjectDetailModal';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ imageUrl, title, description, link }: ProjectCardProps) => {
  return (
    <>
      <motion.div
        className="relative p-2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <hr className="border-black border-4 w-[calc(100%+40px)] shadow-[9px_10px_0_0_rgba(0,0,0,0.44)] absolute top-0 left-[-20px] rounded-full z-0" />
        <hr className="border-black border-4 w-[calc(100%+40px)] shadow-[9px_10px_0_0_rgba(0,0,0,0.44)] absolute bottom-0 left-[-20px] rounded-full z-0" />
        <hr className="border-black border-4 h-[calc(100%+40px)] shadow-[9px_10px_0_0_rgba(0,0,0,0.44)] absolute -top-[20px] left-0 rounded-full z-0" />
        <hr className="border-black border-4 h-[calc(100%+40px)] shadow-[9px_10px_0_0_rgba(0,0,0,0.44)] absolute -top-[20px] right-0 rounded-full z-0" />

        <motion.div className="relative bg-white p-4 z-10 group">
          <div className="relative border-2 border-black">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-4 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-800">{description}</p>
              <div className="flex flex-wrap mt-2">
                {['React', 'Next.js', 'Tailwind CSS'].map(tech => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <ProjectDetailModal
              title={title}
              description={description}
              imageUrl={imageUrl}
              link={link}
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
