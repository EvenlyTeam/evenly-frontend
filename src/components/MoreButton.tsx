import MoreHorizontalIcon from '../assets/more-horizontal.svg?react';

export function MoreButton() {
  return (
    <button
      type="button"
      aria-label="모임 메뉴"
      className="flex shrink-0 cursor-pointer items-center justify-center text-subtle-foreground"
    >
      <MoreHorizontalIcon aria-hidden className="size-5.5" />
    </button>
  );
}
