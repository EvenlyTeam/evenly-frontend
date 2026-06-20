import AuthInput from './AuthInput';

const AuthSignUpForm = () => {
  return (
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
  );
};

export default AuthSignUpForm;
