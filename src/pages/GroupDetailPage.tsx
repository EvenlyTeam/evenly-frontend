import { useState } from 'react';

import { BalanceSummary, Button, MoreButton, Navbar, Tabs } from '@/components';
import {
  ExpenseCreateFab,
  ExpenseList,
  GroupStyleWrapper,
} from '@/features/group/components';
import { cn } from '@/utils/cn';

type DetailTab = 'expenses' | 'balance';

const TABS = [
  { value: 'expenses', label: '지출 목록' },
  { value: 'balance', label: '순잔액' },
] as const satisfies ReadonlyArray<{ value: DetailTab; label: string }>;

/* @TODO: 임시 정적 데이터 */
const MY_BALANCE = 142000;
const TOTAL = 196500;
const BALANCES = [
  { name: '준호', amount: 142000 },
  { name: '민지', amount: 22000 },
  { name: '서연', amount: -66000 },
  { name: '태우', amount: -98000 },
];

export function GroupDetailPage() {
  const [tab, setTab] = useState<DetailTab>('expenses');

  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        {/* @TODO: 임시 정적 props */}
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
      </GroupStyleWrapper.Navbar>

      <GroupStyleWrapper.Detail>
        <Tabs
          className="w-full lg:hidden"
          value={tab}
          onChange={setTab}
          tabs={TABS}
        />

        <GroupStyleWrapper.Expenses
          className={cn(tab !== 'expenses' && 'max-lg:hidden')}
        >
          <ExpenseList />
        </GroupStyleWrapper.Expenses>

        <GroupStyleWrapper.Summary
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
        </GroupStyleWrapper.Summary>
      </GroupStyleWrapper.Detail>

      <ExpenseCreateFab />
    </GroupStyleWrapper>
  );
}
