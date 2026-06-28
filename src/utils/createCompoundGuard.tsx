import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useContext,
} from 'react';

interface CompoundGuard {
  Provider: (props: PropsWithChildren) => ReactNode;
  useGuard: (component: string) => void;
}

const registry = new Map<string, CompoundGuard>();

export function createCompoundGuard(name: string): CompoundGuard {
  const cached = registry.get(name);
  if (cached) {
    return cached;
  }

  const Context = createContext(false);
  Context.displayName = `${name}GuardContext`;

  function Provider({ children }: PropsWithChildren) {
    return <Context.Provider value={true}>{children}</Context.Provider>;
  }
  Provider.displayName = `${name}GuardProvider`;

  function useGuard(component: string) {
    const isInside = useContext(Context);
    if (!isInside) {
      throw new Error(
        `<${name}.${component}>는 <${name}> 안에서만 사용할 수 있습니다.`,
      );
    }
  }

  const guard: CompoundGuard = { Provider, useGuard };
  registry.set(name, guard);
  return guard;
}
