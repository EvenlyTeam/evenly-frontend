import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

/**
 * @TODO: 날짜 문자열 포맷 미정
 */
export function Detail({
  participantCount,
  date,
  className = '',
}: {
  participantCount: number;
  date: string;
  className?: string;
}) {
  Guard.useGuard('Detail');

  return (
    <div className={`text-body-sm text-subtle-foreground ${className}`}>
      {`${participantCount}명 · ${date}`}
    </div>
  );
}
