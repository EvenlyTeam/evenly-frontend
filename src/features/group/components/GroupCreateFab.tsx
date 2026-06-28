import { cn } from '@/utils/cn';

import Plus from '../assets/plus.svg?react';

export function GroupCreateFab() {
  return (
    <button
      type="button"
      aria-label="새 모임 만들기"
      className={cn(
        'fixed right-5 bottom-5 z-40 flex size-14 cursor-pointer items-center justify-center',
        'rounded-full bg-primary text-on-primary shadow-fab transition-colors',
        'hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:outline-none',
        'lg:hidden',
      )}
    >
      <Plus />
    </button>
  );
}
