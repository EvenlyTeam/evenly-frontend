import {
  AuthFooterLink,
  AuthHeader,
  AuthLayout,
  AuthSignInForm,
} from '../components';

export function SignInPage() {
  return (
    <AuthLayout>
      <>
        <div className="w-full pt-20">
          <div className="lg:hidden">
            <AuthHeader viewType="mobile" subtitle="모임 정산을 깔끔하게" />
          </div>

          <div className="hidden lg:block">
            <AuthHeader
              viewType="desktop"
              title="로그인"
              subtitle="다시 오신 걸 환영해요"
            />
          </div>
          <AuthSignInForm />
        </div>

        <AuthFooterLink
          message="아직 계정이 없으신가요?"
          linkText="회원가입"
          href="#"
        />
      </>
    </AuthLayout>
  );
}
