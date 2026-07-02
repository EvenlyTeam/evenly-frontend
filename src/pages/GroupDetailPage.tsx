import { useState } from 'react';

import { BalanceSummary, Button, MoreButton, Navbar, Tabs } from '@/components';
import {
  ExpenseCreateFab,
  ExpenseList,
  GroupDetailLayout,
} from '@/features/group/components';
import type { ExpenseListItemData } from '@/features/group/types';
import { cn } from '@/utils/cn';

type DetailTab = 'expenses' | 'balance';

const TABS = [
  { value: 'expenses', label: '지출 목록' },
  { value: 'balance', label: '순잔액' },
] as const satisfies ReadonlyArray<{ value: DetailTab; label: string }>;

const MY_BALANCE = 142000;
const TOTAL = 196500;
const BALANCES = [
  { name: '준호', amount: 142000 },
  { name: '민지', amount: 22000 },
  { name: '서연', amount: -66000 },
  { name: '태우', amount: -98000 },
];

const EXPENSES: ExpenseListItemData[] = [
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

export function GroupDetailPage() {
  const [tab, setTab] = useState<DetailTab>('expenses');

  return (
    <GroupDetailLayout>
      <GroupDetailLayout.Navbar>
        <Navbar>
          <Navbar.Start>
            <Navbar.BackButton />
            <Navbar.Title title={'강릉 여행 모임'} />
            <Navbar.Meta participantCount={4} date={'2025.06.10'} />
          </Navbar.Start>

          <Navbar.End>
            <MoreButton />
          </Navbar.End>
        </Navbar>
      </GroupDetailLayout.Navbar>

      <GroupDetailLayout.Body>
        <Tabs
          className="w-full lg:hidden"
          value={tab}
          onChange={setTab}
          tabs={TABS}
        />

        <GroupDetailLayout.Expenses
          className={cn(tab !== 'expenses' && 'max-lg:hidden')}
        >
          <ExpenseList expenses={EXPENSES} />
        </GroupDetailLayout.Expenses>

        <GroupDetailLayout.Summary
          className={cn(tab !== 'balance' && 'max-lg:hidden')}
        >
          <BalanceSummary>
            <BalanceSummary.MyBalance amount={MY_BALANCE} />
            <BalanceSummary.Divider />
            <BalanceSummary.Total amount={TOTAL} />
            <BalanceSummary.NetBalances balances={BALANCES} />
            <BalanceSummary.Divider />
            <BalanceSummary.Actions>
              <Button size="md" className="w-full">
                정산 결과 보기
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                정산 완료로 표시하기
              </Button>
            </BalanceSummary.Actions>
          </BalanceSummary>
        </GroupDetailLayout.Summary>
      </GroupDetailLayout.Body>

      <ExpenseCreateFab />
    </GroupDetailLayout>
  );
}
