import About from '@/components/About';
import ClientOnly from '@/components/ClientOnly';
import React from 'react';

const AboutMePage = () => {
  return (
    <ClientOnly
      fallback={
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Loading...</p>
          </div>
        </section>
      }
    >
      <About />
    </ClientOnly>
  );
};

export default AboutMePage;
