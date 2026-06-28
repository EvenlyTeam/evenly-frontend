import type { PropsWithChildren } from 'react';

export function GroupListGrid({ children }: PropsWithChildren) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
