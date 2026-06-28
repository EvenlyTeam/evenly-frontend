import {
  AuthBrandPanel,
  AuthSignUpFormPanel,
  AuthStyleWrapper,
} from '@/features/auth/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

export function SignUpPage() {
  const isDesktop = useIsDesktop();

  return (
    <AuthStyleWrapper>
      {isDesktop && (
        <AuthStyleWrapper.BrandPanel>
          <AuthBrandPanel />
        </AuthStyleWrapper.BrandPanel>
      )}

      <AuthStyleWrapper.FormPanel>
        <AuthSignUpFormPanel />
      </AuthStyleWrapper.FormPanel>
    </AuthStyleWrapper>
  );
}
