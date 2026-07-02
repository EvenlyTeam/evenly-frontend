import { Navbar } from '@/components';
import {
  GroupCreateForm,
  GroupCreateLayout,
} from '@/features/group/components';

export function GroupCreatePage() {
  return (
    <>
      <GroupCreateLayout>
        <GroupCreateLayout.Navbar>
          <Navbar>
            <Navbar.Start>
              <Navbar.BackButton />
              <Navbar.Title title={'새 모임'} />
            </Navbar.Start>
          </Navbar>
        </GroupCreateLayout.Navbar>

        <GroupCreateLayout.Body>
          <GroupCreateForm />
        </GroupCreateLayout.Body>
      </GroupCreateLayout>
    </>
  );
}
