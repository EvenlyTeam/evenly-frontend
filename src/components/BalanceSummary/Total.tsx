import { Amount } from '../Amount';

interface TotalProps {
  amount: number;
}

export function Total({ amount }: TotalProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-body-sm text-subtle-foreground">총 지출</span>
      <Amount value={amount} className="text-body-md font-semibold" />
    </div>
  );
}
