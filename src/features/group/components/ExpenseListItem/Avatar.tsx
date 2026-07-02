import { Avatar as AvatarBase } from '@/components';
import { createCompoundGuard } from '@/utils/createCompoundGuard';
import { getInitial } from '@/utils/getInitial';

const Guard = createCompoundGuard('ExpenseListItem');

export function Avatar({ name }: { name: string }) {
  Guard.useGuard('Avatar');
  return <AvatarBase size="lg" text={getInitial(name)} />;
}
