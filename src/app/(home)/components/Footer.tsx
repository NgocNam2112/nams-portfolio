import { Logo, SvgLinkedIn, SvgYoutube } from '@/components/icons';
import React from 'react';

const Footer = () => {
  return (
    <div className="px-28 mt-12 border-t-2 py-12 flex justify-between">
      <div className="flex items-center gap-2">
        <Logo />
        <p className="text-2xl font-bold">Nam Nguyen</p>
      </div>

      <div className="flex items-center gap-2">
        <SvgLinkedIn className="w-[49px] h-[49px] cursor-pointer" />
        <SvgYoutube className="w-[49px] h-[49px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
