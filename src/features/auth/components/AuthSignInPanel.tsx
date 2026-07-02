import { useIsDesktop } from '@/hooks/useIsDesktop';

import { AuthFooterLink } from './AuthFooterLink';
import { AuthHeader } from './AuthHeader';
import { AuthSignInForm } from './AuthSignInForm';

export function AuthSignInPanel() {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? (
        <AuthHeader
          viewType="desktop"
          title="로그인"
          subtitle="다시 오신 걸 환영해요"
        />
      ) : (
        <AuthHeader viewType="mobile" subtitle="모임 정산을 깔끔하게" />
      )}

      <AuthSignInForm />

      <AuthFooterLink
        message="아직 계정이 없으신가요?"
        linkText="회원가입"
        href="#"
      />
    </>
  );
}
