import { Navbar } from '@/components';

import { GroupStyleWrapper } from '../components';

export function GroupListPage() {
  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        <Navbar>
          <Navbar.Logo />
          <Navbar.UserMenu userName={'남수민'} />
        </Navbar>
      </GroupStyleWrapper.Navbar>

      <GroupStyleWrapper.Body>content</GroupStyleWrapper.Body>
    </GroupStyleWrapper>
  );
}
