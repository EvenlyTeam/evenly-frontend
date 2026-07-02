import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('GroupCard');

interface TitleProps {
  title: string;
  className?: string;
}

export function Title({ title, className = '' }: TitleProps) {
  Guard.useGuard('Title');

  return (
    <div
      className={`text-body-sm font-semibold text-foreground lg:text-body-md ${className}`}
    >
      {title}
    </div>
  );
}
