import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

export function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <div className="cursor-pointer rounded-card bg-surface p-5 shadow-card">
        {children}
      </div>
    </Guard.Provider>
  );
}
