import { Avatar as AvatarBase } from '@/components';
import { createCompoundGuard } from '@/utils/createCompoundGuard';
import { getInitial } from '@/utils/getInitial';

const Guard = createCompoundGuard('ExpenseListItem');

interface AvatarProps {
  name: string;
}

export function Avatar({ name }: AvatarProps) {
  Guard.useGuard('Avatar');
  return <AvatarBase size="lg" text={getInitial(name)} />;
}
