import { forwardRef, type InputHTMLAttributes } from 'react';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`h-12 w-full rounded-input border border-border bg-input px-3.5 font-sans text-body-lg text-foreground transition-all duration-150 outline-none placeholder:text-subtle-foreground focus:border-primary focus:ring-3 focus:ring-primary/35 ${className ?? ''}`}
      {...props}
    />
  );
});
