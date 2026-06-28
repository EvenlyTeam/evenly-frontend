import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('AuthStyleWrapper');

export function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <main className="flex min-h-dvh w-full justify-center">{children}</main>
    </Guard.Provider>
  );
}
