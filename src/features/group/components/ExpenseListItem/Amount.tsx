import { Amount as AmountBase } from '@/components';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('ExpenseListItem');

interface AmountProps {
  value: number;
}

export function Amount({ value }: AmountProps) {
  Guard.useGuard('Amount');
  return <AmountBase value={value} className="text-body-lg font-semibold" />;
}
