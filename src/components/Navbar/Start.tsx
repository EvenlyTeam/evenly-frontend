import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

export function Start({ children }: PropsWithChildren) {
  Guard.useGuard('Start');

  return <div className="flex items-center gap-2">{children}</div>;
}
