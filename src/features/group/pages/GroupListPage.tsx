import { Navbar } from '@/components';

import { GroupList, GroupStyleWrapper } from '../components';

export function GroupListPage() {
  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        <Navbar>
          <Navbar.Logo />
          <Navbar.UserMenu userName={'남수민'} />
        </Navbar>
      </GroupStyleWrapper.Navbar>

      <GroupStyleWrapper.List>
        <GroupList>
          <GroupList.Title title="내 모임" />
          <GroupList.Grid />
        </GroupList>
      </GroupStyleWrapper.List>
    </GroupStyleWrapper>
  );
}
