/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren } from 'react';

export const GroupStyleWrapper = Object.assign(Base, {
  Navbar,
  Body: { D: BodyD, M: BodyM },
});

function Base({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh w-full flex-col justify-center">
      {children}
    </div>
  );
}

function Navbar({ children }: PropsWithChildren) {
  return <div className="sticky top-0 w-full">{children}</div>;
}

function BodyD({ children }: PropsWithChildren) {
  return <div className="w-full flex-1 px-16 py-8">{children}</div>;
}

function BodyM({ children }: PropsWithChildren) {
  return <div className="w-full flex-1 p-4">{children}</div>;
}
