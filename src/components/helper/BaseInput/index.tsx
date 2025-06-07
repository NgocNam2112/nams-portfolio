import { Input } from '@/components/ui/input';
import React from 'react';
import {
  FieldError,
  UseFormRegister,
  FieldValues,
  Path,
} from 'react-hook-form';

interface BaseInputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  error: FieldError | undefined;
  register: UseFormRegister<T>;
  focusRingColor: string;
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

const BaseInput = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  focusRingColor,
  ...props
}: BaseInputProps<T>) => {
  const { ref: registerRef, ...restRegister } = register(name);
  const inputRef = (props as { ref?: React.Ref<HTMLInputElement> }).ref;
  const inputProps = { ...props };
  if ('ref' in inputProps) delete inputProps.ref;

  return (
    <>
      <label
        htmlFor={name}
        className="block text-gray-300 text-sm font-medium mb-2 theme-transition-text"
      >
        {label}
      </label>
      <Input
        id={name}
        type="text"
        placeholder="John Doe"
        ref={mergeRefs(inputRef, registerRef)}
        {...restRegister}
        className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 ${focusRingColor} focus-visible:border-transparent input-focus theme-transition-colors theme-transition-border ${
          error ? 'border-red-500 focus-visible:ring-red-500' : ''
        }`}
        {...inputProps}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error.message}</p>}
    </>
  );
};

export default BaseInput;
