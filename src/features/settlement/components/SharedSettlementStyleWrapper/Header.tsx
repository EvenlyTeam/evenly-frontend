import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('SharedStyleWrapper');

export function Header({ children }: PropsWithChildren) {
  Guard.useGuard('Header');

  return (
    <div className="sticky top-0 z-10 border-b border-border-subtle bg-surface px-4 py-4.5">
      <div className="mx-auto w-full max-w-lg">{children}</div>
    </div>
  );
}
