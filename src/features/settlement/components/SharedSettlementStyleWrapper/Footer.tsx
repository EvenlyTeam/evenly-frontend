import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('SharedStyleWrapper');

export function Footer({ children }: PropsWithChildren) {
  Guard.useGuard('Footer');

  return (
    <div className="sticky bottom-0 z-10 border-t border-border-subtle bg-background p-4 text-center">
      <div className="mx-auto w-full max-w-lg">{children}</div>
    </div>
  );
}
