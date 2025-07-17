'use client';

import React from 'react';
import {
  SvgHeart,
  SvgPrototype,
  SvgSmileBranding,
  SvgUserSearch,
  SvgWireframe,
} from '@/components/icons';

const SkillsComponent = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative px-28">
          <div className="w-1/2 flex my-20">
            <p className="text-4xl font-medium">Services I provide that deliver results</p>
            <SvgSmileBranding className="flex-shrink-0" />
          </div>
        </div>
      </div>

      <div className="px-28 grid grid-cols-3">
        <div className="flex flex-col border-b-2">
          <div className="border-t-2 border-b-2 py-10 pl-5 pr-10">
            <h2 className="text-4xl font-medium">20+</h2>
            <p className="text-2xl">Projects Delivered</p>
          </div>
          <div className="py-10 pl-5 pr-10">
            <div>
              <h2 className="text-4xl font-medium">5+ yrs</h2>
              <p className="text-2xl">Experience in Web Ecosystem</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t-2 border-l-2">
          <div className="flex flex-col gap-5 py-8 px-5 border-b-2">
            <SvgUserSearch className="flex-shrink-0" />
            <h2 className="text-2xl font-medium">API Architecture</h2>
            <p className="text-2xl">
              Designing robust, scalable REST & GraphQL APIs that power fast and secure web
              applications.
            </p>
          </div>

          <div className="flex flex-col gap-5 py-8 px-5 border-b-2">
            <SvgHeart className="flex-shrink-0" />
            <h2 className="text-2xl font-medium">Backend Development</h2>
            <p className="text-2xl">
              Node.js + Express or Next.js API Routes with solid database integration (MongoDB,
              PostgreSQL, Prisma, Mongoose).
            </p>
          </div>
        </div>

        <div className="border-t-2 border-l-2">
          <div className="flex flex-col gap-5 py-8 px-5 border-b-2">
            <SvgWireframe className="flex-shrink-0" />
            <h2 className="text-2xl font-medium"> UI Development</h2>
            <p className="text-2xl">
              Building responsive, accessible, and pixel-perfect interfaces using React.js, Next.js,
              and Shadcn, Tailwind CSS, and Framer Motion.
            </p>
          </div>

          <div className="flex flex-col gap-5 py-8 px-5 border-b-2">
            <SvgPrototype className="flex-shrink-0" />
            <h2 className="text-2xl font-medium">Prototyping & MVPs</h2>
            <p className="text-2xl">
              Rapid development of MVPs and interactive prototypes to validate ideas and
              go-to-market faster.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;
