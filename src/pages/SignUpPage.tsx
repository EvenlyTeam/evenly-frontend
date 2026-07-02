import {
  AuthBrandingPanel,
  AuthLayout,
  AuthSignUpPanel,
} from '@/features/auth/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

export function SignUpPage() {
  const isDesktop = useIsDesktop();

  return (
    <AuthLayout>
      {isDesktop && (
        <AuthLayout.Aside>
          <AuthBrandingPanel />
        </AuthLayout.Aside>
      )}

      <AuthLayout.Body>
        <AuthSignUpPanel />
      </AuthLayout.Body>
    </AuthLayout>
  );
}
