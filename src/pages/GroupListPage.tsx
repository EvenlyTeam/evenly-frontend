import { Navbar } from '@/components';
import { GroupLayout, GroupList } from '@/features/group/components';
import type { GroupSummaryItem } from '@/features/group/types';

const GROUPS: GroupSummaryItem[] = [
  {
    id: '1',
    name: '모임 1',
    participantNames: ['남수민', '김철수', '이영희'],
    participantCount: 3,
    date: '2026.06.24',
    status: 'ongoing',
  },
  {
    id: '2',
    name: '모임 2',
    participantNames: ['박지민', '최성준'],
    participantCount: 2,
    date: '2026.06.25',
    status: 'settled',
  },
];

export function GroupListPage() {
  return (
    <GroupLayout>
      <GroupLayout.Navbar>
        <Navbar>
          <Navbar.Start>
            <Navbar.Logo />
          </Navbar.Start>
          <Navbar.End>
            <Navbar.UserMenu userName={'남수민'} />
          </Navbar.End>
        </Navbar>
      </GroupLayout.Navbar>

      <GroupLayout.ListBody>
        <GroupList title="내 모임" groups={GROUPS} />
      </GroupLayout.ListBody>
    </GroupLayout>
  );
}
