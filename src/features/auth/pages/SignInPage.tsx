import { Desktop } from '@/components';

import {
  AuthBrandPanel,
  AuthSignInFormPanel,
  AuthStyleWrapper,
} from '../components';

export function SignInPage() {
  return (
    <AuthStyleWrapper>
      <Desktop>
        <AuthStyleWrapper.BrandPanel>
          <AuthBrandPanel />
        </AuthStyleWrapper.BrandPanel>
      </Desktop>

      <AuthStyleWrapper.FormPanel>
        <AuthSignInFormPanel />
      </AuthStyleWrapper.FormPanel>
    </AuthStyleWrapper>
  );
}
