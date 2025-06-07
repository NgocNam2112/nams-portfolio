'use client';

import Hero from '@/components/Hero';
import ClientOnly from '@/components/ClientOnly';
import Fallback from '@/components/Fallback';
import { useTheme } from '@/stores/themeStore';

export default function Home() {
  const { currentTheme } = useTheme();
  return (
    <div id="home">
      <ClientOnly fallback={<Fallback currentTheme={currentTheme} />}>
        <Hero />
      </ClientOnly>
    </div>
  );
}
