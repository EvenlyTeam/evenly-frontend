import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('SettlementLayout');

export function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <div className="flex min-h-dvh w-full flex-col">{children}</div>
    </Guard.Provider>
  );
}
