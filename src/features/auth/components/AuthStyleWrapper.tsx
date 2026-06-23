/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren } from 'react';

import { createCompoundGuard } from '@/utils/createCompoundGuard';

export const AuthStyleWrapper = Object.assign(Base, { BrandPanel, FormPanel });

const Guard = createCompoundGuard('AuthStyleWrapper');

function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <main className="flex min-h-dvh w-full justify-center">{children}</main>
    </Guard.Provider>
  );
}

function BrandPanel({ children }: PropsWithChildren) {
  Guard.useGuard('BrandPanel');
  return <div className="flex-2">{children}</div>;
}

function FormPanel({ children }: PropsWithChildren) {
  Guard.useGuard('FormPanel');
  return (
    <div className="my-auto max-w-140 flex-1 px-12 lg:px-6">{children}</div>
  );
}
