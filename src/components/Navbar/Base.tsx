import { type PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

export function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <nav className="flex h-14 w-full items-center gap-3 border-b border-border-subtle bg-surface px-4 lg:h-16 lg:gap-4 lg:px-7">
        {children}
      </nav>
    </Guard.Provider>
  );
}
