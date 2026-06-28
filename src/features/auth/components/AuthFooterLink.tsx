interface AuthFooterLinkProps {
  message: string;
  linkText: string;
  href: string;
}

export function AuthFooterLink({
  message,
  linkText,
  href,
}: AuthFooterLinkProps) {
  return (
    <p className="mt-5.5 text-center text-body-sm text-muted-foreground">
      {message}
      <a
        href={href}
        className="ml-1.5 cursor-pointer font-semibold text-primary"
      >
        {linkText}
      </a>
    </p>
  );
}
