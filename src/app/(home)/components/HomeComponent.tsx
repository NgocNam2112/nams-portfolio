'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import SvgHighLightPicture from '@/components/icons/HighLightPicture';
import { Notch, SvgBoomy, SvgHighlightButton, SvgThinky } from '@/components/icons';
import { AnimatedHighlightText } from '@/components/common/AnimatedHighlightText';
import { motion } from 'framer-motion';
import { HOME_PAGE_ANIMATION_VARIANTS } from '../constant';

const HomeComponent = () => {
  return (
    <motion.div
      className="h-full px-28 flex items-center justify-center gap-10"
      variants={HOME_PAGE_ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full">
        <motion.div variants={HOME_PAGE_ANIMATION_VARIANTS.item}>
          <Notch className="w-[205px] h-[220px]" />
        </motion.div>

        <motion.div
          className="2xl:text-7xl text-5xl font-bold flex flex-wrap"
          variants={HOME_PAGE_ANIMATION_VARIANTS.item}
        >
          I created ✍️ top{' '}
          <div className="h-[128px]">
            <AnimatedHighlightText words={['robust backends,', 'high-performance front-ends.']} />
          </div>
        </motion.div>

        <motion.div className="relative w-fit" variants={HOME_PAGE_ANIMATION_VARIANTS.item}>
          <Button variant="portfolio" className="py-8 px-14 mt-12 cursor-pointer">
            See Portfolio
          </Button>

          <motion.div
            className="absolute -right-14 -bottom-12"
            variants={HOME_PAGE_ANIMATION_VARIANTS.floating}
            animate="animate"
          >
            <SvgHighlightButton />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-[502px] h-[502px] bg-no-repeat bg-center bg-contain relative flex justify-center items-center flex-shrink-0"
        style={{ backgroundImage: "url('/icons/profile-view.svg')" }}
        variants={HOME_PAGE_ANIMATION_VARIANTS.avatar}
      >
        <motion.div
          className="absolute -top-[25%] -left-1/8"
          variants={HOME_PAGE_ANIMATION_VARIANTS.floating}
          animate="animate"
        >
          <SvgHighLightPicture />
        </motion.div>
        <div className="w-[360px] h-[360px] border-4 relative mt-10">
          <Image src="/images/avatar.jpg" alt="avatar" fill className="object-cover" />
          <SvgThinky className="absolute -left-12 top-8" />
          <SvgBoomy className="absolute -bottom-[65px] -right-[68px] w-[151px] h-[136px]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeComponent;
