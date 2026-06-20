interface AuthHeaderProps {
  subtitle: string;
}

const AuthHeader = ({ subtitle }: AuthHeaderProps) => {
  return (
    <header className="text-center">
      <p className="text-display leading-none font-semibold text-primary">
        evenly
      </p>
      <p className="mt-2.5 text-body-sm text-muted-foreground">{subtitle}</p>
    </header>
  );
};

export default AuthHeader;
