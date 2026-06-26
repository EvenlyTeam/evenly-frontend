/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

export const GroupStyleWrapper = Object.assign(Base, {
  Navbar,
  List,
  Create,
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

function List({ children }: PropsWithChildren) {
  Guard.useGuard('List');

  return (
    <div className="flex-1 p-4 lg:px-16 lg:py-8">
      <div className="mx-auto w-full max-w-content">{children}</div>
    </div>
  );
}

function Create({ children }: PropsWithChildren) {
  Guard.useGuard('Create');

  return (
    <div className="flex-1 p-4 pt-5.5 lg:px-3.5 lg:py-12">
      <div className="mx-auto w-fit">{children}</div>
    </div>
  );
}
