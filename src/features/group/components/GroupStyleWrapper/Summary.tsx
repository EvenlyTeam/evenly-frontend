import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupStyleWrapper');

export function Summary({ children }: PropsWithChildren) {
  Guard.useGuard('Summary');

  return <aside className="w-full lg:w-[380px] lg:shrink-0">{children}</aside>;
}
