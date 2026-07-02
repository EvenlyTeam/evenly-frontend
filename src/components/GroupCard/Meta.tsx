import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

/**
 * @TODO: 날짜 문자열 포맷 미정
 */
export function Meta({
  participantCount,
  date,
  className = '',
}: {
  participantCount: number;
  date: string;
  className?: string;
}) {
  Guard.useGuard('Meta');

  return (
    <div className={`text-body-sm text-subtle-foreground ${className}`}>
      {`${participantCount}명 · ${date}`}
    </div>
  );
}
