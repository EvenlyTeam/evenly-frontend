import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupStyleWrapper');

export function Summary({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  Guard.useGuard('Summary');

  return (
    <aside className={cn('w-full lg:w-95 lg:shrink-0', className)}>
      {children}
    </aside>
  );
}
