/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren } from 'react';

export const AuthStyleWrapper = Object.assign(Base, { BrandPanel, FormPanel });

function Base({ children }: PropsWithChildren) {
  return <main className="flex min-h-dvh justify-center">{children}</main>;
}

function BrandPanel({ children }: PropsWithChildren) {
  return <div className="hidden lg:block lg:flex-2">{children}</div>;
}

function FormPanel({ children }: PropsWithChildren) {
  return (
    <div className="max-w-140 flex-1 px-6 lg:my-auto lg:px-12">{children}</div>
  );
}
