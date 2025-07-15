import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div className="mt-56 relative px-28 flex gap-10 justify-between pb-40">
      <div className="w-1/2">
        <Image src="/images/notch.png" alt="notch" width={205} height={220} />

        <p className="text-7xl font-bold text-wrap">
          I created ✍️ top{' '}
          <span className="bg-[linear-gradient(180deg,transparent_60%,#ffe567_60%)]">
            robust backends
          </span>{' '}
          and{' '}
          <span className="bg-[linear-gradient(180deg,transparent_60%,#ffe567_60%)]">
            high-performance frontends
          </span>
          .
        </p>

        <div className="relative w-fit">
          <Button variant="portfolio" className="py-8 px-14 mt-12 cursor-pointer">
            See Portfolio
          </Button>

          <Image
            src="/images/highlight-button.png"
            alt="highlight-button"
            className="absolute -right-14 -bottom-12"
            width={77}
            height={90}
          />
        </div>
      </div>

      <div
        className="w-[542px] h-[542px] bg-no-repeat bg-center bg-contain relative flex justify-center items-center"
        style={{ backgroundImage: "url('/images/border.png')" }}
      >
        <Image
          src="/images/guide-line.png"
          alt="guide line"
          className="absolute -top-[25%] -left-1/8"
          width={310}
          height={184}
        />

        <div className="w-[420px] h-[404px] border-4 relative">
          <Image src="/images/avatar.jpg" alt="avatar" fill className="object-cover" />

          <Image
            src="/images/thinky.png"
            alt="thinky"
            className="absolute -left-12 top-8"
            width={95}
            height={97}
          />

          <Image
            src="/images/boomy.png"
            alt="boomy"
            className="absolute -bottom-[65px] -right-[68px]"
            width={151}
            height={136}
          />
        </div>
      </div>

      <Image
        src="/images/left-decor.png"
        alt="left-decor"
        width={85}
        height={136}
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};

export default Home;
