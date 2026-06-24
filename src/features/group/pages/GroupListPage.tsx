import { Navbar } from '@/components';

import { GroupStyleWrapper } from '../components';

export function GroupListPage() {
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  return (
    <GroupStyleWrapper>
      <GroupStyleWrapper.Navbar>
        <Navbar>
          <Navbar.Logo />
          <Navbar.UserMenu userName={'남수민'} />
        </Navbar>
      </GroupStyleWrapper.Navbar>

      <GroupStyleWrapper.Body>
        <div className="text-heading-md text-foreground lg:text-heading-lg">
          내 모임
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id}>{item.id}</div>
          ))}
        </div>
      </GroupStyleWrapper.Body>
    </GroupStyleWrapper>
  );
}
