import type { PropsWithChildren, ReactNode } from 'react';

import { Navbar } from '@/components';

interface ExpenseScreenLayoutProps {
  title: string;
  headerRight?: ReactNode;
  bottomBar?: ReactNode;
}

export function ExpenseScreenLayout({
  title,
  headerRight,
  bottomBar,
  children,
}: PropsWithChildren<ExpenseScreenLayoutProps>) {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Navbar>
        <Navbar.BackButton />
        <Navbar.Title title={title} />
        {headerRight && <Navbar.End>{headerRight}</Navbar.End>}
      </Navbar>

      <div className="flex-1 px-4 py-5">{children}</div>

      {bottomBar}
    </div>
  );
}
