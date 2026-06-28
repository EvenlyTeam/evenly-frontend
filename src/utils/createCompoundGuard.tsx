import { createContext, type PropsWithChildren, useContext } from 'react';

export function createCompoundGuard(groupName: string) {
  const ctx = createContext(false);

  function Provider({ children }: PropsWithChildren) {
    return <ctx.Provider value={true}>{children}</ctx.Provider>;
  }

  function useGuard(name: string) {
    if (!useContext(ctx)) {
      throw new Error(`${name} is must be used within ${groupName}.`);
    }
  }

  return { Provider, useGuard };
}
