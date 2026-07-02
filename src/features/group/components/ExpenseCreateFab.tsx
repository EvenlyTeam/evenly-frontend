import { Fab } from '@/components';

import PlusIcon from '../assets/plus.svg?react';

export function ExpenseCreateFab() {
  return (
    <Fab aria-label="지출 추가" className="lg:hidden">
      <PlusIcon aria-hidden />
    </Fab>
  );
}
