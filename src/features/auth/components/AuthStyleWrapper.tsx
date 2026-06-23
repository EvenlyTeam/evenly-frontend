/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren } from 'react';

export const AuthStyleWrapper = Object.assign(Base, { BrandPanel, FormPanel });

function Base({ children }: PropsWithChildren) {
  return <main className="flex min-h-dvh justify-center">{children}</main>;
}

function BrandPanel({ children }: PropsWithChildren) {
  return <div className="flex-2">{children}</div>;
}

function FormPanel({ children }: PropsWithChildren) {
  return (
    <div className="my-auto max-w-140 flex-1 px-12 lg:px-6">{children}</div>
  );
}
