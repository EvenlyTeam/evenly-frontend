import type { PropsWithChildren } from 'react';

export function Base({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-5 rounded-card border border-border-subtle bg-surface p-6 shadow-card">
      {children}
    </div>
  );
}
