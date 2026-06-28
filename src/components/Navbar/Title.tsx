import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

export function Title({ title }: { title: string }) {
  Guard.useGuard('Title');

  return (
    <h1 className="min-w-0 flex-1 truncate text-heading-md leading-none font-semibold text-foreground lg:text-heading-lg">
      {title}
    </h1>
  );
}
