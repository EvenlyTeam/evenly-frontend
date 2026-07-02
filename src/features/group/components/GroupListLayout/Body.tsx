import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupListLayout');

export function Body({ children }: PropsWithChildren) {
  Guard.useGuard('Body');

  return (
    <div className="flex-1 p-4 lg:px-16 lg:py-8">
      <div className="mx-auto w-full max-w-content">{children}</div>
    </div>
  );
}
