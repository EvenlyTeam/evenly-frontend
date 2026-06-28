import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

export function End({ children }: PropsWithChildren) {
  Guard.useGuard('End');

  return <div className="ml-auto flex items-center gap-2">{children}</div>;
}
