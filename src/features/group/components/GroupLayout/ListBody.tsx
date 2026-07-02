import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupLayout');

export function ListBody({ children }: PropsWithChildren) {
  Guard.useGuard('ListBody');

  return (
    <div className="flex-1 p-4 lg:px-16 lg:py-8">
      <div className="mx-auto w-full max-w-content">{children}</div>
    </div>
  );
}
