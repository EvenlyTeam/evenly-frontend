import { Desktop, Mobile } from '@/components';

import {
  AuthBrandPanel,
  AuthSignInFormPanel,
  AuthStyleWrapper,
} from '../components';

export function SignInPage() {
  return (
    <AuthStyleWrapper>
      <Desktop>
        <AuthStyleWrapper.D.BrandPanel>
          <AuthBrandPanel />
        </AuthStyleWrapper.D.BrandPanel>

        <AuthStyleWrapper.D.FormPanel>
          <AuthSignInFormPanel />
        </AuthStyleWrapper.D.FormPanel>
      </Desktop>

      <Mobile>
        <AuthStyleWrapper.M.FormPanel>
          <AuthSignInFormPanel />
        </AuthStyleWrapper.M.FormPanel>
      </Mobile>
    </AuthStyleWrapper>
  );
}
