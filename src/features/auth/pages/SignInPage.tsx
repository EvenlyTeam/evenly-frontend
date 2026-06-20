import AuthHeader from '../components/AuthHeader';
import AuthInput from '../components/AuthInput';

const SignInPage = () => {
  return (
    <main className="min-h-dvh px-6">
      <div className="w-full pt-20">
        <AuthHeader subtitle="모임 정산을 깔끔하게" />

        <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <AuthInput
              label="이메일"
              id="email"
              type="email"
              autoComplete="email"
              placeholder="evenly@example.com"
            />
            <AuthInput
              label="비밀번호"
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="비밀번호"
            />
          </div>

          <p className="mt-2.5 flex justify-end">
            <a
              href="#"
              className="cursor-pointer text-body-sm font-medium text-primary"
            >
              비밀번호를 잊으셨나요?
            </a>
          </p>

          <button
            type="submit"
            className="mt-6 h-13 w-full cursor-pointer rounded-button bg-primary text-heading-sm leading-none text-on-primary hover:bg-primary-hover active:bg-primary-hover"
          >
            로그인
          </button>
        </form>
      </div>

      <p className=" mt-5.5 text-center text-body-sm text-muted-foreground">
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
