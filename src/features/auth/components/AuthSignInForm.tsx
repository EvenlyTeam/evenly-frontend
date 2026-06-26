import { Button, TextField } from '@/components';

export function AuthSignInForm() {
  return (
    <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <TextField
          label="이메일"
          id="email"
          type="email"
          autoComplete="email"
          placeholder="evenly@example.com"
        />
        <TextField
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

      <Button type="submit" size="lg" className="mt-6 w-full">
        로그인
      </Button>
    </form>
  );
}
