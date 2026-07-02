import { Amount } from '@/components';

interface SettlementTotalProps {
  amount: number;
}

export function SettlementTotal({ amount }: SettlementTotalProps) {
  return (
    <span className="text-body-sm text-subtle-foreground lg:text-body-lg lg:text-muted-foreground">
      총{' '}
      <Amount
        value={amount}
        className="text-subtle-foreground lg:text-muted-foreground"
      />
    </span>
  );
}
