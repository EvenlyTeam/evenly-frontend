import { useCallback, useSyncExternalStore } from 'react';

import { DESKTOP_MEDIA_QUERY } from '@/constants/breakpoints';

/** 현재 뷰포트가 데스크톱(>= 1024px)인지 판별 */
export function useIsDesktop(): boolean {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const mql = window.matchMedia(DESKTOP_MEDIA_QUERY);
    mql.addEventListener('change', onStoreChange);
    return () => mql.removeEventListener('change', onStoreChange);
  }, []);

  const getSnapshot = () => window.matchMedia(DESKTOP_MEDIA_QUERY).matches;
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
