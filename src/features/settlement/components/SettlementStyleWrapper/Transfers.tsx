import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('SettlementStyleWrapper');

export function Transfers({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  Guard.useGuard('Transfers');

  return (
    <div
      className={cn(
        'flex min-w-0 flex-1 flex-col gap-4.5 max-lg:w-full',
        className,
      )}
    >
      {children}
    </div>
  );
}
