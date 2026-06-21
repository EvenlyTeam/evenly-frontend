import { AuthBrandPanel } from './AuthBrandPanel';

export function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex min-h-dvh justify-center">
      <div className="hidden lg:block lg:flex-2">
        <AuthBrandPanel />
      </div>
      <div className="max-w-140 flex-1 px-6 lg:my-auto lg:px-12">
        {children}
      </div>
    </main>
  );
}
