/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

export const GroupStyleWrapper = Object.assign(Base, {
  Navbar,
  Body,
});

const Guard = createCompoundGuard('GroupStyleWrapper');

function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <div className="flex min-h-dvh w-full flex-col justify-center">
        {children}
      </div>
    </Guard.Provider>
  );
}

function Navbar({ children }: PropsWithChildren) {
  Guard.useGuard('Navbar');
  return <div className="sticky top-0 w-full">{children}</div>;
}

function Body({ children }: PropsWithChildren) {
  Guard.useGuard('Body');
  return <div className="w-full flex-1 p-4 lg:px-16 lg:py-8">{children}</div>;
}
