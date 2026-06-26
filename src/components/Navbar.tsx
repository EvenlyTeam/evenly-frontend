/* eslint-disable react-refresh/only-export-components */

import { type PropsWithChildren } from 'react';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg?react';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

import { Avatar } from './Avatar';

export const Navbar = Object.assign(Base, {
  Start,
  End,
  Logo,
  UserMenu,
  BackButton,
  Title,
});

const Guard = createCompoundGuard('Navbar');

function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <nav className="flex h-14 w-full items-center gap-3 border-b border-border-subtle bg-surface px-4 lg:h-16 lg:gap-4 lg:px-7">
        {children}
      </nav>
    </Guard.Provider>
  );
}

function Start({ children }: PropsWithChildren) {
  Guard.useGuard('Start');

  return <div className="flex items-center gap-2">{children}</div>;
}

function End({ children }: PropsWithChildren) {
  Guard.useGuard('End');

  return <div className="ml-auto flex items-center gap-2">{children}</div>;
}

function Logo() {
  Guard.useGuard('Logo');

  return (
    <div className="text-heading-md font-semibold text-primary lg:text-heading-lg">
      evenly
    </div>
  );
}

function UserMenu({ userName }: { userName: string }) {
  Guard.useGuard('UserMenu');

  const initial = userName.charAt(0).toUpperCase();

  return (
    <button type="button" aria-label="사용자 메뉴">
      <Avatar label={initial} size="lg" aria-hidden />
    </button>
  );
}
