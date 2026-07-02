import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

interface GroupInfoProps {
  participantCount: number;
  date: string;
}

export function GroupInfo({ participantCount, date }: GroupInfoProps) {
  Guard.useGuard('GroupInfo');

  return (
    <div className="self-end text-body-sm text-subtle-foreground">
      {`${participantCount}명 · ${date}`}
    </div>
  );
}
