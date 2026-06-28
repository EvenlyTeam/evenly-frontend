import { GroupCard } from '@/components/GroupCard';
import { useIsDesktop } from '@/hooks/useIsDesktop';

import ChevronRight from '../assets/chevron-right.svg?react';
import { GroupCreateCard } from './GroupCreateCard';
import { GroupCreateFab } from './GroupCreateFab';

// @TODO: 임시 item 선언 제거
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

export function GroupList({ title }: { title: string }) {
  const isDesktop = useIsDesktop();

  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <div className="text-heading-md text-foreground lg:text-heading-lg">
        {title}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {items.map((item) => (
          <GroupCard key={item.id}>
            <div className="flex justify-between">
              <GroupCard.Attendees names={attendees} />

              {!isDesktop && <GroupCard.Status status="ongoing" />}
            </div>

            <GroupCard.Title title="그룹 이름" className="mt-3.5" />

            <GroupCard.Detail
              attendeeCount={4}
              date={'2026.06.24'}
              className="mt-1 lg:mt-1.25"
            />

            {isDesktop && (
              <>
                <hr className="mt-4.5 border-border-subtle" />

                <div className="mt-3.5 flex justify-between">
                  <GroupCard.Status status="ongoing" />
                  <ChevronRight className="text-subtle-foreground" />
                </div>
              </>
            )}
          </GroupCard>
        ))}

        {isDesktop ? <GroupCreateCard /> : <GroupCreateFab />}
      </div>
    </div>
  );
}
