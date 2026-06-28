import { Button, TextField } from '@/components';

export function AuthSignUpForm() {
  return (
    <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <TextField label="닉네임" id="nickname" placeholder="Evenely" />
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
          autoComplete="new-password"
          placeholder="8자 이상 입력하세요"
        />
        <TextField
          label="비밀번호 확인"
          id="passwordConfirm"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 다시 입력하세요"
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        회원가입
      </Button>
    </form>
  );
}
