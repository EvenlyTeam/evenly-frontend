import { Navbar } from '@/components';
import { GroupCreateForm, GroupLayout } from '@/features/group/components';

export function GroupCreatePage() {
  return (
    <>
      <GroupLayout>
        <GroupLayout.Navbar>
          <Navbar>
            <Navbar.Start>
              <Navbar.BackButton />
              <Navbar.Title title={'새 모임'} />
            </Navbar.Start>
          </Navbar>
        </GroupLayout.Navbar>

        <GroupLayout.CreateBody>
          <GroupCreateForm />
        </GroupLayout.CreateBody>
      </GroupLayout>
    </>
  );
}
