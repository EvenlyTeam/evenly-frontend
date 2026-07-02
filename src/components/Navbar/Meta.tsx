import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

interface MetaProps {
  participantCount: number;
  date: string;
}

export function Meta({ participantCount, date }: MetaProps) {
  Guard.useGuard('Meta');

  return (
    <div className="self-end text-body-sm text-subtle-foreground">
      {`${participantCount}명 · ${date}`}
    </div>
  );
}
