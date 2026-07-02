import ChevronLeftIcon from '@/assets/chevron-left.svg?react';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

interface BackButtonProps {
  onClick?: () => void;
  label?: string;
}

export function BackButton({ onClick, label = '뒤로 가기' }: BackButtonProps) {
  Guard.useGuard('BackButton');

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex shrink-0 items-center justify-center text-foreground"
    >
      <ChevronLeftIcon aria-hidden className="size-5.5" />
    </button>
  );
}
