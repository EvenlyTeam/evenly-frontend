import { Navbar } from '@/components';

import { GroupCreateForm, GroupStyleWrapper } from '../components';

export function GroupCreatePage() {
  return (
    <>
      <GroupStyleWrapper>
        <GroupStyleWrapper.Navbar>
          <Navbar>
            <Navbar.Start>
              <Navbar.BackButton />
              <Navbar.Title title={'새 모임'} />
            </Navbar.Start>
          </Navbar>
        </GroupStyleWrapper.Navbar>

        <GroupStyleWrapper.Create>
          <GroupCreateForm />
        </GroupStyleWrapper.Create>
      </GroupStyleWrapper>
    </>
  );
}
