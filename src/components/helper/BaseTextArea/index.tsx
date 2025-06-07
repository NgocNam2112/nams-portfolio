import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

interface BaseTextAreaProps<T extends FieldValues>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  focusRingColor: string;
  row?: number;
}

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (value: T) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') ref(value);
      else if (ref != null)
        (ref as React.MutableRefObject<T | null>).current = value;
    });
  };
}

const BaseTextArea = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  focusRingColor,
  row = 5,
  ...props
}: BaseTextAreaProps<T>) => {
  const { ref: registerRef, ...restRegister } = register(name);
  const textAreaRef = (props as { ref?: React.Ref<HTMLTextAreaElement> }).ref;
  const textareaProps = { ...props };
  if ('ref' in textareaProps) delete textareaProps.ref;
  return (
    <>
      {' '}
      <label
        htmlFor={name}
        className="block text-gray-300 text-sm font-medium mb-2 theme-transition-text"
      >
        {label}
      </label>
      <Textarea
        id={name}
        rows={row}
        placeholder="Tell me about your project or just say hello!"
        ref={mergeRefs(textAreaRef, registerRef)}
        {...restRegister}
        className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 ${focusRingColor} focus-visible:border-transparent resize-none textarea-focus theme-transition-colors theme-transition-border ${
          error ? 'border-red-500 focus-visible:ring-red-500' : ''
        }`}
        {...textareaProps}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error?.message}</p>}
    </>
  );
};

export default BaseTextArea;
