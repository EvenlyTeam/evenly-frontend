import { createCompoundGuard } from '@/utils/createCompoundGuard';

import EditIcon from '../assets/edit.svg?react';
import TrashIcon from '../assets/trash.svg?react';

const Guard = createCompoundGuard('ExpenseListItem');

export function Actions({
  onEdit,
  onDelete,
}: {
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  Guard.useGuard('Actions');
  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={onEdit}
        aria-label="지출 수정"
        className="text-subtle-foreground"
      >
        <EditIcon aria-hidden className="size-4.25" />
      </button>
      <button
        type="button"
        onClick={onDelete}
        aria-label="지출 삭제"
        className="text-subtle-foreground"
      >
        <TrashIcon aria-hidden className="size-4.25" />
      </button>
    </div>
  );
}
