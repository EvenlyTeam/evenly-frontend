import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

/**
 * @TODO: 날짜 문자열 포맷 미정
 */
export function Detail({
  attendeeCount,
  date,
  className = '',
}: {
  attendeeCount: number;
  date: string;
  className?: string;
}) {
  Guard.useGuard('Detail');

  return (
    <div className={`text-body-sm text-subtle-foreground ${className}`}>
      {`${attendeeCount}명 · ${date}`}
    </div>
  );
}
