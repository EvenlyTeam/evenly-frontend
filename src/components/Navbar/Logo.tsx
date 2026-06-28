import { createCompoundGuard } from '@/utils/createCompoundGuard';

const Guard = createCompoundGuard('Navbar');

export function Logo() {
  Guard.useGuard('Logo');

  return (
    <div className="text-heading-md font-semibold text-primary lg:text-heading-lg">
      evenly
    </div>
  );
}
