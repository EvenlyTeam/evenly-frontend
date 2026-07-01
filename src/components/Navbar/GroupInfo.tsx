import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

interface GroupInfoProps {
  attendeeCount: number;
  date: string;
}

export function GroupInfo({ attendeeCount, date }: GroupInfoProps) {
  Guard.useGuard('GroupInfo');

  return (
    <div className="self-end text-body-sm text-subtle-foreground">
      {`${attendeeCount}명 · ${date}`}
    </div>
  );
}
