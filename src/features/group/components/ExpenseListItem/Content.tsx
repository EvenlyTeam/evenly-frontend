import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('ExpenseListItem');

interface ContentProps {
  description: string;
  meta: string;
}

export function Content({ description, meta }: ContentProps) {
  Guard.useGuard('Content');
  return (
    <div className="min-w-0 flex-1">
      <div className="truncate text-body-lg font-semibold text-foreground">
        {description}
      </div>
      <div className="mt-1 truncate text-body-sm text-subtle-foreground">
        {meta}
      </div>
    </div>
  );
}
