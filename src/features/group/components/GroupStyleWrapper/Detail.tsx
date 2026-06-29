import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupStyleWrapper');

export function Detail({ children }: PropsWithChildren) {
  Guard.useGuard('Detail');

  return (
    <div className="flex-1 px-4 py-7 lg:px-6">
      <div className="mx-auto flex w-full max-w-content items-start gap-6 max-lg:flex-col">
        {children}
      </div>
    </div>
  );
}
