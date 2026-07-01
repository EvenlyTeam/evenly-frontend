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
        <Navbar.Title title={name} />
        <Navbar.GroupInfo attendeeCount={attendeeCount} date={date} />
      </Navbar.Start>

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
