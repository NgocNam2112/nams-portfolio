'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { SKILLS } from '../constant';

const Skill = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full bg-black px-28"
      >
        <CarouselContent className="rounded-none py-4 text-white text-2xl font-medium items-center flex">
          {SKILLS.map(skill => (
            <CarouselItem className="flex justify-center items-center basis-1/5" key={skill.name}>
              <span>{skill.name}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Skill;
