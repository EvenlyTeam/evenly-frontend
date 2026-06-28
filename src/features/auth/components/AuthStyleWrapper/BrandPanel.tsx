import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('AuthStyleWrapper');

export function BrandPanel({ children }: PropsWithChildren) {
  Guard.useGuard('BrandPanel');

  return <div className="flex-2">{children}</div>;
}
