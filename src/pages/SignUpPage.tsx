import { Desktop } from '@/components';
import {
  AuthBrandPanel,
  AuthSignUpFormPanel,
  AuthStyleWrapper,
} from '@/features/auth/components';

export function SignUpPage() {
  return (
    <AuthStyleWrapper>
      <Desktop>
        <AuthStyleWrapper.BrandPanel>
          <AuthBrandPanel />
        </AuthStyleWrapper.BrandPanel>
      </Desktop>

      <AuthStyleWrapper.FormPanel>
        <AuthSignUpFormPanel />
      </AuthStyleWrapper.FormPanel>
    </AuthStyleWrapper>
  );
}
