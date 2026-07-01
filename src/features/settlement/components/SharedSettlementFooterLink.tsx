interface SharedFooterLinkProps {
  text: string;
  href: string;
}

export function SharedSettlementFooterLink({
  text,
  href,
}: SharedFooterLinkProps) {
  return (
    <a
      href={href}
      className="cursor-pointer text-body-sm font-semibold text-primary"
    >
      {text}
    </a>
  );
}
