import { Navbar } from '@/components';
import { GroupLayout,GroupList } from '@/features/group/components';

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
        <GroupList title="내 모임" />
      </GroupLayout.ListBody>
    </GroupLayout>
  );
}
