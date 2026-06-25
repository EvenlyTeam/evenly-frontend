/* eslint-disable react-refresh/only-export-components */

import { type PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

import { Avatar } from './Avatar';

export const Navbar = Object.assign(Base, { Logo, UserMenu });

const Guard = createCompoundGuard('Navbar');

function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <nav className="flex h-14 w-full items-center justify-between border-b border-border-subtle bg-surface px-4 lg:h-16 lg:px-7">
        {children}
      </nav>
    </Guard.Provider>
  );
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
      <Avatar label={initial} size="lg" area-hidden />
    </button>
  );
}
