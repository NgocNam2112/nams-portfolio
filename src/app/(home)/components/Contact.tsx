'use client';

import FormController from '@/components/common/form/FormController';
import HighlightedText from '@/components/common/HighlightedText';
import { Arrow } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const Contact = () => {
  const form = useForm();

  return (
    <div className="mt-12 px-28 flex gap-10 justify-between pb-20">
      <div className="flex flex-col items-end w-fit gap-10">
        <HighlightedText className="text-8xl font-heading">
          <p className="text-6xl">Contact Me</p>
        </HighlightedText>
        <Arrow />

        <div className="text-3xl font-medium">
          <p>Have a project idea?</p>
          <p>
            just say me <span className="font-bold">Hi.</span>
          </p>
        </div>
      </div>

      <div
        className="w-2/3"
        style={{
          backgroundImage: 'url(/images/contact-view.png)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <FormProvider {...form}>
          <form className="flex flex-col gap-5 px-14 pb-12 pt-8 relative">
            <Image
              src="/images/full-decor.png"
              alt="contact-form"
              className="absolute -top-10 -right-10"
              width={151}
              height={136}
            />
            <FormController
              name="name"
              control={form.control}
              Field={Input}
              fieldProps={{ placeholder: 'Enter your name', label: 'Name' }}
            />
            <FormController
              name="email"
              control={form.control}
              Field={Input}
              fieldProps={{ placeholder: 'Enter your email', label: 'Email' }}
            />

            <FormController
              name="message"
              control={form.control}
              Field={Textarea}
              fieldProps={{ placeholder: 'Enter your message', label: 'Message' }}
            />

            <Button variant="portfolio" className="py-8 px-14 cursor-pointer">
              Send Message
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Contact;
