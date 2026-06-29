import { Fab } from '@/components';

import Plus from '../assets/plus.svg?react';

export function GroupCreateFab() {
  return (
    <Fab aria-label="새 모임 만들기" className="lg:hidden">
      <Plus aria-hidden />
    </Fab>
  );
}
