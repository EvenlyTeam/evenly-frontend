import { AuthFooterLink } from './AuthFooterLink';
import { AuthHeader } from './AuthHeader';
import { AuthSignUpForm } from './AuthSignUpForm';

export function AuthSignUpFormPanel() {
  return (
    <>
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
    </>
  );
}
