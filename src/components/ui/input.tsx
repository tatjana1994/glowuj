import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-900',
        props.className,
      )}
    />
  );
}
