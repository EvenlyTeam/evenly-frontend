import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupLayout');

export function CreateBody({ children }: PropsWithChildren) {
  Guard.useGuard('CreateBody');

  return (
    <div className="flex-1 p-4 pt-5.5 lg:px-3.5 lg:py-12">
      <div className="mx-auto w-fit">{children}</div>
    </div>
  );
}
