import AuthFooterLink from '../components/AuthFooterLink';
import AuthHeader from '../components/AuthHeader';
import AuthSignInForm from '../components/AuthSignInForm';

const SignInPage = () => {
  return (
    <main className="min-h-dvh px-6">
      <div className="w-full pt-20">
        <AuthHeader subtitle="모임 정산을 깔끔하게" />
        <AuthSignInForm />
      </div>

      <AuthFooterLink
        message="아직 계정이 없으신가요?"
        linkText="회원가입"
        href="#"
      />
    </main>
  );
};

export default SignInPage;
