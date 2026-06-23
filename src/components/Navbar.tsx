/* eslint-disable react-refresh/only-export-components */

import { type PropsWithChildren } from 'react';

import { NavbarContext, useNavbarContext } from '@/hooks/useNavbarContext';

interface NavbarProps {
  isDesktop: boolean;
}

export const Navbar = Object.assign(Base, { Logo });

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

function Logo() {
  const { isDesktop } = useNavbarContext();

  return (
    <div
      // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
      className={`leading-none font-semibold text-primary ${isDesktop ? 'text-[22px]' : 'text-[20px]'}`}
    >
      evenly
    </div>
  );
}
