import { Desktop, Mobile, Navbar } from '@/components';
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

      <Desktop>
        <GroupStyleWrapper.Body.D>content</GroupStyleWrapper.Body.D>
      </Desktop>

      <Mobile>
        <GroupStyleWrapper.Body.M>content</GroupStyleWrapper.Body.M>
      </Mobile>
    </GroupStyleWrapper>
  );
}
