import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

interface BaseTextAreaProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  getFocusRingColor: string;
  row?: number;
}
const BaseTextArea = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  getFocusRingColor,
  row = 5,
}: BaseTextAreaProps<T>) => {
  return (
    <>
      {' '}
      <label
        htmlFor="message"
        className="block text-gray-300 text-sm font-medium mb-2 theme-transition-text"
      >
        {label}
      </label>
      <Textarea
        id={name}
        rows={row}
        placeholder="Tell me about your project or just say hello!"
        {...register(name)}
        className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 ${getFocusRingColor} focus-visible:border-transparent resize-none textarea-focus theme-transition-colors theme-transition-border ${
          error ? 'border-red-500 focus-visible:ring-red-500' : ''
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error?.message}</p>}
    </>
  );
};

export default BaseTextArea;
