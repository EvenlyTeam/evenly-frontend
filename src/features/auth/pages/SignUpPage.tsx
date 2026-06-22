import {
  AuthBrandPanel,
  AuthFooterLink,
  AuthHeader,
  AuthSignUpForm,
  AuthStyleWrapper,
} from '../components';

export function SignUpPage() {
  return (
    <AuthStyleWrapper>
      <AuthStyleWrapper.BrandPanel>
        <AuthBrandPanel />
      </AuthStyleWrapper.BrandPanel>

      <AuthStyleWrapper.FormPanel>
        <div className="w-full pt-20">
          <div className="lg:hidden">
            <AuthHeader viewType="mobile" subtitle="새 계정 만들기" />
          </div>

          <div className="hidden lg:block">
            <AuthHeader
              viewType="desktop"
              title="새 계정 만들기"
              subtitle="몇 가지만 입력하면 끝나요"
            />
          </div>
          <AuthSignUpForm />
        </div>

        <AuthFooterLink
          message="이미 계정이 있으신가요?"
          linkText="로그인"
          href="#"
        />
      </AuthStyleWrapper.FormPanel>
    </AuthStyleWrapper>
  );
}
