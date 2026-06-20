import AuthHeader from '../components/AuthHeader';
import AuthSignInForm from '../components/AuthSignInForm';

const SignInPage = () => {
  return (
    <main className="min-h-dvh px-6">
      <div className="w-full pt-20">
        <AuthHeader subtitle="모임 정산을 깔끔하게" />

        <AuthSignInForm />
      </div>

      <p className="mt-5.5 text-center text-body-sm text-muted-foreground">
        계정이 없나요?
        <a
          href="#"
          className="ml-1.5 cursor-pointer font-semibold text-primary"
        >
          회원가입
        </a>
      </p>
    </main>
  );
};

export default SignInPage;
