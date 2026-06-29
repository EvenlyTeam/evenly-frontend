import { Amount as AmountBase } from '@/components';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('ExpenseListItem');

export function Amount({ value }: { value: number }) {
  Guard.useGuard('Amount');
  return <AmountBase value={value} className="text-body-lg font-semibold" />;
}
