import ProjectCard from '@/components/common/ProjectCard';
import Image from 'next/image';
import React from 'react';
import { TESTIMONIALS } from '../constant';
import TestimonialCard from '@/components/common/TestimonialCard';
import { SvgNew, SvgPortfolio } from '@/components/icons';

const Projects = () => {
  return (
    <>
      <div className="px-28 mt-12">
        <div className="flex items-center justify-center gap-6">
          <div className="relative w-fit">
            <h1 className="font-heading text-8xl">My Portfolio</h1>
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

        <div className="mt-14 grid grid-cols-2 gap-2">
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

      <div className="px-28 mt-12">
        <div className="w-1/2 flex items-center gap-4">
          <p className="text-4xl font-medium">Here’s what my clients are saying about my work</p>
          <SvgNew className="flex-shrink-0" />
        </div>

        <div className="mt-40 pb-20">
          <div className="grid grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
