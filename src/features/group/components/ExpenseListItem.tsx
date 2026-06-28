import { Amount, Avatar } from '@/components';

import EditIcon from '../assets/edit.svg?react';
import TrashIcon from '../assets/trash.svg?react';

export interface ExpenseItem {
  id: string;
  payer: string;
  description: string;
  shareLabel: string;
  amount: number;
}

export function ExpenseListItem({
  payer,
  description,
  shareLabel,
  amount,
}: ExpenseItem) {
  return (
    <div className="flex items-center gap-3.5 rounded-card border border-border-subtle bg-surface px-4.5 py-4 shadow-card">
      <Avatar size="lg" label={payer.charAt(0)} />

      <div className="min-w-0 flex-1">
        <div className="truncate text-body-lg font-semibold text-foreground">
          {description}
        </div>
        <div className="mt-1 truncate text-body-sm text-subtle-foreground">
          {`${payer} 결제 · ${shareLabel}`}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <Amount value={amount} className="text-body-lg font-semibold" />
        <div className="flex gap-2.5">
          <button
            type="button"
            aria-label="지출 수정"
            className="text-subtle-foreground"
          >
            <EditIcon aria-hidden className="size-4.25" />
          </button>
          <button
            type="button"
            aria-label="지출 삭제"
            className="text-subtle-foreground"
          >
            <TrashIcon aria-hidden className="size-4.25" />
          </button>
        </div>
      </div>
    </div>
  );
}
