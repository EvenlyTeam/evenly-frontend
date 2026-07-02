import MoreHorizontalIcon from '../assets/more-horizontal.svg?react';

interface MoreButtonProps {
  label?: string;
}

export function MoreButton({ label = '메뉴' }: MoreButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex shrink-0 cursor-pointer items-center justify-center text-subtle-foreground"
    >
      <MoreHorizontalIcon aria-hidden className="size-5.5" />
    </button>
  );
}
