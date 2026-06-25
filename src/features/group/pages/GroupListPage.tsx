import { Desktop, Mobile, Navbar } from '@/components';

import ChevronRight from '../assets/icons/chevron-right.svg?react';
import {
  GroupCard,
  GroupCreateCard,
  GroupCreateFab,
  GroupListGrid,
  GroupStyleWrapper,
} from '../components';

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

  const attendees = ['김OO', '박OO', '남OO', '이OO', '정OO'];

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
          <>
            {items.map((item) => (
              <GroupCard key={item.id}>
                <div className="flex justify-between">
                  <GroupCard.Attendees names={attendees} />

                  <Mobile>
                    <GroupCard.Status status="ongoing" />
                  </Mobile>
                </div>

                <GroupCard.Title title="그룹 이름" className="mt-3.5" />

                <GroupCard.Detail
                  attendeeCount={4}
                  date={'2026.06.24'}
                  className="mt-1 lg:mt-1.25"
                />

                <Desktop>
                  <hr className="mt-4.5 border-border-subtle" />

                  <div className="mt-3.5 flex justify-between">
                    <GroupCard.Status status="ongoing" />
                    <ChevronRight className="text-subtle-foreground" />
                  </div>
                </Desktop>
              </GroupCard>
            ))}

            <Desktop>
              <GroupCreateCard />
            </Desktop>

            <Mobile>
              <GroupCreateFab />
            </Mobile>
          </>
        </GroupListGrid>
      </GroupStyleWrapper.Body>
    </GroupStyleWrapper>
  );
}
