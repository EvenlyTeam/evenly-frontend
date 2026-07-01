import { Amount } from '@/components';

interface SettlementTotalProps {
  value: number;
}

export function SettlementTotal({ value }: SettlementTotalProps) {
  return (
    <span className="text-body-sm text-subtle-foreground lg:text-body-lg lg:text-muted-foreground">
      총{' '}
      <Amount
        value={value}
        className="text-subtle-foreground lg:text-muted-foreground"
      />
    </span>
  );
}
