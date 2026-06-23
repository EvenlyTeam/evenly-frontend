import { Navbar } from '@/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

export function GroupListPage() {
  const isDesktop = useIsDesktop();

  return (
    <Navbar isDesktop={isDesktop}>
      <Navbar.Logo />
      <Navbar.UserMenu userName={'남수민'} />
    </Navbar>
  );
}
