import { Button } from '@/components';

import PlusIcon from '../assets/plus.svg?react';
import type { ExpenseListItemData } from '../types';
import { ExpenseListItem } from './ExpenseListItem';

export function ExpenseList({ expenses }: { expenses: ExpenseListItemData[] }) {
  return (
    <div>
      <div className="mb-3.5 flex items-center justify-between">
        <h2 className="text-heading-sm font-semibold text-foreground">
          지출 목록{' '}
          <span className="font-medium text-subtle-foreground">
            {expenses.length}건
          </span>
        </h2>

        <Button size="sm" className="max-lg:hidden">
          <PlusIcon aria-hidden className="size-3.75" />
          지출 추가
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {expenses.map((expense) => (
          <ExpenseListItem key={expense.id}>
            <ExpenseListItem.Avatar name={expense.payer} />
            <ExpenseListItem.Content
              description={expense.description}
              meta={`${expense.payer} 결제 · ${expense.shareLabel}`}
            />
            <ExpenseListItem.Amount value={expense.amount} />
            <ExpenseListItem.Actions />
          </ExpenseListItem>
        ))}
      </div>
    </div>
  );
}
