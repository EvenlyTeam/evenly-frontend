import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('ExpenseListItem');

export function Content({
  description,
  meta,
}: {
  description: string;
  meta: string;
}) {
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
