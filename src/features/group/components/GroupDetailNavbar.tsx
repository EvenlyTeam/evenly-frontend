import { Navbar } from '@/components';

import MoreHorizontalIcon from '../assets/more-horizontal.svg?react';

interface GroupDetailNavbarProps {
  name: string;
  attendeeCount: number;
  date: string;
}

export function GroupDetailNavbar({
  name,
  attendeeCount,
  date,
}: GroupDetailNavbarProps) {
  return (
    <Navbar>
      <Navbar.Start>
        <Navbar.BackButton />
      </Navbar.Start>

      <div className="min-w-0 flex-1">
        <h1 className="truncate text-heading-md leading-tight font-semibold text-foreground">
          {name}
        </h1>
        <p className="mt-0.5 text-body-sm text-subtle-foreground">
          {`${attendeeCount}명 · ${date}`}
        </p>
      </div>

      <Navbar.End>
        <button
          type="button"
          aria-label="모임 메뉴"
          className="flex shrink-0 items-center justify-center text-subtle-foreground"
        >
          <MoreHorizontalIcon aria-hidden className="size-5.5" />
        </button>
      </Navbar.End>
    </Navbar>
  );
}
