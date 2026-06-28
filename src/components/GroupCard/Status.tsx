import { cn } from '@/utils/cn';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

const statusStyles = {
  ongoing: 'bg-primary/12 text-primary',
  settled: 'bg-positive-surface text-settled',
};

const statusLabel = {
  ongoing: '진행 중',
  settled: '정산 완료',
};

export function Status({ status }: { status: 'ongoing' | 'settled' }) {
  Guard.useGuard('Status');

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-badge px-2 py-1.25 text-label leading-none',
        statusStyles[status],
      )}
    >
      {statusLabel[status]}
    </span>
  );
}
