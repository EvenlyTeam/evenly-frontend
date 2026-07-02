import {
  AuthBrandingPanel,
  AuthLayout,
  AuthSignInPanel,
} from '@/features/auth/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

export function SignInPage() {
  const isDesktop = useIsDesktop();

  return (
    <AuthLayout>
      {isDesktop && (
        <AuthLayout.Aside>
          <AuthBrandingPanel />
        </AuthLayout.Aside>
      )}

      <AuthLayout.Body>
        <AuthSignInPanel />
      </AuthLayout.Body>
    </AuthLayout>
  );
}
