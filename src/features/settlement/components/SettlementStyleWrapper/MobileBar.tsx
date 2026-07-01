import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('SettlementStyleWrapper');

export function MobileBar({ children }: PropsWithChildren) {
  Guard.useGuard('MobileBar');

  return (
    <div className="sticky bottom-0 z-10 border-t border-border-subtle bg-surface px-4 py-3">
      {children}
    </div>
  );
}
