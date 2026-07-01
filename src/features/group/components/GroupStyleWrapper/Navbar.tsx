import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupStyleWrapper');

export function Navbar({ children }: PropsWithChildren) {
  Guard.useGuard('Navbar');

  return <div className="sticky top-0 z-10 w-full">{children}</div>;
}
