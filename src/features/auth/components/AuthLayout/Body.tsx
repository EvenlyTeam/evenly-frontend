import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('AuthLayout');

export function Body({ children }: PropsWithChildren) {
  Guard.useGuard('Body');

  return (
    <div className="mt-20 max-w-140 flex-1 px-12 lg:my-auto lg:px-6">
      {children}
    </div>
  );
}
