import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('ExpenseListItem');

export function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <div className="flex items-center gap-3.5 rounded-card border border-border-subtle bg-surface px-4.5 py-4 shadow-card">
        {children}
      </div>
    </Guard.Provider>
  );
}
