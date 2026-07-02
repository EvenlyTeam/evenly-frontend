import { GroupCard } from '@/components/GroupCard';
import { useIsDesktop } from '@/hooks/useIsDesktop';

import ChevronRightIcon from '../assets/chevron-right.svg?react';
import type { GroupSummaryItem } from '../types';
import { CreateFab } from './CreateFab';
import { GroupCreateCard } from './GroupCreateCard';

export function GroupList({
  title,
  groups,
}: {
  title: string;
  groups: GroupSummaryItem[];
}) {
  const isDesktop = useIsDesktop();

  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <div className="text-heading-md text-foreground lg:text-heading-lg">
        {title}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {groups.map((group) => (
          <GroupCard key={group.id}>
            <div className="flex justify-between">
              <GroupCard.Participants names={group.participantNames} />

              {!isDesktop && <GroupCard.Status status={group.status} />}
            </div>

            <GroupCard.Title title={group.name} className="mt-3.5" />

            <GroupCard.Meta
              participantCount={group.participantCount}
              date={group.date}
              className="mt-1 lg:mt-1.25"
            />

            {isDesktop && (
              <>
                <hr className="mt-4.5 border-border-subtle" />

                <div className="mt-3.5 flex justify-between">
                  <GroupCard.Status status={group.status} />
                  <ChevronRightIcon className="text-subtle-foreground" />
                </div>
              </>
            )}
          </GroupCard>
        ))}

        {isDesktop ? <GroupCreateCard /> : <CreateFab label="새 모임 만들기" />}
      </div>
    </div>
  );
}
