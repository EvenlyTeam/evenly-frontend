import { cn } from '@/utils/cn';

const titleStyles = {
  mobile: 'text-primary',
  desktop: 'text-foreground',
};

const subtitleStyles = {
  mobile: 'text-body-sm',
  desktop: 'text-body-md',
};

interface AuthHeaderProps {
  viewType: 'mobile' | 'desktop';
  title?: string;
  subtitle: string;
}

export function AuthHeader({
  viewType,
  title = 'evenly',
  subtitle,
}: AuthHeaderProps) {
  return (
    <header className={cn(viewType === 'mobile' && 'text-center')}>
      <p
        className={cn(
          'text-display leading-none font-semibold',
          titleStyles[viewType],
        )}
      >
        {title}
      </p>
      <p
        className={cn('mt-2.5 text-muted-foreground', subtitleStyles[viewType])}
      >
        {subtitle}
      </p>
    </header>
  );
}
