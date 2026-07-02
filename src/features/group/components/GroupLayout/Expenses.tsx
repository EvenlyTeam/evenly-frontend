import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupLayout');

export function Expenses({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  Guard.useGuard('Expenses');

  return (
    <section className={cn('min-w-0 flex-1 max-lg:w-full', className)}>
      {children}
    </section>
  );
}
