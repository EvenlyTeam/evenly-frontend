import { Fab } from '@/components';

import Plus from '../assets/plus.svg?react';

export function ExpenseCreateFab() {
  return (
    <Fab aria-label="지출 추가" className="lg:hidden">
      <Plus aria-hidden />
    </Fab>
  );
}
