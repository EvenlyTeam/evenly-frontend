import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

interface MetaProps {
  participantCount: number;
  date: string;
  className?: string;
}

export function Meta({ participantCount, date, className = '' }: MetaProps) {
  Guard.useGuard('Meta');

  return (
    <div className={`text-body-sm text-subtle-foreground ${className}`}>
      {`${participantCount}명 · ${date}`}
    </div>
  );
}
