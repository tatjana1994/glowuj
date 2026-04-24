import { cn } from '@/lib/utils/cn';

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700',
        className,
      )}
    >
      {children}
    </span>
  );
}
