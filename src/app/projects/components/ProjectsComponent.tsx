'use client';

import ProjectCard from '@/app/projects/components/ProjectCard';
import Image from 'next/image';
import React from 'react';
import { SvgPortfolio } from '@/components/icons';
import { useProjects } from '../hooks/useProjectService';

const ProjectsComponent = () => {
  const { data, isLoading, error } = useProjects();

  console.log('data', data);
  console.log('isLoading', isLoading);
  console.log('error', error);

  return (
    <>
      <div className="px-28 mt-12">
        <div className="flex items-center justify-center gap-6">
          <div className="relative w-fit">
            <h1 className="font-heading text-8xl">My Projects</h1>
            <Image
              src="/images/portfolio-underline.png"
              alt="portfolio-underline"
              width={385}
              height={15}
              className="absolute bottom-0 right-0"
            />
          </div>
          <SvgPortfolio className="flex-shrink-0" />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10">
          <ProjectCard
            imageUrl="/images/projects/endeverus.png"
            title="Endeverus"
            description="UI design - User research - webflow develop"
            link="https://app.endeverus.com/"
          />
          <ProjectCard
            imageUrl="/images/projects/endeverus.png"
            title="Endeverus"
            description="UI design - User research - webflow develop"
            link="https://app.endeverus.com/"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsComponent;
