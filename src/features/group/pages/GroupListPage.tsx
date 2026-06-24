import { Navbar } from '@/components';

import ChevronRight from '../assets/icons/chevron-right.svg?react';
import { GroupListGrid, GroupStyleWrapper } from '../components';

export function GroupListPage() {
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        <Navbar>
          <Navbar.Logo />
          <Navbar.UserMenu userName={'남수민'} />
        </Navbar>
      </GroupStyleWrapper.Navbar>

      <GroupStyleWrapper.Body>
        <div className="text-heading-md text-foreground lg:text-heading-lg">
          내 모임
        </div>

        <GroupListGrid>
          {items.map((item) => (
            <div key={item.id}>
              <div className="cursor-pointer rounded-card bg-surface p-5 shadow-card">
                <div className="flex justify-between">참석자</div>

                <div className="mt-3.5 text-body-sm font-semibold text-foreground lg:mt-4.5 lg:text-body-md">
                  그룹 이름
                </div>

                <div className="mt-1 text-body-sm text-subtle-foreground lg:mt-1.25">
                  4명 · 2026.06.24
                </div>

                <hr className="mt-4.5 border-border-subtle" />

                <div className="mt-3.5 flex justify-between">
                  <div className="rounded-badge bg-primary/12 px-2 py-1.25 text-label leading-none text-primary">
                    진행 중
                  </div>

                  <div className="rounded-badge bg-positive-surface px-2 py-1.25 text-label leading-none text-settled">
                    정산 완료 (for Test)
                  </div>

                  <ChevronRight className="text-subtle-foreground" />
                </div>
              </div>
            </div>
          ))}
        </GroupListGrid>
      </GroupStyleWrapper.Body>
    </GroupStyleWrapper>
  );
}
