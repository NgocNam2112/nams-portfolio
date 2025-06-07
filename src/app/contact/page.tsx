import ClientOnly from '@/components/ClientOnly';
import Contact from '@/components/Contact';
import React from 'react';

const ContactPage = () => {
  return (
    <ClientOnly
      fallback={
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-gray-300">Loading contact form...</p>
          </div>
        </section>
      }
    >
      <Contact />
    </ClientOnly>
  );
};

export default ContactPage;
