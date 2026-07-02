import { createCompoundGuard } from '@/utils/createCompoundGuard';
import { getInitial } from '@/utils/getInitial';

import { Avatar } from '../Avatar';

const Guard = createCompoundGuard('Navbar');

export function UserMenu({ userName }: { userName: string }) {
  Guard.useGuard('UserMenu');

  const initial = getInitial(userName);

  return (
    <button type="button" aria-label="사용자 메뉴">
      <Avatar text={initial} size="lg" aria-hidden />
    </button>
  );
}
