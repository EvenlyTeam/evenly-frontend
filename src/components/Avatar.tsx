import { cn } from '@/utils/cn';

const sizeStyles = {
  sm: 'size-7 text-[12px]',
  lg: 'size-9 text-heading-md',
} as const;

interface AvatarProps {
  label: string;
  size: keyof typeof sizeStyles;
  className?: string;
}

export function Avatar({ label, size, className }: AvatarProps) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full',
        'bg-primary/12 font-semibold leading-none text-primary select-none',
        sizeStyles[size],
        className,
      )}
    >
      {label}
    </span>
  );
}
