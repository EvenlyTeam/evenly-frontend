import { useIsDesktop } from '@/hooks/useIsDesktop';

import { AuthFooterLink } from './AuthFooterLink';
import { AuthHeader } from './AuthHeader';
import { AuthSignUpForm } from './AuthSignUpForm';

export function AuthSignUpPanel() {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? (
        <AuthHeader
          viewType="desktop"
          title="새 계정 만들기"
          subtitle="몇 가지만 입력하면 끝나요"
        />
      ) : (
        <AuthHeader viewType="mobile" subtitle="새 계정 만들기" />
      )}
      <AuthSignUpForm />

      <AuthFooterLink
        message="이미 계정이 있으신가요?"
        linkText="로그인"
        href="#"
      />
    </>
  );
}
