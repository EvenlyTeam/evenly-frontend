import AuthFooterLink from '../components/AuthFooterLink';
import AuthHeader from '../components/AuthHeader';
import AuthSignUpForm from '../components/AuthSignUpForm';

const SignUpPage = () => {
  return (
    <main className="min-h-dvh px-6">
      <div className="w-full pt-20">
        <AuthHeader subtitle="새 계정 만들기" />
        <AuthSignUpForm />
      </div>

      <AuthFooterLink
        message="이미 계정이 있으신가요?"
        linkText="로그인"
        href="#"
      />
    </main>
  );
};

export default SignUpPage;
