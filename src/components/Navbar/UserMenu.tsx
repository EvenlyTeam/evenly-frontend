import { createCompoundGuard } from '@/utils/createCompoundGuard';
import { getInitial } from '@/utils/getInitial';

import { Avatar } from '../Avatar';

const Guard = createCompoundGuard('Navbar');

interface UserMenuProps {
  userName: string;
}

export function UserMenu({ userName }: UserMenuProps) {
  Guard.useGuard('UserMenu');

  const initial = getInitial(userName);

  return (
    <button type="button" aria-label="사용자 메뉴">
      <Avatar text={initial} size="lg" aria-hidden />
    </button>
  );
}
