import { Amount } from '@/components';
import { cn } from '@/utils/cn';

interface BalanceBarProps {
  name: string;
  amount: number;
  percent: number;
}

export function BalanceBar({ name, amount, percent }: BalanceBarProps) {
  const isPositive = amount >= 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-body-lg font-medium text-foreground">{name}</span>
        <Amount value={amount} signed className="text-body-lg font-semibold" />
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-surface-muted">
        {/* @TODO: rechart로 리팩터링 예정 */}
        <div
          className={cn(
            'h-full rounded-full',
            isPositive ? 'bg-positive' : 'bg-negative',
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
