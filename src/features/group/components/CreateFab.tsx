import { Fab } from '@/components';
import { cn } from '@/utils/cn';

import PlusIcon from '../assets/plus.svg?react';

export function CreateFab({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <Fab aria-label={label} className={cn('lg:hidden', className)}>
      <PlusIcon aria-hidden />
    </Fab>
  );
}
