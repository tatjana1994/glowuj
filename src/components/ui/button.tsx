import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'primary' && 'bg-black/70 text-white hover:bg-black/60',
        variant === 'secondary' &&
          'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'ghost' &&
          'bg-transparent text-neutral-900 hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  );
}
