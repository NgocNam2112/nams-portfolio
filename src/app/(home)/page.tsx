import Image from 'next/image';
import React from 'react';
import Home from './components/Home';
import Skill from './components/Skill';
import ProjectCard from '@/components/common/ProjectCard';

const HomeComponent = () => {
  return (
    <>
      <Home />
      <Skill />

      <div className="flex flex-col">
        <div className="relative px-28">
          <div className="w-1/2 flex my-20">
            <p className="text-4xl font-medium">
              Services we&apos;re providing that derive 99% result
            </p>
            <Image src="/images/smile-branding.png" alt="smile-branding" width={73} height={80} />
          </div>
          <Image
            src="/images/branding-decor.png"
            alt="branding-decor"
            width={84}
            height={136}
            className="absolute  bottom-0 right-0"
          />
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
            <Image src="/images/search.png" alt="search-icon" width={70} height={70} />
            <h2 className="text-2xl font-medium">User Research</h2>
            <p className="text-2xl">Services we&apos;re providing that derive 99% result</p>
          </div>
          <div className="py-7 px-7 border-b-2 text-2xl font-medium">Learn More</div>

          <div className="flex flex-col gap-5 py-12 px-7 border-b-2">
            <Image src="/images/heart.png" alt="heart-icon" width={70} height={70} />
            <h2 className="text-2xl font-medium">UI Designing</h2>
            <p className="text-2xl">Services we&apos;re providing that derive 99% result</p>
          </div>
          <div className="py-7 px-7 border-b-2 text-2xl font-medium">Learn More</div>
        </div>

        <div className="border-t-2 border-l-2">
          <div className="flex flex-col gap-5 py-12 px-7 border-b-2">
            <Image src="/images/wireframing.png" alt="wireframing-icon" width={70} height={70} />
            <h2 className="text-2xl font-medium">Wireframing</h2>
            <p className="text-2xl">Services we&apos;re providing that derive 99% result</p>
          </div>
          <div className="py-7 px-7 border-b-2 text-2xl font-medium">Learn More</div>

          <div className="flex flex-col gap-5 py-12 px-7 border-b-2">
            <Image src="/images/prototype.png" alt="prototyping-icon" width={70} height={70} />
            <h2 className="text-2xl font-medium">Prototyping</h2>
            <p className="text-2xl">Services we&apos;re providing that derive 99% result</p>
          </div>
          <div className="py-7 px-7 border-b-2 text-2xl font-medium">Learn More</div>
        </div>
      </div>

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
          <Image src="/images/portfolio.png" alt="portfolio-decor" width={162} height={167} />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8">
          <ProjectCard
            image="/images/projects/endeverus.png"
            title="Endeverus"
            description="UI design - User research - webflow develop"
            link="https://app.endeverus.com/"
          />
          <ProjectCard
            image="/images/projects/endeverus.png"
            title="Endeverus"
            description="UI design - User research - webflow develop"
            link="https://app.endeverus.com/"
          />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
