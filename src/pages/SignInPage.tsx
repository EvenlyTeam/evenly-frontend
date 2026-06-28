import {
  AuthBrandPanel,
  AuthSignInFormPanel,
  AuthStyleWrapper,
} from '@/features/auth/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

export function SignInPage() {
  const isDesktop = useIsDesktop();

  return (
    <AuthStyleWrapper>
      {isDesktop && (
        <AuthStyleWrapper.BrandPanel>
          <AuthBrandPanel />
        </AuthStyleWrapper.BrandPanel>
      )}

      <AuthStyleWrapper.FormPanel>
        <AuthSignInFormPanel />
      </AuthStyleWrapper.FormPanel>
    </AuthStyleWrapper>
  );
}
