import { Fab } from '@/components';
import { cn } from '@/utils/cn';

import PlusIcon from '../assets/plus.svg?react';

interface CreateFabProps {
  label: string;
  className?: string;
}

export function CreateFab({ label, className }: CreateFabProps) {
  return (
    <Fab aria-label={label} className={cn('lg:hidden', className)}>
      <PlusIcon aria-hidden />
    </Fab>
  );
}
