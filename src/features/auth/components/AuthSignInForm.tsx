import { AuthInput } from './AuthInput';

export function AuthSignInForm() {
  return (
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
  );
}
