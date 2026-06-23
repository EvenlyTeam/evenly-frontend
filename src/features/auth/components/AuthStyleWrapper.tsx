/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren } from 'react';

export const AuthStyleWrapper = Object.assign(Base, {
  D: { BrandPanel: DBrandPanel, FormPanel: DFormPanel },
  M: { FormPanel: MFormPanel },
});

function Base({ children }: PropsWithChildren) {
  return <main className="flex min-h-dvh justify-center">{children}</main>;
}

function DBrandPanel({ children }: PropsWithChildren) {
  return <div className="flex-2">{children}</div>;
}

function DFormPanel({ children }: PropsWithChildren) {
  return <div className="my-auto max-w-140 flex-1 px-12">{children}</div>;
}

function MFormPanel({ children }: PropsWithChildren) {
  return <div className="max-w-140 flex-1 px-6">{children}</div>;
}
