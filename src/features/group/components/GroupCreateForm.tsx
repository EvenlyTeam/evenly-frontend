import { Button, Chip, Input, TextField } from '@/components';

export function GroupCreateForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex size-full flex-col lg:h-auto lg:w-150 lg:rounded-card lg:bg-surface lg:p-10 lg:shadow-card"
    >
      <header className="hidden lg:block">
        <h2 className="text-heading-lg font-semibold text-foreground">
          모임 정보
        </h2>
        <p className="mt-1.5 mb-7 text-body-md text-muted-foreground">
          모임 이름과 함께 정산할 사람을 추가하세요
        </p>
      </header>

      <TextField
        label="모임 이름"
        id="group-name"
        placeholder="모임 이름을 입력하세요"
      />

      <div className="mt-6">
        <label
          htmlFor="participant-name"
          className="mb-2 flex items-center gap-1.5 text-label text-muted-foreground"
        >
          참여자
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-preview-surface px-1.5 text-label font-semibold text-preview-foreground">
            5
          </span>
        </label>

        <div className="flex gap-2">
          <Input
            id="participant-name"
            className="min-w-0 flex-1"
            placeholder="참여자 이름 입력"
          />
          <Button type="button" size="md" className="shrink-0">
            추가
          </Button>
        </div>
        <p className="mt-2 text-caption text-subtle-foreground">
          Enter로 빠르게 추가할 수 있어요
        </p>

        <ul className="mt-3.5 flex flex-wrap gap-2">
          <li>
            <Chip variant="highlight">
              준호<span className="font-medium opacity-70"> · 나</span>
            </Chip>
          </li>
          <li>
            <Chip onRemove={() => {}}>민지</Chip>
          </li>
          <li>
            <Chip onRemove={() => {}}>서연</Chip>
          </li>
          <li>
            <Chip onRemove={() => {}}>태우</Chip>
          </li>
          <li>
            <Chip onRemove={() => {}}>지훈</Chip>
          </li>
        </ul>
      </div>

      <div className="mt-auto pt-6 lg:mt-9 lg:pt-0">
        <Button type="submit" size="lg" className="w-full">
          모임 만들기
        </Button>
      </div>
    </form>
  );
}
