import {
  BalanceSummary,
  ExpenseList,
  GroupDetailNavbar,
  GroupStyleWrapper,
} from '@/features/group/components';

export function GroupDetailPage() {
  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        {/* @TODO: 임시 정적 props — 라우트 파라미터/조회로 대체 */}
        <GroupDetailNavbar
          name="강릉 여행 모임"
          attendeeCount={4}
          date="2025.06.10"
        />
      </GroupStyleWrapper.Navbar>

      <GroupStyleWrapper.Detail>
        <GroupStyleWrapper.Expenses>
          <ExpenseList />
        </GroupStyleWrapper.Expenses>

        <GroupStyleWrapper.Summary>
          <BalanceSummary />
        </GroupStyleWrapper.Summary>
      </GroupStyleWrapper.Detail>
    </GroupStyleWrapper>
  );
}
