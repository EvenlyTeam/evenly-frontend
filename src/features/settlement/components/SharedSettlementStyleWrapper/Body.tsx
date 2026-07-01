import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('SharedStyleWrapper');

export function Body({ children }: PropsWithChildren) {
  Guard.useGuard('Body');

  return (
    <div className="flex-1 p-4">
      <div className="mx-auto w-full max-w-[32rem]">{children}</div>
    </div>
  );
}
