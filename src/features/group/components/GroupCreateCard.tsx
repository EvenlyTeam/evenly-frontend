import { cn } from '@/utils/cn';

import Plus from '../assets/icons/plus.svg?react';

export function GroupCreateCard() {
  return (
    <button
      type="button"
      className={cn(
        'flex min-h-39.5 w-full cursor-pointer flex-col items-center justify-center gap-2.5',
        'rounded-card border-[1.5px] border-dashed border-border p-5',
        'text-muted-foreground',
      )}
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-surface-muted">
        <Plus />
      </span>
      <span className="text-body-md">새 모임 만들기</span>
    </button>
  );
}
