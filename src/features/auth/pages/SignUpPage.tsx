import { Desktop, Mobile } from '@/components';

import {
  AuthBrandPanel,
  AuthSignUpFormPanel,
  AuthStyleWrapper,
} from '../components';

export function SignUpPage() {
  return (
    <AuthStyleWrapper>
      <Desktop>
        <AuthStyleWrapper.D.BrandPanel>
          <AuthBrandPanel />
        </AuthStyleWrapper.D.BrandPanel>

        <AuthStyleWrapper.D.FormPanel>
          <AuthSignUpFormPanel />
        </AuthStyleWrapper.D.FormPanel>
      </Desktop>

      <Mobile>
        <AuthStyleWrapper.M.FormPanel>
          <AuthSignUpFormPanel />
        </AuthStyleWrapper.M.FormPanel>
      </Mobile>
    </AuthStyleWrapper>
  );
}
