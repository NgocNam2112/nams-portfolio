'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FormExample: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    // Handle form submission here
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md">
      <Input
        label="Name"
        placeholder="Enter your name"
        {...register('name', {
          required: 'Name is required',
          minLength: { value: 2, message: 'Name must be at least 2 characters' },
        })}
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

      <Textarea
        label="Message"
        placeholder="Enter your message"
        rows={4}
        {...register('message', {
          required: 'Message is required',
          minLength: { value: 10, message: 'Message must be at least 10 characters' },
        })}
      />
      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default FormExample;
