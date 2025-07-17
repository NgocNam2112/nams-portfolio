import { Button } from '@/components/ui/button';
import HighlightedText from '@/components/common/HighlightedText';
import Image from 'next/image';
import React from 'react';
import SvgHighLightPicture from '@/components/icons/HighLightPicture';
import { LeftDecor, Notch, SvgBoomy, SvgHighlightButton, SvgThinky } from '@/components/icons';

const HomePage = () => {
  return (
    <div className="h-full relative px-28 flex items-center justify-center gap-10">
      <div className="w-full">
        <Notch className="w-[205px] h-[220px]" />

        <p className="2xl:text-7xl text-5xl font-bold text-wrap">
          I created ✍️ top <HighlightedText>robust backends</HighlightedText> and{' '}
          <HighlightedText>high-performance frontends</HighlightedText>.
        </p>

        <div className="relative w-fit">
          <Button variant="portfolio" className="py-8 px-14 mt-12 cursor-pointer">
            See Portfolio
          </Button>

          <SvgHighlightButton className="absolute -right-14 -bottom-12" />
        </div>
      </div>

      <div
        className="w-[502px] h-[502px] bg-no-repeat bg-center bg-contain relative flex justify-center items-center flex-shrink-0"
        style={{ backgroundImage: "url('/icons/profile-view.svg')" }}
      >
        <SvgHighLightPicture className="absolute -top-[25%] -left-1/8" />
        <div className="w-[360px] h-[360px] border-4 relative mt-10">
          <Image src="/images/avatar.jpg" alt="avatar" fill className="object-cover" />
          <SvgThinky className="absolute -left-12 top-8" />
          <SvgBoomy className="absolute -bottom-[65px] -right-[68px] w-[151px] h-[136px]" />
        </div>
      </div>

      <LeftDecor className="w-[85px] h-[136px] bottom-0 left-0 absolute" />
    </div>
  );
};

export default HomePage;
