import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export function Fab({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        'fixed right-5 bottom-5 z-40 flex size-14 cursor-pointer items-center justify-center',
        'rounded-full bg-primary text-on-primary shadow-fab transition-colors',
        'hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  );
}
