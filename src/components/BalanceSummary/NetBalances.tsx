import { BalanceBar } from '../BalanceBar';

export interface Balance {
  name: string;
  amount: number;
}

interface NetBalancesProps {
  balances: Balance[];
}

export function NetBalances({ balances }: NetBalancesProps) {
  const maxAbs = Math.max(...balances.map((b) => Math.abs(b.amount)), 1);

  return (
    <div>
      <h2 className="mb-4 text-body-lg font-semibold text-foreground">
        참여자별 순잔액
      </h2>

      <div className="flex flex-col gap-3.5">
        {balances.map((balance) => (
          <BalanceBar
            key={balance.name}
            name={balance.name}
            amount={balance.amount}
            maxAbs={maxAbs}
          />
        ))}
      </div>
    </div>
  );
}
