import { createCompoundGuard } from '@/utils/createCompoundGuard';

import { Avatar } from '../Avatar';

const Guard = createCompoundGuard('Navbar');

export function UserMenu({ userName }: { userName: string }) {
  Guard.useGuard('UserMenu');

  const initial = userName.charAt(0).toUpperCase();

  return (
    <button type="button" aria-label="사용자 메뉴">
      <Avatar label={initial} size="lg" aria-hidden />
    </button>
  );
}
