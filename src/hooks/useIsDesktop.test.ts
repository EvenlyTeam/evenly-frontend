import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { DESKTOP_BREAKPOINT } from '@/constants/breakpoints';

import { useIsDesktop } from './useIsDesktop';

/**
 * 제어 가능한 matchMedia 목.
 * - matches 현재값을 갖고 있고
 * - setMatches로 "화면이 경계를 넘는 상황"을 시뮬레이션해 change 이벤트를 발화한다.
 * - listeners로 리스너 등록/해제(cleanup)를 검증할 수 있다
 */
function createMatchMediaMock(initialMatches: boolean) {
  let currentMatches = initialMatches;
  const listeners = new Set<(e: MediaQueryListEvent) => void>();

  const matchMedia = vi.fn((query: string) => ({
    get matches() {
      return currentMatches;
    },
    media: query,
    onchange: null,
    addEventListener: (_: string, listener: (e: MediaQueryListEvent) => void) =>
      listeners.add(listener),
    removeEventListener: (
      _: string,
      listener: (e: MediaQueryListEvent) => void,
    ) => listeners.delete(listener),
  }));

  function setMatches(value: boolean) {
    currentMatches = value;
    listeners.forEach((listener) =>
      listener({ matches: value } as MediaQueryListEvent),
    );
  }

  return { matchMedia, setMatches, listeners };
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useIsDesktop', () => {
  it(`정확히 (min-width: ${DESKTOP_BREAKPOINT}) 쿼리로 matchMedia를 호출한다`, () => {
    const mock = createMatchMediaMock(true);
    vi.stubGlobal('matchMedia', mock.matchMedia);

    renderHook(() => useIsDesktop());

    expect(mock.matchMedia).toHaveBeenCalledWith(
      `(min-width: ${DESKTOP_BREAKPOINT}px)`,
    );
  });

  it('모바일 → 데스크톱으로 경계를 넘으면 false에서 true로 갱신된다', () => {
    const mock = createMatchMediaMock(false);
    vi.stubGlobal('matchMedia', mock.matchMedia);

    const { result } = renderHook(() => useIsDesktop());
    expect(result.current).toBe(false);

    act(() => mock.setMatches(true));

    expect(result.current).toBe(true);
  });

  it('데스크톱 → 모바일로 경계를 넘으면 true에서 false로 갱신된다', () => {
    const mock = createMatchMediaMock(true);
    vi.stubGlobal('matchMedia', mock.matchMedia);

    const { result } = renderHook(() => useIsDesktop());
    expect(result.current).toBe(true);

    act(() => mock.setMatches(false));

    expect(result.current).toBe(false);
  });

  it('언마운트 시 change 리스너를 제거한다 (메모리 누수 방지)', () => {
    const mock = createMatchMediaMock(true);
    vi.stubGlobal('matchMedia', mock.matchMedia);

    const { unmount } = renderHook(() => useIsDesktop());
    expect(mock.listeners.size).toBe(1);

    unmount();

    expect(mock.listeners.size).toBe(0);
  });
});
