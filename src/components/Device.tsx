import type { PropsWithChildren } from 'react';

import { useIsDesktop } from '@/hooks/useIsDesktop';

export function Desktop({ children }: PropsWithChildren) {
  return useIsDesktop() ? children : null;
}

export function Mobile({ children }: PropsWithChildren) {
  return useIsDesktop() ? null : children;
}
