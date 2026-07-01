import { useState } from 'react';

import { MoreButton, Navbar, Tabs } from '@/components';
import {
  BalanceSummary,
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

export function GroupDetailPage() {
  const [tab, setTab] = useState<DetailTab>('expenses');

  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        {/* @TODO: 임시 정적 props — 라우트 파라미터/조회로 대체 */}
        <Navbar>
          <Navbar.Start>
            <Navbar.BackButton />
            <Navbar.Title title={'강릉 여행 모임'} />
            <Navbar.GroupInfo attendeeCount={4} date={'2025.06.10'} />
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
          <BalanceSummary />
        </GroupStyleWrapper.Summary>
      </GroupStyleWrapper.Detail>

      <ExpenseCreateFab />
    </GroupStyleWrapper>
  );
}
