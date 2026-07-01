import { Button } from '@/components';

import PlusIcon from '../assets/plus.svg?react';
import { ExpenseListItem } from './ExpenseListItem';

interface ExpenseItem {
  id: string;
  payer: string;
  description: string;
  shareLabel: string;
  amount: number;
}

// @TODO: 임시 정적 데이터 — API 연동 시 제거
const expenses: ExpenseItem[] = [
  {
    id: '1',
    payer: '민지',
    description: '저녁 고깃집',
    shareLabel: '준호·민지·태우 분담',
    amount: 120000,
  },
  {
    id: '2',
    payer: '준호',
    description: '점심 칼국수',
    shareLabel: '전체 분담',
    amount: 48000,
  },
  {
    id: '3',
    payer: '태우',
    description: '편의점 간식',
    shareLabel: '전체 분담',
    amount: 28500,
  },
];

export function ExpenseList() {
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
