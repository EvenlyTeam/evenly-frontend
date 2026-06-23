import { createContext, useContext } from 'react';

interface NavbarContextValue {
  isDesktop: boolean;
}

export const NavbarContext = createContext<NavbarContextValue | null>(null);

export function useNavbarContext() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error('Navbar must be used within its Provider');
  }

  return context;
}
