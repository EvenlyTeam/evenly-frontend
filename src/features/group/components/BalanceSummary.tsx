import { Amount, Button } from '@/components';
import { cn } from '@/utils/cn';

import { BalanceBar } from './BalanceBar';

interface Balance {
  name: string;
  amount: number;
}

const myBalance = 142000;
const total = 196500;
const balances: Balance[] = [
  { name: '준호', amount: 142000 },
  { name: '민지', amount: 22000 },
  { name: '서연', amount: -66000 },
  { name: '태우', amount: -98000 },
];

const maxAbs = Math.max(...balances.map((b) => Math.abs(b.amount)), 1);
const isReceiving = myBalance >= 0;

export function BalanceSummary() {
  return (
    <div className="rounded-card border border-border-subtle bg-surface p-6 shadow-card">
      <p className="text-body-sm text-muted-foreground">내 잔액</p>

      <div className="mt-1.5 flex items-baseline gap-1.5">
        <Amount value={myBalance} signed className="text-display" />
        <span
          className={cn(
            'text-caption font-medium',
            isReceiving ? 'text-positive' : 'text-negative',
          )}
        >
          {isReceiving ? '받을 돈' : '줄 돈'}
        </span>
      </div>

      <hr className="mt-5 mb-4 border-border-subtle" />

      <div className="mt-3 flex items-center justify-between border-t border-border-subtle pt-3">
        <span className="text-body-sm text-subtle-foreground">총 지출</span>
        <Amount value={total} className="text-body-md font-semibold" />
      </div>

      <h2 className="mt-6 mb-4 text-body-lg font-semibold text-foreground">
        참여자별 순잔액
      </h2>

      <div className="flex flex-col gap-3.5">
        {balances.map((balance) => (
          <BalanceBar
            key={balance.name}
            name={balance.name}
            amount={balance.amount}
            percent={(Math.abs(balance.amount) / maxAbs) * 100}
          />
        ))}
      </div>

      <hr className="mt-5 mb-4 border-border-subtle" />

      <Button size="md" className="w-full">
        정산 결과 보기
      </Button>
      <Button variant="secondary" size="md" className="mt-2 w-full">
        정산 완료로 표시하기
      </Button>
    </div>
  );
}
