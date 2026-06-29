import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupStyleWrapper');

export function Expenses({ children }: PropsWithChildren) {
  Guard.useGuard('Expenses');

  return <section className="min-w-0 flex-1 max-lg:w-full">{children}</section>;
}
