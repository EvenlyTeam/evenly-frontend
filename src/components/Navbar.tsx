/* eslint-disable react-refresh/only-export-components */

import { type PropsWithChildren } from 'react';

import { NavbarContext } from '@/hooks/useNavbarContext';

interface NavbarProps {
  isDesktop: boolean;
}

export const Navbar = Object.assign(Base);

function Base({ isDesktop, children }: PropsWithChildren<NavbarProps>) {
  return (
    <NavbarContext.Provider value={{ isDesktop }}>
      <div
        className={`flex w-full items-center border-b border-border-subtle bg-surface ${isDesktop ? 'h-16 px-7' : 'h-14 px-4'}`}
      >
        {children}
      </div>
    </NavbarContext.Provider>
  );
}
