import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('AuthLayout');

export function Aside({ children }: PropsWithChildren) {
  Guard.useGuard('Aside');

  return <div className="flex-2">{children}</div>;
}
