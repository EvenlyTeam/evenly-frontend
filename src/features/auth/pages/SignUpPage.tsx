import AuthInput from '../components/AuthInput';

const SignUpPage = () => {
  return (
    <main className="min-h-dvh px-6">
      <div className="w-full pt-20">
        <div className="text-center">
          <p className="text-display leading-none font-semibold text-primary">
            evenly
          </p>
          <p className="mt-2.5 text-body-sm text-muted-foreground">
            새 계정 만들기
          </p>
        </div>

        <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <AuthInput label="닉네임" id="nickname" placeholder="Evenely" />
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
              autoComplete="new-password"
              placeholder="8자 이상 입력하세요"
            />
            <AuthInput
              label="비밀번호 확인"
              id="passwordConfirm"
              type="password"
              autoComplete="new-password"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>

          <button
            type="submit"
            className="mt-6 h-13 w-full cursor-pointer rounded-button bg-primary text-heading-sm leading-none text-on-primary hover:bg-primary-hover active:bg-primary-hover"
          >
            회원가입
          </button>
        </form>
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
