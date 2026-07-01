import { cn } from '@/utils/cn';

import { Amount } from '../Amount';

interface MyBalanceProps {
  amount: number;
}

export function MyBalance({ amount }: MyBalanceProps) {
  const isReceiving = amount >= 0;

  return (
    <div>
      <p className="text-body-sm text-muted-foreground">내 잔액</p>

      <div className="mt-1.5 flex items-baseline gap-1.5">
        <Amount value={amount} signed className="text-display" />
        <span
          className={cn(
            'text-caption font-medium',
            isReceiving ? 'text-positive' : 'text-negative',
          )}
        >
          {isReceiving ? '받을 돈' : '줄 돈'}
        </span>
      </div>
    </div>
  );
}
