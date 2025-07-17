'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { SKILLS } from '../constant';
import {
  SvgBrandingDecor,
  SvgHeart,
  SvgPrototype,
  SvgSmileBranding,
  SvgUserSearch,
  SvgWireframe,
} from '@/components/icons';

const Skill = () => {
  return (
    <>
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

      <div className="flex flex-col">
        <div className="relative px-28">
          <div className="w-1/2 flex my-20">
            <p className="text-4xl font-medium">
              Services we&apos;re providing that derive 99% result
            </p>
            <SvgSmileBranding className="flex-shrink-0" />
          </div>
          <SvgBrandingDecor className="absolute  bottom-0 right-0" />
        </div>
      </div>

      <div className="px-28 grid grid-cols-3">
        <div className="flex flex-col border-b-2">
          <div className="border-t-2 border-b-2 py-10 pl-5 pr-10">
            <h2 className="text-4xl font-medium">39</h2>
            <p className="text-2xl">Projects</p>
          </div>
          <div className="py-10 pl-5 pr-10">
            <div>
              <h2 className="text-4xl font-medium">100k+</h2>
              <p className="text-2xl">generated</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-l-2">
          <div className="flex flex-col gap-5 py-12 px-7 border-b-2">
            <SvgUserSearch className="flex-shrink-0" />
            <h2 className="text-2xl font-medium">User Research</h2>
            <p className="text-2xl">Services we&apos;re providing that derive 99% result</p>
          </div>
          <div className="py-7 px-7 border-b-2 text-2xl font-medium">Learn More</div>

          <div className="flex flex-col gap-5 py-12 px-7 border-b-2">
            <SvgHeart className="flex-shrink-0" />
            <h2 className="text-2xl font-medium">UI Designing</h2>
            <p className="text-2xl">Services we&apos;re providing that derive 99% result</p>
          </div>
          <div className="py-7 px-7 border-b-2 text-2xl font-medium">Learn More</div>
        </div>

        <div className="border-t-2 border-l-2">
          <div className="flex flex-col gap-5 py-12 px-7 border-b-2">
            <SvgWireframe className="flex-shrink-0" />
            <h2 className="text-2xl font-medium">Wireframing</h2>
            <p className="text-2xl">Services we&apos;re providing that derive 99% result</p>
          </div>
          <div className="py-7 px-7 border-b-2 text-2xl font-medium">Learn More</div>

          <div className="flex flex-col gap-5 py-12 px-7 border-b-2">
            <SvgPrototype className="flex-shrink-0" />
            <h2 className="text-2xl font-medium">Prototyping</h2>
            <p className="text-2xl">Services we&apos;re providing that derive 99% result</p>
          </div>
          <div className="py-7 px-7 border-b-2 text-2xl font-medium">Learn More</div>
        </div>
      </div>
    </>
  );
};

export default Skill;
