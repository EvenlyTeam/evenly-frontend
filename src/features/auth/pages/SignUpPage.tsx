import AuthHeader from '../components/AuthHeader';
import AuthSignUpForm from '../components/AuthSignUpForm';

const SignUpPage = () => {
  return (
    <main className="min-h-dvh px-6">
      <div className="w-full pt-20">
        <AuthHeader subtitle="새 계정 만들기" />

        <AuthSignUpForm />
      </div>

      <p className="mt-5.5 text-center text-body-sm text-muted-foreground">
        이미 계정이 있으신가요?
        <a
          href="#"
          className="ml-1.5 cursor-pointer font-semibold text-primary"
        >
          로그인
        </a>
      </p>
    </main>
  );
};

export default SignUpPage;
