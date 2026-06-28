import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

export /**
 * @TODO: 날짜 문자열 포맷 미정
 */
function Detail({
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
