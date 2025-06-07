import ClientOnly from '@/components/ClientOnly';
import Projects from '@/components/Projects';
import React from 'react';

const ProjectsPage = () => {
  return (
    <ClientOnly
      fallback={
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Featured Projects
            </h2>
            <p className="text-gray-600">Loading projects...</p>
          </div>
        </section>
      }
    >
      <Projects />
    </ClientOnly>
  );
};

export default ProjectsPage;
