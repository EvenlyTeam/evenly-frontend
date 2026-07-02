import { Avatar as AvatarBase } from '@/components';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('ExpenseListItem');

export function Avatar({ name }: { name: string }) {
  Guard.useGuard('Avatar');
  return <AvatarBase size="lg" text={name.charAt(0)} />;
}
