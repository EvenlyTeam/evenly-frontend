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
          <div className="space-y-2">
            <label
              htmlFor="nickname"
              className="block text-label text-muted-foreground"
            >
              닉네임
            </label>
            <input
              id="nickname"
              placeholder="Evenely"
              className="h-12 w-full rounded-input border border-border bg-input px-3.5 font-sans text-body-lg text-foreground transition-all duration-150 outline-none placeholder:text-subtle-foreground focus:border-primary focus:ring-3 focus:ring-primary/35"
            />
          </div>

          <div className="mt-4 space-y-2">
            <label
              htmlFor="email"
              className="block text-label text-muted-foreground"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="evenly@example.com"
              className="h-12 w-full rounded-input border border-border bg-input px-3.5 font-sans text-body-lg text-foreground transition-all duration-150 outline-none placeholder:text-subtle-foreground focus:border-primary focus:ring-3 focus:ring-primary/35"
            />
          </div>

          <div className="mt-4 space-y-2">
            <label
              htmlFor="password"
              className="block text-label text-muted-foreground"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="8자 이상 입력하세요"
              className="h-12 w-full rounded-input border border-border bg-input px-3.5 font-sans text-body-lg text-foreground transition-all duration-150 outline-none placeholder:text-subtle-foreground focus:border-primary focus:ring-3 focus:ring-primary/35"
            />
          </div>

          <div className="mt-4 space-y-2">
            <label
              htmlFor="passwordConfirm"
              className="block text-label text-muted-foreground"
            >
              비밀번호 확인
            </label>
            <input
              id="passwordConfirm"
              type="password"
              autoComplete="new-password"
              placeholder="비밀번호를 다시 입력하세요"
              className="h-12 w-full rounded-input border border-border bg-input px-3.5 font-sans text-body-lg text-foreground transition-all duration-150 outline-none placeholder:text-subtle-foreground focus:border-primary focus:ring-3 focus:ring-primary/35"
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
