import { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary';
type ButtonSize = 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseClass =
  'inline-flex cursor-pointer items-center justify-center rounded-button font-sans transition-colors duration-150 outline-none focus-visible:ring-3 focus-visible:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-60';

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-hover',
};

const sizeClass: Record<ButtonSize, string> = {
  md: 'h-12 px-5 text-body-lg font-semibold',
  lg: 'h-13 px-6 text-heading-sm leading-none',
};

export function Button({
  variant = 'primary',
  size = 'lg',
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className ?? ''}`}
      {...props}
    />
  );
}
