import clsx from 'clsx';

interface AuthHeaderProps {
  viewType: 'mobile' | 'desktop';
  title?: string;
  subtitle: string;
}

const AuthHeader = ({
  viewType,
  title = 'evenly',
  subtitle,
}: AuthHeaderProps) => {
  return (
    <header className={clsx({ 'text-center': viewType === 'mobile' })}>
      <p
        className={clsx('text-display leading-none font-semibold', {
          'text-primary': viewType === 'mobile',
          'text-foreground': viewType === 'desktop',
        })}
      >
        {title}
      </p>
      <p
        className={clsx('mt-2.5 text-muted-foreground', {
          'text-body-sm': viewType === 'mobile',
          'text-body-md': viewType === 'desktop',
        })}
      >
        {subtitle}
      </p>{' '}
    </header>
  );
};

export default AuthHeader;
