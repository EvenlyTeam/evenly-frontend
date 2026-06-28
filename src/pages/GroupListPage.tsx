import { Navbar } from '@/components';
import { GroupList, GroupStyleWrapper } from '@/features/group/components';

export function GroupListPage() {
  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        <Navbar>
          <Navbar.Start>
            <Navbar.Logo />
          </Navbar.Start>
          <Navbar.End>
            <Navbar.UserMenu userName={'남수민'} />
          </Navbar.End>
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
