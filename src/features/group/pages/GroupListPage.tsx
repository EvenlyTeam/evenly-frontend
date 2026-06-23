import { Navbar } from '@/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

import { GroupStyleWrapper } from '../components';

export function GroupListPage() {
  const isDesktop = useIsDesktop();

  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        <Navbar isDesktop={isDesktop}>
          <Navbar.Logo />
          <Navbar.UserMenu userName={'남수민'} />
        </Navbar>
      </GroupStyleWrapper.Navbar>

      <GroupStyleWrapper.Body>content</GroupStyleWrapper.Body>
    </GroupStyleWrapper>
  );
}
