import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

export function Title({
  title,
  className = '',
}: {
  title: string;
  className?: string;
}) {
  Guard.useGuard('Title');

  return (
    <div
      className={`text-body-sm font-semibold text-foreground lg:text-body-md ${className}`}
    >
      {title}
    </div>
  );
}
